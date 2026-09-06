"use client";

type Props = {
  src: string;
  poster: string;
  caption?: string;
};

export default function ProcessBeat({
  src,
  poster,
  caption = "Making Fruity Puppy · FlashTown",
}: Props) {
  return (
    <section className="processBeat" aria-label={caption}>
      <video
        className="processBeatVideo"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      {caption ? <p className="processBeatCaption">{caption}</p> : null}
    </section>
  );
}
