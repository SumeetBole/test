"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function MouseGlow() {
  const [position, setPosition] = useState({
    x: -500,
    y: -500,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 250,
        y: position.y - 250,
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
        mass: 0.3,
      }}
      className="pointer-events-none absolute z-10 h-[500px] w-[500px] rounded-full"
      style={{
        background:
          "radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0.08) 35%, transparent 75%)",
        filter: "blur(80px)",
      }}
    />
  );
}