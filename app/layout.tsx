import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Random Fifa Positions - EA FC 24",
  description:
    "Get random fifa formations and positions for you and your friends. Up to date for EA FC 24. Great for pro clubs, friendlies, and ultimate team.",
  alternates: {
    canonical: "https://randomfifapositions.com",
  },
  creator: "Jed Patterson",

  keywords: [
    "fifa",
    "random",
    "fifa 24",
    "fifa 23",
    "ea fc",
    "ea fc 24",
    "positions",
    "pro clubs",
    "ultimate team",
    "random fifa positions",
    "random fifa",
    "random fifa formation",
    "random fifa 24",
    "random fifa 23",
    "random ea fc",
    "random ea fc 24",
    "random positions",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
