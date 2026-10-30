
"use client";

import { motion, useReducedMotion } from "motion/react";

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
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full overflow-hidden py-2 sm:py-4 md:py-5 lg:py-6">

      {/* Background Gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

      {/* Left Fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-[#050505] to-transparent sm:w-12 md:w-20 lg:w-24" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-[#050505] to-transparent sm:w-12 md:w-20 lg:w-24" />

      {/* Scrolling Container */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : { x: ["0%", "-50%"] }
        }
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex w-max items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6"
      >

        {marqueeItems.map((tech, index) => (
          <motion.div
            key={`${tech.name}-${index}`}
            whileHover={
              shouldReduceMotion
                ? {}
                : {
                    y: -5,
                    scale: 1.05,
                  }
            }
            className="group flex shrink-0 items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 shadow-lg backdrop-blur-xl transition-colors duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10 sm:gap-4 sm:px-6 sm:py-4 md:gap-3 md:px-5 md:py-3 lg:px-6"
          >

            {/* Technology Icon */}
            <span className="flex shrink-0 items-center justify-center text-lg transition-transform duration-300 group-hover:rotate-12 sm:text-xl md:text-2xl">
              {tech.icon}
            </span>

            {/* Technology Name */}
            <span className="whitespace-nowrap text-[11px] font-medium text-white sm:text-xs md:text-sm">
              {tech.name}
            </span>

          </motion.div>
        ))}

      </motion.div>
    </div>
  );
}
