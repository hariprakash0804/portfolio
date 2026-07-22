"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Sparkles, Code2, Layers, CheckCircle } from "lucide-react";
import { GithubIcon } from "../icons/SocialIcons";
import { BrandIcon } from "../icons/TechIcons";
import { Project } from "@/data/portfolio";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

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
          className="relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-amber-500/30 bg-[#0D0D14] p-6 shadow-[0_0_80px_rgba(245,158,11,0.15)] sm:p-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-colors hover:border-amber-500/50 hover:text-white"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Banner / Image Header */}
          <div
            className="relative h-64 sm:h-80 w-full overflow-hidden rounded-2xl border border-white/10"
            style={{ backgroundColor: project.color }}
          >
            {project.imageUrl ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={project.imageUrl}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center font-mono text-5xl font-bold text-white/20">
                {project.title}
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D14] via-[#0D0D14]/30 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="inline-block rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-amber-400 mb-2">
                  {project.category}
                </span>
                <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                  {project.title}
                </h2>
              </div>

              <div className="flex gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-amber-500 px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-[#050508] transition-transform hover:scale-105 shadow-lg shadow-amber-500/30"
                  >
                    <span>Live App</span>
                    <ExternalLink size={16} />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition-transform hover:scale-105 hover:border-amber-500"
                  >
                    <GithubIcon size={16} />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="mt-8 space-y-8">
            {/* Tagline & Overview */}
            <div>
              <h3 className="font-editorial text-xl italic text-amber-400/90 mb-3">
                &quot;{project.tagline}&quot;
              </h3>
              <p className="text-base leading-relaxed text-gray-300 font-body">
                {project.description}
              </p>
            </div>

            {/* Architecture Highlights & Problem-Solution */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glow-card rounded-2xl border border-white/10 bg-white/5 p-5">
                <h4 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-amber-400 mb-3">
                  <Sparkles size={16} /> Key Highlights
                </h4>
                <ul className="space-y-2 text-xs text-gray-300 leading-relaxed font-body">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-amber-400 mt-0.5 shrink-0" />
                    <span>Full-stack architecture optimized for high speed and minimal latency.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-amber-400 mt-0.5 shrink-0" />
                    <span>Designed with responsive glassmorphism aesthetic and dark-mode defaults.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-amber-400 mt-0.5 shrink-0" />
                    <span>Production deployment with continuous integration & automated builds.</span>
                  </li>
                </ul>
              </div>

              <div className="glow-card rounded-2xl border border-white/10 bg-white/5 p-5">
                <h4 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-indigo-400 mb-3">
                  <Layers size={16} /> Technical Scope
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed font-body">
                  Engineered with end-to-end type safety, responsive layout design, custom REST/GraphQL API integration, and clean modular component design patterns.
                </p>
              </div>
            </div>

            {/* Tech Stack Chips with Brand Icons */}
            <div>
              <h4 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gray-400 mb-3">
                <Code2 size={16} /> Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 font-mono text-xs font-semibold text-amber-300"
                  >
                    <BrandIcon name={t} size={16} />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
