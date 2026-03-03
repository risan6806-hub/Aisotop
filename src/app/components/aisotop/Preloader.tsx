import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "@/styles/preloader.css";

interface PreloaderProps {
    onLoadingComplete: () => void;
}

export function Preloader({ onLoadingComplete }: PreloaderProps) {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onLoadingComplete, 500); // Small delay before finishing
                    return 100;
                }
                // Randomly increment to make it feel more "dynamic"
                const next = prev + Math.floor(Math.random() * 5) + 1;
                return next > 100 ? 100 : next;
            });
        }, 50);

        return () => clearInterval(interval);
    }, [onLoadingComplete]);

    return (
        <motion.div
            className="preloader"
            initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            exit={{
                clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            }}
        >
            <div className="preloader-brand">
                <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    AISOTOP™
                </motion.span>
            </div>

            <div className="preloader-counter">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={counter}
                        initial={{ y: "100%" }}
                        animate={{ y: "0%" }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        {counter}
                    </motion.span>
                </AnimatePresence>
            </div>

            <div className="preloader-text">
                <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Elevating Intelligence
                </motion.span>
            </div>

            <div
                className="preloader-progress"
                style={{ width: `${counter}%` }}
            />
        </motion.div>
    );
}
