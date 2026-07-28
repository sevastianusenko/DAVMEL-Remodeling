import { JsonLd } from "./JsonLd";
import type { Faq } from "@/lib/services";

export function FaqList({ faqs, heading = "Questions we hear a lot" }: { faqs: Faq[]; heading?: string }) {
  if (!faqs.length) return null;
  return (
    <section>
      {heading && <h2 className="mb-6 font-display text-2xl font-extrabold sm:text-3xl">{heading}</h2>}
      <div className="space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="group overflow-hidden rounded-lg">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 bg-door px-5 py-4 font-display text-[0.98rem] font-bold text-white transition-colors marker:content-none hover:bg-door-deep [&::-webkit-details-marker]:hidden">
              {f.q}
              <span
                aria-hidden="true"
                className="text-xl leading-none text-vial transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="rounded-b-lg border border-t-0 border-line bg-paper px-5 py-4 text-ink-soft">
              {f.a}
            </p>
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
