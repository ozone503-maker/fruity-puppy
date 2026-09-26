import type { Metadata } from "next";
import type { ReactNode } from "react";
import JsonLd from "../components/JsonLd";
import { productLd, shareMeta } from "../seo";

export const metadata: Metadata = {
  title: "Fruity Puppy Original — 45% Real Hawaiian Fruit Face Cream",
  description:
    "Refrigerated Hawaiian face cream with 45% real fruit — lilikoi, papaya, cranberry hibiscus, ice cream bean, spearmint and aloe. 2 oz $59.99. Free sample $5 shipping.",
  ...shareMeta({
    path: "/our-cream",
    title: "Fruity Puppy Original — 45% Real Hawaiian Fruit Face Cream",
    description:
      "45% real Hawaiian fruit face cream. Ice-extracted on Hawaiʻi Island. 2 oz $59.99.",
  }),
};

const productSchema = productLd(
  "original",
  "Fruity Puppy Original",
  "45% real Hawaiian fruit face cream. Refrigerated, ice-extracted and handmade on Hawaiʻi Island. 2 oz.",
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
