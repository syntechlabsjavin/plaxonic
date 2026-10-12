import ContactCta from "./sections/contact-cta/contact-cta";
import EntertainmentHero from "./sections/entertainment-hero/entertainment-hero";
import InsightsSection from "./sections/insights-section/insights-section";
import WhatWeBuild from "./sections/what-we-build/what-we-build";
import WhyItMatters from "./sections/why-it-matters/why-it-matters";


const Entertainment = () => {
  return (
    <>
      <EntertainmentHero />
      <WhyItMatters />
      <WhatWeBuild />
      <InsightsSection />
      <ContactCta />
    </>
  );
};

export default Entertainment;
