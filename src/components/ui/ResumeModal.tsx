"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ExternalLink } from "lucide-react";
import { personal } from "@/data/portfolio";
import { sanitizeUrl } from "@/lib/utils";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const rawResumeUrl = personal.links.resume;
  const safeResumeUrl = sanitizeUrl(rawResumeUrl);
  const safePreviewUrl = safeResumeUrl.includes("drive.google.com")
    ? safeResumeUrl.replace("/view?usp=sharing", "/preview")
    : safeResumeUrl;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9990] flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#050508]/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative z-10 flex h-[90vh] sm:h-[85vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-amber-500/30 bg-[#0D0D14] p-4 sm:p-6 shadow-[0_0_80px_rgba(245,158,11,0.15)]"
        >
          {/* Modal Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 mb-4">
            <div>
              <h3 className="font-display text-xl font-bold text-white">Hariprakash A — Resume</h3>
              <p className="font-mono text-xs text-amber-400">Full Stack & Mobile Developer CV</p>
            </div>
            
            <div className="flex items-center gap-3">
              {safeResumeUrl && (
                <a
                  href={safeResumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-[#050508] transition-transform hover:scale-105"
                >
                  <Download size={15} />
                  <span className="hidden sm:inline">Open Drive</span>
                  <ExternalLink size={14} />
                </a>
              )}

              <button
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-colors hover:border-amber-500/50 hover:text-white"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* PDF Viewer Frame */}
          <div className="relative flex-1 w-full rounded-2xl overflow-hidden bg-white/5 border border-white/10">
            {safePreviewUrl ? (
              <iframe
                src={safePreviewUrl}
                className="h-full w-full border-none"
                title="Hariprakash A Resume"
              />
            ) : (
              <div className="flex h-full items-center justify-center font-mono text-sm text-gray-400">
                Preview not available
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
