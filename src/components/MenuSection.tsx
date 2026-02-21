import { useState } from "react";
import menuBurger1 from "@/assets/menu-burger-1.jpg";
import menuBurger2 from "@/assets/menu-burger-2.jpg";
import cheeseDetail from "@/assets/cheese-detail.jpg";
import techniqueBurger from "@/assets/technique-burger.jpg";

const burgerItems = [
  {
    name: "LA CLÁSICA",
    desc: "Doble smash · cheddar americano · cebolla caramelizada · salsa secreta",
    price: "$8",
    image: menuBurger1,
  },
  {
    name: "LA SANGRE",
    desc: "Triple smash · queso pepper jack · jalapeños · salsa habanero",
    price: "$10",
    image: menuBurger2,
  },
  {
    name: "LA TOSTADA",
    desc: "Smash con bacon crujiente · queso gouda ahumado · cebolla crispy",
    price: "$9",
    image: cheeseDetail,
  },
  {
    name: "LA SIMPLE",
    desc: "Single smash · cheddar · pickles · mostaza amarilla",
    price: "$6",
    image: techniqueBurger,
  },
];

const sides = [
  { name: "PORCIÓN DE PAPAS", desc: "Papas fritas crujientes con sal y especias", price: "$5" },
];

const drinks = [
  { name: "LIMONADA", price: "$3" },
  { name: "GASEOSA", price: "$2.50" },
  { name: "AGUA CON GAS", price: "$2" },
  { name: "AGUA SIN GAS", price: "$1.50" },
];

const MenuSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section id="menu" className="relative bg-background py-24 md:py-32">
      <div className="px-6 md:px-12">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-xs tracking-[0.5em] text-primary font-sans font-medium mb-4">CARTA</p>
            <h2 className="font-serif font-black text-[10vw] md:text-[5vw] leading-[0.85] tracking-[-0.04em] text-foreground uppercase">
              MENÚ
            </h2>
          </div>
          <span className="text-muted-foreground text-xs tracking-[0.3em] font-sans hidden md:block">
            PRECIOS EN USD · NO INCLUYEN PAPAS
          </span>
        </div>

        {/* Burgers */}
        <div className="border-t border-border" onMouseMove={handleMouseMove}>
          {burgerItems.map((item, i) => (
            <div
              key={item.name}
              className="group border-b border-border py-6 md:py-8 flex items-center justify-between cursor-pointer hover-glitch"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-baseline gap-4 md:gap-8">
                <span className="text-muted-foreground text-xs font-sans tracking-[0.2em]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif font-black text-2xl md:text-4xl tracking-[-0.02em] text-foreground uppercase group-hover:text-primary transition-colors duration-200">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm font-sans mt-1 tracking-wide">
                    {item.desc}
                  </p>
                </div>
              </div>
              <span className="font-serif font-bold text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">
                {item.price}
              </span>
            </div>
          ))}
        </div>

        {/* Acompañamientos */}
        <div className="mt-16">
          <p className="text-xs tracking-[0.5em] text-primary font-sans font-medium mb-8">ACOMPAÑAMIENTOS</p>
          <div className="border-t border-border">
            {sides.map((item) => (
              <div key={item.name} className="group border-b border-border py-6 flex items-center justify-between">
                <div>
                  <h3 className="font-serif font-black text-xl md:text-2xl tracking-[-0.02em] text-foreground uppercase group-hover:text-primary transition-colors duration-200">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground text-xs font-sans mt-1 tracking-wide">{item.desc}</p>
                </div>
                <span className="font-serif font-bold text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bebidas */}
        <div className="mt-16">
          <p className="text-xs tracking-[0.5em] text-primary font-sans font-medium mb-8">BEBIDAS</p>
          <div className="border-t border-border">
            {drinks.map((item) => (
              <div key={item.name} className="group border-b border-border py-4 flex items-center justify-between">
                <h3 className="font-sans font-medium text-base md:text-lg tracking-wide text-foreground uppercase group-hover:text-primary transition-colors duration-200">
                  {item.name}
                </h3>
                <span className="font-serif font-bold text-base md:text-lg text-foreground group-hover:text-primary transition-colors">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Floating image on hover */}
        {hoveredIndex !== null && (
          <div
            className="fixed pointer-events-none z-40 w-48 h-48 md:w-64 md:h-64 overflow-hidden hidden md:block halftone"
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
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
