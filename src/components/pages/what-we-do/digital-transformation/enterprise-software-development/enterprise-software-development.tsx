import DeliveryModel from "./sections/delivery-model/delivery-model";
import EnterprisePillars from "./sections/enterprise-pillars/enterprise-pillars";
import EnterpriseSoftwareHero from "./sections/enterprise-software-hero/enterprise-software-hero";
import EnterpriseImpact from "./sections/enterprise-impact/enterprise-impact";
import WhatWeBuild from "./sections/what-we-build/what-we-build";
import CTA from "./sections/cta/cta";
import TechnologyStandards from "./sections/technology-standards/technology-standards";
import EngagementModels from "./sections/engagement-models/engagement-models";
import FAQ from "./sections/faq/faq";

const EnterpriseSoftwareDevelopment = () => {
  return (
    <>
    <EnterpriseSoftwareHero />
    <WhatWeBuild />
    <EnterprisePillars />
    <DeliveryModel />
    <EnterpriseImpact />
    <TechnologyStandards />
    <EngagementModels />
    <FAQ />
    <CTA />
    </>
  );
};

export default EnterpriseSoftwareDevelopment;