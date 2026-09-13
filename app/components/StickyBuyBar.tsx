"use client";

import { usePathname } from "next/navigation";

type BuyConfig = { href: string; label: string };

const ORIGINAL =
  "https://shop.fruitypuppy.com/products/fruity-puppy";
const FACE_JUICE =
  "https://shop.fruitypuppy.com/products/thorny-toad-face-juice";
const MOON_TEA =
  "https://shop.fruitypuppy.com/products/thorny-toad-moon-tea";
/** Existing shop CTAs on /fpx and /lava-guava point at the shop root. */
const SHOP_ROOT = "https://shop.fruitypuppy.com";

const ROUTES: Record<string, BuyConfig> = {
  "/": { href: ORIGINAL, label: "BUY NOW" },
  "/our-cream": { href: ORIGINAL, label: "BUY NOW" },
  "/fpx": { href: SHOP_ROOT, label: "BUY FPX" },
  "/lava-guava": { href: SHOP_ROOT, label: "BUY LAVA-GUAVA" },
  "/thorny-toad": { href: FACE_JUICE, label: "BUY FACE JUICE" },
  "/moon-tea": { href: MOON_TEA, label: "BUY MOON TEA" },
  "/desert-squirt": { href: FACE_JUICE, label: "BUY NOW" },
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
