import FilmGrain from "@/components/FilmGrain";
import Navbar from "@/components/Navbar";
import MenuSection from "@/components/MenuSection";
import Footer from "@/components/Footer";

const Menu = () => {
  return (
    <div className="bg-foreground text-background min-h-screen">
      <FilmGrain />
      <Navbar variant="dark" />
      <div className="pt-24">
        <MenuSection />
      </div>
      <Footer variant="dark" />
    </div>
  );
};

export default Menu;
