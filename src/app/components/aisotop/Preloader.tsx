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
                {/* Logo */}
                <motion.div
                    className="preloader-logo-wrapper"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                >
                    <img
                        src={logoPrimary}
                        alt="AISOTOP"
                        className="preloader-logo"
                    />
                </motion.div>

                {/* Beam Loading Bar */}
                <motion.div
                    className="preloader-beam-container"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="preloader-beam-track">
                        {/* Progress fill */}
                        <motion.div
                            className="preloader-beam-fill"
                            style={{ width: `${progress}%` }}
                        />
                        {/* Animated beam glow at the leading edge */}
                        <motion.div
                            className="preloader-beam-glow"
                            style={{ left: `${progress}%` }}
                        />
                        {/* Shimmer sweep effect */}
                        <div className="preloader-beam-shimmer" />
                    </div>

                    {/* Percentage */}
                    <motion.div
                        className="preloader-percentage"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        {progress}%
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
