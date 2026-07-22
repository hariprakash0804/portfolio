"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Globe, Heart, BookOpen, Cpu, Code, Server, Brain, Shield, ArrowRight, Copy, Check } from "lucide-react";
import { personal, strengths, softSkills, additionalInfo } from "@/data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { fadeUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/motion";

export function About() {
  const [copiedCode, setCopiedCode] = useState(false);
  const codeSnippet = `const hari = {
  role: "Full-Stack Engineer",
  location: "Salem, Tamil Nadu 🇮🇳",
  stack: ["Next.js", "TypeScript", "Prisma",
          "React Native", "GSAP", "Three.js"],
  currentlyBuilding: "Topic Intelligence Platform",
  favoriteStack: "tRPC + Prisma + Redis",
  openTo: "Exciting opportunities",
};`;

  return (
    <section id="about" className="relative px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="ABOUT ME"
          title="The Person Behind the Code"
          description="A glimpse into who I am, what drives my work, and my core engineering mindset."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start"
        >
          {/* Left Column: Bio & Stat Blocks */}
          <motion.div variants={slideInLeft} className="col-span-1 lg:col-span-7 space-y-6">
            {/* Objective Callout */}
            {personal.objective && (
              <motion.div
                variants={fadeUp}
                className="relative overflow-hidden rounded-xl border border-amber-500/30 bg-amber-500/5 p-5 backdrop-blur-sm"
              >
                <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-amber-500 to-indigo-500" />
                <span className="font-mono text-xs uppercase tracking-widest text-amber-400 font-semibold block mb-1">
                  Career Objective
                </span>
                <p className="text-sm italic leading-relaxed text-gray-300">
                  &quot;{personal.objective}&quot;
                </p>
              </motion.div>
            )}

            <p className="text-base sm:text-lg leading-relaxed text-gray-300 font-body">
              I&apos;m Hari Prakash — a full-stack and mobile developer who graduated in Information Technology from KSRIET. I build products that live at the intersection of performance, design, and AI. Whether it&apos;s a legal chatbot serving Tamil-speaking users or an LMS handling thousands of learners, I architect systems that scale and interfaces that feel alive.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-400 font-body">
              My stack runs deep: from React and Next.js on the frontend to tRPC, Prisma, and Redis on the back. I&apos;m fluent in TypeScript, comfortable with embedded systems, and perpetually exploring what AI can unlock in the tools I build.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-400 font-body">
              When I&apos;m not coding, I&apos;m probably debugging something in n8n, watching Tamil cinema, or thinking about how to make the next project not just functional but genuinely beautiful.
            </p>

            {/* Stat Blocks */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="glow-card rounded-xl border border-white/10 bg-[#0D0D14] p-5 text-left">
                <div className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-amber-400">3+</div>
                <div className="font-body text-xs font-medium text-gray-400 mt-1 uppercase tracking-wider">Years Building</div>
              </div>
              <div className="glow-card rounded-xl border border-white/10 bg-[#0D0D14] p-5 text-left">
                <div className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-amber-400">10+</div>
                <div className="font-body text-xs font-medium text-gray-400 mt-1 uppercase tracking-wider">Projects Shipped</div>
              </div>
            </div>

            {/* GitHub Link with Animated Arrow */}
            <div className="pt-2">
              <a
                href={personal.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic group inline-flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-widest text-amber-400 hover:text-amber-300 transition-colors"
              >
                <span>My GitHub</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
              </a>
            </div>

            {/* Strengths & Soft Skills */}
            <div className="glow-card rounded-xl p-5">
              <h3 className="mb-3 text-sm font-mono font-semibold text-amber-400 flex items-center gap-2 uppercase tracking-wider">
                <Cpu size={16} /> Strengths & Attributes
              </h3>
              <div className="flex flex-wrap gap-2">
                {strengths.map((s) => (
                  <span key={s} className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 font-mono text-xs font-medium text-amber-400">
                    {s}
                  </span>
                ))}
                {softSkills.map((s) => (
                  <span key={s} className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 font-mono text-xs font-medium text-indigo-400">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Additional Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="glow-card rounded-xl p-4">
                <Globe size={18} className="text-amber-400 mb-2" />
                <div className="text-xs font-mono font-semibold text-gray-400 uppercase mb-1">Languages</div>
                <div className="text-xs text-gray-200">{additionalInfo.languages.join(", ")}</div>
              </div>
              <div className="glow-card rounded-xl p-4">
                <Heart size={18} className="text-amber-400 mb-2" />
                <div className="text-xs font-mono font-semibold text-gray-400 uppercase mb-1">Hobbies</div>
                <div className="text-xs text-gray-200">{additionalInfo.hobbies.join(", ")}</div>
              </div>
              <div className="glow-card rounded-xl p-4">
                <BookOpen size={18} className="text-amber-400 mb-2" />
                <div className="text-xs font-mono font-semibold text-gray-400 uppercase mb-1">Interests</div>
                <div className="text-xs text-gray-200">{additionalInfo.interestedDomains.join(", ")}</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Code/Identity Glassmorphism Panel */}
          <motion.div variants={slideInRight} className="col-span-1 lg:col-span-5 space-y-6">
            {/* Live Code Snippet Panel */}
            <div className="glow-card relative overflow-hidden rounded-2xl border border-white/10 bg-[#0D0D14]/80 p-6 backdrop-blur-xl shadow-2xl shadow-black/50">
              {/* Window Controls */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-gray-500">developer.ts</span>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(codeSnippet);
                      setCopiedCode(true);
                      setTimeout(() => setCopiedCode(false), 2000);
                    }}
                    className="flex h-6 w-6 items-center justify-center rounded text-gray-400 hover:text-amber-400 transition-colors cursor-pointer"
                    title="Copy code snippet"
                  >
                    {copiedCode ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>

              {/* Code */}
              <pre className="font-mono text-[10px] sm:text-xs leading-relaxed text-gray-300 overflow-x-auto">
                <code className="text-amber-400">
                  {codeSnippet}
                </code>
              </pre>

              <div className="mt-4 flex items-center gap-2 border-t border-white/5 pt-4 text-xs font-mono text-gray-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Status: Active & ready to build</span>
              </div>
            </div>

            {/* Profile Avatar & Location */}
            {personal.avatar && (
              <div className="glow-card flex items-center gap-4 rounded-xl p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={personal.avatar}
                  alt={personal.name.display}
                  className="h-16 w-16 rounded-xl object-cover border border-amber-500/30"
                />
                <div>
                  <h4 className="font-bold text-gray-200">{personal.name.display}</h4>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-1">
                    <MapPin size={14} className="text-amber-400" />
                    <span>{personal.location}</span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>

        {/* Specialization Grid */}
        <motion.div
          variants={fadeUp}
          className="col-span-1 lg:col-span-12 mt-16 space-y-6"
        >
          <h3 className="text-xl font-bold tracking-tight text-center font-display">
            <span className="gradient-text-animated">What I specialize in</span>
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Code, label: "Frontend", desc: "React, Next.js, HTML/CSS, Tailwind, TypeScript" },
              { icon: Server, label: "Backend", desc: "Node.js, Express, Python, API Architecture" },
              { icon: Brain, label: "AI/ML Development", desc: "Conversational RAG, Multilingual Chat, Vector Stores" },
              { icon: Shield, label: "Infrastructure & DevOps", desc: "Docker Containers, AWS Cloud Services, SQL/NoSQL" },
            ].map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ y: -6 }}
                className="glow-card flex flex-col justify-between rounded-xl p-5 text-center"
              >
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 mb-4">
                    <item.icon size={22} />
                  </div>
                  <div className="text-sm font-semibold text-gray-200 font-display">{item.label}</div>
                  <p className="mt-2 text-xs text-gray-400 leading-relaxed font-body">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
