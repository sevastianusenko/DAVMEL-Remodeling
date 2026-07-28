import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionRule } from "@/components/SectionRule";
import { CtaBand } from "@/components/CtaBand";
import { BUSINESS, telHref } from "@/lib/business";

export const metadata: Metadata = {
  title: "Reviews | DAVMEL Remodeling",
  description:
    "What working with DAVMEL Remodeling is like: our promises in writing, how we handle problems, and where to find our Google reviews as they come in.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <Breadcrumbs items={[{ name: "Reviews", href: "/reviews" }]} />
        <h1 className="max-w-2xl text-4xl sm:text-5xl">Judge us by the record</h1>
        <div className="chalk mt-5 max-w-2xl" aria-hidden="true" />
        <p className="mt-5 max-w-2xl text-lg text-ink-soft">
          This website is brand new, and we would rather show you an empty reviews page
          than fill it with quotes you cannot verify. Our Google profile is where real,
          checkable reviews will live. Meanwhile, here is what we put on the record
          ourselves.
        </p>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionRule label="OUR SIDE OF EVERY DEAL" />
        <div className="grid gap-5 md:grid-cols-2">
          {[
            {
              t: "The estimate is free and written",
              d: "Scope, price and schedule on paper before any work. If something changes mid job, the change gets priced in writing before we do it, not discovered on the invoice.",
            },
            {
              t: "The deposit follows PA law",
              d: "No more than one third up front on standard projects, exactly as the PA consumer protection act requires. Milestone payments after that, tied to visible progress.",
            },
            {
              t: "Problems get fixed, not defended",
              d: "Something not right? We come back and make it right. One company did the whole job, so there is nobody to point at except the mirror.",
            },
            {
              t: "Verify everything",
              d: "License PA214721 checks out at the Attorney General's registry. Insurance certificate comes with the contract. References from past clients on request.",
            },
          ].map((item) => (
            <div key={item.t} className="border border-line bg-paper p-6">
              <h2 className="font-display text-[1.1rem] font-bold">{item.t}</h2>
              <p className="mt-2 text-[0.95rem] text-ink-soft">{item.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-2xl">
          <SectionRule label="WORKED WITH US?" />
          <p className="text-ink-soft">
            If we built something for you, a Google review is the biggest favor you can
            do us, bigger than referrals, bigger than cookies, although we accept those
            too. Search for DAVMEL Remodeling on Google and tell people how it went,
            with photos if you have them. And if anything was not right,{" "}
            <a href={telHref()} className="font-semibold text-tape-deep underline">
              call {BUSINESS.phoneDisplay}
            </a>{" "}
            first so we can fix it.
          </p>
          <p className="mt-4 text-ink-soft">
            Choosing a contractor right now? Read our guide on{" "}
            <Link href="/blog/hiring-remodeling-contractor-red-flags" className="font-semibold text-tape-deep underline">
              the seven red flags to check
            </Link>{" "}
            before hiring anyone, including us.
          </p>
        </div>
      </section>

      <CtaBand title="Be review number one" text="Somebody gets to be first. We plan to earn it." />
    </>
  );
}
