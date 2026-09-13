import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SiteHeader from "./components/SiteHeader";
import OutletMallPortal from "./components/OutletMallPortal";
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
import "./use-case.css";
import "./site-header.css";
import "./cta-pass.css";
import "./homepage-launch.css";
import "./desktop-launch.css";
import "./outlet-mall-portal.css";

// Redeploy marker after reverting experimental social-preview metadata.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fruitypuppy.com"),
  title: "Fruity Puppy | Fresh Fruit Skin Nutrition from Hawaiʻi",
  description: "Fresh biological skincare made with 45% real Hawaiian fruit. Ice-extracted and handmade on the Big Island.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Fruity Puppy",
    title: "Fruity Puppy | Fresh Fruit Skin Nutrition from Hawaiʻi",
    description: "Fresh biological skincare made with 45% real Hawaiian fruit. Ice-extracted and handmade on the Big Island.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "FlashTown jungle on Hawaiʻi Island, home of Fruity Puppy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fruity Puppy | Fresh Fruit Skin Nutrition from Hawaiʻi",
    description: "Fresh biological skincare made with 45% real Hawaiian fruit. Ice-extracted and handmade on the Big Island.",
    images: ["/og.jpg"],
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
        <SiteHeader />
        {children}
        <OutletMallPortal />
      </body>
    </html>
  );
}
