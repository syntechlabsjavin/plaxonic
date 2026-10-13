import CTA from "./sections/cta/cta";
import FAQ from "./sections/faq/faq";
import HeroSection from "./sections/hero-section/hero-sectoin";
import IncrementalMigration from "./sections/incremental-migration/incremental-migration";
import LegacyRiskSection from "./sections/legacy-risk-section/legacy-risk-section";
import LegacySignsSection from "./sections/legacy-signs-section/legacy-signs-section";
import ModernizationMetrics from "./sections/modernization-metrics/modernization-metrics";
import ModernizationStrategies from "./sections/modernization-strategies/modernization-strategies";
import TargetStack from "./sections/target-stack/target-stack";
import WhatWeModernize from "./sections/what-we-modernize/what-we-modernize";
import WhyPlaxonic from "./sections/why-plaxonic/why-plaxonic";

const LegacyModerniztion = () => {
  return (
    <>
    <HeroSection />
    <LegacyRiskSection />
    <LegacySignsSection />
    <ModernizationStrategies />
    <WhatWeModernize />
    <IncrementalMigration />
    <ModernizationMetrics />
    <TargetStack />
    <WhyPlaxonic />
    <FAQ />
    <CTA />
    </>
  );
};

export default LegacyModerniztion;