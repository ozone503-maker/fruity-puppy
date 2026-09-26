import type { Metadata } from "next";
import type { ReactNode } from "react";
import { shareMeta } from "../seo";

export const metadata: Metadata = {
  title: 'Desert Squirt | Thorny Toad Southwest',
  description: 'Desert Squirt is Thorny Toad’s Southwest chapter — a dry-climate botanical toner and Face Juice love letter to Texas, Arizona, and New Mexico.',
  ...shareMeta({
    path: "/desert-squirt",
    title: "Desert Squirt — Dry-Climate Botanical Toner | Thorny Toad",
    description:
      "Dry-climate botanical toner from the Thorny Toad family, for skin cooked by sun, AC, altitude or desert air. Loved in Texas, Arizona and New Mexico.",
  }),
};

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
