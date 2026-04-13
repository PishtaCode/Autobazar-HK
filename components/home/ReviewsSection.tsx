"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Lenka Dostálová",
    date: "před 5 lety",
    rating: 5,
    text: "S koupí auta i se samotným autem jsem moc spokojená :) Pan Vaněk je vstřícný a ochotný člověk, který nabízí hezké kousky ve svém autobazaru. *****",
  },
  {
    name: "Jana Klicnarova",
    date: "před 4 lety",
    rating: 5,
    text: "Rychlé jednání a skvělý přístup k zákazníkovi",
  },
  {
    name: "Pavel Klíma",
    date: "před rokem",
    rating: 5,
    text: "Ochotný příjemné jednání",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-orange-400 text-orange-400" />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-orange-600 text-sm font-semibold uppercase tracking-wider mb-2">
            Recenze zákazníků
          </p>
          <h2 className="text-3xl font-bold text-gray-900">
            Co říkají naši zákazníci
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3 text-gray-500 text-sm">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="fill-orange-400 text-orange-400" />
              ))}
            </div>
            <span>4.2 / 5 · Google recenze</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col"
            >
              <Stars count={review.rating} />
              <p className="text-gray-700 text-sm leading-relaxed mt-4 mb-5 flex-1">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 border-t border-gray-100 pt-4 mt-auto">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-sm">
                  {review.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{review.name}</div>
                  <div className="text-gray-400 text-xs">{review.date}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
