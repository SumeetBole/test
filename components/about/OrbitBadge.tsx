"use client";

import { motion } from "framer-motion";
import {
  RiReactjsLine,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";

import {
  SiTypescript,
  SiPython,
  SiDjango,
} from "react-icons/si";

interface OrbitBadgeProps {
  tech: string;
  angle: number;
}

const icons = {
  React: <RiReactjsLine className="text-sky-400" size={22} />,
  "Next.js": <RiNextjsFill className="text-white" size={20} />,
  Tailwind: <RiTailwindCssFill className="text-cyan-400" size={22} />,
  TypeScript: <SiTypescript className="text-blue-500" size={20} />,
  Python: <SiPython className="text-yellow-400" size={20} />,
  Django: <SiDjango className="text-green-400" size={20} />,
};

export default function OrbitBadge({
  tech,
  angle,
}: OrbitBadgeProps) {
  const radius = 200;

    const x = Math.round(Math.cos((angle * Math.PI) / 180) * radius);

    const y = Math.round(Math.sin((angle * Math.PI) / 180) * radius);

  return (
    <motion.div
      className="absolute"
      style={{
        left: "50%",
        top: "50%",
        x,
        y,
      }}
      animate={{
        y: [y, y - 8, y],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay: angle / 100,
      }}
    >
      <motion.div
        whileHover={{
          scale: 1.15,
          y: -6,
        }}
        className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10"
      >
        <div>{icons[tech as keyof typeof icons]}</div>

        <span className="text-sm font-medium text-white">
          {tech}
        </span>
      </motion.div>
    </motion.div>
  );
}