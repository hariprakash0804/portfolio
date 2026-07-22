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
  return (
    <html
      lang="en"
      className={`${clashDisplay.variable} ${editorialNew.variable} ${dmSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#050508] text-[#F0EEE6] font-body overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
