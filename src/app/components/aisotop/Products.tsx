import { Section } from "./Section";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { motion } from "motion/react";
import { Cpu, Zap, Shield } from "lucide-react";
import { BorderBeam } from "./BorderBeam";

export function Products() {
  return (
    <Section id="products" className="bg-background relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
        <div className="lg:w-1/2 space-y-8">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground leading-tight">
            Innovative Robotics <span className="text-primary italic">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            AISOTOP develops cool and intelligent robotics products integrated with AI to solve real-life challenges in automation, education, and industry.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div className="group relative bg-card p-6 rounded-2xl border border-border text-center hover:border-primary/30 transition-all overflow-hidden shadow-xl">
              <BorderBeam size={100} duration={8} borderWidth={1.5} colorFrom="#00FFFF" colorTo="#8B5CF6" />
              <Cpu className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform duration-300" size={32} />
              <h4 className="font-bold text-foreground">AI Integrated</h4>
            </div>
            <div className="group relative bg-card p-6 rounded-2xl border border-border text-center hover:border-primary/30 transition-all overflow-hidden shadow-xl">
              <BorderBeam size={100} duration={8} delay={2} borderWidth={1.5} colorFrom="#8B5CF6" colorTo="#00FFFF" />
              <Zap className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform duration-300" size={32} />
              <h4 className="font-bold text-foreground">High Efficiency</h4>
            </div>
            <div className="group relative bg-card p-6 rounded-2xl border border-border text-center hover:border-primary/30 transition-all overflow-hidden shadow-xl">
              <BorderBeam size={100} duration={8} delay={4} borderWidth={1.5} colorFrom="#00FFFF" colorTo="#8B5CF6" />
              <Shield className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform duration-300" size={32} />
              <h4 className="font-bold text-foreground">Reliable</h4>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
          <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1768323275769-6615e7cfcbe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcm9ib3QlMjBhcm0lMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc3MDIwNDI0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Industrial Robotics"
              className="w-full h-auto object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </Section>
  );
}
