"use client";

import { ASK_IPO_HREF, BLOG_HREF, PRIVACY_HREF, RETURNS_HREF, TERMS_HREF } from "../site-config";
import HeroVideo from "../components/HeroVideo";
import AmbientScrollAudio from "../components/AmbientScrollAudio";
import ProcessBeat from "../components/ProcessBeat";

import { useRef } from "react";

const triad = [
  {
    number: "01",
    kind: "Plant intelligence",
    line: "The chemistry was already here.",
    body: "Every fruit in Fruity Puppy grows here. Lilikoi, papaya, aloe, hibiscus, mint and ice cream bean arrive with their own antioxidant networks, enzymes, pigments and defenses—living systems refined over millions of years.",
    image: "/images/fruit/lilikoi-hand.jpg",
    alt: "Fresh lilikoi held at the Fruity Puppy farm",
  },
  {
    number: "02",
    kind: "Human intelligence",
    line: "Curiosity learned how to listen.",
    body: "Jessie grew the plants, noticed what they did and kept asking better questions. Ryan brought the herbal knowledge and formulation craft to turn fresh botanical material into a stable, beautiful cream.",
    image: "/images/process/lipid-batch.jpg",
    alt: "The Fruity Puppy lipid matrix being crafted by hand",
  },
  {
    number: "03",
    kind: "Artificial intelligence",
    line: "Knowledge became a collaborator.",
    body: "ChatGPT-4 taught Jessie what antioxidants were, then walked the yard with him plant by plant—helping map specific antioxidant compounds to the actual ingredients already growing and reduce them to a fruit supply Jessie could maintain himself.",
    image: "/images/robot-biochemistry-teachers.jpg",
    alt: "The two original robot teachers studying biochemistry in the Fruity Puppy food forest",
  },
];

const robotLessons = [
  { no: "01", subject: "ANTIOXIDANTS", title: "An antioxidant is a bodyguard for electrons.", body: "Oxidation begins when reactive molecules pull electrons from other molecules. Antioxidants can donate an electron without becoming unstable themselves, helping interrupt that chain reaction." },
  { no: "02", subject: "THE YARD", title: "A profile needs ingredients attached to it.", body: "We did not collect impressive compound names. Jessie and GPT-4 mapped each antioxidant to the actual fruit, leaf, butter or vitamin carrying it—so the science stayed connected to the formula." },
  { no: "03", subject: "FRESHNESS", title: "Harvest starts the clock.", body: "Once plant material leaves the living plant, oxygen, heat, light and time begin changing it. That is why Fruity Puppy fruit goes onto ice immediately after harvest." },
  { no: "04", subject: "FREEZING", title: "Ice can open the plant cell.", body: "Water expands as it freezes. Inside plant tissue, ice crystals rupture cell structures and help release the colorful, aromatic, water-soluble material held within them." },
  { no: "05", subject: "ENZYMES", title: "Fresh fruit is chemically active.", body: "Fruit is not just flavor and fragrance. It carries enzymes and other living compounds whose activity depends on temperature, acidity, oxygen exposure and handling." },
  { no: "06", subject: "THE MATRIX", title: "Water and lipids need a translator.", body: "The fresh fruit phase and the butter-rich lipid phase do not naturally stay together. Lecithin helps organize that relationship so the finished cream can carry both." },
  { no: "07", subject: "SKIN", title: "The barrier is built from lipids.", body: "Skin’s outer barrier depends on an organized lipid structure. Fruity Puppy uses a crystalline matrix of plant butters and oils because delivery matters as much as the ingredient list." },
  { no: "08", subject: "THE NUMBER", title: "Seventeen belongs to the complete formula.", body: "The fruit alone does not supply all 17 unique antioxidants. That total includes the antioxidant contribution of the botanicals, the plant butters and vitamin E together." },
  { no: "09", subject: "THE SUPPLY CHAIN", title: "A formula is only real if we can keep growing it.", body: "Every fruit had to come from plants already growing here—and remain within a supply chain Jessie could maintain himself. Availability was part of the invention." },
  { no: "10", subject: "REDUCTION", title: "More ingredients did not mean a better cream.", body: "Jessie and GPT-4 kept removing plants, then studied what remained. The goal was the leanest self-sustaining fruit phase that still did the work—not a padded label." },
];

