import type { Metadata } from "next";
import UseCasePage from "../components/UseCasePage";

export const metadata: Metadata = {
  title: "Problem Skin | Fruity Puppy Original",
  description: "Fresh fruit and plant-lipid moisture for dry, reactive, rough, and stressed skin, with clear cosmetic boundaries.",
};

export default function Page(){
  return <UseCasePage
    tone="problem"
    eyebrow="DRY · REACTIVE · ROUGH · STRESSED"
    title="Skin that's been"
    accent="fighting."
    lead="Redness, flaking, rough texture, breakouts, and skin that stays tight no matter what you put on it—this is the territory Fruity Puppy Original was built to support."
    heroImage="/images/process/cream-texture.jpg"
    heroAlt="Close-up of Fruity Puppy Original cream texture"
    heroCaption="FRUITY PUPPY ORIGINAL · COLD FRUIT CREAM"
    introEyebrow="NOT A PRESCRIPTION"
    introTitle="Support the barrier. Don't pretend to be a doctor."
    introBody="Problem skin is where cosmetic marketing gets reckless fast. Fruity Puppy stays on the honest side of that line: cold application for comfort, plant lipids for moisture support, and a fresh fruit phase rich in naturally occurring antioxidant compounds. It is not a diagnosis, cure, or replacement for medical care."
    cardsTitle="What day-to-day stressed skin may need."
    cards={[
      {kicker:"REDNESS + REACTIVITY",title:"Cooling comfort",body:"Fridge-cold application can feel especially good on skin that runs hot, tight, or easily irritated."},
      {kicker:"FLAKING + ROUGH TEXTURE",title:"Moisture plus gentle surface support",body:"The butter matrix helps soften dry surface texture while papaya contributes naturally occurring enzymes to the fresh fruit phase."},
      {kicker:"CHRONIC DRYNESS",title:"Dense lipid support",body:"Shea, mango, cocoa, and 92° coconut oil create a rich cream for skin that never seems satisfied by thin pump lotion."},
      {kicker:"CLOGGED OR BUMPY TEXTURE",title:"Keep it gentle",body:"For congestion-prone skin, start small and pay attention. Fruity Puppy is rich, fresh, and active-feeling—not a stripped-down gel moisturizer."},
      {kicker:"IRRITATED + TIGHT",title:"Less friction. More cushion.",body:"Press a small amount onto clean skin rather than rubbing aggressively. The goal is comfort and moisture, not scrubbing."},
      {kicker:"ONGOING STRESS",title:"Consistency over miracle claims",body:"Some skin needs steady care more than dramatic promises. Use a small amount, patch test, and adjust based on how your own skin responds."}
    ]}
    imageBandImage="/images/process/fruit-on-ice.jpg"
    imageBandAlt="Fresh tropical fruit placed on ice after harvest"
    imageBandEyebrow="WHY COLD MATTERS"
    imageBandTitle="Fresh fruit. Cold cream. No warehouse fantasy."
    imageBandBody="The formula is handled cold because freshness is part of the product, not a decorative story. Refrigeration also changes the sensory experience: when skin feels hot or overworked, cold cream can simply feel better than room-temperature lotion."
    imageBandQuote="Kept cold, kept fresh, kept honest."
    honestyTitle="Know when skincare is not enough."
    honestyBody="Fruity Puppy is a cosmetic skin-support product, not a prescription treatment. If a skin problem is severe, spreading, infected, suddenly new, painful, or persistent, see a qualified medical professional. If you use prescription topicals, ask your clinician how to layer other products safely."
    faqs={[
      {q:"Can I use Fruity Puppy with prescription skincare?",a:"Possibly, but ask your dermatologist or prescribing clinician. Layering products can change irritation and absorption."},
      {q:"Why fridge-cold?",a:"Cold helps protect the fresh formula and can feel comforting on skin that feels hot or reactive."},
      {q:"Will this cure eczema, rosacea, acne, or another diagnosed condition?",a:"No. Fruity Puppy is a cosmetic moisturizer and skin-support product, not a treatment for diagnosed disease."},
      {q:"Is Original for sensitive skin?",a:"Original was designed with dry and reactive skin in mind, but botanicals still vary by person. Read the full ingredient list and patch test first."}
    ]}
    ctaTitle="Give stressed skin something real."
    ctaBody="Whole fruit. Plant lipids. A tiny amount goes a long way."
    shopLabel="Shop Fruity Puppy Original"
  />;
}
