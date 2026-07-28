// Schematic service-radius plan: Denver PA at center, towns placed by compass
// direction at a readable scale, dashed mile rings. Labels are nudged where
// geography would overlap them. Every label links to its city page.

const CITIES: { slug: string; name: string; x: number; y: number; anchor?: "end" }[] = [
  { slug: "ephrata-pa", name: "Ephrata", x: 348, y: 258 },
  { slug: "lititz-pa", name: "Lititz", x: 296, y: 282, anchor: "end" },
  { slug: "lancaster-pa", name: "Lancaster", x: 320, y: 322 },
  { slug: "reading-pa", name: "Reading", x: 388, y: 168 },
  { slug: "lebanon-pa", name: "Lebanon", x: 252, y: 140, anchor: "end" },
  { slug: "elizabethtown-pa", name: "Elizabethtown", x: 205, y: 248, anchor: "end" },
  { slug: "west-chester-pa", name: "West Chester", x: 512, y: 330 },
  { slug: "downingtown-pa", name: "Downingtown", x: 492, y: 262 },
  { slug: "coatesville-pa", name: "Coatesville", x: 432, y: 300, anchor: "end" },
];

export function RadiusMap() {
  return (
    <svg
      viewBox="0 0 720 470"
      role="img"
      aria-label="Service radius map: Denver PA base with Lancaster, Ephrata, Lititz, Reading, Lebanon, Elizabethtown, West Chester, Downingtown and Coatesville inside 75 miles"
      className="h-auto w-full"
    >
      {/* Mile rings */}
      {[
        { r: 115, label: "25 MI" },
        { r: 230, label: "50 MI" },
        { r: 345, label: "75 MI" },
      ].map((ring) => (
        <g key={ring.r}>
          <circle
            cx="330"
            cy="215"
            r={ring.r}
            fill="none"
            stroke="rgba(255,255,255,0.16)"
            strokeWidth="1.2"
            strokeDasharray="4 8"
          />
          <text
            x={330 + ring.r * 0.7071 - 6}
            y={215 - ring.r * 0.7071 - 6}
            textAnchor="end"
            className="fill-white/45 font-mono"
            fontSize="11"
            letterSpacing="0.1em"
          >
            {ring.label}
          </text>
        </g>
      ))}

      {/* Crosshair through base */}
      <line x1="330" y1="200" x2="330" y2="230" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
      <line x1="315" y1="215" x2="345" y2="215" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />

      {/* Base: Denver PA */}
      <circle cx="330" cy="215" r="18" fill="none" stroke="#9dc9f5" strokeWidth="1.2" opacity="0.7" className="map-pulse" />
      <circle cx="330" cy="215" r="6.5" fill="#9dc9f5" />
      <text x="344" y="208" className="fill-white font-mono" fontSize="14" letterSpacing="0.08em" fontWeight="700">
        DENVER, PA
      </text>
      <text x="344" y="224" className="fill-white/55 font-mono" fontSize="10.5" letterSpacing="0.08em">
        HOME BASE · 17517
      </text>

      {/* Cities */}
      {CITIES.map((c) => (
        <a key={c.slug} href={`/service-areas/${c.slug}`} className="group/city">
          <circle
            cx={c.x}
            cy={c.y}
            r="5"
            fill="#2274ce"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1"
            className="transition-all group-hover/city:fill-[#9dc9f5]"
          />
          <circle cx={c.x} cy={c.y} r="14" fill="transparent" />
          <text
            x={c.anchor === "end" ? c.x - 11 : c.x + 11}
            y={c.y + 4.5}
            textAnchor={c.anchor === "end" ? "end" : "start"}
            className="fill-white/85 font-mono underline-offset-2 transition-all group-hover/city:fill-white group-hover/city:underline"
            fontSize="13"
            letterSpacing="0.05em"
          >
            {c.name}
          </text>
        </a>
      ))}

      {/* Compass */}
      <g transform="translate(676, 44)">
        <line x1="0" y1="16" x2="0" y2="-14" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4" />
        <path d="M0 -15 L5 -6 L-5 -6 Z" fill="rgba(255,255,255,0.65)" />
        <text x="0" y="-22" textAnchor="middle" className="fill-white/65 font-mono" fontSize="11">
          N
        </text>
      </g>
    </svg>
  );
}
