import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: 'Our Partners | Fruity Puppy',
  description: 'The Fruity Puppy partner program. Not influencers. Real people who love the cream and know who needs to hear about it.',
};

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
