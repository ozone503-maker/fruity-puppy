import Image from "next/image";
import type { Metadata } from "next";
import AmbientScrollAudio from "../components/AmbientScrollAudio";
import { ASK_IPO_HREF, BLOG_HREF, PRIVACY_HREF, RETURNS_HREF, TERMS_HREF } from "../site-config";

export const metadata: Metadata = {
  title: "FPX | Fruity Puppy Extra Strength with Starfruit",
  description:
    "FPX begins with Fruity Puppy Original, then increases the papaya and adds starfruit for Fruity Puppy’s strongest exfoliating formula.",
};

const shop = "https://shop.fruitypuppy.com";

const powerStack = [
  {
    number: "01",
    ingredient: "More papaya",
    role: "More enzymatic power",
    body: "FPX increases the papaya in the Original formula. That means a larger share of fresh papaya material and its naturally occurring enzymes working against dull, stubborn dead surface buildup.",
  },
  {
    number: "02",
    ingredient: "Starfruit",
    role: "An added acid layer",
    body: "Starfruit brings a bright natural fruit-acid profile that Original does not contain. It works alongside papaya instead of replacing it, giving FPX another route into the same dead surface material.",
  },
  {
    number: "03",
    ingredient: "The Original foundation",
    role: "Fresh fruit inside a lipid matrix",
    body: "The stronger fruit phase still lives inside Fruity Puppy’s plant-butter matrix. FPX is not a harsh scrub or an unrelated acid product. It is the complete Fruity Puppy idea pushed further.",
  },
];

function Header() {
  return (
    <header id="top">
      <a className="logo" href="/">FRUITY <b>PUPPY</b></a>
      <nav>
        <a href="/our-team">Our Team</a><a href="/our-dream">Our Dream</a><a href="/our-cream">Our Cream</a><a href="/our-home">Our Home</a><a href="/safety-and-transparency">Safety</a><a href="/lava-guava">LAVA-GUAVA</a><a href="/thorny-toad">Thorny Toad</a><a href="/moon-tea">Moon Tea</a><a href="/fpx">FPX</a><a href="/our-partners">Partners</a><a href={BLOG_HREF}>Blog</a>
      </nav>
      <details className="mobileNav">
        <summary>Menu</summary>
        <div>
          <a href="/">Home</a><a href="/our-team">Our Team</a><a href="/our-dream">Our Dream</a><a href="/our-cream">Our Cream</a><a href="/our-home">Our Home</a><a href="/safety-and-transparency">Safety</a><a href="/lava-guava">LAVA-GUAVA</a><a href="/thorny-toad">Thorny Toad Face Juice</a><a href="/moon-tea">Moon Tea</a><a href="/fpx">FPX</a><a href="/our-partners">Our Partners</a><a href={BLOG_HREF}>Blog</a>
        </div>
      </details>
    </header>
  );
}

