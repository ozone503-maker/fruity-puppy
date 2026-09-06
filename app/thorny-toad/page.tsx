"use client";

import { ASK_IPO_HREF, BLOG_HREF, PRIVACY_HREF, RETURNS_HREF, TERMS_HREF } from "../site-config";
import { useEffect, useState } from "react";
import HeroVideo from "../components/HeroVideo";
import AmbientScrollAudio from "../components/AmbientScrollAudio";
import "./thorny.css";

const shop = "https://shop.fruitypuppy.com/products/thorny-toad-face-juice";
const cdn = "https://shop.fruitypuppy.com/cdn/shop/files/";
const bottle =
  cdn +
  "rn-image_picker_lib_temp_bc3193ff-85ca-4322-9f2a-24ed22a01afb.png?v=1781659872&width=1400";
const plants = [
  [
    "Stickerbush Cane",
    "Tannins · Pore Tightening · Surface Grip",
    "Binds to surface proteins, tightens pores, and creates the formula’s grip.",
    "/images/thorny-toad/ingredients/stickerbush-cane.jpg",
  ],
  [
    "Green Tea",
    "EGCG Catechins · Antioxidant Defense",
    "Catechins intercept free-radical damage and broaden the tannin spectrum.",
    "/images/thorny-toad/ingredients/green-tea.jpg",
  ],
  [
    "Guava Leaf",
    "Quercetin · Flavonoids · Anti-Inflammatory",
    "Helps quiet histamine-driven reactions from a different biochemical angle.",
    "/images/thorny-toad/ingredients/guava-leaf.jpg",
  ],
  [
    "Lemon Peel",
    "Citric Acid · pH Alignment",
    "Whole peel organic acids help realign skin’s surface pH after disruption.",
    "/images/thorny-toad/ingredients/lemon-peel.jpg",
  ],
  [
    "Jungle Mint",
    "Rosmarinic Acid · Carvone · Activation",
    "Cold-extracted whole plant—not essential oil—activates on contact.",
    "/images/thorny-toad/ingredients/jungle-mint.jpg",
  ],
];

function Header() {
  return (
    <header>
      <a className="logo" href="/">
        FRUITY <b>PUPPY</b>
      </a>
      <nav>
        <a href="/our-team">Our Team</a>
        <a href="/our-dream">Our Dream</a>
        <a href="/our-cream">Our Cream</a>
        <a href="/lava-guava">LAVA-GUAVA</a>
        <a href="/moon-tea">Moon Tea</a>
        <a href="/fpx">FPX</a>
        <a href={BLOG_HREF}>Blog</a>
        <a className="navShop" href={shop}>
          Shop Face Juice
        </a>
      </nav>
      <details className="mobileNav">
        <summary>Menu</summary>
        <div>
          <a href="/">Home</a>
          <a href="/our-team">Our Team</a>
          <a href="/our-dream">Our Dream</a>
          <a href="/our-cream">Our Cream</a>
          <a href="/lava-guava">LAVA-GUAVA</a>
          <a href="/moon-tea">Moon Tea</a>
          <a href={BLOG_HREF}>Blog</a>
          <a href={shop}>Shop Face Juice</a>
        </div>
      </details>
    </header>
  );
}

const TENETS = [
  {
    n: "01",
    name: "Mucilage",
    hook: "Hold · Hydration · Stay",
    body: "Plant gel that keeps the mist on your face so the actives stay put instead of vanishing.",
  },
  {
    n: "02",
    name: "Acid",
    hook: "pH · Balance · Restoration",
    body: "Realigns surface pH after soap, sweat, and hard water shove it out of range.",
  },
  {
    n: "03",
    name: "Tannins",
    hook: "Structure · Defense · Tighten",
    body: "Grip and guardrails — tighten, defend, and work the surface without the alcohol trap.",
  },
  {
    n: "04",
    name: "Catalyst",
    hook: "Activate · Penetrate · Signal",
    body: "Wakes the stack on contact so mucilage, acid, and tannins actually do something.",
  },
];

