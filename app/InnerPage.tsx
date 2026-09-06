import { ASK_IPO_HREF, BLOG_HREF, PRIVACY_HREF, RETURNS_HREF, TERMS_HREF } from "./site-config";
import ProcessBeat from "./components/ProcessBeat";
import AmbientScrollAudio from "./components/AmbientScrollAudio";
import InnerHeroVideo from "./components/InnerHeroVideo";

export type PageData={eyebrow:string;title:string;intro:string;hero:string;heroAlt:string;sections:{title:string;body:string;image?:string;alt?:string;details?:[string,string][]}[];cta?:{label:string;href:string}};

export type ProcessBeatProps={src:string;poster:string;caption?:string};
export type AmbientAudioProps={src:string;triggerSelector?:string};
export type HeroVideoProps={src:string;poster:string;label?:string};

export default function InnerPage({
  data,
  processBeat,
  ambientAudio,
  heroVideo,
}:{
  data:PageData;
  processBeat?:ProcessBeatProps;
  ambientAudio?:AmbientAudioProps;
  heroVideo?:HeroVideoProps;
}){return <main className="innerPage">
  {ambientAudio&&<AmbientScrollAudio src={ambientAudio.src} triggerSelector={ambientAudio.triggerSelector||"#inner-story"} />}
  <header id="top"><a className="logo" href="/">FRUITY <b>PUPPY</b></a><nav><a href="/our-team">Our Team</a><a href="/our-dream">Our Dream</a><a href="/our-cream">Our Cream</a><a href="/our-home">Our Home</a><a href="/safety-and-transparency">Safety</a><a href="/lava-guava">LAVA-GUAVA</a><a href="/thorny-toad">Thorny Toad</a><a href="/moon-tea">Moon Tea</a><a href="/fpx">FPX</a><a href="/our-partners">Partners</a><a href={BLOG_HREF}>Blog</a></nav><details className="mobileNav"><summary>Menu</summary><div><a href="/">Home</a><a href="/our-team">Our Team</a><a href="/our-dream">Our Dream</a><a href="/our-cream">Our Cream</a><a href="/our-home">Our Home</a><a href="/safety-and-transparency">Safety</a><a href="/lava-guava">LAVA-GUAVA</a><a href="/thorny-toad">Thorny Toad Face Juice</a><a href="/moon-tea">Moon Tea</a><a href="/fpx">FPX</a><a href="/our-partners">Our Partners</a><a href={BLOG_HREF}>Blog</a></div></details></header>
  <section className="innerHero">
    <div className="innerHeroCopy"><p className="tagline">{data.eyebrow}</p><h1>{data.title}</h1><p>{data.intro}</p></div>
    {heroVideo ? (
      <InnerHeroVideo src={heroVideo.src} poster={heroVideo.poster} label={heroVideo.label||data.heroAlt} />
    ) : (
      <img src={data.hero} alt={data.heroAlt}/>
    )}
  </section>
  {processBeat&&<ProcessBeat src={processBeat.src} poster={processBeat.poster} caption={processBeat.caption}/>}
  <section className="storyStack" id="inner-story">{data.sections.map((s)=><article className={s.image?"storyCard withImage":"storyCard"} key={s.title}>{s.image&&<img src={s.image} alt={s.alt||s.title}/>}<div><h2>{s.title}</h2><p>{s.body}</p>{s.details&&<div className="detailList">{s.details.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>}</div></article>)}</section>
  {data.cta&&<section className="innerCta"><h2>{data.title}</h2><a className="button dark" href={data.cta.href}>{data.cta.label}</a></section>}
  <footer><a className="logo" href="/">FRUITY <b>PUPPY</b></a><p>Made by hand on Big Island, Hawaiʻi.</p><div><a href="/our-team">Team</a><a href="/our-dream">Dream</a><a href="/our-cream">Cream</a><a href="/our-home">Home</a><a href="/safety-and-transparency">Safety</a><a href="/our-partners">Partners</a><a href={BLOG_HREF}>Blog</a><a href={ASK_IPO_HREF}>Ask Ipo</a><a href={PRIVACY_HREF}>Privacy</a><a href={TERMS_HREF}>Terms</a><a href={RETURNS_HREF}>Returns</a></div></footer>
 </main>}
