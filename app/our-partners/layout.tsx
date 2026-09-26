import type { Metadata } from "next";
import type { ReactNode } from "react";
import { shareMeta } from "../seo";

export const metadata: Metadata = {
  title: 'Our Partners | Fruity Puppy',
  description: 'The Fruity Puppy partner program. Not influencers. Real people who love the cream and know who needs to hear about it.',
  ...shareMeta({
    path: "/our-partners",
    title: "Our Partners — The Fruity Puppy Partner Program",
    description:
      "Not influencers. Real people who love Fruity Puppy cream and know who needs to hear about it.",
  }),
};

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
