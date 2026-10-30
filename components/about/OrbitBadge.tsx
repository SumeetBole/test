
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
  React: <RiReactjsLine className="text-sky-400" />,
  "Next.js": <RiNextjsFill className="text-white" />,
  Tailwind: <RiTailwindCssFill className="text-cyan-400" />,
  TypeScript: <SiTypescript className="text-blue-500" />,
  Python: <SiPython className="text-yellow-400" />,
  Django: <SiDjango className="text-green-400" />,
};

export default function OrbitBadge({
  tech,
  angle,
}: OrbitBadgeProps) {
  const radians = (angle * Math.PI) / 180;

  // Responsive orbit radius
  const radius = {
    mobile: 110,
    tablet: 150,
    ipad: 175,
    desktop: 200,
  };

  const x = Math.round(Math.cos(radians) * radius.desktop);
  const y = Math.round(Math.sin(radians) * radius.desktop);
  const adjustedX = tech === "Next.js" ? x + 55 : x;
  const adjustedY = tech === "Next.js" ? y - 45 : y;

  return (
    <motion.div
      className="
        absolute
        -translate-x-1/2 -translate-y-1/2
        scale-[0.65]
        min-[375px]:scale-[0.7]
        sm:scale-[0.8]
        md:scale-[0.85]
        lg:scale-100
      "
      style={{
        left: "50%",
        top: "50%",
        x: adjustedX,
        y: adjustedY,
      }}
      animate={{
         y: [adjustedY, adjustedY - 8, adjustedY],
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
        className="
          group flex items-center gap-2
          rounded-full border border-white/10
          bg-white/5 px-3 py-1.5
          backdrop-blur-xl
          transition-all duration-300
          hover:border-cyan-400/50
          hover:bg-white/10
          sm:gap-2.5 sm:px-3.5 sm:py-2
          md:gap-3 md:px-4 md:py-2
        "
      >
        <div
          className="
            flex shrink-0 items-center justify-center
            [&>svg]:h-[18px] [&>svg]:w-[18px]
            sm:[&>svg]:h-5 sm:[&>svg]:w-5
            md:[&>svg]:h-[22px] md:[&>svg]:w-[22px]
          "
        >
          {icons[tech as keyof typeof icons]}
        </div>

        <span
          className="
            whitespace-nowrap text-xs font-medium text-white
            sm:text-[13px]
            md:text-sm
          "
        >
          {tech}
        </span>
      </motion.div>
    </motion.div>
  );
}
