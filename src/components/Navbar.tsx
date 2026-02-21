import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  variant?: "light" | "dark";
}

const Navbar = ({ variant = "light" }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const links = [
    { label: "INICIO", href: isHome ? "#hero" : "/", isAnchor: isHome },
    { label: "TÉCNICA", href: isHome ? "#tecnica" : "/#tecnica", isAnchor: isHome },
    { label: "MENÚ", href: "/menu", isAnchor: false },
    { label: "CONTACTO", href: isHome ? "#contacto" : "/#contacto", isAnchor: isHome },
  ];

  const isDark = variant === "dark";
  const textColor = isDark ? "text-background" : "text-foreground";
  const bgColor = isDark ? "bg-foreground" : "bg-background";
  const barColor = isDark ? "bg-background" : "bg-foreground";

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 ${bgColor}/90 backdrop-blur-sm border-b ${isDark ? "border-background/10" : "border-foreground/10"}`}>
      <div className="flex items-center justify-between px-6 md:px-12 py-5">
        {isHome ? (
          <a href="#hero" className={`font-serif font-black ${textColor} text-2xl tracking-[-0.05em] uppercase`}>
            BLANCA
          </a>
        ) : (
          <Link to="/" className={`font-serif font-black ${textColor} text-2xl tracking-[-0.05em] uppercase`}>
            BLANCA
          </Link>
        )}

        {/* Desktop */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((l) =>
            l.isAnchor ? (
              <a
                key={l.label}
                href={l.href}
                className={`${textColor} text-xs tracking-[0.3em] font-medium hover:opacity-60 transition-opacity duration-200`}
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.label}
                to={l.href}
                className={`${textColor} text-xs tracking-[0.3em] font-medium hover:opacity-60 transition-opacity duration-200`}
              >
                {l.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden ${textColor} z-50`}
          aria-label="Menu"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block w-6 h-0.5 ${barColor} transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 ${barColor} transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 ${barColor} transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className={`md:hidden fixed inset-0 ${bgColor} z-40 flex flex-col items-center justify-center gap-8`}>
          {links.map((l) =>
            l.isAnchor ? (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`font-serif text-4xl font-black ${textColor} hover:opacity-60 transition-opacity`}
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.label}
                to={l.href}
                onClick={() => setOpen(false)}
                className={`font-serif text-4xl font-black ${textColor} hover:opacity-60 transition-opacity`}
              >
                {l.label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
