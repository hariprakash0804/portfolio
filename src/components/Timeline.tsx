"use client";

import { motion } from "framer-motion";
import { timeline } from "@/data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { fadeUp } from "@/lib/motion";

const typeConfig: Record<string, { color: string; bg: string; label: string }> = {
  education: { color: "text-blue-400", bg: "bg-blue-400", label: "🎓" },
  work: { color: "text-emerald-400", bg: "bg-emerald-400", label: "💼" },
  achievement: { color: "text-amber-400", bg: "bg-amber-400", label: "🏆" },
  certification: { color: "text-purple-400", bg: "bg-purple-400", label: "📜" },
  paper: { color: "text-cyan-400", bg: "bg-cyan-400", label: "📄" },
};

export function Timeline() {
  return (
    <section id="timeline" className="relative px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          label="Timeline"
          title="My journey so far"
          description="A chronological view of my education, work, and achievements."
          align="center"
        />

        <div className="relative mt-16">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-0 left-6 h-full w-px origin-top bg-gradient-to-b from-accent via-accent-secondary to-purple-400 md:left-1/2 md:-translate-x-px"
          />

          {timeline.map((event, i) => {
            const config = typeConfig[event.type] || typeConfig.education;
            const isRight = i % 2 === 0;

            return (
              <motion.div
                key={`${event.title}-${event.date}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                className={`relative mb-10 flex flex-col md:flex-row ${
                  isRight ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="hidden w-1/2 md:block" />

                <div
                  className={`w-full pl-16 md:w-1/2 md:pl-0 ${
                    isRight ? "md:pr-10 md:text-right" : "md:pl-10"
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="glow-card rounded-xl p-5"
                  >
                    <div className={`flex items-center gap-2 text-xs font-mono ${config.color} ${isRight ? "md:justify-end" : ""}`}>
                      <span>{config.label}</span>
                      {event.date}
                    </div>
                    <h3 className="mt-2 text-base font-semibold text-foreground">{event.title}</h3>
                    <p className="mt-1 text-sm text-muted">{event.subtitle}</p>
                  </motion.div>
                </div>

                {/* Color-coded dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                  className="absolute top-5 left-6 flex -translate-x-1/2 items-center justify-center md:left-1/2"
                >
                  <span className={`absolute h-6 w-6 rounded-full ${config.bg} opacity-20`} />
                  <span className={`relative h-3 w-3 rounded-full ${config.bg}`} />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
