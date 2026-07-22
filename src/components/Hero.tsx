"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Eye } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/SocialIcons";
import { personal } from "@/data/portfolio";
import { GradientMesh } from "./GradientMesh";
import { ResumeModal } from "./ui/ResumeModal";

export function Hero() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const nameFirst = "HARI";
  const nameSecond = "PRAKASH";

  useEffect(() => {
    const check = () => setIsMobile(window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section id="hero" className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background Layer — WebGL/Canvas Particle Field */}
      <GradientMesh />

      {/* Midground Layer — Ghost Watermark Typography */}
      <div className="pointer-events-none absolute right-4 top-1/2 z-1 select-none -translate-y-1/2 -rotate-2 opacity-10 blur-[0.5px] hidden sm:block sm:right-12">
        <span
          className="font-display font-bold tracking-tighter text-transparent"
          style={{
            fontSize: "clamp(100px, 18vw, 240px)",
            WebkitTextStroke: "1px rgba(255,255,255,0.15)",
          }}
        >
          DEVELOPER
        </span>
      </div>

      {/* Ambient Glow Blob */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-1 h-[300px] w-[300px] sm:h-[600px] sm:w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[80px] sm:blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(245,158,11,0.2) 0%, transparent 70%)",
        }}
      />

      {/* Foreground Content Layer */}
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Availability Badge / Mono Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-amber-400 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
            </span>
            FULL-STACK · MOBILE · AI
          </span>
        </motion.div>

        {/* Hero Title Signature Moment */}
        <div className="group cursor-default select-none my-4 font-display">
          {/* HARI - Solid White */}
          <div className="flex justify-center overflow-hidden">
            {nameFirst.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: 120, rotateX: -90, opacity: 0 }}
                animate={{ y: 0, rotateX: 0, opacity: 1 }}
                transition={{
                  duration: 0.9,
                  delay: 0.5 + index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={isMobile ? undefined : {
                  y: ((index % 3) - 1) * 10,
                  rotate: ((index % 2) * 2 - 1) * 8,
                  transition: { duration: 0.3 },
                }}
                className="inline-block text-4xl xs:text-5xl font-bold tracking-tight text-[#F0EEE6] sm:text-8xl md:text-9xl md:group-hover:[text-shadow:0_0_80px_rgba(245,158,11,0.4)]"
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* PRAKASH - Outline Text */}
          <div className="flex justify-center overflow-hidden">
            {nameSecond.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{
                  x: index % 2 === 0 ? -200 : 200,
                  opacity: 0,
                }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.9,
                  delay: 0.9 + index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={isMobile ? undefined : {
                  y: (((index + 1) % 3) - 1) * 10,
                  rotate: (((index + 1) % 2) * 2 - 1) * 8,
                  transition: { duration: 0.3 },
                }}
                className="inline-block text-4xl xs:text-5xl font-bold tracking-tight text-transparent sm:text-8xl md:text-9xl md:group-hover:[text-shadow:0_0_80px_rgba(245,158,11,0.4)]"
                style={{
                  WebkitTextStroke: isMobile ? "1px rgba(245, 158, 11, 0.85)" : "2px rgba(245, 158, 11, 0.85)",
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Editorial Subtitle Lines */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mx-auto mt-6 max-w-2xl text-lg italic text-gray-400 sm:text-xl font-editorial"
        >
          <p>Crafting experiences that live at the edge of the web.</p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="magnetic group relative overflow-hidden rounded-full border border-amber-500 bg-amber-500 px-6 sm:px-8 py-3.5 font-mono text-sm font-semibold uppercase tracking-widest text-[#050508] transition-all hover:bg-amber-400 hover:shadow-xl hover:shadow-amber-500/25"
          >
            <span className="relative z-10">See My Work ↓</span>
          </a>
          <button
            type="button"
            onClick={() => setResumeOpen(true)}
            className="magnetic inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 sm:px-8 py-3.5 font-mono text-sm font-semibold uppercase tracking-widest text-[#F0EEE6] backdrop-blur-sm transition-all hover:border-amber-500/50 hover:bg-white/10 hover:text-amber-400 cursor-pointer"
          >
            <Eye size={16} />
            Preview CV
          </button>
        </motion.div>

        {/* Resume Viewer Modal */}
        <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

        {/* Social Icons Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          {[
            { icon: GithubIcon, href: personal.links.github, label: "GitHub" },
            { icon: LinkedinIcon, href: personal.links.linkedin, label: "LinkedIn" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="magnetic flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-colors hover:border-amber-500/50 hover:text-amber-400"
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Animated Scroll Hint */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 text-gray-500 hover:text-amber-400 transition-colors"
        aria-label="Scroll to about"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs tracking-widest uppercase text-amber-500/70">Scroll</span>
          <ArrowDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}
