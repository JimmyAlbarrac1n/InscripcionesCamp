interface MarqueeProps {
  text: string;
  reverse?: boolean;
}

const Marquee = ({ text, reverse = false }: MarqueeProps) => {
  const repeated = Array(8).fill(text).join(" — ");

  return (
    <div className="overflow-hidden py-4 border-y border-border bg-background">
      <div
        className="animate-marquee whitespace-nowrap flex"
        style={{ animationDirection: reverse ? "reverse" : "normal" }}
      >
        <span className="font-serif font-black text-[5vw] md:text-[3vw] tracking-[-0.02em] text-foreground uppercase mr-8">
          {repeated}
        </span>
        <span className="font-serif font-black text-[5vw] md:text-[3vw] tracking-[-0.02em] text-foreground uppercase mr-8">
          {repeated}
        </span>
      </div>
    </div>
  );
};

export default Marquee;
