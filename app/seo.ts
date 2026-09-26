import type { Metadata } from "next";
import { PRICE, SHOP } from "./shop-links";

/** Site-wide default share image (same one the root layout uses). */
export const DEFAULT_OG_IMAGE = {
  url: "/og.jpg",
  width: 1200,
  height: 630,
  alt: "FlashTown jungle on Hawaiʻi Island, home of Fruity Puppy",
};

type ShareImage = { url: string; width?: number; height?: number; alt?: string };

/**
 * Per-page share card + canonical. Next replaces the parent openGraph/twitter
 * objects wholesale, so siteName, card type and image are restated here.
 */
export function shareMeta({
  path,
  title,
  description,
  image = DEFAULT_OG_IMAGE,
  type = "website",
}: {
  path: string;
  title: string;
  description: string;
  image?: ShareImage;
  type?: "website" | "article";
}): Pick<Metadata, "alternates" | "openGraph" | "twitter"> {
  return {
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: "en_US",
      siteName: "Fruity Puppy",
      url: path,
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
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
