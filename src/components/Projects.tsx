"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight, Eye } from "lucide-react";
import { GithubIcon } from "./icons/SocialIcons";
import { BrandIcon } from "./icons/TechIcons";
import { projects, Project } from "@/data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { ProjectModal } from "./ui/ProjectModal";
import { cn, sanitizeUrl } from "@/lib/utils";

const filters = ["All", "Featured", ...Array.from(new Set(projects.map((p) => p.category)))];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const filtered =
    activeFilter === "All"
      ? projects
      : activeFilter === "Featured"
        ? projects.filter((p) => p.featured)
        : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="SELECTED WORK"
          title="Things I've Shipped"
          description="A showcase of full-stack platforms, AI chatbots, and interactive web applications."
        />

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap gap-2"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "rounded-full px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer magnetic",
                activeFilter === filter
                  ? "bg-amber-500 text-[#050508] shadow-lg shadow-amber-500/25"
                  : "border border-white/10 bg-white/5 text-gray-400 hover:border-amber-500/50 hover:text-white"
              )}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="mt-12 grid gap-8 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={isMobile ? undefined : { y: -8 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedProject(project)}
                className="project-card group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0D0D14] transition-all duration-500 hover:border-amber-500/50 hover:shadow-[0_20px_80px_rgba(245,158,11,0.1)] cursor-pointer"
              >
                {/* Mock preview area */}
                <div
                  className="relative h-56 overflow-hidden"
                  style={{ backgroundColor: project.color }}
                >
                  {project.imageUrl ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center font-mono text-4xl font-bold text-white/20">
                      {project.title}
                    </div>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D14] via-[#0D0D14]/40 to-transparent" />

                  {/* Hover Quick Action Buttons */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-[#050508]/60 ${isMobile ? 'opacity-0' : 'opacity-0 backdrop-blur-xs group-hover:opacity-100'}`}>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-500 text-[#050508] transition-transform hover:scale-110 shadow-lg shadow-amber-500/30"
                        title="View details"
                      >
                        <Eye size={18} />
                      </button>
                      {project.liveUrl && (
                        <a
                          href={sanitizeUrl(project.liveUrl)}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-transform hover:scale-110 border border-white/20 hover:border-amber-500"
                          aria-label="Live demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={sanitizeUrl(project.githubUrl)}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-transform hover:scale-110 border border-white/20 hover:border-amber-500"
                          aria-label="GitHub repo"
                        >
                          <GithubIcon size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 rounded-full border border-white/10 bg-black/50 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-gray-300 backdrop-blur-md">
                    {project.category}
                  </span>

                  {/* Featured Badge with Pulsing Keyframe Animation */}
                  {project.featured && (
                    <span
                      className="absolute top-4 right-4 rounded-full bg-amber-500 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-[#050508]"
                      style={{ animation: "pulse-glow-featured 2s infinite" }}
                    >
                      FEATURED
                    </span>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-1 font-mono text-xs text-amber-500/80">{project.tagline}</p>
                    </div>
                    <ArrowUpRight
                      size={22}
                      className="text-gray-500 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-amber-400"
                    />
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-gray-400 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack chips with SVG Brand Icons */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 font-mono text-[11px] font-medium text-amber-400"
                      >
                        <BrandIcon name={t} size={14} />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
