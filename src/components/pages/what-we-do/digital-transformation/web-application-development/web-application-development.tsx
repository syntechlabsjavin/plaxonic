import "./web-application-development.css"
import AIFirstEngineering from "./sections/ai-first-engineering/ai-first-engineering";
import CustomBuildCTA from "./sections/custom-build-cta/custom-build-cta";
import WebApplicationHero from "./sections/web-application-hero/web-application-hero";
import WebApplicationStandard from "./sections/web-application-standard/web-application-standard";
import WebApplicationTypes from "./sections/web-applications-types/web-applications-types";
import TechnologyStack from "./sections/technology-stack/technology-stack";
import OurProcess from "./sections/our-process/our-process";
import EngagementModels from "./sections/engagement-models/engagement-models";
import WhyChooseUs from "./sections/why-choose-us/why-choose-us";
import RelatedCaseStudies from "./sections/relate-case-studies/relate-case-studies";
import FAQ from "./sections/faq/faq";
import WebApplicationCTA from "./sections/web-application-cta/web-application-cta";

const WebApplicationDevelopment = () => {
  return (
    <>
      <WebApplicationHero />
      <WebApplicationStandard />
      <WebApplicationTypes />
      <CustomBuildCTA />
      <AIFirstEngineering />
      <TechnologyStack />
      <OurProcess />
      <EngagementModels />
      <WhyChooseUs />
      <RelatedCaseStudies />
      <FAQ />
      <WebApplicationCTA />
    </>
  );
};

export default WebApplicationDevelopment;
