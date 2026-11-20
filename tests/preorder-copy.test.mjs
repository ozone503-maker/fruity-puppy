import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const page = readFileSync(join(root, "app/page.tsx"), "utf8");
const css = readFileSync(join(root, "app/preorder-lab.css"), "utf8");

const heroStart = page.indexOf('<section className="hero">');
const heroEnd = page.indexOf("</section>", heroStart) + "</section>".length;
const hero = page.slice(heroStart, heroEnd);
const labStart = page.indexOf('<section className="labMove"');
const labEnd = page.indexOf("</section>", labStart) + "</section>".length;
const lab = page.slice(labStart, labEnd);

test("homepage hero is a $59.99 Original preorder shipping Dec 1", () => {
  assert.match(hero, /Skin eats/);
  assert.match(hero, /Feed it well/);
  assert.match(hero, /The \$59\.99 Fruity Puppy Original jar is a preorder, and it ships Dec 1/);
  assert.match(hero, /href=\{shop\}>Preorder now</);
  assert.doesNotMatch(page, /NEW BATCH COMING SOON/);
  assert.doesNotMatch(page, /Please be patient with us/);
  assert.doesNotMatch(hero, /Buy Now/);
  assert.doesNotMatch(hero, /className="button pink heroBuy"/);
  assert.doesNotMatch(hero, /—/);
});

test("lab section uses only the approved production facts", () => {
  assert.match(lab, /No more blue cabin/);
  assert.match(lab, /real lab in Scottsdale, Arizona/);
  assert.match(lab, /pure rare concentrated slurry/);
  assert.match(lab, /formula and the directions/);
  assert.match(lab, /better quality control and reliability/);
  assert.match(lab, /lower and faster shipping/);
  assert.match(lab, /no seasonal agricultural issues/);
  assert.doesNotMatch(lab, /certif/i);
  assert.doesNotMatch(lab, /FDA/);
  assert.doesNotMatch(lab, /—/);
});

test("hero preorder button is copper metallic, not a red area", () => {
  assert.match(css, /#c4843a/);
  assert.doesNotMatch(css, /--pink|#e0517d/);
  assert.doesNotMatch(css, /newBatchBar/);
});
