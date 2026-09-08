import type { Metadata } from "next";
import UseCasePage from "../components/UseCasePage";

export const metadata: Metadata = {
  title: "Sun-Exposed Skin | Fruity Puppy Original",
  description: "Fridge-cold fruit-and-lipid moisture for sun-exposed skin. Cosmetic after-sun comfort, not sunscreen or medical burn treatment.",
};

export default function Page(){
  return <UseCasePage
    tone="sunburn"
    eyebrow="SUN-EXPOSED SKIN · AFTER-SUN COMFORT"
    title="Too much sun?"
    accent="Go cold."
    lead="Fruity Puppy Original goes straight from the fridge to sun-exposed skin with fresh aloe, whole tropical fruit, and a rich plant-lipid matrix. Cooling comfort and moisture—without pretending cream can undo UV damage."
    heroImage="/images/process/fresh-aloe.jpg"
    heroAlt="Fresh aloe prepared for Fruity Puppy Original"
    heroCaption="FRESH ALOE · BIG ISLAND, HAWAIʻI"
    heroVideo="/images/hero/home-hero.mp4"
    heroPoster="/images/process/fresh-aloe.jpg"
    musicBed="/audio/sunburn-ambience.mp3"
    introEyebrow="AFTER THE BEACH"
    introTitle="Sun-stressed skin wants less drama."
    introBody="Heat, salt, wind, and UV exposure can leave skin feeling tight, dry, flushed, and depleted. Fruity Puppy Original is not sunscreen and not a burn medicine. Its job here is simpler: cold sensory relief, moisture support, and a fresh botanical phase for skin that has had enough for one day."
    cardsTitle="The cold-cream reset."
    cards={[
      {kicker:"01 · COOL",title:"Straight from the fridge",body:"Cold application can feel immediately comforting on skin that feels hot after a long day outside."},
      {kicker:"02 · HYDRATE",title:"Fresh aloe + fruit phase",body:"Fresh aloe and whole tropical fruit bring water-rich botanical material into the formula without making it a water-first lotion."},
      {kicker:"03 · SEAL",title:"Plant lipids hold moisture",body:"Shea, mango, cocoa, and 92° coconut oil help reduce the dry, tight feeling that can follow heat, wind, salt, and sun."},
      {kicker:"04 · GO GENTLE",title:"No aggressive exfoliation",body:"Recently sun-stressed skin does not need FPX, scrubs, or strong acids. Keep the routine quiet until the skin feels normal again."},
      {kicker:"05 · REAPPLY SPF",title:"Protection still matters",body:"Fruity Puppy does not provide SPF. Use appropriate sunscreen and protective clothing before the next round of sun exposure."},
      {kicker:"06 · KNOW THE LINE",title:"A real burn is different",body:"Blistering, severe pain, fever, dizziness, or widespread burn symptoms need medical guidance—not more skincare."}
    ]}
    imageBandImage="/images/process/open-cream.jpg"
    imageBandAlt="Open jar of fresh Fruity Puppy cream"
    imageBandEyebrow="WHY ORIGINAL"
    imageBandTitle="Cold fruit cream, not an acid treatment."
    imageBandBody="Sun-exposed skin is exactly where the distinction between Original and FPX matters. Original is the gentler, moisture-focused Fruity Puppy. FPX is extra-strength exfoliation and should not be used on already irritated or sunburned skin."
    imageBandQuote="When skin is already yelling, do not yell back."
    honestyTitle="After-sun care is not sun protection."
    honestyBody="Fruity Puppy does not prevent sunburn, reverse UV injury, replace sunscreen, or treat serious burns. Use broad-spectrum sun protection as appropriate. For blistering, extensive burns, severe pain, dehydration symptoms, fever, or other concerning symptoms, seek medical care."
    faqs={[
      {q:"Can I put Fruity Puppy on sunburned skin?",a:"For mild sun-exposed skin that is intact, a small amount of Original may feel cooling and moisturizing. Do not use on blistered, open, or severely burned skin."},
      {q:"Should I use FPX after too much sun?",a:"No. FPX is the extra-strength exfoliating formula and is not for already irritated, broken, or sunburned skin."},
      {q:"Does Fruity Puppy replace aloe gel?",a:"It is a different product. Fruity Puppy Original contains fresh aloe inside a richer fruit-and-lipid cream designed for moisture support."},
      {q:"Does it have SPF?",a:"No. Fruity Puppy is not sunscreen and should never be used as a substitute for sun protection."}
    ]}
    ctaTitle="Cool it down. Feed it well."
    ctaBody="Original, straight from the fridge, for skin that spent too long outside."
    shopLabel="Shop Fruity Puppy Original"
  />;
}
