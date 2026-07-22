"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { SpotlightCard } from "./ui/SpotlightCard";

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
        <span className="font-mono text-xs font-medium text-gray-300 group-hover:text-amber-400 transition-colors">
          {name}
        </span>
        <span className="text-amber-400 font-mono text-xs font-semibold">
          <AnimatedPercent level={level} />
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/5 border border-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative h-full rounded-full bg-gradient-to-r from-amber-500 to-indigo-500"
        >
          <div className="absolute inset-0 rounded-full bg-amber-400 blur-xs opacity-40" />
        </motion.div>
      </div>
    </div>
  );
}

const categoryIcons: Record<string, string> = {
  Frontend: "⚡",
  Backend: "⚙️",
  DevOps: "🚀",
  "Cloud & DevOps": "☁️",
  "Mobile Development": "📱",
  "IoT & Embedded": "🔌",
  Design: "✨",
  Tools: "🛠️",
};

export function Skills() {
  const marqueeRows = [
    ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "Three.js", "shadcn/ui"],
    ["React Native", "Expo", "Node.js", "tRPC", "FastAPI", "Python", "Socket.io", "BullMQ"],
    ["Prisma ORM", "MySQL", "Redis", "MinIO", "Meilisearch", "RAG", "LangChain", "Docker"],
  ];

  return (
    <section id="skills" className="relative px-6 py-24 lg:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="ARSENAL"
          title="Tools I Think In"
          description="Proficiency across the full stack — from design to scalable cloud systems."
          align="center"
        />

        {/* Infinite Horizontal Marquee Rows */}
        <div className="mt-12 space-y-4">
          {marqueeRows.map((row, rowIndex) => {
            const isReverse = rowIndex % 2 === 1;
            const duplicated = [...row, ...row, ...row, ...row];
            return (
              <div
                key={rowIndex}
                className="group relative flex overflow-hidden whitespace-nowrap mask-gradient"
              >
                <div
                  className="flex gap-3 py-1"
                  style={{
                    animation: `${isReverse ? "marquee-reverse" : "marquee"} 35s linear infinite`,
                  }}
                >
                  {duplicated.map((item, i) => (
                    <div
                      key={`${item}-${i}`}
                      className="magnetic inline-flex h-9 items-center justify-center rounded-full border border-white/10 bg-[#0D0D14] px-4 font-mono text-xs font-medium text-gray-300 transition-all duration-300 hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-amber-400 hover:-translate-y-1 hover:shadow-[0_0_16px_rgba(245,158,11,0.2)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Categorized Proficiency Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((category) => (
            <motion.div
              key={category.category}
              variants={fadeUp}
              whileHover={{ y: -6 }}
            >
              <SpotlightCard className="p-6 h-full border border-white/5 bg-[#0D0D14]/90 backdrop-blur-md">
                <h3 className="mb-6 flex items-center gap-2 font-display text-base font-bold uppercase tracking-wider text-amber-400">
                  <span className="text-lg">{categoryIcons[category.category] || "📦"}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <SkillBar key={skill.name} {...skill} />
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
