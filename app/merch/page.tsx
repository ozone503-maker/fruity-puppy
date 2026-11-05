import type { Metadata } from "next";
import "./merch.css";
import { shareMeta } from "../seo";

export const metadata: Metadata = {
  title: "Fruity Puppy Store",
  description: "Browse Fruity Puppy products and current drops.",
  ...shareMeta({
    path: "/merch",
    title: "Fruity Puppy Store",
    description: "Browse Fruity Puppy products and current drops.",
  }),
};

export default function MerchPage() {
  return (
    <main className="store-container">
      <header className="store-header">
        <div className="header-content">
          <span className="eyebrow">Fruity Puppy · The Store</span>
          <h1>Good things<br />from the jungle.</h1>
          <p className="tagline">Skincare, apparel, and the occasional strange little drop.</p>
        </div>
      </header>
      <section className="store-layout" style={{ display: "block", maxWidth: 760, textAlign: "center" }}>
        <div className="panel" style={{ padding: "clamp(2rem, 6vw, 4rem)" }}>
          <h2 style={{ fontSize: "clamp(1.7rem, 4vw, 2.6rem)", marginBottom: "1rem" }}>Everything lives in one place now.</h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
            Browse the current Fruity Puppy collection, see what is available, and shop directly from the Store.
          </p>
          <a href="https://www.fruitypuppy.com/store" className="hero-cta">Enter the Store →</a>
        </div>
      </section>
      <footer className="store-footer">
        <a href="/" className="cta-btn secondary">Back to Fruity Puppy</a>
      </footer>
    </main>
  );
}
