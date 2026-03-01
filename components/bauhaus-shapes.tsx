"use client"

export function BauhausCircle({ className = "", color = "var(--primary)" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <circle cx="100" cy="100" r="90" fill={color} />
    </svg>
  )
}

export function BauhausTriangle({ className = "", color = "var(--secondary)" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <polygon points="100,10 190,190 10,190" fill={color} />
    </svg>
  )
}

export function BauhausSquare({ className = "", color = "var(--primary)" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <rect x="15" y="15" width="170" height="170" fill={color} />
    </svg>
  )
}

export function BauhausSemiCircle({ className = "", color = "var(--secondary)" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 200 100" className={className} aria-hidden="true">
      <path d="M 10 100 A 90 90 0 0 1 190 100" fill={color} />
    </svg>
  )
}

export function BauhausGrid({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true">
      {Array.from({ length: 8 }).map((_, i) => (
        <line
          key={`h-${i}`}
          x1="0"
          y1={i * 50 + 25}
          x2="400"
          y2={i * 50 + 25}
          stroke="var(--primary)"
          strokeWidth="0.5"
          opacity="0.2"
        />
      ))}
      {Array.from({ length: 8 }).map((_, i) => (
        <line
          key={`v-${i}`}
          x1={i * 50 + 25}
          y1="0"
          x2={i * 50 + 25}
          y2="400"
          stroke="var(--primary)"
          strokeWidth="0.5"
          opacity="0.2"
        />
      ))}
    </svg>
  )
}
