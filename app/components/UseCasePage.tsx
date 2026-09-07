import { ASK_IPO_HREF, BLOG_HREF, PRIVACY_HREF, RETURNS_HREF, TERMS_HREF } from "../site-config";

type Card = { kicker: string; title: string; body: string };
type Faq = { q: string; a: string };

type Props = {
  tone: "tattoo" | "sunburn" | "problem";
  eyebrow: string;
  title: string;
  accent: string;
  lead: string;
  heroImage: string;
  heroAlt: string;
  heroCaption?: string;
  introEyebrow: string;
  introTitle: string;
  introBody: string;
  cardsTitle: string;
  cards: Card[];
  imageBandImage: string;
  imageBandAlt: string;
  imageBandEyebrow: string;
  imageBandTitle: string;
  imageBandBody: string;
  imageBandQuote?: string;
  honestyTitle: string;
  honestyBody: string;
  faqs: Faq[];
  ctaTitle: string;
  ctaBody: string;
  shopLabel?: string;
};

const shop = "https://shop.fruitypuppy.com/products/fruity-puppy";

function Header() {
  return (
    <header id="top">
      <a className="logo" href="/">FRUITY <b>PUPPY</b></a>
      <nav>
        <a href="/our-team">Our Team</a><a href="/our-dream">Our Dream</a><a href="/our-cream">Our Cream</a><a href="/our-home">Our Home</a><a href="/safety-and-transparency">Safety</a><a href="/lava-guava">LAVA-GUAVA</a><a href="/thorny-toad">Thorny Toad</a><a href="/desert-squirt">Desert Squirt</a><a href="/moon-tea">Moon Tea</a><a href="/fpx">FPX</a><a href="/our-partners">Partners</a><a href={BLOG_HREF}>Blog</a>
      </nav>
      <details className="mobileNav"><summary>Menu</summary><div>
        <a href="/">Home</a><a href="/our-team">Our Team</a><a href="/our-dream">Our Dream</a><a href="/our-cream">Our Cream</a><a href="/our-home">Our Home</a><a href="/safety-and-transparency">Safety</a><a href="/lava-guava">LAVA-GUAVA</a><a href="/thorny-toad">Thorny Toad Face Juice</a><a href="/desert-squirt">Desert Squirt</a><a href="/moon-tea">Moon Tea</a><a href="/fpx">FPX</a><a href={ASK_IPO_HREF}>Ask Ipo</a><a href={shop}>Shop</a>
      </div></details>
    </header>
  );
}

export default function UseCasePage(props: Props) {
  return (
    <main className={`useCasePage ${props.tone}`}>
      <Header />
      <section className="ucHero">
        <div className="ucHeroCopy">
          <p className="ucEyebrow">{props.eyebrow}</p>
          <h1>{props.title}<br /><em>{props.accent}</em></h1>
          <p className="ucLead">{props.lead}</p>
          <div className="ucActions"><a className="button ucPrimary" href={shop}>{props.shopLabel || "Shop Fruity Puppy Original"}</a><a className="button ucSecondary" href={ASK_IPO_HREF}>Ask Ipo</a></div>
        </div>
        <figure className="ucHeroFigure"><img src={props.heroImage} alt={props.heroAlt}/>{props.heroCaption && <figcaption>{props.heroCaption}</figcaption>}</figure>
      </section>

      <section className="ucIntro">
        <p className="ucEyebrow">{props.introEyebrow}</p><h2>{props.introTitle}</h2><p>{props.introBody}</p>
      </section>

      <section className="ucSection">
        <p className="ucEyebrow">FRUITY PUPPY ORIGINAL</p><h2>{props.cardsTitle}</h2>
        <div className="ucGrid">{props.cards.map((card)=><article className="ucCard" key={card.title}><small>{card.kicker}</small><h3>{card.title}</h3><p>{card.body}</p></article>)}</div>
      </section>

      <section className="ucImageBand">
        <img src={props.imageBandImage} alt={props.imageBandAlt}/>
        <div className="ucImageCopy"><p className="ucEyebrow">{props.imageBandEyebrow}</p><h2>{props.imageBandTitle}</h2><p>{props.imageBandBody}</p>{props.imageBandQuote && <p className="ucQuote">{props.imageBandQuote}</p>}</div>
      </section>

      <section className="ucHonesty"><p className="ucEyebrow">STRAIGHT TALK</p><h2>{props.honestyTitle}</h2><p>{props.honestyBody}</p></section>

      <section className="ucFaq"><p className="ucEyebrow">QUESTIONS</p><h2>Before you use it.</h2>{props.faqs.map((faq)=><details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</section>

      <section className="ucCta"><p className="ucEyebrow">SKIN EATS. FEED IT WELL.</p><h2>{props.ctaTitle}</h2><p>{props.ctaBody}</p><div className="ucActions" style={{justifyContent:"center"}}><a className="button ucPrimary" href={shop}>{props.shopLabel || "Shop Original"}</a><a className="button ucSecondary" href={ASK_IPO_HREF}>Ask Ipo</a></div></section>

      <footer><a className="logo" href="/">FRUITY <b>PUPPY</b></a><p>Made by hand on Big Island, Hawaiʻi.</p><div><a href="/our-team">Team</a><a href="/our-dream">Dream</a><a href="/our-cream">Cream</a><a href="/our-home">Home</a><a href="/safety-and-transparency">Safety</a><a href="/our-partners">Partners</a><a href={BLOG_HREF}>Blog</a><a href={ASK_IPO_HREF}>Ask Ipo</a><a href={PRIVACY_HREF}>Privacy</a><a href={TERMS_HREF}>Terms</a><a href={RETURNS_HREF}>Returns</a></div></footer>
    </main>
  );
}
