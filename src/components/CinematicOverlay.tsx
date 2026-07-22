"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export function CinematicOverlay() {
  const grainRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);
  const rafRef = useRef<number>(0);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isMobile, setIsMobile] = useState(true);

  // Film grain generator
  const drawGrain = useCallback(() => {
    const canvas = grainRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    frameRef.current++;
    // Only update grain every 4 frames for performance
    if (frameRef.current % 4 === 0) {
      const w = canvas.width;
      const h = canvas.height;
      const imageData = ctx.createImageData(w, h);
      for (let i = 0; i < imageData.data.length; i += 4) {
        const val = Math.random() > 0.5 ? 255 : 0;
        imageData.data[i] = val;
        imageData.data[i + 1] = val;
        imageData.data[i + 2] = val;
        imageData.data[i + 3] = Math.random() * 12; // max alpha ~0.05
      }
      ctx.putImageData(imageData, 0, 0);
    }

    rafRef.current = requestAnimationFrame(drawGrain);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Resize grain canvas
    const canvas = grainRef.current;
    if (canvas) {
      canvas.width = Math.min(window.innerWidth / 2, 400);
      canvas.height = Math.min(window.innerHeight / 2, 300);
    }

    rafRef.current = requestAnimationFrame(drawGrain);

    // Cursor spotlight
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouse, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, [drawGrain]);

  if (isMobile) return null;

  return (
    <>
      {/* Film grain canvas */}
      <canvas
        ref={grainRef}
        className="pointer-events-none fixed inset-0 z-[9998] h-full w-full"
        style={{ opacity: 0.025, mixBlendMode: "overlay" }}
      />

      {/* Vignette */}
      <div
        className="pointer-events-none fixed inset-0 z-[9997]"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      {/* Scanlines */}
      <div
        className="pointer-events-none fixed inset-0 z-[9996]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(transparent 0px, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
          opacity: 0.3,
        }}
      />

      {/* Corner chromatic aberration - top left */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9996] h-[200px] w-[200px]"
        style={{
          background:
            "radial-gradient(circle at 0% 0%, rgba(255,0,0,0.015) 0%, transparent 60%)",
          mixBlendMode: "screen",
        }}
      />
      <div
        className="pointer-events-none fixed top-0 left-[6px] z-[9996] h-[200px] w-[200px]"
        style={{
          background:
            "radial-gradient(circle at 0% 0%, rgba(0,0,255,0.015) 0%, transparent 60%)",
          mixBlendMode: "screen",
        }}
      />

      {/* Cursor spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-[9995] transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(245,158,11,0.035) 0%, transparent 80%)`,
        }}
      />
    </>
  );
}
