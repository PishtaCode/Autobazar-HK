import { Fragment } from "react";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import MapEmbed from "@/components/contact/MapEmbed";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return { title: t("contactTitle"), description: t("contactDesc") };
}

export default async function KontaktPage() {
  const t = await getTranslations("contactPage");

  const info = [
    {
      icon: MapPin,
      label: t("address"),
      value: "Františka Halase 2196\nNový Hradec Králové\n500 09 Hradec Králové",
    },
    {
      icon: Phone,
      label: t("phone"),
      value: "+420 602 405 744",
      href: "tel:+420602405744",
    },
    {
      icon: Mail,
      label: t("email"),
      value: "autobazarhk@seznam.cz",
      href: "mailto:autobazarhk@seznam.cz",
    },
    {
      icon: Clock,
      label: t("hours"),
      hours: [
        { day: t("monday"), time: "9:00–17:00" },
        { day: t("tuesday"), time: "9:00–17:00" },
        { day: t("wednesday"), time: "9:00–17:00" },
        { day: t("thursday"), time: "9:00–17:00" },
        { day: t("friday"), time: "9:00–17:00" },
        { day: t("saturday"), time: "9:00–12:00" },
        { day: t("sunday"), time: t("closed") },
      ],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-8">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {info.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className={`bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex gap-4 ${
                    idx === info.length - 1 ? "flex-1" : ""
                  }`}
                >
                  <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                      {item.label}
                    </div>
                    {"hours" in item && item.hours ? (
                      <>
                        <p className="text-base text-orange-600 font-bold mb-2">
                          {t("appointmentOnly")}
                        </p>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                          {item.hours.map(({ day, time }) => (
                            <Fragment key={day}>
                              <span className="text-gray-700 font-medium text-sm">{day}</span>
                              <span className="text-gray-700 text-sm">{time}</span>
                            </Fragment>
                          ))}
                        </div>
                      </>
                    ) : item.href ? (
                      <a
                        href={item.href}
                        className="text-gray-800 font-medium hover:text-orange-600 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-800 font-medium whitespace-pre-line">{item.value}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
            <ContactForm />
          </div>
        </div>

        {/* Mapa + Street View */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-8 mt-4 md:mt-8">
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
            <p className="text-sm font-semibold text-gray-700 mb-3">{t("mapTitle")}</p>
            <MapEmbed className="h-56 md:h-80" />
          </div>
          <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
            <p className="text-sm font-semibold text-gray-700 mb-3">{t("streetViewTitle")}</p>
            <div className="rounded-xl overflow-hidden border border-gray-200 h-56 md:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1680000000000!6m8!1m7!1s0iiWHntjG7CN0tWbnoz7eA!2m2!1d50.2000957!2d15.8446989!3f153.12!4f5.55!5f90"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Street View - Autobazar HK"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
