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
          label="Tech Stack"
          title="Tools & technologies"
          description="A visual overview of the technologies in my toolkit."
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
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                active === cat
                  ? "bg-accent text-white shadow-lg shadow-accent/25"
                  : "border border-white/10 text-muted hover:border-white/20 hover:text-foreground",
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
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-lg font-bold text-accent transition-all group-hover:bg-accent/20 group-hover:scale-110">
                      {tech.name.slice(0, 2)}
                    </div>
                    <div className="text-xs font-semibold text-foreground">{tech.name}</div>
                    <div className="mt-1 text-[10px] text-muted">{tech.category}</div>
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
