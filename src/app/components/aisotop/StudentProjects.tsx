import { Section } from "./Section";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { motion } from "motion/react";
import roboticHand from "figma:asset/57556ef5f49d300d2701b430cdb0f55304ff559b.png";
import ultrasonicRobot from "figma:asset/4969ff72d9700677189ffb69acc2e4a5d4ad5e30.png";
import fourWDRover from "figma:asset/6509e5e38482e538689eea84d7b75d97906c4f7b.png";
import stadiumModel from "figma:asset/227e6706c1071f5a8ecc431566a9f09960332e47.png";

const projects = [
  {
    image: roboticHand,
    title: "Bionic Hand Prototype",
    category: "Prototyping",
    description: "A 3D-printed robotic hand designed to mimic human gestures and movements using servo motors.",
  },
  {
    image: ultrasonicRobot,
    title: "Obstacle Avoidance Robot",
    category: "Robotics",
    description: "An autonomous robot equipped with ultrasonic sensors to detect and navigate around obstacles.",
  },
  {
    image: fourWDRover,
    title: "4WD Rover Chassis",
    category: "Engineering",
    description: "A robust four-wheel drive platform built for all-terrain exploration and autonomous navigation testing.",
  },
  {
    image: stadiumModel,
    title: "Smart Stadium Model",
    category: "Creative Design",
    description: "An interactive diorama demonstrating automated systems and sensor integration in sports infrastructure.",
  },
];

export function StudentProjects() {
  return (
    <Section id="projects" className="bg-white">
      <div className="space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Student Projects & Innovations
          </h2>
          <p className="text-lg text-slate-600">
            Explore the creativity and technical skills of our students. These projects were designed and built during our hands-on workshops and training sessions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-slate-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className="aspect-square overflow-hidden bg-gray-200">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
