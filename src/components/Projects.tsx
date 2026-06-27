"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons/SocialIcons";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { SpotlightCard } from "./ui/SpotlightCard";

const filters = ["All", "Featured", ...Array.from(new Set(projects.map((p) => p.category)))];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

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
          label="Projects"
          title="Selected work"
          description="A collection of projects that showcase my skills and passion."
        />

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
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                activeFilter === filter
                  ? "bg-accent text-white shadow-lg shadow-accent/25"
                  : "border border-white/10 text-muted hover:border-white/20 hover:text-foreground",
              )}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -8 }}
              >
                <SpotlightCard className="h-full">
                  {/* Header image/gradient area */}
                  <div
                    className="relative h-48 overflow-hidden"
                    style={{ backgroundColor: project.color }}
                  >
                    {/* Dynamic Project Image */}
                    {project.imageUrl && (
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                      />
                    )}

                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-accent/10 to-accent-secondary/10"
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />

                    {/* Hover overlay */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100"
                      style={{ backgroundColor: `${project.color}ee` }}
                    >
                      <div className="flex gap-3">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform hover:scale-110"
                          aria-label="Live demo"
                        >
                          <ExternalLink size={18} className="text-white" />
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform hover:scale-110"
                          aria-label="GitHub repo"
                        >
                          <GithubIcon size={18} className="text-white" />
                        </a>
                      </div>
                    </motion.div>

                    <span className="absolute top-4 left-4 rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="absolute top-4 right-4 rounded-full bg-accent/80 px-3 py-1 text-xs font-medium text-white">
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {project.title}
                        </h3>
                        <p className="mt-1 text-sm text-accent">{project.tagline}</p>
                      </div>
                      <ArrowUpRight
                        size={20}
                        className="text-muted transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
                      />
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-3">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2 font-mono">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-accent/10 px-2.5 py-1 text-xs text-accent font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
