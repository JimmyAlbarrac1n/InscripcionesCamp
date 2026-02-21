import brutalistTexture from "@/assets/brutalist-texture.png";
import heroBurger from "@/assets/hero-burger.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-end overflow-hidden bg-background">
      {/* Brutalist texture background */}
      <div className="absolute inset-0">
        <img
          src={brutalistTexture}
          alt="Brutalist texture"
          className="w-full h-full object-cover object-center opacity-20"
        />
      </div>

      {/* Burger image with dramatic blend */}
      <div className="absolute inset-0">
        <img
          src={heroBurger}
          alt="Smash burger macro"
          className="w-full h-full object-cover object-center scale-110 mix-blend-multiply opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-[15%] w-32 h-32 border-2 border-foreground/10 rounded-full animate-float pointer-events-none" />
      <div className="absolute top-[40%] left-[8%] w-20 h-20 border border-foreground/10 animate-float-delay pointer-events-none" />
      <div className="absolute top-[30%] right-[5%] w-2 h-40 bg-foreground/10 pointer-events-none" />
      <div className="absolute bottom-[30%] right-[25%] pointer-events-none animate-spin-slow opacity-10">
        <svg width="80" height="80" viewBox="0 0 80 80" className="text-foreground">
          <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fill="currentColor" fontSize="60" fontFamily="serif" fontWeight="900">✦</text>
        </svg>
      </div>

      {/* Large background text watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="font-serif font-black text-[30vw] text-foreground/[0.03] uppercase leading-none tracking-[-0.05em]">
          B
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-[90vw]">
          <p className="text-xs tracking-[0.5em] text-foreground/70 font-sans font-medium mb-4 opacity-0 animate-fade-in">
            SMASH BURGER HOUSE — QUITO, EC
          </p>
          <h1 className="font-serif font-black text-[14vw] md:text-[9vw] lg:text-[8vw] leading-[0.82] tracking-[-0.04em] text-foreground uppercase opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            APLASTADA<br />
            <span className="text-primary">HASTA LA</span><br />
            PERFECCIÓN
          </h1>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <a
              href="#menu"
              className="inline-block border-2 border-foreground bg-foreground text-background px-8 py-4 text-xs tracking-[0.3em] font-sans font-semibold cta-blink transition-all duration-200"
            >
              VER MENÚ
            </a>
            <a
              href="https://share.google/4DPgmwFpsoKCTmrZp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-foreground px-8 py-4 text-xs tracking-[0.3em] font-sans font-semibold text-foreground transition-all duration-200 hover:bg-foreground hover:text-background"
            >
              CÓMO LLEGAR
            </a>
          </div>
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute right-6 md:right-12 top-1/4 bottom-1/4 w-[3px] bg-foreground/20" />
      <div className="absolute left-6 md:left-12 bottom-6 text-xs tracking-[0.5em] text-foreground/30 font-sans" style={{ writingMode: "vertical-rl" }}>
        SCROLL ↓
      </div>
    </section>
  );
};

export default Hero;
