// Single-tone social marks. Links are intentionally inactive until channels are approved.
const ICONS = {
  LinkedIn: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="8" width="4" height="13" rx="1" className="filled" />
      <circle cx="5" cy="4.5" r="2" className="filled" />
      <path d="M11 21V8h4v2c1.2-1.7 2.7-2.5 4.5-2.5 2.9 0 4.5 1.9 4.5 5.4V21h-4v-7.1c0-1.8-.7-2.8-2.2-2.8-1.7 0-2.8 1.2-2.8 3.5V21z" className="filled" />
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 21v-8h3l.5-4H14V6.7c0-1.2.4-2 2.1-2H18V1.2c-.6-.1-1.9-.2-3.3-.2-3.3 0-5.5 2-5.5 5.7V9H6v4h3.2v8z" className="filled" />
    </svg>
  ),
  X: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 3l16 18M20 3L4 21" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.7" r="1" className="filled" />
    </svg>
  ),
  YouTube: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 12s0-4-1-5c-.8-.9-1.7-1-2.2-1.1C16 5.5 12 5.5 12 5.5s-4 0-6.8.4C4.7 6 3.8 6.1 3 7 2 8 2 12 2 12s0 4 1 5c.8.9 1.7 1 2.2 1.1 2.8.4 6.8.4 6.8.4s4 0 6.8-.4c.5-.1 1.4-.2 2.2-1.1 1-1 1-5 1-5z" />
      <path d="M10 9l5 3-5 3z" className="filled" />
    </svg>
  )
};

export function SocialIcon({ name }) {
  return (
    <span className="footer-social-icon" role="img" aria-label={name} title={name}>
      {ICONS[name]}
    </span>
  );
}
