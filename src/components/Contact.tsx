import doodle1 from "@/assets/doodle-1.png";
import doodle2 from "@/assets/doodle-2.png";
import doodle3 from "@/assets/doodle-3.png";
import doodle4 from "@/assets/doodle-4.png";
import doodle5 from "@/assets/doodle-5.png";
import doodle6 from "@/assets/doodle-6.png";

const Contact = () => {
  return (
    <section id="contacto" className="relative bg-background py-24 md:py-32 overflow-hidden">
      {/* Wave top */}
      <div className="absolute top-0 left-0 w-full pointer-events-none">
        <svg viewBox="0 0 1440 60" className="w-full h-8 md:h-12 text-primary/15" preserveAspectRatio="none">
          <path d="M0,30 C360,0 720,60 1080,30 C1260,10 1350,50 1440,30 L1440,0 L0,0 Z" fill="currentColor" />
        </svg>
      </div>

      {/* Doodle elements scattered */}
      <img src={doodle1} alt="" className="absolute top-12 right-8 md:right-20 w-20 md:w-28 opacity-60 pointer-events-none" />
      <img src={doodle2} alt="" className="absolute top-[30%] left-[3%] w-16 md:w-24 opacity-50 pointer-events-none" />
      <img src={doodle3} alt="" className="absolute bottom-[40%] right-[5%] w-24 md:w-32 opacity-40 pointer-events-none" />
      <img src={doodle4} alt="" className="absolute top-[50%] left-[40%] w-14 md:w-20 opacity-30 pointer-events-none" />
      <img src={doodle5} alt="" className="absolute bottom-20 left-[10%] w-20 md:w-28 opacity-50 pointer-events-none" />
      <img src={doodle6} alt="" className="absolute bottom-[25%] right-[20%] w-28 md:w-40 opacity-35 pointer-events-none" />

      {/* Decorative elements around */}
      <div className="absolute top-16 right-8 md:right-16 w-20 h-20 border border-foreground/10 rounded-full pointer-events-none animate-float hidden md:block" />
      <div className="absolute top-40 right-24 w-3 h-3 bg-foreground/10 pointer-events-none hidden md:block" />
      <div className="absolute bottom-32 left-[5%] w-32 h-32 border border-foreground/5 pointer-events-none hidden md:block" />

      {/* Dotted texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{
        backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
        backgroundSize: "24px 24px"
      }} />

      <div className="px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12">
          {/* Left: Info */}
          <div>
            <div className="inline-block border border-foreground/20 px-4 py-1 mb-4">
              <p className="text-[10px] tracking-[0.5em] text-foreground/60 font-sans font-medium">UBICACIÓN</p>
            </div>
            <h2 className="font-serif font-black text-[10vw] md:text-[5vw] leading-[0.85] tracking-[-0.04em] text-foreground uppercase mb-12">
              ENCUÉNTRANOS
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-[10px] tracking-[0.3em] text-foreground/40 font-sans mb-2">DIRECCIÓN</h3>
                <p className="text-foreground font-sans text-lg">
                  García Moreno 220 y, Quito 170157
                </p>
              </div>
              <div>
                <h3 className="text-[10px] tracking-[0.3em] text-foreground/40 font-sans mb-2">TELÉFONO</h3>
                <a href="tel:+593987497681" className="text-foreground font-sans text-lg hover:text-primary transition-colors">
                  098 749 7681
                </a>
              </div>
              <div>
                <h3 className="text-[10px] tracking-[0.3em] text-foreground/40 font-sans mb-2">HORARIO</h3>
                <div className="space-y-2 font-sans text-foreground text-sm">
                  <div className="flex justify-between max-w-xs border-b border-foreground/10 pb-2">
                    <span>Miércoles — Viernes</span>
                    <span className="text-foreground/60">12:30 — 22:30</span>
                  </div>
                  <div className="flex justify-between max-w-xs border-b border-foreground/10 pb-2">
                    <span>Sábado</span>
                    <span className="text-foreground/60">12:30 — 22:30</span>
                  </div>
                  <div className="flex justify-between max-w-xs border-b border-foreground/10 pb-2">
                    <span>Domingo</span>
                    <span className="text-foreground/60">12:00 — 17:00</span>
                  </div>
                  <div className="flex justify-between max-w-xs">
                    <span>Lunes — Martes</span>
                    <span className="text-primary font-semibold">Cerrado</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-[10px] tracking-[0.3em] text-foreground/40 font-sans mb-2">REDES</h3>
                <a href="https://www.instagram.com/enlablanca/" target="_blank" rel="noopener noreferrer" className="text-foreground font-sans hover:text-primary transition-colors">
                  @enlablanca
                </a>
              </div>
            </div>

            <div className="mt-12">
              <a
                href="https://share.google/4DPgmwFpsoKCTmrZp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-foreground bg-foreground text-background px-8 py-4 text-xs tracking-[0.3em] font-sans font-semibold cta-blink transition-all duration-200"
              >
                CÓMO LLEGAR →
              </a>
            </div>
          </div>

          {/* Right: Map with decorative elements */}
          <div className="relative">
            {/* Frame decorations around map */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-foreground/20 pointer-events-none hidden md:block" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-foreground/20 pointer-events-none hidden md:block" />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary/40 pointer-events-none hidden md:block" />
            
            <div className="aspect-square md:aspect-auto md:h-full bg-secondary border border-foreground/10 overflow-hidden relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8!2d-78.5123!3d-0.2199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1ses!2sec!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(1) contrast(1.3) grayscale(1) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Blanca - Quito"
                className="absolute inset-0"
              />
              {/* Marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-5 h-5 bg-foreground rounded-full animate-pulse" />
                <div className="w-10 h-10 border-2 border-foreground rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping opacity-40" />
              </div>
              
              {/* Map labels */}
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-primary/80 backdrop-blur-sm px-3 py-1">
                  <span className="text-[10px] tracking-[0.3em] text-foreground font-sans font-medium">QUITO, EC</span>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 z-10">
                <div className="bg-primary/80 backdrop-blur-sm px-3 py-1">
                  <span className="text-[10px] tracking-[0.3em] text-foreground font-sans">GARCÍA MORENO 220</span>
                </div>
              </div>

              {/* Coordinate labels */}
              <div className="absolute bottom-4 left-4 text-[9px] tracking-[0.2em] text-foreground/30 font-sans z-10">
                LAT -0.2199
              </div>
              <div className="absolute top-4 right-4 text-[9px] tracking-[0.2em] text-foreground/30 font-sans z-10">
                LNG -78.5123
              </div>

              {/* Inner frame */}
              <div className="absolute inset-3 border border-foreground/10 pointer-events-none z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
