/**
 * Portfolio data — edit every section below with your own details.
 * All content on the site is driven from this single file.
 */

export const personal = {
  name: {
    display: "HARIPRAKASH A",
    short: "HA",
  },
  primaryRole: "Full Stack Developer",
  roleVariants: [
    "Backend Developer",
    "Frontend Developer",
    "AI Developer",
  ],
  tagline:
    "I build things that live at the edge of what's possible.",
  bio: {
    short:
      "Passionate developer crafting elegant digital experiences. I turn complex problems into simple, beautiful solutions.",
    long:
      "With a deep love for clean code and thoughtful design, I specialize in building full-stack applications that feel as good as they look. From pixel-perfect interfaces to scalable backend systems, I bring ideas to life with precision and creativity. Always learning, always building.",
  },
  objective:
    "To be a motivated and detail-oriented engineer with a strong foundation in all aspects of a problem and to find a better solution.",
  location: "Tamil Nadu, India",
  address: "15, Kalaignar Nagar, 6th Street, Karungalpatty, Salem, TN 636006",
  availability: "Open to work",
  email: "hariprakashanbarasan@gmail.com",
  phone: "+91 9361326233",
  links: {
    resume: "https://drive.google.com/file/d/1T09Hg_cIUDFJqzd46WeuK-X46eoSoJVL/view?usp=sharing",
    github: "https://github.com/hariprakash0804",
    linkedin: "https://www.linkedin.com/in/hariprakash-a-55bab6261",
  },
  avatar: "/profile.png",
};

/* ------------------------------------------------------------------ */
/*  Statistics                                                         */
/* ------------------------------------------------------------------ */

export type Stat = { label: string; value: string; numericValue: number; suffix: string };

export const statistics: Stat[] = [
  { label: "Projects Built", value: "4+", numericValue: 4, suffix: "+" },
  { label: "Certifications", value: "7+", numericValue: 7, suffix: "+" },
  { label: "Internships", value: "2", numericValue: 2, suffix: "" },
  { label: "Technologies", value: "15+", numericValue: 15, suffix: "+" },
  { label: "Papers Presented", value: "2", numericValue: 2, suffix: "" },
  { label: "Awards", value: "3+", numericValue: 3, suffix: "+" },
];

/* ------------------------------------------------------------------ */
/*  Skills                                                             */
/* ------------------------------------------------------------------ */

export type Skill = { name: string; level: number };

