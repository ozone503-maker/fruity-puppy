import HeroVideo from "../components/HeroVideo";
import AmbientScrollAudio from "../components/AmbientScrollAudio";
import ProcessBeat from "../components/ProcessBeat";
import { ASK_IPO_HREF, BLOG_HREF, PRIVACY_HREF, RETURNS_HREF, TERMS_HREF } from "../site-config";

const shop = "https://shop.fruitypuppy.com/products/fruity-puppy";

const sections = [
  {
    title: "We refused to embalm it.",
    body: "Shelf-stable skincare solves a logistics problem. We chose a different point on the spectrum. Harvest goes on ice. Fruit cells are ruptured while the chemistry is still alive. The cream lives in the refrigerator because freshness is a spectrum—and we would rather protect living plant material than cook it into something that can sit under fluorescent lights for eighteen months.",
    image: "/images/process/fruit-on-ice.jpg",
    alt: "Fresh tropical fruit on ice after harvest at FlashTown",
  },
  {
    title: "Forty-five percent real fruit.",
    body: "This is not a water lotion with a botanical whisper for the label. Fruity Puppy Original carries a major fresh botanical phase: the Big Five—lilikoi, papaya, cranberry hibiscus tender tips, ice cream bean, and spearmint—plus fresh aloe, held in a lipid/butter matrix of mango, shea, cocoa, and 92° coconut oil. The story is whole fruit in the jar, not extract dust on the marketing copy.",
    image: "/images/process/fresh-aloe.jpg",
    alt: "Fresh aloe prepared for Fruity Puppy Original",
  },
  {
    title: "A lipid matrix your skin recognizes.",
    body: "Plant butters and oils are not filler. They are structure. When the butters cool, they organize into a crystalline network that can hold fruit particulates, botanical waters, and antioxidants until body heat softens the lattice against skin. That architecture is formulation logic—how we carry freshness—not a clinical trial claiming superiority over every other cream on Earth.",
    image: "/images/process/lipid-batch.jpg",
    alt: "Lipid and butter batch prepared for Fruity Puppy cream",
  },
  {
    title: "What is established. What is suggested. What is ours.",
    body: "Cosmetic only. No disease-cure language. Story powers are not clinical claims. We speak in three registers on purpose: well-established skin-barrier and antioxidant biochemistry; strongly suggested freshness advantages grounded in enzyme and oxidation science; and our own hypothesis about this specific cold-processed fruit-and-butter matrix. Marketing lines like a rich antioxidant network belong to the story of the complete formula—not an immutable compound inventory carved in stone.",
    details: [
      [
        "Established",
        "Skin’s outer barrier depends on organized lipids. Heat and time degrade enzymes such as papain. Free-radical damage to skin is basic biochemistry. Occlusive and emollient lipids help reduce moisture loss—those parts are well established.",
      ],
      [
        "Suggested",
        "Cold handling and refrigeration protect heat-sensitive botanical chemistry better than hot, long-shelf processing. That advantage is strongly suggested by enzyme and oxidation science, even when a head-to-head clinical study of this exact jar does not yet exist.",
      ],
      [
        "Hypothesis",
        "That this particular crystalline fruit-and-butter matrix delivers fresh botanical material more intelligently than conventional extract-in-water lotions is our formulation claim. Plausible. Passionate. Not independently proven as medical fact.",
      ],
      [
        "How to keep it",
        "Refrigerate when you can. Use clean hands. Keep the lid closed. Think yogurt more than drugstore lotion. Face and body. Patch test if your skin is reactive. Verify live Shopify for current size and price.",
      ],
    ] as [string, string][],
  },
  {
    title: "Freshness is a spectrum.",
    body: "A morning papaya, a dried slice, a powder, an extract, and an isolated enzyme can all begin as papaya and still be materially different things. Fruity Puppy Original chooses the cold, refrigerated end of that spectrum—small batches, ice, lipid carrier, and a cream that asks you to feed skin like something alive.",
    image: "/images/process/cream-texture.jpg",
    alt: "Close-up of the actual Fruity Puppy Original cream texture",
  },
];

export default function Page() {
  return (
    <main className="innerPage ourCreamPage">
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

      <AmbientScrollAudio src="/audio/our-cream-ambience.mp3" triggerSelector="#cream-story" />

      <section className="hero ourCreamHero">
        <HeroVideo
          src="/images/hero/our-cream-hero.mp4"
          poster="/images/hero/our-cream-hero-poster.jpg"
          silent
        />
        <div className="heroCopy">
          <p className="tagline">FRUITY PUPPY ORIGINAL · REFRIGERATED</p>
          <h1>
            Our Cream.
            <br />
            <em>Still alive.</em>
          </h1>
          <h2>
            Skin eats. Feed it well. About 45% real Hawaiian tropical fruit in a crystalline lipid
            matrix—made cold, kept cold, never embalmed for the shelf.
          </h2>
          <div className="buttonRow heroButtons">
            <a className="button pink heroBuy" href={shop}>
              Buy Now
            </a>
            <a className="button heroSample" href="#cream-story">
              Read the cream story
            </a>
          </div>
        </div>
      </section>

      <section className="cartoonStrip" aria-label="Fruity Puppy cream commercial">
        <video
          className="cartoonStripVideo"
          src="/images/hero/commercials/our-cream-commercial.mp4"
          poster="/images/hero/commercials/our-cream-commercial-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </section>

      <section className="cartoonStrip" aria-label="Harvesting aloe at FlashTown">
        <video
          className="cartoonStripVideo"
          src="/images/hero/commercials/aloe-harvest.mp4"
          poster="/images/hero/commercials/aloe-harvest-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </section>

      <ProcessBeat src="/images/process/beats/beat-02.mp4" poster="/images/process/beats/beat-02-poster.jpg" />

      <section className="storyStack" id="cream-story">
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
        <h2>Our Cream</h2>
        <a className="button dark" href={shop}>
          Shop Fruity Puppy Original
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