export default function Page() {
  return (
    <main className="fpxPage">
      <Header />
      <AmbientScrollAudio src="/audio/fpx-ambience.mp3" triggerSelector="#fpx-story" />

      <section className="fpxLaunch">
        <div className="fpxLaunchCopy">
          <p className="fpxEyebrow">FRUITY PUPPY EXTREME · WITH STARFRUIT</p>
          <h1>ORIGINAL.<br /><em>AMPLIFIED.</em></h1>
          <p className="fpxLead">
            The complete Fruity Puppy foundation—made stronger with more papaya and the addition of
            starfruit for our maximum exfoliating power and dead surface skin removal.
          </p>
          <div className="fpxActions">
            <a className="button fpxPrimary" href={shop}>Shop FPX</a>
            <a className="fpxTextLink" href="#fpx-story">See what changed ↓</a>
          </div>
          <p className="fpxWarning">EXTRA STRENGTH · NOT FOR SENSITIVE SKIN</p>
        </div>
        <div className="fpxHeroMedia">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/hero/fpx-hero-poster.jpg"
            aria-label="Fresh FPX cream being mixed"
          >
            <source src="/images/hero/fpx-hero.mp4" type="video/mp4" />
          </video>
          <span>FRESH FPX · MIXED ON HAWAIʻI ISLAND</span>
        </div>
      </section>

      <section className="fpxDefinition" id="fpx-story">
        <p className="fpxEyebrow">NOT A SIBLING FORMULA</p>
        <h2>FPX is Fruity Puppy<br />with the power turned up.</h2>
        <p>
          FPX does not leave Fruity Puppy Original behind. It starts with the same whole-fruit,
          fresh-biological-skincare philosophy and the same nourishing lipid foundation. Then it
          increases the papaya and introduces starfruit to attack dead surface buildup with more
          enzymatic and fruit-acid force.
        </p>
        <p className="fpxBigLine">Same invention. Stronger recipe. A different assignment.</p>
      </section>

      <section className="fpxComparison" aria-labelledby="fpx-comparison-title">
        <div className="fpxComparisonIntro">
          <p className="fpxEyebrow">CHOOSE THE POWER LEVEL</p>
          <h2 id="fpx-comparison-title">Original maintains.<br /><em>FPX resurfaces.</em></h2>
        </div>
        <div className="fpxCompareCards">
          <article className="originalCard">
            <Image src="/images/fpx/when-original-isnt-enough.jpg" alt="Fruity Puppy Original crossed out to signal the move to FPX" width={935} height={912} />
            <div>
              <span>FRUITY PUPPY ORIGINAL</span>
              <h3>Balanced everyday skin nutrition.</h3>
              <p>Fresh whole fruit, antioxidants, enzymes, and plant lipids working together as the complete daily formula.</p>
              <ul><li>Balanced papaya level</li><li>Everyday moisture and nourishment</li><li>The original full-spectrum formula</li></ul>
            </div>
          </article>
          <article className="extremeCard">
            <span>FPX · EXTRA STRENGTH</span>
            <h3>The exfoliating power version.</h3>
            <p>Original’s foundation with more papaya and added starfruit for the strongest dead-surface-skin removal Fruity Puppy makes.</p>
            <ul><li>Increased papaya</li><li>Starfruit added</li><li>Maximum Fruity Puppy exfoliation</li></ul>
          </article>
        </div>
      </section>

      <section className="fpxStarfruit">
        <figure>
          <Image src="/images/fpx/starfruit-harvest.jpg" alt="A real basket of harvested starfruit for FPX" width={1080} height={814} />
          <figcaption>REAL STARFRUIT · HARVESTED FOR FPX</figcaption>
        </figure>
        <div>
          <p className="fpxEyebrow">THE UPGRADE INGREDIENT</p>
          <h2>Why starfruit?</h2>
          <p>
            Papaya already gives Fruity Puppy an enzymatic relationship with dead surface skin.
            FPX increases that papaya, then adds the naturally tart acid profile of starfruit. The
            two fruits approach stubborn buildup differently—and that combined action is the point.
          </p>
          <blockquote>More papaya loosens. Starfruit adds acid power. FPX takes it further.</blockquote>
        </div>
      </section>

      <section className="fpxPower" aria-labelledby="power-stack-title">
        <div className="fpxPowerHead">
          <p className="fpxEyebrow">THE POWER STACK</p>
          <h2 id="power-stack-title">Three layers.<br />One stronger Puppy.</h2>
        </div>
        <div className="fpxPowerCards">
          {powerStack.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span><p>{item.role}</p><h3>{item.ingredient}</h3>
              <div><p>{item.body}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="fpxMechanism">
        <div>
          <p className="fpxEyebrow">WHAT “STRONGER” MEANS</p>
          <h2>Dead skin does not need another pep talk.</h2>
        </div>
        <div className="fpxMechanismSteps">
          <article><b>01</b><h3>Loosen</h3><p>Fresh papaya enzymes help loosen the protein-rich material holding dull dead cells at the surface.</p></article>
          <article><b>02</b><h3>Release</h3><p>Starfruit adds natural fruit acids that support the release of stubborn surface buildup.</p></article>
          <article><b>03</b><h3>Remove</h3><p>As spent surface material lifts away, skin feels smoother and looks clearer—without turning FPX into a gritty scrub.</p></article>
        </div>
      </section>

      <section className="fpxCollaboration">
        <Image src="/images/fpx/humans-and-robots-make-puppy.png" alt="A human and robot working together on the stronger FPX formula" width={240} height={135} />
        <div>
          <p className="fpxEyebrow">PLANT × HUMAN × ARTIFICIAL INTELLIGENCE</p>
          <h2>The recipe evolved because the questions got harder.</h2>
          <p>
            Humans grew and handled the fruit. Artificial intelligence helped compare the chemistry.
            The plants supplied the actual power. FPX is what happened when the team stopped asking
            whether Original worked—and started asking how much further the same idea could go.
          </p>
        </div>
      </section>

      <section className="fpxUse">
        <div><p className="fpxEyebrow">EXTRA STRENGTH MEANS EXTRA RESPECT</p><h2>Use less.<br />Pay attention.</h2></div>
        <div className="fpxUseCopy">
          <p>Apply a small amount to clean, dry external skin. Let the formula do the work—do not add aggressive scrubbing.</p>
          <ul>
            <li>Patch test before wider use.</li><li>Start less frequently than Fruity Puppy Original.</li><li>Do not use on sensitive, broken, or already irritated skin.</li><li>Avoid the eye area and stop if irritation develops.</li><li>Keep refrigerated to protect the fresh fruit chemistry.</li>
          </ul>
        </div>
      </section>

      <section className="fpxCta">
        <p className="fpxEyebrow">WHEN ORIGINAL IS NOT ENOUGH</p>
        <h2>Turn up the fruit.</h2>
        <p>More papaya. Added starfruit. Maximum Fruity Puppy exfoliation.</p>
        <a className="button fpxPrimary" href={shop}>Shop FPX</a>
      </section>

      <footer>
        <a className="logo" href="/">FRUITY <b>PUPPY</b></a><p>Made by hand on Big Island, Hawaiʻi.</p>
        <div><a href="/our-team">Team</a><a href="/our-dream">Dream</a><a href="/our-cream">Cream</a><a href="/our-home">Home</a><a href="/safety-and-transparency">Safety</a><a href="/our-partners">Partners</a><a href={BLOG_HREF}>Blog</a><a href={ASK_IPO_HREF}>Ask Ipo</a><a href={PRIVACY_HREF}>Privacy</a><a href={TERMS_HREF}>Terms</a><a href={RETURNS_HREF}>Returns</a></div>
      </footer>
    </main>
  );
}
