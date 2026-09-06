import type { Metadata } from "next";
import { BlogFooter, BlogHeader } from "../BlogShell";
import { TERMS_HREF } from "../site-config";

export const metadata: Metadata = {
  title: "Terms | Fruity Puppy",
  description: "Website and product terms for Fruity Puppy cosmetics.",
  alternates: { canonical: TERMS_HREF },
};

export default function TermsPage() {
  return (
    <main className="innerPage">
      <BlogHeader />
      <section className="innerHero">
        <div className="innerHeroCopy">
          <p className="tagline">Fruity Puppy</p>
          <h1>Terms of use</h1>
          <p>
            Welcome to Fruity Puppy. Our site and products are offered for
            cosmetic skincare use. Please read these short terms before shopping
            or browsing.
          </p>
        </div>
        <img src="/images/new/partners.png" alt="Fruity Puppy brand artwork" />
      </section>
      <section className="storyStack">
        <article className="storyCard">
          <div>
            <h2>Cosmetic products only</h2>
            <p>
              Fruity Puppy creams, balms, and related formulas are cosmetics for
              external use. Nothing on this site diagnoses, treats, cures, or
              prevents disease. Always patch-test new products and discontinue
              use if irritation occurs.
            </p>
          </div>
        </article>
        <article className="storyCard">
          <div>
            <h2>Site content</h2>
            <p>
              Product stories, ingredient notes, and Ask Ipo answers are
              educational and promotional. They are not a substitute for advice
              from a licensed healthcare professional. If you have a medical
              concern, talk with a clinician.
            </p>
          </div>
        </article>
        <article className="storyCard">
          <div>
            <h2>Orders &amp; availability</h2>
            <p>
              Handmade batches sell out. Descriptions and images aim to be
              accurate; small-batch texture and scent can vary with fresh
              botanicals. Purchase terms for paid orders are completed through
              our shop checkout.
            </p>
          </div>
        </article>
      </section>
      <BlogFooter />
    </main>
  );
}
