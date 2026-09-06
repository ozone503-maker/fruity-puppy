# Fruity Puppy site

Marketing site for **Fruity Puppy** fresh biological skincare from FlashTown, Hawaii Island.

**GitHub:** https://github.com/ozone503-maker/fruity-puppy

This checkout is a vinext / Next.js App Router app (`app/`). Shop checkout stays on Shopify (`shop.fruitypuppy.com`).

## Site config

Canonical URLs and internal paths live in `app/site-config.ts`:

- `SITE_BASE` — `NEXT_PUBLIC_SITE_URL` or `https://fruity-puppy.netlify.app`
- `ASK_IPO_HREF` — `/ask-ipo`
- `BLOG_HREF` — `/blog`

Set `NEXT_PUBLIC_SITE_URL` in your host env for production sitemap / schema URLs.

## Local development

Prerequisites: Node.js `>=22.13.0`.

Install dependencies with your package manager lockfile install, then start the vinext/Vite dev server via the `dev` script.

Diagnostic / Sites lifecycle scripts remain for the original vinext/Sites workflow. Prefer a standard Next production build (or Vercel's default) when deploying outside Cloudflare Sites.

## Deploy

### Preferred: Vercel

This App Router tree deploys most cleanly on Vercel.

1. Import https://github.com/ozone503-maker/fruity-puppy in the Vercel dashboard (set the project root to this folder if needed).
2. Framework: Next.js (see `vercel.json`).
3. Set `NEXT_PUBLIC_SITE_URL` to your production origin.
4. Deploy. No DNS changes are required from this repo.

Use `npx vercel` from this directory if you prefer the CLI.

### Netlify (best-effort)

`netlify.toml` publishes `public/` static assets (images, favicon). **Full vinext on Netlify is awkward** (vinext targets Cloudflare Workers / Vite). Prefer Vercel for the interactive Next app.

1. Connect the GitHub repo in Netlify.
2. Review `netlify.toml` (`publish = "public"`). To attempt a Next runtime deploy, enable `@netlify/plugin-nextjs` in Netlify and point the build command at a Next production build.
3. Set `NEXT_PUBLIC_SITE_URL` when using dynamic URL generation.

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

- vinext: https://github.com/cloudflare/vinext
- Shop: https://shop.fruitypuppy.com
