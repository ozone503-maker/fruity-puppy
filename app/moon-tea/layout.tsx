import type { Metadata } from "next";
import type { ReactNode } from "react";
import JsonLd from "../components/JsonLd";
import { productLd, shareMeta } from "../seo";

export const metadata: Metadata = {
  title: "Moon Tea — Evening Botanical Toner | Thorny Toad",
  description:
    "Night-side Thorny Toad toner. $29.99. Use after sun, sweat or a long day, then seal with Fruity Puppy Original.",
  ...shareMeta({
    path: "/moon-tea",
    title: "Moon Tea — Evening Botanical Toner | Thorny Toad",
    description: "Evening botanical toner from FlashTown. $29.99. Ships from Hawaiʻi Island.",
    image: {
      url: "/images/hero/moon-tea-hero-poster.jpg",
      width: 1280,
      height: 720,
      alt: "Moon Tea, Thorny Toad's evening botanical toner, at FlashTown",
    },
  }),
};

const productSchema = productLd(
  "moonTea",
  "Thorny Toad Moon Tea",
  "Evening botanical toner brewed at FlashTown on Hawaiʻi Island. 2 fl oz.",
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
