import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const dynamic = "force-static";

/** Homepage share card: the Our Cream jar photo used on the homepage. */
export async function GET() {
  const jarFile = await readFile(join(process.cwd(), "public/images/products/original-jar.png"));
  const JAR = `data:image/png;base64,${jarFile.toString("base64")}`;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#3b4a2a" }}>
        <img src={JAR} width={1200} height={1200} style={{ position: "absolute", left: 0, top: -285, opacity: 0.45 }} />
        <img src={JAR} width={630} height={630} style={{ position: "absolute", left: 285, top: 0 }} />
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
