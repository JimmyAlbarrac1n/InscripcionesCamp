import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";
import { campImages } from "@/lib/campImages";

// El hero usa las primeras 5 fotos (el resto se reparten en otras secciones).
const heroImages = campImages.slice(0, 5);

// Posiciones de las fotos flotantes (en los bordes, lejos del texto central). Todas claras.
const SLOTS = [
  { c: "left-[1%] top-[6%]", w: "w-28 sm:w-36 md:w-48", a: "aspect-[3/4]", r: "-7deg", f: "animate-float", d: "0.2s" },
  { c: "right-[1%] top-[5%]", w: "w-24 sm:w-32 md:w-40", a: "aspect-square", r: "6deg", f: "animate-float-delay", d: "0.35s" },
  { c: "left-[2%] top-[46%]", w: "w-20 sm:w-24 md:w-32", a: "aspect-[4/5]", r: "5deg", f: "animate-float-delay", d: "0.5s" },
  { c: "right-[1%] bottom-[12%]", w: "w-24 sm:w-32 md:w-44", a: "aspect-[3/4]", r: "-6deg", f: "animate-float", d: "0.45s" },
  { c: "left-[4%] bottom-[6%]", w: "w-24 sm:w-32 md:w-40", a: "aspect-square", r: "7deg", f: "animate-float-delay", d: "0.6s" },
];

// Contorno verde para que el título amarillo se lea sobre el blanco.
const YELLOW_OUTLINE =
  "1px 1px 0 #2C5E3B, -1px 1px 0 #2C5E3B, 1px -1px 0 #2C5E3B, -1px -1px 0 #2C5E3B, 2px 0 0 #2C5E3B, -2px 0 0 #2C5E3B, 0 2px 0 #2C5E3B, 0 -2px 0 #2C5E3B";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-[88vh] flex-col items-center justify-center overflow-hidden bg-background px-6 py-10"
    >
      {/* ===== Fotos flotantes (claras, sin difuminado) ===== */}
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

      {/* ===== Contenido (centrado) ===== */}
      <div
        className="relative z-10 flex w-full max-w-3xl flex-col items-center text-center"
        style={{ textShadow: "0 1px 14px rgba(255,255,255,0.95)" }}
      >
        {/* Títulos grandes en dos colores */}
        <h1
          className="font-serif text-5xl font-black uppercase leading-[0.95] tracking-tight text-primary opacity-0 animate-fade-in sm:text-6xl md:text-7xl"
          style={{ animationDelay: "0.05s" }}
        >
          Campamentos Vacacionales
        </h1>
        <p
          className="mt-2 font-serif text-4xl font-black uppercase tracking-tight opacity-0 animate-fade-in sm:text-5xl md:text-6xl"
          style={{ animationDelay: "0.18s", color: "#FFD93D", textShadow: YELLOW_OUTLINE }}
        >
          XIV Temporada
        </p>

        {/* Logo (más grande) con halo */}
        <div className="relative my-7 flex items-center justify-center opacity-0 animate-fade-in" style={{ animationDelay: "0.32s" }}>
          <div
            className="absolute h-[135%] w-[135%] rounded-full blur-2xl"
            style={{ background: "radial-gradient(circle, hsl(48 90% 80% / 0.7), transparent 65%)" }}
          />
          <img
            src={logo}
            alt="Escudo de la Pastoral Juvenil Cristo Rey"
            className="relative w-52 drop-shadow-[0_14px_28px_hsl(138_36%_27%/0.3)] sm:w-64 md:w-72"
          />
        </div>

        {/* Lema */}
        <p className="font-serif text-lg italic text-primary/85 opacity-0 animate-fade-in sm:text-xl" style={{ animationDelay: "0.45s" }}>
          “Desde el Joven, y Para el Joven”
        </p>

        {/* Versículo del año */}
        <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground/70 opacity-0 animate-fade-in" style={{ animationDelay: "0.55s" }}>
          “¡Vino a buscar y salvar lo que estaba perdido!”
          <span className="mt-1 block text-xs font-medium tracking-wider text-primary/70">— Lucas 19, 10</span>
        </p>

        {/* CTA principal resaltado */}
        <div className="relative mt-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.7s" }}>
          <div className="pointer-events-none absolute -inset-2.5 rounded-full bg-accent/50 blur-xl" aria-hidden="true" />
          <Link
            to="/inscripcion"
            className="group relative inline-flex items-center gap-3 rounded-full bg-primary px-12 py-5 text-lg font-bold tracking-wide text-primary-foreground shadow-[0_20px_45px_-12px_hsl(138_36%_27%/0.85)] ring-2 ring-accent/60 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_55px_-10px_hsl(138_36%_27%/0.95)]"
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
