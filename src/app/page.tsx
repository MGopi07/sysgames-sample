import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import HeroSlider from "@/components/home/HeroSlider";

const WhyChooseIntro = dynamic(() => import("@/components/home/WhyChooseIntro"));
const ServicesSection = dynamic(() => import("@/components/home/ServicesSection"));
const BenefitsSection = dynamic(() => import("@/components/home/BenefitsSection"));
const FactsFigures = dynamic(() => import("@/components/home/FactsFigures"));
const GlobalSolutions = dynamic(() => import("@/components/home/GlobalSolutions"));
const FAQSection = dynamic(() => import("@/components/home/FAQSection"));
const ClientReviews = dynamic(() => import("@/components/home/ClientReviews"));
const FinalCTA = dynamic(() => import("@/components/home/FinalCTA"));

export default function Home() {
  return (
    <>
      {/* SECTION 1 - HERO SLIDER */}
      <HeroSlider />
      
      <Suspense fallback={null}>
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
      </Suspense>
    </>
  );
}
