import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { BUSINESS, telHref, mailHref } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contact | Free Remodeling Estimates in Lancaster County PA",
  description:
    "Request a free written remodeling estimate from DAVMEL Remodeling. Call (717) 210-8194 or send the form. Serving Lancaster and Chester County from Denver PA.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: BUSINESS.url + "/contact",
          mainEntity: { "@id": BUSINESS.url + "/#business" },
        }}
      />
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />
        <h1 className="max-w-2xl text-4xl sm:text-5xl">Tell us what the house needs</h1>
        <div className="chalk mt-5 max-w-2xl" aria-hidden="true" />
        <p className="mt-5 max-w-2xl text-lg text-ink-soft">
          Call, email or send the form. You get a real person, a scheduled walkthrough
          and a written estimate. What you will not get: pressure, scripts or a
          salesperson in your living room until 9 pm.
        </p>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid items-start gap-8 lg:grid-cols-[1.5fr_1fr]">
          <LeadForm />
          <div className="space-y-4">
            <div className="border border-line bg-paper p-6">
              <p className="spec-plate">DIRECT</p>
              <p className="mt-3 font-display text-2xl font-extrabold">
                <a href={telHref()} className="hover:text-tape-deep">{BUSINESS.phoneDisplay}</a>
              </p>
              <p className="mt-1 text-ink-soft">Monday to Saturday, 7am to 6pm</p>
              <p className="mt-4 font-display text-lg font-bold">
                <a href={mailHref()} className="hover:text-tape-deep">{BUSINESS.email}</a>
              </p>
              <p className="mt-1 text-ink-soft">Photos of the project help. Attach away.</p>
            </div>
            <div className="border border-line bg-paper p-6">
              <p className="spec-plate">BASE OF OPERATIONS</p>
              <p className="mt-3 font-display text-lg font-bold">Denver, PA {BUSINESS.baseZip}</p>
              <p className="mt-1 text-ink-soft">
                Serving Lancaster County, Chester County and nearby Berks and Lebanon.
                About 75 miles around home base.
              </p>
              <p className="spec-plate mt-4">{BUSINESS.licenseDisplay} · LICENSED &amp; INSURED</p>
            </div>
            <div className="border border-line bg-paper p-6">
              <p className="spec-plate">WHAT HAPPENS NEXT</p>
              <ol className="mt-3 space-y-2 text-[0.95rem] text-ink-soft">
                <li>1. We call you back, usually same business day.</li>
                <li>2. We schedule a walkthrough that fits your week.</li>
                <li>3. You get a written estimate. Free, no strings.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
