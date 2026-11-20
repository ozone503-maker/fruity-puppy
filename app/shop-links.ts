/** Store links and live prices. Every purchase goes through the Fruity Puppy Store at /store. */
export const SHOP = {
  original: "/store",
  fpx: "/store/product/fpx",
  faceJuice: "/store/product/thorny-toad",
  moonTea: "/store/product/moon-tea",
  sample:
    "/store",
} as const;

/** Direct-buy links: one unit straight to Stripe Checkout (store route /store/buy/<sku>). */
export const BUY = {
  original: "/store/buy/FP-2OZ",
  sample: "/store/buy/FP-SAMPLE",
} as const;

export const PRICE = {
  original: "$59.99",
  fpx: "$59.99",
  faceJuice: "$29.99",
  moonTea: "$29.99",
  sample: "$5 shipping",
} as const;
