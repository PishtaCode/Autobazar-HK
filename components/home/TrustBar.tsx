"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Award, Car, Shield, ThumbsUp } from "lucide-react";

export default function TrustBar() {
  const t = useTranslations("trustBar");

  const stats = [
    { icon: Award, value: "25+", label: t("yearsLabel"), desc: t("yearsDesc") },
    { icon: Car, value: "500+", label: t("carsLabel"), desc: t("carsDesc") },
    { icon: Shield, value: "100%", label: t("qualityLabel"), desc: t("qualityDesc") },
    { icon: ThumbsUp, value: "4.3★", label: t("ratingLabel"), desc: t("ratingDesc") },
  ];

  return (
    <section className="bg-white border-b border-gray-100 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-3">
                  <Icon size={22} className="text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm font-semibold text-gray-700 mt-0.5">{stat.label}</div>
                <div className="text-xs text-gray-400 mt-0.5">{stat.desc}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
