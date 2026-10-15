import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Method } from "./components/Method";
import { Nav } from "./components/Nav";
import { Publications } from "./components/Publications";
import { SrcmTeaser } from "./components/SrcmTeaser";

export function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Method />
        <SrcmTeaser />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
