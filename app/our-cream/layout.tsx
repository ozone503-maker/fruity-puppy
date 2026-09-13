import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: 'Our Cream | Fruity Puppy Original',
  description: 'How Fruity Puppy Original is ice-extracted and handmade with 45% real Hawaiian fruit. Freshness is a spectrum. We refused to embalm it.',
};

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
