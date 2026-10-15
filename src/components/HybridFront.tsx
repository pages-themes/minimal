import { useEffect, useRef, useState } from "react";

/*
 * A toy SRCM running in the browser: a Fisher–KPP front (A -> 2A, 2A -> A)
 * on K compartments. Each compartment holds discrete particles n[k] and
 * continuous PDE mass u[k] (in particle units). Particles evolve by
 * tau-leaping; the PDE by explicit Euler. Mass converts between the regimes
 * across a threshold with a small hysteresis band, and sub-particle PDE mass
 * below the threshold is absorbed stochastically (a Brunet–Derrida-style
 * cleanup). It is a simplified illustration, not the srcm solver.
 *
 * The front runs left to right; once the domain is full it pauses and starts
 * again. Clicking a compartment drops a burst of particles there.
 */

const K = 64;
const CAP = 100; // carrying capacity per compartment
const THETA = 35; // convert-down threshold
const THETA_UP = THETA + 5; // convert-up threshold (hysteresis)
const R = 1; // growth rate
const HOP = 3; // hop rate per direction
const GAMMA = 2; // conversion rate
const DT = 0.02;
const STEPS_PER_FRAME = 1;
const FULL_AT = 0.97; // fraction of occupied compartments that counts as "full"
const HOLD_FRAMES = 60; // pause once full before starting again
const DROP = 12; // particles added per click

const PAD_X = 10;
const HIDDEN_KEY = "hybridFront.hidden"; // remembers a visitor's hide choice

function readHidden(): boolean {
  try {
    return localStorage.getItem(HIDDEN_KEY) === "1";
  } catch {
    return false;
  }
}

function writeHidden(hidden: boolean): void {
  try {
    if (hidden) localStorage.setItem(HIDDEN_KEY, "1");
    else localStorage.removeItem(HIDDEN_KEY);
  } catch {
    // storage unavailable (private mode etc.): the choice just isn't remembered
  }
}

interface Sim {
  n: Int32Array;
  u: Float64Array;
  t: number;
}

function gauss(): number {
  let a = 0;
  while (a === 0) a = Math.random();
  return Math.sqrt(-2 * Math.log(a)) * Math.cos(2 * Math.PI * Math.random());
}

function poisson(lambda: number): number {
  if (lambda <= 0) return 0;
  if (lambda > 30) return Math.max(0, Math.round(lambda + Math.sqrt(lambda) * gauss()));
  const L = Math.exp(-lambda);
  let k = 0;
  let p = 1;
  do {
    k++;
    p *= Math.random();
  } while (p > L);
  return k - 1;
}

function createSim(): Sim {
  const n = new Int32Array(K);
  const u = new Float64Array(K);
  for (let k = 0; k < 4; k++) u[k] = CAP;
  return { n, u, t: 0 };
}

/** True once almost every compartment is near carrying capacity. */
function isFull(sim: Sim): boolean {
  let filled = 0;
  for (let k = 0; k < K; k++) if (sim.n[k] + sim.u[k] > CAP * 0.8) filled++;
  return filled >= K * FULL_AT;
}

function step(sim: Sim): void {
  const { n, u } = sim;
  const du = new Float64Array(K);
  const dn = new Int32Array(K);

  for (let k = 0; k < K; k++) {
    // PDE: diffusion (zero-flux) + logistic growth on the combined mass
    const left = u[k > 0 ? k - 1 : k];
    const right = u[k < K - 1 ? k + 1 : k];
    const m = n[k] + u[k];
    du[k] += DT * (HOP * (left - 2 * u[k] + right) + R * u[k] * (1 - m / CAP));

    // Particles: births, competition deaths, hops
    const nk = n[k];
    if (nk === 0) continue;
    const births = poisson(R * nk * DT);
    const deaths = Math.min(nk, poisson(((R * nk * m) / CAP) * DT));
    dn[k] += births - deaths;
    const p = HOP * DT;
    for (let i = 0; i < nk - deaths; i++) {
      const x = Math.random();
      if (x < p && k > 0) {
        dn[k]--;
        dn[k - 1]++;
      } else if (x < 2 * p && x >= p && k < K - 1) {
        dn[k]--;
        dn[k + 1]++;
      }
    }
  }

  for (let k = 0; k < K; k++) {
    u[k] = Math.max(0, u[k] + du[k]);
    n[k] = Math.max(0, n[k] + dn[k]);

    // Regime conversion
    const m = n[k] + u[k];
    if (m > THETA_UP && n[k] > 0) {
      let moved = 0;
      for (let i = 0; i < n[k]; i++) if (Math.random() < GAMMA * DT) moved++;
      n[k] -= moved;
      u[k] += moved;
    } else if (m < THETA) {
      if (u[k] >= 1) {
        if (Math.random() < GAMMA * DT * u[k]) {
          u[k] -= 1;
          n[k] += 1;
        }
      } else if (u[k] > 0) {
        // Cleanup: sub-particle PDE mass becomes a particle with probability u
        if (Math.random() < u[k]) n[k] += 1;
        u[k] = 0;
      }
    }
  }
  sim.t += DT;
}

