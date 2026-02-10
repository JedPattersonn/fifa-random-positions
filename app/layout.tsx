import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://randomfifapositions.com"),
  title: {
    default: "Random FIFA Positions | Matchday Position Generator",
    template: "%s | Random FIFA Positions",
  },
  description:
    "Generate random FIFA and EA FC formations and positions instantly for Pro Clubs, friendlies, and Ultimate Team sessions.",
  applicationName: "Random FIFA Positions",
  creator: "Jed Patterson",
  publisher: "Random FIFA Positions",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "random fifa positions",
    "ea fc position generator",
    "fifa formation generator",
    "pro clubs random positions",
    "random ea fc formations",
    "fifa squad challenge",
  ],
  openGraph: {
    type: "website",
    url: "https://randomfifapositions.com",
    siteName: "Random FIFA Positions",
    title: "Random FIFA Positions | Matchday Position Generator",
    description:
      "Spin a formation, assign roles, and run instant squad challenges with a mobile-first random FIFA position generator.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Random FIFA Positions | Matchday Position Generator",
    description:
      "Generate random FIFA and EA FC formations and positions instantly for your next match.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "gaming",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#091223",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
