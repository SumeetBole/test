
"use client";

import { motion } from "framer-motion";
import SkillCategory from "../about/SkillCategory";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden bg-[#050505] py-24 sm:py-32"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-0 h-72 w-[min(90%,600px)] -translate-x-1/2 rounded-full bg-cyan-200/[0.025] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-10 lg:px-12">
        {/* Centered Skills Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mb-16 flex justify-center sm:mb-20"
        >
          <h2 className="group relative cursor-default text-4xl font-bold tracking-[0.2em] text-white sm:text-5xl">
            {/* Hover glow */}
            <span className="absolute -inset-5 -z-10 rounded-full bg-cyan-100/[0.05] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

            {/* Heading gradient */}
            <span className="bg-gradient-to-r from-cyan-100 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              SKILLS
            </span>

            {/* Animated underline */}
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="absolute -bottom-3 left-0 h-px w-full origin-center rounded-full bg-gradient-to-r from-transparent via-cyan-200/80 to-transparent shadow-[0_0_10px_rgba(165,243,252,0.35)]"
            />
          </h2>
          
        </motion.div>



        {/* Skills Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 "
        >
          <SkillCategory />
        </motion.div>
      </div>
    </section>
  );
}
