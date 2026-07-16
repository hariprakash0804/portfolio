# 🌌 HARIPRAKASH A — Personal Portfolio Website

A premium, interactive, and modern portfolio application designed and built with **React 19 + Next.js 16 (App Router)**, styled with **TailwindCSS v4**, and animated with **Framer Motion**. It features a stunning custom layout, ambient mesh background, interactive particle animations, responsive navigation, custom cursor support, and a complete showcase of projects, skills, education, experience, and certificates.

---

## ✨ Features

- **🖱️ Interactive Experience** — Custom responsive spotlight mouse cursor with physics-based hover scaling.
- **🎨 Luxury Dark Aesthetics** — A curated theme using dark base tones (`#050508`), cyan/violet accents (`#06b6d4`, `#8b5cf6`), and glassmorphism.
- **✨ Ambient Mesh Backgrounds** — Dynamic canvas-based floating gradient mesh shapes that morph smoothly behind the content.
- **📈 Real-Time Statistics** — Visual numerical stats section displaying counts of projects, certifications, internships, and awards.
- **🛠️ Dynamic Skill Charts** — Categorized skill level ratings with animated percentage filling indicators.
- **💼 Project Showcase** — Interactive card grid showcasing featured creations with hover shine effects, live preview links, and GitHub repositories.
- **📜 Vertical History Timeline** — A scroll-animated vertical timeline displaying education, work experience, certifications, and research publications.
- **📜 Document Integration** — Easy resume download link directly connected to the bio interface.
- **📱 Fully Responsive** — Adaptive interface fitting mobile screens, tablets, and wide monitors.

---

## 🛠️ Tech Stack & Libraries

- **Framework** — React 19.2.4 & Next.js 16.2.9 (App Router)
- **Styling** — TailwindCSS v4.0.0 & PostCSS
- **Animations** — Framer Motion 12.42.0 (for layout transitions & scroll actions)
- **Icons** — Lucide React 1.21.0
- **Language** — TypeScript 5 & Node.js

---

## 📁 Directory Structure

```
portfolio/
├── public/                     # Static media files & project previews
│   ├── canteen_preview.png     # Digital Canteen project screenshot
│   ├── heaven_match_preview.png # Heaven Match project screenshot
│   ├── legalbuddy_preview.png  # LegalBuddy AI project screenshot
│   ├── tictactoe_preview.png   # Tic-Tac-Toe project screenshot
│   ├── profile.png             # Avatar photograph
│   └── favicon.ico
├── src/
│   ├── app/                    # Next.js App Router core routing
│   │   ├── favicon.ico
│   │   ├── globals.css         # Shimmer animations, float keyframes & scrolls
│   │   ├── layout.tsx          # Root layout setup
│   │   ├── not-found.tsx       # 404 page redirect route
│   │   └── page.tsx            # Main assembly point
│   ├── components/             # Modular interactive components
│   │   ├── About.tsx           # Bio details and personal objective
│   │   ├── Achievements.tsx    # World records & contest trophies
│   │   ├── AnimatedBackground.tsx # Mesh background canvas animator
│   │   ├── Certifications.tsx # Google, Coursera, Infosys badges
│   │   ├── CodingProfiles.tsx  # GitHub and professional networks links
│   │   ├── Contact.tsx         # Address details & mail forms
│   │   ├── CustomCursor.tsx    # Custom ring spotlight cursor tracker
│   │   ├── Education.tsx       # B.Tech IT minor sensor details
│   │   ├── Experience.tsx      # Internships and contributions
│   │   ├── Footer.tsx          # Social linkages and copyright signoff
│   │   ├── GradientMesh.tsx    # Moving mesh shape canvas
│   │   ├── Hero.tsx            # Typewriter greeting and intro CTA
│   │   ├── Navbar.tsx          # Smooth-scroll page links navbar
│   │   ├── Projects.tsx        # Project card grid
│   │   ├── ScrollProgress.tsx  # Top scroll horizontal progress indicator
│   │   ├── Skills.tsx          # Graphic bars detailing skill categories
│   │   ├── Statistics.tsx      # Achievement counters section
│   │   ├── TechStack.tsx       # Grid display of tools & frameworks
│   │   └── Timeline.tsx        # Scroll-animated vertical history roadmap
│   ├── data/
│   │   └── portfolio.ts        # Central configuration dataset (Edit this file!)
│   └── lib/
│       ├── motion.ts           # Framer motion variants config
│       └── utils.ts            # clsx & tailwind-merge helper
├── package.json                # Project script controller
├── tsconfig.json               # TypeScript configuration
├── eslint.config.mjs           # ESLint configuration
└── README.md
```

---

## 🚀 Quick Start Guide

### Prerequisites
- **Node.js** v18+ (v20+ recommended)
- **npm**, **yarn**, or **pnpm** package manager

### 1. Clone the Repository

```bash
git clone https://github.com/hariprakash0804/portfolio.git
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

Start the local server on `http://localhost:3000`:

```bash
npm run dev
```

### 4. Build for Production

Generate a static, production-optimized compilation:

```bash
npm run build
```

---

## 📝 Customizing the Portfolio

All content, details, text, and links are driven dynamically from a single configuration file. You do **not** need to touch the page layout components to update the site details.

Simply edit [src/data/portfolio.ts](file:///c:/Users/Hariprakash%20A/Desktop/New%20folder%20%282%29/portfolio/src/data/portfolio.ts):

```typescript
export const personal = {
  name: {
    display: "HARIPRAKASH A",
    short: "HA",
  },
  primaryRole: "Full Stack Developer",
  email: "hariprakashanbarasan@gmail.com",
  phone: "+91 9361326233",
  links: {
    resume: "your_google_drive_resume_link",
    github: "https://github.com/hariprakash0804",
    linkedin: "https://www.linkedin.com/in/hariprakash-a-55bab6261",
  },
  // Update details below as necessary
};
```

---

## 💼 Core Ported Content

The website pre-displays the following curriculum details:

### Projects

1. **LegalBuddy AI**
   - *Tagline:* An AI-driven conversational platform enhancing public legal literacy through context-aware judicial guidance.
   - *Tech:* React, Node.js, Express.js, MySQL, OpenRouter, FAISS
2. **Digital Canteen**
   - *Tagline:* Streamlining campus food ordering with a modern web platform.
   - *Tech:* React, Tailwind CSS, MongoDB
3. **Heaven Match**
   - *Tagline:* A modern matchmaking platform focused on meaningful connections.
   - *Tech:* React, Tailwind CSS, Node.js, Express.js, MySQL
4. **Tic-Tac-Toe Game**
   - *Tagline:* A classic strategy game built with modern web technologies.
   - *Tech:* HTML, CSS, JavaScript

### Internships

- **Strackit** — *Full Stack Developer Intern* (Mar 2024 – May 2024)
- **YBI Foundation** — *Cloud Computing & Big Data Intern* (Jun 2024 – Jul 2024)

### Research Publications & Presentations

- *Enhancing Legal Literacy Through LegalBuddy AI Problem Driven Design With Superior Outcome Metric* — Kalasalingam Academy (2026)
- *Machine Learning on Excessive Mining Detection* — Knowledge Institute of Technology (2024)
- *Human Computer Interface Design* — KSR College of Engineering (2024)

### Achievements

- **World Record Holder** — Asian Book of World Records (TanMillets Awareness campaign)
- **Runner-up** — Cancer Awareness Slogan Writing Competition
- **Runner-up** — Chicago Lectures 125th Anniversary Oratorical Contest

---

## 📄 License

MIT
