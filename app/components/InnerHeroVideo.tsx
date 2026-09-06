"use client";

type Props = {
  src: string;
  poster: string;
  label?: string;
};

export default function InnerHeroVideo({ src, poster, label = "Hero video" }: Props) {
  return (
    <video
      className="innerHeroVideo"
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
    />
  );
}
