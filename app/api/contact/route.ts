import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL ?? "info@autobazarhk.cz";

    if (!apiKey) {
      // Dev mode: just log and return success
      console.log("Contact form submission (no RESEND_API_KEY):", data);
      return NextResponse.json({ ok: true });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Autobazar HK web <noreply@autobazarhk.cz>",
        to: [toEmail],
        reply_to: data.email,
        subject: `Nová zpráva z webu od ${data.name}`,
        html: `
          <h2>Nová zpráva z webu</h2>
          <p><strong>Jméno:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          ${data.phone ? `<p><strong>Telefon:</strong> ${data.phone}</p>` : ""}
          <p><strong>Zpráva:</strong></p>
          <p style="white-space: pre-wrap;">${data.message}</p>
        `,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Email error" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
