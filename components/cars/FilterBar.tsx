"use client";

import { useState, useEffect } from "react";
import { Car } from "@/lib/types";
import { SlidersHorizontal, X } from "lucide-react";

interface FilterBarProps {
  cars: Car[];
  onFilter: (filtered: Car[]) => void;
}

const allBrands = (cars: Car[]) =>
  Array.from(new Set(cars.map((c) => c.brand))).sort();

const currentYear = new Date().getFullYear();
const years = Array.from({ length: currentYear - 1989 }, (_, i) => currentYear - i);

const inputClass =
  "h-10 rounded-lg border border-gray-200 bg-white px-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent w-full";

const selectClass = inputClass;

export default function FilterBar({ cars, onFilter }: FilterBarProps) {
  const [brand, setBrand] = useState("");
  const [year, setYear] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [maxMileage, setMaxMileage] = useState("");

  const hasFilters = brand || year || priceFrom || priceTo || maxMileage;

  const reset = () => {
    setBrand("");
    setYear("");
    setPriceFrom("");
    setPriceTo("");
    setMaxMileage("");
  };

  useEffect(() => {
    let filtered = cars;

    if (brand) filtered = filtered.filter((c) => c.brand === brand);
    if (year) filtered = filtered.filter((c) => c.year === parseInt(year));
    if (priceFrom) filtered = filtered.filter((c) => c.price >= parseInt(priceFrom));
    if (priceTo) filtered = filtered.filter((c) => c.price <= parseInt(priceTo));
    if (maxMileage) filtered = filtered.filter((c) => c.mileage <= parseInt(maxMileage));

    onFilter(filtered);
  }, [brand, year, priceFrom, priceTo, maxMileage, cars, onFilter]);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-gray-700 font-semibold text-sm">
          <SlidersHorizontal size={16} className="text-orange-600" />
          Filtry
        </div>
        {hasFilters && (
          <button
            onClick={reset}
            className="flex items-center gap-1 text-xs text-gray-400 hover:text-orange-600 transition-colors"
          >
            <X size={13} />
            Zrušit filtry
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {/* Brand */}
        <select value={brand} onChange={(e) => setBrand(e.target.value)} className={selectClass}>
          <option value="">Všechny značky</option>
          {allBrands(cars).map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>

        {/* Year */}
        <select value={year} onChange={(e) => setYear(e.target.value)} className={selectClass}>
          <option value="">Rok výroby</option>
          {years.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>

        {/* Price from */}
        <input
          type="number"
          placeholder="Cena od (Kč)"
          value={priceFrom}
          onChange={(e) => setPriceFrom(e.target.value)}
          min={0}
          step={10000}
          className={inputClass}
        />

        {/* Price to */}
        <input
          type="number"
          placeholder="Cena do (Kč)"
          value={priceTo}
          onChange={(e) => setPriceTo(e.target.value)}
          min={0}
          step={10000}
          className={inputClass}
        />

        {/* Max mileage */}
        <select value={maxMileage} onChange={(e) => setMaxMileage(e.target.value)} className={selectClass}>
          <option value="">Nájezd do...</option>
          <option value="50000">50 000 km</option>
          <option value="100000">100 000 km</option>
          <option value="150000">150 000 km</option>
          <option value="200000">200 000 km</option>
          <option value="250000">250 000 km</option>
          <option value="300000">300 000 km</option>
        </select>
      </div>
    </div>
  );
}
