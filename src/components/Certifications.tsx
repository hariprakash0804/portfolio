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
          label="Certifications"
          title="Credentials & awards"
          description="Professional certifications and recognitions."
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
              className="glow-card group relative overflow-hidden flex items-start gap-4 rounded-xl p-5"
            >
              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute -inset-full top-0 h-full w-1/3 rotate-12 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                  style={{ animation: "shimmer 2s infinite" }} />
              </div>

              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400 transition-all group-hover:scale-110">
                <Award size={20} />
              </div>
              <div className="relative">
                <div className="text-sm font-medium text-foreground">
                  {cert.title}
                </div>
                <div className="mt-1 text-xs text-muted">{cert.issuer}</div>
                <div className="mt-1 inline-block rounded-full bg-accent/10 px-2 py-0.5 text-xs text-accent font-medium">{cert.year}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
