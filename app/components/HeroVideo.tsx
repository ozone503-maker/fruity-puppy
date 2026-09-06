"use client";

import { useEffect, useRef, useState } from "react";

type HeroVideoProps = {
  src?: string;
  poster?: string;
  maxPlays?: number;
  silent?: boolean;
};

export default function HeroVideo({
  src = "/images/hero/home-hero.mp4",
  poster = "/images/hero/home-hero-poster.jpg",
  maxPlays = 2,
  silent = false,
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playsRef = useRef(0);
  const inViewRef = useRef(true);
  const [muted, setMuted] = useState(true);

  function toggleMute() {
    if (silent) return;
    const video = videoRef.current;
    if (!video) return;
    const next = !muted;
    video.muted = next;
    setMuted(next);
  }

  function restartCycle() {
    const video = videoRef.current;
    if (!video) return;
    playsRef.current = 1;
    video.currentTime = 0;
    void video.play().catch(() => {});
  }

  function handleEnded() {
    const video = videoRef.current;
    if (!video || !inViewRef.current) return;
    if (playsRef.current >= maxPlays) {
      video.pause();
      return;
    }
    playsRef.current += 1;
    video.currentTime = 0;
    void video.play().catch(() => {});
  }

  useEffect(() => {
    const video = videoRef.current;
    const root = video?.closest(".hero") || video?.parentElement;
    if (!video || !root) return;

    playsRef.current = 1;
    if (silent) {
      video.muted = true;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((e) => e.isIntersecting && e.intersectionRatio >= 0.35);
        const wasVisible = inViewRef.current;
        inViewRef.current = visible;

        if (visible && !wasVisible) restartCycle();
        else if (!visible && wasVisible) video.pause();
      },
      { threshold: [0, 0.35, 0.6] }
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, [maxPlays, silent]);

  return (
    <>
      <div className="heroPhoto">
        <video
          ref={videoRef}
          className="heroVideo"
          src={src}
          poster={poster}
          autoPlay
          muted={silent ? true : muted}
          playsInline
          preload="metadata"
          aria-hidden="true"
          onEnded={handleEnded}
        />
      </div>
      {silent ? null : (
        <button
          type="button"
          className="heroAudioBtn"
          onClick={toggleMute}
          aria-label={muted ? "Unmute hero video" : "Mute hero video"}
          aria-pressed={!muted}
        >
          {muted ? (
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
              <path fill="currentColor" d="M16.5 12a4.5 4.5 0 0 0-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.8 8.8 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.94 8.94 0 0 0 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4 9.91 6.09 12 8.18V4z"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
              <path fill="currentColor" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
            </svg>
          )}
          <span className="heroAudioBtnLabel">{muted ? "Unmute" : "Mute"}</span>
        </button>
      )}
    </>
  );
}
