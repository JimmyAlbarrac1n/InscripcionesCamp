
const burgerItems = [
  {
    name: "LA SIMPLE",
    desc: "Single smash · cheddar · pickles · mostaza amarilla",
    price: "$6",
  },
  {
    name: "LA CLÁSICA",
    desc: "Doble smash · cheddar americano · cebolla caramelizada · salsa secreta",
    price: "$8",
  },
  {
    name: "LA TOSTADA",
    desc: "Smash con bacon crujiente · queso gouda ahumado · cebolla crispy",
    price: "$9",
  },
  {
    name: "LA SANGRE",
    desc: "Triple smash · queso pepper jack · jalapeños · salsa habanero",
    price: "$10",
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

  return (
    <section id="menu" className="relative py-16 md:py-24 overflow-hidden">
      {/* Dotted texture background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle, hsl(0 0% 0%) 1px, transparent 1px)",
        backgroundSize: "16px 16px"
      }} />

      {/* Corner decoration */}
      <div className="absolute top-8 right-8 w-24 h-24 border border-primary/20 pointer-events-none hidden md:block" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border border-primary/20 rounded-full pointer-events-none hidden md:block" />

      <div className="px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="inline-block border border-primary/30 px-4 py-1 mb-4">
              <p className="text-[10px] tracking-[0.5em] text-foreground/60 font-sans font-medium">CARTA</p>
            </div>
            <h2 className="font-serif font-black text-[12vw] md:text-[6vw] leading-[0.85] tracking-[-0.04em] text-foreground uppercase">
              MENÚ
            </h2>
          </div>
          <div className="hidden md:flex flex-col items-end gap-2">
            <span className="text-foreground/40 text-xs tracking-[0.3em] font-sans">PRECIOS EN USD</span>
            <span className="text-foreground/30 text-[10px] tracking-[0.2em] font-sans">HAMBURGUESAS NO INCLUYEN PAPAS</span>
            <div className="w-12 h-[2px] bg-primary/30" />
          </div>
        </div>

        {/* Section: Hamburguesas */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-3 h-3 bg-primary" />
            <h3 className="text-xs tracking-[0.5em] text-foreground font-sans font-semibold">HAMBURGUESAS</h3>
            <div className="flex-1 h-px bg-primary/20" />
          </div>

          <div className="border-t border-primary/20">
            {burgerItems.map((item, i) => (
              <div
                key={item.name}
                className="group border-b border-primary/20 py-6 md:py-8 flex items-center justify-between"
              >
                <div className="flex items-baseline gap-4 md:gap-8">
                  <span className="text-foreground/20 text-xs font-sans tracking-[0.2em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif font-black text-2xl md:text-4xl tracking-[-0.02em] text-foreground uppercase group-hover:text-primary transition-colors duration-200">
                      {item.name}
                    </h3>
                    <p className="text-foreground/50 text-xs md:text-sm font-sans mt-1 tracking-wide">
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
        </div>

        {/* Section: Acompañamientos */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-3 h-3 border border-primary" />
            <h3 className="text-xs tracking-[0.5em] text-foreground font-sans font-semibold">ACOMPAÑAMIENTOS</h3>
            <div className="flex-1 h-px bg-primary/20" />
          </div>

          <div className="border-t border-primary/20">
            {sides.map((item) => (
              <div key={item.name} className="group border-b border-primary/20 py-6 flex items-center justify-between">
                <div>
                  <h3 className="font-serif font-black text-xl md:text-2xl tracking-[-0.02em] text-foreground uppercase group-hover:text-primary transition-colors duration-200">
                    {item.name}
                  </h3>
                  <p className="text-foreground/50 text-xs font-sans mt-1 tracking-wide">{item.desc}</p>
                </div>
                <span className="font-serif font-bold text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Bebidas */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-3 h-3 rounded-full border border-primary" />
            <h3 className="text-xs tracking-[0.5em] text-foreground font-sans font-semibold">BEBIDAS</h3>
            <div className="flex-1 h-px bg-primary/20" />
          </div>

          <div className="border-t border-primary/20">
            {drinks.map((item) => (
              <div key={item.name} className="group border-b border-primary/20 py-4 flex items-center justify-between">
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

      </div>
    </section>
  );
};

export default MenuSection;
