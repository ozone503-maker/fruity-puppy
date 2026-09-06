"use client";

import { useEffect, useState } from "react";
import HeroVideo from "../components/HeroVideo";
import AmbientScrollAudio from "../components/AmbientScrollAudio";
import ProcessBeat from "../components/ProcessBeat";
import { ASK_IPO_HREF, BLOG_HREF, PRIVACY_HREF, RETURNS_HREF, TERMS_HREF } from "../site-config";

const shop = "https://shop.fruitypuppy.com/products/thorny-toad-moon-tea";

const plants = [
  [
    "Blackberry leaf",
    "Tannins · Structure",
    "A tannin-rich leaf that gives the tea its grip and quiet structure.",
    "/images/moon-tea/ingredients/blackberry-leaf.jpg",
  ],
  [
    "Orange peel",
    "Acids · Aromatics",
    "Whole citrus peel brings acids and aromatic plant compounds.",
    "/images/moon-tea/ingredients/orange-peel.jpg",
  ],
  [
    "Green tea",
    "Polyphenols · Defense",
    "A familiar source of polyphenols and antioxidant support.",
    "/images/moon-tea/ingredients/green-tea.jpg",
  ],
  [
    "Spearmint",
    "Cool · Finish",
    "Fresh leaf for a clean, cooling finish — never anonymous fragrance oil.",
    "/images/moon-tea/ingredients/spearmint.jpg",
  ],
  [
    "Cranberry hibiscus shoots",
    "Pigments · Tenderness",
    "Young red growth rich in protective pigments.",
    "/images/moon-tea/ingredients/cranberry-hibiscus-shoots.jpg",
  ],
  [
    "Filtered aloe pulp",
    "Mucilage · Softness",
    "Fresh mucilage for slip, hydration, and softness.",
    "/images/moon-tea/ingredients/aloe.jpg",
  ],
];

export default function Page() {
  const [a, setA] = useState(0);
  useEffect(() => {
    const p = new IntersectionObserver(
      (es) =>
        es.forEach((e) => e.isIntersecting && setA(Number((e.target as HTMLElement).dataset.p))),
      { rootMargin: "-35% 0px -45%" },
    );
    document.querySelectorAll("[data-p]").forEach((x) => p.observe(x));
    return () => p.disconnect();
  }, []);

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
          <a href="/thorny-toad">Face Juice</a>
          <a href="/desert-squirt">Desert Squirt</a>
          <a href="/moon-tea">Moon Tea</a>
          <a href="/fpx">FPX</a>
          <a href="/our-partners">Partners</a>
          <a href={BLOG_HREF}>Blog</a>
        </nav>
        <details className="mobileNav">
          <summary>Menu</summary>
          <div>
            <a href="/">Home</a>
            <a href="/thorny-toad">Face Juice</a>
            <a href="/desert-squirt">Desert Squirt</a>
            <a href="/moon-tea">Moon Tea</a>
            <a href="/fpx">FPX</a>
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
          <h2>A fresh botanical toner brewed for the quiet work your skin does at night.</h2>
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
        <article className="storyCard">
          <div>
            <h2>Brewed for after dark</h2>
            <p>
              Moon Tea is the nighttime counterpart to Face Juice: a lightweight botanical infusion
              for freshly washed skin before cream. Mist it on, let the plants settle in, and follow
              with Fruity Puppy if your skin wants more.
            </p>
          </div>
        </article>
      </section>

      <section className="moonPlantStory" aria-label="Moon Tea ingredients">
        <div className="moonSticky">
          <p className="moonEy">What is in the potion</p>
          <figure>
            {plants.map((plant, i) => (
              <img key={plant[0]} className={i === a ? "active" : ""} src={plant[3]} alt={plant[0]} />
            ))}
          </figure>
          <div className="moonMeter">
            <i style={{ width: ((a + 1) / plants.length) * 100 + "%" }} />
          </div>
          <small>
            0{a + 1} / 0{plants.length}
          </small>
        </div>
        <div className="moonSteps">
          {plants.map((plant, i) => (
            <article key={plant[0]} data-p={i}>
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

      <section className="storyStack">
        <article className="storyCard">
          <div>
            <h2>How to use it</h2>
            <p>
              Shake gently, mist onto clean skin at night, and let it absorb. Keep refrigerated.
              Follow with a small amount of Fruity Puppy Original or FPX when you want to seal it in.
            </p>
          </div>
        </article>
      </section>

      <section className="moonNightGallery" aria-label="FlashTown after dark">
        <div className="moonNightIntro">
          <p className="tagline">FlashTown after dark</p>
          <h2>Where Moon Tea gets its quiet.</h2>
        </div>
        <figure className="moonNightShot">
          <img
            src="/images/moon-tea/night-01-cabin-pond.jpg"
            alt="The FlashTown cabin glowing beside the pond at twilight"
          />
        </figure>
        <figure className="moonNightShot">
          <img
            src="/images/moon-tea/night-02-pond-ferns.jpg"
            alt="Ferns and pond lights at FlashTown after dusk"
          />
        </figure>
        <figure className="moonNightShot">
          <img
            src="/images/moon-tea/night-03-purple-sky.jpg"
            alt="Purple twilight sky over FlashTown with the moon rising"
          />
        </figure>
        <figure className="moonNightShot moonNightShotLast">
          <img
            src="/images/moon-tea/night-04-purple-lagoon.jpg"
            alt="Deep purple lagoon reflection at FlashTown"
          />
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
