import techniqueBurger from "@/assets/technique-burger.jpg";
import cheeseDetail from "@/assets/cheese-detail.jpg";

const steps = [
  { num: "01", title: "LA BOLA", desc: "Carne fresca de res, nunca congelada. Formamos bolas de 80g que esperan su momento de gloria." },
  { num: "02", title: "EL SMASH", desc: "Presión brutal contra la plancha a 230°C. La reacción de Maillard crea esa costra crujiente imposible de replicar." },
  { num: "03", title: "EL QUESO", desc: "Cheddar americano fundido sobre la carne caliente. Se derrite en cascada, sellando cada sabor." },
];

const Technique = () => {
  return (
    <section id="tecnica" className="relative bg-primary py-24 md:py-32 overflow-hidden">
      {/* Diagonal stripes background */}
      <div className="absolute inset-0 diagonal-stripes pointer-events-none" />
      
      {/* Large decorative number */}
      <div className="absolute -right-20 top-10 pointer-events-none select-none opacity-5">
        <span className="font-serif font-black text-[40vw] text-foreground leading-none">3</span>
      </div>

      <div className="px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-16 md:mb-24">
          <div>
            <p className="text-xs tracking-[0.5em] text-foreground/60 font-sans font-medium mb-4">PROCESO</p>
            <h2 className="font-serif font-black text-[10vw] md:text-[5vw] leading-[0.85] tracking-[-0.04em] text-foreground uppercase">
              LA<br />TÉCNICA
            </h2>
          </div>
          <span className="text-foreground/40 text-xs tracking-[0.3em] font-sans mt-2 hidden md:block">
            ETAPA 1 — RITUAL
          </span>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4">
          {/* Left image */}
          <div className="md:col-span-5 relative halftone overflow-hidden group">
            <img
              src={techniqueBurger}
              alt="Smash technique"
              className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 text-xs tracking-[0.3em] text-foreground/50 font-sans">
              Nº 001 — PROCESO
            </div>
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-foreground/20" />
          </div>

          {/* Steps */}
          <div className="md:col-span-4 flex flex-col justify-center gap-12 md:pl-8">
            {steps.map((step) => (
              <div key={step.num} className="group">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="text-foreground/40 font-serif font-black text-3xl">{step.num}</span>
                  <h3 className="font-serif font-bold text-xl tracking-[-0.02em] text-foreground uppercase group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                </div>
                <p className="text-foreground/70 text-sm leading-relaxed font-sans">
                  {step.desc}
                </p>
                <div className="w-full h-px bg-foreground/10 mt-6" />
              </div>
            ))}
          </div>

          {/* Right image offset */}
          <div className="md:col-span-3 relative md:mt-32 overflow-hidden group">
            <img
              src={cheeseDetail}
              alt="Melted cheese detail"
              className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 right-4 text-xs tracking-[0.3em] text-foreground/50 font-sans">
              PROTOTIPO
            </div>
            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-foreground/20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technique;
