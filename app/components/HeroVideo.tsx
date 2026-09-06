"use client";

import { useRef, useState } from "react";

const MAX_PLAYS = 4;

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playsRef = useRef(1);
  const [muted, setMuted] = useState(true);

  function toggleMute() {
    const video = videoRef.current;
    if (!video) return;
    const next = !muted;
    video.muted = next;
    setMuted(next);
  }

  function handleEnded() {
    const video = videoRef.current;
    if (!video) return;
    if (playsRef.current >= MAX_PLAYS) {
      video.pause();
      return;
    }
    playsRef.current += 1;
    video.currentTime = 0;
    void video.play().catch(() => {});
  }

  return (
    <>
      <div className="heroPhoto">
        <video
          ref={videoRef}
          className="heroVideo"
          src="/images/hero/home-hero.mp4"
          poster="/images/hero/home-hero-poster.jpg"
          autoPlay
          muted={muted}
          playsInline
          preload="metadata"
          aria-hidden="true"
          onEnded={handleEnded}
        />
      </div>
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
    </>
  );
}
