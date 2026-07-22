"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/SocialIcons";
import { codingProfiles } from "@/data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { fadeUp, staggerContainer } from "@/lib/motion";

const platformIcons: Record<string, typeof GithubIcon> = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
};

export function CodingProfiles() {
  return (
    <section id="coding-profiles" className="relative px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          label="ONLINE PRESENCE"
          title="Find Me Online"
          description="Connect with me on professional networks and explore my open-source code repositories."
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {codingProfiles.map((profile) => {
            const Icon = platformIcons[profile.platform] || ExternalLink;

            return (
              <motion.a
                key={profile.platform}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="glow-card group magnetic relative overflow-hidden rounded-2xl border border-white/10 bg-[#0D0D14] p-6 shadow-xl"
              >
                {/* Amber top border strip */}
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-amber-500 to-indigo-500" />

                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-400 shadow-lg">
                    <Icon size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                      {profile.platform}
                    </div>
                    <div className="font-mono text-xs text-gray-400">@{profile.username}</div>
                    {profile.stats && (
                      <div className="mt-1 font-mono text-xs text-amber-400">{profile.stats}</div>
                    )}
                  </div>
                  <ExternalLink
                    size={20}
                    className="text-gray-500 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-amber-400"
                  />
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
