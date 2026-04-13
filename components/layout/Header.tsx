"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Car } from "lucide-react";

const navLinks = [
  { href: "/", label: "Domů" },
  { href: "/nabidka", label: "Nabídka vozů" },
  { href: "/o-nas", label: "O nás" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-orange-600 text-white p-1.5 rounded-md group-hover:bg-orange-700 transition-colors">
              <Car size={20} />
            </div>
            <span className="font-bold text-gray-900 text-lg tracking-tight">
              Autobazar HK
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-orange-600 font-medium text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              Kontaktujte nás
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-orange-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Otevřít menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-orange-600 font-medium py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className="bg-orange-600 text-white text-center py-2.5 rounded-lg font-semibold mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Kontaktujte nás
          </Link>
        </div>
      )}
    </header>
  );
}
