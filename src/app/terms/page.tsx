import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for the DAVMEL Remodeling website.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Breadcrumbs items={[{ name: "Terms", href: "/terms" }]} />
      <h1 className="text-3xl sm:text-4xl">Terms of Use</h1>
      <div className="prose-site mt-6">
        <p>Effective July 2026.</p>
        <h2>About this site</h2>
        <p>
          This website is operated by {BUSINESS.legalName}, a registered Pennsylvania
          Home Improvement Contractor ({BUSINESS.licenseDisplay}), based in Denver, PA.
        </p>
        <h2>Estimates and pricing</h2>
        <p>
          Price ranges published on this site are good faith 2026 figures for typical
          projects in our service area. They are informational, not offers. Actual
          pricing comes from a written estimate for your specific project, and only a
          signed written contract creates obligations for either of us.
        </p>
        <h2>Content</h2>
        <p>
          Photos on this site are from our own projects unless labeled otherwise, and
          text content is ours. You may not reuse either commercially without written
          permission. Advice in articles is general information, not engineering or
          legal advice for your specific situation.
        </p>
        <h2>Contact</h2>
        <p>
          Questions: {BUSINESS.email} or {BUSINESS.phoneDisplay}.
        </p>
      </div>
    </div>
  );
}
