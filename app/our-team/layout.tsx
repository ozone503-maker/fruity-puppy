import type { Metadata } from "next";
import type { ReactNode } from "react";
import { shareMeta } from "../seo";

export const metadata: Metadata = {
  title: 'Our Team | Fruity Puppy',
  description: 'Meet the Fruity Puppy team at FlashTown: plant intelligence, human hands, and the animals who keep the farm honest.',
  ...shareMeta({
    path: "/our-team",
    title: "Our Team — The People and Animals of FlashTown | Fruity Puppy",
    description:
      "Meet the Fruity Puppy team at FlashTown: plant intelligence, human hands, and the animals who keep the farm honest.",
  }),
};

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
