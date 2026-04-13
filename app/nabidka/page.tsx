import CarGrid from "@/components/cars/CarGrid";
import { getCars } from "@/lib/sauto";

export const metadata = {
  title: "Nabídka vozů | Autobazar HK",
  description: "Prohlédněte si naši aktuální nabídku prověřených ojetých vozů v Hradci Králové.",
};

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
