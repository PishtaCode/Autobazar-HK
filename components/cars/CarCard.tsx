import Image from "next/image";
import Link from "next/link";
import { Car } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Fuel, Gauge, Calendar, Settings } from "lucide-react";

interface CarCardProps {
  car: Car;
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat("cs-CZ", {
    style: "currency",
    currency: "CZK",
    maximumFractionDigits: 0,
  }).format(price);
}

function formatMileage(km: number): string {
  return new Intl.NumberFormat("cs-CZ").format(km) + " km";
}

const fuelColors: Record<string, string> = {
  Diesel: "bg-blue-50 text-blue-700 border-blue-200",
  Benzín: "bg-green-50 text-green-700 border-green-200",
  Hybrid: "bg-teal-50 text-teal-700 border-teal-200",
  Elektro: "bg-purple-50 text-purple-700 border-purple-200",
};

export default function CarCard({ car }: CarCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <Image
          src={car.imageUrl}
          alt={car.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized
        />
        <div className="absolute top-3 left-3">
          <span
            className={`text-xs font-medium px-2.5 py-1 rounded-full border ${
              fuelColors[car.fuelType] ?? "bg-gray-50 text-gray-700 border-gray-200"
            }`}
          >
            {car.fuelType}
          </span>
        </div>
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-orange-600 font-bold text-sm px-3 py-1 rounded-full shadow-sm">
          {formatPrice(car.price)}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-gray-900 text-base leading-snug mb-3 line-clamp-2 min-h-[2.75rem]">
          {car.title}
        </h3>

        <div className="grid grid-cols-2 gap-2 mb-4 mt-auto">
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <Calendar size={13} className="text-orange-500" />
            <span>{car.year}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <Gauge size={13} className="text-orange-500" />
            <span>{formatMileage(car.mileage)}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <Settings size={13} className="text-orange-500" />
            <span>{car.transmission}</span>
          </div>
          {car.power && (
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <Fuel size={13} className="text-orange-500" />
              <span>{car.power} kW</span>
            </div>
          )}
        </div>

        <a
          href={car.sautoUrl ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors"
        >
          Zobrazit detail
        </a>
      </div>
    </div>
  );
}
