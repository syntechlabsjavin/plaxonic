import HeroSection from "./sections/hero-section/hero-section";
import "./generative-ai.css";
import ModalitiesSection from "./sections/modalities-section/modalities-section";
import GroundedByDesign from "./sections/grounded-by-design/grounded-by-design";
import AgentsSection from "./sections/agents-section/agents-section";

const GenerativeAi = () => {
  return (
    <>
    <HeroSection />
    <ModalitiesSection />
    <GroundedByDesign />
    <AgentsSection />
    </>
  );
};

export default GenerativeAi;