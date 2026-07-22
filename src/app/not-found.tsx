"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export default function NotFound() {
  return (
    <>
      <AnimatedBackground />
      
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-2xl border border-white/5 bg-surface/80 p-8 md:p-12 shadow-2xl backdrop-blur-xl max-w-md w-full"
        >
          {/* Animated top glow strip */}
          <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-accent to-accent-secondary" />

          <h1 className="text-6xl sm:text-8xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">
            404
          </h1>
          
          <h2 className="mt-4 text-xl font-semibold text-foreground">
            Page Not Found
          </h2>
          
          <p className="mt-3 text-sm text-muted leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-secondary px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all hover:shadow-xl hover:shadow-accent/30"
            >
              <Home size={16} />
              Back to Home
            </Link>
            
            <button
              onClick={() => window.history.back()}
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
            >
              <ArrowLeft size={16} />
              Go Back
            </button>
          </div>
        </motion.div>
      </main>
    </>
  );
}
