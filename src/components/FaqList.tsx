import { JsonLd } from "./JsonLd";
import type { Faq } from "@/lib/services";

export function FaqList({ faqs, heading = "Questions we hear a lot" }: { faqs: Faq[]; heading?: string }) {
  if (!faqs.length) return null;
  return (
    <section>
      <h2 className="mb-6 font-display text-2xl font-extrabold sm:text-3xl">{heading}</h2>
      <div className="divide-y divide-line border-y border-line">
        {faqs.map((f) => (
          <details key={f.q} className="group py-1">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-4 py-4 font-display text-[1.05rem] font-bold marker:content-none [&::-webkit-details-marker]:hidden">
              {f.q}
              <span
                aria-hidden="true"
                className="font-mono text-xl leading-none text-oak transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="max-w-3xl pb-5 text-ink-soft">{f.a}</p>
          </details>
        ))}
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
    </section>
  );
}
