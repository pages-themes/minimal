import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { Software } from "./components/Software";

// The separate /srcm/ page: the package showcase and the getting-started guide.
export function SrcmPage() {
  return (
    <>
      <Nav page="srcm" />
      <main className="srcm-page">
        <div className="wrap">
          <a className="back-link" href="/">
            ← Charlie Cameron
          </a>
        </div>
        <Software />
      </main>
      <Footer />
    </>
  );
}
