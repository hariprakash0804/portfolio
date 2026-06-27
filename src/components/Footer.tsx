"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";
import { personal } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 px-6 py-12">
      {/* Animated gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-sm text-muted"
        >
          © {year} {personal.name.display}. All rights reserved.
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-1.5 text-sm text-muted"
        >
          Built with
          <Heart size={14} className="fill-accent text-accent animate-heartbeat" />
          using Next.js
        </motion.p>

        <motion.a
          href="#"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          className="group flex items-center gap-2 font-mono text-sm text-accent transition-all hover:text-foreground"
        >
          <span>Back to top</span>
          <ArrowUp size={14} className="transition-transform group-hover:-translate-y-1" />
        </motion.a>
      </div>
    </footer>
  );
}
