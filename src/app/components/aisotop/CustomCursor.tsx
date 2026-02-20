"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "motion/react";

const RoboticHand = ({ isHovering }: { isHovering: boolean }) => (
    <motion.svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{
            rotate: isHovering ? -15 : 0,
            scale: isHovering ? 1.2 : 1,
        }}
        transition={{ type: "spring", damping: 15, stiffness: 200 }}
        className="drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
    >
        {/* Metallic structure of the hand */}
        <path
            d="M10 14V6C10 5.44772 10.4477 5 11 5C11.5523 5 12 5.44772 12 6V11"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
        />
        <path
            d="M12 11V8C12 7.44772 12.4477 7 13 7C13.5523 7 14 7.44772 14 8V11"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
        />
        <path
            d="M14 11V9C14 8.44772 14.4477 8 15 8C15.5523 8 16 8.44772 16 9V12"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
        />
        <path
            d="M16 12V11C16 10.4477 16.4477 10 17 10C17.5523 10 18 10.4477 18 11V15C18 18.3137 15.3137 21 12 21C8.68629 21 6 18.3137 6 15V14"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
        />
        {/* Index finger pointing - The primary pointer */}
        <path
            d="M6 14L4.3 12.3C3.9 11.9 3.9 11.3 4.3 10.9L8.3 6.9C8.7 6.5 9.3 6.5 9.7 6.9L10 7.2"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-primary stroke-primary"
        />
        {/* Robotic joints/accents */}
        <circle cx="11" cy="6" r="0.5" fill="white" />
        <circle cx="13" cy="8" r="0.5" fill="white" />
        <circle cx="15" cy="9" r="0.5" fill="white" />
        <circle cx="17" cy="11" r="0.5" fill="white" />
    </motion.svg>
);

export const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);

    const springConfig = { damping: 25, stiffness: 150 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("button") ||
                target.closest("a") ||
                target.classList.contains('interactive')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[10000]"
            style={{
                x: cursorX,
                y: cursorY,
                translateX: "-10%",
                translateY: "-10%",
            }}
        >
            <RoboticHand isHovering={isHovering} />
        </motion.div>
    );
};
