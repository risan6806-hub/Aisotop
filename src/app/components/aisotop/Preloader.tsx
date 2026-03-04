import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "@/styles/preloader.css";

interface PreloaderProps {
    onLoadingComplete: () => void;
}

export function Preloader({ onLoadingComplete }: PreloaderProps) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let current = 0;
        const interval = setInterval(() => {
            const increment = Math.floor(Math.random() * 6) + 3;
            current += increment;

            if (current >= 100) {
                current = 100;
                setProgress(100);
                clearInterval(interval);
                setTimeout(onLoadingComplete, 400);
            } else {
                setProgress(current);
            }
        }, 25);

        return () => clearInterval(interval);
    }, [onLoadingComplete]);

    const displayText = `${String(progress).padStart(2, '0')}%`;

    return (
        <motion.div
            className="preloader"
            initial={{ opacity: 1 }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 1,
                    ease: [0.76, 0, 0.24, 1],
                },
            }}
        >
            <div className="preloader-content">
                {/* Large striped percentage */}
                <motion.div
                    className="preloader-percentage-wrapper"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    <svg
                        className="preloader-percentage-svg"
                        viewBox="0 0 500 200"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <defs>
                            {/* Art Deco striped pattern for dark theme */}
                            <pattern
                                id="stripe-pattern"
                                patternUnits="userSpaceOnUse"
                                width="100"
                                height="6"
                            >
                                <rect width="100" height="3.5" fill="rgba(180, 170, 255, 0.85)" />
                                <rect y="3.5" width="100" height="2.5" fill="rgba(0, 0, 0, 0)" />
                            </pattern>
                        </defs>
                        <text
                            x="250"
                            y="115"
                            className="preloader-percentage-text"
                        >
                            {displayText}
                        </text>
                    </svg>
                </motion.div>

                {/* Subtle label */}
                <motion.div
                    className="preloader-label"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Loading
                </motion.div>
            </div>
        </motion.div>
    );
}
