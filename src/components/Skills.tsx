"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { fadeUp, staggerContainer } from "@/lib/motion";

function AnimatedPercent({ level }: { level: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let current = 0;
    const interval = setInterval(() => {
      current += 2;
      if (current >= level) {
        setCount(level);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 20);
    return () => clearInterval(interval);
  }, [isInView, level]);

  return <span ref={ref}>{count}%</span>;
}

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="group">
      <div className="mb-2 flex justify-between text-sm">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-accent font-mono">
          <AnimatedPercent level={level} />
        </span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative h-full rounded-full bg-gradient-to-r from-accent to-accent-secondary"
        >
          {/* Glow trail */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-accent-secondary blur-sm opacity-50" />
        </motion.div>
      </div>
    </div>
  );
}

const categoryIcons: Record<string, string> = {
  Frontend: "🎨",
  Backend: "⚙️",
  DevOps: "🚀",
  Design: "✨",
  Tools: "🛠️",
};

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="Skills"
          title="Technologies I work with"
          description="Proficiency across the full stack — from design to deployment."
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((category) => (
            <motion.div
              key={category.category}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="glow-card rounded-2xl p-6"
            >
              <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold">
                <span className="text-xl">{categoryIcons[category.category] || "📦"}</span>
                <span className="h-2 w-2 rounded-full bg-accent" />
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
