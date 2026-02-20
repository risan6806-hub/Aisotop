import { Section } from "./Section";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { motion } from "motion/react";
import groupPhoto1 from "figma:asset/328bc956b82fd99a2b800d48342ccdcd94a62cfd.png";
import groupPhoto2 from "figma:asset/256b0d779c499630d87bda19c11e6238d6b13e03.png";
import droneProject from "figma:asset/f9a5f406dd25fd6f10410f3479c1b13e4ff4387d.png";
import classroom from "figma:asset/e31db6de8fa75f284fb5a9c63adf991201e2f3ca.png";

const contributions = [
  {
    image: groupPhoto1,
    title: "Community Workshops",
    description:
      "Bringing students together to learn and innovate.",
    span: "col-span-1 md:col-span-2",
    position: "object-center",
  },
  {
    image: droneProject,
    title: "Student Projects",
    description:
      "Hands-on experience building complex drones and robotics.",
    span: "col-span-1",
    position: "object-center",
  },
  {
    image: classroom,
    title: "Interactive Classes",
    description:
      "Engaging classroom sessions with practical demonstrations.",
    span: "col-span-1",
    position: "object-center",
  },
  {
    image: groupPhoto2,
    title: "Future Leaders",
    description:
      "Inspiring the next generation of engineers and scientists.",
    span: "col-span-1 md:col-span-2",
    position: "object-center",
    autoHeight: true,
  },
];

export function Contribution() {
  return (
    <Section id="contribution" className="bg-slate-50">
      <div className="space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Our Contribution
          </h2>
          <p className="text-lg text-slate-600">
            Over the years, we have conducted numerous workshops
            and classes, mentoring students and guiding them to
            build innovative projects like drones and autonomous
            systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {contributions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-2xl shadow-lg ${item.span} ${item.autoHeight ? "h-auto min-h-[20rem]" : "h-64 md:h-80"}`}
            >
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                className={`w-full ${item.autoHeight ? "h-auto" : "h-full object-cover"} transition-transform duration-500 group-hover:scale-105 ${item.position}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}