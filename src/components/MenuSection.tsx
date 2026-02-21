import { useState } from "react";
import menuBurger1 from "@/assets/menu-burger-1.jpg";
import menuBurger2 from "@/assets/menu-burger-2.jpg";
import cheeseDetail from "@/assets/cheese-detail.jpg";
import techniqueBurger from "@/assets/technique-burger.jpg";

const burgerItems = [
  {
    name: "LA SIMPLE",
    desc: "Single smash · cheddar · pickles · mostaza amarilla",
    price: "$6",
    image: techniqueBurger,
  },
  {
    name: "LA CLÁSICA",
    desc: "Doble smash · cheddar americano · cebolla caramelizada · salsa secreta",
    price: "$8",
    image: menuBurger1,
  },
  {
    name: "LA TOSTADA",
    desc: "Smash con bacon crujiente · queso gouda ahumado · cebolla crispy",
    price: "$9",
    image: cheeseDetail,
  },
  {
    name: "LA SANGRE",
    desc: "Triple smash · queso pepper jack · jalapeños · salsa habanero",
    price: "$10",
    image: menuBurger2,
  },
];

const sides = [
  { name: "PORCIÓN DE PAPAS", desc: "Papas fritas crujientes con sal y especias", price: "$2" },
];

const drinks = [
  { name: "AGUA SIN GAS", price: "$1.50" },
  { name: "AGUA CON GAS", price: "$1.50" },
  { name: "LIMONADA", price: "$2" },
  { name: "GASEOSA", price: "$2" },
];

const MenuSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section id="menu" className="relative py-16 md:py-24 overflow-hidden">
      {/* Dotted texture background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{
        backgroundImage: "radial-gradient(circle, black 1px, transparent 1px)",
        backgroundSize: "16px 16px"
      }} />

      {/* Corner decoration */}
      <div className="absolute top-8 right-8 w-24 h-24 border border-background/10 pointer-events-none hidden md:block" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border border-background/10 rounded-full pointer-events-none hidden md:block" />

      <div className="px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="inline-block border border-background/20 px-4 py-1 mb-4">
              <p className="text-[10px] tracking-[0.5em] text-background/60 font-sans font-medium">CARTA</p>
            </div>
            <h2 className="font-serif font-black text-[12vw] md:text-[6vw] leading-[0.85] tracking-[-0.04em] text-background uppercase">
              MENÚ
            </h2>
          </div>
          <div className="hidden md:flex flex-col items-end gap-2">
            <span className="text-background/40 text-xs tracking-[0.3em] font-sans">PRECIOS EN USD</span>
            <span className="text-background/30 text-[10px] tracking-[0.2em] font-sans">HAMBURGUESAS NO INCLUYEN PAPAS</span>
            <div className="w-12 h-[2px] bg-background/20" />
          </div>
        </div>

        {/* Section: Hamburguesas */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-3 h-3 bg-background" />
            <h3 className="text-xs tracking-[0.5em] text-background font-sans font-semibold">HAMBURGUESAS</h3>
            <div className="flex-1 h-px bg-background/15" />
          </div>

          <div className="border-t border-background/15" onMouseMove={handleMouseMove}>
            {burgerItems.map((item, i) => (
              <div
                key={item.name}
                className="group border-b border-background/15 py-6 md:py-8 flex items-center justify-between cursor-pointer hover-glitch"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex items-baseline gap-4 md:gap-8">
                  <span className="text-background/20 text-xs font-sans tracking-[0.2em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif font-black text-2xl md:text-4xl tracking-[-0.02em] text-background uppercase group-hover:text-background/50 transition-colors duration-200">
                      {item.name}
                    </h3>
                    <p className="text-background/40 text-xs md:text-sm font-sans mt-1 tracking-wide">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <span className="font-serif font-bold text-xl md:text-2xl text-background group-hover:text-background/50 transition-colors">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Acompañamientos */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-3 h-3 border border-background" />
            <h3 className="text-xs tracking-[0.5em] text-background font-sans font-semibold">ACOMPAÑAMIENTOS</h3>
            <div className="flex-1 h-px bg-background/15" />
          </div>

          <div className="border-t border-background/15">
            {sides.map((item) => (
              <div key={item.name} className="group border-b border-background/15 py-6 flex items-center justify-between">
                <div>
                  <h3 className="font-serif font-black text-xl md:text-2xl tracking-[-0.02em] text-background uppercase group-hover:text-background/50 transition-colors duration-200">
                    {item.name}
                  </h3>
                  <p className="text-background/40 text-xs font-sans mt-1 tracking-wide">{item.desc}</p>
                </div>
                <span className="font-serif font-bold text-lg md:text-xl text-background group-hover:text-background/50 transition-colors">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Bebidas */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-3 h-3 rounded-full border border-background" />
            <h3 className="text-xs tracking-[0.5em] text-background font-sans font-semibold">BEBIDAS</h3>
            <div className="flex-1 h-px bg-background/15" />
          </div>

          <div className="border-t border-background/15">
            {drinks.map((item) => (
              <div key={item.name} className="group border-b border-background/15 py-4 flex items-center justify-between">
                <h3 className="font-sans font-medium text-base md:text-lg tracking-wide text-background uppercase group-hover:text-background/50 transition-colors duration-200">
                  {item.name}
                </h3>
                <span className="font-serif font-bold text-base md:text-lg text-background group-hover:text-background/50 transition-colors">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Floating image on hover */}
        {hoveredIndex !== null && (
          <div
            className="fixed pointer-events-none z-40 w-48 h-48 md:w-64 md:h-64 overflow-hidden hidden md:block"
            style={{
              left: mousePos.x + 20,
              top: mousePos.y - 100,
            }}
          >
            <img
              src={burgerItems[hoveredIndex].image}
              alt={burgerItems[hoveredIndex].name}
              className="w-full h-full object-cover"
            />
            {/* Frame */}
            <div className="absolute inset-1 border border-white/30 pointer-events-none" />
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
