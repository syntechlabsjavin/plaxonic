import CTA from "./sections/cta/cta";
import ERPEngagementModels from "./sections/erp-engagement-models/erp-engagement-models";
import ERPHero from "./sections/erp-hero/erp-hero";
import ERPImpact from "./sections/erp-impact/erp-impact";
import ERPModules from "./sections/erp-modules/erp-modules";
import ERPPlatforms from "./sections/erp-platforms/erp-platforms";
import ERPRollout from "./sections/erp-rollout/erp-rollout";
import FAQ from "./sections/faq/faq";
import ProvenOutcomes from "./sections/proven-out-comes/proven-out-comes";

const ERPSolutions = () => {
  return (
    <>
    <ERPHero />
    <ERPModules />
    <ERPPlatforms />
    <ERPRollout />
    <ERPImpact />
    <ERPEngagementModels />
    <ProvenOutcomes />
    <FAQ />
    <CTA />

    </>
  );
};

export default ERPSolutions;