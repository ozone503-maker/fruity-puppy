import type { Metadata } from "next";
import type { ReactNode } from "react";
import { shareMeta } from "../seo";

export const metadata: Metadata = {
  title: 'Our Dream | Fruity Puppy',
  description: 'The Fruity Puppy experiment: could we make truly good skincare from what we grow, blend, and build ourselves on Hawaiʻi Island?',
  ...shareMeta({
    path: "/our-dream",
    title: "Our Dream — Skincare Grown on Hawaiʻi Island | Fruity Puppy",
    description:
      "The Fruity Puppy experiment: could we make truly good skincare from what we grow, blend, and build ourselves on Hawaiʻi Island?",
    image: {
      url: "/images/hero/our-dream-hero-poster.jpg",
      width: 1136,
      height: 640,
      alt: "Chickens foraging on the lava-rock farm at FlashTown, Hawaiʻi Island",
    },
  }),
};

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
