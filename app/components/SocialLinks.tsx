import type { ReactNode } from "react";
import { SOCIAL } from "../social";

const ICONS: Record<string, ReactNode> = {
  x: <><path d="M4 4h4.6L20 20h-4.6z" /><path d="M19.6 4l-6.4 7.1M4.4 20l6.4-7.1" /></>,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" /></>,
  tiktok: <><path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5" /><path d="M14 3c.5 2.9 2.4 4.7 5 4.9" /></>,
  youtube: <><rect x="2" y="5" width="20" height="14" rx="4" /><path d="M10 9l5 3-5 3z" fill="currentColor" stroke="none" /></>,
  facebook: <><path d="M15 3h-2.4A3.6 3.6 0 0 0 9 6.6V21" /><path d="M6 10.5h8" /></>,
};

/** Inline-SVG social icon links. Inherits the surrounding text color. */
export default function SocialLinks({ className = "socialLinks" }: { className?: string }) {
  return (
    <span className={className}>
      {SOCIAL.map((s) => (
        <a key={s.key} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`Fruity Puppy on ${s.label}`} title={s.label}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
            {ICONS[s.key]}
          </svg>
        </a>
      ))}
    </span>
  );
}
