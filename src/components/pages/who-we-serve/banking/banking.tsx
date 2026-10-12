import BankingHero from "./sections/banking-hero/banking-hero";
import ContactCta from "./sections/contact-cta/contact-cta";
import InsightsSection from "./sections/insights-section/insights-section";
import WhatWeBuild from "./sections/what-we-build/what-we-build";
import WhyItMatters from "./sections/why-it-matters/why-it-matters";


const Banking = () => {
  return (
    <>
      <BankingHero />
      <WhyItMatters />
      <WhatWeBuild />
      <InsightsSection />
      <ContactCta />
    </>
  );
};

export default Banking;
