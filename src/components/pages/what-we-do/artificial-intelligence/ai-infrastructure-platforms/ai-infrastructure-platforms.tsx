import CTA from "./sections/cta/cta";
import FAQ from "./sections/faq/faq";
import HardPartSection from "./sections/hard-part-section/hard-part-section";
import HeroSection from "./sections/hero-section/hero-section";
import PlatformSection from "./sections/platform-section/platform-section";
import RunsAnywhere from "./sections/runs-anywhere/runs-anywhere";
import ScaleSection from "./sections/scale-section/scale-section";
import ServicesSection from "./sections/services-section/services-section";

const AIInfrastructurePlatforms = () => {
  return (
    <>
    <HeroSection />
    <HardPartSection />
    <PlatformSection />
    <ServicesSection />
    <ScaleSection />
    <RunsAnywhere />
    <FAQ />
    <CTA />
    </>
  );
};

export default AIInfrastructurePlatforms;