import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: 'Moon Tea | Thorny Toad night toner',
  description: 'Moon Tea is Thorny Toad’s night toner: blackberry leaf, orange peel, green tea, spearmint, and cranberry hibiscus, made for after-dark skin.',
};

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
