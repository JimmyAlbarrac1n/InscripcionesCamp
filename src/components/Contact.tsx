const Contact = () => {
  return (
    <section id="contacto" className="relative bg-background py-24 md:py-32 border-t border-foreground/10 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-24 h-24 border border-foreground/10 rounded-full animate-float pointer-events-none hidden md:block" />
      <div className="absolute bottom-20 left-[10%] pointer-events-none animate-spin-slow opacity-10 hidden md:block">
        <svg width="60" height="60" viewBox="0 0 60 60" className="text-foreground">
          <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fill="currentColor" fontSize="40" fontFamily="serif" fontWeight="900">✦</text>
        </svg>
      </div>

      <div className="px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
          {/* Left: Info */}
          <div>
            <p className="text-xs tracking-[0.5em] text-foreground/60 font-sans font-medium mb-4">UBICACIÓN</p>
            <h2 className="font-serif font-black text-[10vw] md:text-[5vw] leading-[0.85] tracking-[-0.04em] text-foreground uppercase mb-12">
              ENCUÉN­<br />TRANOS
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xs tracking-[0.3em] text-foreground/40 font-sans mb-2">DIRECCIÓN</h3>
                <p className="text-foreground font-sans text-lg">
                  García Moreno 220 y, Quito 170157
                </p>
              </div>
              <div>
                <h3 className="text-xs tracking-[0.3em] text-foreground/40 font-sans mb-2">TELÉFONO</h3>
                <a
                  href="tel:+593987497681"
                  className="text-foreground font-sans text-lg hover:text-primary transition-colors"
                >
                  098 749 7681
                </a>
              </div>
              <div>
                <h3 className="text-xs tracking-[0.3em] text-foreground/40 font-sans mb-2">HORARIO</h3>
                <div className="space-y-1 font-sans text-foreground">
                  <div className="flex justify-between max-w-xs">
                    <span>Miércoles — Viernes</span>
                    <span className="text-foreground/60">12:30 — 22:30</span>
                  </div>
                  <div className="flex justify-between max-w-xs">
                    <span>Sábado</span>
                    <span className="text-foreground/60">12:30 — 22:30</span>
                  </div>
                  <div className="flex justify-between max-w-xs">
                    <span>Domingo</span>
                    <span className="text-foreground/60">12:00 — 17:00</span>
                  </div>
                  <div className="flex justify-between max-w-xs">
                    <span>Lunes — Martes</span>
                    <span className="text-primary font-medium">Cerrado</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xs tracking-[0.3em] text-foreground/40 font-sans mb-2">REDES</h3>
                <a
                  href="https://www.instagram.com/enlablanca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground font-sans hover:text-primary transition-colors"
                >
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

          {/* Right: Brutalised map */}
          <div className="relative">
            <div className="aspect-square md:aspect-auto md:h-full bg-secondary border border-foreground/10 overflow-hidden relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8!2d-78.5123!3d-0.2199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1ses!2sec!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(1) contrast(1.2) grayscale(1) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Blanca - Quito"
                className="absolute inset-0"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-4 h-4 bg-foreground rounded-full animate-pulse" />
                <div className="w-8 h-8 border-2 border-foreground rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping opacity-50" />
              </div>
              <div className="absolute top-4 left-4 text-xs tracking-[0.3em] text-foreground/70 font-sans z-10">
                QUITO, EC
              </div>
              <div className="absolute bottom-4 right-4 text-xs tracking-[0.3em] text-foreground/70 font-sans z-10">
                GARCÍA MORENO 220
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
