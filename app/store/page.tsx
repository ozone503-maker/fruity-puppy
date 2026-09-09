import type { Metadata } from "next";
import "./store.css";

export const metadata: Metadata = {
  title: "Fruity Puppy Store | Fresh Biological Skincare",
  description: "Shop the Fruity Puppy skincare family from the Big Island.",
};

const products = [
  { name: "Fruity Puppy Original", note: "45% fresh fruit · daily skin nutrition", href: "https://shop.fruitypuppy.com/products/fruity-puppy", image: "/images/process/open-cream.jpg", tone: "pink" },
  { name: "FPX", note: "More papaya + starfruit · extra strength", href: "/fpx", image: "/images/hero/fpx-hero-poster.jpg", tone: "black" },
  { name: "Lava-Guava Bomb Balm", note: "High-friction + high-moisture zones", href: "/lava-guava", image: "/images/process/cream-texture.jpg", tone: "guava" },
  { name: "Thorny Toad Face Juice", note: "Botanical toner for balance + clarity", href: "/thorny-toad", image: "/images/ingredients/spearmint.webp", tone: "green" },
  { name: "Desert Squirt", note: "A dry-climate botanical ritual", href: "/desert-squirt", image: "/images/ingredients/aloe-vera.webp", tone: "sand" },
  { name: "Moon Tea", note: "Nocturnal botanical polishing toner", href: "/moon-tea", image: "/images/ingredients/cranberry-hibiscus.webp", tone: "moon" },
];

function ProductCard({ p, featured = false }: { p: (typeof products)[number]; featured?: boolean }) {
  return (
    <a className={`productCard ${featured ? "featured" : ""} tone-${p.tone}`} href={p.href}>
      <div className="imageWrap"><img src={p.image} alt={p.name} /></div>
      <div className="productCopy"><h3>{p.name}</h3><p>{p.note}</p><span>Explore →</span></div>
    </a>
  );
}

export default function StorePage() {
  return (
    <main className="storePage">
      <header className="storeHeader">
        <a className="brand" href="/">FRUITY <b>PUPPY</b></a>
        <div><p>THE SKINCARE STORE</p><h1>Skin eats. <em>Feed it well.</em></h1></div>
        <a className="back" href="/">← Main site</a>
      </header>

      <section className="storeIntro">
        <p className="eyebrow">FRESH BIOLOGICAL SKINCARE · BIG ISLAND, HAWAIʻI</p>
        <h2>Come inside.</h2>
        <p>This is the Fruity Puppy skincare room: fresh-fruit cream, stronger formulas, balms, and botanical toners — each with its own job.</p>
      </section>

      <section className="storeFloor" aria-label="Fruity Puppy skincare store">
        <aside className="wall leftWall">
          <div className="wallSign">THE FRESH FRUIT WALL</div>
          {products.slice(0, 3).map((p) => <ProductCard key={p.name} p={p} />)}
        </aside>

        <section className="centerIsland">
          <div className="islandSign"><span>HOUSE FAVORITE</span><h2>Fruity Puppy Original</h2><p>The formula that started the whole weird little empire.</p></div>
          <ProductCard p={products[0]} featured />
          <div className="centerPair">
            <ProductCard p={products[1]} />
            <ProductCard p={products[2]} />
          </div>
          <div className="freshnessPlaque"><b>Freshness is a spectrum.</b><span>Fresh-picked · kept cold · made in small batches</span></div>
        </section>

        <aside className="wall rightWall">
          <div className="glassCase">
            <div className="wallSign">BOTANICAL BAR</div>
            {products.slice(3).map((p) => <ProductCard key={p.name} p={p} />)}
          </div>
        </aside>
      </section>

      <section className="storeFooter">
        <div><p>Want the whole catalog?</p><h2>Take the front door to the shop.</h2></div>
        <div className="footerActions">
          <a className="primary" href="https://shop.fruitypuppy.com">Browse all products</a>
          <a className="secondary" href="/merch">Visit the merch hall</a>
          <a className="secondary" href="/">Back to Fruity Puppy</a>
        </div>
      </section>
    </main>
  );
}
