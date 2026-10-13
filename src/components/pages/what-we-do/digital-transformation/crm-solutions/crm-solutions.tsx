import CRMCapabilities from "./sections/crm-capabilities/crm-capabilities";
import CRMHero from "./sections/crm-hero/crm-hero";
import CRMImpact from "./sections/crm-impact/crm-impact";
import CRMPlatforms from "./sections/crm-platforms/crm-platforms";
import CTA from "./sections/cta/cta";
import CustomCRMImplementation from "./sections/custom-crm-implementation/custom-crm-implementation";
import FAQ from "./sections/faq/faq";
import ProvenOutcomes from "./sections/proven-out-comes/proven-out-comes";

const CRMSolutions = () => {
  return (
    <>
    < CRMHero />
    < CRMCapabilities />
    < CRMPlatforms />
    < CustomCRMImplementation />
    < CRMImpact/>
    < ProvenOutcomes/>
    < FAQ />
    < CTA />
    </>
  );
};

export default CRMSolutions;
