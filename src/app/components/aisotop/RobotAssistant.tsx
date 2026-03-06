"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send } from "lucide-react";

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

/* ── SVG Robot Character ── */
function AisoRobotSVG({ size = 48, animate = false }: { size?: number; animate?: boolean }) {
    return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Antenna */}
            <motion.line
                x1="60" y1="18" x2="60" y2="8"
                stroke="#4ADE80" strokeWidth="3" strokeLinecap="round"
                {...(animate ? { animate: { y2: [8, 5, 8] }, transition: { duration: 1.5, repeat: Infinity } } : {})}
            />
            <motion.circle
                cx="60" cy="5" r="4"
                fill="#4ADE80"
                {...(animate ? { animate: { cy: [5, 2, 5], fill: ["#4ADE80", "#22D3EE", "#4ADE80"] }, transition: { duration: 1.5, repeat: Infinity } } : {})}
            />

            {/* Head */}
            <rect x="32" y="18" width="56" height="40" rx="14" fill="#1E293B" stroke="#4ADE80" strokeWidth="2.5" />
            {/* Visor / Face plate */}
            <rect x="38" y="26" width="44" height="24" rx="8" fill="#0F172A" />

            {/* Eyes */}
            <motion.circle
                cx="49" cy="38" r="6"
                fill="#4ADE80"
                {...(animate ? { animate: { r: [6, 3, 6] }, transition: { duration: 2.5, repeat: Infinity, repeatDelay: 2 } } : {})}
            />
            <motion.circle
                cx="71" cy="38" r="6"
                fill="#4ADE80"
                {...(animate ? { animate: { r: [6, 3, 6] }, transition: { duration: 2.5, repeat: Infinity, repeatDelay: 2 } } : {})}
            />
            {/* Eye pupils / glint */}
            <circle cx="51" cy="36" r="2" fill="#fff" opacity="0.7" />
            <circle cx="73" cy="36" r="2" fill="#fff" opacity="0.7" />

            {/* Mouth */}
            <rect x="46" y="46" width="28" height="3" rx="1.5" fill="#4ADE80" opacity="0.6" />

            {/* Neck */}
            <rect x="52" y="58" width="16" height="8" rx="3" fill="#334155" />

            {/* Body */}
            <rect x="28" y="64" width="64" height="36" rx="10" fill="#1E293B" stroke="#4ADE80" strokeWidth="2" />
            {/* Body panel */}
            <rect x="42" y="72" width="36" height="20" rx="6" fill="#0F172A" />
            {/* Heart / Core light */}
            <motion.circle
                cx="60" cy="82" r="5"
                fill="#22D3EE"
                {...(animate ? { animate: { opacity: [0.6, 1, 0.6], r: [5, 6, 5] }, transition: { duration: 1.2, repeat: Infinity } } : {})}
            />
            <circle cx="60" cy="82" r="2.5" fill="#fff" opacity="0.5" />

            {/* Left Arm */}
            <motion.g
                {...(animate ? { animate: { rotate: [0, -8, 0] }, transition: { duration: 2, repeat: Infinity }, style: { transformOrigin: "28px 72px" } } : {})}
            >
                <rect x="12" y="68" width="16" height="8" rx="4" fill="#334155" />
                <circle cx="12" cy="72" r="6" fill="#1E293B" stroke="#4ADE80" strokeWidth="1.5" />
            </motion.g>

            {/* Right Arm */}
            <motion.g
                {...(animate ? { animate: { rotate: [0, 8, 0] }, transition: { duration: 2, repeat: Infinity, delay: 0.3 }, style: { transformOrigin: "92px 72px" } } : {})}
            >
                <rect x="92" y="68" width="16" height="8" rx="4" fill="#334155" />
                <circle cx="108" cy="72" r="6" fill="#1E293B" stroke="#4ADE80" strokeWidth="1.5" />
            </motion.g>

            {/* Left Leg */}
            <rect x="38" y="100" width="14" height="12" rx="5" fill="#334155" />
            <rect x="35" y="108" width="20" height="8" rx="4" fill="#1E293B" stroke="#4ADE80" strokeWidth="1.5" />

            {/* Right Leg */}
            <rect x="68" y="100" width="14" height="12" rx="5" fill="#334155" />
            <rect x="65" y="108" width="20" height="8" rx="4" fill="#1E293B" stroke="#4ADE80" strokeWidth="1.5" />

            {/* Ear bolts */}
            <circle cx="32" cy="34" r="3" fill="#334155" stroke="#4ADE80" strokeWidth="1" />
            <circle cx="88" cy="34" r="3" fill="#334155" stroke="#4ADE80" strokeWidth="1" />
        </svg>
    );
}

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
                        className="absolute bottom-20 right-0 w-[350px] max-w-[calc(100vw-48px)] h-[500px] bg-card/90 backdrop-blur-2xl border border-border rounded-3xl shadow-2xl overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-4 bg-[#0F172A] flex items-center justify-between border-b border-[#4ADE80]/20">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 flex items-center justify-center">
                                    <AisoRobotSVG size={40} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white leading-none">AISO</h4>
                                    <div className="flex items-center gap-1.5 mt-0.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
                                        <span className="text-[10px] text-[#4ADE80] uppercase font-black tracking-widest">Online</span>
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((m) => (
                                <div key={m.id} className={`flex ${m.sender === "user" ? "justify-end" : "justify-start gap-2"}`}>
                                    {m.sender === "bot" && (
                                        <div className="w-6 h-6 flex-shrink-0 mt-1">
                                            <AisoRobotSVG size={24} />
                                        </div>
                                    )}
                                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${m.sender === "user"
                                            ? "bg-[#4ADE80] text-[#0F172A] font-medium rounded-tr-none"
                                            : "bg-muted text-foreground rounded-tl-none"
                                        }`}>
                                        {m.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start gap-2">
                                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                                        <AisoRobotSVG size={24} />
                                    </div>
                                    <div className="bg-muted p-3 rounded-2xl rounded-tl-none">
                                        <div className="flex gap-1.5">
                                            <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-2 h-2 bg-[#4ADE80] rounded-full" />
                                            <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }} className="w-2 h-2 bg-[#4ADE80] rounded-full" />
                                            <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }} className="w-2 h-2 bg-[#4ADE80] rounded-full" />
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
                                    className="w-full bg-muted/50 border border-border rounded-full py-2.5 pl-4 pr-12 text-sm focus:outline-none focus:border-[#4ADE80]/50 transition-colors"
                                />
                                <button
                                    onClick={handleSend}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#4ADE80] text-[#0F172A] rounded-full flex items-center justify-center hover:scale-105 transition-transform"
                                >
                                    <Send size={14} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button — SVG Robot */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 rounded-full bg-[#0F172A] border-2 border-[#4ADE80]/40 shadow-[0_0_30px_rgba(74,222,128,0.3)] flex items-center justify-center relative group"
            >
                {/* Pulse ring */}
                <div className="absolute inset-0 rounded-full border-2 border-[#4ADE80]/30 animate-ping" />
                <AisoRobotSVG size={40} animate />
            </motion.button>
        </div>
    );
}
