import { NextResponse } from "next/server";

// Lead intake with photo attachments (multipart/form-data).
//
// Transport priority:
// 1. RESEND_API_KEY set -> Resend API, attachments included on the free tier.
//    LEAD_TO   = recipient (default info@davmelremodeling.com)
//    LEAD_FROM = verified sender (default onboarding@resend.dev, which can only
//                deliver to the Resend account owner's email until the domain
//                is verified in Resend)
// 2. WEB3FORMS_KEY set -> Web3Forms (attachments only on their paid plan).
// 3. Neither -> log to function console so the form UX still works in preview.

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

  const subject = `${photos.length > 0 ? "Photo quote" : "Estimate"} request: ${service || "project"} in ${city || "PA"}`;

  const resendKey = process.env.RESEND_API_KEY;
  const web3Key = process.env.WEB3FORMS_KEY;

  if (resendKey) {
    const esc = (s: string) =>
      s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const row = (label: string, value: string) =>
      value
        ? `<tr><td style="padding:6px 12px 6px 0;color:#4a5568;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:6px 0;font-weight:600">${esc(value)}</td></tr>`
        : "";
    const html = `
      <div style="font-family:Arial,sans-serif;font-size:15px;color:#1e2733">
        <h2 style="color:#1b3764;margin:0 0 12px">New lead from davmelremodeling.com</h2>
        <table style="border-collapse:collapse">
          ${row("Name", name)}
          ${row("Phone", phone)}
          ${row("Town", city)}
          ${row("Project", service)}
          ${row("Message", message)}
          ${row("Photos", photos.length ? `${photos.length} attached` : "")}
        </table>
        <p style="color:#4a5568;margin-top:16px">Call back: <a href="tel:${esc(phone)}">${esc(phone)}</a></p>
      </div>`;

    const attachments = await Promise.all(
      photos.map(async (p, i) => ({
        filename: p.name || `photo${i + 1}.jpg`,
        content: Buffer.from(await p.arrayBuffer()).toString("base64"),
      }))
    );

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.LEAD_FROM || "DAVMEL Website <onboarding@resend.dev>",
        to: [process.env.LEAD_TO || "info@davmelremodeling.com"],
        reply_to: undefined,
        subject,
        html,
        attachments,
      }),
    });
    if (!res.ok) {
      console.error("Resend error:", res.status, await res.text().catch(() => ""));
      return NextResponse.json({ ok: false }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  }

  if (web3Key) {
    const out = new FormData();
    out.set("access_key", web3Key);
    out.set("subject", subject);
    out.set("from_name", "davmelremodeling.com");
    out.set("name", name);
    out.set("phone", phone);
    out.set("city", city);
    out.set("service", service);
    out.set("message", photos.length > 0 ? `${message}\n\nPhotos attached: ${photos.length}` : message);
    photos.forEach((p, i) => out.append("attachment", p, p.name || `photo${i + 1}.jpg`));

    const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: out });
    if (!res.ok) return NextResponse.json({ ok: false }, { status: 502 });
    return NextResponse.json({ ok: true });
  }

  console.log(
    "LEAD (no email transport configured):",
    JSON.stringify({ name, phone, city, service, message, photos: photos.length })
  );
  return NextResponse.json({ ok: true });
}
