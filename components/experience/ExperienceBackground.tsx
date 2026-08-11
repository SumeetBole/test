"use client";

import { motion } from "framer-motion";

export default function ExperienceBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* Left Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.25, 0.12],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-52 top-1/4 h-[450px] w-[450px] rounded-full bg-cyan-500 blur-[150px]"
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          scale: [1.1, 0.9, 1.1],
          opacity: [0.1, 0.22, 0.1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-52 bottom-1/4 h-[500px] w-[500px] rounded-full bg-blue-600 blur-[160px]"
      />

      {/* Center Spotlight */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />

      {/* Top Fade */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#050505] to-transparent" />

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
    </div>
  );
}