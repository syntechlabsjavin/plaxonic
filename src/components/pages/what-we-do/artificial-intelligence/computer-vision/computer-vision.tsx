import Capabilities from "./sections/capabilities/capabilities";
import CTA from "./sections/cta/cta";
import EdgeSection from "./sections/edge-section/edge-section";
import FAQ from "./sections/faq/faq";
import HeroSection from "./sections/hero-section/hero-section";
import Pipeline from "./sections/pipeline/pipeline";
import TechStack from "./sections/tech-stack/tech-stack";
import UseCases from "./sections/use-case/use-case";

const ComputerVision = () => {
  return (
    <>
    <HeroSection />
    <Capabilities />
    <Pipeline />
    <UseCases />
    <EdgeSection />
    <TechStack />
    <FAQ />
    <CTA />
    </>
  );
};

export default ComputerVision;