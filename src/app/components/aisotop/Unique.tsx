import { Section } from "./Section";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Check } from "lucide-react";
import whyChooseUsImg from "@/assets/why_choose_us.png";
import uniquePenguinImg from "@/assets/unique_penguin.jpg";

const strengths = [
  "Focus on solving real-world problems using Physical AI and Robotics",
  "Practical, problem-solving approach",
  "Custom automation solutions",
  "Innovative Physical AI-integrated robotics products",
  "Hands-on learning experience for students",
  "Industry-relevant projects and training",
];

export function Unique() {
  return (
    <Section id="unique" className="bg-black py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10">
          <div className="space-y-4">
            <div className="inline-block px-4 py-1.5 bg-primary/20 text-primary border border-primary/30 rounded-full text-xs font-bold uppercase tracking-widest">
              Why Choose Us
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              What Makes <span className="text-primary italic">AISOTOP</span> <br /> Unique
            </h2>
          </div>

          <div className="space-y-3">
            {strengths.map((item, idx) => (
              <div key={idx} className="flex items-center gap-5 p-5 bg-zinc-900/50 backdrop-blur-xl rounded-2xl border border-white/5 hover:border-primary/30 hover:bg-zinc-800/50 transition-all duration-300 group">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  <Check size={18} strokeWidth={3} />
                </div>
                <span className="text-xl text-zinc-400 font-medium group-hover:text-white transition-colors duration-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="group relative aspect-video w-full rounded-[40px] overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
          <ImageWithFallback
            src={uniquePenguinImg}
            alt="AISOTOP Uniqueness - Standing Out"
            className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
          <div className="absolute inset-0 border-[15px] border-black/10 rounded-[40px] pointer-events-none" />
        </div>
      </div>
    </Section>
  );
}
