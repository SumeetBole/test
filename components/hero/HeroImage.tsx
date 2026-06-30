"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  FaReact,
  FaPython,
  FaGithub,
} from "react-icons/fa";

import {
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";

const floatingCards = [
  {
    title: "React",
    icon: <FaReact className="text-sky-400 text-xl" />,
    className: "top-10 -left-10",
    delay: 0,
  },
  {
    title: "Next.js",
    icon: <RiNextjsFill className="text-white text-xl" />,
    className: "top-28 -right-12",
    delay: .3,
  },
  {
    title: "Tailwind",
    icon: <RiTailwindCssFill className="text-cyan-400 text-xl" />,
    className: "bottom-20 -left-12",
    delay: .5,
  },
  {
    title: "Python",
    icon: <FaPython className="text-yellow-400 text-xl" />,
    className: "bottom-5 right-2",
    delay: .7,
  },
  {
    title: "GitHub",
    icon: <FaGithub className="text-white text-xl" />,
    className: "top-1/2 -right-16",
    delay: .9,
  },
];

export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center">

      {/* OUTER GLOW */}
      <div className="absolute h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-[120px]" />

      {/* ROTATING RING */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[400px] w-[400px] rounded-full border border-cyan-400/20"
      />

      {/* SECOND RING */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[370px] w-[370px] rounded-full border border-blue-500/20 border-dashed"
      />

      {/* PROFILE CARD */}
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-20 overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_80px_rgba(59,130,246,0.35)]"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10" />

        <Image
          src="/profile1.png"
          alt="Sumeet S Bole"
          width={420}
          height={520}
          priority
          className="relative z-10 object-cover"
        />
      </motion.div>

      {/* FLOATING TECH CARDS */}
      {floatingCards.map((card) => (
        <motion.div
          key={card.title}
          initial={{
            opacity: 0,
            scale: .8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -10, 0],
          }}
          transition={{
            delay: card.delay,
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute ${card.className} z-30`}
        >
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl shadow-xl">
            {card.icon}

            <span className="text-sm font-medium text-white">
              {card.title}
            </span>
          </div>
        </motion.div>
      ))}

      {/* EXPERIENCE BADGE */}
      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute bottom-12 left-1/2 z-30 -translate-x-1/2"
      >
        <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 backdrop-blur-xl">
          <p className="text-center text-sm text-cyan-300">
            Available for Work
          </p>

          <h2 className="text-center text-2xl font-bold">
            2+ Years
          </h2>
        </div>
      </motion.div>
    </div>
  );
}