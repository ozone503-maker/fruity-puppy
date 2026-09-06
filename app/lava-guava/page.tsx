import HeroVideo from "../components/HeroVideo";
import AmbientScrollAudio from "../components/AmbientScrollAudio";
import ProcessBeat from "../components/ProcessBeat";
import { ASK_IPO_HREF, BLOG_HREF, PRIVACY_HREF, RETURNS_HREF, TERMS_HREF } from "../site-config";

const shop = "https://shop.fruitypuppy.com";

const botanicals = [
  ["LAVA-GUAVA leaf", "The tannin-rich backbone, harvested from the invasive guava that muscles through Hawaiʻi Island lava beds."],
  ["Stickerbush shoots", "Tender new growth gathered by hand for its concentrated plant chemistry."],
  ["Ti leaf", "A famously resilient island leaf with a long relationship to wrapping and protection."],
  ["Papaya leaf", "Whole-leaf papaya chemistry, extending the formula beyond the fruit."],
  ["Cranberry hibiscus", "Deep-red leaves carrying a dense network of plant pigments."],
  ["Wild spearmint", "Fresh whole leaf—never essential oil—for a clean green edge."],
  ["Ginger leaf", "Aromatic tropical leaf that completes the seven-plant extraction."],
];

export default function LavaGuava() {
  return (
    <main className="lavaPage">
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
          <a href="/thorny-toad">Thorny Toad</a>
          <a href="/moon-tea">Moon Tea</a>
          <a href="/fpx">FPX</a>
          <a href="/our-partners">Partners</a>
          <a href={BLOG_HREF}>Blog</a>
          <a className="navShop" href={shop}>
            Shop
          </a>
        </nav>
        <details className="mobileNav">
          <summary>Menu</summary>
          <div>
            <a href="/">Home</a>
            <a href="/our-team">Our Team</a>
            <a href="/our-cream">Our Cream</a>
            <a href="/our-home">Our Home</a>
            <a href="/safety-and-transparency">Safety</a>
            <a href="/thorny-toad">Thorny Toad</a>
            <a href="/moon-tea">Moon Tea</a>
            <a href="/fpx">FPX</a>
            <a href={ASK_IPO_HREF}>Ask Ipo</a>
            <a href={shop}>Shop</a>
          </div>
        </details>
      </header>

      <AmbientScrollAudio src="/audio/lava-guava-ambience.mp3" triggerSelector="#lava-story" />

      <section className="hero lavaHero">
        <HeroVideo
          src="/images/hero/our-cream-hero.mp4"
          poster="/images/hero/our-cream-hero-poster.jpg"
          silent
        />
        <div className="heroCopy">
          <p className="tagline">Meet your match, humidity</p>
          <h1>
            THE JUNGLE
            <br />
            <em>DEFUNKOLATOR.</em>
          </h1>
          <h2>
            When heat, sweat, moisture, and friction team up to create unrelenting jungle funk, reach
            for LAVA-GUAVA BOMB BALM.
          </h2>
          <div className="buttonRow heroButtons">
            <a className="button heroBuy" href={shop}>
              Get the bomb balm
            </a>
            <a className="button heroSample" href="#lava-story">
              Meet Relentless Jungle Funk ↓
            </a>
          </div>
        </div>
      </section>

      

      <section className="problem" id="lava-story">
        <div>
          <p className="lavaEyebrow">The problem</p>
          <h2>
            Heat happens.
            <br />
            Friction happens.
            <br />
            <em>Funk happens.</em>
          </h2>
        </div>
        <div className="problemCopy">
          <p>
            Jungle weather does not care about your skincare routine. It settles into folds and
            creases. It turns seams, sweat, long workdays, and hard miles into a sticky, rubbed,
            relentlessly uncomfortable situation.
          </p>
          <p>
            <strong>Ordinary moisturizer is not built for that fight.</strong> LAVA-GUAVA BOMB BALM
            is a firm, concentrated, shea-free balm made for the parts of real bodies that work, rub,
            sweat, and refuse to pose for skincare commercials.
          </p>
        </div>
      </section>

      <section className="cartoonStrip" aria-label="Relentless Jungle Funk fire guy cartoon strip">
        <video
          className="cartoonStripVideo"
          src="/images/lava-guava/fire-guy.mp4"
          poster="/images/lava-guava/fire-guy-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </section>

      <section className="defunk">
        <div className="defunkPhoto">
          <img src="/images/lava-guava/open-balm.webp" alt="Fresh open jars of LAVA-GUAVA BOMB BALM" />
        </div>
        <div className="defunkCopy">
          <p className="lavaEyebrow">The response</p>
          <h2>Drop the balm.</h2>
          <p>
            Warm a small amount between your fingertips and press it onto clean, dry external skin.
            The mango, deodorized cocoa, and 92° coconut oil base softens with body heat, spreads
            where you need it, and leaves a substantial conditioning layer behind.
          </p>
          <div className="baseLine">
            <b>Firm in the jar.</b>
            <b>Softens on contact.</b>
            <b>Stays where you put it.</b>
          </div>
          <a className="lavaButton" href={shop}>
            Shop LAVA-GUAVA BOMB BALM
          </a>
        </div>
      </section>

      <ProcessBeat src="/images/process/beats/beat-07.mp4" poster="/images/process/beats/beat-07-poster.jpg" />

      <section className="funkStrip" aria-label="Places where jungle funk appears">
        <span>Thighs</span>
        <span>Feet</span>
        <span>Under folds</span>
        <span>Working hands</span>
        <span>Rubbing seams</span>
        <span>Anywhere funk gets ideas</span>
      </section>

      <section className="lavaMovie" id="movie">
        <div>
          <p className="lavaEyebrow">An enemy with a name</p>
          <h2>
            Relentless
            <br />
            Jungle Funk.
          </h2>
          <p>
            It follows Ipo and Erv from the farmers market into the jungle. Watch the official
            LAVA-GUAVA BOMB BALM story.
          </p>
        </div>
        <video
          controls
          playsInline
          preload="none"
          poster="/images/lava-guava/relentless-poster.webp"
        >
          <source src="/images/lava-guava/relentless-jungle-funk.mp4" type="video/mp4" />
          Your browser does not support video.
        </video>
      </section>

      <section className="nameStory">
        <div className="nameStoryCopy">
          <p className="lavaEyebrow">The plant behind the name</p>
          <h2>LAVA-GUAVA.</h2>
          <div className="nameStoryGrid">
            <p>
              <strong>
                LAVA-GUAVA is our proprietary name for the invasive guava that grows through Hawaiʻi
                Island lava beds.
              </strong>{" "}
              It pushes through hard black earth with unreasonable determination.
            </p>
            <p>
              We harvest its leaves for the botanical backbone of LAVA-GUAVA BOMB BALM. The name
              comes from the land, the plant, and a formula built to survive actual jungle life.
            </p>
          </div>
        </div>
        <section className="placeStrip" aria-label="Kīlauea at night from downhill">
          <video
            className="placeStripVideo"
            src="/images/our-home/kilauea-night.mp4"
            poster="/images/our-home/kilauea-night-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          <p className="placeStripCaption">Kīlauea at night · fifteen miles uphill from FLASHTOWN</p>
        </section>
      </section>

      <section className="botanicalSection">
        <div className="botanicalHeading">
          <p className="lavaEyebrow">Seven-plant jungle extraction</p>
          <h2>
            The crew
            <br />
            behind the bomb.
          </h2>
          <p>Whole leaves and tender shoots, gathered where the formula was invented.</p>
          <img
            src="/images/lava-guava/guava-growth.webp"
            alt="Fresh red and green LAVA-GUAVA growth at FlashTown"
          />
        </div>
        <div className="botanicalList">
          {botanicals.map(([name, body]) => (
            <details key={name}>
              <summary>{name}</summary>
              <p>{body}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="realWork">
        <figure>
          <img
            src="/images/lava-guava/stickerbush-harvest.webp"
            alt="Harvesting stickerbush shoots by hand"
          />
          <figcaption>Harvested at FlashTown</figcaption>
        </figure>
        <figure>
          <img src="/images/lava-guava/fresh-leaves.webp" alt="Fresh leaves gathered for the balm" />
          <figcaption>Whole plants, freshly gathered</figcaption>
        </figure>
        <figure>
          <img
            src="/images/lava-guava/finished-batch.webp"
            alt="Finished handmade batch of LAVA-GUAVA BOMB BALM"
          />
          <figcaption>Made in small jungle batches</figcaption>
        </figure>
      </section>

      <section className="finalBomb">
        <img src="/images/lava-guava/lava-guava-circle.png" alt="LAVA-GUAVA BOMB BALM artwork" />
        <div>
          <p className="lavaEyebrow">Unrelenting jungle funk?</p>
          <h2>Defunkolate it.</h2>
          <p>
            Two ounces of concentrated, shea-free, seven-botanical bomb balm. Made by jungle people
            doing jungle things on Hawaiʻi Island.
          </p>
          <a className="lavaButton" href={shop}>
            Get LAVA-GUAVA BOMB BALM
          </a>
        </div>
      </section>

      <section className="lavaFaq">
        <div>
          <p className="lavaEyebrow">Field notes</p>
          <h2>
            Use a little.
            <br />
            Go a long way.
          </h2>
        </div>
        <div className="lavaFaqList">
          <details>
            <summary>How do I use it?</summary>
            <p>
              Start with a very small amount on clean, dry external skin. Warm it between your
              fingertips, press it where heat and friction have been doing the most, and add more
              only if needed.
            </p>
          </details>
          <details>
            <summary>Why is the texture so firm?</summary>
            <p>
              The mango, deodorized cocoa, and 92° coconut oil base is designed to soften with body
              heat and stay where you put it.
            </p>
          </details>
          <details>
            <summary>Does it contain shea or fragrance?</summary>
            <p>No shea, no essential oils, and no synthetic fragrance.</p>
          </details>
          <details>
            <summary>Where is it made?</summary>
            <p>
              In a cabin in the jungle on a volcano at FlashTown, our farm and animal sanctuary on
              Hawaiʻi Island.
            </p>
          </details>
        </div>
      </section>

      <footer>
        <a className="logo" href="/">
          FRUITY <b>PUPPY</b>
        </a>
        <p>Made by hand on Big Island, Hawaiʻi.</p>
        <div>
          <a href="/our-team">Team</a>
          <a href="/our-cream">Cream</a>
          <a href="/our-home">Our Home</a>
          <a href="/safety-and-transparency">Safety</a>
          <a href={ASK_IPO_HREF}>Ask Ipo</a>
          <a href={PRIVACY_HREF}>Privacy</a>
          <a href={TERMS_HREF}>Terms</a>
          <a href={RETURNS_HREF}>Returns</a>
          <a href={shop}>Shop</a>
        </div>
      </footer>
    </main>
  );
}
