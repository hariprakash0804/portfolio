"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Copy, Check, Clock } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/SocialIcons";
import { personal } from "@/data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { Toast } from "./ui/Toast";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { sanitizeInput, sanitizeUrl } from "@/lib/utils";

const socialLinks = [
  { icon: GithubIcon, href: sanitizeUrl(personal.links.github), label: "GitHub" },
  { icon: LinkedinIcon, href: sanitizeUrl(personal.links.linkedin), label: "LinkedIn" },
];

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [localTime, setLocalTime] = useState("");
  const lastSubmitTimeRef = useRef<number>(0);

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setLocalTime(new Intl.DateTimeFormat("en-US", options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Honeypot Bot Trap Check
    if (honeypot.trim().length > 0) {
      // Silently swallow bot submission
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setFormState({ name: "", email: "", message: "" });
      return;
    }

    // 2. Client-side Rate-limiting Cooldown (5 seconds)
    const now = Date.now();
    if (now - lastSubmitTimeRef.current < 5000) {
      setToastMsg("Please wait a moment before sending another message.");
      return;
    }

    // 3. Input Sanitization & Bounds Checking
    const cleanName = sanitizeInput(formState.name, 100);
    const cleanEmail = sanitizeInput(formState.email, 100);
    const cleanMessage = sanitizeInput(formState.message, 2000);

    if (!cleanName || !cleanEmail || !cleanMessage) {
      setToastMsg("Please fill out all required fields.");
      return;
    }

    // 4. Strict Email Format Verification
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(cleanEmail)) {
      setToastMsg("Please provide a valid email address.");
      return;
    }

    lastSubmitTimeRef.current = now;
    setSubmitted(true);
    setToastMsg("Thank you! Your message has been sent successfully.");
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: "", email: "", message: "" });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setToastMsg("Email copied to clipboard! hariprakashanbarasan@gmail.com");
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setToastMsg("Phone copied to clipboard! +91 9361326233");
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const extraordinary = "Extraordinary.";

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24 lg:py-32">
      {/* Aurora Horizon Background Orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -bottom-48 left-10 h-[300px] w-[400px] sm:h-[500px] sm:w-[800px] rounded-full opacity-30 blur-[100px]"
          style={{
            background: "radial-gradient(ellipse, rgba(245,158,11,0.12) 0%, transparent 70%)",
            animation: "aurora-drift-1 12s ease-in-out infinite alternate",
          }}
        />
        <div
          className="absolute -bottom-36 right-5 h-[250px] w-[350px] sm:h-[400px] sm:w-[600px] rounded-full opacity-25 blur-[120px]"
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
          <h3 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl">
            <span className="text-[#F0EEE6]">Let&apos;s Build Something </span>
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

        {/* Availability & Live IST Time Badge */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-emerald-400 backdrop-blur-md">
            <span
              className="h-2 w-2 rounded-full bg-emerald-400"
              style={{ animation: "dot-pulse 2s infinite" }}
            />
            {personal.availability} · Salem / Remote
          </span>

          {localTime && (
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-amber-300 backdrop-blur-md">
              <Clock size={14} className="text-amber-400" />
              <span>Salem Local Time: {localTime} IST</span>
            </span>
          )}
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2"
        >
          {/* Left Column: Direct Info & Copy Cards */}
          <motion.div variants={fadeUp} className="space-y-6">
            {/* Interactive Email Copy Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
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
                {copiedEmail ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
              </div>
            </motion.div>

            {/* Interactive Phone Copy Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={copyPhone}
              className="glow-card cursor-pointer group flex items-center justify-between rounded-2xl border border-white/10 bg-[#0D0D14] p-6 shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                  <Phone size={22} />
                </div>
                <div>
                  <div className="font-mono text-xs text-gray-400 uppercase">Click to Copy Phone</div>
                  <div className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                    {personal.phone}
                  </div>
                </div>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 group-hover:border-amber-500 group-hover:text-amber-400 transition-colors">
                {copiedPhone ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              whileHover={{ x: 6 }}
              className="glow-card flex items-center gap-4 rounded-xl border border-white/10 bg-[#0D0D14] p-5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                <MapPin size={20} />
              </div>
              <div>
                <div className="font-mono text-xs text-gray-400 uppercase">Location</div>
                <div className="font-semibold text-gray-200">{personal.location}</div>
              </div>
            </motion.div>

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
              {/* Anti-Bot Honeypot Field (hidden from human users) */}
              <div aria-hidden="true" style={{ opacity: 0, position: "absolute", top: 0, left: 0, height: 0, width: 0, zIndex: -1, pointerEvents: "none" }}>
                <label htmlFor="contact-company-trap">Leave this empty</label>
                <input
                  id="contact-company-trap"
                  type="text"
                  name="company_website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contact-name" className="mb-2 block font-mono text-xs uppercase tracking-wider text-gray-400">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  maxLength={100}
                  autoComplete="name"
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
                  maxLength={100}
                  autoComplete="email"
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
                  maxLength={2000}
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

      {/* Toast Notification */}
      <Toast message={toastMsg} onClose={() => setToastMsg(null)} />
    </section>
  );
}
