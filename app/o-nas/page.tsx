import { Metadata } from "next";
import { CheckCircle, Award, Users, Heart, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "O nás | Autobazar HK",
  description: "Rodinný autobazar v Hradci Králové s více než 15 lety zkušeností. Zjistěte více o naší historii a hodnotách.",
};

const values = [
  {
    icon: Heart,
    title: "Osobní přístup",
    desc: "Nejsme velký řetězec. Jednáte přímo s majitelem, který vám řekne vše na rovinu.",
  },
  {
    icon: CheckCircle,
    title: "Žádné překvapení",
    desc: "Cena je cena. Každé auto před prodejem zkontrolujeme a dostanete přehled o jeho historii.",
  },
  {
    icon: Award,
    title: "Auta, za která ručíme",
    desc: "Neprodáváme nic, o čem bychom sami pochybovali. Když auto není v pořádku, prostě ho nenabídneme.",
  },
  {
    icon: Users,
    title: "Spokojení zákazníci se vracejí",
    desc: "Velká část našich zákazníků koupila u nás auto víckrát, nebo nás doporučila rodině a přátelům.",
  },
  {
    icon: Truck,
    title: "Doručení až k vám domů",
    desc: "Nemusíte za námi jezdit. Auto vám na přání dovezeme přímo k domu — kamkoliv po Česku i Slovensku.",
  },
];

export default function ONasPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative bg-gray-900 py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1600&q=80')",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">
            Autobazar HK
          </h1>
        </div>
      </div>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Kdo jsme
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Prodeji aut se věnuji přes 25 let a za tu dobu jsem prodal stovky vozů zákazníkům
                  z celého Česka a dokonce i Slovenska. Autobazar HK je rodinný podnik, žádný velký řetězec.
                </p>
                <p>
                  Ke každému zákazníkovi přistupuji stejně jako bych přistupoval k sobě. Auto si pořádně
                  prohlédnu, řeknu co vím a nesnažím se prodat za každou cenu. Spousta lidí se ke mně
                  vrací znovu, nebo pošle kamaráda, a to mi říká, že to dělám dobře.
                </p>
                <p>
                  Najdete mě na adrese Františka Halase 2196 v Hradci Králové. Zastavte se kdykoliv nebo zavolejte a domluvíme se.
                </p>
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-orange-600 text-sm font-semibold uppercase tracking-wider mb-2">
              Naše hodnoty
            </p>
            <h2 className="text-3xl font-bold text-gray-900">Proč si vybrat nás</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              const isLastOdd = values.length % 2 !== 0 && i === values.length - 1;
              return (
                <div key={v.title} className={`bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex gap-4${isLastOdd ? " sm:col-span-2 sm:w-1/2 sm:mx-auto" : ""}`}>
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
      <section className="py-16 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Hledáte spolehlivé auto?
          </h2>
          <p className="text-orange-100 mb-8 max-w-lg mx-auto">
            Prohlédněte si naši aktuální nabídku nebo nás kontaktujte. Rádi vám pomůžeme najít to pravé.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/nabidka"
              className="bg-white text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              Nabídka vozů
            </a>
            <a
              href="/kontakt"
              className="bg-orange-700 hover:bg-orange-800 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              Kontaktovat nás
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
