import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import logo from "figma:asset/48d643282720ccf0457972cedd4b1db2988d0ebb.png";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Automation", href: "#automation" },
  { name: "Products", href: "#products" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: -20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { ease: [0.22, 1, 0.36, 1] as any, duration: 0.8 } },
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-8"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <motion.a
          href="#home"
          className="flex items-center gap-3 group"
          whileHover={{ scale: 1.02 }}
        >
          <img src={logo} alt="AISOTOP Logo" className="h-10 w-auto filter brightness-110" />
          <span className="text-2xl font-bold tracking-tight text-foreground">AISOTOP</span>
        </motion.a>

        {/* Desktop Menu */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="hidden md:flex items-center gap-10"
        >
          {links.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              variants={item}
              className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-foreground transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 rounded-full bg-foreground text-background text-sm font-semibold transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            Get in Touch
          </motion.a>
          <ThemeToggle />
        </motion.div>

        {/* Mobile Toggle */}
        <motion.button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-[72px] bg-background/95 backdrop-blur-2xl z-40 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 p-12">
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-3xl font-bold text-foreground hover:text-foreground/60 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.1 }}
                className="mt-4 px-10 py-4 rounded-full bg-foreground text-background text-xl font-bold"
                onClick={() => setIsOpen(false)}
              >
                Get in Touch
              </motion.a>
              <div className="mt-4">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
