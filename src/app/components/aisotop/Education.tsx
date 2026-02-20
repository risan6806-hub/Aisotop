import { Section } from "./Section";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { BookOpen, Users, Lightbulb, Target } from "lucide-react";

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
        <div className="lg:w-1/2 relative rounded-2xl overflow-hidden shadow-xl">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1707027555270-7ccf3c67e3e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGJ1aWxkaW5nJTIwcm9ib3RzJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc3MDIwNDI0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Students in Robotics Workshop"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="lg:w-1/2 space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
              Empowering Schools & Colleges
            </h2>
            <p className="text-lg text-foreground/60">
              We bridge the gap between academic theory and industry practice through immersive robotics education.
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
