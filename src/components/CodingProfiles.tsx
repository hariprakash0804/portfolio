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

const platformColors: Record<string, string> = {
  GitHub: "from-gray-600 to-gray-800",
  LinkedIn: "from-blue-600 to-blue-800",
  LeetCode: "from-amber-500 to-amber-700",
  HackerRank: "from-emerald-500 to-emerald-700",
  CodeChef: "from-yellow-600 to-yellow-800",
  GeeksforGeeks: "from-green-500 to-green-700",
};

export function CodingProfiles() {
  return (
    <section id="coding-profiles" className="relative px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          label="Profiles"
          title="Find me online"
          description="My coding profiles and professional networks."
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid gap-6 sm:grid-cols-2"
        >
          {codingProfiles.map((profile) => {
            const Icon = platformIcons[profile.platform] || ExternalLink;
            const gradient = platformColors[profile.platform] || "from-accent to-accent-secondary";

            return (
              <motion.a
                key={profile.platform}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="glow-card group relative overflow-hidden rounded-2xl p-6"
              >
                {/* Gradient accent strip */}
                <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${gradient}`} />

                <div className="flex items-center gap-4">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white shadow-lg`}>
                    <Icon size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      {profile.platform}
                    </div>
                    <div className="text-sm text-muted">@{profile.username}</div>
                    {profile.stats && (
                      <div className="mt-1 text-xs text-accent">{profile.stats}</div>
                    )}
                  </div>
                  <ExternalLink
                    size={18}
                    className="text-muted transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
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
