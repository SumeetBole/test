"use client";

import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="flex flex-col gap-4 pt-4 sm:flex-row">
      {/* Primary Button */}
      <motion.a
        href="#projects"
        whileHover={{
          scale: 1.05,
          y: -4,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-[0_0_40px_rgba(59,130,246,.4)] transition-all duration-300"
      >
        {/* Animated Background */}
        <span className="absolute inset-0 bg-[length:200%_100%] bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 transition-all duration-700 group-hover:bg-right" />

        <span className="relative z-10 flex items-center gap-3">
          View Projects

          <motion.div
            whileHover={{
              x: 5,
            }}
          >
            <ArrowRight size={18} />
          </motion.div>
        </span>
      </motion.a>

      {/* Secondary Button */}
      <motion.a
        href="/resume.pdf"
        download
        whileHover={{
          scale: 1.05,
          y: -4,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className="group relative inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10"
      >
        <span className="flex items-center gap-3">
          <Download
            size={18}
            className="transition-transform duration-300 group-hover:-translate-y-1"
          />

          Download Resume
        </span>
      </motion.a>
    </div>
  );
}