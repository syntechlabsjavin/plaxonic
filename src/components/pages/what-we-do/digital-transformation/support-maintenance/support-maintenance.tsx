import CTA from "./sections/cta/cta";
import FAQ from "./sections/faq/faq";
import HeroSection from "./sections/hero-section/hero-section";
import SupportCoverage from "./sections/support-coverage/support-coverage";
import SupportImpact from "./sections/support-impact/support-impact";
import SupportPlans from "./sections/support-plans/support-plans";
import SupportProcess from "./sections/support-process/support-process";

const SupportMaintenance = () => {
  return (
    <>
    <HeroSection />
    <SupportCoverage />
    <SupportPlans />
    <SupportProcess />
    <SupportImpact />
    <FAQ />
    <CTA />
    </>
  );
};

export default SupportMaintenance;