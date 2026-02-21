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
      {/* Wave top */}
      <div className="absolute top-0 left-0 w-full pointer-events-none">
        <svg viewBox="0 0 1440 60" className="w-full h-8 md:h-12 text-background" preserveAspectRatio="none">
          <path d="M0,30 C360,60 720,0 1080,30 C1260,50 1350,10 1440,30 L1440,0 L0,0 Z" fill="currentColor" />
        </svg>
      </div>

      {/* Diagonal stripes */}
      <div className="absolute inset-0 diagonal-stripes pointer-events-none" />

      {/* Large decorative number */}
      <div className="absolute -right-10 top-0 pointer-events-none select-none opacity-[0.04]">
        <span className="font-serif font-black text-[50vw] text-foreground leading-none">3</span>
      </div>

      {/* Black accent block */}
      <div className="absolute left-0 top-[20%] w-8 md:w-12 h-32 bg-primary pointer-events-none" />

      <div className="px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-16 md:mb-24">
          <div>
            <div className="inline-block bg-primary px-4 py-1 mb-4">
              <p className="text-[10px] tracking-[0.5em] text-foreground/80 font-sans font-medium">PROCESO</p>
            </div>
            <h2 className="font-serif font-black text-[10vw] md:text-[5vw] leading-[0.85] tracking-[-0.04em] text-foreground uppercase">
              LA<br />TÉCNICA
            </h2>
          </div>
          <div className="hidden md:flex flex-col items-end gap-2 mt-2">
            <span className="text-foreground/40 text-xs tracking-[0.3em] font-sans">ETAPA 1 — RITUAL</span>
            <div className="w-16 h-[2px] bg-foreground/20" />
          </div>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4">
          {/* Left image */}
          <div className="md:col-span-5 relative overflow-hidden group">
            <div className="relative halftone">
              <img
                src={techniqueBurger}
                alt="Smash technique"
                className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
            </div>
            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-foreground/30" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-foreground/30" />
            <div className="absolute bottom-4 left-4 text-[10px] tracking-[0.3em] text-foreground/40 font-sans">
              Nº 001 — PROCESO
            </div>
          </div>

          {/* Steps */}
          <div className="md:col-span-4 flex flex-col justify-center gap-12 md:pl-8">
            {steps.map((step) => (
              <div key={step.num} className="group">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="text-foreground/30 font-serif font-black text-4xl">{step.num}</span>
                  <h3 className="font-serif font-bold text-xl tracking-[-0.02em] text-foreground uppercase group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                </div>
                <p className="text-foreground/60 text-sm leading-relaxed font-sans">
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
            {/* Frame overlay */}
            <div className="absolute inset-2 border border-foreground/20 pointer-events-none" />
            <div className="absolute top-4 right-4 text-[10px] tracking-[0.3em] text-foreground/40 font-sans">
              PROTOTIPO
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none rotate-180">
        <svg viewBox="0 0 1440 60" className="w-full h-8 md:h-12 text-background" preserveAspectRatio="none">
          <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,0 L0,0 Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
};

export default Technique;
