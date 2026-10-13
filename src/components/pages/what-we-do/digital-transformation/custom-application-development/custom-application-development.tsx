import CTA from "./sections/cta/cta";
import CustomApplicationHero from "./sections/custom-application-hero/custom-application-hero";
import SoftwareSolutions from "./sections/software-solutions/software-solutions";
import WhyCustomSoftware from "./sections/why-custom-software/why-custom-software";
import TechnologyStack from "./sections/technology-stack/technology-stack";
import HowWeBuild from "./sections/how-we-build/how-we-build";
import ProvenOutcomes from "./sections/proven-outcomes/proven-outcomes";

const CustomApplicationDevelopment = () => {
  return (
    <>
    <CustomApplicationHero />
    <SoftwareSolutions />
    <WhyCustomSoftware />
    <TechnologyStack />
    <HowWeBuild />
    <ProvenOutcomes />
    <CTA />
    </>
  );
};

export default CustomApplicationDevelopment;
