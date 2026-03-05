"use client";

import { motion } from "motion/react";
import { Section } from "./Section";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { BorderBeam } from "./BorderBeam";

import akhilImg from "@/assets/akhil.png";
import ressanImg from "@/assets/ressan.png";
import marjanaImg from "@/assets/marjana.png";
import anshadImg from "@/assets/anshad.png";
import logoPrimary from "@/assets/logo_primary.png";

const team = [
    {
        name: "AKHIL AV",
        role: "Robotics Research Engineer",
        image: akhilImg,
    },
    {
        name: "MUHAMMED RESSAN",
        role: "Robotics Research Engineer",
        image: ressanImg,
    },
    {
        name: "MARJANA PARVEEN",
        role: "Robotics Research Engineer",
        image: marjanaImg,
    },
    {
        name: "ANSHAD K",
        role: "Robotics Research Head",
        image: anshadImg,
    },
];

export function Team() {
    return (
        <Section id="team">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
                <div className="space-y-4">
                    <div className="inline-block px-8 py-3 rounded-full border-2 border-foreground text-2xl font-black uppercase tracking-tight">
                        OUR TEAM
                    </div>
                    <p className="text-xl text-foreground/60 font-medium">
                        Together, We Create Something Meaningful
                    </p>
                </div>
                <div className="w-32 h-32 rounded-full bg-card flex items-center justify-center p-0 shadow-2xl overflow-hidden border-4 border-primary/20 relative">
                    <BorderBeam size={128} duration={10} borderWidth={4} colorFrom="#030213" colorTo="#030213" />
                    <img
                        src={logoPrimary}
                        alt="AISOTOP Logo"
                        className="w-full h-auto object-contain scale-[4.5]"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, i) => (
                    <motion.div
                        key={member.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        className="group"
                    >
                        <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 bg-foreground/5 border border-foreground/5">
                            <ImageWithFallback
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-2xl font-black tracking-tighter text-foreground uppercase">
                                {member.name}
                            </h3>
                            <p className="text-foreground/60 font-medium text-sm">
                                {member.role}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
