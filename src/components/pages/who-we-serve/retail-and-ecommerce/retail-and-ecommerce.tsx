import ContactCta from "./sections/contact-cta/contact-cta";
import InsightsSection from "./sections/insights-section/insights-section";
import RetailAndEcommerceHero from "./sections/retail-and-ecommerce-hero/retail-and-ecommerce-hero";
import WhatWeBuild from "./sections/what-we-build/what-we-build";
import WhyItMatters from "./sections/why-it-matters/why-it-matters";


const RetailAndEcommerce = () => {
  return (
    <>
      <RetailAndEcommerceHero />
      <WhyItMatters />
      <WhatWeBuild />
      <InsightsSection />
      <ContactCta />
    </>
  );
};

export default RetailAndEcommerce;
