"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { ASK_IPO_HREF } from "../site-config";

type Message = { role: "user" | "assistant"; content: string };
type IpoState = "idle" | "greeting" | "listening" | "thinking" | "speaking" | "excited" | "concerned" | "sleeping" | "clarifying" | "teaching";
const WORKER_URL = "https://ipo-worker.ozone503.workers.dev";
const quickStarts = ["Dry Skin", "Sensitive Skin", "Acne", "Tattoos", "What’s In It?", "Find My Product"];
const portraits: Record<IpoState, string> = Object.fromEntries(["idle","greeting","listening","thinking","speaking","excited","concerned","sleeping","clarifying","teaching"].map(name => [name, `/images/ipo/${name}.png`])) as Record<IpoState,string>;

function chooseExpression(text: string): IpoState {
  const lower = text.toLowerCase();
  if (/doctor|dermatologist|urgent|serious|pain|infection|allerg|reaction/.test(lower)) return "concerned";
  if (/ingredient|antioxidant|papaya|lecithin|barrier|enzyme|science|why|how/.test(lower)) return "teaching";
  if (/tell me more|which|what do you mean|could you|can you describe/.test(lower)) return "clarifying";
  if (/!|amazing|love|great|aloha/.test(lower)) return "excited";
  return "speaking";
}

export default function IpoWidget() {
  const [messages, setMessages] = useState<Message[]>([{ role: "assistant", content: "Aloha! Tell me about your skin and I’ll help you find the right place to start." }]);
  const [input, setInput] = useState("");
  const [state, setState] = useState<IpoState>("greeting");
  const [busy, setBusy] = useState(false);
  const [muted, setMuted] = useState(true);
  const [open, setOpen] = useState(true);
  const logRef = useRef<HTMLDivElement>(null);
  useEffect(() => { logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: "smooth" }); }, [messages, busy]);

  async function ask(question: string) {
    const clean = question.trim().slice(0, 800);
    if (!clean || busy) return;
    const next = [...messages, { role: "user" as const, content: clean }];
    setMessages(next); setInput(""); setBusy(true); setState("listening");
    window.setTimeout(() => setState("thinking"), 550);
    try {
      const response = await fetch(WORKER_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: next.slice(-10) }) });
      if (!response.ok) throw new Error("Ipo is unavailable");
      const data = await response.json();
      const reply = data?.content?.[0]?.text || "Something went sideways in the jungle. Try me again?";
      setMessages([...next, { role: "assistant", content: reply }]); setState(chooseExpression(reply));
      if (!muted && "speechSynthesis" in window) { window.speechSynthesis.cancel(); const voice = new SpeechSynthesisUtterance(reply); voice.rate = .96; window.speechSynthesis.speak(voice); }
      window.setTimeout(() => setState("idle"), 6500);
    } catch {
      setMessages([...next, { role: "assistant", content: "I lost the trail for a second. Please try again—or open the full Ask Ipo page." }]); setState("concerned");
    } finally { setBusy(false); }
  }
  function submit(event: FormEvent) { event.preventDefault(); void ask(input); }
  if (!open) return <button className="ipoWake" onClick={() => { setOpen(true); setState("greeting"); }}><img src={portraits.sleeping} alt="Ipo sleeping"/><span>Wake Ipo</span></button>;

  return <section className="ipoWidget" aria-label="Ask Ipo skincare guide">
    <div className="ipoStage"><div className="ipoTitle"><span>Ask Ipo</span><small>Your AI guide to fresh biological skincare</small></div><button className="ipoClose" onClick={() => { setOpen(false); setState("sleeping"); }} aria-label="Minimize Ipo">×</button><img className={`ipoPortrait ipo-${state}`} src={portraits[state]} alt={`Ipo is ${state}`}/><span className="ipoStatus">{busy ? (state === "listening" ? "I’m listening…" : "Thinking in papaya…") : "Ask me about your skin"}</span></div>
    <div className="ipoConversation" ref={logRef} aria-live="polite">{messages.slice(-6).map((message, index) => <div className={`ipoBubble ${message.role}`} key={`${message.role}-${index}`}>{message.content}</div>)}{busy && <div className="ipoBubble assistant ipoDots"><i/><i/><i/></div>}</div>
    <form className="ipoForm" onSubmit={submit}><input value={input} onChange={event => setInput(event.target.value)} onFocus={() => setState("listening")} maxLength={800} placeholder="Ask Ipo anything…" aria-label="Message Ipo"/><button type="button" className="ipoSound" onClick={() => setMuted(!muted)} aria-label={muted ? "Turn Ipo’s voice on" : "Mute Ipo"}>{muted ? "🔇" : "🔊"}</button><button type="submit" disabled={busy || !input.trim()} aria-label="Send message">🐾</button></form>
    <div className="ipoQuick" aria-label="Common questions">{quickStarts.map(item => <button key={item} onClick={() => void ask(item)} disabled={busy}>{item}</button>)}</div>
    <p className="ipoDisclaimer">Ipo is an AI guide, not a medical provider. <a href={ASK_IPO_HREF}>Open full-page Ipo ↗</a></p>
  </section>;
}
