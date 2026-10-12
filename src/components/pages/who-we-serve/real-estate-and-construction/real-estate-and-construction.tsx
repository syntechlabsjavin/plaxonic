import ContactCta from "./sections/contact-cta/contact-cta";
import InsightsSection from "./sections/insights-section/insights-section";
import RealEstateAndConstructionHero from "./sections/real-estate-and-construction-hero/real-estate-and-construction-hero";
import WhatWeBuild from "./sections/what-we-build/what-we-build";
import WhyItMatters from "./sections/why-it-matters/why-it-matters";


const RealEstateAndConstruction = () => {
  return (
    <>
      <RealEstateAndConstructionHero />
      <WhyItMatters />
      <WhatWeBuild />
      <InsightsSection />
      <ContactCta />
    </>
  );
};

export default RealEstateAndConstruction;
