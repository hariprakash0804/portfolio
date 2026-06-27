"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Star, Users, Mic, FileText } from "lucide-react";
import { achievements, responsibilities, paperPresentations } from "@/data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { fadeUp, staggerContainer } from "@/lib/motion";

const typeIcons = {
  record: Trophy,
  award: Medal,
  participation: Star,
};

const typeColors = {
  record: "text-amber-400 bg-amber-400/10",
  award: "text-emerald-400 bg-emerald-400/10",
  participation: "text-blue-400 bg-blue-400/10",
};

export function Achievements() {
  return (
    <section id="achievements" className="relative px-6 py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/[0.03] to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          label="Achievements"
          title="Awards & recognition"
          description="Milestones, awards, leadership roles, and academic contributions."
          align="center"
        />

        {/* Achievements */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-6 sm:grid-cols-2"
        >
          {achievements.map((ach) => {
            const Icon = typeIcons[ach.type];
            const colors = typeColors[ach.type];
            return (
              <motion.div
                key={ach.title}
                variants={fadeUp}
                whileHover={{ y: -4, scale: 1.01 }}
                className="glow-card group relative overflow-hidden rounded-2xl p-6"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute -inset-full top-0 h-full w-1/3 rotate-12 bg-gradient-to-r from-transparent via-white/5 to-transparent" 
                    style={{ animation: "shimmer 2s infinite" }} />
                </div>

                <div className="relative flex gap-4">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${colors}`}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{ach.title}</h3>
                    <p className="mt-0.5 text-sm text-accent">{ach.event}</p>
                    <p className="mt-2 text-sm text-muted">{ach.description}</p>
                    <span className="mt-3 inline-block rounded-full bg-white/5 px-3 py-0.5 text-xs text-muted">
                      {ach.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Positions of Responsibility */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-16"
        >
          <h3 className="mb-6 flex items-center justify-center gap-2 text-lg font-semibold text-foreground">
            <Users size={20} className="text-accent" />
            Positions of Responsibility
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {responsibilities.map((r) => (
              <motion.div
                key={r.role}
                whileHover={{ y: -3 }}
                className="glow-card rounded-xl p-5 text-center"
              >
                <div className="text-base font-semibold text-accent">{r.role}</div>
                <div className="mt-1 text-sm text-foreground">{r.organization}</div>
                <div className="mt-2 text-xs text-muted">{r.period}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Paper Presentations */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-16"
        >
          <h3 className="mb-6 flex items-center justify-center gap-2 text-lg font-semibold text-foreground">
            <FileText size={20} className="text-accent" />
            Paper Presentations
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {paperPresentations.map((p) => (
              <motion.div
                key={p.title}
                whileHover={{ y: -3 }}
                className="glow-card flex items-start gap-4 rounded-xl p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                  <Mic size={18} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{p.title}</div>
                  <div className="mt-1 text-xs text-muted">{p.venue}</div>
                  <div className="mt-1 text-xs text-accent">{p.year}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
