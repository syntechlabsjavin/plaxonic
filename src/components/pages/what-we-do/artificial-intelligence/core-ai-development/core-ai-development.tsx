import AIModelDisciplines from "./sections/ai-model-disciplines/ai-model-disciplines";
import BuiltEngineeringStack from "./sections/built-engineering-stack/built-engineering-stack";
import CTA from "./sections/cta/cta";
import CustomModelComparison from "./sections/custom-model-comparison/custom-model-comparison";
import FAQ from "./sections/faq/faq";
import HeroSection from "./sections/hero-section/hero-section";
import ModelBuildProcess from "./sections/model-build-process/model-build-process";
import OwnershipSection from "./sections/ownership-section/ownership-section";

const CoreAiDevelopment = () => {
  return (
    <>
    <HeroSection />
    <CustomModelComparison />
    <AIModelDisciplines />
    <ModelBuildProcess />
    <BuiltEngineeringStack />
    <OwnershipSection />
    <FAQ />
    <CTA />
    </>
  );
};

export default CoreAiDevelopment;