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
            {/* Hand-drawn doodles overlay */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Scribble circle */}
              <circle cx="320" cy="80" r="35" stroke="white" strokeWidth="2" strokeDasharray="6 4" opacity="0.7" />
              <circle cx="320" cy="80" r="28" stroke="white" strokeWidth="1.5" opacity="0.5" />
              {/* Arrow pointing down */}
              <path d="M60 30 L60 100 L45 80 M60 100 L75 80" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
              {/* Cross / tachón */}
              <path d="M300 300 L360 360 M360 300 L300 360" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
              {/* Squiggly underline */}
              <path d="M40 350 Q80 330 120 350 Q160 370 200 350 Q240 330 280 350" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5" />
              {/* Star */}
              <path d="M180 50 L185 65 L200 65 L188 75 L193 90 L180 80 L167 90 L172 75 L160 65 L175 65 Z" stroke="white" strokeWidth="1.5" fill="none" opacity="0.6" />
            </svg>
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
            {/* Hand-drawn doodles overlay */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Tachón / X marks */}
              <path d="M30 30 L70 70 M70 30 L30 70" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
              {/* Scribble lines */}
              <path d="M200 20 Q220 40 200 60 Q180 80 200 100" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" />
              {/* Circle with exclamation */}
              <circle cx="250" cy="320" r="25" stroke="white" strokeWidth="2" opacity="0.6" />
              <path d="M250 305 L250 325 M250 332 L250 335" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
              {/* Zigzag */}
              <path d="M20 350 L40 330 L60 350 L80 330 L100 350" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.4" />
            </svg>
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
