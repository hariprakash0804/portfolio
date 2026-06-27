"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Globe, BookOpen, Heart, Cpu, Code, Server, Brain, Shield } from "lucide-react";
import { personal, strengths, softSkills, additionalInfo } from "@/data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { fadeUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/motion";

export function About() {
  return (
    <section id="about" className="relative px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="About Me"
          title="Crafting digital experiences"
          description="A glimpse into who I am and what drives my work."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16"
        >
          {/* Left Column: Portrait & Contact */}
          <motion.div variants={slideInLeft} className="lg:col-span-5 space-y-6">
            {personal.avatar && (
              <div className="relative group mx-auto max-w-sm lg:max-w-none">
                {/* Rotating decorative border */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-2.5 rounded-2xl border border-dashed border-accent/30 pointer-events-none"
                />
                
                {/* Main Portrait Frame */}
                <div className="glow-card relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                  <img
                    src={personal.avatar}
                    alt={personal.name.display}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
              </div>
            )}

            {/* Location Card */}
            <div className="glow-card flex flex-col gap-1.5 rounded-xl p-4 text-sm text-muted">
              <div className="flex items-center gap-2 font-medium text-foreground">
                <MapPin size={16} className="text-accent" />
                <span>Location & Address</span>
              </div>
              <div className="pl-6 text-xs leading-relaxed">
                {personal.location} <br />
                <span className="text-muted/70">{personal.address}</span>
              </div>
            </div>

            {/* Contact buttons */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Mail, text: personal.email, href: `mailto:${personal.email}` },
                { icon: Phone, text: personal.phone, href: `tel:${personal.phone}` },
              ].map(({ icon: Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  className="glow-card flex flex-grow items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-xs text-muted hover:text-accent transition-colors"
                >
                  <Icon size={14} className="text-accent" />
                  {text}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Bio & Core Skills */}
          <motion.div variants={slideInRight} className="lg:col-span-7 space-y-6">
            {/* Career Objective Callout */}
            {personal.objective && (
              <motion.div
                variants={fadeUp}
                className="relative overflow-hidden rounded-xl border border-accent/20 bg-accent/5 p-5 backdrop-blur-sm"
              >
                <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-accent to-accent-secondary" />
                <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold block mb-1">
                  Career Objective
                </span>
                <p className="text-sm italic leading-relaxed text-muted">
                  "{personal.objective}"
                </p>
              </motion.div>
            )}

            <p className="text-lg leading-relaxed text-muted">
              {personal.bio.long}
            </p>
            <p className="text-lg leading-relaxed text-muted">
              {personal.bio.short}
            </p>

            {/* Strengths & Soft Skills */}
            <div className="glow-card rounded-xl p-5">
              <h3 className="mb-3 text-sm font-semibold text-accent flex items-center gap-2">
                <Cpu size={14} /> Strengths & Attributes
              </h3>
              <div className="flex flex-wrap gap-2">
                {strengths.map((s) => (
                  <span key={s} className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                    {s}
                  </span>
                ))}
                {softSkills.map((s) => (
                  <span key={s} className="rounded-full bg-accent-secondary/10 px-3 py-1 text-xs font-medium text-accent-secondary">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Additional Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="glow-card rounded-xl p-4">
                <Globe size={16} className="text-accent mb-2" />
                <div className="text-xs font-semibold text-muted mb-1">Languages</div>
                <div className="text-xs text-foreground">{additionalInfo.languages.join(", ")}</div>
              </div>
              <div className="glow-card rounded-xl p-4">
                <Heart size={16} className="text-accent mb-2" />
                <div className="text-xs font-semibold text-muted mb-1">Hobbies</div>
                <div className="text-xs text-foreground">{additionalInfo.hobbies.join(", ")}</div>
              </div>
              <div className="glow-card rounded-xl p-4">
                <BookOpen size={16} className="text-accent mb-2" />
                <div className="text-xs font-semibold text-muted mb-1">Interests</div>
                <div className="text-xs text-foreground">{additionalInfo.interestedDomains.join(", ")}</div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Area: Full-width "What I Do" */}
          <motion.div
            variants={fadeUp}
            className="col-span-12 mt-8 space-y-6"
          >
            <h3 className="text-xl font-bold tracking-tight text-center">
              <span className="gradient-text-animated">What I specialize in</span>
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Code, label: "Frontend", desc: "React, Next.js, HTML/CSS, Tailwind, TypeScript" },
                { icon: Server, label: "Backend", desc: "Node.js, Express, Python, API Architecture" },
                { icon: Brain, label: "AI/ML Development", desc: "Conversational RAG, Multilingual Chat, Vector Stores" },
                { icon: Shield, label: "Infrastructure & DevOps", desc: "Docker Containers, AWS Cloud Services, SQL/NoSQL" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -6 }}
                  className="glow-card flex flex-col justify-between rounded-xl p-5 text-center"
                >
                  <div>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4">
                      <item.icon size={22} />
                    </div>
                    <div className="text-sm font-semibold text-foreground">{item.label}</div>
                    <p className="mt-2 text-xs text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Decorative background element */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -left-8 top-1/2 h-40 w-40 rounded-full border border-dashed border-accent-secondary/5 hidden lg:block"
        />
      </div>
    </section>
  );
}
