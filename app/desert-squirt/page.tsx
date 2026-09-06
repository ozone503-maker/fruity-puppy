import HeroVideo from "../components/HeroVideo";
import { ASK_IPO_HREF, BLOG_HREF, PRIVACY_HREF, RETURNS_HREF, TERMS_HREF } from "../site-config";
import "./desert.css";

const faceJuice = "https://shop.fruitypuppy.com/products/thorny-toad-face-juice";
const moonTea = "https://shop.fruitypuppy.com/products/thorny-toad-moon-tea";

export default function Page() {
  return (
    <main className="ds">
      <header id="top">
        <a className="logo" href="/">
          FRUITY <b>PUPPY</b>
        </a>
        <nav>
          <a href="/our-team">Our Team</a>
          <a href="/our-dream">Our Dream</a>
          <a href="/our-cream">Our Cream</a>
          <a href="/thorny-toad">Face Juice</a>
          <a href="/desert-squirt">Desert Squirt</a>
          <a href="/moon-tea">Moon Tea</a>
          <a href="/lava-guava">LAVA-GUAVA</a>
          <a href="/fpx">FPX</a>
          <a href={BLOG_HREF}>Blog</a>
        </nav>
        <details className="mobileNav">
          <summary>Menu</summary>
          <div>
            <a href="/">Home</a>
            <a href="/thorny-toad">Face Juice</a>
            <a href="/desert-squirt">Desert Squirt</a>
            <a href="/moon-tea">Moon Tea</a>
            <a href={ASK_IPO_HREF}>Ask Ipo</a>
            <a href={BLOG_HREF}>Blog</a>
          </div>
        </details>
      </header>

      <section className="hero dsHero">
        <HeroVideo
          src="/images/hero/thorny-toad-hero.mp4"
          poster="/images/hero/thorny-toad-hero-poster.jpg"
          silent
          maxPlays={2}
        />
        <div className="heroCopy">
          <p className="tagline">Dry-climate botanical toner · Ruch territory</p>
          <h1>
            DESERT SQUIRT
            <br />
            <em>For skin that’s been parched.</em>
          </h1>
          <h2>
            Mineral-rich. Field-formulated. The Texas cousin in the Thorny Toad toner lineage —
            built for heat, wind, and thirsty skin.
          </h2>
          <div className="buttonRow heroButtons">
            <a className="button heroBuy" href={ASK_IPO_HREF}>
              Ask Ipo about Desert Squirt
            </a>
            <a className="button heroSample" href="#ds-story">
              Meet the dry-climate brew ↓
            </a>
          </div>
        </div>
      </section>

      <section className="dsIntro" id="ds-story">
        <p className="ey">Thorny Toad toner lineage</p>
        <h2>
          Face Juice for the day.
          <br />
          Moon Tea for the night.
          <br />
          <em>Desert Squirt for the drought.</em>
        </h2>
        <p>
          Desert Squirt is the dry-climate botanical toner in the Thorny Toad family — mineral-rich
          mist for skin that’s been cooked by sun, AC, altitude, or straight-up desert air. Ruch
          energy. No alcohol strip. Regulation, not punishment.
        </p>
      </section>

      <section className="dsGrid" aria-label="What Desert Squirt is for">
        <article>
          <h3>Parched surface</h3>
          <p>When skin feels tight, sandy, or wind-burned — mist before cream and let minerals settle.</p>
        </article>
        <article>
          <h3>Heat + friction days</h3>
          <p>Travel, work, and weather that pull moisture out. Desert Squirt is the reset spray.</p>
        </article>
        <article>
          <h3>Sister to Face Juice</h3>
          <p>Same Thorny Toad framework — hold, balance, defend — tuned for arid stress instead of island humidity.</p>
        </article>
      </section>

      <section className="dsLineage">
        <p className="ey" style={{ color: "#e8d2a8" }}>
          The toner family
        </p>
        <h2>Shop the active sisters while Desert Squirt returns to the fridge line.</h2>
        <div className="links">
          <a href="/thorny-toad">Thorny Toad Face Juice</a>
          <a href="/moon-tea">Moon Tea</a>
          <a href={faceJuice}>Shop Face Juice</a>
          <a href={moonTea}>Shop Moon Tea</a>
        </div>
      </section>

      <section className="dsCta">
        <h2>Want Desert Squirt back on the shelf?</h2>
        <a className="button" href={ASK_IPO_HREF}>
          Tell Ipo
        </a>
      </section>

      <footer>
        <a className="logo" href="/">
          FRUITY <b>PUPPY</b>
        </a>
        <p>Thorny Toad · Big Island + Rooster Island lineage</p>
        <div>
          <a href="/thorny-toad">Face Juice</a>
          <a href="/desert-squirt">Desert Squirt</a>
          <a href="/moon-tea">Moon Tea</a>
          <a href={BLOG_HREF}>Blog</a>
          <a href={ASK_IPO_HREF}>Ask Ipo</a>
          <a href={PRIVACY_HREF}>Privacy</a>
          <a href={TERMS_HREF}>Terms</a>
          <a href={RETURNS_HREF}>Returns</a>
        </div>
      </footer>
    </main>
  );
}
