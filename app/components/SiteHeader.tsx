import { ASK_IPO_HREF, BLOG_HREF } from "../site-config";

const shop = "https://shop.fruitypuppy.com/products/fruity-puppy";

export default function SiteHeader(){
  return <header className="siteHeader" aria-label="Primary navigation">
    <a className="siteHeaderLogo" href="/">FRUITY <b>PUPPY</b></a>

    <nav className="siteDesktopNav" aria-label="Main menu">
      <details className="siteNavGroup">
        <summary>About</summary>
        <div className="siteDropdown">
          <a href="/our-team">Our Team</a>
          <a href="/our-dream">Our Dream</a>
          <a href="/our-cream">Our Cream</a>
          <a href="/our-home">Our Home</a>
          <a href="/safety-and-transparency">Safety</a>
          <a href="/our-partners">Partners</a>
        </div>
      </details>

      <details className="siteNavGroup">
        <summary>Products</summary>
        <div className="siteDropdown">
          <a href="/">Fruity Puppy Original</a>
          <a href="/fpx">FPX</a>
          <a href="/lava-guava">LAVA-GUAVA</a>
          <a href="/thorny-toad">Thorny Toad Face Juice</a>
          <a href="/desert-squirt">Desert Squirt</a>
          <a href="/moon-tea">Moon Tea</a>
        </div>
      </details>

      <details className="siteNavGroup">
        <summary>Skin Help</summary>
        <div className="siteDropdown">
          <a href="/sunburn">Sun-Exposed Skin</a>
          <a href="/tattoo">Tattooed Skin</a>
          <a href="/problem-skin">Problem Skin</a>
        </div>
      </details>

      <a href={BLOG_HREF}>Blog</a>
      <a href={ASK_IPO_HREF}>Ask Ipo</a>
      <a className="siteShopLink" href={shop}>Shop</a>
    </nav>

    <details className="siteMobileMenu">
      <summary>Menu</summary>
      <div className="siteMobilePanel">
        <details>
          <summary>About</summary>
          <div><a href="/our-team">Our Team</a><a href="/our-dream">Our Dream</a><a href="/our-cream">Our Cream</a><a href="/our-home">Our Home</a><a href="/safety-and-transparency">Safety</a><a href="/our-partners">Partners</a></div>
        </details>
        <details>
          <summary>Products</summary>
          <div><a href="/">Fruity Puppy Original</a><a href="/fpx">FPX</a><a href="/lava-guava">LAVA-GUAVA</a><a href="/thorny-toad">Thorny Toad Face Juice</a><a href="/desert-squirt">Desert Squirt</a><a href="/moon-tea">Moon Tea</a></div>
        </details>
        <details>
          <summary>Skin Help</summary>
          <div><a href="/sunburn">Sun-Exposed Skin</a><a href="/tattoo">Tattooed Skin</a><a href="/problem-skin">Problem Skin</a></div>
        </details>
        <a href={BLOG_HREF}>Blog</a>
        <a href={ASK_IPO_HREF}>Ask Ipo</a>
        <a href={shop}>Shop</a>
      </div>
    </details>
  </header>;
}
