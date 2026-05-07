import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ditt Navn | Junior IT Developer",
  description:
    "Portfolio for a junior IT developer focused on frontend development, test automation, React, TypeScript, Java and structured software development.",
  keywords: [
    "Junior Developer",
    "IT Developer",
    "React",
    "TypeScript",
    "Playwright",
    "Java",
    "Frontend Developer",
    "Test Automation",
  ],
  authors: [{ name: "Ditt Navn" }],
  openGraph: {
    title: "Ditt Navn | Junior IT Developer",
    description:
      "Junior IT developer focused on frontend, test automation and structured development.",
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