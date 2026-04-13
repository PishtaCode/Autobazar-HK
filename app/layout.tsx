import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Autobazar HK, s.r.o. | Kvalitní ojetá auta Hradec Králové",
  description:
    "Rodinný autobazar v Hradci Králové s více než 15 lety zkušeností. Nabízíme prověřené ojeté vozy s zárukou a servisní historií.",
  keywords: "autobazar, Hradec Králové, ojetá auta, prodej aut, HK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
