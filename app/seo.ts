import type { Metadata } from "next";
import { PRICE, SHOP } from "./shop-links";

/** Site-wide default share image (same one the root layout uses). */
export const DEFAULT_OG_IMAGE = {
  url: "/og-our-cream.jpg",
  width: 1200,
  height: 630,
  alt: "An open jar of Fruity Puppy Our Cream",
};

type ShareImage = { url: string; width?: number; height?: number; alt?: string };

/** Each page's own share image, used when the page does not pass one itself. */
const PAGE_OG_IMAGE: Record<string, ShareImage> = {
  "/our-cream": { url: "/images/hero/our-cream-hero-poster.jpg", width: 480, height: 854, alt: "Fresh pink Fruity Puppy cream being whipped in a mixing bowl" },
  "/our-team": { url: "/images/hero/commercials/our-team-poster.jpg", width: 568, height: 320, alt: "Ipo, Erv and the Fruity Puppy robots on the beach" },
  "/safety-and-transparency": { url: "/images/safety-blue-cabin.jpg", width: 1600, height: 1200, alt: "The blue cabin in the garden at FlashTown" },
  "/thorny-toad": { url: "/images/hero/thorny-toad-hero-poster.jpg", width: 568, height: 320, alt: "Wild green jungle growth on Hawaiʻi Island" },
  "/desert-squirt": { url: "/images/hero/desert-squirt-hero-poster.jpg", width: 320, height: 570, alt: "An open desert road at sunset" },
  "/our-partners": { url: "/images/new/partner-team.jpg", width: 1402, height: 1122, alt: "Ipo and Erv at the Fruity Puppy Partner Program office" },
  "/ask-ipo": { url: "/images/ipo/greeting.png", width: 382, height: 515, alt: "Ipo, the Fruity Puppy skincare guide, waving hello" },
  "/privacy": { url: "/images/our-home/five-dogs-farm.jpg", width: 1600, height: 1200, alt: "A dog by the pond on the Fruity Puppy farm" },
  "/terms": { url: "/images/new/partners.png", width: 1402, height: 1122, alt: "Fruity Puppy Partner Program poster with Ipo and Erv" },
  "/returns": { url: "/images/actions/retail-jars.webp", width: 1065, height: 910, alt: "Fruity Puppy retail jars" },
  "/store": { url: "/images/process/open-cream.jpg", width: 418, height: 418, alt: "An open jar of fresh Fruity Puppy cream" },
  "/sunburn": { url: "/images/process/fresh-aloe.jpg", width: 418, height: 418, alt: "A fresh cut aloe leaf" },
  "/problem-skin": { url: "/images/process/cream-texture.jpg", width: 418, height: 418, alt: "Close up of fresh Fruity Puppy cream texture" },
  "/tattoo": { url: "/images/process/fruit-on-ice.jpg", width: 418, height: 418, alt: "Jars of fresh fruit chilling on ice" },
  "/merch": { url: "/images/actions/fresh-open-jars.webp", width: 944, height: 710, alt: "Rows of open Fruity Puppy jars" },
  "/blog": { url: "https://img1.wsimg.com/isteam/ip/fe4bdf6c-22e4-45eb-95e5-8dcff390b5aa/1000036801.jpg", width: 903, height: 651, alt: "Fresh ice cream bean pods split open" },
  // Blog articles that have no featured image of their own.
  [`/f/${encodeURIComponent("our-botanical-toner-philosophy-the-4-pillars")}`]: { url: "/images/thorny-toad/ingredients/guava-leaf.jpg", width: 1600, height: 1200, alt: "Fresh red guava leaf shoots" },
  [`/f/${encodeURIComponent("\u{1F33F}\u2728-the-lost-science-of-aloe")}`]: { url: "/images/ingredients/aloe-vera.webp", width: 1200, height: 1600, alt: "An aloe vera plant growing in the jungle" },
};

/**
 * Per-page share card + canonical. Next replaces the parent openGraph/twitter
 * objects wholesale, so siteName, card type and image are restated here.
 */
export function shareMeta({
  path,
  title,
  description,
  image,
  type = "website",
}: {
  path: string;
  title: string;
  description: string;
  image?: ShareImage;
  type?: "website" | "article";
}): Pick<Metadata, "alternates" | "openGraph" | "twitter"> {
  const shareImage = image ?? PAGE_OG_IMAGE[path] ?? DEFAULT_OG_IMAGE;
  return {
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: "en_US",
      siteName: "Fruity Puppy",
      url: path,
      title,
      description,
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [shareImage.url],
    },
  };
}

/** Organization JSON-LD for the root layout. */
export const ORGANIZATION_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Fruity Puppy",
  url: "https://www.fruitypuppy.com",
  logo: "https://www.fruitypuppy.com/favicon.svg",
  sameAs: [
    "https://www.instagram.com/fruitypuppyskincream",
    "https://www.tiktok.com/@fruitypuppy.com",
    "https://shop.fruitypuppy.com",
  ],
  address: {
    "@type": "PostalAddress",
    postOfficeBoxNumber: "711416",
    streetAddress: "P.O. Box 711416",
    addressLocality: "Mountain View",
    addressRegion: "HI",
    postalCode: "96771",
    addressCountry: "US",
  },
};

type ProductKey = "original" | "fpx" | "faceJuice" | "moonTea";

/** Product photos as served by the Shopify product pages. */
const PRODUCT_IMAGE: Record<ProductKey, string> = {
  original:
    "https://cdn.shopify.com/s/files/1/0660/6097/6226/files/rn-image_picker_lib_temp_3a6190c7-8639-488e-9309-6badd5511656.png?v=1781217853",
  fpx: "https://cdn.shopify.com/s/files/1/0660/6097/6226/files/rn-image_picker_lib_temp_6f554009-fca5-412d-9e70-fb7be584bf62.jpg?v=1782519435",
  faceJuice:
    "https://cdn.shopify.com/s/files/1/0660/6097/6226/files/rn-image_picker_lib_temp_bc3193ff-85ca-4322-9f2a-24ed22a01afb.png?v=1781659872",
  moonTea:
    "https://cdn.shopify.com/s/files/1/0660/6097/6226/files/rn-image_picker_lib_temp_f9ea6cf2-2675-4e93-aa90-6ecc8a5f6b56.png?v=1782583556",
};

/** Product + Offer JSON-LD. Price comes from the same PRICE map the buy buttons show. */
export function productLd(key: ProductKey, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: PRODUCT_IMAGE[key],
    brand: { "@type": "Brand", name: key === "faceJuice" || key === "moonTea" ? "Thorny Toad" : "Fruity Puppy" },
    offers: {
      "@type": "Offer",
      url: SHOP[key],
      price: PRICE[key].replace(/[^0-9.]/g, ""),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@type": "Organization", name: "Fruity Puppy" },
    },
  };
}
