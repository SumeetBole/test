
"use client";

import { motion, useReducedMotion } from "framer-motion";

import HeroBackground from "./HeroBackground";
import MouseGlow from "./MouseGlow";
import HeroImage from "./HeroImage";
import HeroButtons from "./HeroButtons";
import TechMarquee from "./TechMarquee";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-screen min-h-[100svh] w-full flex-col overflow-hidden bg-[#050505]">

      {/* Background */}
      <HeroBackground />

      <div className="hidden md:block">
        <MouseGlow />
      </div>

      {/* Gradient Blobs */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-600/20 blur-[100px] sm:h-80 sm:w-80 lg:h-[420px] lg:w-[420px] lg:blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-[100px] sm:h-80 sm:w-80 lg:h-[420px] lg:w-[420px] lg:blur-[120px]" />

      {/* Main Content */}
      <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-1 items-center px-5 pb-28 pt-28 sm:px-8 sm:pb-32 sm:pt-32 md:px-10 lg:px-12 lg:py-28">

        <div className="grid w-full grid-cols-1 items-center gap-10 sm:gap-12 md:gap-14 lg:grid-cols-2 lg:gap-10 xl:gap-16">

          {/* LEFT CONTENT */}
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, y: 50 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
            className="flex w-full flex-col items-start space-y-6 text-left sm:space-y-7 md:space-y-8"
          >

            {/* Greeting */}
            <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs text-cyan-300 backdrop-blur-md sm:px-5 sm:text-sm">
              👋 Hello, I'm
            </span>

            {/* Heading */}
            <div className="w-full leading-[0.95]">

              <h1 className="text-[clamp(2.8rem,9vw,5rem)] font-black uppercase tracking-tight text-white sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-6xl">
                SUMEET
              </h1>

              <h2 className="mt-2 bg-gradient-to-r from-blue-500 via-cyan-300 to-sky-500 bg-clip-text text-[clamp(2.1rem,7.5vw,4.5rem)] font-black uppercase tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-6xl">
                FRONTEND
              </h2>

              <h2 className="mt-1 text-[clamp(2.1rem,7.5vw,4.5rem)] font-black uppercase tracking-tight text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-6xl">
                DEVELOPER
              </h2>

            </div>

            {/* Description */}
            <p className="w-full max-w-full text-justify text-sm leading-7 text-zinc-400 [text-align-last:left] sm:text-base sm:leading-8 md:text-lg lg:max-w-xl">
              I build premium, high-performance web experiences using{" "}
              <span className="font-semibold text-cyan-300">
                React, Next.js, Tailwind CSS
              </span>{" "}
              and modern UI technologies, creating beautiful interfaces with
              exceptional user experiences.
            </p>

            {/* Buttons */}
            <div className="w-full justify-center">
              <HeroButtons />
            </div>

          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, scale: 0.85, x: 40 }
            }
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 1 }}
            className="relative mx-auto flex w-full max-w-[280px] items-center justify-center sm:max-w-sm md:max-w-md lg:max-w-full"
          >
            <HeroImage />
          </motion.div>

        </div>
      </div>

      {/* Tech Marquee */}
      <div className="absolute bottom-0 left-0 z-30 w-full overflow-hidden">
        <TechMarquee />
      </div>

    </section>
  );
}
