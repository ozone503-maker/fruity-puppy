import HeroVideo from "../components/HeroVideo";
import AmbientScrollAudio from "../components/AmbientScrollAudio";
import ProcessBeat from "../components/ProcessBeat";
import { ASK_IPO_HREF, BLOG_HREF, PRIVACY_HREF, RETURNS_HREF, TERMS_HREF } from "../site-config";

const shop = "https://shop.fruitypuppy.com";

const sections = [
  {
    title: "Brewed for after dark",
    body: "Moon Tea is the nighttime counterpart to Face Juice: a lightweight botanical infusion for freshly washed skin before cream. Mist it on, let the plants settle in, and follow with Fruity Puppy if your skin wants more.",
  },
  {
    title: "What is in the potion",
    body: "Six whole botanical ingredients—no anonymous fragrance blend hiding behind the curtain.",
    details: [
      ["Blackberry leaf", "A tannin-rich leaf that gives the tea structure."],
      ["Orange peel", "Whole citrus peel brings acids and aromatic plant compounds."],
      ["Green tea", "A familiar source of polyphenols and antioxidant support."],
      ["Spearmint", "Fresh leaf for a clean, cooling finish."],
      ["Cranberry hibiscus tender shoots", "Young red growth rich in protective pigments."],
      ["Filtered aloe pulp", "Fresh mucilage for slip, hydration, and softness."],
    ] as [string, string][],
  },
  {
    title: "How to use it",
    body: "Shake gently, mist onto clean skin at night, and let it absorb. Keep refrigerated. Follow with a small amount of Fruity Puppy Original or FPX when you want to seal it in.",
  },
];

export default function Page() {
  return (
    <main className="innerPage moonTeaPage">
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

      <AmbientScrollAudio src="/audio/moon-tea-ambience.mp3" triggerSelector="#moon-story" />

      <section className="hero moonTeaHero">
        <HeroVideo
          src="/images/hero/moon-tea-hero.mp4"
          poster="/images/hero/moon-tea-hero-poster.jpg"
          silent
          maxPlays={2}
        />
        <div className="heroCopy">
          <p className="tagline">NOCTURNAL POLISHING POTION</p>
          <h1>
            Moon Tea.
            <br />
            <em>After dark.</em>
          </h1>
          <h2>
            A fresh botanical toner brewed for the quiet work your skin does at night.
          </h2>
          <div className="buttonRow heroButtons">
            <a className="button moonTeaBuy heroBuy" href={shop}>
              Shop Moon Tea
            </a>
            <a className="button heroSample" href="#moon-story">
              Read the brew story
            </a>
          </div>
        </div>
      </section>

      <ProcessBeat
        src="/images/process/moon-tea/spearmint-harvest.mp4"
        poster="/images/process/moon-tea/spearmint-harvest-poster.jpg"
        caption="Harvesting spearmint · Moon Tea"
      />

      <section className="storyStack" id="moon-story">
        {sections.map((s) => (
          <article className="storyCard" key={s.title}>
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


      <section className="moonNightGallery" aria-label="FlashTown after dark">
        <div className="moonNightIntro">
          <p className="tagline">FlashTown after dark</p>
          <h2>Where Moon Tea gets its quiet.</h2>
        </div>
        <figure className="moonNightShot">
          <img src="/images/moon-tea/night-01-cabin-pond.jpg" alt="The FlashTown cabin glowing beside the pond at twilight" />
        </figure>
        <figure className="moonNightShot">
          <img src="/images/moon-tea/night-02-pond-ferns.jpg" alt="Ferns and pond lights at FlashTown after dusk" />
        </figure>
        <figure className="moonNightShot">
          <img src="/images/moon-tea/night-03-purple-sky.jpg" alt="Purple twilight sky over FlashTown with the moon rising" />
        </figure>
        <figure className="moonNightShot moonNightShotLast">
          <img src="/images/moon-tea/night-04-purple-lagoon.jpg" alt="Deep purple lagoon reflection at FlashTown" />
          <figcaption>Most purple · bottom of the night</figcaption>
        </figure>
      </section>

      <section className="innerCta">
        <h2>Moon Tea</h2>
        <a className="button dark" href={shop}>
          Shop Moon Tea
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
