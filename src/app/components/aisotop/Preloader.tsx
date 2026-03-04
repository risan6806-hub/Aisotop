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
                scale: 1.1,
                transition: {
                    duration: 0.8,
                    ease: [0.76, 0, 0.24, 1],
                },
            }}
        >

            <div className="preloader-content">
                {/* Calibration Box */}
                <motion.div
                    className="preloader-logo-container"
                    initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
                    animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="preloader-calibration-text">System Calibration: AISOTOP_CORE</div>

                    {/* Perimeter Beam */}
                    <div className="preloader-beam-container">
                        <div className="preloader-beam" />
                    </div>

                    {/* Logo image */}
                    <img
                        src={logoPrimary}
                        alt="AISOTOP"
                        className="preloader-logo"
                    />

                    <div className="preloader-tech-numbers">
                        TR-29.04 // MOD-83 // CALIB_{progress}%
                    </div>
                </motion.div>

                {/* Percentage */}
                <motion.div
                    className="preloader-percentage"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    {String(progress).padStart(2, '0')}
                </motion.div>
            </div>
        </motion.div>
    );
}
