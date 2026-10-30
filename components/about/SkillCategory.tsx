
"use client";

import { motion, useReducedMotion } from "framer-motion";

import {
  RiReactjsLine,
  RiNextjsFill,
  RiTailwindCssFill,
  RiGithubFill,
} from "react-icons/ri";

import {
  SiTypescript,
  SiPython,
  SiDjango,
  SiGit,
  SiFigma,
  SiFramer,
  SiShadcnui,
} from "react-icons/si";

import { MonitorSmartphone } from "lucide-react";

const categories = [
  {
    title: "Frontend",
    items: [
      { icon: <RiReactjsLine className="text-sky-400" />, name: "React" },
      { icon: <RiNextjsFill className="text-white" />, name: "Next.js" },
      {
        icon: <RiTailwindCssFill className="text-cyan-400" />,
        name: "Tailwind CSS",
      },
      {
        icon: <SiTypescript className="text-blue-500" />,
        name: "TypeScript",
      },
    ],
  },
  {
    title: "Backend",
    items: [
      { icon: <SiPython className="text-yellow-400" />, name: "Python" },
      { icon: <SiDjango className="text-green-500" />, name: "Django" },
      {
        icon: <MonitorSmartphone className="text-cyan-300" />,
        name: "REST APIs",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      { icon: <SiGit className="text-orange-500" />, name: "Git" },
      { icon: <RiGithubFill className="text-white" />, name: "GitHub" },
      { icon: <SiFigma className="text-pink-500" />, name: "Figma" },
    ],
  },
  {
    title: "UI & Motion",
    items: [
      { icon: <SiFramer className="text-white" />, name: "Framer Motion" },
      { icon: <SiShadcnui className="text-white" />, name: "shadcn/ui" },
      {
        icon: <RiTailwindCssFill className="text-cyan-400" />,
        name: "Magic UI",
      },
    ],
  },
];

export default function SkillCategory() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="relative w-full min-w-0 py-8 sm:py-10 lg:py-12"
    >
      {/* Heading */}
      <motion.div
        initial={
          shouldReduceMotion ? false : { opacity: 0, y: 30 }
        }
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto mb-12 max-w-3xl px-1 text-center sm:mb-16 lg:mb-20"
      >
        <span
          className="inline-flex rounded-full border
          border-cyan-500/20 bg-cyan-500/10
          px-4 py-2 text-xs font-medium
          text-cyan-300 backdrop-blur-xl
          sm:px-5 sm:text-sm"
        >
          Tech Arsenal
        </span>

        <h2
          className="mt-5 text-3xl font-black uppercase
          leading-tight tracking-tight text-white
          sm:mt-6 sm:text-4xl
          md:text-5xl
          lg:text-6xl"
        >
          Technologies

          <span
            className="block bg-gradient-to-r
            from-cyan-400 via-blue-400 to-sky-500
            bg-clip-text text-transparent"
          >
            I Work With
          </span>
        </h2>

        <p
          className="mx-auto mt-4 max-w-2xl
          text-sm leading-7 text-zinc-400
          sm:mt-6 sm:text-base sm:leading-8"
        >
          I enjoy building modern web applications using
          technologies focused on performance, accessibility,
          and beautiful user experiences.
        </p>
      </motion.div>

      {/* Responsive Category Grid */}
      <div
        className="grid grid-cols-1 gap-5
        sm:gap-6
        md:grid-cols-2 md:gap-6
        xl:grid-cols-2 xl:gap-8
        2xl:grid-cols-2"
      >
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={
              shouldReduceMotion ? false : { opacity: 0, y: 30 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.5,
              delay: shouldReduceMotion ? 0 : index * 0.1,
            }}
            whileHover={shouldReduceMotion ? undefined : { y: -4 }}
            className="group relative min-w-0 overflow-hidden
              rounded-2xl border border-white/10
              bg-white/[0.04] p-4
              transition-colors duration-300
              hover:border-cyan-500/40
              sm:rounded-3xl sm:p-5
              lg:p-7
              xl:p-8"
          >
            {/* Cyan Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute
              -right-16 -top-16 h-40 w-40
              rounded-full bg-cyan-500/10
              opacity-0 blur-3xl
              transition-opacity duration-500
              group-hover:opacity-100
              sm:h-48 sm:w-48
              lg:h-56 lg:w-56"
            />

            {/* Category Title */}
            <h3
              className="relative mb-5 text-xl
              font-bold text-white
              sm:mb-6 sm:text-2xl
              lg:mb-8"
            >
              {category.title}
            </h3>

            {/* Skills */}
            <div
              className="relative grid grid-cols-2
              gap-2.5 sm:gap-3
              lg:gap-4"
            >
              {category.items.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={
                    shouldReduceMotion ? undefined : { scale: 1.03 }
                  }
                  className="flex min-w-0 min-h-[58px]
                    items-center gap-2
                    rounded-xl border border-white/10
                    bg-black/30 p-2.5
                    transition-colors duration-300
                    hover:border-cyan-500/40
                    sm:min-h-[66px] sm:gap-3 sm:p-3
                    lg:rounded-2xl lg:p-4"
                >
                  {/* Responsive Icon */}
                  <div
                    className="flex shrink-0 items-center
                    justify-center text-xl
                    sm:text-2xl lg:text-[28px]"
                  >
                    <span className="flex [&>svg]:h-5 [&>svg]:w-5 sm:[&>svg]:h-6 sm:[&>svg]:w-6 lg:[&>svg]:h-7 lg:[&>svg]:w-7">
                      {skill.icon}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <span
                    className="min-w-0 break-words
                    text-xs font-medium leading-5
                    text-zinc-200
                    sm:text-sm
                    lg:text-sm"
                  >
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
