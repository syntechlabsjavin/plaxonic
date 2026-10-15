import HeroSection from "./sections/hero-section/hero-section";
import "./generative-ai.css";
import ModalitiesSection from "./sections/modalities-section/modalities-section";
import GroundedByDesign from "./sections/grounded-by-design/grounded-by-design";
import AgentsSection from "./sections/agents-section/agents-section";
import RealPromptsSection from "./sections/real-prompt-section/real-prompt-section";
import ResponsibleGenAISection from "./sections/responsible-gen-ai-section/responsible-gen-ai-section";
import FAQ from "./sections/faq/faq";
import CTA from "./sections/cta/cta";

const GenerativeAi = () => {
  return (
    <>
    <HeroSection />
    <ModalitiesSection />
    <GroundedByDesign />
    <AgentsSection />
    <RealPromptsSection />
    <ResponsibleGenAISection />
    <FAQ />
    <CTA />
    </>
  );
};

export default GenerativeAi;