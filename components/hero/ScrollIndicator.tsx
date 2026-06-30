"use client";

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 2,
        duration: 1,
      }}
      className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center"
    >
      {/* Text */}
      <motion.p
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="mb-4 text-xs uppercase tracking-[0.35em] text-zinc-400"
      >
        Scroll Down
      </motion.p>

      {/* Mouse */}
      <div className="flex h-14 w-8 justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-md">
        <motion.div
          animate={{
            y: [2, 18, 2],
            opacity: [1, 0.3, 1],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mt-2 h-3 w-1 rounded-full bg-cyan-400"
        />
      </div>

      {/* Arrow */}
      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="mt-3 text-cyan-400"
      >
        <ChevronDown size={20} />
      </motion.div>
    </motion.div>
  );
}