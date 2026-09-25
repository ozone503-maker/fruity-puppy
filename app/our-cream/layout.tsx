import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Fruity Puppy Original — 45% Real Hawaiian Fruit Face Cream",
  description:
    "Refrigerated Hawaiian face cream with 45% real fruit — lilikoi, papaya, cranberry hibiscus, ice cream bean, spearmint and aloe. 2 oz $59.99. Free sample $5 shipping.",
  openGraph: {
    title: "Fruity Puppy Original — 45% Real Hawaiian Fruit Face Cream",
    description:
      "45% real Hawaiian fruit face cream. Ice-extracted on Hawaiʻi Island. 2 oz $59.99.",
  },
  twitter: {
    title: "Fruity Puppy Original — 45% Real Hawaiian Fruit Face Cream",
    description:
      "45% real Hawaiian fruit face cream. Ice-extracted on Hawaiʻi Island. 2 oz $59.99.",
  },
};

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
