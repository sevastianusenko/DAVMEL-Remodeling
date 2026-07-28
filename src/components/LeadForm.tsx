"use client";

import { useRef, useState } from "react";
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

const MAX_PHOTOS = 4;

type Shot = { file: File; preview: string };
type State = "idle" | "sending" | "sent" | "error";

// Downscale to max 1280px JPEG so four phone photos fit the request limit.
async function compress(file: File): Promise<File> {
  try {
    const img = await createImageBitmap(file);
    const scale = Math.min(1, 1280 / Math.max(img.width, img.height));
    const w = Math.round(img.width * scale);
    const h = Math.round(img.height * scale);
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    canvas.getContext("2d")!.drawImage(img, 0, 0, w, h);
    const blob = await new Promise<Blob | null>((res) =>
      canvas.toBlob((b) => res(b), "image/jpeg", 0.72)
    );
    if (!blob) return file;
    return new File([blob], file.name.replace(/\.[^.]+$/, "") + ".jpg", { type: "image/jpeg" });
  } catch {
    return file; // format the browser cannot decode: send original
  }
}

export function LeadForm() {
  const [state, setState] = useState<State>("idle");
  const [shots, setShots] = useState<Shot[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);

  async function addFiles(list: FileList | null) {
    if (!list) return;
    const room = MAX_PHOTOS - shots.length;
    const picked = Array.from(list).slice(0, room);
    const prepared: Shot[] = [];
    for (const f of picked) {
      if (!f.type.startsWith("image/") && !/\.(heic|heif)$/i.test(f.name)) continue;
      const small = await compress(f);
      if (small.size > 3_000_000) continue;
      prepared.push({ file: small, preview: URL.createObjectURL(small) });
    }
    setShots((s) => [...s, ...prepared].slice(0, MAX_PHOTOS));
    if (fileRef.current) fileRef.current.value = "";
  }

  function removeShot(i: number) {
    setShots((s) => {
      URL.revokeObjectURL(s[i].preview);
      return s.filter((_, idx) => idx !== i);
    });
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const fd = new FormData(e.currentTarget);
    shots.forEach((s, i) => fd.append(`photo${i + 1}`, s.file, s.file.name));
    try {
      const res = await fetch("/api/lead", { method: "POST", body: fd });
      if (!res.ok) throw new Error(String(res.status));
      setState("sent");
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="border border-line bg-paper p-8 text-center">
        <p className="font-display text-2xl font-extrabold text-ink">Got it. We will call you.</p>
        <p className="mt-2 text-ink-soft">
          {shots.length > 0
            ? "We will look at your photos and call back with a preliminary quote, usually the same business day."
            : "Usually the same business day."}{" "}
          If it is urgent, call us right now at{" "}
          <a href={telHref()} className="font-semibold text-tape-deep underline">
            {BUSINESS.phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="border border-line bg-paper p-6 text-ink sm:p-8">
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
            rows={3}
            placeholder="What needs doing, roughly when, and anything else worth knowing."
            className="mt-1.5 w-full border border-line bg-plaster px-3 py-2.5 focus:border-tape"
          />
        </label>

        {/* Photo estimate */}
        <div className="sm:col-span-2">
          <span className="spec-plate">
            PHOTOS FOR A PRELIMINARY QUOTE (OPTIONAL, UP TO {MAX_PHOTOS})
          </span>
          <p className="mt-1 text-[0.88rem] text-ink-soft">
            Snap the room, the problem, or the thing you want gone. Photos let us call
            back with a real ballpark instead of twenty questions.
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            {shots.map((s, i) => (
              <div key={s.preview} className="relative h-20 w-20 border border-line">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.preview} alt={`Photo ${i + 1}`} className="h-full w-full object-cover" />
                <button
                  type="button"
                  onClick={() => removeShot(i)}
                  aria-label={`Remove photo ${i + 1}`}
                  className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-ink font-mono text-xs text-white hover:bg-tape-deep"
                >
                  ×
                </button>
              </div>
            ))}
            {shots.length < MAX_PHOTOS && (
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="flex h-20 w-20 flex-col items-center justify-center gap-1 border-2 border-dashed border-line text-ink-soft transition-colors hover:border-tape hover:text-tape-deep"
              >
                <span className="text-2xl leading-none" aria-hidden="true">+</span>
                <span className="font-mono text-[0.6rem] tracking-wide">ADD PHOTO</span>
              </button>
            )}
          </div>
          <input
            ref={fileRef}
            type="file"
            accept="image/*,.heic,.heif"
            multiple
            className="sr-only"
            aria-label="Add project photos"
            onChange={(e) => addFiles(e.target.files)}
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" disabled={state === "sending"} className="btn disabled:opacity-60">
          {state === "sending"
            ? "Sending..."
            : shots.length > 0
              ? "Send Photos, Get a Quote"
              : "Request Free Estimate"}
        </button>
        <p className="spec-plate">We reply the same business day. No spam, ever.</p>
      </div>
      {state === "error" && (
        <p className="mt-4 border border-oak bg-plaster p-3 text-[0.95rem]">
          The form did not go through. Call us at{" "}
          <a href={telHref()} className="font-semibold text-tape-deep underline">
            {BUSINESS.phoneDisplay}
          </a>{" "}
          or email photos to{" "}
          <a href={`mailto:${BUSINESS.email}`} className="font-semibold text-tape-deep underline">
            {BUSINESS.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
