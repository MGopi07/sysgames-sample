import HeroSlider from "@/components/home/HeroSlider";
import WhyChooseIntro from "@/components/home/WhyChooseIntro";
import ServicesSection from "@/components/home/ServicesSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import FactsFigures from "@/components/home/FactsFigures";
import GlobalSolutions from "@/components/home/GlobalSolutions";
import FAQSection from "@/components/home/FAQSection";
import ClientReviews from "@/components/home/ClientReviews";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      {/* SECTION 1 - HERO SLIDER */}
      <HeroSlider />
      
      {/* SECTION 2 - WHY CHOOSE AN iGAMING SOFTWARE DEVELOPMENT COMPANY */}
      <WhyChooseIntro />
      
      {/* SECTION 3 - B2B iGAMING SOFTWARE DEVELOPMENT SERVICES */}
      <ServicesSection />
      
      {/* SECTION 4 - WHY CHOOSE AN iGAMING SOFTWARE DEVELOPMENT COMPANY (FEATURES) */}
      <BenefitsSection />
      
      {/* SECTION 5 - FACTS & FIGURES */}
      <FactsFigures />
      
      {/* SECTION 6 - GLOBAL iGAMING SOLUTIONS */}
      <GlobalSolutions />
      
      {/* SECTION 7 - FAQ */}
      <FAQSection />
      
      {/* SECTION 8 - CLIENT REVIEWS */}
      <ClientReviews />
      
      {/* FINAL CTA SECTION */}
      <FinalCTA />
    </>
  );
}
