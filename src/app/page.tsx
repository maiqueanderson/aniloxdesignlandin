import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PaidTrafficSection from "@/components/sections/PaidTrafficSection";
import StrategySection from "@/components/sections/StrategySection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <PaidTrafficSection />
        <StrategySection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
