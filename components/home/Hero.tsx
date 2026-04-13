"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gray-900">
      {/* Background — Mazda CX-5 at night */}
      <div
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1643142311296-304953706775?w=1600&q=80')",
          backgroundSize: "140%",
          backgroundPosition: "center 60%",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/92 via-gray-900/65 to-gray-900/25" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-500/30 text-orange-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
            >
              <Star size={14} className="fill-orange-400" />
              Certifikovaný prodejce · Hradec Králové
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Kvalitní vozy pro{" "}
              <span className="text-orange-500">celou rodinu</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-300 mb-8 leading-relaxed"
            >
              Rodinný autobazar v Hradci Králové s více než 25 lety zkušeností.
              Každý vůz prochází důkladnou technickou kontrolou. Nakupujte s jistotou.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-2 text-gray-300 text-sm mb-10"
            >
              <Shield size={16} className="text-green-400" />
              <span>Záruka na každý vůz · Servisní historie · Osobní přístup</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/nabidka"
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3.5 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg shadow-orange-600/30"
              >
                Prohlédnout nabídku
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-xl font-semibold backdrop-blur-sm transition-all"
              >
                Kontaktovat nás
              </Link>
            </motion.div>
          </div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

