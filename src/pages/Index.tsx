import FilmGrain from "@/components/FilmGrain";
import Hero from "@/components/Hero";
import Campamentos from "@/components/Campamentos";
import Ubicacion from "@/components/Ubicacion";
import Marquee from "@/components/Marquee";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <FilmGrain />
      <Hero />
      <Campamentos />
      <Ubicacion />
      <Marquee text="DESDE EL JOVEN · Y PARA EL JOVEN" />
      <SiteFooter />
    </div>
  );
};

export default Index;
