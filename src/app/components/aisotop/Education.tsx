import { Section } from "./Section";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { BookOpen, Users, Lightbulb, Target } from "lucide-react";
import { BorderBeam } from "./BorderBeam";

const features = [
  { icon: BookOpen, title: "Robotics & AI Classes", desc: "Comprehensive curriculum for schools." },
  { icon: Users, title: "College Workshops", desc: "Intensive training programs for higher education." },
  { icon: Lightbulb, title: "Project-Based Learning", desc: "Hands-on experience with real hardware." },
  { icon: Target, title: "Real-World Application", desc: "Preparing students for future careers." },
];

export function Education() {
  return (
    <Section id="education">
      <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2 relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop"
            alt="Robotics Education in Schools and Colleges"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
        </div>

        <div className="lg:w-1/2 space-y-8">
          <div>
            <div className="inline-block relative px-4 py-1.5 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4 overflow-hidden">
              <BorderBeam size={100} duration={6} borderWidth={1.5} />
              Education & Growth
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-foreground leading-[0.9] mb-6 tracking-tighter uppercase">
              Empowering <br />
              <span className="text-primary text-4xl md:text-5xl">Schools and Colleges</span>
            </h2>
            <p className="text-xl text-foreground/60 leading-relaxed">
              We bridge the gap between academic theory and industry practice through immersive robotics education and hands-on workshops.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col gap-3 p-4 bg-white/5 border border-white/5 rounded-xl hover:border-primary/20 transition-colors">
                <feature.icon className="text-primary" size={28} />
                <div>
                  <h4 className="font-bold text-foreground">{feature.title}</h4>
                  <p className="text-sm text-foreground/60">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
