"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export function Toast({ message, onClose }: ToastProps) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          onClick={onClose}
          className="fixed bottom-8 left-1/2 z-[9999] flex -translate-x-1/2 items-center gap-3 rounded-full border border-amber-500/40 bg-[#0D0D14]/90 px-6 py-3 font-mono text-xs font-semibold text-amber-300 backdrop-blur-xl shadow-[0_10px_30px_rgba(245,158,11,0.25)] cursor-pointer"
        >
          <CheckCircle2 size={18} className="text-amber-400" />
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
