const ITEMS = [
  "BATHROOMS",
  "KITCHENS",
  "BASEMENTS",
  "DRYWALL",
  "TILE",
  "FRAMING",
  "DOORS + TRIM",
  "DECKS",
  "WINDOWS",
  "PORCHES",
  "LANCASTER COUNTY",
  "CHESTER COUNTY",
  "PA HIC #PA214721",
  "EST. 2020",
  "ONE CREW, THE WHOLE JOB",
];

function Run() {
  return (
    <span className="flex shrink-0 items-center">
      {ITEMS.map((item) => (
        <span key={item} className="flex items-center">
          <span className="spec-plate whitespace-nowrap px-5 text-ink-soft">{item}</span>
          <span className="h-3 w-px shrink-0 bg-line" aria-hidden="true" />
        </span>
      ))}
    </span>
  );
}

// The job wire: a slow ticker of what we do and where, in spec-plate mono.
export function Marquee() {
  return (
    <div className="marquee border-y border-line bg-paper py-3" aria-hidden="true">
      <div className="marquee-track">
        <Run />
        <Run />
      </div>
    </div>
  );
}
