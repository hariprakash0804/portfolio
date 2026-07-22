"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Ghost {
  id: number;
  x: number;
  y: number;
}

export function CustomCursor() {
  const [hoverState, setHoverState] = useState<"default" | "hover" | "project">("default");
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.2 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  const [ghosts, setGhosts] = useState<Ghost[]>([]);
  const frameCount = useRef(0);

  useEffect(() => {
    const checkDevice = () => {
      const hasTouch = window.matchMedia("(pointer: coarse)").matches;
      const isSmallScreen = window.innerWidth < 768;
      setIsMobile(hasTouch || isSmallScreen);
    };

    checkDevice();
    setMounted(true);
    window.addEventListener("resize", checkDevice);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      frameCount.current++;
      if (frameCount.current % 6 === 0) {
        const newGhost: Ghost = { id: Date.now() + Math.random(), x: e.clientX, y: e.clientY };
        setGhosts((prev) => [...prev.slice(-4), newGhost]);
      }
    };

    window.addEventListener("mousemove", moveCursor);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(".project-card") || target.closest("#projects .glow-card")) {
        setHoverState("project");
      } else if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".magnetic") ||
        target.closest(".glow-card")
      ) {
        setHoverState("hover");
      } else {
        setHoverState("default");
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!mounted || isMobile) return null;

  return (
    <>
      {/* Chromatic ghost trail */}
      {ghosts.map((g) => (
        <motion.div
          key={g.id}
          initial={{ opacity: 0.15, scale: 1 }}
          animate={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.6 }}
          onAnimationComplete={() => {
            setGhosts((prev) => prev.filter((item) => item.id !== g.id));
          }}
          className="pointer-events-none fixed top-0 left-0 z-[9998] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-500/40"
          style={{
            left: g.x,
            top: g.y,
            boxShadow: "-3px 0 6px rgba(255,0,0,0.3), 3px 0 6px rgba(0,0,255,0.3)",
          }}
        />
      ))}

      {/* Outer Cursor Ring */}
      <motion.div
        id="cursor-ring"
        className="pointer-events-none fixed top-0 left-0 z-[9999] flex items-center justify-center rounded-full border border-amber-500/70 text-[10px] font-mono font-bold uppercase tracking-widest text-amber-300 backdrop-blur-[1px]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hoverState === "project" ? 120 : hoverState === "hover" ? 80 : 40,
          height: hoverState === "project" ? 48 : hoverState === "hover" ? 80 : 40,
          borderRadius: hoverState === "project" ? "12px" : "50%",
          backgroundColor:
            hoverState === "project"
              ? "rgba(245, 158, 11, 0.25)"
              : hoverState === "hover"
                ? "rgba(245, 158, 11, 0.15)"
                : "rgba(245, 158, 11, 0.02)",
          borderColor:
            hoverState === "project"
              ? "rgba(245, 158, 11, 0.9)"
              : hoverState === "hover"
                ? "rgba(245, 158, 11, 0.8)"
                : "rgba(245, 158, 11, 0.6)",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        {hoverState === "project" && "VIEW ↗"}
      </motion.div>

      {/* Inner Precision Cursor Dot */}
      <motion.div
        id="cursor-dot"
        className="pointer-events-none fixed top-0 left-0 z-[10000] h-2 w-2 rounded-full bg-amber-500 shadow-[0_0_10px_#f59e0b]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hoverState !== "default" ? 0 : 1,
          opacity: hoverState !== "default" ? 0 : 1,
        }}
      />
    </>
  );
}
