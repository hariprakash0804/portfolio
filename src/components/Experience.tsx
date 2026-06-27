"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { fadeUp } from "@/lib/motion";

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-secondary/5 to-transparent" />

      <div className="relative mx-auto max-w-4xl">
        <SectionHeading
          label="Experience"
          title="Where I've worked"
          description="My professional journey and key contributions."
          align="center"
        />

        <div className="relative mt-16">
          {/* Animated timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-0 left-6 h-full w-px origin-top bg-gradient-to-b from-accent via-accent-secondary to-transparent md:left-1/2 md:-translate-x-px"
          />

          {experience.map((job, i) => (
            <motion.div
              key={`${job.company}-${job.role}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className={`relative mb-12 flex flex-col md:flex-row ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="hidden w-1/2 md:block" />

              <div
                className={`w-full pl-16 md:w-1/2 md:pl-0 ${
                  i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glow-card rounded-2xl p-6"
                >
                  <div
                    className={`flex items-center gap-2 text-sm text-accent ${
                      i % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    <Briefcase size={14} />
                    {job.duration}
                  </div>
                  <h3 className="mt-2 text-xl font-semibold">{job.role}</h3>
                  <p className="text-muted">
                    {job.company} · {job.location}
                  </p>
                  <ul
                    className={`mt-4 space-y-2 text-sm text-muted ${
                      i % 2 === 0 ? "md:text-right" : ""
                    }`}
                  >
                    {job.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className={`flex gap-2 ${
                          i % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Timeline dot with glow */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute top-6 left-6 flex h-3 w-3 -translate-x-1/2 items-center justify-center md:left-1/2"
              >
                <span className="absolute h-8 w-8 rounded-full bg-accent/20 animate-pulse-glow" />
                <span className="relative h-3 w-3 rounded-full bg-accent shadow-lg shadow-accent/50" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
