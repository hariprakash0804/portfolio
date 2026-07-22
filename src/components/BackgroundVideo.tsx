"use client";

import { useEffect, useRef, useState } from "react";

const sectionVideoMap: Record<string, string> = {
  hero: "/hero.mp4",
  about: "/About.mp4",
  skills: "/skills.mp4",
  techstack: "/skills.mp4",
  projects: "/project.mp4",
  experience: "/project.mp4",
  timeline: "/project.mp4",
  education: "/project.mp4",
  certifications: "/project.mp4",
  achievements: "/project.mp4",
  "coding-profiles": "/contact.mp4",
  contact: "/contact.mp4",
};

const sectionIds = Object.keys(sectionVideoMap);

export function BackgroundVideo() {
  const [currentVideo, setCurrentVideo] = useState("/hero.mp4");
  const [nextVideo, setNextVideo] = useState<string | null>(null);
  const [transitioning, setTransitioning] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const nextVideoRef = useRef<HTMLVideoElement>(null);
  const currentVideoRef = useRef(currentVideo);
  currentVideoRef.current = currentVideo;

  // Force play on mount and video source updates
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback, muted videos typically play fine
      });
    }
  }, [currentVideo]);

  useEffect(() => {
    if (nextVideoRef.current && nextVideo) {
      nextVideoRef.current.play().catch(() => {});
    }
  }, [nextVideo]);

  // Section observer for dynamic video changing
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let topSection = "";
        let topRatio = 0;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > topRatio) {
            topRatio = entry.intersectionRatio;
            topSection = entry.target.id;
          }
        });

        if (topSection && sectionVideoMap[topSection]) {
          const newVideo = sectionVideoMap[topSection];
          if (newVideo !== currentVideoRef.current) {
            setNextVideo(newVideo);
            setTransitioning(true);
            setTimeout(() => {
              setCurrentVideo(newVideo);
              setTransitioning(false);
              setNextVideo(null);
            }, 700);
          }
        }
      },
      { threshold: [0.2, 0.4, 0.6] }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#050508]">
      {/* Primary video */}
      <video
        ref={videoRef}
        src={currentVideo}
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover transition-opacity duration-700"
        style={{ opacity: transitioning ? 0 : 0.45 }}
      />

      {/* Crossfade video */}
      {nextVideo && (
        <video
          ref={nextVideoRef}
          src={nextVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
          style={{ opacity: transitioning ? 0.45 : 0 }}
        />
      )}

      {/* Translucent overlay for text readability without washing out video */}
      <div className="absolute inset-0 bg-[#050508]/40 backdrop-brightness-90" />

      {/* Vignette */}
      <div className="vignette-overlay absolute inset-0" />
    </div>
  );
}

