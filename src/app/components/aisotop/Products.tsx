import { Section } from "./Section";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { motion } from "motion/react";
import { Cpu, Zap, Shield } from "lucide-react";

export function Products() {
  return (
    <Section id="products" dark className="bg-slate-950">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2 space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Innovative Robotics Products
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            AISOTOP develops cool and intelligent robotics products integrated with AI to solve real-life challenges in automation, education, and industry.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
             <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center hover:border-blue-500 transition-colors">
                <Cpu className="mx-auto mb-4 text-blue-500" size={32} />
                <h4 className="font-semibold text-white">AI Integrated</h4>
             </div>
             <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center hover:border-blue-500 transition-colors">
                <Zap className="mx-auto mb-4 text-yellow-500" size={32} />
                <h4 className="font-semibold text-white">High Efficiency</h4>
             </div>
             <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center hover:border-blue-500 transition-colors">
                <Shield className="mx-auto mb-4 text-green-500" size={32} />
                <h4 className="font-semibold text-white">Reliable</h4>
             </div>
          </div>
        </div>

        <div className="lg:w-1/2 relative">
             <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-30" />
             <div className="relative rounded-2xl overflow-hidden border border-slate-800">
                <ImageWithFallback
                    src="https://images.unsplash.com/photo-1768323275769-6615e7cfcbe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcm9ib3QlMjBhcm0lMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc3MDIwNDI0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Industrial Robotics"
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
             </div>
        </div>
      </div>
    </Section>
  );
}
