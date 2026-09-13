import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: 'Lava-Guava | Fruity Puppy bomb balm',
  description: 'Lava-Guava is a seven-plant jungle balm from invasive guava, stickerbush, ti, papaya leaf, and wild spearmint, handmade on Hawaiʻi Island.',
};

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
