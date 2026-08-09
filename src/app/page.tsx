import { LanguageProvider } from "@/lib/language";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Languages from "@/components/Languages";
import GearGuide from "@/components/GearGuide";
import WhyLearn from "@/components/WhyLearn";
import About from "@/components/About";
import WhoITeach from "@/components/WhoITeach";
import WhyGuitar from "@/components/WhyGuitar";
import FormatLocation from "@/components/FormatLocation";
import GigRates from "@/components/GigRates";
import InstagramCTA from "@/components/InstagramCTA";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <Nav />
      <main>
        <Hero />
        <Languages />
        <WhyLearn />
        <About />
        <WhoITeach />
        <WhyGuitar />
        <FormatLocation />
        <GigRates />
        <GearGuide />
        <FinalCTA />
        <InstagramCTA />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
