"use client";

import { motion } from "motion/react";
import { Section } from "./Section";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { CheckCircle2 } from "lucide-react";
import teamPhoto from "@/assets/team_photo.png";

export function About() {
  return (
    <Section id="about">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        {/* Text Content - Move to First on Desktop */}
        <div className="order-1 md:order-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4">
              Pioneering Tomorrow
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8 text-foreground">
              Transforming <br />
              <span className="text-primary">Vision into Reality</span>
            </h2>
            <p className="text-xl text-foreground/60 leading-relaxed max-w-lg mb-6">
              AISOTOP is a next-generation robotics and automation company focused on solving real-world challenges through intelligent technology.
            </p>
            <p className="text-lg text-foreground/40 leading-relaxed max-w-lg">
              We combine Robotics, Artificial Intelligence, and Automation to build practical and impactful solutions for industries, institutions, and society.
            </p>
          </motion.div>

          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 transition-colors group text-foreground"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                  <CheckCircle2 size={20} />
                </div>
                <span className="font-bold tracking-tight">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image Content - Move to Second on Desktop */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 md:order-2 relative rounded-3xl overflow-hidden group shadow-2xl"
        >
          <div className="absolute inset-0 bg-primary/5 mix-blend-overlay z-10" />
          <ImageWithFallback
            src={teamPhoto}
            alt="AISOTOP Team"
            className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-[1.02]"
          />
        </motion.div>
      </div>
    </Section>
  );
}
