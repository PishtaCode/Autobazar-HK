import { Car } from "./types";
import { MOCK_CARS } from "./mock-data";

// Internal premise ID for Autobazar HK (found via /detail-prodejce/autobazar-hk-sro/8877)
const SAUTO_PREMISE_ID = "12885030";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function cbName(v: any): string {
  if (!v) return "";
  if (typeof v === "string") return v;
  if (typeof v === "object" && "name" in v) return String(v.name);
  return "";
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function cbSeo(v: any): string {
  if (!v || typeof v !== "object") return "";
  return String(v.seo_name ?? "");
}

function extractYear(dateStr?: string): number {
  if (!dateStr) return 0;
  return parseInt(dateStr.slice(0, 4)) || 0;
}

// Protocol-relative URLs like //d19-a.sdn.cz/... → proxied through /api/img
function fixImageUrl(url: string): string {
  if (!url) return "";
  const absolute = url.startsWith("//") ? "https:" + url : url;
  return `/api/img?url=${encodeURIComponent(absolute)}`;
}

// Build the sauto.cz car detail URL from available fields
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function buildCarUrl(item: Record<string, any>): string {
  const cat = cbSeo(item.category) || "osobni";
  const brand = cbSeo(item.manufacturer_cb) || "auto";
  const model = cbSeo(item.model_cb) || "model";
  const id = item.id;
  return `https://www.sauto.cz/${cat}/detail/${brand}/${model}/${id}`;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapSautoItem(item: Record<string, any>): Car {
  const images: string[] =
    (item.images ?? [])
      .map((img: Record<string, string>) => fixImageUrl(img.url ?? img.src ?? ""))
      .filter(Boolean);

  return {
    id: String(item.id),
    title: String(item.name ?? ""),
    brand: cbName(item.manufacturer_cb),
    model: cbName(item.model_cb),
    year: extractYear(item.manufacturing_date ?? item.in_operation_date),
    mileage: Number(item.tachometer ?? item.mileage ?? 0),
    price: Number(item.price ?? 0),
    fuelType: cbName(item.fuel_cb),
    transmission: cbName(item.gearbox_cb),
    bodyType: cbName(item.category),
    imageUrl: images[0] ?? "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
    sautoUrl: buildCarUrl(item),
    description: String(item.additional_model_name ?? ""),
  };
}

export async function getCars(): Promise<Car[]> {
  try {
    const res = await fetch(
      `https://www.sauto.cz/api/v1/items/search?premise_id=${SAUTO_PREMISE_ID}&per_page=100`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) throw new Error(`sauto API error: ${res.status}`);
    const data = await res.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const items: Record<string, any>[] = data.results ?? data.items ?? [];
    if (!Array.isArray(items) || items.length === 0) throw new Error("No items");
    return items.map(mapSautoItem);
  } catch {
    return MOCK_CARS;
  }
}
