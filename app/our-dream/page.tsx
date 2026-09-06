import HeroVideo from "../components/HeroVideo";
import AmbientScrollAudio from "../components/AmbientScrollAudio";
import ProcessBeat from "../components/ProcessBeat";
import { ASK_IPO_HREF, BLOG_HREF, PRIVACY_HREF, RETURNS_HREF, TERMS_HREF } from "../site-config";

const shop = "https://shop.fruitypuppy.com/products/fruity-puppy";

const sections = [
  {
    title: "A small experiment",
    body: "Could we make a skin cream that was truly good using what we could grow, blend, and build ourselves? No mystery chemicals. No mass production. Just the deep intelligence of plants, guided by science, intuition, and care.",
    image: "/images/process/fresh-aloe.jpg",
    alt: "Fresh aloe prepared for Fruity Puppy",
  },
  {
    title: "Go big by staying real",
    body: "Our dream is to be worldwide and wildly successful without compromise. We want Fruity Puppy on bathroom counters in Brooklyn, Berlin, and Bangkok—in backpacks, tattoo kits, baby bags, and carry-ons. Global and grounded.",
  },
  {
    title: "Good dope sells itself",
    body: "There are people who have spent their lives with skin that hurts, flakes, burns, or scars and never found relief until this. We rely on the people who have felt the difference to carry it forward. Real skin tells the truth.",
    image: "/images/new/skin-better.jpg",
    alt: "An open jar of Fruity Puppy among flowers",
  },
  {
    title: "We want to do it together",
    body: "Every person who tries Fruity Puppy, tells a friend, or listens to how it is made becomes part of the movement—not just a customer, but a teammate. We want to be big. We want to be good. And we want to do it together. That’s the dream. xoxo Ipo ❤️",
  },
];

function StoryBlock({
  title,
  body,
  image,
  alt,
  id,
}: {
  title: string;
  body: string;
  image?: string;
  alt?: string;
  id?: string;
}) {
  return (
    <section className="storyStack dreamStoryBeat" id={id}>
      <article className={image ? "storyCard withImage" : "storyCard"}>
        {image && <img src={image} alt={alt || title} />}
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      </article>
    </section>
  );
}

export default function Page() {
  return (
    <main className="innerPage ourDreamPage">
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

      <AmbientScrollAudio src="/audio/our-dream-ambience.mp3" triggerSelector="#dream-story" />

      <section className="hero dreamHero">
        <HeroVideo
          src="/images/hero/home-hero.mp4"
          poster="/images/hero/home-hero-poster.jpg"
          silent
        />
        <div className="heroCopy">
          <p className="tagline">grown here · meant for everywhere</p>
          <h1>Our Dream.</h1>
          <h2>
            We believe skincare can be more than a routine. It can be a relationship with your body,
            with the land, and with the way things grow and change and heal.
          </h2>
          <div className="buttonRow heroButtons">
            <a className="button heroBuy" href={shop}>
              Buy Now
            </a>
            <a className="button heroSample" href="#dream-story">
              Read the dream
            </a>
          </div>
        </div>
      </section>

      <StoryBlock {...sections[0]} id="dream-story" />

      <section className="cartoonStrip" aria-label="Fruity Puppy dream commercial">
        <video
          className="cartoonStripVideo"
          src="/images/hero/commercials/our-dream.mp4"
          poster="/images/hero/commercials/our-dream-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </section>

      <StoryBlock {...sections[1]} />

      <section className="cartoonStrip" aria-label="Detective haunted cartoon strip">
        <video
          className="cartoonStripVideo"
          src="/images/hero/commercials/detective-haunted.mp4"
          poster="/images/hero/commercials/detective-haunted-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </section>

      <StoryBlock {...sections[2]} />

      <ProcessBeat
        src="/images/process/beats/beat-03.mp4"
        poster="/images/process/beats/beat-03-poster.jpg"
      />

      <StoryBlock {...sections[3]} />

      <section className="innerCta">
        <h2>Our Dream</h2>
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
