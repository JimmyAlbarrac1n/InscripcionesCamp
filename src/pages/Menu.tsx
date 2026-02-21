import FilmGrain from "@/components/FilmGrain";
import Navbar from "@/components/Navbar";
import MenuSection from "@/components/MenuSection";
import Footer from "@/components/Footer";

const Menu = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <FilmGrain />
      <Navbar />
      <div className="pt-24">
        <MenuSection />
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
