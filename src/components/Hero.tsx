"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/SocialIcons";
import { personal } from "@/data/portfolio";
import { GradientMesh } from "./GradientMesh";
import { staggerContainer, fadeUp } from "@/lib/motion";

function useTypewriter(texts: string[], typingSpeed = 80, deletingSpeed = 50, pause = 2000) {
  const [displayed, setDisplayed] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayed(current.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);

          if (charIndex + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), pause);
          }
        } else {
          setDisplayed(current.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);

          if (charIndex === 0) {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pause]);

  return displayed;
}

export function Hero() {
  const roles = [personal.primaryRole, ...personal.roleVariants];
  const displayedRole = useTypewriter(roles, 80, 50, 2000);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24">
      <GradientMesh />

      {/* Floating decorative shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-[10%] h-16 w-16 animate-float rounded-full border border-accent/20 opacity-30" />
        <div className="absolute top-40 right-[15%] h-10 w-10 animate-float-reverse rounded-lg border border-accent-secondary/20 opacity-20 rotate-45" />
        <div className="absolute bottom-32 left-[20%] h-12 w-12 animate-float-slow rounded-full border border-purple-400/15 opacity-25" />
        <div className="absolute bottom-40 right-[25%] h-8 w-8 animate-float rounded-lg border border-accent/15 opacity-20 rotate-12" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-5xl text-center"
      >
        <motion.div variants={fadeUp} className="mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {personal.availability}
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="block text-foreground">{personal.name.display}</span>
          <span className="mt-2 block h-[1.2em] bg-gradient-to-r from-accent via-accent-secondary to-purple-400 bg-clip-text text-transparent">
            {displayedRole}
            <span className="animate-typewriter-cursor ml-1 inline-block w-[3px] bg-accent text-transparent">|</span>
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl"
        >
          {personal.tagline}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-accent to-accent-secondary px-8 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-xl hover:shadow-accent/30"
          >
            <span className="relative z-10">View my work</span>
            <motion.span
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
          </a>
          <a
            href={personal.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
          >
            <FileText size={16} />
            Download CV
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-12 flex items-center justify-center gap-4"
        >
          {[
            { icon: GithubIcon, href: personal.links.github, label: "GitHub" },
            { icon: LinkedinIcon, href: personal.links.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-muted transition-colors hover:border-accent/50 hover:text-accent animate-pulse-glow"
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted"
        aria-label="Scroll to about"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono tracking-widest uppercase text-accent/60">Scroll</span>
          <ArrowDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  );
}
