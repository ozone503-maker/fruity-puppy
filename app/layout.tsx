import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./photo-sections.css";
import "./product-proof.css";
import "./our-team/team.css";
import "./our-home/our-home.css";
import "./safety-and-transparency/safety.css";
import "./ipo-widget.css";
import "./shop-actions.css";
import "./action-photo-overrides.css";
import "./lava-guava/lava-guava.css";
import "./hero-overlay.css";
import "./fpx/fpx.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fruity Puppy | Fresh Fruit Skin Nutrition from Hawaiʻi",
  description: "Fresh biological skincare made with 45% real Hawaiian fruit. Ice-extracted and handmade on the Big Island.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
