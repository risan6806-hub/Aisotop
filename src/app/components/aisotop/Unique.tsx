import { Section } from "./Section";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Check } from "lucide-react";
import whyAisotopImg from "@/assets/why_aisotop.jpg";

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
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Column: Content + List */}
        <div className="space-y-12">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-primary/20 text-primary border border-primary/30 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                Why Choose Us
              </div>
              <h2 className="text-6xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter">
                What Makes <br />
                <span className="text-primary">AISOTOP</span> <br />
                <span className="text-white italic">Unique</span>
              </h2>
            </div>

            <p className="text-xl text-zinc-500 max-w-lg leading-relaxed font-medium">
              We stand at the intersection of Physical AI and Robotics, delivering solutions that bridge the gap between digital intelligence and physical execution.
            </p>
          </div>

          <div className="grid gap-3">
            {strengths.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 p-5 bg-zinc-900/40 backdrop-blur-xl rounded-2xl border border-white/5 hover:border-primary/30 hover:bg-zinc-800/50 transition-all duration-500 group">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500">
                  <Check size={16} strokeWidth={3} />
                </div>
                <span className="text-base text-zinc-400 font-bold tracking-tight group-hover:text-white transition-colors duration-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="group relative aspect-[4/5] w-full rounded-[3.5rem] overflow-hidden border border-white/10 bg-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <ImageWithFallback
            src={whyAisotopImg}
            alt="AISOTOP Uniqueness - Standing Out"
            className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-700" />
          <div className="absolute bottom-10 left-10 right-10 space-y-2">
            <div className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">
              The AISOTOP Difference
            </div>
            <div className="text-white text-2xl font-black tracking-tighter uppercase leading-tight">
              Standing Out <br /> Through Innovation
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
