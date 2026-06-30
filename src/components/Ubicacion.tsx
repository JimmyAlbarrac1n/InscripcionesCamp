// Ubicación del campamento. Coordenadas reales (Gualchán, Cantón Espejo) tomadas del link del usuario.
const MAPS_EMBED = "https://maps.google.com/maps?q=0.7830627,-78.211223&z=14&output=embed";
const WHATSAPP = `https://wa.me/593959888097?text=${encodeURIComponent(
  "Hola, quiero información sobre los Campamentos Cristo Rey 2026.",
)}`;

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Ubicacion = () => {
  return (
    <section id="ubicacion" className="relative bg-background px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-primary/60">Ubicación</span>
          <h2 className="mt-2 font-serif text-4xl font-black tracking-tight text-foreground sm:text-5xl">Gualchán, Cantón Espejo</h2>
          <p className="mt-3 text-muted-foreground">Carchi, Ecuador</p>
        </div>

        <div className="grid gap-6 md:grid-cols-5">
          <div className="relative overflow-hidden rounded-2xl border border-primary/15 shadow-[0_24px_50px_-24px_hsl(138_36%_27%/0.35)] md:col-span-3">
            <iframe
              src={MAPS_EMBED}
              title="Ubicación del campamento en Google Maps"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full md:h-full"
              style={{ border: 0, minHeight: "20rem" }}
            />
          </div>

          <div className="flex flex-col justify-center gap-5 md:col-span-2">
            <p className="text-foreground/80">¿Tienes dudas o quieres más información? Escríbenos y te ayudamos con la inscripción.</p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-between gap-3 rounded-2xl bg-[#25D366] px-6 py-5 text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_-12px_rgba(37,211,102,0.7)]"
            >
              <span className="flex items-center gap-3">
                <WhatsAppIcon />
                <span className="font-semibold">Escríbenos por WhatsApp</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ubicacion;
