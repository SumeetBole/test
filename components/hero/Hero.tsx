"use client";

import { motion } from "framer-motion";

import HeroBackground from "./HeroBackground";
import MouseGlow from "./MouseGlow";
import HeroImage from "./HeroImage";
import HeroButtons from "./HeroButtons";
import TechMarquee from "./TechMarquee";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen overflow-hidden bg-[#050505]">
      {/* Background */}
      <HeroBackground />
      <MouseGlow />

      {/* Gradient Blobs */}
      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[120px]" />

      {/* Main Content */}
      <div className="relative z-20 mx-auto flex w-full max-w-7xl items-center px-6 pt-24 pb-32 lg:px-12">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300 backdrop-blur-md">
              👋 Hello, I'm
            </span>

            <div className="leading-none">
              <h1 className="text-6xl font-black uppercase tracking-tight text-white md:text-7xl xl:text-8xl">
                SUMEET
              </h1>

              <h2 className="mt-2 bg-gradient-to-r from-blue-500 via-cyan-300 to-sky-500 bg-clip-text text-5xl font-black uppercase text-transparent md:text-6xl xl:text-7xl">
                FRONTEND
              </h2>

              <h2 className="text-5xl font-black uppercase text-white md:text-6xl xl:text-7xl">
                DEVELOPER
              </h2>
            </div>

            <p className="max-w-xl text-lg leading-8 text-zinc-400">
              I build premium, high-performance web experiences using{" "}
              <span className="font-semibold text-cyan-300">
                React, Next.js, Tailwind CSS
              </span>{" "}
              and modern UI technologies, creating beautiful interfaces with
              exceptional user experiences.
            </p>

            <HeroButtons />
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex items-center justify-center"
          >
            <HeroImage />
          </motion.div>
        </div>
      </div>

      {/* Tech Marquee */}
      <div className="absolute bottom-0 left-0 z-30 w-full ">
        <TechMarquee />
      </div>
    </section>
  );
}