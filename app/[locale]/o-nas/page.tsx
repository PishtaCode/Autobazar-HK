import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { CheckCircle, Award, Users, Heart, Truck } from "lucide-react";
import { Link } from "@/i18n/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return { title: t("aboutTitle"), description: t("aboutDesc") };
}

export default async function ONasPage() {
  const t = await getTranslations("aboutPage");

  const values = [
    { icon: Heart, title: t("value1Title"), desc: t("value1Desc") },
    { icon: CheckCircle, title: t("value2Title"), desc: t("value2Desc") },
    { icon: Award, title: t("value3Title"), desc: t("value3Desc") },
    { icon: Users, title: t("value4Title"), desc: t("value4Desc") },
    { icon: Truck, title: t("value5Title"), desc: t("value5Desc") },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative bg-gray-900 py-14 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1600&q=80')",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {t("heroTitle")}
          </h1>
        </div>
      </div>

      {/* Story */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t("storyTitle")}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{t("story1")}</p>
                <p>{t("story2")}</p>
                <p>{t("story3")}</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/majitel.png"
                alt="Majitel autobazaru"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-orange-600 text-sm font-semibold uppercase tracking-wider mb-2">
              {t("valuesLabel")}
            </p>
            <h2 className="text-3xl font-bold text-gray-900">{t("valuesTitle")}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              const isLastOdd = values.length % 2 !== 0 && i === values.length - 1;
              return (
                <div
                  key={v.title}
                  className={`bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex gap-4${
                    isLastOdd ? " sm:col-span-2 sm:w-1/2 sm:mx-auto" : ""
                  }`}
                >
                  <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{v.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-16 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
            {t("ctaTitle")}
          </h2>
          <p className="text-orange-100 mb-6 md:mb-8 max-w-lg mx-auto">{t("ctaDesc")}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/nabidka"
              className="bg-white text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              {t("ctaCars")}
            </Link>
            <Link
              href="/kontakt"
              className="bg-orange-700 hover:bg-orange-800 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              {t("ctaContact")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
