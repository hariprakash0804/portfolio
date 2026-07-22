"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { personal } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 px-6 py-12 bg-[#050508]">
      {/* Animated gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-gray-500 uppercase tracking-wider"
        >
          {personal.name.short} © {year}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-gray-400"
        >
          Built with Next.js & obsession
        </motion.p>

        <motion.a
          href="#"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          className="magnetic group flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-amber-500 transition-all hover:text-amber-400"
        >
          <span>Back to top</span>
          <ArrowUp size={14} className="transition-transform group-hover:-translate-y-1" />
        </motion.a>
      </div>
    </footer>
  );
}
