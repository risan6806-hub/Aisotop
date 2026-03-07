"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, BookOpen, ChevronRight, Play } from "lucide-react";

type Message = {
    id: number;
    text: string;
    sender: "bot" | "user";
};

const KNOWLEDGE_BASE = [
    {
        keywords: ["who", "what", "aisotop", "about", "mission", "vision", "goal"],
        answer: "I'm AISO! AISOTOP is a next-generation Physical AI, robotics, and automation company. Our mission is bridging digital intelligence with physical execution to solve real-world challenges and transform vision into reality."
    },
    {
        keywords: ["services", "do", "offer", "automation", "robotics", "physical ai", "smart systems", "industrial", "custom"],
        answer: "We offer specialized solutions in Physical AI & Robotics, AI Integrated Smart Systems, Industrial & Custom Automation, and Hands-on Innovation Programs."
    },
    {
        keywords: ["education", "school", "college", "workshop", "training", "program"],
        answer: "We empower schools and colleges through robotics training, workshops, and project-based learning to bridge the gap between theory and industry. Ask me about our Robotics Training for Schools or Workshops for Colleges!"
    },
    {
        keywords: ["products", "innovation", "robot", "innovative"],
        answer: "We develop innovative robotics products integrated with AI, such as our Physical AI systems and smart automation units, designed to solve industrial and educational challenges."
    },
    {
        keywords: ["team", "people", "who works", "founder", "engineers"],
        answer: "Our core team of experts includes Akhil AV, Muhammed Ressan, and Marjana Parveen as Robotics Research Engineers, led by Anshad K, our Robotics Research Head."
    },
    {
        keywords: ["akhil", "akhi", "av"],
        answer: "Akhil AV is a Robotics Research Engineer at AISOTOP. He's one of the key minds behind our physical AI and robotics innovation!"
    },
    {
        keywords: ["ressan", "muhammed", "reesan"],
        answer: "Muhammed Ressan is a Robotics Research Engineer here at AISOTOP, dedicated to solving real-world problems through robotics."
    },
    {
        keywords: ["marjana", "parveen"],
        answer: "Marjana Parveen is a Robotics Research Engineer at AISOTOP, contributing her expertise to our next-gen robotics projects."
    },
    {
        keywords: ["anshad", "anshad k", "head"],
        answer: "Anshad K is our Robotics Research Head. He leads the engineering team in developing pioneering solutions in Physical AI and automation."
    },
    {
        keywords: ["contact", "email", "phone", "location", "address", "reach", "where"],
        answer: "Reach us at info@aisotop.com or aisotop.robotics@gmail.com. Phone: +91 90747 02722 / +91 97458 15897. We are located in Kaithappoyil, Calicut, Kerala."
    },
    {
        keywords: ["hello", "hi", "hey", "hii", "greetings"],
        answer: "Hey there! 👋 I'm AISO! I can tell you all about AISOTOP's services, our amazing team (like Akhil or Ressan), or our robotics products. What's on your mind?"
    },
    {
        keywords: ["thanks", "thank", "bye", "goodbye", "cool", "awesome"],
        answer: "You're welcome! I'm always here if you need me. Have an awesome day! 🤖"
    }
];

const TOUR_STEPS = [
    { id: "hero", message: "Welcome to AISOTOP! We bridge digital intelligence with physical execution. 🚀" },
    { id: "about", message: "Discover how we solve real-world challenges through innovation and robotics. 💡" },
    { id: "services", message: "We offer specialized solutions in Physical AI, Smart Systems, and Automation. 🛠️" },
    { id: "automation", message: "Our automation expertise helps industries operate smarter and more efficiently. 🤖" },
    { id: "products", message: "Check out our high-performance robotics products integrated with AI. 📦" },
    { id: "education", message: "We empower students with hands-on robotics training and workshops. 🎓" },
    { id: "team", message: "Meet our dedicated team of Robotics Research Engineers! 👥" },
    { id: "contact", message: "Ready to transform your vision into reality? Get in touch with us! 📞" }
];

