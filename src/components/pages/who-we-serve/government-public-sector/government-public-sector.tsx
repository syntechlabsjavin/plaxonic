import ContactCta from "./sections/contact-cta/contact-cta";
import GovernmentPublicSectorHero from "./sections/government-public-sector-hero/government-public-sector-hero";
import InsightsSection from "./sections/insights-section/insights-section";
import WhatWeBuild from "./sections/what-we-build/what-we-build";
import WhyItMatters from "./sections/why-it-matters/why-it-matters";


const GovernmentPublicSector = () => {
  return (
    <>
      <GovernmentPublicSectorHero />
      <WhyItMatters />
      <WhatWeBuild />
      <InsightsSection />
      <ContactCta />
    </>
  );
};

export default GovernmentPublicSector;
