const Footer = () => {
  return (
    <footer className="bg-background border-t border-border px-6 md:px-12 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-serif font-black text-foreground text-lg tracking-[-0.05em] uppercase">
          BLANCA
        </span>
        <div className="flex gap-8">
          <a
            href="https://www.instagram.com/enlablanca/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.3em] text-muted-foreground hover:text-primary transition-colors font-sans"
          >
            INSTAGRAM
          </a>
          <a
            href="https://share.google/4DPgmwFpsoKCTmrZp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.3em] text-muted-foreground hover:text-primary transition-colors font-sans"
          >
            UBICACIÓN
          </a>
        </div>
        <span className="text-xs text-muted-foreground font-sans">
          © 2025 — TODOS LOS DERECHOS RESERVADOS
        </span>
      </div>
    </footer>
  );
};

export default Footer;
