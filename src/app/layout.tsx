import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const clashDisplay = localFont({
  src: "./fonts/clash_display/ClashDisplay-Variable.woff2",
  variable: "--font-display",
  display: "swap",
});

const editorialNew = localFont({
  src: "./fonts/editorial_new/Editorial New.woff2",
  variable: "--font-editorial",
  display: "swap",
});

const dmSans = localFont({
  src: [
    {
      path: "./fonts/dmsans/DMSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/dmsans/DMSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/dmsans/DMSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/dmsans/DMSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/dmsans/DMSans-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/dmsans/DMSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-body",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hariprakash A — Cinematic Portfolio",
  description:
    "Full Stack & Mobile Developer portfolio showcasing high-performance digital identities, AI platforms, and web applications.",
  keywords: [
    "portfolio",
    "developer",
    "full-stack",
    "web developer",
    "Hariprakash A",
    "LegalBuddy AI",
    "React Native",
    "Next.js",
  ],
  authors: [{ name: "Hariprakash A" }],
  openGraph: {
    title: "Hariprakash A — Cinematic Portfolio",
    description:
      "Full Stack & Mobile Developer portfolio showcasing high-performance digital identities, AI platforms, and web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hariprakash A",
    jobTitle: "Full Stack Developer",
    url: "https://github.com/hariprakash0804",
    sameAs: [
      "https://github.com/hariprakash0804",
      "https://www.linkedin.com/in/hariprakash-a-55bab6261",
    ],
    knowsAbout: [
      "Full Stack Development",
      "React",
      "Next.js",
      "React Native",
      "Node.js",
      "AI Development",
      "Retrieval-Augmented Generation",
    ],
  };

  return (
    <html
      lang="en"
      className={`${clashDisplay.variable} ${editorialNew.variable} ${dmSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-[#050508] text-[#F0EEE6] font-body overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
