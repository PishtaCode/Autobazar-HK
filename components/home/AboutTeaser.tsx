"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import MapEmbed from "@/components/contact/MapEmbed";

const highlights = [
  "Osobní přístup ke každému zákazníkovi",
  "Důkladná technická kontrola každého vozu",
  "Transparentní ceny bez skrytých poplatků",
  "Pomoc s financováním a pojištěním",
];

export default function AboutTeaser() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <MapEmbed className="h-80 lg:h-96" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-600 leading-relaxed mb-6">
              Jsme rodinný podnik s více než 25 lety zkušeností v prodeji ojetých vozů.
              Zakládáme si na poctivosti, transparentnosti a dlouhodobém vztahu se zákazníky.
              Každé auto, které prodáváme, bychom koupili i pro vlastní rodinu.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-orange-500 mt-0.5 shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/o-nas"
              className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold"
            >
              Více o nás
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