export type SkillCategory = {
  category: string;
  skills: Skill[];
};

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "JavaScript", level: 92 },
      { name: "TypeScript", level: 80 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 92 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 84 },
      { name: "MySQL", level: 82 },
      { name: "Python", level: 82 },
      { name: "Java", level: 85 },
      { name: "C", level: 84 },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "Google Cloud", level: 78 },
      { name: "REST APIs", level: 86 },
      { name: "JWT Authentication", level: 82 },
    ],
  },
  {
    category: "Mobile Development",
    skills: [
      { name: "React Native", level: 84 },
      { name: "Expo", level: 88 },
    ],
  },
  {
    category: "IoT & Embedded",
    skills: [
      { name: "ESP32", level: 82 },
      { name: "Arduino", level: 88 },
      { name: "IoT", level: 86 },
      { name: "Sensor Integration", level: 84 },
      { name: "Embedded C", level: 80 },
      { name: "KiCad", level: 75 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "VS Code", level: 96 },
      { name: "Postman", level: 85 },
      { name: "Vercel", level: 82 },
      { name: "Netlify", level: 85 },
      { name: "Antigravity", level: 85 },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Tech Stack (visual icon grid — separate from Skills bars)          */
/* ------------------------------------------------------------------ */

export type TechItem = { name: string; category: string };

export const techStack: TechItem[] = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "Three.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "Java", category: "Languages" },
  { name: "C", category: "Languages" },
  { name: "MySQL", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "FAISS", category: "AI/ML" },
  { name: "OpenRouter", category: "AI/ML" },
  { name: "VS Code", category: "Tools" },
  { name: "Antigravity", category: "Tools" },
  { name: "Postman", category: "Tools" },
];

/* ------------------------------------------------------------------ */
/*  Projects                                                           */
/* ------------------------------------------------------------------ */

export type Project = {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  color: string;
  category: string;
  featured: boolean;
  imageUrl?: string;
};

export const projects: Project[] = [
    {
      title: "Digital Canteen",
      tagline: "Streamlining campus food ordering with a modern web platform",
      description:
        "A full-stack web application designed to simplify food ordering and takeaway management within a college campus. The system provides dedicated interfaces for students, shop owners, and administrators, enabling efficient order management, secure user access, and an improved dining experience.",
      tech: ["React", "Tailwind CSS", "MongoDB"],
      liveUrl: "https://canten.netlify.app",
      githubUrl: "https://github.com/hariprakash0804/Digital-Canteen",
      color: "#0D1F3C",
      category: "Web Application",
      featured: true,
      imageUrl: "/canteen_preview.png",
    },
    {
      title: "Tic-Tac-Toe Game",
      tagline: "A classic strategy game built with modern web technologies",
      description:
        "An interactive browser-based Tic-Tac-Toe game developed using HTML, CSS, and JavaScript. The project demonstrates core JavaScript concepts including game logic, DOM manipulation, user interaction, and responsive interface design while providing an engaging user experience.",
      tech: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://tictactoeprojecthari.netlify.app",
      githubUrl: "https://github.com/hariprakash0804/tictactoe",
      color: "#1A0A2E",
      category: "Frontend",
      featured: true,
      imageUrl: "/tictactoe_preview.png",
    },
    {
      title: "Heaven Match",
      tagline: "A modern matchmaking platform focused on meaningful connections",
      description:
        "A full-stack matchmaking web application designed to help users discover compatible matches through an intuitive and responsive interface. The project emphasizes seamless user experience, secure authentication, and efficient profile management while demonstrating end-to-end web application development.",
      tech: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MySQL"
      ],
      liveUrl: "https://heaven-match.vercel.app/",
      githubUrl: "https://github.com/hariprakash0804/Heaven-Match",
      color: "#6B2148",
      category: "Full Stack",
      featured: true,
      imageUrl: "/heaven_match_preview.png",
    },
    {
      title: "LegalBuddy AI",
      tagline: "An AI-driven conversational platform enhancing public legal literacy through context-aware judicial guidance.",
      description:
        "Developed an end-to-end conversational AI platform to address the legal access gap by providing context-aware, multilingual guidance grounded in official Indian statutes. Built a robust Retrieval-Augmented Generation (RAG) pipeline utilizing dense vector search to accurately retrieve and process legislative text from government portals. Served as the lead developer managing full-stack implementation, database caching, secure authorization, and responsive dashboard design.",
      tech: ["React", "Node.js", "Express.js", "MySQL", "OpenRouter", "FAISS"],
      liveUrl: "https://legalbuddy-frontend-eta.vercel.app/chat",
      githubUrl: "https://github.com/Hariprakash-A/legalbuddy-backend",
      color: "#0D1F3C",
      category: "AI & Web App",
      featured: true,
      imageUrl: "/legalbuddy_preview.png",
    },
  ];

/* ------------------------------------------------------------------ */
/*  Experience                                                         */
/* ------------------------------------------------------------------ */

