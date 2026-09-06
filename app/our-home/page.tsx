import { ASK_IPO_HREF, BLOG_HREF, PRIVACY_HREF, RETURNS_HREF, TERMS_HREF } from "../site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Home | FLASHTOWN, Hawaiʻi | Fruity Puppy",
  description: "Meet FLASHTOWN: Fruity Puppy’s off-grid farm, jungle home and animal sanctuary on Hawaiʻi Island, fifteen miles downhill from Kīlauea.",
};

const homeImages = "/images/our-home/";

function Header(){return <header id="top"><a className="logo" href="/">FRUITY <b>PUPPY</b></a><nav><a href="/our-team">Our Team</a><a href="/our-dream">Our Dream</a><a href="/our-home">Our Home</a><a href="/thorny-toad">Thorny Toad</a><a href="/our-partners">Partners</a><a href={BLOG_HREF}>Blog</a></nav><details className="mobileNav"><summary>Menu</summary><div><a href="/">Home</a><a href="/our-team">Our Team</a><a href="/our-dream">Our Dream</a><a href="/our-home">Our Home</a><a href="/lava-guava">LAVA-GUAVA</a><a href="/thorny-toad">Thorny Toad</a><a href="/moon-tea">Moon Tea</a><a href="/fpx">FPX</a><a href="/our-partners">Partners</a><a href={BLOG_HREF}>Blog</a></div></details></header>}

export default function Page(){return <main className="ourHomePage">
  <Header/>
  <section className="homeHero">
    <img src={homeImages+"862456bb-bbb2-4e50-9fec-900a88d39e4b-1_all_118.jpg"} alt="The jungle home and farm at FLASHTOWN on Hawaiʻi Island"/>
    <div className="homeHeroShade"/>
    <div className="homeHeroCopy"><p className="tagline">The place behind every jar</p><h1>OUR<br/><em>HOME</em></h1><p>Fruity Puppy doesn’t just come from a kitchen—it comes from a place. A real one.</p></div>
    <div className="homeCoordinates"><span>EDEN ROC · HAWAIʻI</span><span>1,800 FT</span><span>OFF GRID</span></div>
  </section>

  <section className="flashtownIntro">
    <img className="flashtownMark" src={homeImages+"862456bb-bbb2-4e50-9fec-900a88d39e4b-1-b1ad831.jpg"} alt="FLASHTOWN Big Island Hawaiʻi logo"/>
    <div><p className="eyebrow">Farm · sanctuary · jungle home</p><h2>This is <em>FLASHTOWN.</em></h2><p>FLASHTOWN is the name of our farm, our cat sanctuary, our jungle home, and the very heart of everything we make.</p></div>
  </section>

  <section className="homeStory">
    <article className="homeChapter volcano"><div className="chapterImage"><img src={homeImages+"1000000686.jpg"} alt="A misty road through the rainforest near FLASHTOWN"/><span>15 MILES DOWNHILL FROM KĪLAUEA</span></div><div className="chapterCopy"><h2>Grown above a river of old lava.</h2><p>We live and grow here, fifteen miles downhill from Kīlauea, perched above the Kazumura caves—the longest and deepest lava tubes in the world. At 1,800 feet up in Eden Roc, Hawaiʻi, the air is clean and full of mist, and the ground vibrates with volcanic energy.</p><p>This is where we grow our lilikoi orchards, papaya trees, cranberry hibiscus, aloe vera, and spearmint. Every jar of Fruity Puppy starts right here.</p></div></article>

    <article className="homeChapter reverse"><div className="chapterImage"><img src={homeImages+"1000000508.jpg"} alt="The lush water garden at FLASHTOWN"/><span>RAIN + SUN + HUMAN HANDS</span></div><div className="chapterCopy"><h2>Off-grid—with fiber optic internet.</h2><p>FLASHTOWN is entirely off-grid—except for our fiber optic cable, because robots need internet. Our water comes from rain catchment. Our power comes from the sun.</p><p>Jessie hand-cleared this land with nothing but a machete, a rake, and a promise—to one day build a sanctuary. And now it’s real.</p></div></article>

    <div className="homeInterlude"><p>OVER 30</p><h2>fruit trees growing in stages all around you.</h2></div>

    <article className="homeChapter farmVisit"><div className="chapterImage"><img src={homeImages+"five-dogs-farm.jpg"} alt="One of FLASHTOWN’s five rescued dogs standing beside the jungle pond"/><span>THE FARM CREW</span></div><div className="chapterCopy"><h2>A hidden little state park you can visit.</h2><p>We welcome visitors. You can find us on Google and book a stay in our guest cabin or private cave through Hipcamp. There’s a hot shower, flushing toilet, campfire ring, tent space on the lawn, a shuttle bus to town, and fresh eggs from our chickens.</p><p>The animals love guests. Around here, you are never exactly walking alone.</p></div></article>

    <article className="homeChapter reverse animals"><div className="chapterImage sanctuaryPair"><img src={homeImages+"rescue-cat-recovery.jpg"} alt="A rescued FLASHTOWN cat recovering comfortably after veterinary care"/><img src={homeImages+"rescue-dogs-together.jpg"} alt="Two of FLASHTOWN’s five rescued dogs cuddled together at home"/><span>THE REAL BOSSES</span></div><div className="chapterCopy"><h2>The sanctuary is the reason.</h2><p>Beaux, Ghostbuster, Penny, Mike, and Diva—our five farm dogs—share FLASHTOWN with more than 20 rescued cats. Many came to us as kittens through Hawaiʻi Island’s overpopulation crisis. A portion of every Fruity Puppy sale goes straight into food, veterinary care, and soft little blankets.</p><p>The animals are not brand decoration. They are the bosses, the beneficiaries, and the reason this whole living system has to succeed.</p></div></article>
  </section>

  <section className="flashPromise"><div className="promisePhotos"><img src={homeImages+"1000000710.jpg"} alt="Rescue kittens curled together at FLASHTOWN"/><img src={homeImages+"1000043166.jpg"} alt="Fresh jars of Fruity Puppy made at FLASHTOWN"/></div><div className="promiseCopy"><p className="eyebrow">A promise to Flash</p><h2>His heart lives here.</h2><p>FLASHTOWN was founded in 2022 to fulfill a promise made to Flash, Jessie’s dog, who loved kittens and baby chickens more than anything. He passed too soon, but his heart lives on in every fuzzy rescue and every lilikoi bloom.</p><p>This farm, this cream, and even the Brotbots—all of it exists to fund the sanctuary that bears his name.</p></div></section>

  <section className="homeClosing"><p>Fruity Puppy is a cream.</p><h2>FLASHTOWN is the world it comes from.</h2><p>Come visit sometime. We’re always here.</p><div><a className="button dark" href="https://www.google.com/search?q=Flashtown+Hawaii">Find FLASHTOWN</a><a className="homeTextLink" href="/our-dream">See Our Dream →</a></div></section>

  <footer><a className="logo" href="/">FRUITY <b>PUPPY</b></a><p>Made by hand at FLASHTOWN, Big Island.</p><div><a href="/our-team">Team</a><a href="/our-dream">Dream</a><a href="/our-home">Home</a><a href="/our-partners">Partners</a><a href={BLOG_HREF}>Blog</a><a href={ASK_IPO_HREF}>Ask Ipo</a><a href={PRIVACY_HREF}>Privacy</a><a href={TERMS_HREF}>Terms</a><a href={RETURNS_HREF}>Returns</a></div></footer>
</main>}
