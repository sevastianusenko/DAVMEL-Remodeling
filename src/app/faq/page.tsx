import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "FAQ | Remodeling Questions Answered Straight",
  description:
    "Answers to the questions Lancaster and Chester County homeowners ask us most: pricing, permits, timelines, deposits, licenses, living through a remodel and more.",
  alternates: { canonical: "/faq" },
};

const FAQS = [
  {
    q: "How much does remodeling cost?",
    a: "Depends on the room and the scope, so we publish real ranges: hall bathrooms typically $12,000 to $22,000, basements $35 to $75 per square foot, composite decks $60 to $95 per square foot. Every service page on this site lists honest 2026 numbers, and the exact quote is free and written.",
  },
  {
    q: "Are estimates really free?",
    a: "Yes. We visit, measure, talk through options and send a written number. No fee, no obligation, no follow up campaign that feels like a second mortgage on your inbox.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Pennsylvania Home Improvement Contractor registration PA214721, verifiable free at the Attorney General's HIC search, plus liability insurance with certificates provided at contract.",
  },
  {
    q: "How big a deposit do you take?",
    a: "PA law caps deposits at one third of the contract for most projects, and we follow it. Larger material orders are documented when they genuinely need earlier funding. Cash only demands and half down requests are red flags, and not ours.",
  },
  {
    q: "Who actually does the work?",
    a: "Our own crew handles framing, drywall, tile, doors, trim, decks and finish work. Licensed electricians and plumbers we work with regularly handle their trades, scheduled and managed by us.",
  },
  {
    q: "Do you handle permits and inspections?",
    a: "Yes, start to finish. We know which Lancaster and Chester County municipalities want permits for what, we file the paperwork and we meet the inspectors.",
  },
  {
    q: "Can we live in the house during the work?",
    a: "Almost always. Dust barriers, floor protection and daily cleanup keep the rest of the house livable. For kitchens we set up a temporary cooking station so the microwave does not feel abandoned.",
  },
  {
    q: "How far out are you booked?",
    a: "It moves with the season. Small jobs often fit within a couple of weeks, full remodels typically schedule four to eight weeks out. Call and we will tell you the honest current answer.",
  },
  {
    q: "Do you do small jobs, or only full remodels?",
    a: "Both. Drywall patches, single doors, step rebuilds and one room jobs are real work we happily take, especially near our Denver PA base. Small jobs are how most of our long term clients found us.",
  },
  {
    q: "What warranty do you offer?",
    a: "One year on our workmanship across the board, plus the manufacturer warranties on materials, which for things like composite decking run 25 years or more. Since one company did the whole job, warranty calls are simple: you call us, we come.",
  },
  {
    q: "Can you work from my Pinterest board or a photo?",
    a: "Yes, and honestly it helps. A photo tells us the target look faster than any conversation. We then translate it into materials, a price and what will actually work in your specific room.",
  },
  {
    q: "Why does your quote differ from a cheaper one?",
    a: "Usually the difference is hiding in what is not written: waterproofing systems, permit costs, debris hauling, insurance. Put both scopes side by side and the gap explains itself. If it does not, ask us and we will walk you through it line by line.",
  },
];

export default function FaqPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <Breadcrumbs items={[{ name: "FAQ", href: "/faq" }]} />
        <h1 className="max-w-2xl text-4xl sm:text-5xl">Questions, answered straight</h1>
        <div className="chalk mt-5 max-w-2xl" aria-hidden="true" />
        <p className="mt-5 max-w-2xl text-lg text-ink-soft">
          Everything homeowners ask before hiring us, answered the way we answer at the
          kitchen table. Missing something? Call and ask the human version.
        </p>
      </div>
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <FaqList faqs={FAQS} heading="The full list" />
      </section>
      <CtaBand />
    </>
  );
}
