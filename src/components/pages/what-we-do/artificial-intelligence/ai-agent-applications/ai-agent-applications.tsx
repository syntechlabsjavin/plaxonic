import AgentCatalogSection from "./sections/agent-catalog/agent-catalog";
import AgentDepartment from "./sections/agent-department/agent-department";
import AgentLayers from "./sections/agent-layers/agent-layers";
import CTA from "./sections/cta/cta";
import DockedAgent from "./sections/docked-agent/docked-agent";
import FAQ from "./sections/faq/faq";
import HeroSection from "./sections/hero-section/hero-section";
import InstallAgent from "./sections/install-agent/install-agent";

const AIAgentApplications = () => {
  return (
    <>
    <HeroSection />
    <AgentLayers />
    <AgentCatalogSection />
    <AgentDepartment />
    <DockedAgent />
    <InstallAgent />
    <FAQ />
    <CTA />
    </>
  );
};

export default AIAgentApplications;