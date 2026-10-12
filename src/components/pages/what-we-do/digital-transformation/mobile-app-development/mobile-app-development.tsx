import EngagementModels from "./sections/engagement-models/engagement-models";
import FAQ from "./sections/faq/faq";
import MobileAIAndModernization from "./sections/mobile-ai-and-modernization/mobile-ai-and-modernization";
import MobileAppHero from "./sections/mobile-app-hero/mobile-app-hero";
import MobileAppIdeaCTA from "./sections/mobile-app-Idea-cta/mobile-app-Idea-cta";
import MobileAppLaunchCTA from "./sections/mobile-app-launch-cta/mobile-app-launch-cta";
import MobileAppStandards from "./sections/mobile-app-standards/mobile-app-standards";
import MobileAppWeBuild from "./sections/mobile-app-we-build/mobile-app-we-build";
import MobilePlatforms from "./sections/mobile-platforms/mobile-platforms";
import OurProcess from "./sections/our-process/our-process";
import TechnologyStack from "./sections/technology-stack/technology-stack";
import WhyChooseUs from "./sections/why-choose-us/why-choose-us";

const MobileApplicationDevelopment = () => {
  return (
    <>
      <MobileAppHero />
      <MobileAppStandards />
      <MobilePlatforms />
      <MobileAppWeBuild />
      <MobileAIAndModernization />
      <MobileAppIdeaCTA />
      <TechnologyStack />
      <OurProcess />
      <EngagementModels />
      <WhyChooseUs />
      <FAQ />
      <MobileAppLaunchCTA />
    </>
  );
};

export default MobileApplicationDevelopment;
