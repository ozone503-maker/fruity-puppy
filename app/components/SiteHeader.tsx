import { ASK_IPO_HREF, BLOG_HREF } from "../site-config";

const shop = "https://shop.fruitypuppy.com/products/fruity-puppy";
const sample = "https://shop.fruitypuppy.com/products/free-sample-fruity-puppy-original-5-shipping-amp-handling";

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
      <summary aria-label="Open Fruity Puppy menu"><span>MENU</span><i aria-hidden="true">☰</i></summary>
      <div className="siteMobilePanel">
        <div className="mobileMenuTop">
          <p>FRESH SKIN NUTRITION</p>
          <a className="mobileShop" href={shop}>SHOP FRUITY PUPPY</a>
          <a className="mobileSample" href={sample}>TRY A FREE SAMPLE →</a>
        </div>

        <div className="mobileMenuSection">
          <p className="mobileMenuLabel">THE FRUITY PUPPY FAMILY</p>
          <div className="mobileProductGrid">
            <a href="/"><b>Original</b><span>Fresh fruit skin nutrition</span></a>
            <a href="/fpx"><b>FPX</b><span>Turn the fruit power up</span></a>
            <a href="/lava-guava"><b>Lava-Guava</b><span>High-friction trouble spots</span></a>
            <a href="/thorny-toad"><b>Face Juice</b><span>Fresh daytime toner</span></a>
            <a href="/desert-squirt"><b>Desert Squirt</b><span>Botanical toner</span></a>
            <a href="/moon-tea"><b>Moon Tea</b><span>Nighttime botanical ritual</span></a>
          </div>
        </div>

        <a className="mobileIpo" href={ASK_IPO_HREF}><span><small>NOT SURE WHERE TO START?</small><b>Ask Ipo about your skin.</b></span><strong>→</strong></a>

        <div className="mobileMenuLinks">
          <a href="/our-cream">Our Cream</a><a href="/our-home">Our Home</a><a href="/our-team">Our Team</a><a href="/our-dream">Our Dream</a>
          <a href={BLOG_HREF}>Blog</a><a href="/safety-and-transparency">Safety</a><a href="/our-partners">Partners</a>
        </div>
      </div>
    </details>
  </header>;
}
