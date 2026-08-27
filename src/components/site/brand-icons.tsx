// Real brand logos (not generic outline icons) for social links.
// Instagram uses its official gradient; LinkedIn uses its official blue.

export function InstagramIcon({ className }: { className?: string }) {
  const gradientId = "ig-gradient";
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <defs>
        <radialGradient
          id={gradientId}
          cx="30%"
          cy="107%"
          r="150%"
        >
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill={`url(#${gradientId})`} />
      <path
        d="M12 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2Zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
        fill="#fff"
      />
      <circle cx="16.9" cy="7.1" r="1.1" fill="#fff" />
      <rect
        x="4.6"
        y="4.6"
        width="14.8"
        height="14.8"
        rx="4.4"
        stroke="#fff"
        strokeWidth="1.3"
        fill="none"
      />
    </svg>
  );
}

export function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#0A66C2" />
      <path
        fill="#fff"
        d="M7.12 9.4H4.62v9.1h2.5Zm-1.25-1.13a1.45 1.45 0 1 0 0-2.9 1.45 1.45 0 0 0 0 2.9ZM19.38 18.5v-5c0-2.68-1.43-3.93-3.34-3.93a2.88 2.88 0 0 0-2.61 1.44h-.04V9.4h-2.4v9.1h2.5v-4.5c0-1.19.22-2.34 1.7-2.34 1.45 0 1.47 1.36 1.47 2.42v4.42Z"
      />
    </svg>
  );
}
