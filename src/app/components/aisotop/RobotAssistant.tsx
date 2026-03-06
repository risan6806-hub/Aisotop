"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send } from "lucide-react";
import aisoRobotImg from "@/assets/aiso_robot.png";

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
        answer: "Our core team includes Akhil AV, Muhammed Ressan, and Marjana Parveen as Robotics Research Engineers, led by Anshad K, our Robotics Research Head."
    },
    {
        keywords: ["education", "school", "college", "workshop", "training"],
        answer: "We empower schools and colleges through robotics training, workshops, and project-based learning to bridge the gap between theory and industry."
    },
    {
        keywords: ["contact", "email", "phone", "location", "address"],
        answer: "Reach us at info@aisotop.com or aisotop.robotics@gmail.com. Phone: +91 90747 02722 / +91 97458 15897. Location: Kaithappoyil, Calicut, Kerala."
    },
    {
        keywords: ["unique", "why", "different"],
        answer: "AISOTOP stands at the intersection of Physical AI and Robotics, delivering practical, innovative, and industry-relevant solutions."
    },
    {
        keywords: ["hello", "hi", "hey", "hii"],
        answer: "Hey there! 👋 I'm AISO! Feel free to ask me about our services, products, team, or anything else!"
    },
    {
        keywords: ["thanks", "thank", "bye", "goodbye"],
        answer: "You're welcome! I'm always here if you need me. Have a great day! 🤖"
    }
];

/* ═══════════════════════════════════════════════
   ROBOT IMAGE COMPONENT (with floating animation)
   ═══════════════════════════════════════════════ */

function AisoRobot({
    isTalking = false,
    isWaving = false,
    size = 120,
}: {
    isTalking?: boolean;
    isWaving?: boolean;
    size?: number;
}) {
    return (
        <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{
                width: size,
                height: size,
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {/* Robot Image */}
            <motion.img
                src={aisoRobotImg}
                alt="AISO Robot Assistant"
                animate={isWaving
                    ? { rotate: [-3, 3, -3] }
                    : isTalking
                        ? { scale: [1, 1.03, 1] }
                        : {}
                }
                transition={isWaving
                    ? { duration: 0.6, repeat: Infinity, ease: "easeInOut" }
                    : isTalking
                        ? { duration: 0.5, repeat: Infinity, ease: "easeInOut" }
                        : {}
                }
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    filter: "drop-shadow(0 4px 12px rgba(13,148,136,0.3))",
                    pointerEvents: "none",
                    userSelect: "none",
                }}
                draggable={false}
            />

            {/* Ground Glow */}
            <motion.div
                animate={{ scale: [1, 0.85, 1], opacity: [0.4, 0.2, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: "absolute",
                    bottom: -4,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: size * 0.5,
                    height: 6,
                    borderRadius: "50%",
                    background: "radial-gradient(ellipse, rgba(13,148,136,0.4), transparent)",
                }}
            />
        </motion.div>
    );
}

/* ═══════════════════════════
   MAIN COMPONENT
   ═══════════════════════════ */

export function RobotAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [showGreeting, setShowGreeting] = useState(false);
    const [isWaving, setIsWaving] = useState(false);
    const [isTalking, setIsTalking] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: "Hi! I'm AISO, your AISOTOP assistant. How can I help you today? 🤖", sender: "bot" }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Show greeting + wave after 2 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowGreeting(true);
            setIsWaving(true);
            setTimeout(() => setIsWaving(false), 4000);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isOpen) setShowGreeting(false);
    }, [isOpen]);

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
        setIsTalking(true);

        setTimeout(() => {
            const responseText = getResponse(inputValue);
            const botMessage: Message = { id: Date.now() + 1, text: responseText, sender: "bot" };
            setMessages(prev => [...prev, botMessage]);
            setIsTyping(false);
            // Keep talking for a bit after message appears
            setTimeout(() => setIsTalking(false), 1500);
        }, 1200);
    };

    const getResponse = (query: string) => {
        const q = query.toLowerCase();
        const match = KNOWLEDGE_BASE.find(k =>
            k.keywords.some(keyword => q.includes(keyword))
        );
        return match ? match.answer : "I'm sorry, I don't have information on that. You can ask me about our services, products, team, or contact details!";
    };

    return (
        <div className="fixed bottom-4 right-4 z-[200]">
            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="absolute bottom-44 right-0 w-[350px] max-w-[calc(100vw-32px)] h-[420px] bg-card/95 backdrop-blur-2xl border border-border rounded-3xl shadow-2xl overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-3 bg-gradient-to-r from-[#0D9488] to-[#0891B2] flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8">
                                    <AisoRobot size={32} isTalking={isTalking} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-sm leading-none">AISO</h4>
                                    <div className="flex items-center gap-1.5 mt-0.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
                                        <span className="text-[9px] text-white/80 uppercase font-black tracking-widest">Online</span>
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div ref={scrollRef} className="flex-1 overflow-y-auto p-3 space-y-3">
                            {messages.map((m) => (
                                <div key={m.id} className={`flex ${m.sender === "user" ? "justify-end" : "justify-start gap-2"}`}>
                                    {m.sender === "bot" && (
                                        <div className="w-6 h-8 flex-shrink-0">
                                            <AisoRobot size={24} isTalking={isTalking} />
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
                                    <div className="w-6 h-8 flex-shrink-0">
                                        <AisoRobot size={24} isTalking={true} />
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
                        <div className="p-3 border-t border-border bg-background/50">
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

            {/* Greeting Speech Bubble */}
            <AnimatePresence>
                {showGreeting && !isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="absolute bottom-40 right-2 z-20"
                    >
                        <div
                            className="bg-card text-foreground text-sm font-semibold px-4 py-3 rounded-2xl rounded-br-sm shadow-xl border border-border cursor-pointer whitespace-nowrap"
                            onClick={() => { setShowGreeting(false); setIsOpen(true); }}
                        >
                            Hi! 👋 How can I help you?
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Robot Character — Full Body, Pure CSS */}
            <motion.button
                onClick={() => {
                    setIsOpen(!isOpen);
                    if (!isOpen) {
                        setIsWaving(true);
                        setTimeout(() => setIsWaving(false), 3000);
                    }
                }}
                className="relative bg-transparent border-none outline-none cursor-pointer"
                whileTap={{ scale: 0.95 }}
            >
                <AisoRobot size={120} isWaving={isWaving} isTalking={isTalking} />
            </motion.button>
        </div>
    );
}
