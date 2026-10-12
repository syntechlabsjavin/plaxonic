import AutomotiveAndMobilityHero from "./sections/automotive-and-mobility-hero/automotive-and-mobility-hero";
import ContactCta from "./sections/contact-cta/contact-cta";
import InsightsSection from "./sections/insights-section/insights-section";
import WhatWeBuild from "./sections/what-we-build/what-we-build";
import WhyItMatters from "./sections/why-it-matters/why-it-matters";


const AutomotiveAndMobility = () => {
  return (
    <>
      <AutomotiveAndMobilityHero />
      <WhyItMatters />
      <WhatWeBuild />
      <InsightsSection />
      <ContactCta />
    </>
  );
};

export default AutomotiveAndMobility;
