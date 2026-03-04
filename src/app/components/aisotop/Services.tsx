"use client";

import { Section } from "./Section";
import { Bot, BrainCircuit, Factory, GraduationCap, Presentation, Wrench } from "lucide-react";
import { motion } from "motion/react";
import { BorderBeam } from "./BorderBeam";

import physicalAiImg from "@/assets/services/physical_ai.png";
import aiSmartSystemsImg from "@/assets/services/ai_smart_systems.png";
import industrialAutomationImg from "@/assets/services/industrial_automation.png";
import roboticsTrainingImg from "@/assets/services/robotics_training.png";
import workshopsImg from "@/assets/services/workshops.png";
import innovationImg from "@/assets/services/innovation.png";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const services = [
  {
    icon: Bot,
    title: "Physical AI & Robotics",
    desc: "Bridging the gap between intelligent software and physical hardware.",
    image: physicalAiImg
  },
  {
    icon: BrainCircuit,
    title: "AI Integrated Smart Systems",
    desc: "Intelligent systems that learn and adapt to solve complex problems.",
    image: aiSmartSystemsImg
  },
  {
    icon: Factory,
    title: "Industrial & Custom Automation",
    desc: "Tailored automation solutions for streamlining industrial processes.",
    image: industrialAutomationImg
  },
  {
    icon: GraduationCap,
    title: "Robotics Training for Schools",
    desc: "Empowering the next generation with practical robotics education.",
    image: roboticsTrainingImg
  },
  {
    icon: Presentation,
    title: "Workshops for Colleges",
    desc: "Advanced workshops bridging the gap between theory and industry.",
    image: workshopsImg
  },
  {
    icon: Wrench,
    title: "Hands-on Innovation Programs",
    desc: "Real-world project development and hands-on technical training.",
    image: innovationImg
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
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{
              y: -10,
              scale: 1.01,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            className="group relative bg-[#0a0a0b] rounded-[2.5rem] border border-white/5 hover:border-primary/30 transition-all overflow-hidden h-[520px] shadow-2xl"
          >
            {/* Image Section */}
            <div className="relative h-60 w-full overflow-hidden">
              <ImageWithFallback
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/40 to-transparent opacity-80" />
              <div className="absolute top-6 right-6 w-12 h-12 bg-primary/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-primary group-hover:text-background transition-all duration-500">
                <service.icon className="text-primary group-hover:text-background transition-colors duration-500" size={24} />
              </div>
            </div>

            <BorderBeam size={250} duration={12} borderWidth={1.5} colorFrom="#00FFFF" colorTo="#8B5CF6" />

            <div className="p-8 relative z-10">
              <h3 className="text-2xl font-bold mb-4 tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">{service.title}</h3>
              <p className="text-foreground/50 leading-relaxed text-lg line-clamp-3">
                {service.desc}
              </p>

              <div className="mt-8 flex items-center gap-2 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                EXPLORE SOLUTION <Bot size={16} />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
