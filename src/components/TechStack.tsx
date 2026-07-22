"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { techStack } from "@/data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { fadeUp, staggerFast } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { SpotlightCard } from "./ui/SpotlightCard";

const categories = ["All", ...Array.from(new Set(techStack.map((t) => t.category)))];

export function TechStack() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? techStack : techStack.filter((t) => t.category === active);

  return (
    <section id="techstack" className="relative px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="STACK OVERVIEW"
          title="Tools & Technologies"
          description="A visual overview of the languages, frameworks, and infrastructure in my toolkit."
          align="center"
        />

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={cn(
                "rounded-full px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer magnetic",
                active === cat
                  ? "bg-amber-500 text-[#050508] shadow-lg shadow-amber-500/25"
                  : "border border-white/10 bg-white/5 text-gray-400 hover:border-amber-500/50 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Tech grid */}
        <motion.div
          layout
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((tech) => (
              <motion.div
                key={tech.name}
                layout
                variants={fadeUp}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ y: -6, scale: 1.05 }}
              >
                <SpotlightCard className="h-full">
                  <div className="flex flex-col items-center justify-center p-5 text-center">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10 font-mono text-sm font-bold text-amber-400 transition-all group-hover:border-amber-500/50 group-hover:bg-amber-500/20 group-hover:scale-110">
                      {tech.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div className="text-xs font-mono font-semibold text-gray-200">{tech.name}</div>
                    <div className="mt-1 font-mono text-[10px] uppercase text-gray-400">{tech.category}</div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
