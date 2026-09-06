"use client";

import { useEffect, useRef, useState } from "react";

const SRC = "/audio/jungle-ambience.mp3";
const TARGET_VOLUME = 0.32;
const FADE_MS = 2200;

export default function AmbientScrollAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const unlockedRef = useRef(false);
  const pastHeroRef = useRef(false);
  const mutedRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [needsGesture, setNeedsGesture] = useState(false);

  function fadeTo(audio: HTMLAudioElement, target: number) {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const startVol = audio.volume;
    const started = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - started) / FADE_MS);
      audio.volume = startVol + (target - startVol) * t;
      if (t < 1) rafRef.current = requestAnimationFrame(step);
      else rafRef.current = null;
    };
    rafRef.current = requestAnimationFrame(step);
  }

  async function startAmbient() {
    const audio = audioRef.current;
    if (!audio || mutedRef.current || !pastHeroRef.current) return;
    if (!unlockedRef.current) {
      setNeedsGesture(true);
      return;
    }
    try {
      if (audio.paused) await audio.play();
      fadeTo(audio, TARGET_VOLUME);
      setPlaying(true);
      setNeedsGesture(false);
    } catch {
      setNeedsGesture(true);
      setPlaying(false);
    }
  }

  function stopAmbient(fade = true) {
    const audio = audioRef.current;
    if (!audio) return;
    if (fade && !audio.paused) {
      fadeTo(audio, 0);
      window.setTimeout(() => {
        if (!pastHeroRef.current && audioRef.current) {
          audioRef.current.pause();
          setPlaying(false);
        }
      }, FADE_MS + 40);
    } else {
      audio.pause();
      audio.volume = 0;
      setPlaying(false);
    }
  }

  useEffect(() => {
    const audio = new Audio(SRC);
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0;
    audioRef.current = audio;

    const unlock = () => {
      unlockedRef.current = true;
      setNeedsGesture(false);
      void startAmbient();
    };

    window.addEventListener("pointerdown", unlock, { once: true });
    window.addEventListener("keydown", unlock, { once: true });

    const trigger =
      document.getElementById("why") || document.querySelector(".intro");

    const observer = trigger
      ? new IntersectionObserver(
          (entries) => {
            const hit = entries.some((e) => e.isIntersecting);
            pastHeroRef.current = hit;
            if (hit) void startAmbient();
            else stopAmbient(true);
          },
          { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
        )
      : null;
    if (trigger && observer) observer.observe(trigger);

    return () => {
      observer?.disconnect();
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function toggleMute() {
    const next = !muted;
    mutedRef.current = next;
    setMuted(next);
    unlockedRef.current = true;
    setNeedsGesture(false);
    if (next) stopAmbient(false);
    else void startAmbient();
  }

  async function enableSound() {
    unlockedRef.current = true;
    mutedRef.current = false;
    setMuted(false);
    setNeedsGesture(false);
    await startAmbient();
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
        aria-label={muted || !playing ? "Unmute soundscape" : "Mute soundscape"}
        aria-pressed={!(muted || !playing)}
      >
        {muted || !playing ? "Soundscape off" : "Soundscape on"}
      </button>
    </div>
  );
}
