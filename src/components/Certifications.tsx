"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Certifications() {
  return (
    <section id="certifications" className="relative px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          label="CREDENTIALS"
          title="Certifications & Badges"
          description="Verified course completion certificates and technical study jams."
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {certifications.map((cert) => (
            <motion.div
              key={`${cert.title}-${cert.issuer}`}
              variants={fadeUp}
              whileHover={{ scale: 1.02, y: -3 }}
              className="glow-card group relative overflow-hidden flex items-start gap-4 rounded-xl border border-white/10 bg-[#0D0D14] p-5 shadow-md"
            >
              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-400 transition-all group-hover:scale-110">
                <Award size={20} />
              </div>
              <div className="relative">
                <div className="text-sm font-bold text-gray-200 group-hover:text-amber-400 transition-colors">
                  {cert.title}
                </div>
                <div className="mt-1 font-mono text-xs text-gray-400">{cert.issuer}</div>
                <div className="mt-2 inline-block rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-amber-400">
                  {cert.year}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
