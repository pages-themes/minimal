// Everything factual on the site, in one place.

export const LINKS = {
  srcm: "https://github.com/Cgyc20/srcm-project",
  docs: "https://cgyc20.github.io/srcm-project",
  dashboardGuide: "https://cgyc20.github.io/srcm-project/web/",
  paper: "https://www.mdpi.com/2227-7390/13/21/3406",
  doi: "https://doi.org/10.3390/math13213406",
  paperCode: "https://github.com/Cgyc20/Integrated-srcm-ssa",
  github: "https://github.com/Cgyc20",
  orcid: "https://orcid.org/0009-0003-1252-1989",
  email: "mailto:cgyc20@bath.ac.uk",
};

export const INSTALL = 'uv tool install "git+https://github.com/Cgyc20/srcm-project.git"';

export const INTERESTS = [
  "Stochastic simulation",
  "Reaction–diffusion systems",
  "Hybrid stochastic–deterministic methods",
  "Travelling waves & fronts",
  "Mathematical biology",
  "Numerical PDEs",
  "Scientific software (Python)",
];

export interface MethodStep {
  kicker: string;
  title: string;
  body: string;
  src: string;
  alt: string;
}

export const METHOD: MethodStep[] = [
  {
    kicker: "Overview",
    title: "Spatially adaptive hybrid simulation",
    body: "Where a species is sparse, the SRCM tracks individual particles in compartments with the stochastic simulation algorithm (SSA). Where it is dense, it uses a PDE. Particles and PDE mass convert into each other across a density threshold, so each region always gets the cheapest description that is still accurate.",
    src: "/figures/schematic_new.png",
    alt: "Schematic of the SRCM: a continuous PDE profile above a conversion threshold, discrete particle blocks below it, with arrows for conversion in both directions.",
  },
  {
    kicker: "Motivation",
    title: "Two regimes, one system",
    body: "PDEs are fast but cannot capture noise from small numbers. The SSA is exact but slow when numbers are large. Many biological systems, such as a spreading wound-healing front, contain both at once: a dense bulk and a sparse leading edge.",
    src: "/figures/wound_healing.png",
    alt: "Microscopy of a wound-healing assay at 0 and 9 hours, with cells advancing into empty space.",
  },
  {
    kicker: "The interface",
    title: "Conversion at the threshold",
    body: "Above the threshold, mass lives in the PDE; below it, as particles. Conversion conserves mass in expectation, so the hybrid's combined profile tracks the pure stochastic simulation while the bulk runs deterministically.",
    src: "/figures/fisher_1.png",
    alt: "Fisher–KPP snapshot comparing hybrid SSA bars, hybrid PDE, the combined profile, a pure PDE and a pure SSA, with the threshold marked.",
  },
  {
    kicker: "Validation",
    title: "Capturing the stochastic wavespeed",
    body: "In a pulled Fisher–KPP front, randomness at the leading edge slows the wave below the PDE's prediction. Because the SRCM keeps the front stochastic, it reproduces the SSA's slower speed, which the pure PDE misses.",
    src: "/figures/Wavespeed.png",
    alt: "Wavespeed over time: the PDE approaches the theoretical maximum while the SSA and hybrid settle at a lower speed.",
  },
  {
    kicker: "Efficiency",
    title: "Cost that stays flat as numbers grow",
    body: "The SSA's cost grows with the number of particles; the hybrid's stays roughly flat once the bulk is above the threshold. At low populations the conversion overheads mean the plain SSA can be faster, which the left of this plot shows.",
    src: "/figures/efficiency.png",
    alt: "Time per repeat against maximum concentration: the SSA grows steeply while the hybrid stays near constant, apart from a bump near the threshold.",
  },
];
