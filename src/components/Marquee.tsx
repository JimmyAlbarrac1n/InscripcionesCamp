interface MarqueeProps {
  text: string;
  reverse?: boolean;
  dark?: boolean;
}

const Marquee = ({ text, reverse = false, dark = false }: MarqueeProps) => {
  const repeated = Array(8).fill(text).join(" ★ ");

  return (
    <div className={`overflow-hidden py-5 border-y ${dark ? "bg-primary border-primary/30" : "bg-foreground border-foreground/20"}`}>
      <div
        className="animate-marquee whitespace-nowrap flex"
        style={{ animationDirection: reverse ? "reverse" : "normal" }}
      >
        <span className={`font-serif font-black text-[5vw] md:text-[3vw] tracking-[-0.02em] uppercase mr-8 ${dark ? "text-foreground" : "text-background"}`}>
          {repeated}
        </span>
        <span className={`font-serif font-black text-[5vw] md:text-[3vw] tracking-[-0.02em] uppercase mr-8 ${dark ? "text-foreground" : "text-background"}`}>
          {repeated}
        </span>
      </div>
    </div>
  );
};

export default Marquee;
