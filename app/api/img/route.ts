import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");
  if (!url) return new NextResponse("Missing url", { status: 400 });

  // Only allow sauto CDN domains
  const allowed = /^https:\/\/[a-z0-9-]+\.sdn\.cz\//;
  if (!allowed.test(url)) return new NextResponse("Forbidden", { status: 403 });

  try {
    // Sauto CDN requires specific image transform params and a Referer header
    const fetchUrl = url.includes("?") ? url : `${url}?fl=exf|res,360,270,3|jpg,80,,1`;

    const res = await fetch(fetchUrl, {
      headers: {
        Referer: "https://www.sauto.cz/",
        "User-Agent": "Mozilla/5.0",
      },
    });

    if (!res.ok) return new NextResponse("Upstream error", { status: res.status });

    const contentType = res.headers.get("content-type") ?? "image/jpeg";
    const buffer = await res.arrayBuffer();

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch {
    return new NextResponse("Fetch failed", { status: 502 });
  }
}
