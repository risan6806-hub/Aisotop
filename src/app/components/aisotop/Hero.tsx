"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const words = "Solving Real World Problems with Physical AI & Robotics".split(" ");

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center text-foreground"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1729967286899-d4579cebd533?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwcm9ib3QlMjBBSSUyMGF1dG9tYXRpb24lMjBibHVlJTIwZGFya3xlbnwxfHx8fDE3NzAyMDQyMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Futuristic Robot AI"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/40 bg-gradient-to-b from-background/90 via-transparent to-background" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        <div className="overflow-hidden mb-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md"
          >
            <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-primary/80">
              Future of Innovation
            </span>
          </motion.div>
        </div>

        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="text-7xl md:text-[8rem] lg:text-[10rem] font-black tracking-tighter leading-none"
          >
            AISOTOP
          </motion.h1>
        </div>

        <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 mb-12 max-w-2xl mx-auto">
          {words.map((word, i) => (
            <div key={i} className="overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 + i * 0.05 }}
                className="text-xl md:text-3xl font-light text-foreground/80 block"
              >
                {word}
              </motion.span>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 1.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <a
            href="#about"
            className="group relative px-10 py-5 bg-foreground text-background font-bold text-lg rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              Discover More <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </span>
          </a>
          <a
            href="#services"
            className="text-foreground/60 hover:text-foreground font-medium transition-colors flex items-center gap-2 group"
          >
            Our Services <ArrowRight size={18} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-40">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="opacity-40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
