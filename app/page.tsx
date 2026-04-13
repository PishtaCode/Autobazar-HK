import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import FeaturedCars from "@/components/home/FeaturedCars";
import AboutTeaser from "@/components/home/AboutTeaser";
import ReviewsSection from "@/components/home/ReviewsSection";
import { getCars } from "@/lib/sauto";

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
