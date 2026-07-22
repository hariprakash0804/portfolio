"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, personal } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 right-0 left-0 z-50 h-[72px] transition-all duration-500",
          scrolled
            ? "border-b border-white/5 bg-[#050508]/75 backdrop-blur-xl shadow-2xl shadow-black/40"
            : "bg-transparent",
        )}
      >
        {/* Animated bottom glow line */}
        {scrolled && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"
          />
        )}

        <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo with splitting letters on hover */}
          <a
            href="#"
            className="group flex items-center gap-1 font-mono text-xl font-bold tracking-tight text-amber-500 magnetic"
          >
            <motion.span
              whileHover={{ x: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="inline-block"
            >
              H
            </motion.span>
            <motion.span
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="inline-block text-amber-400"
            >
              P
            </motion.span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      "group relative font-mono text-[12px] font-medium uppercase tracking-[0.15em] transition-colors duration-300 magnetic py-1",
                      isActive ? "text-amber-400" : "text-gray-400 hover:text-white"
                    )}
                  >
                    {link.label}
                    {/* Hover text glow & underline */}
                    <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:[text-shadow:0_0_20px_rgba(245,158,11,0.5)]">
                      {link.label}
                    </span>
                    <motion.span
                      className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-amber-500"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isActive ? 1 : 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA Button with Liquid Fill */}
          <a
            href="#contact"
            className="group magnetic relative hidden overflow-hidden rounded-full border border-amber-500 px-6 py-2 font-mono text-xs font-semibold uppercase tracking-widest text-amber-400 transition-colors duration-500 hover:text-[#050508] md:inline-block"
          >
            <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-amber-500 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-x-100" />
            <span className="relative z-10">Let's Build</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} className="text-amber-400" /> : <Menu size={24} className="text-gray-300" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#050508]/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-6 pt-20">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "font-mono text-2xl font-bold uppercase tracking-widest transition-colors",
                    activeSection === link.href.slice(1) ? "text-amber-400" : "text-gray-300 hover:text-amber-400"
                  )}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                onClick={() => setMobileOpen(false)}
                className="mt-6 rounded-full border border-amber-500 bg-amber-500/10 px-8 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-amber-400"
              >
                Let's Build
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
