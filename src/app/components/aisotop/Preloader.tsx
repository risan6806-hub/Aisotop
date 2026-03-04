import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "@/styles/preloader.css";
import logoPrimary from "@/assets/logo_primary.png";

interface PreloaderProps {
    onLoadingComplete: () => void;
}

export function Preloader({ onLoadingComplete }: PreloaderProps) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let current = 0;
        const interval = setInterval(() => {
            const increment = Math.floor(Math.random() * 5) + 1;
            current += increment;

            if (current >= 100) {
                current = 100;
                setProgress(100);
                clearInterval(interval);
                setTimeout(onLoadingComplete, 800);
            } else {
                setProgress(current);
            }
        }, 30);

        return () => clearInterval(interval);
    }, [onLoadingComplete]);

    return (
        <motion.div
            className="preloader"
            initial={{ opacity: 1 }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.6,
                    ease: [0.76, 0, 0.24, 1],
                },
            }}
        >
            {/* Background Panels for Curtain Reveal */}
            <div className="preloader-overlay">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="preloader-panel"
                        initial={{ scaleY: 1 }}
                        exit={{
                            scaleY: 0,
                            transition: {
                                duration: 0.8,
                                ease: [0.76, 0, 0.24, 1],
                                delay: i * 0.05,
                            },
                        }}
                    />
                ))}
            </div>

            <div className="preloader-content">
                {/* Logo with rotating beam ring */}
                <motion.div
                    className="preloader-logo-container"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                >
                    {/* Rotating gradient ring */}
                    <div className="preloader-ring">
                        <svg viewBox="0 0 200 200" className="preloader-ring-svg">
                            <defs>
                                <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#b08dff" stopOpacity="1" />
                                    <stop offset="30%" stopColor="#9b6dff" stopOpacity="0.9" />
                                    <stop offset="60%" stopColor="#6e4ec7" stopOpacity="0.4" />
                                    <stop offset="100%" stopColor="#462e82" stopOpacity="0" />
                                </linearGradient>
                                <filter id="glow">
                                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                                    <feMerge>
                                        <feMergeNode in="coloredBlur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>
                            {/* Track ring (subtle) */}
                            <circle
                                cx="100"
                                cy="100"
                                r="90"
                                fill="none"
                                stroke="rgba(110, 78, 199, 0.15)"
                                strokeWidth="2.5"
                            />
                            {/* Animated beam arc */}
                            <circle
                                cx="100"
                                cy="100"
                                r="90"
                                fill="none"
                                stroke="url(#beam-gradient)"
                                strokeWidth="3.5"
                                strokeLinecap="round"
                                strokeDasharray="140 425"
                                filter="url(#glow)"
                                className="preloader-beam-arc"
                            />
                        </svg>
                        {/* Glowing dot at the leading edge */}
                        <div className="preloader-beam-dot" />
                    </div>

                    {/* Logo image */}
                    <img
                        src={logoPrimary}
                        alt="AISOTOP"
                        className="preloader-logo"
                    />
                </motion.div>

                {/* Percentage */}
                <motion.div
                    className="preloader-percentage"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    {progress}%
                </motion.div>
            </div>
        </motion.div>
    );
}
