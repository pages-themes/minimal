import { Reveal } from "./Reveal";
import { INTERESTS } from "../content";

export function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <Reveal className="about-body">
          <p className="eyebrow">About</p>
          <div className="section-head" style={{ marginBottom: 20 }}>
            <h2>Randomness where it matters, efficiency everywhere else</h2>
          </div>
          <p>
            I'm a PhD student in <strong>mathematical biology</strong> at the University of Bath. Many
            biological systems, from invading cell populations to spreading infections, are dense in
            most places but sparse at the edges, and it is at those edges that chance events decide
            what happens.
          </p>
          <p>
            My work centres on the <strong>Spatial Regime Conversion Method (SRCM)</strong>, a hybrid
            framework that simulates sparse regions stochastically, particle by particle, and dense
            regions with a PDE, switching between the two automatically based on local density.
          </p>
          <p>
            I also turned the method into <strong>open-source software</strong>, a Python library with
            a browser dashboard, so that others can use it on their own systems.
          </p>
          <div className="chips">
            {INTERESTS.map((i) => (
              <span className="chip" key={i}>
                {i}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
