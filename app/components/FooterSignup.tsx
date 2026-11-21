"use client";

import { useState, type FormEvent } from "react";
import { usePathname } from "next/navigation";

const OK = "You're on the list. Good choice.";
const FAIL = "That didn't take. Try again?";

/** "Get on the list." email signup that sits at the bottom of every footer. Posts to the store API. */
export default function FooterSignup({ id = "fp-signup-email" }: { id?: string } = {}) {
  const pathname = usePathname() || "/";
  const [state, setState] = useState<"idle" | "busy" | "ok" | "err">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") || "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { setState("err"); return; }
    setState("busy");
    try {
      const res = await fetch("/store/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website: String(data.get("website") || ""), source: pathname }),
      });
      const body = await res.json().catch(() => ({}));
      if (res.ok && body.ok) { setState("ok"); form.reset(); } else setState("err");
    } catch {
      setState("err");
    }
  }

  return (
    <form className="fpSignup" onSubmit={onSubmit} noValidate>
      <p className="fpSignupHead"><b>Get on the list.</b> <span>Skin news from a pink robot dog. No spam. I&rsquo;d know.</span></p>
      <p className="fpSignupRow">
        <label className="fpSr" htmlFor={id}>Email</label>
        <input id={id} type="email" name="email" autoComplete="email" inputMode="email" placeholder="you@email.com" required maxLength={254} />
        <input className="fpHp" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <button type="submit" disabled={state === "busy"}>I&rsquo;m in</button>
      </p>
      <small className="fpSignupConsent">By signing up you agree to get Fruity Puppy emails. Unsubscribe anytime.</small>
      <span className="fpSignupMsg" role="status" aria-live="polite">{state === "ok" ? OK : state === "err" ? FAIL : ""}</span>
    </form>
  );
}
