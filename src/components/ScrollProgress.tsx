"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 right-0 left-0 z-[100] h-[2px] origin-left bg-gradient-to-r from-amber-500 via-indigo-500 to-amber-400 shadow-[0_0_10px_#f59e0b]"
      style={{ scaleX }}
    />
  );
}
