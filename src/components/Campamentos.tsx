import FloatingPhoto from "@/components/FloatingPhoto";
import { campImages } from "@/lib/campImages";

const CAMPS = [
  { name: "Niños", ages: "5 a 11 años", dates: "10 al 15 de agosto" },
  { name: "Adolescentes", ages: "12 a 15 años", dates: "17 al 22 de agosto" },
  { name: "Jóvenes", ages: "16 a 22 años", dates: "24 al 29 de agosto" },
];

// Las fotos que no van en el hero, ahora flotando (superpuestas) sobre esta sección.
const photos = campImages.slice(5);

const Campamentos = () => {
  return (
    <section id="campamentos" className="relative overflow-hidden bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        {/* z-30: el título queda SIEMPRE por encima de las fotos flotantes */}
        <h2 className="relative z-30 mb-12 text-center font-serif text-4xl font-black tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Acompáñanos en una nueva aventura
        </h2>

        {/* Tarjetas (quedan por debajo de las fotos) */}
        <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-3">
          {CAMPS.map((camp) => (
            <article
              key={camp.name}
              className="rounded-2xl border border-primary/15 bg-[#FFD93D] p-6 text-center shadow-[0_18px_40px_-22px_rgba(20,40,25,0.5)] transition-transform duration-300 hover:-translate-y-1"
            >
              <h3 className="font-serif text-2xl font-black text-primary sm:text-3xl">{camp.name}</h3>
              <p className="mt-1 text-sm font-bold text-primary/80">{camp.ages}</p>
              <div className="mt-4 border-t border-primary/15 pt-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/70">Fechas</span>
                <p className="text-base font-black text-foreground">{camp.dates}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Fotos flotantes (z-20): por encima de las tarjetas, por debajo del título, lejos del encabezado */}
      {photos[0] && <FloatingPhoto src={photos[0]} className="z-20 -left-5 top-[42%] aspect-[3/4] w-24 sm:w-28 md:w-32" rotate="-8deg" />}
      {photos[1] && <FloatingPhoto src={photos[1]} className="z-20 -right-5 top-[46%] aspect-square w-24 sm:w-28 md:w-36" rotate="7deg" anim="animate-float-delay" />}
      {photos[2] && <FloatingPhoto src={photos[2]} className="z-20 -left-4 bottom-[8%] aspect-square w-20 sm:w-28 md:w-32" rotate="6deg" anim="animate-float-delay" />}
      {photos[3] && <FloatingPhoto src={photos[3]} className="z-20 -right-5 bottom-[10%] aspect-[3/4] w-24 sm:w-32 md:w-40" rotate="-7deg" />}
    </section>
  );
};

export default Campamentos;
