import { Section } from "./Section";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Check } from "lucide-react";
import whyChooseUsImg from "@/assets/why_choose_us.png";

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
    <Section id="unique">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div>
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              What Makes AISOTOP Unique
            </h2>
          </div>

          <div className="space-y-4">
            {strengths.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-card/50 backdrop-blur-sm rounded-xl shadow-sm border border-border/50 hover:shadow-md transition-shadow group">
                <div className="mt-1 bg-primary/10 p-1 rounded-full text-primary group-hover:scale-110 transition-transform">
                  <Check size={16} strokeWidth={3} />
                </div>
                <span className="text-lg text-muted-foreground font-medium group-hover:text-foreground transition-colors">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-border/50">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1590412200988-a403497c432e?auto=format&fit=crop&q=80&w=2070"
            alt="AISOTOP Uniqueness - Standing Out from the Crowd"
            className="absolute inset-0 w-full h-full object-cover bg-background transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-primary/5" />
        </div>
      </div>
    </Section>
  );
}
