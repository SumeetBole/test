"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import OrbitBadge from "./OrbitBadge";

export default function AboutImage() {
    return (
        <motion.div
            initial={{
                opacity: 0,
                scale: 0.8,
            }}
            whileInView={{
                opacity: 1,
                scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
                duration: 0.8,
            }}
            className="relative flex items-center justify-center"
        >
            {/* Cyan Glow */}
            <div className="absolute h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[120px]" />

            {/* Rotating Ring */}
            <motion.div
                animate={{
                    rotate: 360,
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute h-[420px] w-[420px] rounded-full border border-cyan-500/20"
            />

            <motion.div
                animate={{
                    rotate: -360,
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute h-[360px] w-[360px] rounded-full border border-blue-500/20 border-dashed"
            />

            {/* Orbit Badges */}
            <div className="absolute inset-0 z-30">
                <OrbitBadge tech="React" angle={0} />
                <OrbitBadge tech="Next.js" angle={60} />
                <OrbitBadge tech="Tailwind" angle={160} />
                <OrbitBadge tech="TypeScript" angle={200} />
                <OrbitBadge tech="Python" angle={240} />
                <OrbitBadge tech="Django" angle={300} />
            </div>

            {/* Floating Image */}
            <motion.div
                animate={{
                    y: [0, -12, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="relative z-10"
            >
                {/* Glass Border */}
                <div className="rounded-full border border-white/10 bg-white/5 p-3 backdrop-blur-2xl">
                    <div className="relative h-[340px] w-[340px] overflow-hidden rounded-full border border-cyan-500/20">
                        <Image
                            src="/profile1.png"
                            alt="Sumeet Bole"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Status */}
                <motion.div
                    animate={{
                        y: [0, -5, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                    className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-cyan-500/30 bg-[#0b0b0b]/90 px-4 py-2 backdrop-blur-xl"
                >
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse" />

                    <span className="text-xs text-white">
                        Available for Opportunities
                    </span>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}