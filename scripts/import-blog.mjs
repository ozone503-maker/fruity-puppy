import { writeFile } from "node:fs/promises";

const feed = await fetch("https://fruitypuppy.com/ipos-blog/f.json").then((response) => response.json());
const decode = (value) => JSON.parse(`"${value.replaceAll("\\\"", "\\\\\"")}"`);
const cleanSlug = (url) => decodeURIComponent(new URL(url).pathname.replace(/^\/f\//, ""));
const articles = [];

for (const item of feed.items) {
  const html = await fetch(item.url).then((response) => response.text());
  const match = html.match(/"fullContent":"((?:\\.|[^"\\])*)"/);
  if (!match) throw new Error(`Missing fullContent for ${item.url}`);
  const fullContent = JSON.parse(`"${match[1]}"`);
  const draft = JSON.parse(fullContent);
  const text = draft.blocks.map((block) => block.text).join("\n\n").trim();
  const imageEntities = Object.values(draft.entityMap || {})
    .filter((entity) => entity.type === "IMAGE")
    .map((entity) => ({
      src: entity.data.src.startsWith("//") ? `https:${entity.data.src}` : entity.data.src,
      alt: entity.data.alt || item.title,
    }));
  const featured = html.match(/"featuredImage":"([^"]+)"/)?.[1] || item.html_content?.match(/<img src="([^"]+)"/)?.[1] || "";
  const published = html.match(/"publishedDate":"([^"]+)"/)?.[1] || item.date_modified;
  const description = text.replace(/\s+/g, " ").slice(0, 158);
  articles.push({
    slug: cleanSlug(item.url),
    originalUrl: item.url,
    title: item.title.trim(),
    description,
    published,
    featured,
    featuredAlt: imageEntities[0]?.alt || item.title,
    text,
  });
  process.stdout.write(".");
}

const output = `export type BlogArticle = {slug:string;originalUrl:string;title:string;description:string;published:string;featured:string;featuredAlt:string;text:string};\n\nexport const blogArticles: BlogArticle[] = ${JSON.stringify(articles, null, 2)};\n\nexport function getArticle(slug:string){return blogArticles.find((article)=>article.slug===decodeURIComponent(slug));}\n`;
await writeFile(new URL("../app/blog-data.ts", import.meta.url), output);
console.log(`\nImported ${articles.length} articles.`);