interface Palette {
  ssa: string;
  pde: string;
  threshold: string;
  ink3: string;
  line: string;
  accent: string;
}

function readPalette(): Palette {
  const s = getComputedStyle(document.documentElement);
  const v = (name: string) => s.getPropertyValue(name).trim();
  return {
    ssa: v("--ssa"),
    pde: v("--pde"),
    threshold: v("--threshold"),
    ink3: v("--ink-3"),
    line: v("--line"),
    accent: v("--accent"),
  };
}

/** Compartment under a canvas x coordinate (CSS pixels), or -1 if outside. */
function compartmentAt(canvas: HTMLCanvasElement, clientX: number): number {
  const rect = canvas.getBoundingClientRect();
  const cw = (rect.width - PAD_X * 2) / K;
  const k = Math.floor((clientX - rect.left - PAD_X) / cw);
  return k >= 0 && k < K ? k : -1;
}

function draw(canvas: HTMLCanvasElement, sim: Sim, pal: Palette, hover: number): void {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const dpr = window.devicePixelRatio || 1;
  const w = canvas.width / dpr;
  const h = canvas.height / dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, w, h);

  const top = 14;
  const base = h - 18;
  const yMax = CAP * 1.12;
  const cw = (w - PAD_X * 2) / K;
  const y = (v: number) => base - (v / yMax) * (base - top);

  // Hovered compartment: where a click will drop particles
  if (hover >= 0) {
    ctx.globalAlpha = 0.12;
    ctx.fillStyle = pal.accent;
    ctx.fillRect(PAD_X + hover * cw, top, cw, base - top);
    ctx.globalAlpha = 1;
  }

  // Baseline
  ctx.strokeStyle = pal.line;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(PAD_X, base + 0.5);
  ctx.lineTo(w - PAD_X, base + 0.5);
  ctx.stroke();

  // Particle bars (SSA regime)
  ctx.fillStyle = pal.ssa;
  for (let k = 0; k < K; k++) {
    const nk = sim.n[k];
    if (nk <= 0) continue;
    const x = PAD_X + k * cw + cw * 0.12;
    ctx.fillRect(x, y(nk), cw * 0.76, base - y(nk));
  }

  // PDE curve (deterministic regime), smoothed through compartment centres
  const pts: [number, number][] = [];
  for (let k = 0; k < K; k++) pts.push([PAD_X + (k + 0.5) * cw, y(sim.u[k])]);
  ctx.beginPath();
  ctx.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length - 1; i++) {
    const xc = (pts[i][0] + pts[i + 1][0]) / 2;
    const yc = (pts[i][1] + pts[i + 1][1]) / 2;
    ctx.quadraticCurveTo(pts[i][0], pts[i][1], xc, yc);
  }
  ctx.lineTo(pts[pts.length - 1][0], pts[pts.length - 1][1]);
  ctx.strokeStyle = pal.pde;
  ctx.lineWidth = 2.5;
  ctx.lineJoin = "round";
  ctx.stroke();
  // soft fill under the PDE curve
  ctx.lineTo(pts[pts.length - 1][0], base);
  ctx.lineTo(pts[0][0], base);
  ctx.closePath();
  ctx.globalAlpha = 0.08;
  ctx.fillStyle = pal.pde;
  ctx.fill();
  ctx.globalAlpha = 1;

  // Conversion threshold
  ctx.setLineDash([5, 4]);
  ctx.strokeStyle = pal.threshold;
  ctx.lineWidth = 1.4;
  ctx.beginPath();
  ctx.moveTo(PAD_X, y(THETA));
  ctx.lineTo(w - PAD_X, y(THETA));
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = pal.threshold;
  ctx.font = "11px 'Geist Mono', monospace";
  ctx.fillText("threshold", w - PAD_X - 62, y(THETA) - 6);
}

