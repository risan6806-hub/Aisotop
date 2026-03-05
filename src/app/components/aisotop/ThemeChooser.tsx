"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun, Sparkles } from "lucide-react";

interface ThemeChooserProps {
    onThemeSelected: () => void;
}

export function ThemeChooser({ onThemeSelected }: ThemeChooserProps) {
    const { setTheme } = useTheme();
    const [selected, setSelected] = useState<"dark" | "light" | null>(null);
    const [ripple, setRipple] = useState<{ x: number; y: number } | null>(null);

    const handleSelect = (theme: "dark" | "light", e: React.MouseEvent) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        setRipple({
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
        });
        setSelected(theme);
        setTheme(theme);

        setTimeout(() => {
            onThemeSelected();
        }, 1800);
    };

    return (
        <AnimatePresence>
            {!selected || true ? (
                <motion.div
                    key="theme-chooser"
                    className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
                    style={{ background: "#0a0a0a" }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.8, delay: 0.6, ease: [0.76, 0, 0.24, 1] },
                    }}
                    animate={selected ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.8, delay: selected ? 1.0 : 0 }}
                >
                    {/* Starfield background — many more stars */}
                    <div className="absolute inset-0">
                        {Array.from({ length: 120 }).map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute rounded-full"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    width: i % 5 === 0 ? 3 : i % 3 === 0 ? 2 : 1,
                                    height: i % 5 === 0 ? 3 : i % 3 === 0 ? 2 : 1,
                                    background: i % 7 === 0 ? '#fffbe6' : i % 4 === 0 ? '#e0d4ff' : '#ffffff',
                                    boxShadow: i % 5 === 0
                                        ? '0 0 6px 2px rgba(255,255,255,0.4)'
                                        : i % 3 === 0
                                            ? '0 0 4px 1px rgba(255,255,255,0.2)'
                                            : 'none',
                                }}
                                animate={{
                                    opacity: [0.05, i % 5 === 0 ? 1 : 0.7, 0.05],
                                    scale: [0.6, i % 5 === 0 ? 1.6 : 1.2, 0.6],
                                }}
                                transition={{
                                    duration: 1.5 + Math.random() * 3,
                                    repeat: Infinity,
                                    delay: Math.random() * 3,
                                    ease: "easeInOut",
                                }}
                            />
                        ))}

                        {/* Shooting stars */}
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={`shooting-${i}`}
                                className="absolute h-[1px] bg-gradient-to-r from-white/80 to-transparent rounded-full"
                                style={{
                                    width: 60 + i * 20,
                                    top: `${15 + i * 25}%`,
                                    left: "-10%",
                                    rotate: 25 + i * 5,
                                }}
                                animate={{
                                    x: ["0vw", "120vw"],
                                    opacity: [0, 1, 0],
                                }}
                                transition={{
                                    duration: 1.2,
                                    repeat: Infinity,
                                    delay: 3 + i * 4,
                                    ease: "easeOut",
                                    repeatDelay: 6 + i * 3,
                                }}
                            />
                        ))}
                    </div>

                    {/* Title */}
                    <motion.div
                        className="absolute top-[10%] text-center z-10"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: selected ? 0 : 1, y: selected ? -60 : 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: selected ? 0 : 0.3 }}
                    >
                        <motion.div
                            className="flex items-center justify-center gap-2 mb-3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <Sparkles size={16} className="text-purple-400" />
                            <span className="text-[10px] uppercase tracking-[0.3em] text-purple-400/80 font-bold">
                                Choose Your Atmosphere
                            </span>
                            <Sparkles size={16} className="text-purple-400" />
                        </motion.div>
                        <h2 className="text-3xl md:text-4xl font-black text-white/90 tracking-tight">
                            How would you like to explore?
                        </h2>
                    </motion.div>

                    {/* Clouds Container */}
                    <div className="relative flex items-start justify-center gap-16 md:gap-32 mt-8">
                        {/* ============ DARK CLOUD ============ */}
                        <motion.div
                            className="flex flex-col items-center"
                            initial={{ y: -400 }}
                            animate={{ y: selected ? -600 : 0 }}
                            transition={
                                selected
                                    ? { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.15 }
                                    : { duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }
                            }
                        >
                            {/* String */}
                            <motion.div
                                className="w-[2px] bg-gradient-to-b from-transparent via-gray-500/40 to-gray-400/60"
                                style={{ height: 120 }}
                                animate={!selected ? { height: [115, 128, 115] } : {}}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            />

                            {/* Cloud + pendulum swing */}
                            <motion.div
                                animate={!selected ? { rotate: [-2, 2, -2], y: [0, 6, 0] } : {}}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                style={{ originX: 0.5, originY: 0 }}
                            >
                                <motion.button
                                    onClick={(e) => handleSelect("dark", e)}
                                    className="relative group cursor-pointer focus:outline-none"
                                    whileHover={{ scale: 1.08, y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                    disabled={selected !== null}
                                >
                                    {/* Cloud glow */}
                                    <motion.div
                                        className="absolute inset-0 bg-purple-500/20 blur-[40px] rounded-full scale-150"
                                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                    />

                                    {/* Cloud body */}
                                    <div className="relative w-40 h-32 md:w-52 md:h-40">
                                        <div className="absolute inset-0 flex items-end justify-center">
                                            <div className="relative">
                                                {/* Main oval */}
                                                <div className="w-36 h-20 md:w-44 md:h-24 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 rounded-[50%] shadow-[0_8px_32px_rgba(0,0,0,0.8),inset_0_-4px_12px_rgba(139,92,246,0.1)]" />
                                                {/* Left bump */}
                                                <div className="absolute -top-5 left-4 w-16 h-14 md:w-20 md:h-16 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-full" />
                                                {/* Center bump (tallest) */}
                                                <div className="absolute -top-9 left-10 md:left-12 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-gray-700 via-gray-850 to-gray-900 rounded-full" />
                                                {/* Right bump */}
                                                <div className="absolute -top-4 right-3 w-12 h-12 md:w-16 md:h-14 bg-gradient-to-br from-gray-750 via-gray-800 to-gray-900 rounded-full" />
                                            </div>
                                        </div>

                                        {/* Moon — centered on the cloud */}
                                        <motion.div
                                            className="absolute top-2 left-1/2 -translate-x-1/2 text-yellow-300"
                                            style={{ filter: 'drop-shadow(0 0 8px rgba(253, 224, 71, 0.6)) drop-shadow(0 0 20px rgba(253, 224, 71, 0.3))' }}
                                            animate={{ rotate: [-5, 5, -5] }}
                                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                        >
                                            <Moon size={32} fill="currentColor" />
                                        </motion.div>

                                        {/* Extra stars around the dark cloud */}
                                        {[
                                            { x: -30, y: -20, size: 3, delay: 0 },
                                            { x: 50, y: -25, size: 4, delay: 0.3 },
                                            { x: -40, y: 5, size: 2, delay: 0.7 },
                                            { x: 60, y: -5, size: 3, delay: 1 },
                                            { x: -15, y: -30, size: 2, delay: 1.3 },
                                            { x: 40, y: 15, size: 2, delay: 1.6 },
                                            { x: -50, y: -10, size: 3, delay: 0.5 },
                                            { x: 70, y: -15, size: 2, delay: 2 },
                                            { x: 5, y: -35, size: 4, delay: 0.2 },
                                            { x: -20, y: 20, size: 2, delay: 1.8 },
                                        ].map((star, i) => (
                                            <motion.div
                                                key={i}
                                                className="absolute bg-white rounded-full"
                                                style={{
                                                    width: star.size,
                                                    height: star.size,
                                                    left: `calc(50% + ${star.x}px)`,
                                                    top: `calc(20% + ${star.y}px)`,
                                                    boxShadow: star.size >= 3
                                                        ? '0 0 6px 2px rgba(255,255,255,0.5)'
                                                        : '0 0 3px 1px rgba(255,255,255,0.3)',
                                                }}
                                                animate={{ opacity: [0, 1, 0], scale: [0.5, 1.4, 0.5] }}
                                                transition={{
                                                    duration: 1.5 + Math.random(),
                                                    repeat: Infinity,
                                                    delay: star.delay,
                                                }}
                                            />
                                        ))}
                                    </div>

                                    {/* Label */}
                                    <motion.div
                                        className="text-center mt-4"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1 }}
                                    >
                                        <span className="text-white/80 text-sm font-bold tracking-wide uppercase">
                                            Dark Mode
                                        </span>
                                        <div className="text-white/30 text-xs mt-1">Night Vibes</div>
                                    </motion.div>
                                </motion.button>
                            </motion.div>
                        </motion.div>

                        {/* ============ LIGHT CLOUD ============ */}
                        <motion.div
                            className="flex flex-col items-center"
                            initial={{ y: -400 }}
                            animate={{ y: selected ? -600 : 0 }}
                            transition={
                                selected
                                    ? { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.25 }
                                    : { duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.4 }
                            }
                        >
                            {/* String */}
                            <motion.div
                                className="w-[2px] bg-gradient-to-b from-transparent via-amber-400/30 to-amber-300/50"
                                style={{ height: 120 }}
                                animate={!selected ? { height: [128, 115, 128] } : {}}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            />

                            {/* Cloud + pendulum swing */}
                            <motion.div
                                animate={!selected ? { rotate: [2, -2, 2], y: [0, 6, 0] } : {}}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                style={{ originX: 0.5, originY: 0 }}
                            >
                                <motion.button
                                    onClick={(e) => handleSelect("light", e)}
                                    className="relative group cursor-pointer focus:outline-none"
                                    whileHover={{ scale: 1.08, y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                    disabled={selected !== null}
                                >
                                    {/* Cloud glow */}
                                    <motion.div
                                        className="absolute inset-0 bg-amber-300/20 blur-[40px] rounded-full scale-150"
                                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                                        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                                    />

                                    {/* Cloud body */}
                                    <div className="relative w-40 h-32 md:w-52 md:h-40">
                                        <div className="absolute inset-0 flex items-end justify-center">
                                            <div className="relative">
                                                {/* Main oval */}
                                                <div className="w-36 h-20 md:w-44 md:h-24 bg-gradient-to-br from-white via-gray-100 to-gray-200 rounded-[50%] shadow-[0_8px_32px_rgba(255,200,50,0.15),inset_0_-4px_12px_rgba(255,200,100,0.2)]" />
                                                {/* Left bump */}
                                                <div className="absolute -top-5 left-4 w-16 h-14 md:w-20 md:h-16 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-full" />
                                                {/* Center bump (tallest) */}
                                                <div className="absolute -top-9 left-10 md:left-12 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-white to-gray-100 rounded-full" />
                                                {/* Right bump */}
                                                <div className="absolute -top-4 right-3 w-12 h-12 md:w-16 md:h-14 bg-gradient-to-br from-gray-50 to-gray-200 rounded-full" />
                                            </div>
                                        </div>

                                        {/* Sun — centered on the cloud */}
                                        <motion.div
                                            className="absolute top-2 left-1/2 -translate-x-1/2 text-amber-500"
                                            style={{ filter: 'drop-shadow(0 0 10px rgba(245, 158, 11, 0.6)) drop-shadow(0 0 25px rgba(245, 158, 11, 0.3))' }}
                                            animate={{ rotate: [0, 360] }}
                                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        >
                                            <Sun size={32} />
                                        </motion.div>

                                        {/* Gentle sparkles around the light cloud */}
                                        {[
                                            { x: -25, y: -15, delay: 0 },
                                            { x: 40, y: -20, delay: 0.5 },
                                            { x: -35, y: 10, delay: 1.2 },
                                            { x: 55, y: 5, delay: 0.8 },
                                        ].map((s, i) => (
                                            <motion.div
                                                key={i}
                                                className="absolute text-amber-400/60"
                                                style={{
                                                    left: `calc(50% + ${s.x}px)`,
                                                    top: `calc(20% + ${s.y}px)`,
                                                }}
                                                animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1.2, 0.5], rotate: [0, 180, 360] }}
                                                transition={{ duration: 2.5, repeat: Infinity, delay: s.delay }}
                                            >
                                                <Sparkles size={10} />
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Label */}
                                    <motion.div
                                        className="text-center mt-4"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1.2 }}
                                    >
                                        <span className="text-white/80 text-sm font-bold tracking-wide uppercase">
                                            Light Mode
                                        </span>
                                        <div className="text-white/30 text-xs mt-1">Day Dreams</div>
                                    </motion.div>
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Ripple effect on selection */}
                    <AnimatePresence>
                        {ripple && selected && (
                            <motion.div
                                key="ripple"
                                className="absolute rounded-full z-[300] pointer-events-none"
                                style={{
                                    left: ripple.x,
                                    top: ripple.y,
                                    background:
                                        selected === "dark"
                                            ? "radial-gradient(circle, #1a1a2e 0%, #0a0a0a 70%, transparent 100%)"
                                            : "radial-gradient(circle, #ffffff 0%, #f0f0f0 70%, transparent 100%)",
                                }}
                                initial={{ width: 0, height: 0, x: 0, y: 0, opacity: 0.9 }}
                                animate={{
                                    width: 4000,
                                    height: 4000,
                                    x: -2000,
                                    y: -2000,
                                    opacity: 1,
                                }}
                                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            />
                        )}
                    </AnimatePresence>

                    {/* Bottom hint */}
                    <motion.p
                        className="absolute bottom-[10%] text-white/20 text-xs tracking-widest uppercase"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: selected ? 0 : 1 }}
                        transition={{ delay: selected ? 0 : 1.5, duration: 0.5 }}
                    >
                        Click a cloud to begin
                    </motion.p>
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
}
