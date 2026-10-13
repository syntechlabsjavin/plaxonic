import ContinuousTesting from "./sections/continuous-testing/continuous-testing";
import CTA from "./sections/cta/cta";
import FAQ from "./sections/faq/faq";
import HeroSection from "./sections/hero-section/hero-section";
import QALifecycle from "./sections/qa-lifecycle/qa-lifecycle";
import QATools from "./sections/qa-tools/qa-tools";
import QualityEngineeringCost from "./sections/quality-engineering-cost/quality-engineering-cost";
import QualityMetrics from "./sections/quality-metrics/quality-metrics";
import TestPyramid from "./sections/test-pyramid/test-pyramid";
import WhatWeTest from "./sections/what-we-test/what-we-test";
import WhyPlaxonic from "./sections/why-plaxonic/why-plaxonic";

const QualityEngineering = () => {
  return (
    <>
    <HeroSection />
    <QualityEngineeringCost />
    <WhatWeTest />
    <TestPyramid />
    <ContinuousTesting />
    <QALifecycle />
    <QualityMetrics />
    <QATools />
    <WhyPlaxonic />
    <FAQ />
    <CTA />
    </>
  );
};

export default QualityEngineering;