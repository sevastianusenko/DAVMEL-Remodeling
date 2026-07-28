// Schematic service-radius drawing: Denver PA at center, cities placed by
// real compass geography, dashed mile rings like a site plan. Every label is
// a working link to its city page.

const CITIES: { slug: string; name: string; x: number; y: number; anchor?: "end" }[] = [
  { slug: "ephrata-pa", name: "Ephrata", x: 308, y: 265 },
  { slug: "lititz-pa", name: "Lititz", x: 288, y: 280, anchor: "end" },
  { slug: "lancaster-pa", name: "Lancaster", x: 296, y: 305 },
  { slug: "reading-pa", name: "Reading", x: 352, y: 208 },
  { slug: "lebanon-pa", name: "Lebanon", x: 272, y: 184, anchor: "end" },
  { slug: "elizabethtown-pa", name: "Elizabethtown", x: 232, y: 278, anchor: "end" },
  { slug: "west-chester-pa", name: "West Chester", x: 446, y: 320 },
  { slug: "downingtown-pa", name: "Downingtown", x: 428, y: 288 },
  { slug: "coatesville-pa", name: "Coatesville", x: 398, y: 300, anchor: "end" },
];

export function RadiusMap() {
  return (
    <svg
      viewBox="0 0 640 480"
      role="img"
      aria-label="Service radius map: Denver PA base with Lancaster, Ephrata, Lititz, Reading, Lebanon, Elizabethtown, West Chester, Downingtown and Coatesville inside 75 miles"
      className="h-auto w-full max-w-[640px]"
    >
      {/* Mile rings */}
      {[
        { r: 80, label: "25 MI" },
        { r: 160, label: "50 MI" },
        { r: 236, label: "75 MI" },
      ].map((ring) => (
        <g key={ring.r}>
          <circle
            cx="320"
            cy="240"
            r={ring.r}
            fill="none"
            stroke="rgba(255,255,255,0.14)"
            strokeWidth="1"
            strokeDasharray="3 7"
          />
          <text
            x="320"
            y={240 - ring.r - 7}
            textAnchor="middle"
            className="fill-white/40 font-mono"
            fontSize="10"
            letterSpacing="0.12em"
          >
            {ring.label}
          </text>
        </g>
      ))}

      {/* Crosshair through base */}
      <line x1="320" y1="228" x2="320" y2="252" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
      <line x1="308" y1="240" x2="332" y2="240" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />

      {/* Base: Denver PA */}
      <circle cx="320" cy="240" r="16" fill="none" stroke="#9dc9f5" strokeWidth="1" opacity="0.6" className="map-pulse" />
      <circle cx="320" cy="240" r="5.5" fill="#9dc9f5" />
      <text x="332" y="236" className="fill-white font-mono" fontSize="11.5" letterSpacing="0.08em" fontWeight="600">
        DENVER, PA
      </text>
      <text x="332" y="250" className="fill-white/50 font-mono" fontSize="9.5" letterSpacing="0.08em">
        HOME BASE · 17517
      </text>

      {/* Cities */}
      {CITIES.map((c) => (
        <a key={c.slug} href={`/service-areas/${c.slug}`} className="group/city">
          <circle
            cx={c.x}
            cy={c.y}
            r="4"
            fill="#2274ce"
            className="transition-all group-hover/city:fill-[#9dc9f5]"
          />
          <circle cx={c.x} cy={c.y} r="12" fill="transparent" />
          <text
            x={c.anchor === "end" ? c.x - 9 : c.x + 9}
            y={c.y + 4}
            textAnchor={c.anchor === "end" ? "end" : "start"}
            className="fill-white/75 font-mono underline-offset-2 transition-all group-hover/city:fill-white group-hover/city:underline"
            fontSize="11"
            letterSpacing="0.06em"
          >
            {c.name}
          </text>
        </a>
      ))}

      {/* Compass */}
      <g transform="translate(596, 38)">
        <line x1="0" y1="14" x2="0" y2="-14" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" />
        <path d="M0 -14 L4 -6 L-4 -6 Z" fill="rgba(255,255,255,0.6)" />
        <text x="0" y="-20" textAnchor="middle" className="fill-white/60 font-mono" fontSize="10">
          N
        </text>
      </g>
    </svg>
  );
}
