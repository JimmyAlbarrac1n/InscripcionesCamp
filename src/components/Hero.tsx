import brutalistTexture from "@/assets/brutalist-texture.png";
import heroBurger from "@/assets/hero-burger.jpg";
import doodle1 from "@/assets/doodle-1.png";
import doodle2 from "@/assets/doodle-2.png";
import doodle3 from "@/assets/doodle-3.png";
import doodle4 from "@/assets/doodle-4.png";
import doodle5 from "@/assets/doodle-5.png";
import doodle6 from "@/assets/doodle-6.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-end overflow-hidden bg-background">
      {/* Brutalist texture background */}
      <div className="absolute inset-0">
        <img
          src={brutalistTexture}
          alt=""
          className="w-full h-full object-cover object-center opacity-15"
        />
      </div>

      {/* Burger image with dramatic blend */}
      <div className="absolute inset-0">
        <img
          src={heroBurger}
          alt="Smash burger"
          className="w-full h-full object-cover object-center scale-110 mix-blend-multiply opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Wave texture top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none">
        <svg viewBox="0 0 1440 120" className="w-full h-16 md:h-24 text-primary/20" preserveAspectRatio="none">
          <path d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,0 L0,0 Z" fill="currentColor" />
        </svg>
      </div>

      {/* Decorative black frames */}
      <div className="absolute top-28 right-8 md:right-16 w-48 h-64 border-2 border-primary/20 pointer-events-none hidden md:block" />
      <div className="absolute top-36 right-14 md:right-22 w-48 h-64 border border-foreground/10 pointer-events-none hidden md:block" />

      {/* Floating circles */}
      <div className="absolute top-[25%] left-[5%] w-24 h-24 rounded-full border border-foreground/10 animate-float pointer-events-none" />
      <div className="absolute bottom-[35%] right-[10%] w-16 h-16 bg-primary/30 rounded-full animate-float-delay pointer-events-none" />

      {/* Large background letter */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="font-serif font-black text-[40vw] text-foreground/[0.03] uppercase leading-none tracking-[-0.05em]">
          B
        </span>
      </div>

      {/* Doodle rayones scattered across hero */}
      <img src={doodle1} alt="" className="absolute top-[15%] left-[8%] w-24 md:w-36 pointer-events-none z-20" />
      <img src={doodle2} alt="" className="absolute top-[10%] right-[15%] w-20 md:w-28 pointer-events-none z-20" />
      <img src={doodle3} alt="" className="absolute bottom-[30%] left-[20%] w-28 md:w-40 pointer-events-none z-20" />
      <img src={doodle4} alt="" className="absolute top-[40%] right-[5%] w-16 md:w-24 pointer-events-none z-20" />
      <img src={doodle5} alt="" className="absolute bottom-[15%] right-[25%] w-22 md:w-32 pointer-events-none z-20" />
      <img src={doodle6} alt="" className="absolute bottom-[20%] left-[3%] w-32 md:w-44 pointer-events-none z-20" />

      {/* Dotted texture overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
        backgroundSize: "20px 20px"
      }} />

      {/* Stamp "ETAPA 1" */}
      <div className="absolute top-20 right-6 md:right-12 z-20 opacity-0 animate-fade-in">
        <div className="border-2 border-foreground/60 rounded-full px-6 py-2">
          <p className="text-[10px] tracking-[0.5em] text-foreground/80 font-sans font-bold">
            ETAPA 1
          </p>
        </div>
      </div>

      {/* Content — centered */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center min-h-screen px-6">
        <h1 className="font-serif font-normal text-[22vw] md:text-[14vw] lg:text-[12vw] leading-[0.85] tracking-[-0.08em] text-foreground uppercase text-center opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          BLANCA
        </h1>
        
        <p className="text-[10px] md:text-xs tracking-[0.5em] text-foreground/70 font-sans font-medium mt-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          SMASH BURGER HOUSE — QUITO, EC
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Link
            to="/menu"
            className="inline-block border-2 border-foreground bg-foreground text-background px-8 py-4 text-xs tracking-[0.3em] font-sans font-semibold cta-blink transition-all duration-200"
          >
            VER MENÚ
          </Link>
          <a
            href="#contacto"
            className="inline-block border-2 border-foreground px-8 py-4 text-xs tracking-[0.3em] font-sans font-semibold text-foreground transition-all duration-200 hover:bg-foreground hover:text-background"
          >
            ENCUÉNTRANOS
          </a>
        </div>
      </div>

      {/* Vertical decorative line */}
      <div className="absolute right-6 md:right-12 top-1/4 bottom-1/4 w-[2px] bg-foreground/15" />
      
      {/* Scroll indicator */}
      <div className="absolute left-6 md:left-12 bottom-6 text-[10px] tracking-[0.5em] text-foreground/30 font-sans" style={{ writingMode: "vertical-rl" }}>
        SCROLL ↓
      </div>

      {/* Wave texture bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none rotate-180">
        <svg viewBox="0 0 1440 80" className="w-full h-10 md:h-16 text-primary/10" preserveAspectRatio="none">
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1350,20 1440,40 L1440,0 L0,0 Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
