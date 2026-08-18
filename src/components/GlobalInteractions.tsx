"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";

export function GlobalInteractions() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Anti Self-XSS Console Warning
    try {
      const warned = window.sessionStorage.getItem("self_xss_warned");
      if (!warned) {
        console.log(
          "%c⛔ STOP!",
          "color: #EF4444; font-family: monospace; font-size: 38px; font-weight: 900;"
        );
        console.log(
          "%cThis browser console is intended for developers.\nIf someone told you to copy and paste code here to 'unlock a feature' or 'hack' this platform, it is a Self-XSS scam.",
          "color: #F59E0B; font-family: monospace; font-size: 13px; font-weight: 600; line-height: 1.5;"
        );
        console.log(
          "%cDo not run untrusted code here. See https://en.wikipedia.org/wiki/Self-XSS",
          "color: #9CA3AF; font-family: monospace; font-size: 11px;"
        );
        window.sessionStorage.setItem("self_xss_warned", "true");
      }
    } catch {
      // Ignore storage restrictions
    }

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let lenis: Lenis | null = null;

    if (!prefersReducedMotion) {
      // Lenis Smooth Scroll
      lenis = new Lenis({
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.8,
      });

      const updateLenis = (time: number) => {
        lenis?.raf(time * 1000);
      };

      gsap.ticker.add(updateLenis);
      gsap.ticker.lagSmoothing(0);
    }

    // Magnetic elements repulsion/attraction using GSAP
    const handleMouseMove = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(".magnetic") as HTMLElement;
      if (!target || prefersReducedMotion) return;
      const rect = target.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      gsap.to(target, {
        x: dx * 0.35,
        y: dy * 0.35,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(".magnetic") as HTMLElement;
      if (!target || prefersReducedMotion) return;
      gsap.to(target, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.5)" });
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      if (lenis) {
        lenis.destroy();
      }
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  return null;
}
