"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send } from "lucide-react";
import aisoRobot from "@/assets/aiso_robot.png";

type Message = {
    id: number;
    text: string;
    sender: "bot" | "user";
};

const KNOWLEDGE_BASE = [
    {
        keywords: ["who", "what", "aisotop", "about", "mission"],
        answer: "I'm AISO! AISOTOP is a next-generation Physical AI, robotics, and automation company. Our mission is bridging digital intelligence with physical execution to solve real-world challenges."
    },
    {
        keywords: ["services", "do", "offer", "automation", "robotics", "physical ai"],
        answer: "We offer specialized solutions in Physical AI & Robotics, Industrial Automation, AI Integrated Smart Systems, and Robotics Training for schools and colleges."
    },
    {
        keywords: ["products", "innovation", "robot"],
        answer: "We develop innovative robotics products integrated with AI, such as our Physical AI systems and smart automation units, designed to solve industrial and educational challenges."
    },
    {
        keywords: ["team", "who is", "akhil", "ressan", "marjana", "anshad"],
        answer: "Our core team of Robotics Research Engineers includes Akhil AV, Muhammed Ressan, and Marjana Parveen, led by Anshad K, our Robotics Research Head."
    },
    {
        keywords: ["education", "school", "college", "workshop", "training"],
        answer: "We empower schools and colleges through robotics training, workshops, and project-based learning to bridge the gap between theory and industry."
    },
    {
        keywords: ["contact", "email", "phone", "location", "address"],
        answer: "You can reach us at info@aisotop.com or aisotop.robotics@gmail.com. Our phone numbers are +91 90747 02722 and +91 97458 15897. We are located in Kaithappoyil, Calicut, Kerala."
    },
    {
        keywords: ["unique", "why", "different"],
        answer: "AISOTOP is unique because we stand at the intersection of Physical AI and Robotics, delivering solutions that are practical, innovative, and industry-relevant."
    },
    {
        keywords: ["hello", "hi", "hey", "hii"],
        answer: "Hey there! 👋 I'm AISO, your friendly AISOTOP assistant. Feel free to ask me about our services, products, team, or anything else!"
    },
    {
        keywords: ["thanks", "thank", "bye", "goodbye"],
        answer: "You're welcome! If you have more questions, I'm always here. Have a great day! 🤖"
    }
];

export function RobotAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: "Hi! I'm AISO, your AISOTOP assistant. How can I help you today? 🤖", sender: "bot" }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const userMessage: Message = { id: Date.now(), text: inputValue, sender: "user" };
        setMessages(prev => [...prev, userMessage]);
        setInputValue("");
        setIsTyping(true);

        setTimeout(() => {
            const responseText = getResponse(inputValue);
            const botMessage: Message = { id: Date.now() + 1, text: responseText, sender: "bot" };
            setMessages(prev => [...prev, botMessage]);
            setIsTyping(false);
        }, 1000);
    };

    const getResponse = (query: string) => {
        const q = query.toLowerCase();
        const match = KNOWLEDGE_BASE.find(k =>
            k.keywords.some(keyword => q.includes(keyword))
        );
        return match ? match.answer : "I'm sorry, I don't have information on that. You can ask me about our services, products, team, or contact details!";
    };

    return (
        <div className="fixed bottom-6 right-6 z-[200]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="absolute bottom-24 right-0 w-[350px] max-w-[calc(100vw-48px)] h-[500px] bg-card/95 backdrop-blur-2xl border border-border rounded-3xl shadow-2xl overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-4 bg-gradient-to-r from-[#0D9488] to-[#0891B2] flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/20 p-0.5 overflow-hidden">
                                    <img src={aisoRobot} alt="AISO" className="w-full h-full object-cover rounded-full" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white leading-none">AISO</h4>
                                    <div className="flex items-center gap-1.5 mt-0.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
                                        <span className="text-[10px] text-white/80 uppercase font-black tracking-widest">Online</span>
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((m) => (
                                <div key={m.id} className={`flex ${m.sender === "user" ? "justify-end" : "justify-start gap-2"}`}>
                                    {m.sender === "bot" && (
                                        <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 mt-1 bg-gradient-to-br from-[#0D9488] to-[#0891B2] p-0.5">
                                            <img src={aisoRobot} alt="AISO" className="w-full h-full object-cover rounded-full" />
                                        </div>
                                    )}
                                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${m.sender === "user"
                                            ? "bg-gradient-to-r from-[#0D9488] to-[#0891B2] text-white font-medium rounded-tr-none"
                                            : "bg-muted text-foreground rounded-tl-none"
                                        }`}>
                                        {m.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start gap-2">
                                    <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 mt-1 bg-gradient-to-br from-[#0D9488] to-[#0891B2] p-0.5">
                                        <img src={aisoRobot} alt="AISO" className="w-full h-full object-cover rounded-full" />
                                    </div>
                                    <div className="bg-muted p-3 rounded-2xl rounded-tl-none">
                                        <div className="flex gap-1.5">
                                            <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-2 h-2 bg-[#0D9488] rounded-full" />
                                            <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }} className="w-2 h-2 bg-[#0D9488] rounded-full" />
                                            <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }} className="w-2 h-2 bg-[#0D9488] rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-border bg-background/50">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                    placeholder="Ask AISO anything..."
                                    className="w-full bg-muted/50 border border-border rounded-full py-2.5 pl-4 pr-12 text-sm focus:outline-none focus:border-[#0D9488]/50 transition-colors"
                                />
                                <button
                                    onClick={handleSend}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-[#0D9488] to-[#0891B2] text-white rounded-full flex items-center justify-center hover:scale-105 transition-transform"
                                >
                                    <Send size={14} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button — The Robot */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="relative group"
            >
                {/* Glow ring */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#0D9488] to-[#0891B2] rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity animate-pulse" />

                {/* Robot image — full body, no circle crop */}
                <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10 w-20 h-20 drop-shadow-[0_4px_20px_rgba(13,148,136,0.5)]"
                >
                    <img
                        src={aisoRobot}
                        alt="AISO Assistant"
                        className="w-full h-full object-contain"
                    />
                </motion.div>

                {/* Chat bubble hint */}
                {!isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute -top-10 -left-16 bg-card text-foreground text-[11px] font-bold px-3 py-1.5 rounded-xl shadow-lg border border-border whitespace-nowrap"
                    >
                        Need help? 💬
                        <div className="absolute -bottom-1 right-4 w-2 h-2 bg-card border-r border-b border-border rotate-45" />
                    </motion.div>
                )}
            </motion.button>
        </div>
    );
}
