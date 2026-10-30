
"use client";

import { motion, useReducedMotion } from "framer-motion";

import AboutBackground from "./AboutBackground";
import AboutImage from "./AboutImage";
import JourneyTimeline from "./JourneyTimeline";

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#050505]
      py-24 sm:py-20 md:py-24 lg:py-28 xl:py-32"
    >
      {/* Background */}
      <AboutBackground />

      <div
        className="relative z-20 mx-auto w-full max-w-7xl
        px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12"
      >
        {/* Section Label */}
        <motion.div
          initial={
            shouldReduceMotion ? false : { opacity: 0, y: 20 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 inline-flex items-center rounded-full
          border border-cyan-500/20 bg-cyan-500/10
          px-4 py-2 text-xs font-medium tracking-wide
          text-cyan-300 sm:mb-10 sm:px-5 sm:text-sm"
        >
          About Me
        </motion.div>

        {/* Hero Layout */}
        <div
          className="grid grid-cols-1 items-center
          gap-12 sm:gap-14 md:gap-16
          lg:grid-cols-2 lg:gap-10
          xl:gap-16 2xl:gap-20"
        >
          {/* LEFT: Introduction */}
          <motion.div
            initial={
              shouldReduceMotion ? false : { opacity: 0, x: -40 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="min-w-0 w-full"
          >
            {/* Heading */}
            <h2
              className="text-4xl font-black uppercase
              leading-[0.98] tracking-tight
              sm:text-5xl
              md:text-6xl
              lg:text-5xl
              xl:text-6xl
              2xl:text-7xl"
            >
              <span className="block text-white">
                BUILDING
              </span>

              <span
                className="mt-2 block bg-gradient-to-r
                from-cyan-400 via-blue-400 to-sky-500
                bg-clip-text text-transparent"
              >
                DIGITAL
              </span>

              <span className="mt-2 block text-white">
                EXPERIENCES
              </span>
            </h2>

            {/* Description */}
            <div
              className="mt-6 max-w-2xl
              text-sm leading-7 text-zinc-400
              sm:mt-8 sm:text-base sm:leading-8
              md:text-lg md:leading-9
              lg:max-w-xl lg:text-base lg:leading-8
              xl:text-lg xl:leading-9"
            >
              <p className="text-justify">
                I'm{" "}
                <span className="font-semibold text-cyan-300">
                  Sumeet Bole
                </span>
                , a Frontend Developer passionate about
                crafting modern, responsive, and interactive
                web applications.
              </p>

              <p className="mt-4 text-justify" >
                I enjoy transforming ideas into intuitive
                interfaces using React, Next.js, and modern
                frontend technologies while continuously
                learning and improving every day.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Image */}
          <div className="min-w-0 w-full">
            <AboutImage />
          </div>
        </div>

        {/* Journey Timeline */}
        <motion.div
          initial={
            shouldReduceMotion ? false : { opacity: 0, y: 35 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-10 sm:mt-24 md:mt-28 lg:mt-32"
        >
          <JourneyTimeline />
        </motion.div>
      </div>
    </section>
  );
}
