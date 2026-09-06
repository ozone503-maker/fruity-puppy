import type { Metadata } from "next";
import IpoWidget from "../components/IpoWidget";
import { BlogFooter, BlogHeader } from "../BlogShell";
import { ASK_IPO_HREF } from "../site-config";

export const metadata: Metadata = {
  title: "Ask Ipo | Fruity Puppy",
  description:
    "Ask Ipo, Fruity Puppy’s AI guide to fresh biological skincare from Hawaiʻi Island. Cosmetic guidance only—not medical advice.",
  alternates: { canonical: ASK_IPO_HREF },
};

export default function AskIpoPage() {
  return (
    <main className="innerPage askIpoPage">
      <BlogHeader />
      <section className="innerHero">
        <div className="innerHeroCopy">
          <p className="tagline">Questions? Ask AI Ipo.</p>
          <h1>Tell Ipo about your skin.</h1>
          <p>
            Ipo knows the products, the botanicals, the process, and the weird
            things skin does. She listens first, explains the science without
            acting like a textbook, and helps you find the right place to start.
            Cosmetic guidance only—Ipo is not a medical provider.
          </p>
        </div>
        <img
          src="/images/ipo/greeting.png"
          alt="Ipo, Fruity Puppy’s AI skincare guide"
        />
      </section>
      <section className="ask askLive" id="ask-ipo" style={{ padding: "2rem 1.25rem 4rem" }}>
        <IpoWidget />
      </section>
      <BlogFooter />
    </main>
  );
}
