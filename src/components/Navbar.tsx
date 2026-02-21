import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "INICIO", href: "#hero" },
    { label: "TÉCNICA", href: "#tecnica" },
    { label: "MENÚ", href: "#menu" },
    { label: "CONTACTO", href: "#contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference">
      <div className="flex items-center justify-between px-6 md:px-12 py-6">
        <a href="#hero" className="font-serif font-black text-foreground text-2xl tracking-[-0.05em] uppercase">
          EN LA<br />BLANCA
        </a>

        {/* Desktop */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-foreground text-xs tracking-[0.3em] font-medium hover:text-primary transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground z-50"
          aria-label="Menu"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-foreground transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-serif text-4xl font-black text-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
