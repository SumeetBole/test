
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
