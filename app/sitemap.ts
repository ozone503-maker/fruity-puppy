import type { MetadataRoute } from "next";
import { blogArticles } from "./blog-data";
import { SITE_BASE } from "./site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_BASE.replace(/\/$/, "");
  const staticEntries: MetadataRoute.Sitemap = [
    "",
    "/our-team",
    "/our-dream",
    "/our-cream",
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
  ].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogArticles.map((article) => ({
    url: `${base}/f/${encodeURIComponent(article.slug)}`,
    lastModified: new Date(article.published),
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
