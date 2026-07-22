"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Copy, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/SocialIcons";
import { personal } from "@/data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { fadeUp, staggerContainer } from "@/lib/motion";

const socialLinks = [
  { icon: GithubIcon, href: personal.links.github, label: "GitHub" },
  { icon: LinkedinIcon, href: personal.links.linkedin, label: "LinkedIn" },
];

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: "", email: "", message: "" });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const extraordinary = "Extraordinary.";

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24 lg:py-32">
      {/* Aurora Horizon Background Orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -bottom-48 left-10 h-[500px] w-[800px] rounded-full opacity-30 blur-[100px]"
          style={{
            background: "radial-gradient(ellipse, rgba(245,158,11,0.12) 0%, transparent 70%)",
            animation: "aurora-drift-1 12s ease-in-out infinite alternate",
          }}
        />
        <div
          className="absolute -bottom-36 right-5 h-[400px] w-[600px] rounded-full opacity-25 blur-[120px]"
          style={{
            background: "radial-gradient(ellipse, rgba(129,140,248,0.1) 0%, transparent 70%)",
            animation: "aurora-drift-2 16s ease-in-out infinite alternate",
          }}
        />

        {/* Ghost background watermark text */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] select-none pointer-events-none font-bold text-center">
          <span
            className="block text-white"
            style={{
              fontSize: "clamp(120px, 25vw, 320px)",
              WebkitTextStroke: "1px rgba(255,255,255,0.2)",
            }}
          >
            CONTACT
          </span>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl z-10">
        <SectionHeading
          label="GET IN TOUCH"
          title="Let's Build Something"
          description="Have a project in mind, an opportunity to discuss, or just want to connect? I'd love to hear from you."
          align="center"
        />

        {/* Massive Text Outline Effect */}
        <div className="mt-4 text-center cursor-default group">
          <h3 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-[#F0EEE6]">Let's Build Something </span>
            <span
              className="inline-block text-transparent group-hover:text-amber-400 transition-colors duration-500"
              style={{
                WebkitTextStroke: "2px rgba(245, 158, 11, 0.9)",
              }}
            >
              {extraordinary}
            </span>
          </h3>
        </div>

        {/* Availability Badge */}
        <div className="mt-8 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-emerald-400 backdrop-blur-md">
            <span
              className="h-2 w-2 rounded-full bg-emerald-400"
              style={{ animation: "dot-pulse 2s infinite" }}
            />
            {personal.availability} · Salem / Remote
          </span>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2"
        >
          {/* Left Column: Direct Info & Copy Email */}
          <motion.div variants={fadeUp} className="space-y-8">
            {/* Interactive Email Copy Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              onClick={copyEmail}
              className="glow-card cursor-pointer group flex items-center justify-between rounded-2xl border border-amber-500/30 bg-[#0D0D14] p-6 shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                  <Mail size={22} />
                </div>
                <div>
                  <div className="font-mono text-xs text-gray-400 uppercase">Click to Copy Email</div>
                  <div className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                    {personal.email}
                  </div>
                </div>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 group-hover:border-amber-500 group-hover:text-amber-400 transition-colors">
                {copied ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
              </div>
            </motion.div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {[
                { icon: Phone, label: "Phone", value: personal.phone },
                { icon: MapPin, label: "Location", value: personal.location },
              ].map(({ icon: Icon, label, value }) => (
                <motion.div
                  key={label}
                  whileHover={{ x: 6 }}
                  className="glow-card flex items-center gap-4 rounded-xl border border-white/10 bg-[#0D0D14] p-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-gray-400 uppercase">{label}</div>
                    <div className="font-semibold text-gray-200">{value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links with Tooltips */}
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-gray-400">Find me on</p>
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="magnetic group relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#0D0D14] text-gray-400 transition-colors hover:border-amber-500 hover:text-amber-400"
                  >
                    <Icon size={20} />
                    {/* Tooltip */}
                    <span className="absolute -top-9 left-1/2 -translate-x-1/2 rounded-md border border-amber-500/30 bg-[#0D0D14] px-2.5 py-1 font-mono text-[10px] text-amber-400 opacity-0 transition-opacity group-hover:opacity-100 shadow-md">
                      {label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.form
            variants={fadeUp}
            onSubmit={handleSubmit}
            className="glow-card rounded-2xl border border-white/10 bg-[#0D0D14] p-8 shadow-2xl"
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="mb-2 block font-mono text-xs uppercase tracking-wider text-gray-400">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full rounded-xl border border-white/10 bg-[#050508] px-4 py-3 text-white outline-none transition-all focus:border-amber-500 focus:shadow-[0_0_0_3px_rgba(245,158,11,0.15)]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block font-mono text-xs uppercase tracking-wider text-gray-400">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full rounded-xl border border-white/10 bg-[#050508] px-4 py-3 text-white outline-none transition-all focus:border-amber-500 focus:shadow-[0_0_0_3px_rgba(245,158,11,0.15)]"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block font-mono text-xs uppercase tracking-wider text-gray-400"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#050508] px-4 py-3 text-white outline-none transition-all focus:border-amber-500 focus:shadow-[0_0_0_3px_rgba(245,158,11,0.15)]"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="magnetic flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 py-4 font-mono text-xs font-bold uppercase tracking-widest text-[#050508] transition-shadow hover:bg-amber-400 hover:shadow-xl hover:shadow-amber-500/25 cursor-pointer"
              >
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.span
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle size={18} />
                      Message Sent!
                    </motion.span>
                  ) : (
                    <motion.span
                      key="send"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Send size={18} />
                      Send Message
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
