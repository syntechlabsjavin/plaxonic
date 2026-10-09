import AiAssistant from "./sections/ai-assistant/ai-assistant";
import Capabilities from "./sections/capabilities/capabilities";
import CaseStudies from "./sections/case-studies/case-studies";
import HeroSection from "./sections/hero-section/hero-section";
import InsightsCarousel from "./sections/insights-carousel/insights-carousel";
import InsightsCtaSection from "./sections/insights-cta/insights-cta";
import InsightsSection from "./sections/insights-section/insights-section";
import JoinTeam from "./sections/join-team/join-team";
import PartnerLogos from "./sections/partner-logos/partner-logos";
import Products from "./sections/products/products";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <InsightsCarousel />
      <PartnerLogos />
      <Capabilities />
      <Products />
      {/* <StatsSection /> */}
      <CaseStudies />
      <div className="h-24 lg:h-32"></div>
      <JoinTeam />
      <AiAssistant />
      <InsightsSection />
      <InsightsCtaSection />
    </>
  );
};

export default HomePage;
