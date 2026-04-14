import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import CarGrid from "@/components/cars/CarGrid";
import { getCars } from "@/lib/sauto";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return { title: t("carsTitle"), description: t("carsDesc") };
}

export default async function NabidkaPage() {
  const cars = await getCars();
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <CarGrid cars={cars} />
      </div>
    </div>
  );
}
