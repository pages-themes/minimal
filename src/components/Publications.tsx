import { CopyButton } from "./CopyButton";
import { Reveal } from "./Reveal";
import { PaperIcon } from "./icons";
import { LINKS } from "../content";

const BIBTEX = `@article{Cameron2025SRCM,
  author  = {Cameron, Charlie G. and Smith, C. A. and Yates, C. A.},
  title   = {The Spatial Regime Conversion Method},
  journal = {Mathematics},
  volume  = {13},
  number  = {21},
  pages   = {3406},
  year    = {2025},
  doi     = {10.3390/math13213406}
}`;

export function Publications() {
  return (
    <section className="section" id="publications">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Publications</p>
          <h2>Papers</h2>
        </Reveal>
        <Reveal as="article" className="card paper" delay={80}>
          <div className="paper-venue">
            <span className="badge">Open access</span>
            <span>Mathematics · MDPI · 13(21), 3406 · 2025</span>
          </div>
          <h3>The Spatial Regime Conversion Method</h3>
          <p className="paper-authors">
            <strong>C. G. Cameron</strong>, C. A. Smith and C. A. Yates
          </p>
          <p className="abstract">
            Introduces the SRCM, a hybrid framework that moves between deterministic (PDE) and stochastic
            (SSA) descriptions within one spatially extended reaction–diffusion system: deterministic in
            high-copy-number regions, stochastic where noise from small numbers is significant.
          </p>
          <div className="paper-actions">
            <a className="btn btn-primary" href={LINKS.paper} target="_blank" rel="noreferrer">
              {PaperIcon} Read the article
            </a>
            <a className="btn" href={LINKS.doi} target="_blank" rel="noreferrer">
              doi:10.3390/math13213406
            </a>
            <CopyButton text={BIBTEX} label="Copy BibTeX" className="btn" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