function Header(){return <header id="top"><a className="logo" href="/">FRUITY <b>PUPPY</b></a><nav><a href="/our-team">Our Team</a><a href="/our-dream">Our Dream</a><a href="/our-cream">Our Cream</a><a href="/lava-guava">LAVA-GUAVA</a><a href="/moon-tea">Moon Tea</a><a href="/fpx">FPX</a><a href="/our-partners">Partners</a><a href={BLOG_HREF}>Blog</a></nav><details className="mobileNav"><summary>Menu</summary><div><a href="/">Home</a><a href="/our-team">Our Team</a><a href="/our-dream">Our Dream</a><a href="/our-cream">Our Cream</a><a href="/lava-guava">LAVA-GUAVA</a><a href="/moon-tea">Moon Tea</a><a href="/fpx">FPX</a><a href="/our-partners">Our Partners</a><a href={BLOG_HREF}>Blog</a></div></details></header>}

export default function Page(){
  const robotTrack = useRef<HTMLDivElement>(null);
  const moveLessons = (direction:number) => robotTrack.current?.scrollBy({left: direction * robotTrack.current.clientWidth * .78, behavior:"smooth"});
  return <main className="intelligencePage">
  <Header/>

  <AmbientScrollAudio src="/audio/our-team-ambience.mp3" triggerSelector="#team-story" />

  <section className="hero teamHero">
    <HeroVideo
      src="/images/hero/home-hero.mp4"
      poster="/images/hero/home-hero-poster.jpg"
      silent
    />
    <div className="heroCopy">
      <p className="tagline">The intelligence behind Fruity Puppy</p>
      <h1>Something none of us could have made <em>alone.</em></h1>
      <h2>Plant intelligence. Human intelligence. Artificial intelligence. Each one doing what it does best, and creating something new where they meet.</h2>
      <div className="buttonRow heroButtons">
        <a className="button heroBuy" href="#team-story">Meet the team</a>
        <a className="button heroSample" href="#triad">The three intelligences</a>
      </div>
    </div>
  </section>

  <section className="cartoonStrip" aria-label="Fruity Puppy team commercial">
    <video
      className="cartoonStripVideo"
      src="/images/hero/commercials/our-team.mp4"
      poster="/images/hero/commercials/our-team-poster.jpg"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
    />
  </section>

  <section className="cartoonStrip" aria-label="Jessie with Ipo and Erv at dinner">
    <video
      className="cartoonStripVideo"
      src="/images/hero/commercials/dinner-ipo-erv.mp4"
      poster="/images/hero/commercials/dinner-ipo-erv-poster.jpg"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
    />
  </section>

  <ProcessBeat src="/images/process/beats/beat-05.mp4" poster="/images/process/beats/beat-05-poster.jpg" />

  <section className="robotSchool" id="team-story" aria-labelledby="robot-school-title">
    <div className="robotSchoolHead">
      <div><p className="eyebrow">The original robot teachers</p><h2 id="robot-school-title">ROBOT SCHOOL</h2><p>Ten lessons from the education that came before the cream.</p></div>
      <div className="robotControls"><button onClick={()=>moveLessons(-1)} aria-label="Previous robot lesson">←</button><button onClick={()=>moveLessons(1)} aria-label="Next robot lesson">→</button></div>
    </div>
    <div className="robotTrack" ref={robotTrack} tabIndex={0} aria-label="Ten robot science lessons">
      {robotLessons.map((lesson, index)=><article className="robotCard" key={lesson.no}>
        <div className="robotPortrait"><img src="/images/robot-biochemistry-teachers.jpg" alt={index === 0 ? "The two original robot teachers studying biochemistry in the Fruity Puppy food forest" : ""}/><span>LESSON {lesson.no}</span></div>
        <div className="robotCopy"><p>{lesson.subject}</p><h3>{lesson.title}</h3><p>{lesson.body}</p></div>
      </article>)}
    </div>
    <p className="swipeHint">Swipe or use the arrows · 10 lessons</p>
  </section>

  <section className="manifesto">
    <p className="eyebrow">The team is bigger than the people</p>
    <h2>Fruity Puppy began with a plant, a question and a robot.</h2>
    <p>No single intelligence owns this invention. The plants were already growing here, carrying a biochemical library in the yard. Human hands supplied observation, care and the requirement that every fruit remain within our own supply chain. Artificial intelligence helped us read what was already here—matching specific antioxidant compounds to actual ingredients, one plant and one better question at a time.</p>
  </section>

  <section className="triad" id="triad">
    <div className="triadIntro"><p className="eyebrow">Three distinct strengths</p><h2>The triad of intelligence</h2><p>Not three versions of the same mind. Three radically different abilities, strongest in collaboration.</p></div>
    <div className="triadCards">{triad.map((item)=><article className="intelligenceCard" key={item.kind}>
      <div className="cardImage"><img src={item.image} alt={item.alt}/><span>{item.number}</span></div>
      <div className="cardCopy"><p>{item.kind}</p><h3>{item.line}</h3><div className="cardReveal"><p>{item.body}</p></div></div>
    </article>)}</div>
  </section>

  <section className="originStory">
    <div className="originSticky">
      <p className="eyebrow">Before there was a jar</p>
      <h2>We studied for months.</h2>
      <p>This was not a clever label placed on an ordinary cream after the fact. First we had to understand the plants—and prove we could grow the formula ourselves.</p>
    </div>
    <div className="originSteps">
      <article><span>THE FIRST QUESTION</span><blockquote>“Can I make skin cream out of lilikoi?”</blockquote><p>Jessie had fruit growing on a volcano and an idea that would not leave him alone.</p></article>
      <article className="robotLesson"><img src="/images/robot-biochemistry-teachers.jpg" alt="The two robot teachers who helped Jessie study antioxidants and biochemistry from the beginning"/><span>THE NEXT QUESTION</span><blockquote>“What the heck is an antioxidant?”</blockquote><p>ChatGPT-4 answered. These two robots became the faces of that education from the beginning. One answer created ten more questions, and those answers became a course of study.</p></article>
      <article><span>THE FOOD-FOREST AUDIT</span><h3>Jessie and GPT-4 walked around the yard.</h3><p>Everything began with what was already growing. Plant by plant, they investigated the fruit, leaves and tender shoots around the farm—building an antioxidant profile that connected every compound to the actual ingredient carrying it. The formula had to begin here because Jessie needed to maintain its entire fruit supply chain himself.</p></article>
      <article><span>THE REDUCTION</span><h3>Then we eliminated everything we did not need.</h3><p>The goal was not the longest ingredient list. We kept removing plants and studying what remained until the fruit phase was as lean and self-sustaining as we could make it. Combined with the antioxidant contribution of the butters and vitamin E, the complete finished formula contains 17 unique antioxidants.</p></article>
      <article><span>THE WORK</span><h3>Months of plant chemistry, antioxidants and skin biology.</h3><p>Fresh fruit cells. Oxidation. Enzymes. Lipids. Extraction. Human skin. Jessie brought observations from the farm; ChatGPT-4 helped connect them to scientific knowledge; Ryan brought the formulation discipline to make those lessons physical.</p></article>
      <article><span>ONLY THEN</span><h3>We announced that we had invented a cream.</h3><p>The formula emerged from the collaboration. Fruity Puppy was born in the space between things plants know, things humans can do and things artificial intelligence can help us understand.</p></article>
    </div>
  </section>

  <section className="convergence">
    <div className="convergenceRings" aria-label="Plant, human and artificial intelligence overlap to create Fruity Puppy"><span className="ring plantRing"><strong>PLANT</strong><small>living chemistry</small></span><span className="ring humanRing"><strong>HUMAN</strong><small>curiosity + craft</small></span><span className="ring aiRing"><strong>ARTIFICIAL</strong><small>knowledge + patterns</small></span><b><i>FRUITY</i>PUPPY</b></div>
    <div><p className="eyebrow">The place where they overlap</p><h2>A cream grown, taught and made.</h2><p>Plants contribute the living compounds. Humans harvest, freeze, formulate and feel. Artificial intelligence helps us see relationships across chemistry, biology and process. Fruity Puppy is what happens in the middle.</p></div>
  </section>

  <section className="humanHands">
    <div><p className="eyebrow">The humans inside the collaboration</p><h2>Jessie grows the questions.<br/>Ryan makes the answers tangible.</h2></div>
    <div className="humanGrid"><article><h3>Jessie Sponberg</h3><p>Farmer, inventor and relentless question-asker. Jessie grows and harvests all of the fruit, protects the supply chain, directs the process, studies the science and keeps the whole living system connected.</p></article><article><h3>Ryan McKenzie</h3><p>Herbalist, formulator and master craftsman. Ryan brings botanical knowledge, precision and the practiced hands that transform the fruit phase and lipid matrix into Fruity Puppy.</p></article><article><h3>Ipo</h3><p>The artificial intelligence that carries the collaboration forward—helping explain the plants, the products and the science to every curious human who arrives next.</p></article></div>
  </section>

  <section className="intelligenceCta"><p className="eyebrow">Plant × human × artificial</p><h2>This is only the beginning.</h2><a className="button dark" href="/our-dream">See Our Dream</a></section>
  <footer><a className="logo" href="/">FRUITY <b>PUPPY</b></a><p>Made by hand on Big Island, Hawaiʻi.</p><div><a href="/our-team">Team</a><a href="/our-dream">Dream</a><a href="/our-cream">Cream</a><a href="/our-partners">Partners</a><a href={BLOG_HREF}>Blog</a><a href={ASK_IPO_HREF}>Ask Ipo</a><a href={PRIVACY_HREF}>Privacy</a><a href={TERMS_HREF}>Terms</a><a href={RETURNS_HREF}>Returns</a></div></footer>
</main>}
