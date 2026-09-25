import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Moon Tea — Evening Botanical Toner | Thorny Toad",
  description:
    "Night-side Thorny Toad toner. $29.99. Use after sun, sweat or a long day, then seal with Fruity Puppy Original.",
  openGraph: {
    title: "Moon Tea — Evening Botanical Toner | Thorny Toad",
    description: "Evening botanical toner from FlashTown. $29.99. Ships from Hawaiʻi Island.",
  },
  twitter: {
    title: "Moon Tea — Evening Botanical Toner | Thorny Toad",
    description: "Evening botanical toner from FlashTown. $29.99. Ships from Hawaiʻi Island.",
  },
};

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