export function HybridFront() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const timeRef = useRef<HTMLSpanElement>(null);
  // Mutable simulation state lives in refs: it changes every frame and must
  // not trigger React renders.
  const simRef = useRef<Sim | null>(null);
  const paletteRef = useRef<Palette | null>(null);
  const hoverRef = useRef(-1);
  const [playing, setPlaying] = useState(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [hidden, setHidden] = useState(readHidden);

  const toggleHidden = () => {
    setHidden((h) => {
      writeHidden(!h);
      return !h;
    });
  };

  const redraw = () => {
    if (canvasRef.current && simRef.current && paletteRef.current)
      draw(canvasRef.current, simRef.current, paletteRef.current, hoverRef.current);
  };

  // Canvas sizing + theme palette
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (!simRef.current) simRef.current = createSim();
    paletteRef.current = readPalette();

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      redraw();
    };
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const scheme = window.matchMedia("(prefers-color-scheme: dark)");
    const onScheme = () => {
      paletteRef.current = readPalette();
      resize();
    };
    scheme.addEventListener("change", onScheme);
    return () => {
      ro.disconnect();
      scheme.removeEventListener("change", onScheme);
    };
  }, []);

  // Animation loop: only while playing, shown, on screen and the tab is visible
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !playing || hidden) return;
    let raf = 0;
    let onScreen = true;
    let frame = 0;
    let held = 0;

    const tick = () => {
      let sim = simRef.current;
      const pal = paletteRef.current;
      if (sim && pal) {
        for (let i = 0; i < STEPS_PER_FRAME; i++) step(sim);
        // Once the domain has filled up, pause briefly, then start a new run.
        if (isFull(sim)) {
          if (++held > HOLD_FRAMES) {
            held = 0;
            sim = simRef.current = createSim();
          }
        } else {
          held = 0;
        }
        draw(canvas, sim, pal, hoverRef.current);
        if (++frame % 6 === 0 && timeRef.current) timeRef.current.textContent = sim.t.toFixed(1);
      }
      raf = requestAnimationFrame(tick);
    };
    const start = () => {
      if (!raf && onScreen && !document.hidden) raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const io = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      if (onScreen) start();
      else stop();
    });
    io.observe(canvas);
    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVisibility);
    start();

    return () => {
      stop();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [playing, hidden]);

  const onPointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const k = compartmentAt(e.currentTarget, e.clientX);
    if (k !== hoverRef.current) {
      hoverRef.current = k;
      if (!playing) redraw();
    }
  };
  const onPointerLeave = () => {
    hoverRef.current = -1;
    if (!playing) redraw();
  };
  const onPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const sim = simRef.current;
    const k = compartmentAt(e.currentTarget, e.clientX);
    if (!sim || k < 0) return;
    // A burst of particles, mostly in the clicked compartment
    sim.n[k] += DROP;
    if (k > 0) sim.n[k - 1] += Math.round(DROP / 3);
    if (k < K - 1) sim.n[k + 1] += Math.round(DROP / 3);
    redraw();
  };

  const restart = () => {
    simRef.current = createSim();
    redraw();
    if (timeRef.current) timeRef.current.textContent = simRef.current.t.toFixed(1);
  };

  return (
    <figure className="card sim-card" data-hidden={hidden} style={{ margin: 0 }}>
      <figcaption className="sim-head">
        <span className="sim-title">live · fisher–kpp front</span>
        <span className="sim-head-actions">
          <span className="sim-hint">click to drop particles</span>
          <button
            type="button"
            className="sim-toggle"
            onClick={toggleHidden}
            aria-expanded={!hidden}
            aria-controls="sim-body"
          >
            {hidden ? "Show" : "Hide"}
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
              <path d="M3 4.5 6 7.5 9 4.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </span>
      </figcaption>
      {/* Collapses to just the header; inert keeps hidden controls out of the tab order */}
      <div className="sim-body" id="sim-body" inert={hidden}>
        <div className="sim-body-inner">
          <canvas
            ref={canvasRef}
            className="sim-canvas"
            role="img"
            aria-label="Interactive hybrid simulation: a front travelling left to right, its sparse leading edge drawn as particle bars and its dense bulk as a smooth PDE curve, with a dashed conversion threshold. Click a compartment to add particles."
            onPointerMove={onPointerMove}
            onPointerLeave={onPointerLeave}
            onPointerDown={onPointerDown}
          />
          <div className="sim-legend">
            <span>
              <i className="swatch swatch-ssa" /> particles (stochastic)
            </span>
            <span>
              <i className="swatch swatch-pde" /> PDE (deterministic)
            </span>
            <span>
              <i className="swatch swatch-thr" /> conversion threshold
            </span>
          </div>
          <div className="sim-foot">
            <span>
              A simplified SRCM running in your browser · t = <span ref={timeRef}>0.0</span>
            </span>
            <span style={{ display: "flex", gap: 6 }}>
              <button type="button" onClick={() => setPlaying((p) => !p)}>
                {playing ? "Pause" : "Play"}
              </button>
              <button type="button" onClick={restart}>
                Restart
              </button>
            </span>
          </div>
        </div>
      </div>
    </figure>
  );
}