function TenetsCarousel() {
  const [i, setI] = useState(0);
  const t = TENETS[i];
  return (
    <section className="tenets" data-r>
      <div className="tenetsHead">
        <p className="ey">ERV’s botanical toner framework</p>
        <h2>The Four Tenets</h2>
        <p className="tenetsLead">Regulation, not stripping — open each card.</p>
      </div>
      <div className="tenetCarousel" aria-roledescription="carousel" aria-label="Four Tenets">
        <button
          type="button"
          className="tenetNav tenetPrev"
          aria-label="Previous tenet"
          onClick={() => setI((x) => (x + TENETS.length - 1) % TENETS.length)}
        >
          ‹
        </button>
        <div className="tenetTrack" key={t.name}>
          <details className="tenetCard">
            <summary>
              <span className="tenetNum">{t.n}</span>
              <span className="tenetName">{t.name}</span>
              <span className="tenetHook">{t.hook}</span>
            </summary>
            <p>{t.body}</p>
          </details>
        </div>
        <button
          type="button"
          className="tenetNav tenetNext"
          aria-label="Next tenet"
          onClick={() => setI((x) => (x + 1) % TENETS.length)}
        >
          ›
        </button>
      </div>
      <div className="tenetDots" role="tablist" aria-label="Tenet slides">
        {TENETS.map((item, idx) => (
          <button
            key={item.name}
            type="button"
            className={idx === i ? "active" : ""}
            aria-label={item.name}
            aria-selected={idx === i}
            onClick={() => setI(idx)}
          />
        ))}
      </div>
    </section>
  );
}


