import ApproachSection from "./sections/approach-section/approach-section";
import CTA from "./sections/cta/cta";
import EngageSection from "./sections/engage-section/engage-section";
import FAQ from "./sections/faq/faq";
import HeroSection from "./sections/hero-section/hero-section";
import PrinciplesSection from "./sections/principles-section/principles-section";
import ProblemSection from "./sections/problem-section/problem-section";
import StackSection from "./sections/stack-section/stack-section";
import UseCasesSection from "./sections/use-cases-section/use-cases-section";
import WhatWeDoSection from "./sections/what-we-do-section/what-we-do-section";

const AiConsultingServices = () => {
  return (
    <>
    <HeroSection />
    <ProblemSection />
    <WhatWeDoSection />
    <ApproachSection />
    <UseCasesSection />
    <StackSection />
    <PrinciplesSection />
    <EngageSection />
    <FAQ />
    <CTA />
    </>
  );
};

export default AiConsultingServices;