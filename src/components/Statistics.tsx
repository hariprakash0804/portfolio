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
    <span ref={ref} className="font-mono text-4xl font-extrabold gradient-text-animated sm:text-5xl">
      {count}{suffix}
    </span>
  );
}

export function Statistics() {
  return (
    <section id="statistics" className="relative px-6 py-20 lg:py-28">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="relative mx-auto grid grid-cols-2 max-w-6xl gap-4 sm:gap-6 lg:grid-cols-3"
      >
        {statistics.map((stat) => {
          const Icon = iconMap[stat.label] || Code;
          return (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glow-card group flex flex-col items-center rounded-2xl border border-white/10 bg-[#0D0D14] p-8 text-center shadow-xl"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10 text-amber-400 transition-colors group-hover:bg-amber-500/20">
                <Icon size={24} />
              </div>
              <CountUp target={stat.numericValue} suffix={stat.suffix} />
              <span className="mt-2 font-mono text-xs font-semibold uppercase tracking-wider text-gray-400">
                {stat.label}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
