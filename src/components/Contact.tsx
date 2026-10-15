import { Reveal } from "./Reveal";
import { MailIcon } from "./icons";
import { LINKS } from "../content";

const ROWS = [
  { key: "email", label: "cgyc20@bath.ac.uk", href: LINKS.email },
  { key: "github", label: "github.com/Cgyc20", href: LINKS.github },
  { key: "orcid", label: "0009-0003-1252-1989", href: LINKS.orcid },
  { key: "affiliation", label: "University of Bath · Mathematical Sciences" },
];

export function Contact() {
  return (
    <section className="section" id="contact">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Contact</p>
          <h2>Get in touch</h2>
        </Reveal>
        <div className="contact">
          <Reveal className="card collab">
            <h3>Looking for biological applications</h3>
            <p>
              If you work on a system where randomness at low numbers matters in part of the domain, such
              as an invasion front, an epidemic, extinction risk or pattern formation, I'd love to hear
              about it and explore applying the SRCM together.
            </p>
            <a className="btn btn-primary" href={LINKS.email}>
              {MailIcon} Email me
            </a>
          </Reveal>
          <Reveal className="card links" delay={100}>
            <dl style={{ margin: 0 }}>
              {ROWS.map((r) => (
                <div className="link-row" key={r.key}>
                  <dt>{r.key}</dt>
                  <dd>
                    {r.href ? (
                      <a href={r.href} target={r.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                        {r.label}
                      </a>
                    ) : (
                      r.label
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
