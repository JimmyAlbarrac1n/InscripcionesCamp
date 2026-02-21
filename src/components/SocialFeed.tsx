import social1 from "@/assets/social-1.jpg";
import social2 from "@/assets/social-2.jpg";
import social3 from "@/assets/social-3.jpg";
import heroBurger from "@/assets/hero-burger.jpg";
import menuBurger1 from "@/assets/menu-burger-1.jpg";
import menuBurger2 from "@/assets/menu-burger-2.jpg";

const images = [
  { src: social1, label: "Nº 001", tag: "PROTOTIPO DE SABOR" },
  { src: social2, label: "Nº 002", tag: "ACOMPAÑAMIENTO" },
  { src: social3, label: "Nº 003", tag: "EL RITUAL" },
  { src: heroBurger, label: "Nº 004", tag: "LA ORIGINAL" },
  { src: menuBurger1, label: "Nº 005", tag: "DOBLE SMASH" },
  { src: menuBurger2, label: "Nº 006", tag: "EDICIÓN ESPECIAL" },
];

const SocialFeed = () => {
  return (
    <section id="social" className="relative bg-background py-24 md:py-32">
      <div className="px-6 md:px-12">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-xs tracking-[0.5em] text-primary font-sans font-medium mb-4">ARCHIVO</p>
            <h2 className="font-serif font-black text-[10vw] md:text-[5vw] leading-[0.85] tracking-[-0.04em] text-foreground uppercase">
              GALERÍA
            </h2>
          </div>
          <a
            href="https://www.instagram.com/enlablanca/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.3em] font-sans text-muted-foreground hover:text-primary transition-colors"
          >
            @ENLABLANCA
          </a>
        </div>

        {/* Irregular grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {images.map((img, i) => (
            <a
              key={i}
              href="https://www.instagram.com/enlablanca/"
              target="_blank"
              rel="noopener noreferrer"
              className={`relative group overflow-hidden ${
                i === 0 ? "md:row-span-2" : ""
              } ${i === 3 ? "md:col-span-2" : ""}`}
            >
              <img
                src={img.src}
                alt={img.tag}
                className={`w-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 grayscale-[30%] ${
                  i === 0 ? "aspect-[3/4] md:h-full" : i === 3 ? "aspect-video" : "aspect-square"
                }`}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-all duration-500 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100">
                <span className="text-xs tracking-[0.3em] text-primary font-sans font-medium">{img.label}</span>
                <span className="text-xs tracking-[0.2em] text-foreground font-sans">{img.tag}</span>
              </div>
              {/* Border overlay */}
              <div className="absolute inset-0 border border-border/30 pointer-events-none" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
