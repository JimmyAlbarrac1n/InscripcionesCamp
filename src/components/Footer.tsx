const Footer = () => {
  return (
    <footer className="bg-primary px-6 md:px-12 py-12 border-t border-foreground/10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-serif font-black text-foreground text-2xl tracking-[-0.05em] uppercase">
          BLANCA
        </span>
        <div className="flex gap-8">
          <a
            href="https://www.instagram.com/enlablanca/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.3em] text-foreground/60 hover:text-foreground transition-colors font-sans"
          >
            INSTAGRAM
          </a>
          <a
            href="https://share.google/4DPgmwFpsoKCTmrZp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.3em] text-foreground/60 hover:text-foreground transition-colors font-sans"
          >
            UBICACIÓN
          </a>
          <a
            href="tel:+593987497681"
            className="text-xs tracking-[0.3em] text-foreground/60 hover:text-foreground transition-colors font-sans"
          >
            LLAMAR
          </a>
        </div>
        <span className="text-xs text-foreground/40 font-sans">
          © 2025 — TODOS LOS DERECHOS RESERVADOS
        </span>
      </div>
    </footer>
  );
};

export default Footer;