export type Experience = {
  role: string;
  company: string;
  duration: string;
  location: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Full Stack Developer Intern",
    company: "Strackit",
    duration: "Mar 2024 – May 2024",
    location: "Remote",
    bullets: [
      "Designed and developed responsive web applications using HTML, CSS, JavaScript, and MySQL.",
      "Implemented frontend components and integrated backend functionality for dynamic user experiences.",
      "Optimized application performance and maintained clean, reusable code following industry best practices.",
      "Collaborated with mentors during development, testing, and deployment of web-based solutions.",
    ],
  },
  {
    role: "Cloud Computing & Big Data Intern",
    company: "YBI Foundation",
    duration: "Jun 2024 – Jul 2024",
    location: "Remote",
    bullets: [
      "Built cloud environments and explored scalable computing architectures for data-driven applications.",
      "Performed data processing and analysis using cloud-based tools and Big Data concepts.",
      "Gained practical experience with distributed systems, cloud services, and data management workflows.",
      "Completed hands-on projects involving cloud infrastructure and analytical operations.",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Education                                                          */
/* ------------------------------------------------------------------ */

export type Education = {
  degree: string;
  school: string;
  year: string;
  note: string;
};

export const education: Education[] = [
  {
    degree: "Bachelor of Technology (B.Tech) in Information Technology",
    school: "K.S.R Institute for Engineering and Technology, Tiruchengode",
    year: "2022 – 2026",
    note: "CGPA: 8.343",
  },
  {
    degree: "Minor Degree in Sensor Technologies and IoT",
    school: "K.S.R Institute for Engineering and Technology, Tiruchengode",
    year: "2022 – 2026",
    note: "CGPA: 8.333",
  },
  {
    degree: "Higher Secondary Education (HSC)",
    school: "The Gugai Higher Secondary School, Salem",
    year: "2021 – 2022",
    note: "Percentage: 82.66%",
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    school: "The Gugai Higher Secondary School, Salem",
    year: "2019 – 2020",
    note: "Percentage: 81.20%",
  },
];

/* ------------------------------------------------------------------ */
/*  Certifications                                                     */
/* ------------------------------------------------------------------ */

export type Certification = {
  title: string;
  issuer: string;
  year: string;
};

export const certifications: Certification[] = [
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud (Coursera)",
    year: "2024",
  },
  {
    title: "GenAI Study Jam",
    issuer: "Google Developer Student Clubs (GDSC), KSRIET",
    year: "2024",
  },
  {
    title: "Build with AI Virtual Session",
    issuer: "Google Developer Student Clubs (GDSC) × NEXUS Swarm",
    year: "2024",
  },
  {
    title: "Webathon",
    issuer: "GeeksforGeeks Student Chapter, KSRIET",
    year: "2024",
  },
  {
    title: "HTML & CSS",
    issuer: "Infosys Springboard",
    year: "2024",
  },
  {
    title: "JavaScript & C",
    issuer: "Infosys Springboard",
    year: "2024",
  },
  {
    title: "Python Programming",
    issuer: "GUVI",
    year: "2024",
  },
];

/* ------------------------------------------------------------------ */
/*  Achievements                                                       */
/* ------------------------------------------------------------------ */

export type Achievement = {
  title: string;
  event: string;
  year: string;
  description: string;
  type: "award" | "record" | "participation";
};

export const achievements: Achievement[] = [
  {
    title: "World Record Holder",
    event: "TanMillets — Asian Book of World Records",
    year: "2024",
    description:
      "Recognized by the Asian Book of World Records for spreading awareness on Millets, conducted by TanMillets.",
    type: "record",
  },
  {
    title: "Runner-up — Slogan Writing",
    event: "Cancer Awareness Campaign",
    year: "2023",
    description:
      "Secured runner-up position in Slogan Writing competition for cancer awareness.",
    type: "award",
  },
  {
    title: "Runner-up — Oratorical Competition",
    event: "Swami Vivekananda's Chicago Lectures 125th Year Celebration",
    year: "2023",
    description:
      "Secured runner-up position in Oratorical Competition celebrating Swami Vivekananda's Chicago Lectures.",
    type: "award",
  },
  {
    title: "Oratorical Competition",
    event: "Arima Sangam",
    year: "2023",
    description:
      "Participated in the oratorical competition conducted by Arima Sangam.",
    type: "participation",
  },
];

/* ------------------------------------------------------------------ */
/*  Positions of Responsibility                                        */
/* ------------------------------------------------------------------ */

export type Responsibility = {
  role: string;
  organization: string;
  period: string;
};

export const responsibilities: Responsibility[] = [
  {
    role: "President",
    organization: "Kamban Tamil Mandram",
    period: "2022 – 2023",
  },
  {
    role: "Class Representative",
    organization: "B.Tech Information Technology",
    period: "2022 – 2023",
  },
  {
    role: "Pupil Leader",
    organization: "The Gugai Higher Secondary School",
    period: "6th – 9th Grade",
  },
];

/* ------------------------------------------------------------------ */
/*  Paper Presentations                                                */
/* ------------------------------------------------------------------ */

export type PaperPresentation = {
  title: string;
  venue: string;
  year: string;
};

export const paperPresentations: PaperPresentation[] = [
  {
    title: "Machine Learning on Excessive Mining Detection",
    venue: "Knowledge Institute of Technology",
    year: "2024",
  },
  {
    title: "Human Computer Interface Design",
    venue: "KSR College of Engineering",
    year: "2024",
  },
  {
    title: "Enhancing Legal Literacy Through LegalBuddy AI Problem Driven Design With Superior Outcome Metric",
    venue: "Kalasalingam Academy of Research and Education",
    year: "2026",
  }
];

/* ------------------------------------------------------------------ */
/*  Coding Profiles                                                    */
/* ------------------------------------------------------------------ */

export type CodingProfile = {
  platform: string;
  username: string;
  url: string;
  stats?: string;
};

export const codingProfiles: CodingProfile[] = [
  {
    platform: "GitHub",
    username: "hariprakash0804",
    url: "https://github.com/hariprakash0804",
    stats: "Open Source Contributor",
  },
  {
    platform: "LinkedIn",
    username: "Hariprakash A",
    url: "https://www.linkedin.com/in/hariprakash-a-55bab6261",
    stats: "Professional Network",
  },
];

/* ------------------------------------------------------------------ */
/*  Strengths & Soft Skills                                            */
/* ------------------------------------------------------------------ */

export const strengths: string[] = [
  "Adaptability",
  "Self-driven",
  "Goal Oriented",
  "Quick Learning",
];

export const softSkills: string[] = [
  "Leadership",
  "Communication",
  "Problem Solving",
  "Team Collaboration",
];

/* ------------------------------------------------------------------ */
/*  Additional Info                                                     */
/* ------------------------------------------------------------------ */

export const additionalInfo = {
  languages: ["Tamil", "English", "Kannada(Native)"],
  hobbies: ["Reading Books", "Listening to Music", "Exploring Tech"],
  interestedDomains: ["IoT", "Cybersecurity", "AI/ML", "Full Stack Development"],
};

/* ------------------------------------------------------------------ */
/*  Timeline                                                           */
/* ------------------------------------------------------------------ */

export type TimelineEvent = {
  date: string;
  title: string;
  subtitle: string;
  type: "education" | "work" | "achievement" | "certification" | "paper";
};

export const timeline: TimelineEvent[] = [
  {
    date: "2019 – 2020",
    title: "SSLC Completed",
    subtitle: "The Gugai Higher Secondary School — 81.20%",
    type: "education",
  },
  {
    date: "2021 – 2022",
    title: "HSC Completed",
    subtitle: "The Gugai Higher Secondary School — 82.66%",
    type: "education",
  },
  {
    date: "2022",
    title: "B.Tech IT Started",
    subtitle: "K.S.R Institute for Engineering and Technology, Tiruchengode",
    type: "education",
  },
  {
    date: "2023",
    title: "World Record Holder",
    subtitle: "TanMillets — Asian Book of World Records",
    type: "achievement",
  },
  {
    date: "Mar 2024",
    title: "Full Stack Developer Intern",
    subtitle: "Strackit (Virtual)",
    type: "work",
  },
  {
    date: "Jun 2024",
    title: "Cloud Computing & Big Data Intern",
    subtitle: "YBI Foundation (Virtual)",
    type: "work",
  },
  {
    date: "2024",
    title: "Paper Presentations",
    subtitle: "ML on Mining Detection & HCI Design",
    type: "paper",
  },
  {
    date: "2024",
    title: "7+ Certifications Earned",
    subtitle: "Google Cloud, GDSC, Infosys Springboard, GUVI",
    type: "certification",
  },
  {
    date: "2026",
    title: "LegalBuddy AI Launched",
    subtitle: "RAG-based AI legal guidance platform",
    type: "achievement",
  },
  {
    date: "2026",
    title: "Paper Presentations",
    subtitle: "Enhancing Legal Literacy Through LegalBuddy AI Problem Driven Design With Superior Outcome Metric",
    type: "paper",
  },
];

/* ------------------------------------------------------------------ */
/*  Navigation                                                         */
/* ------------------------------------------------------------------ */

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Tech Stack", href: "#techstack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Timeline", href: "#timeline" },
  { label: "Achievements", href: "#achievements" },
  { label: "Profiles", href: "#coding-profiles" },
  { label: "Contact", href: "#contact" },
];
