"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Award, Briefcase, Layers, FileText, Trophy } from "lucide-react";
import { statistics } from "@/data/portfolio";
import { fadeUp, staggerContainer } from "@/lib/motion";

const iconMap: Record<string, typeof Code> = {
  "Projects Built": Code,
  "Certifications": Award,
  "Internships": Briefcase,
  "Technologies": Layers,
  "Papers Presented": FileText,
  "Awards": Trophy,
};

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let current = 0;
    const step = Math.max(1, Math.floor(target / 30));
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-4xl font-bold gradient-text-animated sm:text-5xl">
      {count}{suffix}
    </span>
  );
}

export function Statistics() {
  return (
    <section id="statistics" className="relative px-6 py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.03] to-transparent" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="relative mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {statistics.map((stat) => {
          const Icon = iconMap[stat.label] || Code;
          return (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glow-card group flex flex-col items-center rounded-2xl p-8 text-center"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                <Icon size={24} />
              </div>
              <CountUp target={stat.numericValue} suffix={stat.suffix} />
              <span className="mt-2 text-sm text-muted">{stat.label}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
