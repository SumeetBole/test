"use client";

import { motion } from "motion/react";

const particles = Array.from({ length: 25 });

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background Color */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Animated Grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
        `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Large Blue Blob */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full bg-blue-600/30 blur-[160px]"
      />

      {/* Purple Blob */}
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1.1, 0.9, 1.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-180px] top-20 h-[450px] w-[450px] rounded-full bg-violet-600/30 blur-[160px]"
      />

      {/* Cyan Blob */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-220px] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/25 blur-[180px]"
      />

      
      {/* Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_65%)]" />

      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
        }}
      />

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050505] to-transparent" />
    </div>
  );
}