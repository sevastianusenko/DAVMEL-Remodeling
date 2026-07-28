import { NextResponse } from "next/server";

// Lead intake with optional photos (multipart/form-data).
// Forwards to Web3Forms when WEB3FORMS_KEY is set. Photos are attached to the
// same submission; attachment delivery requires a Web3Forms plan that supports
// files, text fields deliver on every plan. Without a key the endpoint logs,
// so the form UX keeps working in preview.
export async function POST(req: Request) {
  let fd: FormData;
  try {
    fd = await req.formData();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const text = (k: string, max: number) => String(fd.get(k) ?? "").slice(0, max);
  const name = text("name", 200);
  const phone = text("phone", 50);
  if (!name || !phone) return NextResponse.json({ ok: false }, { status: 400 });

  const city = text("city", 200);
  const service = text("service", 200);
  const message = text("message", 5000);

  const photos: File[] = [];
  for (let i = 1; i <= 4; i++) {
    const f = fd.get(`photo${i}`);
    if (f instanceof File && f.size > 0 && f.size <= 3_500_000) photos.push(f);
  }

  const key = process.env.WEB3FORMS_KEY;
  if (key) {
    const out = new FormData();
    out.set("access_key", key);
    out.set(
      "subject",
      `${photos.length > 0 ? "Photo quote" : "Estimate"} request: ${service || "project"} in ${city || "PA"}`
    );
    out.set("from_name", "davmelremodeling.com");
    out.set("name", name);
    out.set("phone", phone);
    out.set("city", city);
    out.set("service", service);
    out.set("message", photos.length > 0 ? `${message}\n\nPhotos attached: ${photos.length}` : message);
    photos.forEach((p, i) => out.append("attachment", p, p.name || `photo${i + 1}.jpg`));

    const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: out });
    if (!res.ok) return NextResponse.json({ ok: false }, { status: 502 });
  } else {
    console.log(
      "LEAD (no WEB3FORMS_KEY set):",
      JSON.stringify({ name, phone, city, service, message, photos: photos.length })
    );
  }

  return NextResponse.json({ ok: true });
}
