// Mark: a house gable whose crossbar is a spirit level with a centered bubble.
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <path
        d="M6 22 24 7l18 15"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <path d="M10 25v16h28V25" stroke="currentColor" strokeWidth="3.5" strokeLinecap="square" />
      <rect x="14" y="29" width="20" height="7" stroke="currentColor" strokeWidth="2.5" />
      <rect x="21.5" y="31.5" width="5" height="2" fill="#c9d64f" />
    </svg>
  );
}

export function LogoWordmark() {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark className="h-9 w-9 shrink-0 text-door" />
      <span className="leading-none">
        <span className="block font-display text-[1.35rem] font-extrabold tracking-tight text-ink">
          DAVMEL
        </span>
        <span className="spec-plate block tracking-[0.28em] text-[0.58rem]">REMODELING</span>
      </span>
    </span>
  );
}
