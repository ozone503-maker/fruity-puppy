import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // The email signup is proxied to the store app, which would otherwise only see Vercel's proxy IP.
  // Pass the visitor's IP (for per-IP rate limiting; the store stores only a salted hash) with a shared key.
  let response: NextResponse;
  const key = process.env.FP_PROXY_KEY;
  if (key && request.method === "POST" && request.nextUrl.pathname === "/store/api/subscribe") {
    const headers = new Headers(request.headers);
    const ip = (request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "").split(",")[0].trim();
    headers.set("x-fp-client-ip", ip);
    headers.set("x-fp-proxy-key", key);
    response = NextResponse.next({ request: { headers } });
  } else {
    response = NextResponse.next();
  }
  const origin = response.headers.get("Access-Control-Allow-Origin");
  if (origin === "*") {
    response.headers.delete("Access-Control-Allow-Origin");
  }
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
