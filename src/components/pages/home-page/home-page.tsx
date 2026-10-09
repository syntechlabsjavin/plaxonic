import AiAssistant from "./sections/ai-assistant/ai-assistant";
import Capabilities from "./sections/capabilities/capabilities";
import CaseStudies from "./sections/case-studies/case-studies";
import HomeHero from "./sections/home-hero/home-hero";
import InsightsCarousel from "./sections/insights-carousel/insights-carousel";
import InsightsCtaSection from "./sections/insights-cta/insights-cta";
import InsightsSection from "./sections/insights-section/insights-section";
import JoinTeam from "./sections/join-team/join-team";
import PartnerLogos from "./sections/partner-logos/partner-logos";
import Products from "./sections/products/products";
import TrustedSection from "./sections/trusted-section/trusted-section";

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <InsightsCarousel />
      <PartnerLogos />
      <Capabilities />
      <Products />
      <TrustedSection />
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
