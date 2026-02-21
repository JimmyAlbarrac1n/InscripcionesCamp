import brutalistTexture from "@/assets/brutalist-texture.png";
import heroBurger from "@/assets/hero-burger.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-end overflow-hidden">
      {/* Brutalist texture background */}
      <div className="absolute inset-0">
        <img
          src={brutalistTexture}
          alt="Brutalist texture"
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Burger image overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBurger}
          alt="Smash burger macro"
          className="w-full h-full object-cover object-center scale-110 mix-blend-luminosity opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-[90vw]">
          <p className="text-xs tracking-[0.5em] text-primary font-sans font-medium mb-4 opacity-0 animate-fade-in">
            SMASH BURGER HOUSE
          </p>
          <h1 className="font-serif font-black text-[12vw] md:text-[8vw] lg:text-[7vw] leading-[0.85] tracking-[-0.04em] text-foreground uppercase opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            APLASTADA<br />
            <span className="text-primary">HASTA LA</span><br />
            PERFECCIÓN
          </h1>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <a
              href="#menu"
              className="inline-block border-2 border-foreground bg-foreground text-background px-8 py-4 text-xs tracking-[0.3em] font-sans font-semibold cta-blink transition-all duration-200 hover:bg-primary hover:border-primary hover:text-foreground"
            >
              VER MENÚ
            </a>
            <a
              href="https://share.google/4DPgmwFpsoKCTmrZp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-foreground px-8 py-4 text-xs tracking-[0.3em] font-sans font-semibold text-foreground cta-blink transition-all duration-200"
            >
              CÓMO LLEGAR
            </a>
          </div>
        </div>
      </div>

      {/* Decorative red line */}
      <div className="absolute right-6 md:right-12 top-1/4 bottom-1/4 w-[3px] bg-primary opacity-50" />
    </section>
  );
};

export default Hero;
