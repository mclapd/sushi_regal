import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import MenuSection from "./components/MenuSection";
import Navbar from "./components/Navbar";
import SocialSection from "./components/SocialSection";
import SushiRegalSection from "./components/SushiRegalSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <SushiRegalSection />
        <AboutSection />
        <MenuSection />
        <SocialSection />
      </div>
      <Footer />
    </main>
  );
}
