
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

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
    icon: <FaReact className="text-sky-400 text-lg sm:text-xl" />,
    className: "top-[8%] -left-[3%] sm:top-[10%] sm:-left-[5%] lg:-left-[7%]",
    delay: 0,
  },
  {
    title: "Next.js",
    icon: <RiNextjsFill className="text-white text-lg sm:text-xl" />,
    className: "top-[25%] -right-[3%] sm:top-[25%] sm:-right-[6%] lg:-right-[8%]",
    delay: 0.3,
  },
  {
    title: "Tailwind",
    icon: <RiTailwindCssFill className="text-cyan-400 text-lg sm:text-xl" />,
    className: "bottom-[30%] -left-[3%] sm:bottom-[30%] sm:-left-[6%] lg:-left-[8%]",
    delay: 0.5,
  },
  {
    title: "Python",
    icon: <FaPython className="text-yellow-400 text-lg sm:text-xl" />,
    className: "bottom-[12%] right-[2%] sm:bottom-[10%] sm:right-[5%]",
    delay: 0.7,
  },
  {
    title: "GitHub",
    icon: <FaGithub className="text-white text-lg sm:text-xl" />,
    className: "top-[50%] -right-[4%] sm:-right-[8%] lg:-right-[10%]",
    delay: 0.9,
  },
];

export default function HeroImage() {
  const shouldReduceMotion = useReducedMotion();

  const floatAnimation = shouldReduceMotion
    ? {}
    : {
        y: [0, -10, 0],
      };

  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[960px] items-center justify-center sm:max-w-[340px] md:max-w-[390px] lg:max-w-[420px] xl:max-w-[480px] 2xl:max-w-[520px]">

      {/* OUTER GLOW */}
      <div className="pointer-events-none absolute inset-[5%] rounded-full bg-cyan-500/20 blur-[70px] sm:blur-[90px] lg:blur-[120px]" />

      {/* ROTATING RING */}
      <motion.div
        animate={shouldReduceMotion ? {} : { rotate: 360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute inset-[5%] rounded-full border border-cyan-400/20"
      />

      {/* SECOND RING */}
      <motion.div
        animate={shouldReduceMotion ? {} : { rotate: -360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute inset-[10%] rounded-full border border-blue-500/20 border-dashed"
      />

      {/* THIRD DECORATIVE RING */}
      <div className="pointer-events-none absolute inset-[15%] rounded-full border border-white/5" />

      {/* PROFILE CARD */}
      <motion.div
        animate={floatAnimation}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-20 w-[68%] overflow-hidden rounded-[24px] border border-white/10 bg-white/5 shadow-[0_0_50px_rgba(59,130,246,0.3)] backdrop-blur-2xl sm:w-[70%] sm:rounded-[32px] lg:rounded-[40px] lg:shadow-[0_0_80px_rgba(59,130,246,0.35)]"
      >
        {/* CARD GRADIENT */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10" />

        {/* PROFILE IMAGE */}
        <Image
          src="/profile1.png"
          alt="Sumeet S Bole"
          width={620}
          height={720}
          priority
          sizes="(max-width: 640px) 190px, (max-width: 1024px) 280px, (max-width: 1280px) 300px, 360px"
          className="relative z-0 h-auto w-full object-cover"
        />
      </motion.div>

      {/* FLOATING TECHNOLOGY CARDS */}
      {floatingCards.map((card) => (
        <motion.div
          key={card.title}
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  scale: 0.8,
                }
          }
          animate={
            shouldReduceMotion
              ? { opacity: 1, scale: 1 }
              : {
                  opacity: 1,
                  scale: 1,
                  y: [0, -10, 0],
                }
          }
          transition={{
            delay: shouldReduceMotion ? 0 : card.delay,
            duration: 4,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: "easeInOut",
          }}
          className={`absolute ${card.className} z-30`}
        >
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#111111]/80 px-2.5 py-2 shadow-xl backdrop-blur-xl sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-3">

            {card.icon}

            <span className="text-[10px] font-medium text-white sm:text-xs md:text-sm">
              {card.title}
            </span>

          </div>
        </motion.div>
      ))}

      {/* AVAILABILITY BADGE */}
      <motion.div
        animate={floatAnimation}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[3%] left-1/2 z-40 w-max -translate-x-1/2"
      >
        <div className="rounded-xl border border-cyan-500/30 bg-[#071419]/90 px-4 py-2 shadow-[0_0_30px_rgba(6,182,212,0.15)] backdrop-blur-xl sm:rounded-2xl sm:px-6 sm:py-3">

          <p className="text-center text-[10px] text-cyan-300 sm:text-xs sm:text-sm">
            Available for Work
          </p>

          <h2 className="text-center text-lg font-bold text-white sm:text-xl md:text-2xl">
            1+ Years
          </h2>

        </div>
      </motion.div>

    </div>
  );
}
