import type { NextConfig } from "next";

const securityHeaders = [
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
  { key: "Access-Control-Allow-Origin", value: "https://www.fruitypuppy.com" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'self'",
      "form-action 'self' https://shop.fruitypuppy.com https://checkout.stripe.com",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://shop.fruitypuppy.com https://cdn.shopify.com https://img1.wsimg.com",
      "media-src 'self' blob:",
      "font-src 'self' data:",
      "connect-src 'self' https://ipo-worker.ozone503.workers.dev https://shop.fruitypuppy.com https://checkout.stripe.com https://api.stripe.com",
      "frame-src 'self'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/shop", destination: "/store", permanent: false },
      { source: "/cart", destination: "/store", permanent: false },
      { source: "/checkout", destination: "/store", permanent: false },
    ];
  },
  async rewrites() {
    return {
      // /store is the Store Kit app (github.com/ozone503-maker/store-kit, Vercel project fruity-puppy-store):
      // storefront, cart, checkout, webhooks and admin all live there. Do not add app/store pages here;
      // these beforeFiles rewrites win and they would never show. Mount docs: store-kit/mount/README.md.
      beforeFiles: [
      { source: "/store", destination: "https://fruity-puppy-store.vercel.app/" },
      { source: "/store.css", destination: "https://fruity-puppy-store.vercel.app/store.css" },
      { source: "/cart.js", destination: "https://fruity-puppy-store.vercel.app/cart.js" },
      { source: "/store/product/:path*", destination: "https://fruity-puppy-store.vercel.app/product/:path*" },
      { source: "/store/buy/:sku", destination: "https://fruity-puppy-store.vercel.app/buy/:sku" },
      { source: "/store/api/:path*", destination: "https://fruity-puppy-store.vercel.app/api/:path*" },
      { source: "/store/cart", destination: "https://fruity-puppy-store.vercel.app/cart" },
      { source: "/store/cart/", destination: "https://fruity-puppy-store.vercel.app/cart/" },
      { source: "/store/confirmation", destination: "https://fruity-puppy-store.vercel.app/confirmation" },
      { source: "/store/confirmation/", destination: "https://fruity-puppy-store.vercel.app/confirmation/" },
      { source: "/store/cart.js", destination: "https://fruity-puppy-store.vercel.app/cart.js" },
      { source: "/store/store.css", destination: "https://fruity-puppy-store.vercel.app/store.css" },
      { source: "/store/signup.js", destination: "https://fruity-puppy-store.vercel.app/signup.js" },
      { source: "/store/unsubscribe", destination: "https://fruity-puppy-store.vercel.app/unsubscribe" },
      { source: "/store/admin", destination: "https://fruity-puppy-store.vercel.app/admin/" },
      { source: "/store/admin/", destination: "https://fruity-puppy-store.vercel.app/admin/" },
      { source: "/store/ship/:id", destination: "https://fruity-puppy-store.vercel.app/ship/:id" },
      // /spin_to_win is the Fruity Puppy Slots game (github.com/ozone503-maker/reel-engine, Vercel project reel-engine),
      // built with base /spin_to_win/ so its assets load through these rewrites.
      { source: "/spin_to_win", destination: "https://reel-engine-ozone503-6682.vercel.app/spin_to_win/" },
      { source: "/spin_to_win/", destination: "https://reel-engine-ozone503-6682.vercel.app/spin_to_win/" },
      { source: "/spin_to_win/:path+", destination: "https://reel-engine-ozone503-6682.vercel.app/spin_to_win/:path+" },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/audio/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
