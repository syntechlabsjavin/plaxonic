import Capabilities from "./sections/capabilities/capabilities";
import CTA from "./sections/cta/cta";
import DataFirst from "./sections/data-first/data-first";
import FAQ from "./sections/faq/faq";
import HeroSection from "./sections/hero-section/hero-section";
import IdeaSection from "./sections/idea-section/idea-section";
import Industries from "./sections/industries/industries";
import Ownership from "./sections/ownership/ownership";
import TechnologyStack from "./sections/technology-stack/technology-stack";

const MachineLearning = () => {
  return (
    <>
    <HeroSection />
    <IdeaSection />
    <Capabilities />
    <DataFirst />
    <Industries />
    <Ownership />
    <TechnologyStack />
    <FAQ />
    <CTA />
    </>
  );
};

export default MachineLearning;