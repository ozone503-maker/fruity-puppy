import type { Metadata } from "next";
import { BlogFooter, BlogHeader } from "../BlogShell";
import { RETURNS_HREF } from "../site-config";

export const metadata: Metadata = {
  title: "Returns | Fruity Puppy",
  description: "Return and exchange notes for Fruity Puppy cosmetic products.",
  alternates: { canonical: RETURNS_HREF },
};

export default function ReturnsPage() {
  return (
    <main className="innerPage">
      <BlogHeader />
      <section className="innerHero">
        <div className="innerHeroCopy">
          <p className="tagline">Fruity Puppy</p>
          <h1>Returns</h1>
          <p>
            We make fresh biological skincare in small jungle batches. Because
            jars are opened on skin, we keep returns simple and careful.
          </p>
        </div>
        <img
          src="/images/actions/retail-jars.webp"
          alt="Fruity Puppy retail jars"
        />
      </section>
      <section className="storyStack">
        <article className="storyCard">
          <div>
            <h2>Fresh cosmetics</h2>
            <p>
              For hygiene, opened cream or balm generally cannot be restocked.
              If your order arrives damaged, incorrect, or spoiled in transit,
              contact us promptly with your order details and photos so we can
              make it right.
            </p>
          </div>
        </article>
        <article className="storyCard">
          <div>
            <h2>Unopened items</h2>
            <p>
              Unopened products in original condition may be eligible for
              exchange or store credit within a reasonable window after delivery.
              Shipping costs are typically non-refundable unless we made an
              error.
            </p>
          </div>
        </article>
        <article className="storyCard">
          <div>
            <h2>How to reach us</h2>
            <p>
              Start at{" "}
              <a href="https://shop.fruitypuppy.com">shop.fruitypuppy.com</a>{" "}
              contact options, or ask through our email list reply if you already
              hear from jungle mail. Include your order number when you can.
            </p>
          </div>
        </article>
      </section>
      <BlogFooter />
    </main>
  );
}
