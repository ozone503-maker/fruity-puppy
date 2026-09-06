import type { MetadataRoute } from "next";
import { blogArticles } from "./blog-data";
import { SITE_BASE } from "./site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_BASE.replace(/\/$/, "");
  const paths = [
    "",
    "/our-team",
    "/our-dream",
    "/our-home",
    "/safety-and-transparency",
    "/lava-guava",
    "/thorny-toad",
    "/moon-tea",
    "/fpx",
    "/our-partners",
    "/blog",
    "/ask-ipo",
    "/privacy",
    "/terms",
    "/returns",
  ];
  return paths
    .map((path) => ({
      url: `${base}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    }))
    .concat(
      blogArticles.map((article) => ({
        url: `${base}/f/${encodeURIComponent(article.slug)}`,
        lastModified: new Date(article.published),
        changeFrequency: "yearly" as const,
        priority: 0.7,
      })),
    );
}
