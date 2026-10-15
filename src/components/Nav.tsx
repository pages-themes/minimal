import { useEffect, useRef, useState } from "react";
import { LogoMark } from "./icons";

// Home-page sections, plus the separate SRCM page. On the SRCM page the
// section links point back to the home page.
const LINKS = [
  { id: "about", label: "About" },
  { id: "research", label: "Research" },
  { id: "srcm", label: "Software", page: "/srcm/" },
  { id: "publications", label: "Publications" },
  { id: "contact", label: "Contact" },
];

export function Nav({ page = "home" }: { page?: "home" | "srcm" }) {
  const navRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState<string | null>(page === "srcm" ? "srcm" : null);

  // Border/shadow once the page scrolls: set on the node, no re-render.
  useEffect(() => {
    const onScroll = () => {
      if (navRef.current) navRef.current.dataset.scrolled = String(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On the home page, highlight the section in the middle of the viewport.
  useEffect(() => {
    if (page !== "home") return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const l of LINKS) {
      const el = l.page ? null : document.getElementById(l.id);
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  }, [page]);

  const hrefFor = (l: (typeof LINKS)[number]) => l.page ?? (page === "home" ? `#${l.id}` : `/#${l.id}`);

  return (
    <nav className="nav" ref={navRef} aria-label="Main">
      <div className="wrap nav-inner">
        <a href={page === "home" ? "#top" : "/"} className="brand">
          {LogoMark}
          Charlie Cameron
        </a>
        <ul className="nav-links">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a href={hrefFor(l)} aria-current={active === l.id ? "true" : undefined}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
