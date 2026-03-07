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
import { RobotAssistant } from "./components/aisotop/RobotAssistant";
import { AnimatePresence } from "motion/react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showSite, setShowSite] = useState(false);

  useEffect(() => {
    if (!showSite) return;

    const lenis = new Lenis();
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [showSite]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setShowSite(true);
  };


  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>


      {showSite && (
        <div className="bg-background min-h-screen relative text-foreground selection:bg-primary selection:text-primary-foreground">
          <div className="noise-overlay" />
          <Navbar />
          <main>
            <div id="hero"><Hero /></div>
            <div id="about"><About /></div>
            <div id="services"><Services /></div>
            <div id="automation"><Automation /></div>
            <div id="products"><Products /></div>
            <div id="unique"><Unique /></div>
            <div id="education"><Education /></div>
            <div id="team"><Team /></div>
            <div id="contribution"><Contribution /></div>
            <div id="projects"><StudentProjects /></div>
            <div id="contact"><Contact /></div>
          </main>
          <RobotAssistant />
        </div>
      )}
    </ThemeProvider>
  );
}
