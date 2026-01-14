import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import FeatureShowcase from "@/components/FeatureShowcase";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import EquipmentShowcase from "@/components/EquipmentShowcase";
import FinalCTA from "@/components/FinalCTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Toast from "@/components/Toast";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <Benefits />
        <FeatureShowcase />
        <Pricing />
        <Testimonials />
        <EquipmentShowcase />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
      <Toast />
    </>
  );
}
