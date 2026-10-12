import ContactCta from "./sections/contact-cta/contact-cta";
import InsightsSection from "./sections/insights-section/insights-section";
import ManufacturingHero from "./sections/manufacturing-hero/Manufacturing-hero";
import WhatWeBuild from "./sections/what-we-build/what-we-build";
import WhyItMatters from "./sections/why-it-matters/why-it-matters";


const Manufacturing = () => {
  return (
    <>
      <ManufacturingHero />
      <WhyItMatters />
      <WhatWeBuild />
      <InsightsSection />
      <ContactCta />
    </>
  );
};

export default Manufacturing;
