import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: 'Our Dream | Fruity Puppy',
  description: 'The Fruity Puppy experiment: could we make truly good skincare from what we grow, blend, and build ourselves on Hawaiʻi Island?',
};

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
