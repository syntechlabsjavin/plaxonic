import CTA from "./sections/cta/cta";
import DeliverablesSection from "./sections/deliverables-section/deliverables-section";
import FAQ from "./sections/faq/faq";
import FrameworksSection from "./sections/frameworks-section/frameworks-section";
import GovernanceSection from "./sections/governance-section/governance-section";
import HeroSection from "./sections/hero-section/hero-section";
import QuoteSection from "./sections/quote-section/quote-section";
import StakesSection from "./sections/stakes-section/stakes-section";

const AIEthicsGovernance = () => {
  return (
    <>
    <HeroSection />
    <StakesSection />
    <GovernanceSection />
    <FrameworksSection />
    <DeliverablesSection />
    <QuoteSection />
    <FAQ />
    <CTA />
    </>
  );
};

export default AIEthicsGovernance;