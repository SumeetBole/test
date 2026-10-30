
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import OrbitBadge from "./OrbitBadge";

export default function AboutImage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion ? false : { opacity: 0, scale: 0.92 }
      }
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="
        relative mx-auto flex w-full min-w-0
        max-w-[620px] items-center justify-center
        overflow-visible
        py-10
        sm:py-12
        lg:py-8
        xl:py-10
      "
    >
      {/* Responsive Image Stage */}
      <div
        className="
          relative isolate flex aspect-square
          w-full max-w-[300px] items-center justify-center
          sm:max-w-[360px]
          md:max-w-[420px]
          lg:max-w-[390px]
          xl:max-w-[450px]
          2xl:max-w-[500px]
        "
      >
        {/* Cyan Glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            left-1/2 top-1/2
            aspect-square w-[90%]
            -translate-x-1/2 -translate-y-1/2
            rounded-full bg-cyan-500/20
            blur-[60px]
            sm:blur-[80px]
            lg:blur-[90px]
          "
        />

        {/* Outer Rotating Ring */}
        <motion.div
          aria-hidden="true"
          animate={shouldReduceMotion ? undefined : { rotate: 360 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            pointer-events-none absolute
            inset-[2%] rounded-full
            border border-cyan-500/20
          "
        />

        {/* Inner Rotating Ring */}
        <motion.div
          aria-hidden="true"
          animate={shouldReduceMotion ? undefined : { rotate: -360 }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            pointer-events-none absolute
            inset-[10%] rounded-full
            border border-dashed border-blue-500/25
          "
        />

        {/* Orbit Badges */}
        <div className="pointer-events-none absolute inset-0 z-30">
          <OrbitBadge tech="React" angle={0} />
          <OrbitBadge tech="Next.js" angle={60} />
          <OrbitBadge tech="Tailwind" angle={160} />
          <OrbitBadge tech="TypeScript" angle={200} />
          <OrbitBadge tech="Python" angle={240} />
          <OrbitBadge tech="Django" angle={300} />
        </div>

        {/* Centered Floating Profile Image */}
        <motion.div
          animate={
            shouldReduceMotion ? undefined : { y: [0, -8, 0] }
          }
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-10 w-[78%]"
        >
          {/* Glass Border */}
          <div
            className="
              rounded-full border border-white/10
              bg-white/5 p-1.5
              backdrop-blur-xl
              sm:p-2
              md:p-2.5
            "
          >
            {/* Image Container */}
            <div
              className="
                relative aspect-square w-full
                overflow-hidden rounded-full
                border border-cyan-500/25
                bg-zinc-950
              "
            >
              <Image
                src="/profile1.png"
                alt="Sumeet Bole - Frontend Developer"
                fill
                priority
                sizes="
                  (max-width: 639px) 225px,
                  (max-width: 767px) 280px,
                  (max-width: 1023px) 325px,
                  (max-width: 1279px) 300px,
                  (max-width: 1535px) 350px,
                  390px
                "
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Availability Status */}
          <motion.div
            animate={
              shouldReduceMotion ? undefined : { y: [0, -4, 0] }
            }
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute -bottom-3 left-1/2
              flex w-max max-w-[calc(100vw-48px)]
              -translate-x-1/2 items-center
              justify-center gap-2
              rounded-full border border-cyan-500/30
              bg-[#0b0b0b]/95
              px-3 py-2
              shadow-lg shadow-cyan-500/10
              backdrop-blur-xl
              sm:px-4
            "
          >
            <span
              className="
                h-2 w-2 shrink-0 rounded-full
                bg-green-400
                sm:h-2.5 sm:w-2.5
              "
            />

            <span
              className="
                whitespace-nowrap text-[10px]
                font-medium text-white
                sm:text-xs
              "
            >
              Available for Opportunities
            </span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
