"use client";

import { motion } from "motion/react";
import { Section } from "./Section";
import { CheckCircle2 } from "lucide-react";
import aisotopFullLogo from "@/assets/aisotop_full_logo.svg";

export function About() {
  return (
    <Section id="about">
      <div className="space-y-20">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                Pioneering Tomorrow
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8 text-foreground">
                Transforming <br />
                <span className="text-primary">Vision into Reality</span>
              </h2>
              <p className="text-xl text-foreground/60 leading-relaxed max-w-lg">
                AISOTOP is a next-generation Physical AI, robotics, and automation company focused on solving real-world challenges through intelligent technology.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Next-Gen Robotics",
                "Intelligent Automation",
                "Real-world Solutions",
                "Societal Impact"
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-foreground/5 border border-foreground/5 hover:border-primary/20 transition-colors group text-foreground"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="font-bold tracking-tight">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative p-8 rounded-[2.5rem] bg-foreground/5 border border-foreground/5 overflow-hidden flex flex-col items-center justify-center gap-8"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -z-10" />
            <img
              src={aisotopFullLogo}
              alt="AISOTOP - Empowering the Future with AI"
              className="w-64 md:w-80 h-auto relative z-10 dark:brightness-0 dark:invert"
            />
            <p className="text-lg text-foreground/60 leading-relaxed max-w-lg relative z-10 italic text-center">
              "We combine Robotics, Artificial Intelligence, and Automation to build practical and impactful solutions for industries, institutions, and society."
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
