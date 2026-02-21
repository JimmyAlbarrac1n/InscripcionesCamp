interface FooterProps {
  variant?: "light" | "dark";
}

const Footer = ({ variant = "light" }: FooterProps) => {
  const isDark = variant === "dark";
  const textColor = isDark ? "text-background" : "text-foreground";
  const mutedColor = isDark ? "text-background/50" : "text-foreground/50";
  const borderColor = isDark ? "border-background/10" : "border-foreground/10";

  return (
    <footer className={`px-6 md:px-12 py-12 border-t ${borderColor}`}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <span className={`font-serif font-black ${textColor} text-2xl tracking-[-0.05em] uppercase`}>
          BLANCA
        </span>
        <div className="flex gap-8">
          <a
            href="https://www.instagram.com/enlablanca/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xs tracking-[0.3em] ${mutedColor} hover:${textColor} transition-colors font-sans`}
          >
            INSTAGRAM
          </a>
          <a
            href="https://share.google/4DPgmwFpsoKCTmrZp"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xs tracking-[0.3em] ${mutedColor} hover:${textColor} transition-colors font-sans`}
          >
            UBICACIÓN
          </a>
          <a
            href="tel:+593987497681"
            className={`text-xs tracking-[0.3em] ${mutedColor} hover:${textColor} transition-colors font-sans`}
          >
            LLAMAR
          </a>
        </div>
        <span className={`text-xs ${mutedColor} font-sans`}>
          © 2025 — BLANCA
        </span>
      </div>
    </footer>
  );
};

export default Footer;
