import { readFile } from "node:fs/promises";
import path from "node:path";

export const dynamic = "force-static";

export async function GET() {
  const encoded = await readFile(
    path.join(process.cwd(), "public", "images", "outlet-mall-portal.png"),
    "utf8",
  );

  const image = Buffer.from(encoded.trim(), "base64");

  return new Response(image, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
