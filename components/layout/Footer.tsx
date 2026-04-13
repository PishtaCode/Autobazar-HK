import Link from "next/link";
import { Car, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="bg-orange-600 text-white p-1.5 rounded-md">
                <Car size={18} />
              </div>
              <span className="font-bold text-white text-lg">Autobazar HK, s.r.o.</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigace</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Domů" },
                { href: "/nabidka", label: "Nabídka vozů" },
                { href: "/o-nas", label: "O nás" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-orange-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-orange-500 mt-0.5 shrink-0" />
                <span>Františka Halase 2196<br />Nový Hradec Králové<br />500 09 Hradec Králové</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-orange-500 shrink-0" />
                <a href="tel:+420602405744" className="hover:text-orange-500 transition-colors">
                  +420 602 405 744
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-orange-500 shrink-0" />
                <a href="mailto:autobazarhk@seznam.cz" className="hover:text-orange-500 transition-colors">
                  autobazarhk@seznam.cz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <span>© 2025 Autobazar HK, s.r.o. Všechna práva vyhrazena.</span>
          <span>IČO: 02753596</span>
        </div>
      </div>
    </footer>
  );
}
