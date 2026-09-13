import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: 'Desert Squirt | Thorny Toad Southwest',
  description: 'Desert Squirt is Thorny Toad’s Southwest chapter — a Face Juice love letter to Texas, Arizona, and New Mexico.',
};

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
