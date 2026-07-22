"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personal } from "@/data/portfolio";

export function Preloader() {
  const [show, setShow] = useState(false);
  const [phase, setPhase] = useState(0); // 0=idle, 1=line, 2=initials, 3=bar, 4=scaleDownFade, 5=slideUp, 6=done

  useEffect(() => {
    // Only show on first visit
    if (typeof window !== "undefined") {
      const visited = localStorage.getItem("hp_visited");
      if (!visited) {
        setTimeout(() => {
          setShow(true);
          localStorage.setItem("hp_visited", "true");
        }, 0);
      }
    }
  }, []);

  useEffect(() => {
    if (!show) return;
    // Exact sequence from North Star Brief:
    // 0ms   - Silence. Black screen.
    // 200ms - Single horizontal line (scaleX 0 -> 1 over 600ms)
    // 600ms - Initials HP appear character clip-path reveal (80ms apart)
    // 1000ms- Loading bar fills 0 -> 100% over 800ms
    // 1800ms- All elements scale down to 0.8 and fade to opacity 0 over 300ms
    // 2100ms- Preloader div slides up translateY(-100%) over 500ms
    const timers = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 600),
      setTimeout(() => setPhase(3), 1000),
      setTimeout(() => setPhase(4), 1800),
      setTimeout(() => setPhase(5), 2100),
      setTimeout(() => setPhase(6), 2600),
    ];
    return () => timers.forEach(clearTimeout);
  }, [show]);

  if (!show || phase >= 6) return null;

  return (
    <AnimatePresence>
      {phase < 6 && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center pointer-events-none select-none"
          style={{ background: "#050508" }}
          initial={{ y: 0 }}
          animate={phase >= 5 ? { y: "-100%" } : { y: 0 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            className="flex flex-col items-center justify-center"
            animate={
              phase >= 4
                ? { scale: 0.8, opacity: 0 }
                : { scale: 1, opacity: 1 }
            }
            transition={{ duration: 0.3 }}
          >
            {/* Horizontal line */}
            <motion.div
              className="absolute h-[1px] w-full max-w-md"
              style={{ background: "var(--accent-amber)" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: phase >= 1 ? 1 : 0 }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            />

            {/* HPA Initials */}
            <motion.div className="relative z-10 mb-8">
              <div className="flex gap-4">
                {personal.name.short.split("").map((letter, i) => (
                  <motion.span
                    key={`${letter}-${i}`}
                    className="text-6xl sm:text-8xl font-bold tracking-tight"
                    style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    animate={{
                      clipPath: phase >= 2 ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
                    }}
                    transition={{ duration: 0.4, delay: i * 0.08, ease: [0.33, 1, 0.68, 1] }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              className="relative h-[2px] w-48 overflow-hidden rounded-full"
              style={{ background: "rgba(255,255,255,0.06)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 3 ? 1 : 0 }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, var(--accent-amber), var(--accent-indigo))",
                }}
                initial={{ width: "0%" }}
                animate={{ width: phase >= 3 ? "100%" : "0%" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
