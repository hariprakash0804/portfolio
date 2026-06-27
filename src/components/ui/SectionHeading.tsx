"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className={align === "center" ? "text-center" : ""}
    >
      <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 font-mono text-xs tracking-widest text-accent uppercase backdrop-blur-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
        {label}
      </span>
      <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        <span className="gradient-text-animated">{title}</span>
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-lg text-muted ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
      {/* Animated underline */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={`mt-6 h-px origin-left bg-gradient-to-r from-accent via-accent-secondary to-transparent ${
          align === "center" ? "mx-auto max-w-xs origin-center" : "max-w-md"
        }`}
      />
    </motion.div>
  );
}
