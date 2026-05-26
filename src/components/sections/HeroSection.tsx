import { Section } from "@/data/products";

interface HeroSectionProps {
  onScrollTo: (section: Section) => void;
}

export default function HeroSection({ onScrollTo }: HeroSectionProps) {
  return (
    <>
      <section className="pt-16 min-h-[90vh] flex items-center bg-[#f8f7f5]">
        <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center py-20">
          <div className="animate-fade-in">
            <p className="text-[hsl(var(--primary))] text-sm tracking-[0.3em] uppercase mb-4">Оптовая продажа</p>
            <h1 className="font-light text-5xl md:text-7xl uppercase tracking-tight leading-none mb-6" style={{ fontFamily: "Oswald, sans-serif" }}>
              ПЭТ<br />
              <span className="text-[hsl(var(--primary))]">Тара</span><br />
              Оптом
            </h1>
            <p className="text-[#666] text-lg leading-relaxed mb-8 max-w-md">
              Бутылки, банки, канистры и флаконы ПЭТ. Собственный склад, минимальный заказ от 100 штук.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onScrollTo("Каталог")}
                className="bg-[hsl(var(--primary))] text-white px-8 py-3 font-medium tracking-wide hover:opacity-90 transition-opacity"
              >
                Смотреть каталог
              </button>
              <button
                onClick={() => onScrollTo("Контакты")}
                className="border border-[#1a1a1a] text-[#1a1a1a] px-8 py-3 font-medium tracking-wide hover:bg-[#1a1a1a] hover:text-white transition-colors"
              >
                Связаться
              </button>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="aspect-square bg-white rounded-sm overflow-hidden border border-[#e8e6e2]">
              <img
                src="https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/files/f44cd62b-3e4e-4b62-b90b-4dd3f172bd3a.jpg"
                alt="ПЭТ бутылки"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1a1a1a] text-white py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { num: "3 000+", label: "клиентов" },
            { num: "100 шт.", label: "минимальный заказ" },
            { num: "Самовывоз", label: "п. Романовка, Всеволожский р-н, ЛО" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-semibold text-[hsl(var(--primary))]" style={{ fontFamily: "Oswald, sans-serif" }}>{s.num}</p>
              <p className="text-sm text-white/60 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
