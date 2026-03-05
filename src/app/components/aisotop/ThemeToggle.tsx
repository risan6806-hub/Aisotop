"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "motion/react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [pulling, setPulling] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isLight = theme === "light";

    const toggleTheme = () => {
        setPulling(true);
        setTimeout(() => {
            setTheme(isLight ? "dark" : "light");
            setPulling(false);
        }, 300);
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative flex flex-col items-center focus:outline-none group"
            aria-label="Toggle Theme"
            style={{ width: 36, height: 52 }}
        >
            {/* Lamp shade */}
            <div className="relative z-10">
                {/* Shade shape — trapezoid */}
                <div
                    className="relative transition-all duration-500"
                    style={{ width: 28, height: 16 }}
                >
                    <svg
                        viewBox="0 0 28 16"
                        width="28"
                        height="16"
                        className="block"
                    >
                        <path
                            d="M6 0 H22 L28 16 H0 Z"
                            className={`transition-all duration-500 ${isLight
                                    ? "fill-amber-100 stroke-amber-300"
                                    : "fill-gray-600 stroke-gray-500"
                                }`}
                            strokeWidth="0.5"
                        />
                        {/* Shade ribs */}
                        {[10, 14, 18].map((x) => (
                            <line
                                key={x}
                                x1={x - 1.5}
                                y1="0"
                                x2={x - 0.5}
                                y2="16"
                                className={`transition-all duration-500 ${isLight ? "stroke-amber-200/80" : "stroke-gray-500/40"
                                    }`}
                                strokeWidth="0.3"
                            />
                        ))}
                    </svg>
                </div>

                {/* Lamp glow (only in light mode) */}
                <motion.div
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full pointer-events-none"
                    animate={{
                        opacity: isLight ? [0.6, 0.9, 0.6] : 0,
                        scale: isLight ? [1, 1.15, 1] : 0.5,
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        width: 20,
                        height: 20,
                        background: "radial-gradient(circle, rgba(251,191,36,0.5) 0%, transparent 70%)",
                    }}
                />

                {/* Light cone (only in light mode) */}
                <motion.div
                    className="absolute top-[14px] left-1/2 -translate-x-1/2 pointer-events-none"
                    animate={{
                        opacity: isLight ? 0.3 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    style={{
                        width: 0,
                        height: 0,
                        borderLeft: "14px solid transparent",
                        borderRight: "14px solid transparent",
                        borderTop: "24px solid rgba(251,191,36,0.2)",
                    }}
                />

                {/* Small bulb dot */}
                <motion.div
                    className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 rounded-full"
                    animate={{
                        backgroundColor: isLight ? "#fbbf24" : "#4b5563",
                        boxShadow: isLight
                            ? "0 0 6px 2px rgba(251,191,36,0.6)"
                            : "0 0 2px 1px rgba(75,85,99,0.3)",
                    }}
                    transition={{ duration: 0.4 }}
                    style={{ width: 4, height: 4 }}
                />
            </div>

            {/* Pull string */}
            <motion.div
                className="flex flex-col items-center"
                animate={{
                    y: pulling ? 6 : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                }}
            >
                {/* String line */}
                <motion.div
                    className={`transition-colors duration-500 ${isLight ? "bg-amber-600/40" : "bg-gray-500/40"
                        }`}
                    style={{ width: 1, height: 16 }}
                />

                {/* String knob */}
                <motion.div
                    className={`rounded-full transition-all duration-500 ${isLight
                            ? "bg-amber-500 shadow-[0_0_4px_rgba(251,191,36,0.4)]"
                            : "bg-gray-400 shadow-[0_0_2px_rgba(156,163,175,0.3)]"
                        }`}
                    style={{ width: 5, height: 5 }}
                    whileHover={{ scale: 1.4 }}
                />
            </motion.div>

            {/* Hover hint — subtle bounce on string */}
            <style>{`
                .group:hover .pull-string-hint {
                    animation: pull-hint 0.6s ease-in-out;
                }
                @keyframes pull-hint {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(3px); }
                }
            `}</style>
        </button>
    );
}
