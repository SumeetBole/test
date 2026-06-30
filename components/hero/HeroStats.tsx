"use client";

import { motion } from "motion/react";
import {
  Code2,
  Briefcase,
  Laptop2,
  Sparkles,
} from "lucide-react";

const stats = [
  {
    number: "2+",
    label: "Years Experience",
    icon: Briefcase,
  },
  {
    number: "20+",
    label: "Projects Completed",
    icon: Laptop2,
  },
  {
    number: "10+",
    label: "Technologies",
    icon: Code2,
  },
  {
    number: "100%",
    label: "Passion for Coding",
    icon: Sparkles,
  },
];

export default function HeroStats() {
  return (
    <div className="grid grid-cols-2 gap-4 pt-10 lg:grid-cols-4">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.label}
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.15,
              duration: 0.6,
            }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-blue-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Icon */}
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-cyan-300">
              <Icon size={22} />
            </div>

            {/* Number */}
            <h3 className="text-3xl font-black text-white">
              {item.number}
            </h3>

            {/* Label */}
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              {item.label}
            </p>

            {/* Bottom Accent Line */}
            <motion.div
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500"
            />
          </motion.div>
        );
      })}
    </div>
  );
}