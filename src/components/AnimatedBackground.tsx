"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Floating aurora blobs */}
      <motion.div
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-32 h-[500px] w-[500px] rounded-full bg-amber-500/[0.04] blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -40, 50, 0],
          y: [0, 30, -50, 0],
          scale: [1.1, 0.9, 1.2, 1.1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-2/3 -right-32 h-[450px] w-[450px] rounded-full bg-indigo-500/[0.04] blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 30, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/3 h-[350px] w-[350px] rounded-full bg-amber-400/[0.03] blur-[100px]"
      />
    </div>
  );
}
