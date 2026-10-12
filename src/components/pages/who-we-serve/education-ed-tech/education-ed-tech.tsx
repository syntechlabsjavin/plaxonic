import ContactCta from "./sections/contact-cta/contact-cta";
import EducationEdTechHero from "./sections/education-ed-tech-hero/education-ed-tech-hero";
import InsightsSection from "./sections/insights-section/insights-section";
import WhatWeBuild from "./sections/what-we-build/what-we-build";
import WhyItMatters from "./sections/why-it-matters/why-it-matters";


const EducationEdTech = () => {
  return (
    <>
      <EducationEdTechHero />
      <WhyItMatters />
      <WhatWeBuild />
      <InsightsSection />
      <ContactCta />
    </>
  );
};

export default EducationEdTech;
