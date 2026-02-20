import { useEffect } from "react";
import Lenis from "lenis";
import { Navbar } from "./components/aisotop/Navbar";
import { Hero } from "./components/aisotop/Hero";
import { About } from "./components/aisotop/About";
import { Services } from "./components/aisotop/Services";
import { Unique } from "./components/aisotop/Unique";
import { Products } from "./components/aisotop/Products";
import { Education } from "./components/aisotop/Education";
import { Contribution } from "./components/aisotop/Contribution";
import { StudentProjects } from "./components/aisotop/StudentProjects";
import { Automation } from "./components/aisotop/Automation";
import { Contact } from "./components/aisotop/Contact";
import { CustomCursor } from "./components/aisotop/CustomCursor";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="dark">
      <div className="bg-background min-h-screen relative text-foreground selection:bg-primary selection:text-primary-foreground">
        <div className="noise-overlay" />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Unique />
          <Services />
          <Automation />
          <Products />
          <Education />
          <StudentProjects />
          <Contribution />
          <Contact />
        </main>
      </div>
    </div>
  );
}
