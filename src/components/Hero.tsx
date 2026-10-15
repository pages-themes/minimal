import { HybridFront } from "./HybridFront";
import { Reveal } from "./Reveal";
import { ArrowIcon, GitHubIcon, OrcidIcon, PaperIcon } from "./icons";
import { LINKS } from "../content";

export function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap hero-grid">
        <Reveal>
          <p className="eyebrow">Mathematical biology · University of Bath</p>
          <div className="hero-name">
            <img className="avatar" src="/figures/Charlie.png" alt="Portrait of Charlie Cameron" width={88} height={88} />
            <h1>Charlie Cameron</h1>
          </div>
          <p className="lede">
            Final-year PhD student building the Spatial Regime Conversion Method: a hybrid that
            simulates individual particles where numbers are low and switches to a PDE where they're
            high. SSA accuracy, PDE speed.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="/srcm/">
              {GitHubIcon} Explore SRCM
            </a>
            <a className="btn" href={LINKS.paper} target="_blank" rel="noreferrer">
              {PaperIcon} Read the paper
            </a>
            <a className="btn" href={LINKS.orcid} target="_blank" rel="noreferrer">
              {OrcidIcon} ORCID {ArrowIcon}
            </a>
          </div>
          <div className="hero-meta">
            <span>
              <i className="dot-live" /> open to collaborations
            </span>
            <span>Bath, UK</span>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <HybridFront />
        </Reveal>
      </div>
    </header>
  );
}