/* ═══════════════════════════════════════════════════════════
   PURE CSS + SVG ROBOT — Cute blue/white bot with:
   - Rounded head, dark visor, happy arc eyes (⌒‿⌒)
   - Small blue ear pods (floating)
   - Egg-shaped body (blue top → white bottom)
   - Cyan glowing chest circle
   - Floating detached arms & hands
   - Small stubby legs
   - Idle float, waving arm, talking pulse
   ═══════════════════════════════════════════════════════════ */

function AisoRobot({
    isTalking = false,
    isWaving = false,
    size = 120,
    floating = true,
    lookAt = { x: 0, y: 0 },
    disableTracking = false,
}: {
    isTalking?: boolean;
    isWaving?: boolean;
    size?: number;
    floating?: boolean;
    lookAt?: { x: number; y: number };
    disableTracking?: boolean;
}) {
    const s = size / 120; // scale factor
    const actualLookAt = disableTracking ? { x: 0, y: 0 } : lookAt;

    return (
        <motion.div
            animate={floating ? { y: [0, -6, 0] } : {}}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{
                width: size,
                height: size * 1.25,
                position: "relative",
                filter: "drop-shadow(0 6px 12px rgba(100,130,200,0.2))",
            }}
        >
            <div style={{
                position: "absolute", bottom: 0, left: "50%",
                transform: "translateX(-50%)",
                width: 120 * s, height: 140 * s,
            }}>

                {/* ── LEFT EAR (floating pod) ── */}
                <motion.div
                    animate={{ rotate: [-2, 2, -2] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: "absolute",
                        top: 24 * s, left: 6 * s,
                        width: 14 * s, height: 20 * s,
                        borderRadius: (7 * s) + "px",
                        background: "linear-gradient(180deg, #8BA4D0 0%, #7B96C8 100%)",
                        boxShadow: `inset 0 ${2 * s}px ${4 * s}px rgba(255,255,255,0.3), 0 ${2 * s}px ${6 * s}px rgba(100,130,200,0.3)`,
                        zIndex: 6,
                    }}
                />

                {/* ── RIGHT EAR (floating pod) ── */}
                <motion.div
                    animate={{ rotate: [2, -2, 2] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: "absolute",
                        top: 24 * s, right: 6 * s,
                        width: 14 * s, height: 20 * s,
                        borderRadius: (7 * s) + "px",
                        background: "linear-gradient(180deg, #8BA4D0 0%, #7B96C8 100%)",
                        boxShadow: `inset 0 ${2 * s}px ${4 * s}px rgba(255,255,255,0.3), 0 ${2 * s}px ${6 * s}px rgba(100,130,200,0.3)`,
                        zIndex: 6,
                    }}
                />

                {/* ── HEAD ── */}
                <div style={{
                    position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
                    width: 76 * s, height: 62 * s,
                    borderRadius: `${28 * s}px ${28 * s}px ${22 * s}px ${22 * s}px`,
                    background: "linear-gradient(160deg, #F0F4FA 0%, #DCE4F0 30%, #C5D0E4 70%, #B8C6DC 100%)",
                    boxShadow: `0 ${4 * s}px ${16 * s}px rgba(100,120,180,0.2), inset 0 ${2 * s}px ${6 * s}px rgba(255,255,255,0.7)`,
                    zIndex: 7,
                    overflow: "visible",
                }}>
                    {/* ── VISOR (dark screen face) ── */}
                    <div style={{
                        position: "absolute",
                        top: 8 * s, left: 8 * s, right: 8 * s,
                        height: 38 * s,
                        borderRadius: `${16 * s}px`,
                        background: "linear-gradient(180deg, #2D3748 0%, #1A202C 60%, #171923 100%)",
                        boxShadow: `inset 0 ${2 * s}px ${8 * s}px rgba(0,0,0,0.5), inset 0 -${1 * s}px ${4 * s}px rgba(45,55,72,0.3)`,
                        overflow: "hidden",
                    }}>
                        {/* Visor reflection subtle */}
                        <div style={{
                            position: "absolute", top: 0, left: 0, right: 0, height: "40%",
                            background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)",
                            borderRadius: `${16 * s}px ${16 * s}px 0 0`,
                        }} />

                        {/* ── EYES: Happy curved arcs (⌒ ⌒) with SVG ── */}
                        <svg
                            viewBox="0 0 60 38"
                            style={{
                                position: "absolute",
                                top: 0, left: 0,
                                width: "100%",
                                height: "100%",
                            }}
                        >
                            <motion.g
                                animate={{
                                    x: actualLookAt.x * 3.5,
                                    y: actualLookAt.y * 2.5,
                                }}
                                transition={{ type: "spring", stiffness: 150, damping: 20 }}
                            >
                                {/* Left eye — happy arc */}
                                <motion.path
                                    d="M14,22 Q22,10 30,22"
                                    fill="none"
                                    stroke="#56D7C0"
                                    strokeWidth="3.5"
                                    strokeLinecap="round"
                                    animate={{
                                        scaleY: [1, 1, 0.1, 1, 1],
                                        opacity: [1, 1, 0.8, 1, 1]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        times: [0, 0.45, 0.5, 0.55, 1],
                                        ease: "easeInOut"
                                    }}
                                    style={{ originY: "22px", originX: "22px" }}
                                />

                                {/* Right eye — happy arc */}
                                <motion.path
                                    d="M34,22 Q42,10 50,22"
                                    fill="none"
                                    stroke="#56D7C0"
                                    strokeWidth="3.5"
                                    strokeLinecap="round"
                                    animate={{
                                        scaleY: [1, 1, 0.1, 1, 1],
                                        opacity: [1, 1, 0.8, 1, 1]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        times: [0, 0.45, 0.5, 0.55, 1],
                                        delay: 0.1,
                                        ease: "easeInOut"
                                    }}
                                    style={{ originY: "22px", originX: "42px" }}
                                />

                                {/* Balanced eye bracket marks */}
                                <motion.g
                                    animate={{ opacity: [0.6, 0.6, 0.1, 0.6, 0.6] }}
                                    transition={{ duration: 4, repeat: Infinity, times: [0, 0.45, 0.5, 0.55, 1] }}
                                >
                                    <line x1="12" y1="16" x2="15" y2="14" stroke="#56D7C0" strokeWidth="1.5" strokeLinecap="round" />
                                    <line x1="52" y1="16" x2="49" y2="14" stroke="#56D7C0" strokeWidth="1.5" strokeLinecap="round" />
                                </motion.g>
                            </motion.g>

                            {/* Eye glow filter */}
                            <defs>
                                <filter id="eyeGlow">
                                    <feGaussianBlur stdDeviation="1.5" result="blur" />
                                    <feMerge>
                                        <feMergeNode in="blur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>
                        </svg>

                    </div>
                </div>

                {/* ── NECK (small connector) ── */}
                <div style={{
                    position: "absolute", top: 58 * s, left: "50%", transform: "translateX(-50%)",
                    width: 20 * s, height: 10 * s,
                    background: "linear-gradient(180deg, #B8C6DC 0%, #8BA4D0 100%)",
                    borderRadius: `0 0 ${4 * s}px ${4 * s}px`,
                    zIndex: 4,
                }} />

                {/* ── BODY (egg/capsule — blue top fading to white bottom) ── */}
                <div style={{
                    position: "absolute", top: 64 * s, left: "50%", transform: "translateX(-50%)",
                    width: 66 * s, height: 72 * s,
                    borderRadius: `${24 * s}px ${24 * s}px ${33 * s}px ${33 * s}px`,
                    background: "linear-gradient(180deg, #8BA4D0 0%, #9BB2D8 25%, #C8D4E8 55%, #E8EDF4 75%, #F5F7FA 100%)",
                    boxShadow: `0 ${4 * s}px ${16 * s}px rgba(100,120,180,0.15), inset 0 ${2 * s}px ${6 * s}px rgba(255,255,255,0.4)`,
                    zIndex: 3,
                    overflow: "visible",
                }}>
                    {/* Body highlight (shine) */}
                    <div style={{
                        position: "absolute",
                        top: 4 * s, left: 6 * s,
                        width: 18 * s, height: 30 * s,
                        borderRadius: "50%",
                        background: "linear-gradient(160deg, rgba(255,255,255,0.35), transparent)",
                    }} />

                    {/* ── CHEST CIRCLE (cyan glow) ── */}
                    <motion.div
                        animate={{
                            boxShadow: [
                                `0 0 ${6 * s}px rgba(86,215,192,0.5), 0 0 ${12 * s}px rgba(86,215,192,0.2)`,
                                `0 0 ${10 * s}px rgba(86,215,192,0.8), 0 0 ${20 * s}px rgba(86,215,192,0.4)`,
                                `0 0 ${6 * s}px rgba(86,215,192,0.5), 0 0 ${12 * s}px rgba(86,215,192,0.2)`,
                            ]
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                            position: "absolute",
                            top: 14 * s, left: "50%", transform: "translateX(-50%)",
                            width: 16 * s, height: 16 * s,
                            borderRadius: "50%",
                            background: "radial-gradient(circle at 40% 35%, #7EEEDE, #56D7C0, #3BBFAA)",
                            border: `${2 * s}px solid rgba(255,255,255,0.4)`,
                        }}
                    />

                    {/* Belly line (subtle separator) */}
                    <div style={{
                        position: "absolute",
                        top: 38 * s, left: 10 * s, right: 10 * s,
                        height: 1 * s,
                        background: "linear-gradient(90deg, transparent, rgba(139,164,208,0.3), transparent)",
                    }} />
                </div>

                {/* ── LEFT ARM (jointed) ── */}
                <motion.div
                    animate={{ rotate: [0, -4, 0, 4, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: "absolute",
                        top: 74 * s, left: 18 * s,
                        transformOrigin: "top right",
                        zIndex: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    {/* Shoulder Joint */}
                    <div style={{
                        width: 12 * s, height: 12 * s,
                        borderRadius: "50%",
                        background: "linear-gradient(180deg, #B8C6DC 0%, #8BA4D0 100%)",
                        marginBottom: -4 * s,
                    }} />
                    {/* Upper arm */}
                    <div style={{
                        width: 16 * s, height: 28 * s,
                        borderRadius: `${8 * s}px`,
                        background: "linear-gradient(180deg, #E8EDF4 0%, #D4DCE8 100%)",
                        boxShadow: `0 ${2 * s}px ${8 * s}px rgba(100,120,180,0.1), inset 0 ${1 * s}px ${3 * s}px rgba(255,255,255,0.5)`,
                    }} />
                    {/* Hand */}
                    <div style={{
                        width: 14 * s, height: 16 * s,
                        borderRadius: `${7 * s}px`,
                        background: "linear-gradient(180deg, #8BA4D0 0%, #7B96C8 100%)",
                        boxShadow: `0 ${2 * s}px ${6 * s}px rgba(100,130,200,0.2), inset 0 ${1 * s}px ${2 * s}px rgba(255,255,255,0.3)`,
                        marginTop: 2 * s,
                    }} />
                </motion.div>

                {/* ── RIGHT ARM (jointed & waving) ── */}
                <motion.div
                    animate={isWaving
                        ? {
                            rotate: [-10, -85, -10, -85, -10]
                        }
                        : { rotate: [0, 4, 0, -4, 0] }
                    }
                    transition={isWaving
                        ? { duration: 0.8, repeat: Infinity, ease: "easeInOut" }
                        : { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }
                    style={{
                        position: "absolute",
                        top: 74 * s, right: 18 * s,
                        transformOrigin: "top left",
                        zIndex: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    {/* Shoulder Joint */}
                    <div style={{
                        width: 12 * s, height: 12 * s,
                        borderRadius: "50%",
                        background: "linear-gradient(180deg, #B8C6DC 0%, #8BA4D0 100%)",
                        marginBottom: -4 * s,
                    }} />
                    {/* Upper arm */}
                    <div style={{
                        width: 16 * s, height: 28 * s,
                        borderRadius: `${8 * s}px`,
                        background: "linear-gradient(180deg, #E8EDF4 0%, #D4DCE8 100%)",
                        boxShadow: `0 ${2 * s}px ${8 * s}px rgba(100,120,180,0.1), inset 0 ${1 * s}px ${3 * s}px rgba(255,255,255,0.5)`,
                    }} />
                    {/* Hand */}
                    <div style={{
                        width: 14 * s, height: 16 * s,
                        borderRadius: `${7 * s}px`,
                        background: "linear-gradient(180deg, #8BA4D0 0%, #7B96C8 100%)",
                        boxShadow: `0 ${2 * s}px ${6 * s}px rgba(100,130,200,0.2), inset 0 ${1 * s}px ${2 * s}px rgba(255,255,255,0.3)`,
                        marginTop: 2 * s,
                        position: "relative",
                    }}>
                        {/* Fingers (visible when waving) */}
                        <AnimatePresence>
                            {isWaving && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    style={{ position: "absolute", inset: 0 }}
                                >
                                    <div style={{
                                        position: "absolute", top: -4 * s, left: 1 * s,
                                        width: 4 * s, height: 8 * s, borderRadius: 3 * s,
                                        background: "#8BA4D0",
                                        transform: "rotate(-15deg)",
                                    }} />
                                    <div style={{
                                        position: "absolute", top: -6 * s, left: 5 * s,
                                        width: 4 * s, height: 9 * s, borderRadius: 3 * s,
                                        background: "#8BA4D0",
                                    }} />
                                    <div style={{
                                        position: "absolute", top: -5 * s, right: 1 * s,
                                        width: 4 * s, height: 8 * s, borderRadius: 3 * s,
                                        background: "#8BA4D0",
                                        transform: "rotate(15deg)",
                                    }} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* ── GROUND SHADOW ── */}
                <motion.div
                    animate={{ scale: [1, 0.7, 1], opacity: [0.3, 0.1, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: "absolute",
                        bottom: -15 * s, left: "50%", transform: "translateX(-50%)",
                        width: 40 * s, height: 6 * s,
                        borderRadius: "50%",
                        background: "radial-gradient(ellipse, rgba(100,130,200,0.4), transparent)",
                    }}
                />
            </div>
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
    const [lookAt, setLookAt] = useState({ x: 0, y: 0 });
    const [isTouring, setIsTouring] = useState(false);
    const [tourStep, setTourStep] = useState(-1);
    const [tourMessage, setTourMessage] = useState("");
    const scrollRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Mouse Tracking Logic
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (isTouring) {
                setLookAt({ x: 0, y: -0.4 }); // Look up at the narration bubble
                return;
            }
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const dx = e.clientX - centerX;
            const dy = e.clientY - centerY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Limit the eye movement range
            const maxDist = 300;
            const intensity = Math.min(dist / maxDist, 1);
            const angle = Math.atan2(dy, dx);

            // Only follow if somewhat close
            if (dist < 800) {
                setLookAt({
                    x: Math.cos(angle) * intensity,
                    y: Math.sin(angle) * intensity
                });
            } else {
                setLookAt({ x: 0, y: 0 });
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

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
        if (isTouring && tourStep >= 0 && tourStep < TOUR_STEPS.length) {
            const step = TOUR_STEPS[tourStep];
            const element = document.getElementById(step.id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "center" });
                setTourMessage(step.message);
                setIsTalking(true);
                setTimeout(() => setIsTalking(false), 3000);
            }
        }
    }, [isTouring, tourStep]);

    const startTour = () => {
        setIsOpen(false);
        setIsTouring(true);
        setTourStep(0);
        setIsWaving(true);
        setTimeout(() => setIsWaving(false), 2000);
    };

    const nextStep = () => {
        if (tourStep < TOUR_STEPS.length - 1) {
            setTourStep(prev => prev + 1);
        } else {
            setIsTouring(false);
            setTourStep(-1);
            setTourMessage("");
        }
    };

    useEffect(() => {
        if (scrollRef.current) {
            // Using requestAnimationFrame to ensure the DOM has updated before scrolling
            requestAnimationFrame(() => {
                if (scrollRef.current) {
                    scrollRef.current.scrollTo({
                        top: scrollRef.current.scrollHeight,
                        behavior: "smooth"
                    });
                }
            });
        }
    }, [messages, isTyping, isOpen]);

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

        // Advanced Relevance Scoring
        const scoredResults = KNOWLEDGE_BASE.map(item => {
            let score = 0;
            item.keywords.forEach(keyword => {
                const kw = keyword.toLowerCase();
                if (q === kw) score += 10; // Exact match
                else if (q.includes(kw)) score += 5; // Partial match
            });
            return { ...item, score };
        }).filter(item => item.score > 0);

        // Sort by highest score
        scoredResults.sort((a, b) => b.score - a.score);

        if (scoredResults.length > 0) {
            // If the top score is high enough, return it
            return scoredResults[0].answer;
        }

        return "I'm sorry, I couldn't find a specific answer for that. You can ask me about our team (like Akhil or Ressan), our services, or our mission!";
    };

    return (
        <div ref={containerRef} className="fixed bottom-4 right-4 z-[200]">
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
                                    <AisoRobot size={32} isTalking={isTalking} floating={false} disableTracking={true} />
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

                        {/* Messages Area with fixed height and overflow */}
                        <div
                            ref={scrollRef}
                            className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth custom-scrollbar"
                            style={{ scrollbarWidth: 'thin' }}
                        >
                            {messages.map((m) => (
                                <div key={m.id} className={`flex ${m.sender === "user" ? "justify-end" : "justify-start gap-2"}`}>
                                    {m.sender === "bot" && (
                                        <div className="w-6 h-8 flex-shrink-0">
                                            <AisoRobot size={24} isTalking={isTalking} floating={false} disableTracking={true} />
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
                                        <AisoRobot size={24} isTalking={true} floating={false} />
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
                            <div className="flex gap-2">
                                <button
                                    onClick={startTour}
                                    title="Start Guided Tour"
                                    className="w-10 h-10 bg-muted/80 text-foreground/70 rounded-full flex items-center justify-center hover:bg-[#0D9488]/10 hover:text-[#0D9488] transition-all"
                                >
                                    <BookOpen size={18} />
                                </button>
                                <div className="relative flex-1">
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
                                        className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-[#0D9488] to-[#0891B2] text-white rounded-full flex items-center justify-center hover:scale-105 transition-transform"
                                    >
                                        <Send size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Guided Tour Narration Bubble */}
            <AnimatePresence>
                {isTouring && (
                    <motion.div
                        initial={{ opacity: 0, x: 20, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.9 }}
                        className="absolute bottom-32 right-0 w-[280px] bg-card/95 backdrop-blur-xl border border-[#0D9488]/30 rounded-3xl p-4 shadow-2xl z-30"
                    >
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#0D9488]">AISO Guide • {tourStep + 1}/{TOUR_STEPS.length}</span>
                            <button onClick={() => { setIsTouring(false); setTourStep(-1); }} className="text-foreground/40 hover:text-foreground/80">
                                <X size={14} />
                            </button>
                        </div>
                        <p className="text-sm font-medium leading-relaxed mb-4">
                            {tourMessage}
                        </p>
                        <button
                            onClick={nextStep}
                            className="w-full bg-gradient-to-r from-[#0D9488] to-[#0891B2] text-white text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                        >
                            {tourStep < TOUR_STEPS.length - 1 ? "Next Section" : "Finish Tour"}
                            <ChevronRight size={14} />
                        </button>
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
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
            >
                <AisoRobot
                    size={76}
                    isWaving={isWaving}
                    isTalking={isTalking}
                    floating={true}
                    lookAt={lookAt}
                    disableTracking={isOpen}
                />
            </motion.button>
        </div>
    );
}
