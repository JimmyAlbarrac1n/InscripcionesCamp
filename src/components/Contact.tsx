const Contact = () => {
  return (
    <section id="contacto" className="relative bg-background py-24 md:py-32 border-t border-border">
      <div className="px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
          {/* Left: Info */}
          <div>
            <p className="text-xs tracking-[0.5em] text-primary font-sans font-medium mb-4">UBICACIÓN</p>
            <h2 className="font-serif font-black text-[10vw] md:text-[5vw] leading-[0.85] tracking-[-0.04em] text-foreground uppercase mb-12">
              ENCUÉN­<br />TRANOS
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xs tracking-[0.3em] text-muted-foreground font-sans mb-2">DIRECCIÓN</h3>
                <p className="text-foreground font-sans text-lg">
                  Zona Centro, Ciudad de México
                </p>
              </div>
              <div>
                <h3 className="text-xs tracking-[0.3em] text-muted-foreground font-sans mb-2">HORARIO</h3>
                <p className="text-foreground font-sans">Mar — Dom</p>
                <p className="text-foreground font-sans">13:00 — 22:00</p>
              </div>
              <div>
                <h3 className="text-xs tracking-[0.3em] text-muted-foreground font-sans mb-2">REDES</h3>
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
                className="inline-block border-2 border-foreground bg-foreground text-background px-8 py-4 text-xs tracking-[0.3em] font-sans font-semibold cta-blink transition-all duration-200 hover:bg-primary hover:border-primary hover:text-foreground"
              >
                CÓMO LLEGAR →
              </a>
            </div>
          </div>

          {/* Right: Brutalised map placeholder */}
          <div className="relative">
            <div className="aspect-square md:aspect-auto md:h-full bg-secondary border border-border overflow-hidden relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661453578437!2d-99.14068!3d19.4326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI1JzU3LjQiTiA5OcKwMDgnMjYuNCJX!5e0!3m2!1ses!2smx!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(1) contrast(1.2) grayscale(1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación En La Blanca"
                className="absolute inset-0"
              />
              {/* Red marker overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-4 h-4 bg-primary rounded-full animate-pulse" />
                <div className="w-8 h-8 border-2 border-primary rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping opacity-50" />
              </div>
              {/* Brutalised corner labels */}
              <div className="absolute top-4 left-4 text-xs tracking-[0.3em] text-foreground/70 font-sans z-10 mix-blend-difference">
                LAT 19.4326
              </div>
              <div className="absolute bottom-4 right-4 text-xs tracking-[0.3em] text-foreground/70 font-sans z-10 mix-blend-difference">
                LNG -99.1406
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
