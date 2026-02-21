"use client";

import { Section } from "./Section";
import { Bot, BrainCircuit, Factory, GraduationCap, Presentation, Wrench } from "lucide-react";
import { motion } from "motion/react";
import { BorderBeam } from "./BorderBeam";

const services = [
  {
    icon: Bot,
    title: "Physical AI & Robotics",
    desc: "Bridging the gap between intelligent software and physical hardware.",
  },
  {
    icon: BrainCircuit,
    title: "AI Integrated Smart Systems",
    desc: "Intelligent systems that learn and adapt to solve complex problems.",
  },
  {
    icon: Factory,
    title: "Industrial & Custom Automation",
    desc: "Tailored automation solutions for streamlining industrial processes.",
  },
  {
    icon: GraduationCap,
    title: "Robotics Training for Schools",
    desc: "Empowering the next generation with practical robotics education.",
  },
  {
    icon: Presentation,
    title: "Workshops for Colleges",
    desc: "Advanced workshops bridging the gap between theory and industry.",
  },
  {
    icon: Wrench,
    title: "Hands-on Innovation Programs",
    desc: "Real-world project development and hands-on technical training.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any } },
};

export function Services() {
  return (
    <Section id="services" className="bg-background relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="text-center max-w-4xl mx-auto mb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            Our Expertise
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-foreground">
            Specialized <span className="text-primary italic">Solutions</span>
          </h2>
          <p className="text-foreground/40 text-xl max-w-2xl mx-auto leading-relaxed">
            Comprehensive solutions ranging from industrial automation to educational empowerment, driven by the future of AI.
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{
              y: -10,
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            className="group relative bg-white/5 p-10 rounded-[2.5rem] border border-white/5 hover:border-primary/20 hover:bg-white/[0.08] transition-all overflow-hidden"
          >
            {index === 0 && <BorderBeam size={150} duration={8} borderWidth={2} colorFrom="#030213" colorTo="#333" />}
            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-background transition-all duration-500 transform group-hover:rotate-6">
                <service.icon className="text-primary group-hover:text-background transition-colors duration-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight text-foreground">{service.title}</h3>
              <p className="text-foreground/50 leading-relaxed text-lg">
                {service.desc}
              </p>
            </div>

            {/* Decorative Icon on hover */}
            <div className="absolute bottom-10 right-10 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
              <Bot className="text-primary/10" size={40} />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
