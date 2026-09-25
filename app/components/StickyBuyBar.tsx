"use client";

import { usePathname } from "next/navigation";
import { PRICE, SHOP } from "../shop-links";

type BuyConfig = { href: string; label: string };

const ROUTES: Record<string, BuyConfig> = {
  "/": { href: SHOP.original, label: `BUY NOW · ${PRICE.original}` },
  "/our-cream": { href: SHOP.original, label: `BUY NOW · ${PRICE.original}` },
  "/fpx": { href: SHOP.fpx, label: `BUY FPX · ${PRICE.fpx}` },
  "/thorny-toad": { href: SHOP.faceJuice, label: `BUY FACE JUICE · ${PRICE.faceJuice}` },
  "/moon-tea": { href: SHOP.moonTea, label: `BUY MOON TEA · ${PRICE.moonTea}` },
};

export default function StickyBuyBar() {
  const pathname = usePathname() || "/";
  const config = ROUTES[pathname];
  if (!config) return null;

  return (
    <>
      <div className="stickyBuyPad" aria-hidden="true" />
      <a className="stickyBuyBar" href={config.href}>
        <span className="stickyBuyLabel">{config.label}</span>
        <span className="stickyBuyArrow" aria-hidden="true">
          →
        </span>
      </a>
    </>
  );
}
