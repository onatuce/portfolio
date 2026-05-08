import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Onat Üce | Junior Software Engineer",
  description:
    "Portfolio for a junior software engineer focused on frontend development, test automation, React, TypeScript, Java and structured software development.",
  keywords: [
    "Junior Developer",
    "Software Engineer",
    "React",
    "TypeScript",
    "Playwright",
    "Java",
    "Frontend Developer",
    "Test Automation",
  ],
  authors: [{ name: "Onat Üce" }],
  openGraph: {
    title: "Onat Üce | Junior Software Engineer",
    description:
      "Junior software engineer focused on frontend, test automation and structured development.",
    type: "website",
    url: "https://dittdomene.no",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  );
}