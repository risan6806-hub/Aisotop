import { Section } from "./Section";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { motion } from "motion/react";
import { Bot } from "lucide-react";
import { BorderBeam } from "./BorderBeam";

import intelliArmImg from "@/assets/products/intelli_arm.png";
import omniDriveImg from "@/assets/products/omni_drive.png";
import sentinelImg from "@/assets/products/sentinel.png";

const products = [
  {
    name: "INTELLI-ARM X1",
    tag: "AI Integrated",
    desc: "Precision industrial robotic arm powered by advanced AI for complex manufacturing tasks.",
    image: intelliArmImg,
    delay: 0
  },
  {
    name: "OMNI-DRIVE PRO",
    tag: "High Efficiency",
    desc: "High-speed autonomous mobile robot designed for maximum efficiency in smart logistics.",
    image: omniDriveImg,
    delay: 2
  },
  {
    name: "SENTINEL V3",
    tag: "Reliable",
    desc: "Rugged all-weather inspection and monitoring robot built for extreme reliability in the field.",
    image: sentinelImg,
    delay: 4
  }
];

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

          <div className="grid grid-cols-1 gap-6 pt-4">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-card p-6 rounded-2xl border border-border flex flex-col sm:flex-row items-center gap-6 hover:border-primary/30 transition-all overflow-hidden shadow-xl"
              >
                <BorderBeam size={150} duration={8} delay={product.delay} borderWidth={1.5} colorFrom="#00FFFF" colorTo="#8B5CF6" />

                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden flex-shrink-0 border border-border group-hover:border-primary/50 transition-colors">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-bold uppercase tracking-wider mb-2">
                    {product.tag}
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{product.name}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {product.desc}
                  </p>
                </div>
              </motion.div>
            ))}
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
