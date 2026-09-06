import type { Metadata } from "next";
import { BlogFooter, BlogHeader } from "../BlogShell";
import { PRIVACY_HREF } from "../site-config";

export const metadata: Metadata = {
  title: "Privacy | Fruity Puppy",
  description: "Privacy notes for Fruity Puppy’s website and cosmetic products.",
  alternates: { canonical: PRIVACY_HREF },
};

export default function PrivacyPage() {
  return (
    <main className="innerPage">
      <BlogHeader />
      <section className="innerHero">
        <div className="innerHeroCopy">
          <p className="tagline">Fruity Puppy</p>
          <h1>Privacy</h1>
          <p>
            We make handmade cosmetic skincare on Hawaiʻi Island. This short
            note explains how we handle basic contact information you share with
            us online.
          </p>
        </div>
        <img src="/images/new/dream.jpg" alt="Fruity Puppy jungle setting" />
      </section>
      <section className="storyStack">
        <article className="storyCard">
          <div>
            <h2>What we collect</h2>
            <p>
              If you join our email list, place a shop order, or message us, we
              may receive your name, email, shipping details, and whatever you
              choose to write. We use that information to fulfill orders, answer
              questions, and send updates you asked for.
            </p>
          </div>
        </article>
        <article className="storyCard">
          <div>
            <h2>How we use it</h2>
            <p>
              We do not sell your personal information. Service providers that
              help us run the shop, email list, or site may process data on our
              behalf. Ask Ipo chat responses are for cosmetic product guidance
              only and are not medical advice.
            </p>
          </div>
        </article>
        <article className="storyCard">
          <div>
            <h2>Questions</h2>
            <p>
              For privacy questions, reach out through the contact options on{" "}
              <a href="https://shop.fruitypuppy.com">shop.fruitypuppy.com</a>.
            </p>
          </div>
        </article>
      </section>
      <BlogFooter />
    </main>
  );
}
