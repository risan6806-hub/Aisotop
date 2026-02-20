import { motion } from "motion/react";
import { ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  dark?: boolean;
}

export function Section({ id, className, children, dark = false }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "min-h-screen w-full flex flex-col justify-center relative overflow-hidden px-4 py-16 md:px-12 lg:px-24",
        "bg-background text-foreground",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto w-full h-full"
      >
        {children}
      </motion.div>
    </section>
  );
}
