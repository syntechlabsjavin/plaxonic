import AgricultureHero from "./sections/agriculture-hero/education-ed-tech-hero";
import ContactCta from "./sections/contact-cta/contact-cta";
import InsightsSection from "./sections/insights-section/insights-section";
import WhatWeBuild from "./sections/what-we-build/what-we-build";
import WhyItMatters from "./sections/why-it-matters/why-it-matters";


const Agriculture = () => {
  return (
    <>
      <AgricultureHero />
      <WhyItMatters />
      <WhatWeBuild />
      <InsightsSection />
      <ContactCta />
    </>
  );
};

export default Agriculture;
