import "./saas-platform-development.css"
import FAQ from "./sections/faq/faq";
import SaaSAppLaunchCTA from "./sections/saas-app-launch-cta/saas-app-launch-cta";
import SaaSPlatformAdvantage from "./sections/saas-platform-advantage/saas-platform-advantage";
import SaaSPlatformCaseStudies from "./sections/saas-platform-case-studies/saas-platform-case-studies";
import SaaSPlatformEngagement from "./sections/saas-platform-engagement/saas-platform-engagement";
import SaaSPlatformHero from "./sections/saas-platform-hero/saas-platform-hero";
import SaaSPlatformLifecycle from "./sections/saas-platform-lifecycle/saas-platform-lifecycle";
import SaaSPlatformServices from "./sections/saas-platform-services/saas-platform-services";
import SaaSPlatformStack from "./sections/saas-platform-stack/saas-platform-stack";

const SaasPlatformDevelopment = () => {
  return (
    <>
    <SaaSPlatformHero />
    <SaaSPlatformServices />
    <SaaSPlatformStack />
    <SaaSPlatformLifecycle />
    <SaaSPlatformAdvantage />
    <SaaSPlatformEngagement />
    <SaaSPlatformCaseStudies />
    <FAQ />
    <SaaSAppLaunchCTA />
    </>
  );
};

export default SaasPlatformDevelopment;
