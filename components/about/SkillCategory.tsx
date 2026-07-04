"use client";

import { motion } from "framer-motion";

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
      { icon: <RiReactjsLine size={28} className="text-sky-400" />, name: "React" },
      { icon: <RiNextjsFill size={28} className="text-white" />, name: "Next.js" },
      { icon: <RiTailwindCssFill size={28} className="text-cyan-400" />, name: "Tailwind CSS" },
      { icon: <SiTypescript size={28} className="text-blue-500" />, name: "TypeScript" },
    ],
  },
  {
    title: "Backend",
    items: [
      { icon: <SiPython size={28} className="text-yellow-400" />, name: "Python" },
      { icon: <SiDjango size={28} className="text-green-500" />, name: "Django" },
      { icon: <MonitorSmartphone size={28} className="text-cyan-300" />, name: "REST APIs" },
    ],
  },
  {
    title: "Tools",
    items: [
      { icon: <SiGit size={28} className="text-orange-500" />, name: "Git" },
      { icon: <RiGithubFill size={28} className="text-white" />, name: "GitHub" },
      { icon: <SiFigma size={28} className="text-pink-500" />, name: "Figma" },
    ],
  },
  {
    title: "UI & Motion",
    items: [
      { icon: <SiFramer size={28} className="text-white" />, name: "Framer Motion" },
      { icon: <SiShadcnui size={28} className="text-white" />, name: "shadcn/ui" },
      { icon: <RiTailwindCssFill size={28} className="text-cyan-400" />, name: "Magic UI" },
    ],
  },
];

export default function SkillCategory() {
  return (
    <section className="relative py-12">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 text-center"
      >
        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300 backdrop-blur-xl">
          Tech Arsenal
        </span>

        <h2 className="mt-6 text-4xl font-black uppercase text-white md:text-6xl">
          Technologies
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-500 bg-clip-text text-transparent">
            I Work With
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-zinc-400">
          I enjoy building modern web applications using technologies focused on
          performance, accessibility and beautiful user experiences.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40"
          >
            {/* Glow */}
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

            <h3 className="relative mb-8 text-2xl font-bold text-white">
              {category.title}
            </h3>

            <div className="relative grid grid-cols-2 gap-4">
              {category.items.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-cyan-500/40"
                >
                  <div>{skill.icon}</div>

                  <span className="text-sm font-medium text-white">
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