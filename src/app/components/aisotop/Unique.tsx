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
    <Section id="unique" className="bg-gray-50">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div>
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              What Makes AISOTOP Unique
            </h2>
          </div>

          <div className="space-y-4">
            {strengths.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="mt-1 bg-blue-100 p-1 rounded-full text-blue-600">
                  <Check size={16} strokeWidth={3} />
                </div>
                <span className="text-lg text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl">
          <ImageWithFallback
            src={whyChooseUsImg}
            alt="Why Choose AISOTOP - What Makes Us Different"
            className="absolute inset-0 w-full h-full object-contain bg-slate-900 transition-transform duration-700 hover:scale-105 p-8"
          />
          <div className="absolute inset-0 bg-blue-900/10" />
        </div>
      </div>
    </Section>
  );
}
