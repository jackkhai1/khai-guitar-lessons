import Hero from "@/components/Hero";
import Languages from "@/components/Languages";
import GearGuide from "@/components/GearGuide";
import WhyLearn from "@/components/WhyLearn";
import About from "@/components/About";
import FAQMobile from "@/components/FAQMobile";
import WhoITeach from "@/components/WhoITeach";
import WhyGuitar from "@/components/WhyGuitar";
import FormatLocation from "@/components/FormatLocation";
import GigRates from "@/components/GigRates";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Languages />
      <WhyLearn />
      <FAQMobile />
      <div className="hidden sm:block">
        <About />
      </div>
      <WhoITeach />
      <div className="hidden sm:block">
        <WhyGuitar />
      </div>
      <div className="hidden sm:block">
        <FormatLocation />
      </div>
      <GigRates />
      <div className="hidden sm:block">
        <GearGuide />
      </div>
      <FinalCTA />
    </main>
  );
}
