import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: 'Our Team | Fruity Puppy',
  description: 'Meet the Fruity Puppy team at FlashTown: plant intelligence, human hands, and the animals who keep the farm honest.',
};

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
