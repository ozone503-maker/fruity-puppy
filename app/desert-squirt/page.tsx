"use client";

import { useEffect, useState } from "react";
import HeroVideo from "../components/HeroVideo";
import { ASK_IPO_HREF, BLOG_HREF, PRIVACY_HREF, RETURNS_HREF, TERMS_HREF } from "../site-config";
import "./desert.css";

const faceJuice = "https://shop.fruitypuppy.com/products/thorny-toad-face-juice";
const moonTea = "https://shop.fruitypuppy.com/products/thorny-toad-moon-tea";

// Placeholder botanicals — swap photos when Jessie drops Texas ingredient stills.
const plants = [
  [
    "Southwest field botanical",
    "Hold · Mucilage",
    "Jar stand-in for now. Your Southwest ingredient photo lands here.",
    "/images/desert-squirt/ingredients/jar-green.jpg",
  ],
  [
    "Southwest field botanical",
    "pH · Acid",
    "Jar stand-in for now. Your Southwest ingredient photo lands here.",
    "/images/desert-squirt/ingredients/jar-gold.jpg",
  ],
  [
    "Southwest field botanical",
    "Tannins · Defense",
    "Jar stand-in for now. Your Southwest ingredient photo lands here.",
    "/images/desert-squirt/ingredients/jar-red-leaf.jpg",
  ],
  [
    "Southwest field botanical",
    "Catalyst · Signal",
    "Jar stand-in for now. Your Southwest ingredient photo lands here.",
    "/images/desert-squirt/ingredients/jar-amber-field.jpg",
  ],
];

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
          src="/images/hero/desert-squirt-hero.mp4"
          poster="/images/hero/desert-squirt-hero-poster.jpg"
          silent
          maxPlays={2}
        />
        <div className="heroCopy">
          <p className="tagline">Loved in Texas · Arizona · New Mexico</p>
          <h1>
            DESERT SQUIRT
            <br />
            <em>For skin that’s been parched.</em>
          </h1>
          <h2>
            Mineral-rich. Field-formulated. The Southwest cousin in the Thorny Toad toner lineage —
            built for heat, wind, and thirsty skin. Loved in Texas, Arizona, and New Mexico.
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

      <section className="dsIntro" id="ds-story" data-r>
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
          mist for skin that’s been cooked by sun, AC, altitude, or straight-up desert air. Loved
          in Texas, Arizona, and New Mexico. Same photo-panel ingredient system as Face Juice.
          Southwest botanicals coming from the field.
        </p>
      </section>

      <section className="dsPlantStory" aria-label="Desert Squirt Texas ingredients">
        <div className="dsSticky">
          <p className="ey" style={{ color: "#e8d2a8" }}>
            Southwest ingredient intelligence
          </p>
          <figure>
            {plants.map((plant, i) => (
              <img key={plant[1]} className={i === a ? "active" : ""} src={plant[3]} alt={plant[1]} />
            ))}
          </figure>
          <div className="dsMeter">
            <i style={{ width: ((a + 1) / plants.length) * 100 + "%" }} />
          </div>
          <small>
            0{a + 1} / 0{plants.length}
          </small>
        </div>
        <div className="dsSteps">
          {plants.map((plant, i) => (
            <article key={plant[1]} data-p={i} data-r>
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

      <section className="dsGrid" aria-label="What Desert Squirt is for">
        <article data-r>
          <h3>Parched surface</h3>
          <p>When skin feels tight, sandy, or wind-burned — mist before cream and let minerals settle.</p>
        </article>
        <article data-r>
          <h3>Heat + friction days</h3>
          <p>Travel, work, and weather that pull moisture out. Desert Squirt is the reset spray.</p>
        </article>
        <article data-r>
          <h3>Sister to Face Juice</h3>
          <p>Same panel system, same regulation logic — tuned for arid stress instead of island humidity.</p>
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
