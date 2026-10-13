import CaseStudies from "./sections/case-studies/case-studies";
import CTA from "./sections/cta/cta";
import FAQ from "./sections/faq/faq";
import MicroServicesGrid from "./sections/micro-services-grid/micro-services-grid";
import MicroServicesHero from "./sections/micro-services-hero/micro-services-hero";
import ProcessTimeline from "./sections/process-time-line/process-time-line";
import ProtocolsTabs from "./sections/protocols-tabs/protocols-tabs";
import WhyPlaxonic from "./sections/why-plaxonic/why-plaxonic";

const MicroServicesApiDevelopment = () => {
  return (
    <>
    <MicroServicesHero />
    <MicroServicesGrid />
    <ProtocolsTabs />
    <ProcessTimeline />
    <WhyPlaxonic />
    <CaseStudies />
    <FAQ />
    <CTA />
    </>
  );
};

export default MicroServicesApiDevelopment;
