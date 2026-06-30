"use client";

import { motion } from "motion/react";
import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";

import {
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";

import { SiTypescript, SiAppwrite } from "react-icons/si";

const technologies = [
  {
    name: "React",
    icon: <FaReact className="text-sky-400" />,
  },
  {
    name: "Next.js",
    icon: <RiNextjsFill className="text-white" />,
  },
  {
    name: "Tailwind",
    icon: <RiTailwindCssFill className="text-cyan-400" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-yellow-400" />,
  },
  {
    name: "Python",
    icon: <FaPython className="text-yellow-400" />,
  },
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-orange-500" />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-blue-400" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-orange-500" />,
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-white" />,
  },
  {
    name: "Appwrite",
    icon: <SiAppwrite className="text-pink-500" />,
  },
];

// Duplicate for seamless loop
const marqueeItems = [...technologies, ...technologies];

export default function TechMarquee() {
  return (
    <div className="relative overflow-hidden py-6">
      {/* Left Fade */}
      <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#050505] to-transparent" />

      {/* Right Fade */}
      <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#050505] to-transparent" />

      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex w-max gap-6"
      >
        {marqueeItems.map((tech, index) => (
          <motion.div
            key={`${tech.name}-${index}`}
            whileHover={{
              y: -6,
              scale: 1.05,
            }}
            className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10"
          >
            <span className="text-2xl transition-transform duration-300 group-hover:rotate-12">
              {tech.icon}
            </span>

            <span className="whitespace-nowrap text-sm font-medium text-white">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}