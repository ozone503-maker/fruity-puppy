# Fruity Puppy site

Marketing site for **Fruity Puppy** fresh biological skincare from FlashTown, Hawaii Island.

**GitHub:** https://github.com/ozone503-maker/fruity-puppy

This checkout is a **Next.js App Router** app (`app/`). Shop checkout stays on Shopify (`shop.fruitypuppy.com`).

Legacy vinext / Cloudflare Workers files (`vite.config.ts`, `worker/`, `scripts/*`) may still be present for reference but are **not** used for production builds.

## Site config

Canonical URLs and internal paths live in `app/site-config.ts`:

- `SITE_BASE` — `NEXT_PUBLIC_SITE_URL` or `https://fruity-puppy.netlify.app`
- `ASK_IPO_HREF` — `/ask-ipo`
- `BLOG_HREF` — `/blog`

Set `NEXT_PUBLIC_SITE_URL` in your host env for production sitemap / schema URLs.

## Local development

Prerequisites: Node.js `>=20.9.0` (Node 22 recommended on Vercel).

Use the lockfile with your Node package manager, then run the `dev` script.
For a production artifact locally, run the `build` script (which calls `next build` and writes `.next/`), then the `start` script.

## Deploy

### Preferred: Vercel

1. Import https://github.com/ozone503-maker/fruity-puppy in the Vercel dashboard (root directory = this repo root, or the `site-source` folder if nested).
2. Framework preset: **Next.js** (`vercel.json` sets `framework` and `buildCommand`).
3. Set `NEXT_PUBLIC_SITE_URL` to your production origin (e.g. `https://your-app.vercel.app`).
4. Deploy. No DNS changes are required from this repo.

CLI alternative from this directory: the Vercel CLI (`vercel`).

### Netlify (static fallback only)

`netlify.toml` publishes `public/` (images, favicon). It does **not** run the Next.js app. Prefer Vercel for the interactive site.

1. Connect the GitHub repo in Netlify.
2. Review `netlify.toml` (`publish = "public"`).
3. Optional: set `NEXT_PUBLIC_SITE_URL` if you later enable a Next runtime on Netlify.

Default public preview base used in config: `https://fruity-puppy.netlify.app`.

## Notable routes

| Path | Purpose |
|------|---------|
| `/` | Home + embedded Ask Ipo |
| `/ask-ipo` | Full-page Ask Ipo (`IpoWidget`) |
| `/blog`, `/f/[slug]` | Ipo's blog |
| `/lava-guava` | **LAVA-GUAVA** Bomb Balm story |
| `/privacy`, `/terms`, `/returns` | Short cosmetic / disclaimer stubs |

Product copy is cosmetic-only. Ask Ipo is an AI guide, not a medical provider.

## Learn more

- Next.js: https://nextjs.org/docs
- Shop: https://shop.fruitypuppy.com
