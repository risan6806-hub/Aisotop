import { useEffect, useState } from "react";
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
import { Team } from "./components/aisotop/Team";
import { ThemeProvider } from "./components/aisotop/ThemeProvider";
import { Preloader } from "./components/aisotop/Preloader";
import { ThemeChooser } from "./components/aisotop/ThemeChooser";
import { AnimatePresence } from "framer-motion";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isChoosingTheme, setIsChoosingTheme] = useState(false);
  const [showSite, setShowSite] = useState(false);

  useEffect(() => {
    if (!showSite) return;

    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, [showSite]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setIsChoosingTheme(true);
  };

  const handleThemeSelected = () => {
    setIsChoosingTheme(false);
    setShowSite(true);
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {isChoosingTheme && (
        <ThemeChooser onThemeSelected={handleThemeSelected} />
      )}

      {showSite && (
        <div className="bg-background min-h-screen relative text-foreground selection:bg-primary selection:text-primary-foreground">
          <div className="noise-overlay" />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Services />
            <Automation />
            <Products />
            <Unique />
            <Education />
            <Team />
            <Contribution />
            <StudentProjects />
            <Contact />
          </main>
        </div>
      )}
    </ThemeProvider>
  );
}
