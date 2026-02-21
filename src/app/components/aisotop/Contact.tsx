import { Section } from "./Section";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Mail, MapPin, Phone, Globe } from "lucide-react";
import logo from "figma:asset/48d643282720ccf0457972cedd4b1db2988d0ebb.png";

export function Contact() {
    return (
        <footer id="contact" className="relative bg-slate-950 text-white py-20 px-4 md:px-12 lg:px-24 overflow-hidden">
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
                    <p className="text-xl text-gray-400">Transforming ideas into intelligent Physical AI & robotic solutions.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-gray-800 pt-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <img src={logo} alt="AISOTOP Logo" className="h-10 w-auto" />
                            <h3 className="text-2xl font-bold text-white">AISOTOP</h3>
                        </div>
                        <p className="text-gray-400 max-w-sm mb-6">
                            Leading the way in Physical AI, Robotics, and Automation solutions for a smarter tomorrow.
                        </p>
                        <div className="flex gap-4">
                            {/* Social placeholders */}
                            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                                <Globe size={20} />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Services</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li>Physical AI & Robotics</li>
                            <li>Automation Systems</li>
                            <li>Industry Solutions</li>
                            <li>Education & Training</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <Phone size={18} className="text-blue-500 mt-1" />
                                <div className="flex flex-col">
                                    <span>+91 90747 02722</span>
                                    <span>+91 97458 15897</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-blue-500" />
                                <span>aisotop.robotics@gmail.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-blue-500 mt-1" />
                                <span>
                                    673586, West kaithapoyil
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="text-center text-gray-600 text-sm mt-20">
                    &copy; {new Date().getFullYear()} AISOTOP. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
