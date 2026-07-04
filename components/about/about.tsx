"use client";

import { motion } from "framer-motion";

import AboutBackground from "./AboutBackground";
import AboutImage from "./AboutImage";
import JourneyTimeline from "./JourneyTimeline";
import SkillCategory from "./SkillCategory";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050505] py-32"
    >
      {/* Background */}
      <AboutBackground />

      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300 backdrop-blur-xl"
        >
          About Me
        </motion.div>

        {/* Hero Layout */}
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="leading-none">
              <span className="block text-5xl font-black uppercase text-white md:text-7xl">
                BUILDING
              </span>

              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-500 bg-clip-text text-5xl font-black uppercase text-transparent md:text-7xl">
                DIGITAL
              </span>

              <span className="block text-5xl font-black uppercase text-white md:text-7xl">
                EXPERIENCES
              </span>

              <span className="mt-6 block text-lg font-normal leading-9 text-zinc-400 md:max-w-xl">
                I'm{" "}
                <span className="font-semibold text-cyan-300">
                  Sumeet Bole
                </span>
                , a Frontend Developer passionate about crafting modern,
                responsive and interactive web applications.
                <br />
                <br />
                I enjoy transforming ideas into intuitive interfaces using
                React, Next.js and modern frontend technologies while
                continuously learning and improving every day.
              </span>
            </h2>
        </motion.div>

          {/* RIGHT */}
          <AboutImage />
        </div>

        {/* Journey */}
        <div className="mt-32">
          <JourneyTimeline />
        </div>

        {/* Skills */}
        <div className="mt-32">
          <SkillCategory />
        </div>
      </div>
    </section>
  );
}