import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/store/buy/", "/store/admin", "/store/ship/"],
    },
    sitemap: "https://www.fruitypuppy.com/sitemap.xml",
    host: "https://www.fruitypuppy.com",
  };
}
