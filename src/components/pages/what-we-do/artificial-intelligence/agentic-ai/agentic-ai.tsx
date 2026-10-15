import AgentRoster from "./sections/agent-roster/agent-roster";
import AgentThinking from "./sections/agent-thinking/agent-thinking";
import AgentTools from "./sections/agent-tools/agent-tools";
import AutonomyControls from "./sections/autonomy-controls/autonomy-controls";
import AutonomyShift from "./sections/autonomy-shift/autonomy-shift";
import CTA from "./sections/cta/cta";
import FAQ from "./sections/faq/faq";
import HeroSection from "./sections/hero-section/hero-section";
import OrchestrationSection from "./sections/orchestration-section/orchestration-section";

const AgenticAI = () => {
  return (
    <>
    <HeroSection />
    <AutonomyShift />
    <AgentThinking />
    <OrchestrationSection />
    <AgentTools />
    <AgentRoster />
    <AutonomyControls />
    <FAQ />
    <CTA />
    </>
  );
};

export default AgenticAI;