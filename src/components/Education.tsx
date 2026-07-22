"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Education() {
  return (
    <section id="education" className="relative px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          label="ACADEMICS"
          title="Education & Degrees"
          description="Formal degree coursework and foundational engineering studies."
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 space-y-6"
        >
          {education.map((item, index) => {
            const isOngoing = item.year.includes("Present") || item.year.includes("2026");
            return (
              <motion.div
                key={item.degree}
                variants={fadeUp}
                whileHover={{ x: 8 }}
                className="glow-card group flex flex-col sm:flex-row gap-4 sm:gap-6 rounded-2xl border border-white/10 bg-[#0D0D14] p-6 shadow-xl"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 transition-all group-hover:bg-amber-500/20 group-hover:scale-110">
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileInView={{ rotate: [0, -10, 10, -5, 0] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                  >
                    <GraduationCap size={26} />
                  </motion.div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-bold text-white">{item.degree}</h3>
                    <span className={`rounded-full px-3 py-0.5 font-mono text-xs font-semibold ${
                      isOngoing
                        ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                        : "border border-white/10 bg-white/5 text-gray-400"
                    }`}>
                      {item.year}
                    </span>
                  </div>
                  <p className="mt-1 font-mono text-xs text-amber-400">{item.school}</p>
                  <p className="mt-2 text-sm text-gray-300 font-medium">{item.note}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
