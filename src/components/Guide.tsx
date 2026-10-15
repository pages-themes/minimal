import { CopyButton } from "./CopyButton";
import { Reveal } from "./Reveal";
import { ArrowIcon } from "./icons";
import { LINKS } from "../content";

const CLONE = `git clone https://github.com/Cgyc20/srcm-project.git
cd srcm-project
uv sync`;

const WEB = "uv run srcm-web";

const PYTHON = `import numpy as np
from srcm import SRCMModel

sim = (
    SRCMModel(species=["U"])
    .diffusion(U=0.01)
    .rates(birth=10.0, competition=0.01)
    .reaction({}, {"U": 1}, rate="birth")              # ∅ → U
    .reaction({"U": 2}, {"U": 1}, rate="competition")  # 2U → U
    .conversion(threshold={"U": [60, 70]}, rate=10.0, removal="prob")
    .pde(lambda U, r: (r["birth"] * U - r["competition"] * U**2,))
    .cleanup(enable=True, mode="auto")
)

results, meta = sim.run(L=10.0, K=100, pde_multiple=8, total_time=10.0, dt=0.005,
                        init_counts={"U": np.full(100, 10, dtype=int)}, seed=0)`;

function Terminal({ code, lang = "bash" }: { code: string; lang?: "bash" | "python" }) {
  return (
    <div className="code-block">
      <div className="code-bar">
        <span>{lang}</span>
        <CopyButton text={code} />
      </div>
      <pre>
        <code>
          {lang === "bash"
            ? code.split("\n").map((line) => (
                <span className="code-line" key={line}>
                  <span className="t-prompt">$ </span>
                  {line}
                  {"\n"}
                </span>
              ))
            : code}
        </code>
      </pre>
    </div>
  );
}

const IDEAS = [
  {
    title: "Two descriptions, one domain",
    body: "Space is split into compartments. Where a species is sparse, its individual particles are simulated stochastically; where it is dense, it is a PDE on a finer grid. Both run at the same time, everywhere.",
  },
  {
    title: "Conversion at a threshold",
    body: "When the mass in a compartment rises above an upper threshold, particles convert into PDE mass; when it falls below a lower one, PDE mass converts back into particles. The gap between the two stops mass flipping back and forth, and conversion conserves mass on average.",
  },
  {
    title: "Keeping fronts honest",
    body: "A PDE lets tiny fractions of a particle leak ahead of a front and push it too fast. After each step, the SRCM turns leaked sub-particle mass at the front into whole particles or nothing, so pulled fronts keep their true stochastic speed.",
  },
];

export function Guide() {
  return (
    <div className="guide" id="guide">
      <Reveal className="guide-head">
        <p className="eyebrow">Getting started</p>
        <h3>Install it and open the dashboard</h3>
        <p>
          You'll need{" "}
          <strong>Python 3.10 or newer</strong>, <a href="https://docs.astral.sh/uv/" target="_blank" rel="noreferrer">uv</a>, and
          for the dashboard's first launch <strong>Node.js 20+</strong>.
        </p>
      </Reveal>

      <ol className="guide-steps">
        <Reveal as="li" className="guide-step">
          <span className="guide-num">1</span>
          <div>
            <h4>Get the code</h4>
            <p>Clone the repository and let uv create an environment with everything installed.</p>
            <Terminal code={CLONE} />
          </div>
        </Reveal>
        <Reveal as="li" className="guide-step" delay={60}>
          <span className="guide-num">2</span>
          <div>
            <h4>Open the web dashboard</h4>
            <p>
              This starts the dashboard at <code>http://127.0.0.1:8000</code> and opens it in your browser.
              The first launch builds the interface, which takes about a minute and needs an internet
              connection; after that it works offline.
            </p>
            <Terminal code={WEB} />
            <p className="guide-note">
              Pick a system such as Fisher–KPP, press <strong>Run</strong>, and watch the hybrid evolve.
              Simulations run on your own computer.
            </p>
          </div>
        </Reveal>
        <Reveal as="li" className="guide-step" delay={120}>
          <span className="guide-num">3</span>
          <div>
            <h4>Or use it from Python</h4>
            <p>
              The same solvers as a library: a Fisher–KPP front in a few chained calls. Swap{" "}
              <code>mode="ssa"</code> into <code>run()</code> for the pure stochastic reference.
            </p>
            <Terminal code={PYTHON} lang="python" />
          </div>
        </Reveal>
      </ol>

      <Reveal className="guide-head guide-head-2">
        <p className="eyebrow">How it works</p>
        <h3>Three ideas behind the method</h3>
      </Reveal>
      <div className="ideas">
        {IDEAS.map((idea, i) => (
          <Reveal key={idea.title} className="card idea" delay={i * 80}>
            <span className="idea-num">{String(i + 1).padStart(2, "0")}</span>
            <h4>{idea.title}</h4>
            <p>{idea.body}</p>
          </Reveal>
        ))}
      </div>
      <p className="guide-more">
        The full derivation is in the{" "}
        <a href={LINKS.paper} target="_blank" rel="noreferrer">
          paper {ArrowIcon}
        </a>
      </p>
    </div>
  );
}
