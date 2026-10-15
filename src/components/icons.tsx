// Small inline icons (hoisted, static JSX).
const common = { width: 15, height: 15, viewBox: "0 0 24 24", "aria-hidden": true } as const;

export const GitHubIcon = (
  <svg {...common} fill="currentColor">
    <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

export const PaperIcon = (
  <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
    <path d="M14 3v5h5M9 13h6M9 17h6" />
  </svg>
);

export const BookIcon = (
  <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" />
    <path d="M4 21V5M19 19v2H6" />
  </svg>
);

export const MailIcon = (
  <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const OrcidIcon = (
  <svg {...common} fill="currentColor">
    <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24ZM8.1 17.4H6.5V7.2h1.6v10.2ZM7.3 6.1a1 1 0 1 1 0-2.1 1 1 0 0 1 0 2.1Zm10.9 6.2c0 2.9-1.8 5.1-5.3 5.1H9.7V7.2h3.2c3.4 0 5.3 2.1 5.3 5.1Zm-1.7 0c0-2.1-1.2-3.7-3.8-3.7h-1.4v7.4h1.4c2.6 0 3.8-1.6 3.8-3.7Z" />
  </svg>
);

export const ArrowIcon = (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const CheckIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m5 12 5 5 9-10" />
  </svg>
);

// The SRCM mark, as in the srcm-web header and favicon: SSA bars capped at
// the dashed threshold, the PDE curve arching above it.
export const LogoMark = (
  <span className="logo-mark" aria-hidden="true">
    <svg width="18" height="18" viewBox="0 0 17 17" fill="none">
      <line x1="1.7" y1="13.6" x2="15.3" y2="13.6" stroke="#4a5568" strokeWidth="0.7" />
      <line x1="1.7" y1="6.8" x2="15.3" y2="6.8" stroke="#cf6673" strokeWidth="0.75" strokeDasharray="1.7 1.3" />
      <g fill="#8fb0d1">
        <rect x="2.21" y="11.73" width="1.36" height="1.87" />
        <rect x="4.08" y="12.75" width="1.36" height="0.85" />
        <rect x="5.95" y="6.97" width="1.36" height="6.63" />
        <rect x="7.82" y="6.97" width="1.36" height="6.63" />
        <rect x="9.69" y="7.31" width="1.36" height="6.29" />
        <rect x="11.56" y="12.41" width="1.36" height="1.19" />
        <rect x="13.43" y="12.92" width="1.36" height="0.68" />
      </g>
      <path d="M1.7 12.75C3.4 13.18 4.42 8.93 6.12 5.78 7.48 3.4 9.52 3.4 10.88 5.78c1.7 2.89 2.55 6.97 4.42 7.48" stroke="#4e8bc4" strokeWidth="1" strokeLinecap="round" />
    </svg>
  </span>
);
