"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled
          ? "top-4 w-[92%] max-w-5xl"
          : "top-6 w-[94%] max-w-5xl"
      }`}
    >
      <nav
        className={`relative rounded-full border border-white/10 bg-black/25 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-all duration-500 ${
          scrolled ? "px-5 py-2.5" : "px-6 py-3"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-600 text-sm font-black text-white shadow-lg shadow-cyan-500/40">
              SB
            </div>

            <div className="hidden md:block">
              <h2 className="text-sm font-semibold text-white">
                Sumeet Bole
              </h2>

              <p className="text-[11px] text-zinc-400">
                Frontend Developer
              </p>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-5 lg:flex">
            {links.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -2 }}
                className="group relative text-[14px] font-medium text-zinc-300 transition-colors hover:text-white"
              >
                {link.name}

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          {/* Hire Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-cyan-500/30 transition lg:flex"
          >
            Hire Me

            <ArrowUpRight size={16} />
          </motion.a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobile(!mobile)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white backdrop-blur-xl transition hover:border-cyan-500/40 lg:hidden"
          >
            {mobile ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobile && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: -10,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: -10,
              }}
              transition={{
                duration: 0.25,
              }}
              className="absolute right-0 top-16 w-full overflow-hidden rounded-3xl border border-cyan-500/20 bg-black/100 p-10 backdrop-blur-5xl shadow-2xl shadow-cyan-500/20 lg:hidden"
            >
              <div className="space-y-2">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobile(false)}
                    className="block rounded-2xl px-4 py-3 text-center text-zinc-300 transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-white"
                  >
                    {link.name}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={() => setMobile(false)}
                  className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-semibold text-white"
                >
                  Hire Me

                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}