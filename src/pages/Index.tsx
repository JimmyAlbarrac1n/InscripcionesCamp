import FilmGrain from "@/components/FilmGrain";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Technique from "@/components/Technique";
import MenuSection from "@/components/MenuSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <FilmGrain />
      <Navbar />
      <Hero />
      <Marquee text="SMASHED TO PERFECTION" />
      <Technique />
      <Marquee text="CARNE · FUEGO · QUESO · RITUAL" reverse dark />
      <MenuSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
