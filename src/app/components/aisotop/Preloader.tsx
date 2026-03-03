import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
                    setTimeout(onLoadingComplete, 600);
                    return 100;
                }
                const next = prev + Math.floor(Math.random() * 8) + 1;
                return next > 100 ? 100 : next;
            });
        }, 40);

        return () => clearInterval(interval);
    }, [onLoadingComplete]);

    return (
        <motion.div
            className="preloader"
            initial={{ opacity: 1 }}
            exit={{
                opacity: 0,
                y: -20,
                transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] }
            }}
        >
            <div className="preloader-brand">
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    AISOTOP™ / LOADING
                </motion.span>
            </div>

            <div className="preloader-counter">
                <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    {counter}
                </motion.span>
                <span className="text-[0.4em] ml-1 opacity-50">%</span>
            </div>

            <div
                className="preloader-line"
                style={{ width: `${counter}%` }}
            />
        </motion.div>
    );
}
