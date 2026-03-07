import { Section } from "./Section";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Mail, MapPin, Phone, Globe, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { motion } from "motion/react";
import logo from "figma:asset/48d643282720ccf0457972cedd4b1db2988d0ebb.png";

export function Contact() {
    return (
        <footer id="contact" className="relative bg-background text-foreground py-20 px-4 md:px-12 lg:px-24 overflow-hidden border-t border-border">
            {/* Background */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <ImageWithFallback
                    src="https://images.unsplash.com/photo-1735713212083-82eafc42bf64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGJsdWUlMjB0ZWNobm9sb2d5JTIwYmFja2dyb3VuZCUyMGNpcmN1aXR8ZW58MXx8fHwxNzcwMjA0MjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Abstract Tech Background"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Let’s Build the Future Together</h2>
                    <p className="text-xl text-muted-foreground">Transforming ideas into intelligent Physical AI & robotic solutions.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-border pt-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6 group">
                            <div className="relative flex items-center justify-center">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-[-8px] bg-[conic-gradient(from_0deg,#3B1F7B,#6B3FA0,#9B59B6,#6B3FA0,#3B1F7B,#2A1058,#3B1F7B)] blur-lg opacity-50 rounded-full"
                                />
                                <img src={logo} alt="AISOTOP Logo" className="h-10 w-auto relative z-10" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground relative z-10">AISOTOP</h3>
                        </div>
                        <p className="text-muted-foreground max-w-sm mb-6">
                            Leading the way in Physical AI, Robotics, and Automation solutions for a smarter tomorrow.
                        </p>
                        <div className="flex gap-4 mt-8">
                            {[
                                { icon: Facebook, label: "Facebook" },
                                { icon: Twitter, label: "Twitter" },
                                { icon: Linkedin, label: "LinkedIn" },
                                { icon: Instagram, label: "Instagram" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-colors cursor-pointer group"
                                    title={item.label}
                                >
                                    <item.icon size={20} className="text-foreground/70 group-hover:text-primary transition-colors" />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-foreground mb-6">Services</h4>
                        <ul className="space-y-3 text-muted-foreground">
                            <li>Physical AI & Robotics</li>
                            <li>Automation Systems</li>
                            <li>Industry Solutions</li>
                            <li>Education & Training</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-foreground mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-muted-foreground">
                            <li className="flex items-start gap-3">
                                <Phone size={18} className="text-primary mt-1" />
                                <div className="flex flex-col">
                                    <a href="tel:+919074702722" className="hover:text-primary transition-colors">+91 90747 02722</a>
                                    <a href="tel:+919745815897" className="hover:text-primary transition-colors">+91 97458 15897</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail size={18} className="text-primary mt-1" />
                                <div className="flex flex-col">
                                    <a
                                        href="mailto:info@aisotop.com"
                                        className="hover:text-primary transition-colors"
                                    >
                                        info@aisotop.com
                                    </a>
                                    <a
                                        href="mailto:aisotop.robotics@gmail.com"
                                        className="hover:text-primary transition-colors"
                                    >
                                        aisotop.robotics@gmail.com
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-primary mt-1 shrink-0" />
                                <a
                                    href="https://maps.app.goo.gl/fPnQcWjmPYn2EQHs9"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    west, Kaithapoyil Bridge, Kaithappoyil, kozhikode, Kerala 673586
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="text-center text-muted-foreground text-sm mt-20">
                    &copy; {new Date().getFullYear()} AISOTOP. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
