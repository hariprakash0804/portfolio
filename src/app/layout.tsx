import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hariprakash A — Portfolio",
  description:
    "Full Stack Developer portfolio showcasing projects, skills, and experience.",
  keywords: [
    "portfolio",
    "developer",
    "full-stack",
    "web developer",
    "Hariprakash A",
  ],
  authors: [{ name: "Hariprakash A" }],
  openGraph: {
    title: "Hariprakash A — Portfolio",
    description:
      "Full Stack Developer portfolio showcasing projects, skills, and experience.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
