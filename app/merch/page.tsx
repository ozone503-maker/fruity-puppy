import type { Metadata } from "next";
import "./merch.css";

export const metadata: Metadata = {
  title: "Fruity Puppy Outlet | Merch Hall",
  description:
    "Fruity Puppy apparel and lifestyle merch. Premium blanks, rotating drops, and Fruity Puppy attitude.",
};

const SHOP = "https://shop.fruitypuppy.com";
const FLAT_TEE =
  "https://cdn.shopify.com/s/files/1/0553/8949/2514/files/FPX-tee-flat.jpg";
const FOLDED_TEE =
  "https://cdn.shopify.com/s/files/1/0553/8949/2514/files/FPX-tee-folded.jpg";

const featured = [
  ["Skin Eats Tee", "Fruity Puppy graphic tee"],
  ["Antioxidant Dealer", "Antioxidant Dealer Fruity Puppy graphic tee"],
  ["FPX Drop", "FPX graphic tee"],
  ["1414 Tee", "Fruity Puppy 1414 graphic tee"],
] as const;

const wall = [
  ["Original", "Fruity Puppy Original merch"],
  ["FPX", "FPX merch"],
  ["Thorny Toad", "Thorny Toad merch"],
  ["Moon Tea", "Moon Tea merch"],
  ["Monkey Jockey", "Monkey Jockey merch"],
  ["Brobots", "Brobots merch"],
] as const;

export default function MerchPage() {
  return (
    <main className="store-container">
      <header className="store-header">
        <div className="header-content">
          <span className="eyebrow">Outlet Mall · Merch Hall</span>
          <h1>Fruity Puppy Outlet</h1>
          <p className="tagline">Skin eats. Your closet can have a personality too.</p>
        </div>
      </header>

      <div className="store-layout">
        <section className="display-zone" aria-labelledby="rack-title">
          <div className="hanging-rack panel">
            <div className="rack-rail" aria-hidden="true" />
            <h2 id="rack-title" className="section-title">Featured Tees</h2>
            <div className="garment-display">
              {featured.map(([name, alt]) => (
                <a
                  className="merch-card"
                  href={SHOP}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={name}
                >
                  <img src={FLAT_TEE} alt={alt} />
                  <span className="name">{name}</span>
                  <span className="price">From $22.99</span>
                </a>
              ))}
            </div>
          </div>

          <div className="fold-table panel">
            <h2 className="section-title">The Fold Table</h2>
            <div className="folded-stack">
              {["Premium blanks", "Fresh drops", "Fruity Puppy canon"].map((label) => (
                <div className="folded-item" key={label}>
                  <img src={FOLDED_TEE} alt="Folded Fruity Puppy tee" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
            <div className="table-label">New drops land here</div>
          </div>
        </section>

        <section className="center-display" aria-labelledby="erv-look-title">
          <div className="mannequin-stage panel">
            <img src={FLAT_TEE} alt="Featured Fruity Puppy merch look" />
            <div className="fit-label">
              <h2 id="erv-look-title">Shop Erv&apos;s Look</h2>
              <p>The fit changes. The attitude does not.</p>
            </div>
          </div>

          <div className="product-hero panel">
            <div className="hero-image">
              <img src={FLAT_TEE} alt="Featured Fruity Puppy tee" />
            </div>
            <div className="hero-copy">
              <h2>Fruity Puppy Essentials</h2>
              <p>Premium-first blanks, Fruity Puppy graphics, and rotating drops from the Outlet Mall.</p>
              <div className="hero-price">Tees from $22.99</div>
              <a href={SHOP} className="hero-cta" target="_blank" rel="noopener noreferrer">Browse Collection</a>
            </div>
          </div>

          <div className="size-strip" aria-label="Typical size range">
            <div className="size-tile panel"><span className="size-label">S–XL</span><span className="size-note">Core pricing</span></div>
            <div className="size-tile panel"><span className="size-label">2XL</span><span className="size-note">+ $1</span></div>
            <div className="size-tile panel"><span className="size-label">3XL</span><span className="size-note">+ $2</span></div>
            <div className="size-tile panel"><span className="size-label">4XL</span><span className="size-note">+ $3</span></div>
          </div>
        </section>

        <section className="display-zone" aria-labelledby="wall-title">
          <div className="wall-grid panel">
            <h2 id="wall-title" className="section-title merch-wall-title">Merch Wall</h2>
            {wall.map(([name, alt]) => (
              <a className="merch-card" href={SHOP} target="_blank" rel="noopener noreferrer" key={name}>
                <img src={FLAT_TEE} alt={alt} />
                <span className="name">{name}</span>
                <span className="price">From $22.99</span>
              </a>
            ))}
          </div>

          <div className="drop-note panel">
            <h3>Rotating Outlet Drops</h3>
            <p>This wall is ready for the live merch catalog as each product image and listing lands. Until then, it stays clean and honest—no fake stock counts or fake clearance inventory.</p>
          </div>
        </section>
      </div>

      <footer className="store-footer">
        <a href={SHOP} className="cta-btn primary" target="_blank" rel="noopener noreferrer">Shop All Merch</a>
        <a href="/" className="cta-btn secondary">Back to Fruity Puppy</a>
      </footer>
    </main>
  );
}
