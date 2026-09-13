import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: 'Thorny Toad Face Juice | Fruity Puppy',
  description: 'Thorny Toad Face Juice is a tannin-rich toner from stickerbush cane, green tea, guava leaf, and jungle mint. Erv’s formula, not a Sephora mist.',
};

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
