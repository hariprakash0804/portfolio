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
  record: "text-amber-400 bg-amber-500/10 border-amber-500/30",
  award: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
  participation: "text-indigo-400 bg-indigo-500/10 border-indigo-500/30",
};

export function Achievements() {
  return (
    <section id="achievements" className="relative px-6 py-24 lg:py-32">
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          label="HONORS & ROLES"
          title="Awards & Leadership"
          description="World record milestones, contest awards, club leadership, and research presentations."
          align="center"
        />

        {/* Achievements */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {achievements.map((ach) => {
            const Icon = typeIcons[ach.type];
            const colors = typeColors[ach.type];
            return (
              <motion.div
                key={ach.title}
                variants={fadeUp}
                whileHover={{ y: -4, scale: 1.01 }}
                className="glow-card group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0D0D14] p-6 shadow-xl"
              >
                <div className="relative flex gap-4">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${colors}`}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{ach.title}</h3>
                    <p className="mt-0.5 font-mono text-xs text-amber-400">{ach.event}</p>
                    <p className="mt-2 text-sm leading-relaxed text-gray-300">{ach.description}</p>
                    <span className="mt-3 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-0.5 font-mono text-xs text-gray-400">
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
          <h3 className="mb-6 flex items-center justify-center gap-2 font-mono text-sm font-bold uppercase tracking-wider text-amber-400">
            <Users size={18} className="text-amber-400" />
            Positions of Responsibility
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {responsibilities.map((r) => (
              <motion.div
                key={r.role}
                whileHover={{ y: -3 }}
                className="glow-card rounded-xl border border-white/10 bg-[#0D0D14] p-5 text-center"
              >
                <div className="text-base font-bold text-amber-400">{r.role}</div>
                <div className="mt-1 text-sm font-medium text-gray-200">{r.organization}</div>
                <div className="mt-2 font-mono text-xs text-gray-400">{r.period}</div>
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
          <h3 className="mb-6 flex items-center justify-center gap-2 font-mono text-sm font-bold uppercase tracking-wider text-amber-400">
            <FileText size={18} className="text-amber-400" />
            Paper Presentations
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {paperPresentations.map((p) => (
              <motion.div
                key={p.title}
                whileHover={{ y: -3 }}
                className="glow-card flex items-start gap-4 rounded-xl border border-white/10 bg-[#0D0D14] p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-indigo-500/30 bg-indigo-500/10 text-indigo-400">
                  <Mic size={18} />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-200">{p.title}</div>
                  <div className="mt-1 font-mono text-xs text-gray-400">{p.venue}</div>
                  <div className="mt-1 font-mono text-xs text-amber-400">{p.year}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
