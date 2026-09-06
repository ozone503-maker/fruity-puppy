import { ASK_IPO_HREF, BLOG_HREF, PRIVACY_HREF, RETURNS_HREF, TERMS_HREF } from "./site-config";

const links: [string, string][] = [
  ["Our Team", "/our-team"],
  ["Our Dream", "/our-dream"],
  ["Our Cream", "/our-cream"],
  ["Our Home", "/our-home"],
  ["Safety", "/safety-and-transparency"],
  ["LAVA-GUAVA", "/lava-guava"],
  ["Thorny Toad", "/thorny-toad"],
  ["Desert Squirt", "/desert-squirt"],
  ["Moon Tea", "/moon-tea"],
  ["FPX", "/fpx"],
  ["Partners", "/our-partners"],
  ["Blog", BLOG_HREF],
];

export function BlogHeader() {
  return (
    <header id="top">
      <a className="logo" href="/">
        FRUITY <b>PUPPY</b>
      </a>
      <nav>
        {links.map(([label, href]) => (
          <a href={href} key={href}>
            {label}
          </a>
        ))}
      </nav>
      <details className="mobileNav">
        <summary>Menu</summary>
        <div>
          <a href="/">Home</a>
          {links.map(([label, href]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </div>
      </details>
    </header>
  );
}

export function BlogFooter() {
  return (
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
        <a href="/our-partners">Partners</a>
        <a href={BLOG_HREF}>Blog</a>
        <a href={ASK_IPO_HREF}>Ask Ipo</a>
        <a href={PRIVACY_HREF}>Privacy</a>
        <a href={TERMS_HREF}>Terms</a>
        <a href={RETURNS_HREF}>Returns</a>
      </div>
    </footer>
  );
}
