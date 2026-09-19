"use client";

import { useEffect, useRef, useState } from "react";

type AmbientScrollAudioProps = {
  src?: string;
  triggerSelector?: string;
};

const TARGET_VOLUME = 0.32;
const FADE_MS = 2200;

export default function AmbientScrollAudio({
  src = "/audio/jungle-ambience.mp3",
  triggerSelector = "#why, .intro, #cream-story",
}: AmbientScrollAudioProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const unlockedRef = useRef(false);
  const startedRef = useRef(false);
  const mutedRef = useRef(false);
  const playingRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [needsGesture, setNeedsGesture] = useState(false);

  function publish(nextPlaying: boolean, nextMuted: boolean) {
    if (typeof window === "undefined") return;
    window.dispatchEvent(
      new CustomEvent("fp-ambient-state", {
        detail: { playing: nextPlaying, muted: nextMuted },
      })
    );
  }

  function fadeTo(audio: HTMLAudioElement, target: number) {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const startVol = audio.volume;
    const startedAt = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - startedAt) / FADE_MS);
      audio.volume = startVol + (target - startVol) * t;
      if (t < 1) rafRef.current = requestAnimationFrame(step);
      else rafRef.current = null;
    };
    rafRef.current = requestAnimationFrame(step);
  }

  async function startAmbient() {
    const audio = audioRef.current;
    if (!audio || mutedRef.current) return;
    if (!unlockedRef.current) {
      setNeedsGesture(true);
      publish(false, mutedRef.current);
      return;
    }
    try {
      if (audio.paused) await audio.play();
      fadeTo(audio, TARGET_VOLUME);
      startedRef.current = true;
      playingRef.current = true;
      setPlaying(true);
      setNeedsGesture(false);
      publish(true, false);
    } catch {
      setNeedsGesture(true);
      playingRef.current = false;
      setPlaying(false);
      publish(false, mutedRef.current);
    }
  }

  function stopAmbient() {
    const audio = audioRef.current;
    if (!audio) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    audio.pause();
    audio.volume = 0;
    playingRef.current = false;
    setPlaying(false);
    publish(false, mutedRef.current);
  }

  function turnOn() {
    unlockedRef.current = true;
    mutedRef.current = false;
    setMuted(false);
    setNeedsGesture(false);
    void startAmbient();
  }

  function turnOff() {
    mutedRef.current = true;
    setMuted(true);
    setNeedsGesture(false);
    stopAmbient();
  }

  function toggleMute() {
    // Idle shows "Soundscape off" — first tap must turn sound ON, not mute.
    if (playingRef.current && !mutedRef.current) turnOff();
    else turnOn();
  }

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0;
    audioRef.current = audio;

    const unlock = () => {
      unlockedRef.current = true;
      setNeedsGesture(false);
      if (startedRef.current || window.scrollY > window.innerHeight * 0.45) {
        void startAmbient();
      }
    };

    window.addEventListener("pointerdown", unlock, { once: true });
    window.addEventListener("keydown", unlock, { once: true });

    const onToggle = () => toggleMute();
    const onPlay = () => turnOn();
    const onStop = () => turnOff();
    window.addEventListener("fp-ambient-toggle", onToggle as EventListener);
    window.addEventListener("fp-ambient-play", onPlay as EventListener);
    window.addEventListener("fp-ambient-stop", onStop as EventListener);

    const trigger = document.querySelector(triggerSelector);

    const observer = trigger
      ? new IntersectionObserver(
          (entries) => {
            const hit = entries.some((e) => e.isIntersecting);
            if (hit && !startedRef.current && !mutedRef.current) void startAmbient();
          },
          { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
        )
      : null;
    if (trigger && observer) observer.observe(trigger);

    const useCaseLinks: Array<[string, string]> = [
      [".useGrid article:nth-child(2)", "/sunburn"],
      [".useGrid article:nth-child(3)", "/tattoo"],
      [".useGrid article:nth-child(4)", "/problem-skin"],
    ];

    const linkedCards = useCaseLinks
      .map(([selector, href]) => {
        const card = document.querySelector<HTMLElement>(selector);
        if (!card) return null;

        card.setAttribute("role", "link");
        card.setAttribute("tabindex", "0");
        card.setAttribute(
          "aria-label",
          `${card.querySelector("h3")?.textContent || "Skin use"}: learn more`
        );
        card.style.cursor = "pointer";

        const go = () => window.location.assign(href);
        const onKeyDown = (event: KeyboardEvent) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            go();
          }
        };

        card.addEventListener("click", go);
        card.addEventListener("keydown", onKeyDown);
        return { card, go, onKeyDown };
      })
      .filter(Boolean) as Array<{
      card: HTMLElement;
      go: () => void;
      onKeyDown: (event: KeyboardEvent) => void;
    }>;

    publish(false, false);

    return () => {
      observer?.disconnect();
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
      window.removeEventListener("fp-ambient-toggle", onToggle as EventListener);
      window.removeEventListener("fp-ambient-play", onPlay as EventListener);
      window.removeEventListener("fp-ambient-stop", onStop as EventListener);
      linkedCards.forEach(({ card, go, onKeyDown }) => {
        card.removeEventListener("click", go);
        card.removeEventListener("keydown", onKeyDown);
      });
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src, triggerSelector]);

  async function enableSound() {
    turnOn();
  }

  return (
    <div className="ambientAudioDock" aria-live="polite">
      {needsGesture && !muted ? (
        <button type="button" className="ambientEnableBtn" onClick={enableSound}>
          Play soundscape
        </button>
      ) : null}
      <button
        type="button"
        className="ambientMuteBtn"
        onClick={toggleMute}
        aria-label={muted || !playing ? "Turn soundscape on" : "Turn soundscape off"}
        aria-pressed={playing && !muted}
      >
        {muted || !playing ? "Soundscape off" : "Soundscape on"}
      </button>
    </div>
  );
}
