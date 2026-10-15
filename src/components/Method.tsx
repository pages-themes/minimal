import { useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { ArrowIcon } from "./icons";
import { LINKS } from "../content";

const SCHEMATIC = {
  src: "/figures/schematic_new.png",
  alt: "Schematic of the SRCM: a continuous PDE profile above a conversion threshold, discrete particle blocks below it, with arrows for conversion in both directions.",
};

interface Result {
  label: string;
  title: string;
  caption: string;
  src: string;
  alt: string;
}

const RESULTS: Result[] = [
  {
    label: "Fronts",
    title: "The hybrid tracks the stochastic model",
    caption:
      "A Fisher–KPP front: the hybrid's combined profile follows the pure SSA, with particles at the sparse edge and the PDE in the bulk.",
    src: "/figures/fisher_1.png",
    alt: "Fisher–KPP snapshot comparing hybrid SSA bars, hybrid PDE, the combined profile, a pure PDE and a pure SSA, with the threshold marked.",
  },
  {
    label: "Wavespeed",
    title: "It keeps the stochastic wavespeed",
    caption:
      "Noise at the leading edge slows a pulled front below the PDE's prediction. The hybrid reproduces the SSA's slower speed, which the pure PDE misses.",
    src: "/figures/Wavespeed.png",
    alt: "Wavespeed over time: the PDE approaches the theoretical maximum while the SSA and hybrid settle at a lower speed.",
  },
  {
    label: "Cost",
    title: "Cost stays flat as numbers grow",
    caption:
      "The SSA's cost grows with the number of particles; the hybrid's stays roughly flat once the bulk is above the threshold. At low populations the plain SSA can be faster.",
    src: "/figures/efficiency.png",
    alt: "Time per repeat against maximum concentration: the SSA grows steeply while the hybrid stays near constant, apart from a bump near the threshold.",
  },
];

export function Method() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState<Result | null>(null);

  const show = (r: Result) => {
    setOpen(r);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();

  return (
    <section className="section" id="research">
      <div className="wrap">
        <div className="research-grid">
          <Reveal className="research-copy">
            <p className="eyebrow">Research</p>
            <h2>The Spatial Regime Conversion Method</h2>
            <p>
              A hybrid method that runs a stochastic simulation and a PDE on the same domain at the same
              time. Where a species is sparse, individual particles are simulated; where it is dense, a
              PDE takes over. Mass converts between the two across a density threshold, so each region
              gets the cheapest description that is still accurate.
            </p>
            <a className="btn" href={LINKS.paper} target="_blank" rel="noreferrer">
              Read the paper {ArrowIcon}
            </a>
          </Reveal>
          <Reveal delay={100}>
            <figure className="card research-figure">
              <img src={SCHEMATIC.src} alt={SCHEMATIC.alt} loading="lazy" />
            </figure>
          </Reveal>
        </div>

        <ul className="results">
          {RESULTS.map((r, i) => (
            <Reveal as="li" key={r.src} delay={i * 80}>
              <button type="button" className="card result" onClick={() => show(r)}>
                <span className="result-thumb">
                  <img src={r.src} alt={r.alt} loading="lazy" />
                </span>
                <span className="result-label">{r.label}</span>
                <span className="result-title">{r.title}</span>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      {/* Enlarged figure; Esc or a click outside closes it */}
      <dialog
        ref={dialogRef}
        className="lightbox"
        onClose={() => setOpen(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        {open ? (
          <div className="lightbox-inner">
            <button type="button" className="lightbox-close" onClick={close} aria-label="Close">
              ×
            </button>
            <img src={open.src} alt={open.alt} />
            <p className="result-label">{open.label}</p>
            <h3>{open.title}</h3>
            <p>{open.caption}</p>
          </div>
        ) : null}
      </dialog>
    </section>
  );
}
