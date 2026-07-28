import { NextResponse } from "next/server";

// Lead intake. Forwards to Web3Forms when WEB3FORMS_KEY is set (free tier,
// delivers to info@davmelremodeling.com). Until the key is configured the
// endpoint accepts and logs, so the form UX works in preview.
export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const name = String(data.name ?? "").slice(0, 200);
  const phone = String(data.phone ?? "").slice(0, 50);
  if (!name || !phone) return NextResponse.json({ ok: false }, { status: 400 });

  const payload = {
    name,
    phone,
    city: String(data.city ?? "").slice(0, 200),
    service: String(data.service ?? "").slice(0, 200),
    message: String(data.message ?? "").slice(0, 5000),
  };

  const key = process.env.WEB3FORMS_KEY;
  if (key) {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: key,
        subject: `Estimate request: ${payload.service || "project"} in ${payload.city || "PA"}`,
        from_name: "davmelremodeling.com",
        ...payload,
      }),
    });
    if (!res.ok) return NextResponse.json({ ok: false }, { status: 502 });
  } else {
    console.log("LEAD (no WEB3FORMS_KEY set):", JSON.stringify(payload));
  }

  return NextResponse.json({ ok: true });
}
