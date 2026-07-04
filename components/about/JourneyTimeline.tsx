"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Laptop,
  Building2,
  Rocket,
} from "lucide-react";

const journey = [
  {
    icon: GraduationCap,
    year: "2024",
    title: "MCA Graduate",
    description:
      "Completed my Master of Computer Applications with a strong focus on software engineering, web technologies and problem solving.",
  },
  {
    icon: Laptop,
    year: "Frontend Journey",
    title: "Frontend Developer",
    description:
      "Started my professional journey building responsive interfaces with React, Next.js, Tailwind CSS and ERP modules.",
  },
  {
    icon: Building2,
    year: "Present",
    title: "Associate @ Wipro",
    description:
      "Currently working at Wipro while continuously improving my frontend expertise and exploring modern web technologies.",
  },
  {
    icon: Rocket,
    year: "Future",
    title: "Always Learning",
    description:
      "Focused on creating premium digital experiences while mastering animations, performance optimization and scalable architecture.",
  },
];

export default function JourneyTimeline() {
  return (
    <section className="relative py-10">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 text-center"
      >
        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300 backdrop-blur-xl">
          My Journey
        </span>

        <h2 className="mt-6 text-4xl font-black uppercase text-white md:text-6xl">
          Every Step
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-500 bg-clip-text text-transparent">
            Shapes My Growth
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-zinc-400 leading-8">
          Every project, role and learning experience has contributed to my
          journey as a frontend developer. I'm continuously improving,
          experimenting and building better digital experiences.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative mx-auto max-w-5xl">
        {/* Vertical Line */}
        <div className="absolute left-6 top-0 hidden h-full w-[2px] bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent md:block" />

        <div className="space-y-14">
          {journey.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -80 : 80,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                className="relative flex gap-8"
              >
                {/* Timeline Icon */}
                <div className="relative z-10 hidden md:flex">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-500/30 bg-[#0b0b0b] shadow-lg shadow-cyan-500/20">
                    <Icon className="text-cyan-400" size={26} />
                  </div>
                </div>

                {/* Mobile Icon */}
                <div className="md:hidden">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/20">
                    <Icon className="text-cyan-400" size={22} />
                  </div>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  className="group relative flex-1 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
                  </div>

                  <span className="relative inline-block rounded-full bg-cyan-500/10 px-4 py-1 text-xs font-medium text-cyan-300">
                    {item.year}
                  </span>

                  <h3 className="relative mt-5 text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="relative mt-4 leading-8 text-zinc-400">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}