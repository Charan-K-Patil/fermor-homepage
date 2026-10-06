import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import CalculatorDemo from "@/components/CalculatorDemo";
import InvestmentDashboard from "@/components/InvestmentDashboard";
import WealthForecast from "@/components/WealthForecast";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <FeatureGrid />
        <CalculatorDemo />
        <InvestmentDashboard />
        <WealthForecast />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
