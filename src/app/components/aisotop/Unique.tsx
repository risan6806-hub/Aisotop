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
      <div className="space-y-24">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-primary/20 text-primary border border-primary/30 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                Why Choose Us
              </div>
              <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
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
              <div key={idx} className="flex items-center gap-5 p-6 bg-zinc-900/40 backdrop-blur-xl rounded-[2rem] border border-white/5 hover:border-primary/30 hover:bg-zinc-800/50 transition-all duration-500 group">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500">
                  <Check size={20} strokeWidth={3} />
                </div>
                <span className="text-lg text-zinc-400 font-bold tracking-tight group-hover:text-white transition-colors duration-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="group relative aspect-[21/9] w-full rounded-[3.5rem] overflow-hidden border border-white/10 bg-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <ImageWithFallback
            src={uniquePenguinImg}
            alt="AISOTOP Uniqueness - Standing Out"
            className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
          <div className="absolute bottom-12 left-12 space-y-2">
            <div className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">
              The AISOTOP Difference
            </div>
            <div className="text-white text-2xl font-black tracking-tighter uppercase">
              Standing Out Through Innovation
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
