import type { Metadata } from "next";
import UseCasePage from "../components/UseCasePage";

export const metadata: Metadata = {
  title: "Tattooed Skin | Fruity Puppy Original",
  description: "Cold, fruit-rich moisture for tattooed skin, from post-session dryness to long-term color care.",
};

export default function Page(){
  return <UseCasePage
    tone="tattoo"
    eyebrow="TATTOOED SKIN · FRUITY PUPPY ORIGINAL"
    title="Real ink deserves"
    accent="real fruit."
    lead="From fresh-session tightness to years-old color care, Fruity Puppy gives tattooed skin cold, fruit-rich moisture without petroleum, synthetic fragrance, or drugstore sludge."
    heroImage="https://fruitypuppy.com/images/tattoo-gypsy-back.jpg"
    heroAlt="Vibrant traditional gypsy back tattoo"
    heroCaption="Tattoo by Keith Sharer · Dragonfly Tattoos · Vancouver, WA"
    heroVideo="/images/hero/our-cream-hero.mp4"
    heroPoster="https://fruitypuppy.com/images/tattoo-gypsy-back.jpg"
    musicBed="/audio/tattoo-ambience.mp3"
    introEyebrow="SKIN ON ITS HARDEST DAY"
    introTitle="The tattoo lives in the skin."
    introBody="Fresh tattooed skin can feel tight, dry, tender, and easily irritated. Years later, the same tattoo still depends on the condition of the skin carrying it. Fruity Puppy Original was built around moisture, fresh fruit antioxidants, and a dense plant-lipid matrix—not perfume or petrolatum."
    cardsTitle="Cold. Alive. Built for ink."
    cards={[
      {kicker:"01 · COOL",title:"Fridge-cold comfort",body:"Once your artist says moisturizing is appropriate, a thin layer straight from the fridge can feel especially good on tight, tender tattooed skin."},
      {kicker:"02 · SOFTEN",title:"A flexible lipid cushion",body:"Shea, mango, cocoa, and 92° coconut oil give dry, stretched skin rich moisture without the plastic-wrap feel of petrolatum."},
      {kicker:"03 · FEED",title:"Whole-fruit skin nutrition",body:"Lilikoi, papaya, cranberry hibiscus, ice cream bean, spearmint, and aloe bring a fresh botanical phase to skin that has been through a lot."},
      {kicker:"04 · MAINTAIN",title:"Care for healed work",body:"Keeping healed tattooed skin smooth and moisturized can make the surface look clearer and the color underneath look less dull."},
      {kicker:"05 · RESPECT",title:"A little goes a long way",body:"Fresh work does not need aggressive rubbing. Use a small amount and press gently rather than dragging at peeling or tender skin."},
      {kicker:"06 · PROTECT",title:"Still use sunscreen",body:"Fruity Puppy is skin nutrition, not SPF. Once a tattoo is healed, sun protection still matters for long-term color care."}
    ]}
    imageBandImage="https://fruitypuppy.com/images/tattoo-mars-attacks.jpg"
    imageBandAlt="Colorful Mars Attacks themed tattoo"
    imageBandEyebrow="HEALED INK"
    imageBandTitle="Stained-glass polish for old work."
    imageBandBody="Tattoos do not stop needing skin care when the peeling ends. Consistent moisture can make dry, ashy surface texture look smoother, which lets healed ink read more clearly. That is cosmetic care—not a promise to restore pigment that has actually faded."
    imageBandQuote="Feed the skin carrying the art."
    honestyTitle="Artist first. Fruity Puppy second."
    honestyBody="Fruity Puppy is not a wound treatment and does not replace your tattoo artist's aftercare instructions. Do not put it on actively bleeding, weeping, infected, or otherwise open skin. Start only when your artist says moisturizing is appropriate. If healing looks abnormal, contact your artist or a medical professional."
    faqs={[
      {q:"Can I use Fruity Puppy on a fresh tattoo?",a:"Only after your artist says it is time to moisturize. Use a very thin layer and apply gently. Do not use it on open, weeping, or infected skin."},
      {q:"Will it make an old tattoo look brighter?",a:"Moisturized, smoother skin can make healed ink look less dull or ashy. Fruity Puppy does not replace pigment that has genuinely faded."},
      {q:"Is it petroleum-free?",a:"Yes. Fruity Puppy Original uses a plant-butter and oil matrix rather than petrolatum."},
      {q:"Does it replace sunscreen?",a:"No. Fruity Puppy is not SPF. Use appropriate sun protection on healed tattoos."}
    ]}
    ctaTitle="Feed the ink."
    ctaBody="One cold jar for the skin carrying the art."
    shopLabel="Shop Fruity Puppy Original"
  />;
}
