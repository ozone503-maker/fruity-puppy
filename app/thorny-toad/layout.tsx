import type { Metadata } from "next";
import type { ReactNode } from "react";
import JsonLd from "../components/JsonLd";
import { productLd, shareMeta } from "../seo";

export const metadata: Metadata = {
  title: 'Thorny Toad Face Juice | Fruity Puppy',
  description: 'Thorny Toad Face Juice is a tannin-rich toner from stickerbush cane, green tea, guava leaf, and jungle mint. Erv’s formula, not a Sephora mist.',
  ...shareMeta({
    path: "/thorny-toad",
    title: "Thorny Toad Face Juice — Hawaiian Botanical Toner",
    description:
      "Hawaiian botanical toner brewed from stickerbush cane, green tea, guava leaf, lemon peel and jungle mint. $29.99. Handmade on Hawaiʻi Island.",
  }),
};

const productSchema = productLd(
  "faceJuice",
  "Thorny Toad Face Juice",
  "Hawaiian botanical toner from stickerbush cane, green tea, guava leaf, lemon peel and jungle mint. 2 fl oz.",
);

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {children}
      <JsonLd data={productSchema} />
    </>
  );
}
