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
          label="Education"
          title="Academic background"
          description="Formal education and continuous learning."
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
            const isOngoing = item.year.includes("Present");
            return (
              <motion.div
                key={item.degree}
                variants={fadeUp}
                whileHover={{ x: 8 }}
                className="glow-card group flex flex-col sm:flex-row gap-4 sm:gap-6 rounded-2xl p-6"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all group-hover:bg-accent/20 group-hover:scale-110">
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
                    <h3 className="text-lg font-semibold">{item.degree}</h3>
                    <span className={`rounded-full px-3 py-0.5 text-xs font-medium ${
                      isOngoing
                        ? "bg-emerald-400/10 text-emerald-400"
                        : "bg-white/5 text-muted"
                    }`}>
                      {isOngoing ? "🟢 Ongoing" : item.year}
                    </span>
                  </div>
                  <p className="mt-1 text-accent">{item.school}</p>
                  <p className="mt-2 text-sm text-muted font-medium">{item.note}</p>
                  {/* Progress bar for ongoing */}
                  {isOngoing && (
                    <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "70%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.3 }}
                        className="h-full rounded-full bg-gradient-to-r from-accent to-accent-secondary"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
