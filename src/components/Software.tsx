import { useEffect, useRef, useState } from "react";
import { CopyButton } from "./CopyButton";
import { Reveal } from "./Reveal";
import { Guide } from "./Guide";
import { ArrowIcon, CheckIcon, GitHubIcon } from "./icons";
import { INSTALL, LINKS } from "../content";

const SHOTS = [
  { src: "/images/dashboard.png", alt: "The SRCM web dashboard with Fisher–KPP open: system list, model status and parameters." },
  { src: "/images/dashboard-hde.png", alt: "The dashboard's Accuracy (HDE) tab comparing cleanup modes against the SSA noise floor." },
];
const SHOT_MS = 6000;

export function Software() {
  const [shot, setShot] = useState(0);
  // Screenshots that failed to load are hidden rather than showing a broken-image icon
  const [missing, setMissing] = useState<Record<string, boolean>>({});
  const bgRef = useRef<HTMLDivElement>(null);

  // Scroll-linked reveal: --p runs from 0 (the stage's top entering the bottom
  // of the screen) to 1 (its top reaching 40% of the way down). CSS turns it
  // into a tilt that settles flat. Written straight to the DOM, once per
  // frame, so scrolling never re-renders React.
  useEffect(() => {
    const el = bgRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.6)));
      el.style.setProperty("--p", p.toFixed(3));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Advance the slideshow; restarting the timer on every change means a
  // click on a dot gets a full interval before the next slide.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => setShot((s) => (s + 1) % SHOTS.length), SHOT_MS);
    return () => window.clearTimeout(id);
  }, [shot]);

  return (
    <section className="section" id="software">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Software</p>
          <h2>SRCM as a package anyone can use</h2>
          <p>The method from the paper, as an installable Python library with a point-and-click dashboard.</p>
        </Reveal>

        <Reveal className="card showcase" delay={80}>
          {/* The package itself */}
          <div className="showcase-copy">
            <div className="repo-line">
              {GitHubIcon} Cgyc20 / srcm-project
            </div>
            <h3>srcm</h3>
            <p>
              Hybrid, pure stochastic and pure PDE solvers from one package, so every hybrid run can be
              checked against both limits.
            </p>
            <ul className="pillars">
              <li>
                {CheckIcon}
                <span>
                  <strong>Python library</strong>: build a model in a few chained calls and run it in
                  hybrid, SSA or PDE mode.
                </span>
              </li>
              <li>
                {CheckIcon}
                <span>
                  <strong>Web dashboard</strong>: run built-in or custom systems in the browser, watch
                  them animate and measure accuracy, with no code.
                </span>
              </li>
              <li>
                {CheckIcon}
                <span>
                  <strong>Reproducible</strong>: every run records its settings, and the test suite
                  checks the solver bit for bit.
                </span>
              </li>
            </ul>
            <div className="install">
              <span className="prompt">$</span>
              <code>{INSTALL}</code>
              <CopyButton text={INSTALL} />
            </div>
            <div className="hero-actions">
              <a className="btn btn-primary" href={LINKS.srcm} target="_blank" rel="noreferrer">
                {GitHubIcon} View on GitHub
              </a>
              <a className="btn" href="#guide">
                Getting started {ArrowIcon}
              </a>
            </div>
            <p className="software-secondary">
              The code used for the paper is archived separately at{" "}
              <a href={LINKS.paperCode} target="_blank" rel="noreferrer">
                Integrated-srcm-ssa
              </a>
              .
            </p>
          </div>
        </Reveal>

        {/* The dashboard in a browser window, with the terminal that launched it.
            It tips back slightly and settles flat as it scrolls into view. */}
        <div className="showcase-stage" ref={bgRef}>
          <div className="window browser-window" aria-hidden="true">
            <div className="window-bar">
              <i />
              <i />
              <i />
              <span>127.0.0.1:8000</span>
            </div>
            <div className="browser-shots">
              <div className="shots-track" style={{ transform: `translateX(-${shot * 100}%)` }}>
                {SHOTS.map((s) =>
                  missing[s.src] ? (
                    <span key={s.src} className="shot-empty" />
                  ) : (
                    <img
                      key={s.src}
                      src={s.src}
                      alt=""
                      onError={() => setMissing((m) => ({ ...m, [s.src]: true }))}
                    />
                  ),
                )}
              </div>
            </div>
          </div>
          <div className="shot-dots">
            {SHOTS.map((s, i) => (
              <button
                type="button"
                key={s.src}
                aria-label={`Show screenshot ${i + 1}`}
                aria-pressed={i === shot}
                onClick={() => setShot(i)}
              />
            ))}
          </div>
          <div className="window terminal-window" aria-hidden="true">
            <div className="window-bar">
              <i />
              <i />
              <i />
              <span>zsh — srcm-project</span>
            </div>
            <pre className="terminal-body">
              <span className="t-prompt">~/srcm-project $</span> <span className="t-cmd">uv run srcm-web</span>
              {"\n\n"}
              {"  SRCM dashboard\n"}
              {"  UI:       "}
              <span className="t-link">http://127.0.0.1:8000</span>
              {"\n  API docs: http://127.0.0.1:8000/docs\n  Stop with Ctrl+C\n"}
              <span className="t-cursor" />
            </pre>
          </div>
        </div>

        <Guide />
      </div>
    </section>
  );
}
