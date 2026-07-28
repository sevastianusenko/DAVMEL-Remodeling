"use client";

import { useState } from "react";
import { BUSINESS, telHref } from "@/lib/business";

const SERVICES_LIST = [
  "Bathroom remodeling",
  "Kitchen remodeling",
  "Basement finishing",
  "Drywall or plaster work",
  "Tile installation",
  "Doors, trim, carpentry",
  "Deck building",
  "Windows and doors",
  "Porch or deck refinishing",
  "Something else",
];

type State = "idle" | "sending" | "sent" | "error";

export function LeadForm() {
  const [state, setState] = useState<State>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      setState("sent");
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="border border-line bg-paper p-8 text-center">
        <p className="font-display text-2xl font-extrabold">Got it. We will call you.</p>
        <p className="mt-2 text-ink-soft">
          Usually the same business day. If it is urgent, call us right now at{" "}
          <a href={telHref()} className="font-semibold text-tape-deep underline">
            {BUSINESS.phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="border border-line bg-paper p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="spec-plate">NAME *</span>
          <input
            required
            name="name"
            autoComplete="name"
            className="mt-1.5 w-full border border-line bg-plaster px-3 py-2.5 focus:border-tape"
          />
        </label>
        <label className="block">
          <span className="spec-plate">PHONE *</span>
          <input
            required
            name="phone"
            type="tel"
            autoComplete="tel"
            className="mt-1.5 w-full border border-line bg-plaster px-3 py-2.5 focus:border-tape"
          />
        </label>
        <label className="block">
          <span className="spec-plate">TOWN</span>
          <input
            name="city"
            autoComplete="address-level2"
            placeholder="Lancaster, Lititz, West Chester..."
            className="mt-1.5 w-full border border-line bg-plaster px-3 py-2.5 focus:border-tape"
          />
        </label>
        <label className="block">
          <span className="spec-plate">PROJECT TYPE</span>
          <select
            name="service"
            className="mt-1.5 w-full border border-line bg-plaster px-3 py-[0.7rem] focus:border-tape"
            defaultValue=""
          >
            <option value="" disabled>
              Choose one
            </option>
            {SERVICES_LIST.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="spec-plate">TELL US ABOUT THE PROJECT</span>
          <textarea
            name="message"
            rows={4}
            placeholder="What needs doing, roughly when, and anything else worth knowing."
            className="mt-1.5 w-full border border-line bg-plaster px-3 py-2.5 focus:border-tape"
          />
        </label>
      </div>
      <div className="mt-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" disabled={state === "sending"} className="btn disabled:opacity-60">
          {state === "sending" ? "Sending..." : "Request Free Estimate"}
        </button>
        <p className="spec-plate">We reply the same business day. No spam, ever.</p>
      </div>
      {state === "error" && (
        <p className="mt-4 border border-oak bg-plaster p-3 text-[0.95rem]">
          The form did not go through. Call us at{" "}
          <a href={telHref()} className="font-semibold text-tape-deep underline">
            {BUSINESS.phoneDisplay}
          </a>{" "}
          or email{" "}
          <a href={`mailto:${BUSINESS.email}`} className="font-semibold text-tape-deep underline">
            {BUSINESS.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
