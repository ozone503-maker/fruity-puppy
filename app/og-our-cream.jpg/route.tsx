import { ImageResponse } from "next/og";

export const dynamic = "force-static";

const JAR =
  "https://shop.fruitypuppy.com/cdn/shop/files/rn-image_picker_lib_temp_3a6190c7-8639-488e-9309-6badd5511656.png?v=1781217853&width=1200";

/** Homepage share card: the Our Cream jar photo used on the homepage. */
export async function GET() {
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
