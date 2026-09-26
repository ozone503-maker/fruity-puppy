import type { Metadata } from "next";
import type { ReactNode } from "react";
import { shareMeta } from "../seo";

export const metadata: Metadata = {
  title: 'Lava-Guava | Fruity Puppy bomb balm',
  description: 'Hawaiian botanical anti-chafe balm, coming soon. Lava-Guava is a seven-plant jungle balm from invasive guava, stickerbush, ti, papaya leaf, and wild spearmint, handmade on Hawaiʻi Island.',
  ...shareMeta({
    path: "/lava-guava",
    title: "Lava-Guava Bomb Balm — Hawaiian Botanical Anti-Chafe Balm | Coming Soon",
    description:
      "A firm, shea-free Hawaiian botanical balm for heat, sweat and friction. Seven jungle plants, handmade on Hawaiʻi Island. Coming soon.",
    image: {
      url: "/images/hero/lava-guava-hero-poster.jpg",
      width: 1280,
      height: 718,
      alt: "Lava flowing on Hawaiʻi Island, home of Lava-Guava bomb balm",
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
