/** Shopify product URLs and live prices. Story site stays on this domain; checkout stays on the shop. */
export const SHOP = {
  original: "https://shop.fruitypuppy.com/products/fruity-puppy",
  fpx: "https://shop.fruitypuppy.com/products/fpx-fruity-puppy-xtreme",
  faceJuice: "https://shop.fruitypuppy.com/products/thorny-toad-face-juice",
  moonTea: "https://shop.fruitypuppy.com/products/thorny-toad-moon-tea",
  sample:
    "https://shop.fruitypuppy.com/products/free-sample-fruity-puppy-original-5-shipping-amp-handling",
} as const;

export const PRICE = {
  original: "$59.99",
  fpx: "$59.99",
  faceJuice: "$29.99",
  moonTea: "$29.99",
  sample: "$5 shipping",
} as const;
