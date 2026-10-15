import { Reveal } from "./Reveal";
import { ArrowIcon, CheckIcon } from "./icons";

const POINTS = [
  "Hybrid, pure stochastic and pure PDE solvers from one model",
  "A browser dashboard to run, animate and compare, with no code",
  "Every run records its settings, so results can be reproduced",
];

// The home page's pointer to the separate SRCM page: text on the left, a
// small preview of the dashboard on the right.
export function SrcmTeaser() {
  return (
    <section className="section" id="software">
      <div className="wrap teaser-grid">
        <Reveal className="teaser-copy">
          <p className="eyebrow">Software</p>
          <h2>The method as software anyone can use</h2>
          <p className="teaser-lede">
            srcm packages the SRCM as a Python library with a point-and-click dashboard, so the method
            can be applied to new systems without rewriting it.
          </p>
          <ul className="teaser-points">
            {POINTS.map((p) => (
              <li key={p}>
                {CheckIcon}
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <a className="btn btn-primary" href="/srcm/">
            Explore SRCM {ArrowIcon}
          </a>
        </Reveal>
        <Reveal delay={100}>
          <a className="mini-window" href="/srcm/" aria-label="Explore SRCM">
            <span className="mini-bar">
              <i />
              <i />
              <i />
              <span>srcm-web</span>
            </span>
            <img src="/images/dashboard.png" alt="" loading="lazy" width={2300} height={1536} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
