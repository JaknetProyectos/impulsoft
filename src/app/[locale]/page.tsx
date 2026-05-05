import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import TeamNetwork from "@/components/TeamNetwork";
import Pillars from "@/components/Pillars";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import OfferModal from "@/components/OfferModal";

export default function Home() {
  return (
    <main className="min-h-screen">

      <OfferModal/>
      
      <Header />
      <Hero />
      <Services />
      <About />
      <TeamNetwork />
      <Pillars />
      <Pricing />
      <Contact />
      <CTABanner />
      <Footer />
    </main>
  );
}
