"use client";

import { useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Car } from "@/lib/types";
import CarCard from "./CarCard";
import FilterBar from "./FilterBar";
import { Car as CarIcon } from "lucide-react";

interface CarGridProps {
  cars: Car[];
}

export default function CarGrid({ cars }: CarGridProps) {
  const t = useTranslations("carGrid");
  const [filtered, setFiltered] = useState<Car[]>(cars);
  const [visibleCount, setVisibleCount] = useState(9);

  const handleFilter = useCallback((result: Car[]) => {
    setFiltered(result);
    setVisibleCount(9);
  }, []);

  const visible = filtered.slice(0, visibleCount);

  return (
    <div>
      <FilterBar cars={cars} onFilter={handleFilter} />

      <p className="text-sm text-gray-500 mb-6">
        {t("found", { count: filtered.length })}
      </p>

      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <CarIcon size={48} className="mx-auto mb-4 opacity-30" />
          <p className="text-lg font-medium">{t("noResults")}</p>
          <p className="text-sm mt-1">{t("noResultsHint")}</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {visible.map((car, i) => (
                <motion.div
                  key={car.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <CarCard car={car} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {visibleCount < filtered.length && (
            <div className="text-center mt-10">
              <button
                onClick={() => setVisibleCount((v) => v + 9)}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
              >
                {t("loadMore", { count: filtered.length - visibleCount })}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
