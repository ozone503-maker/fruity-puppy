import HeroVideo from "../components/HeroVideo";
import AmbientScrollAudio from "../components/AmbientScrollAudio";
import { ASK_IPO_HREF, BLOG_HREF, PRIVACY_HREF, RETURNS_HREF, TERMS_HREF } from "../site-config";

const shop = "https://shop.fruitypuppy.com";

const sections = [
  {
    title: "When Original is not enough",
    body: "FPX takes the same fresh-fruit philosophy into a firmer cream with a deeper mint profile and more 92°F coconut oil. It was built for skin that lives hard: heat, sun, dry air, friction, and long days outside.",
  },
  {
    title: "Still fresh biological skincare",
    body: "FPX is not a shelf-stable lotion dressed up with a botanical story. Keep it refrigerated, use clean hands, and enjoy it cold.",
    image: "/images/process/open-cream.jpg",
    alt: "Open jar showing fresh Fruity Puppy cream",
  },
  {
    title: "Choose your Puppy",
    body: "Choose Original for everyday dry, sensitive, reactive, or sun-exposed skin. Choose FPX when you want a firmer texture, more mint, and a cream built for hotter, drier, high-stress conditions.",
    details: [
      ["Texture", "Firmer than Fruity Puppy Original."],
      ["Feel", "Cooling, rich, and protective."],
      ["Best fit", "Hot climates, outdoor work, dry conditions, and stressed skin."],
      ["Storage", "Refrigerate to protect the fresh botanical chemistry."],
    ] as [string, string][],
  },
];

export default function Page() {
  return (
    <main className="innerPage fpxPage">
      <header id="top">
        <a className="logo" href="/">
          FRUITY <b>PUPPY</b>
        </a>
        <nav>
          <a href="/our-team">Our Team</a>
          <a href="/our-dream">Our Dream</a>
          <a href="/our-cream">Our Cream</a>
          <a href="/our-home">Our Home</a>
          <a href="/safety-and-transparency">Safety</a>
          <a href="/lava-guava">LAVA-GUAVA</a>
          <a href="/thorny-toad">Thorny Toad</a>
          <a href="/moon-tea">Moon Tea</a>
          <a href="/fpx">FPX</a>
          <a href="/our-partners">Partners</a>
          <a href={BLOG_HREF}>Blog</a>
        </nav>
        <details className="mobileNav">
          <summary>Menu</summary>
          <div>
            <a href="/">Home</a>
            <a href="/our-team">Our Team</a>
            <a href="/our-dream">Our Dream</a>
            <a href="/our-cream">Our Cream</a>
            <a href="/our-home">Our Home</a>
            <a href="/safety-and-transparency">Safety</a>
            <a href="/lava-guava">LAVA-GUAVA</a>
            <a href="/thorny-toad">Thorny Toad Face Juice</a>
            <a href="/moon-tea">Moon Tea</a>
            <a href="/fpx">FPX</a>
            <a href="/our-partners">Our Partners</a>
            <a href={BLOG_HREF}>Blog</a>
          </div>
        </details>
      </header>

      <AmbientScrollAudio src="/audio/fpx-ambience.mp3" triggerSelector="#fpx-story" />

      <section className="hero">
        <HeroVideo
          src="/images/hero/home-hero.mp4"
          poster="/images/hero/home-hero-poster.jpg"
          silent
        />
        <div className="heroCopy">
          <p className="tagline">FRUITY PUPPY EXTREME · REFRIGERATED</p>
          <h1>
            FPX.
            <br />
            <em>Built for harder days.</em>
          </h1>
          <h2>
            The darker, firmer, deeper-mint sibling of Fruity Puppy Original—made for hotter, drier,
            higher-stress skin.
          </h2>
          <div className="buttonRow heroButtons">
            <a className="button pink heroBuy" href={shop}>
              Shop FPX
            </a>
            <a className="button heroSample" href="#fpx-story">
              Read the FPX story
            </a>
          </div>
        </div>
      </section>

      <section className="cartoonStrip" aria-label="Ipo in the kitchen cartoon strip">
        <video
          className="cartoonStripVideo"
          src="/images/hero/commercials/kitchen-ipo.mp4"
          poster="/images/hero/commercials/kitchen-ipo-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </section>

      <section className="storyStack" id="fpx-story">
        {sections.map((s) => (
          <article className={s.image ? "storyCard withImage" : "storyCard"} key={s.title}>
            {s.image && <img src={s.image} alt={s.alt || s.title} />}
            <div>
              <h2>{s.title}</h2>
              <p>{s.body}</p>
              {s.details && (
                <div className="detailList">
                  {s.details.map(([q, a]) => (
                    <details key={q}>
                      <summary>{q}</summary>
                      <p>{a}</p>
                    </details>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="innerCta">
        <h2>FPX</h2>
        <a className="button dark" href={shop}>
          Shop FPX
        </a>
      </section>

      <footer>
        <a className="logo" href="/">
          FRUITY <b>PUPPY</b>
        </a>
        <p>Made by hand on Big Island, Hawaiʻi.</p>
        <div>
          <a href="/our-team">Team</a>
          <a href="/our-dream">Dream</a>
          <a href="/our-cream">Cream</a>
          <a href="/our-home">Home</a>
          <a href="/safety-and-transparency">Safety</a>
          <a href="/our-partners">Partners</a>
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
