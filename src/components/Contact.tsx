"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative px-6 py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="Contact"
          title="Let's work together"
          description="Have a project in mind? I'd love to hear about it."
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2"
        >
          <motion.div variants={fadeUp} className="space-y-8">
            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: personal.email },
                { icon: Phone, label: "Phone", value: personal.phone },
                { icon: MapPin, label: "Location", value: personal.location },
              ].map(({ icon: Icon, label, value }) => (
                <motion.div
                  key={label}
                  whileHover={{ x: 6 }}
                  className="glow-card flex items-center gap-4 rounded-xl p-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-muted">{label}</div>
                    <div className="font-medium">{value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <p className="mb-4 text-sm text-muted">Find me on</p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-surface text-muted transition-colors hover:border-accent/50 hover:text-accent"
                  >
                    <Icon size={18} />
                    {/* Tooltip */}
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-md bg-accent px-2 py-0.5 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                      {label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            variants={fadeUp}
            onSubmit={handleSubmit}
            className="glow-card rounded-2xl p-8"
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm text-muted">
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
                  className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 text-foreground outline-none transition-all focus:border-accent focus:shadow-[0_0_0_3px_rgba(6,182,212,0.1)]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm text-muted">
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
                  className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 text-foreground outline-none transition-all focus:border-accent focus:shadow-[0_0_0_3px_rgba(6,182,212,0.1)]"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm text-muted"
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
                  className="w-full resize-none rounded-xl border border-white/10 bg-background px-4 py-3 text-foreground outline-none transition-all focus:border-accent focus:shadow-[0_0_0_3px_rgba(6,182,212,0.1)]"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-secondary py-3.5 font-semibold text-white transition-shadow hover:shadow-lg hover:shadow-accent/25"
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
                      Message sent!
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
                      Send message
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
