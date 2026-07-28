import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How DAVMEL Remodeling handles the information you share with us.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Breadcrumbs items={[{ name: "Privacy", href: "/privacy" }]} />
      <h1 className="text-3xl sm:text-4xl">Privacy Policy</h1>
      <div className="prose-site mt-6">
        <p>Effective July 2026. The short, honest version of how this site handles your information.</p>
        <h2>What we collect</h2>
        <p>
          When you submit the estimate form we receive what you typed: name, phone,
          town, project type and message. That is it. We do not run advertising
          trackers, sell data or build profiles.
        </p>
        <h2>How we use it</h2>
        <p>
          To call you back about your project and prepare your estimate. Your details
          go to our email ({BUSINESS.email}) and stay within our company. We do not
          share them with anyone except as required to deliver our services or by law.
        </p>
        <h2>Retention and removal</h2>
        <p>
          We keep project correspondence for our business records. Want your contact
          information deleted? Email {BUSINESS.email} and we will remove it.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about this policy: {BUSINESS.email} or {BUSINESS.phoneDisplay}.
          {" "}{BUSINESS.legalName}, Denver, PA.
        </p>
      </div>
    </div>
  );
}
