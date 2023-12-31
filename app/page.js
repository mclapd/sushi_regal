import AboutSection from "./components/AboutSection";
import AdvertiseSection from "./components/Advertise";
import Footer from "./components/Footer";
import MenuSection from "./components/MenuSection";
import Navbar from "./components/Navbar";
import SocialSection from "./components/SocialSection";
import SushiRegalSection from "./components/SushiRegalSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <SushiRegalSection />
        <AdvertiseSection />
        <AboutSection />
        <MenuSection />
        <SocialSection />
      </div>
      <Footer />
    </main>
  );
}
