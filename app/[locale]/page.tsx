import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import FeaturedCars from "@/components/home/FeaturedCars";
import AboutTeaser from "@/components/home/AboutTeaser";
import ReviewsSection from "@/components/home/ReviewsSection";
import { getCars } from "@/lib/sauto";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return { title: t("homeTitle"), description: t("homeDesc") };
}

export default async function HomePage() {
  const cars = await getCars();
  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturedCars cars={cars} />
      <AboutTeaser />
      <ReviewsSection />
    </>
  );
}
