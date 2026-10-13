import AdvisoryImpact from "./sections/advisory-impact/advisory-impact";
import CTA from "./sections/cta/cta";
import FAQ from "./sections/faq/faq";
import HeroSection from "./sections/hero-section/hero-section";
import HowWeEngage from "./sections/how-we-engage/how-we-engage";
import HowWePartner from "./sections/how-we-partner/how-we-partner";
import WhereWeAdvise from "./sections/where-we-advise/where-we-advise";
import WhyAdvisoryFirst from "./sections/why-advisory-first/why-advisory-first";
import WhyPlaxonic from "./sections/why-plaxonic/why-plaxonic";

const Consulting = () => {
  return (
    <>
    <HeroSection />
    <WhyAdvisoryFirst />
    <WhereWeAdvise />
    <HowWePartner />
    <HowWeEngage />
    <AdvisoryImpact />
    <WhyPlaxonic />
    <FAQ />
    <CTA />
    </>
  );
};

export default Consulting;