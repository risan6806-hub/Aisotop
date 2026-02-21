"use client";

import { motion } from "motion/react";
import { Section } from "./Section";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { CheckCircle2 } from "lucide-react";
import { BorderBeam } from "./BorderBeam";

import akhilImg from "@/assets/akhil.png";
import ressanImg from "@/assets/ressan.png";
import marjanaImg from "@/assets/marjana.png";
import anshadImg from "@/assets/anshad.png";
import logoPrimary from "@/assets/logo_primary.png";

const team = [
  {
    name: "AKHIL AV",
    role: "Robotics Research Engineer",
    image: akhilImg,
  },
  {
    name: "MUHAMMED RESSAN",
    role: "Robotics Research Engineer",
    image: ressanImg,
  },
  {
    name: "MARJANA PARVEEN",
    role: "Robotics Research Engineer",
    image: marjanaImg,
  },
  {
    name: "ANSHAD K",
    role: "Robotics Research Head",
    image: anshadImg,
  },
];

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
                  className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 transition-colors group text-foreground"
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
            className="relative p-8 rounded-[2.5rem] bg-white/5 border border-white/5 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -z-10" />
            <p className="text-lg text-foreground/40 leading-relaxed max-w-lg relative z-10 italic">
              "We combine Robotics, Artificial Intelligence, and Automation to build practical and impactful solutions for industries, institutions, and society."
            </p>
          </motion.div>
        </div>

        {/* New Team Section */}
        <div className="pt-20 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
            <div className="space-y-4">
              <div className="inline-block px-8 py-3 rounded-full border-2 border-foreground text-2xl font-black uppercase tracking-tight">
                OUR TEAM
              </div>
              <p className="text-xl text-foreground/60 font-medium">
                Together, We Create Something Meaningful
              </p>
            </div>
            <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center p-0 shadow-2xl overflow-hidden border-4 border-primary/20 relative">
              <BorderBeam size={128} duration={10} borderWidth={4} colorFrom="#030213" colorTo="#030213" />
              <img
                src={logoPrimary}
                alt="AISOTOP Logo"
                className="w-full h-auto object-contain scale-[4.5]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 bg-white/5 border border-white/5">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-black tracking-tighter text-foreground uppercase">
                    {member.name}
                  </h3>
                  <p className="text-foreground/60 font-medium text-sm">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
