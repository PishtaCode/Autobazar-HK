"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Car, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/nabidka", label: t("cars") },
    { href: "/o-nas", label: t("about") },
    { href: "/kontakt", label: t("contact") },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-center text-center md:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2">
              <div className="bg-orange-600 text-white p-1.5 rounded-md">
                <Car size={18} />
              </div>
              <span className="font-bold text-white text-lg">Autobazar HK, s.r.o.</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-semibold mb-3">{t("navTitle")}</h3>
            <ul className="flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-1.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-orange-500 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-semibold mb-3">{t("contactTitle")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start justify-center md:justify-start gap-2">
                <MapPin size={15} className="text-orange-500 mt-0.5 shrink-0" />
                <span>Františka Halase 2196, Hradec Králové</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Phone size={15} className="text-orange-500 shrink-0" />
                <a href="tel:+420602405744" className="hover:text-orange-500 transition-colors">
                  +420 602 405 744
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Mail size={15} className="text-orange-500 shrink-0" />
                <a href="mailto:autobazarhk@seznam.cz" className="hover:text-orange-500 transition-colors">
                  autobazarhk@seznam.cz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-5 flex flex-col items-center sm:flex-row justify-between gap-1.5 text-xs text-gray-500 text-center">
          <span>{t("copyright")}</span>
          <span>IČO: 02753596</span>
        </div>
      </div>
    </footer>
  );
}
