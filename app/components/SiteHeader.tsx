import { ASK_IPO_HREF, BLOG_HREF } from "../site-config";
import { SHOP } from "../shop-links";

const shop = SHOP.original;
const sample = SHOP.sample;
const outletMall = "https://outlet-mall.vercel.app/";

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
      <a href={outletMall} target="_blank" rel="noopener noreferrer">Outlet Mall ↗</a>
      <a href={sample}>Sample</a>
      <a className="siteShopLink" href={shop}>Shop</a>
    </nav>

    <details className="siteMobileMenu">
      <summary aria-label="Open Fruity Puppy menu"><span>MENU</span><i aria-hidden="true">☰</i></summary>
      <div className="siteMobilePanel">
        <a className="mobileBuyNow" href={shop}>BUY NOW <span>→</span></a>

        <details className="mobileShopMenu">
          <summary>SHOP <span>+</span></summary>
          <div>
            <a href={shop}>Original · $59.99</a>
            <a href={SHOP.fpx}>FPX · $59.99</a>
            <a href="/lava-guava">Lava-Guava</a>
            <a href={SHOP.faceJuice}>Face Juice · $29.99</a>
            <a href="/desert-squirt">Desert Squirt</a>
            <a href={SHOP.moonTea}>Moon Tea · $29.99</a>
          </div>
        </details>

        <details className="mobileShopMenu">
          <summary>ABOUT <span>+</span></summary>
          <div>
            <a href="/our-team">Our Team</a>
            <a href="/our-dream">Our Dream</a>
            <a href="/our-cream">Our Cream</a>
            <a href="/our-home">Our Home</a>
            <a href="/our-partners">Partners</a>
            <a href="/safety-and-transparency">Safety + Transparency</a>
            <a href={BLOG_HREF}>Blog</a>
          </div>
        </details>

        <details className="mobileShopMenu">
          <summary>SKIN HELP <span>+</span></summary>
          <div>
            <a href="/sunburn">Sun-Exposed Skin</a>
            <a href="/tattoo">Tattooed Skin</a>
            <a href="/problem-skin">Problem Skin</a>
          </div>
        </details>

        <a className="mobileSimpleLink mobileSampleLink" href={sample}>TRY A FREE SAMPLE <span>→</span></a>
        <a className="mobileIpoSimple" href={ASK_IPO_HREF}><span>ASK IPO</span><small>Help me choose what my skin needs</small></a>
        <a className="mobileSimpleLink" href={outletMall} target="_blank" rel="noopener noreferrer">OUTLET MALL <span>↗</span></a>
      </div>
    </details>
  </header>;
}