export default function Page() {
  const [a, setA] = useState(0);
  useEffect(() => {
    const r = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("shown")),
      { threshold: 0.12 },
    );
    document.querySelectorAll("[data-r]").forEach((x) => r.observe(x));
    const p = new IntersectionObserver(
      (es) =>
        es.forEach((e) => e.isIntersecting && setA(Number((e.target as HTMLElement).dataset.p))),
      { rootMargin: "-35% 0px -45%" },
    );
    document.querySelectorAll("[data-p]").forEach((x) => p.observe(x));
    return () => {
      r.disconnect();
      p.disconnect();
    };
  }, []);

  return (
    <main className="tt thornyPage">
      <Header />
      <AmbientScrollAudio src="/audio/thorny-toad-ambience.mp3" triggerSelector="#science" />

      <section className="hero thornyHero">
        <HeroVideo
          src="/images/hero/thorny-toad-hero.mp4"
          poster="/images/hero/thorny-toad-hero-poster.jpg"
          silent
          maxPlays={2}
        />
        <div className="heroCopy">
          <p className="tagline">Rare plant intelligence for the human body</p>
          <h1>
            THORNY TOAD
            <br />
            <em>FACE JUICE</em>
          </h1>
          <h2>
            Five volcano plants. Four functions. A fresh-brewed botanical toner that balances pH,
            regulates oil, reduces visible redness, and tightens pores without stripping your skin.
          </h2>
          <div className="buttonRow heroButtons">
            <a className="button heroBuy" href={shop}>
              Get Face Juice — $29.99
            </a>
            <a className="button heroSample" href="#science">
              See how it works ↓
            </a>
          </div>
        </div>
      </section>

      <div className="ticker">
        <span>
          NO ALCOHOL ✦ FIVE VOLCANO PLANTS ✦ NO SYNTHETIC FRAGRANCE ✦ MADE ON BIG ISLAND ✦ NO ALCOHOL
          ✦ FIVE VOLCANO PLANTS ✦
        </span>
      </div>

      <section className="introT" id="science" data-r>
        <p className="ey">Regulation, not stripping</p>
        <h2>
          Your skin has a surface chemistry.
          <br />
          Most toners <em>disrupt it.</em>
        </h2>
        <p>
          Face Juice works with that chemistry. Mucilage holds it where you spray it. Acid aligns
          pH. Tannins tighten and defend. A botanical catalyst activates the system on contact.
        </p>
        <div className="stats">
          <b>
            5<span>volcano plants</span>
          </b>
          <b>
            4<span>scientific tenets</span>
          </b>
          <b>
            0<span>alcohol</span>
          </b>
          <b>
            0<span>synthetic anything</span>
          </b>
        </div>
      </section>



      <section className="thornyHarvest" aria-label="Guava leaf harvest">
        <div className="thornyHarvestIntro">
          <p className="ey">Picked that morning</p>
          <h2>
            Guava leaves.
            <br />
            <em>Still wet with island air.</em>
          </h2>
        </div>
        <div className="thornyHarvestVideoWrap">
          <video
            className="thornyHarvestVideo"
            src="/images/thorny-toad/guava-leaves-harvest.mp4"
            poster="/images/thorny-toad/guava-leaves-harvest-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          <p className="thornyHarvestCaption">FlashTown harvest · guava leaves</p>
        </div>
      </section>

      <section className="ervCelebrity" aria-label="Erv, celebrity Face Juice ritual">
        <div className="ervCelebrityIntro">
          <p className="ey">Rooster Island royalty</p>
          <h2>
            Erv doesn’t moisturize.
            <br />
            <em>He sprays.</em>
          </h2>
          <p>
            Paparazzi. Flashes. Wayfarers. One mist of Face Juice and the cane toad scientist keeps
            walking.
          </p>
        </div>
        <div className="ervCelebrityGrid">
          <figure>
            <img
              src="/images/thorny-toad/erv-celebrity-spray.png"
              alt="Erv the cane toad celebrity spraying Thorny Toad Face Juice amid paparazzi flashes"
            />
            <figcaption>The ritual</figcaption>
          </figure>
          <figure>
            <img
              src="/images/thorny-toad/erv-paparazzi-walk.png"
              alt="Erv walking through paparazzi after spraying Face Juice"
            />
            <figcaption>Then the walk</figcaption>
          </figure>
        </div>
      </section>

      <section className="plantStory">
        <div className="sticky">
          <p className="ey">Ingredient intelligence</p>
          <figure>
            {plants.map((plant, i) => (
              <img key={plant[0]} className={i === a ? "active" : ""} src={plant[3]} alt={plant[0]} />
            ))}
          </figure>
          <div className="meter">
            <i style={{ width: (a + 1) * 20 + "%" }} />
          </div>
          <small>0{a + 1} / 05</small>
        </div>
        <div className="steps">
          {plants.map((plant, i) => (
            <article key={plant[0]} data-p={i} data-r>
              <img className="stepBg" src={plant[3]} alt="" aria-hidden="true" />
              <div className="stepCopy">
                <span>0{i + 1}</span>
                <h2>{plant[0]}</h2>
                <h3>{plant[1]}</h3>
                <p>{plant[2]}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <TenetsCarousel />

      <section className="how">
        <div data-r>
          <p className="ey">Thirty seconds to balance</p>
          <h2>
            Cleanse.
            <br />
            Spray.
            <br />
            <em>Let it work.</em>
          </h2>
        </div>
        <ol>
          <li data-r>
            <b>01</b>
            <p>
              <strong>Start clean.</strong> Wash and pat dry.
            </p>
          </li>
          <li data-r>
            <b>02</b>
            <p>
              <strong>Spray.</strong> Use 2–3 sprays directly or on a cotton pad.
            </p>
          </li>
          <li data-r>
            <b>03</b>
            <p>
              <strong>Give it 30 seconds.</strong> Then moisturize if you use one.
            </p>
          </li>
        </ol>
      </section>

      <section className="finalT">
        <img src={bottle} alt="Thorny Toad Face Juice bottle" />
        <div data-r>
          <p className="ey">2 fl oz · 59 ml · keep refrigerated</p>
          <h2>
            Five plants.
            <br />
            Four functions.
            <br />
            <em>One balanced face.</em>
          </h2>
          <p>
            No alcohol. No artificial astringents. No synthetic fragrance. Handmade on Hawaiʻi
            Island.
          </p>
          <a className="buttonT light" href={shop}>
            Shop Face Juice — $29.99
          </a>
        </div>
      </section>


      <section className="thornyPond" aria-label="FlashTown pond">
        <video
          className="thornyPondVideo"
          src="/images/thorny-toad/flash-town-pond.mp4"
          poster="/images/thorny-toad/flash-town-pond-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <p className="thornyPondCaption">FlashTown pond</p>
      </section>

      <footer>
        <a className="logo" href="/">
          FRUITY <b>PUPPY</b>
        </a>
        <p>Fresh biological skincare from Big Island, Hawaiʻi.</p>
        <div>
          <a href="/our-team">Team</a>
          <a href="/our-dream">Dream</a>
          <a href="/our-cream">Cream</a>
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
