import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";
import { campImages } from "@/lib/campImages";

const heroImages = campImages.slice(0, 5);

const SLOTS = [
  { c: "left-[1%] top-[6%]",    w: "w-28 sm:w-36 md:w-48", a: "aspect-[3/4]",  r: "-7deg", f: "animate-float",       d: "0.2s"  },
  { c: "right-[1%] top-[5%]",   w: "w-24 sm:w-32 md:w-40", a: "aspect-square", r: "6deg",  f: "animate-float-delay", d: "0.35s" },
  { c: "left-[2%] top-[46%]",   w: "w-20 sm:w-24 md:w-32", a: "aspect-[4/5]",  r: "5deg",  f: "animate-float-delay", d: "0.5s"  },
  { c: "right-[1%] bottom-[12%]",w: "w-24 sm:w-32 md:w-44", a: "aspect-[3/4]", r: "-6deg", f: "animate-float",       d: "0.45s" },
  { c: "left-[4%] bottom-[6%]", w: "w-24 sm:w-32 md:w-40", a: "aspect-square", r: "7deg",  f: "animate-float-delay", d: "0.6s"  },
];

// Ámbar oscuro — menos llamativo que el amarillo brillante anterior
const BORDER = "#C8A200";

// Geometría del badge circular (SVG viewBox 300×290)
const CX = 150, CY = 152, R = 118;
const topArc = `M ${CX - R},${CY} A ${R},${R} 0 0,1 ${CX + R},${CY}`;
const botArc = `M ${CX - R},${CY} A ${R},${R} 0 0,0 ${CX + R},${CY}`;

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-background px-6 py-10"
    >
      {/* Fotos flotantes */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        {heroImages.map((src, i) => {
          const s = SLOTS[i];
          return (
            <div key={i} className={`absolute ${s.c} ${s.w} opacity-0 animate-fade-in`} style={{ animationDelay: s.d }}>
              <div className={s.f}>
                <div
                  className={`w-full overflow-hidden rounded-xl border border-white/70 shadow-[0_18px_40px_-18px_rgba(20,40,25,0.45)] ${s.a}`}
                  style={{ transform: `rotate(${s.r}) scale(1.03)` }}
                >
                  <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Esquinas decorativas */}
      <div className="pointer-events-none absolute left-5 top-5 z-10 hidden h-10 w-10 border-l-2 border-t-2 border-primary/25 md:block" />
      <div className="pointer-events-none absolute bottom-5 right-5 z-10 hidden h-10 w-10 border-b-2 border-r-2 border-primary/25 md:block" />

      {/* Contenido */}
      <div
        className="relative z-10 flex w-full max-w-2xl flex-col items-center text-center"
        style={{ textShadow: "0 1px 14px rgba(255,255,255,0.95)" }}
      >
        {/* Encabezado semántico oculto para SEO */}
        <h1 className="sr-only">Campamentos Vacacionales XIV Temporada — Pastoral Juvenil Cristo Rey</h1>

        {/* Badge circular: arco superior + logo + arco inferior */}
        <div
          className="relative my-4 flex items-center justify-center opacity-0 animate-fade-in"
          style={{ animationDelay: "0.22s" }}
        >
          {/* SVG con los dos arcos de texto */}
          <svg viewBox="0 0 300 290" className="w-72 sm:w-80 md:w-96" aria-hidden="true">
            <defs>
              <path id="hero-arc-top" d={topArc} />
              <path id="hero-arc-bot" d={botArc} />
            </defs>

            {/* CAMPAMENTOS VACACIONALES — arco superior, texto fuera del círculo */}
            <text
              fill="#2C5E3B"
              fontSize={22}
              fontFamily={"'Playfair Display', Georgia, serif"}
              fontWeight={900}
              letterSpacing={0.5}
            >
              <textPath href="#hero-arc-top" startOffset="50%" textAnchor="middle">
                CAMPAMENTOS VACACIONALES
              </textPath>
            </text>

            {/* XIV TEMPORADA — arco inferior, texto dentro cerca del borde */}
            <text
              fill="#2C5E3B"
              fontSize={22}
              fontFamily={"'Playfair Display', Georgia, serif"}
              fontWeight={900}
              letterSpacing={3}
            >
              <textPath href="#hero-arc-bot" startOffset="50%" textAnchor="middle">
                XIV TEMPORADA
              </textPath>
            </text>
          </svg>

          {/* Halo cálido exterior */}
          <div
            className="pointer-events-none absolute h-48 w-48 rounded-full blur-2xl sm:h-56 sm:w-56 md:h-64 md:w-64"
            style={{ background: "radial-gradient(circle, hsl(48 90% 80% / 0.55), transparent 70%)" }}
            aria-hidden="true"
          />

          {/* Logo centrado sobre el SVG */}
          <img
            src={logo}
            alt="Escudo de la Pastoral Juvenil Cristo Rey"
            className="absolute w-36 sm:w-40 md:w-48"
          />
        </div>

        {/* Lema */}
        <p
          className="font-serif text-lg italic text-primary/85 opacity-0 animate-fade-in sm:text-xl"
          style={{ animationDelay: "0.55s" }}
        >
          "Desde el Joven, y Para el Joven"
        </p>

        {/* Versículo */}
        <p
          className="mt-3 max-w-md text-sm leading-relaxed text-foreground/70 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.65s" }}
        >
          "¡Vino a buscar y salvar lo que estaba perdido!"
          <span className="mt-1 block text-xs font-medium tracking-wider text-primary/70">— Lucas 19, 10</span>
        </p>

        {/* CTA */}
        <div className="relative mt-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.78s" }}>
          <div className="pointer-events-none absolute -inset-1 rounded-full bg-accent/40 blur-md" aria-hidden="true" />
          <Link
            to="/inscripcion"
            className="group relative inline-flex items-center gap-3 rounded-full bg-primary px-12 py-5 text-lg font-bold tracking-wide text-primary-foreground shadow-[0_10px_22px_-10px_hsl(138_36%_27%/0.7)] ring-2 ring-accent/60 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-10px_hsl(138_36%_27%/0.8)]"
          >
            Quiero Inscribirme
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
