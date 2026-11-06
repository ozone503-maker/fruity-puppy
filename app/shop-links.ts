/** Store links and live prices. Every purchase goes through the Fruity Puppy Store at /store. */
export const SHOP = {
  original: "/store",
  fpx: "/store",
  faceJuice: "/store",
  moonTea: "/store",
  sample:
    "/store",
} as const;

export const PRICE = {
  original: "$59.99",
  fpx: "$59.99",
  faceJuice: "$29.99",
  moonTea: "$29.99",
  sample: "$5 shipping",
} as const;
