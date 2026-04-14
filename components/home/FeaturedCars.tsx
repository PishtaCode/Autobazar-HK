"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import CarCard from "@/components/cars/CarCard";
import { Car } from "@/lib/types";

interface FeaturedCarsProps {
  cars: Car[];
}

export default function FeaturedCars({ cars }: FeaturedCarsProps) {
  const t = useTranslations("featuredCars");
  const featured = cars.slice(0, 6);

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 md:mb-10 gap-3"
        >
          <div>
            <p className="text-orange-600 text-sm font-semibold uppercase tracking-wider mb-2">
              {t("label")}
            </p>
            <h2 className="text-3xl font-bold text-gray-900">{t("title")}</h2>
          </div>
          <Link
            href="/nabidka"
            className="inline-flex items-center gap-1.5 text-orange-600 hover:text-orange-700 font-semibold text-sm"
          >
            {t("viewAll")}
            <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((car, i) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <CarCard car={car} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Link
            href="/nabidka"
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-3.5 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg shadow-orange-600/20"
          >
            {t("cta")}
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
