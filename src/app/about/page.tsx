import type { Metadata } from "next";
import Link from "next/link";
import { Pic } from "@/components/Pic";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionRule } from "@/components/SectionRule";
import { CtaBand } from "@/components/CtaBand";
import { BUSINESS, telHref } from "@/lib/business";

export const metadata: Metadata = {
  title: "About DAVMEL Remodeling | Licensed Contractor, Denver PA",
  description:
    "Meet DAVMEL Remodeling: David Melnychuk's licensed remodeling company in Denver PA. 6+ years in the Pennsylvania trades, one crew for interior and exterior work. PA #PA214721.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <Breadcrumbs items={[{ name: "About", href: "/about" }]} />
        <h1 className="max-w-3xl text-4xl sm:text-5xl">
          Built on a simple bet: do the whole job, do it right, answer the phone
        </h1>
        <div className="chalk mt-5 max-w-3xl" aria-hidden="true" />
      </div>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="prose-site">
            <p className="text-lg">
              DAVMEL Remodeling is run by David Melnychuk, a carpenter who spent years
              on Pennsylvania job sites watching the same movie: good trades doing good
              work, separated by weeks of scheduling gaps and finger pointing. The
              renovation itself took days. The chaos around it took months.
            </p>
            <p>
              So in 2020 he built a company around the opposite idea. One crew that
              covers framing, drywall, tile, doors, trim and exterior work. One written
              scope. One schedule that holds because no outside company can blow it up.
              Six years and a few hundred projects later, the bet is paying off, mostly
              in referrals.
            </p>
            <h2>What we believe, in practice</h2>
            <ul>
              <li>
                <strong>The invisible work decides everything.</strong> Waterproofing,
                framing, flashing and subfloors outlive every trend. We spend your money
                there first.
              </li>
              <li>
                <strong>Written beats spoken.</strong> Scope, price, schedule and changes
                all go on paper. Memory is a terrible project manager.
              </li>
              <li>
                <strong>Your house is not a warehouse.</strong> Dust barriers up first,
                floors protected, broom clean site every evening. You live there. We just
                work there.
              </li>
              <li>
                <strong>Say the honest thing.</strong> If a refresh serves you better
                than a gut job, we say so and quote the smaller number. Long game only.
              </li>
            </ul>
            <h2>Licensed, insured, verifiable</h2>
            <p>
              We are a registered Pennsylvania Home Improvement Contractor, number{" "}
              <strong>{BUSINESS.license}</strong>, and fully insured. You can verify the
              registration in two minutes at the{" "}
              <a href={BUSINESS.licenseVerifyUrl} target="_blank" rel="noopener noreferrer">
                PA Attorney General&apos;s HIC search
              </a>
              . We wrote a{" "}
              <Link href="/blog/verify-pa-contractor-license">guide on checking any contractor</Link>{" "}
              the same way. Use it on us. Use it on everyone.
            </p>
          </div>

          <div className="space-y-4">
            <div className="overflow-hidden border border-line">
              <Pic k="david-melnychuk-owner" sizes="(min-width: 1024px) 33vw, 100vw" caption="DAVID MELNYCHUK · OWNER" />
            </div>
            <div className="border border-line bg-paper p-6">
              <p className="spec-plate">THE SHORT VERSION</p>
              <ul className="mt-3 space-y-2 text-[0.95rem]">
                <li>Licensed PA contractor, {BUSINESS.licenseDisplay}</li>
                <li>Based in Denver, PA since 2020</li>
                <li>{BUSINESS.yearsInTrade} years in the trades</li>
                <li>Interior and exterior, one crew</li>
                <li>Lancaster + Chester County focus</li>
              </ul>
              <a href={telHref()} className="btn mt-5 w-full">
                Call {BUSINESS.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <SectionRule label="WHERE THE CRAFT COMES FROM" />
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.4fr]">
            <div className="prose-site">
              <h2 className="mt-0">Ten plus years of finish work, two continents</h2>
              <p>
                Before Pennsylvania, David spent years on high end residential projects
                in Europe: decorative plaster, marble stairs, LED cove ceilings and
                finishes where a millimeter of error was a redo. A few photos from that
                chapter are below.
              </p>
              <p>
                That standard came across the ocean with him. The materials changed, the
                expectation did not: surfaces flat, lines straight, details finished.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                "archive-kitchen-white-island-marble",
                "archive-marble-stairs-led-lighting",
                "archive-walk-in-shower-mosaic",
                "archive-led-cove-ceiling-plaster",
                "archive-led-accent-wall",
                "archive-living-room-ceiling-mural",
              ].map((k) => (
                <div key={k} className="aspect-[3/4] overflow-hidden border border-line">
                  <Pic k={k} sizes="(min-width: 1024px) 20vw, 33vw" />
                </div>
              ))}
            </div>
          </div>
          <p className="spec-plate mt-4">
            EARLIER EUROPEAN WORK, 2015 TO 2019. FOR PENNSYLVANIA PROJECTS SEE{" "}
            <Link href="/projects" className="underline">THE PROJECT GALLERY</Link>.
          </p>
        </div>
      </section>

      <CtaBand title="Let us earn the next referral" />
    </>
  );
}
