import techniqueBurger from "@/assets/technique-burger.jpg";
import cheeseDetail from "@/assets/cheese-detail.jpg";

const steps = [
  { num: "01", title: "LA BOLA", desc: "Carne fresca de res, nunca congelada. Formamos bolas de 80g que esperan su momento de gloria." },
  { num: "02", title: "EL SMASH", desc: "Presión brutal contra la plancha a 230°C. La reacción de Maillard crea esa costra crujiente imposible de replicar." },
  { num: "03", title: "EL QUESO", desc: "Cheddar americano fundido sobre la carne caliente. Se derrite en cascada, sellando cada sabor." },
];

const Technique = () => {
  return (
    <section id="tecnica" className="relative bg-background py-24 md:py-32">
      <div className="px-6 md:px-12">
        {/* Header */}
        <div className="flex items-start justify-between mb-16 md:mb-24">
          <div>
            <p className="text-xs tracking-[0.5em] text-primary font-sans font-medium mb-4">PROCESO</p>
            <h2 className="font-serif font-black text-[10vw] md:text-[5vw] leading-[0.85] tracking-[-0.04em] text-foreground uppercase">
              LA<br />TÉCNICA
            </h2>
          </div>
          <span className="text-muted-foreground text-xs tracking-[0.3em] font-sans mt-2 hidden md:block">
            ETAPA 1 — RITUAL
          </span>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4">
          {/* Left image */}
          <div className="md:col-span-5 relative halftone overflow-hidden">
            <img
              src={techniqueBurger}
              alt="Smash technique"
              className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-4 left-4 text-xs tracking-[0.3em] text-foreground/50 font-sans">
              Nº 001 — PROCESO
            </div>
          </div>

          {/* Steps */}
          <div className="md:col-span-4 flex flex-col justify-center gap-12 md:pl-8">
            {steps.map((step) => (
              <div key={step.num} className="group">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="text-primary font-serif font-black text-3xl">{step.num}</span>
                  <h3 className="font-serif font-bold text-xl tracking-[-0.02em] text-foreground uppercase group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                  {step.desc}
                </p>
                <div className="w-full h-px bg-border mt-6" />
              </div>
            ))}
          </div>

          {/* Right image offset */}
          <div className="md:col-span-3 relative md:mt-32 overflow-hidden">
            <img
              src={cheeseDetail}
              alt="Melted cheese detail"
              className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 right-4 text-xs tracking-[0.3em] text-foreground/50 font-sans">
              PROTOTIPO
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technique;
