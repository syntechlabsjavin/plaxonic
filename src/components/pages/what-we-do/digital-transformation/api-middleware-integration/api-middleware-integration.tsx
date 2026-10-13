import APIMiddlewareCoverage from "./sections/api-middleware-coverage/api-middleware-coverage";
import APIMiddlewareEngagementModels from "./sections/api-middleware-engagement-models/api-middleware-engagement-models";
import APIMiddlewareHero from "./sections/api-middleware-hero/api-middleware-hero";
import APIMiddlewarePayoff from "./sections/api-middleware-payoff/api-middleware-payoff";
import APIMiddlewareProcess from "./sections/api-middleware-process/api-middleware-process";
import APIMiddlewareServices from "./sections/api-middleware-services/api-middleware-services";
import APIMiddlewareStack from "./sections/api-middleware-stack/api-middleware-stack";
import CTA from "./sections/cta/cta";
import FAQ from "./sections/faq/faq";
import WhyPlaxonic from "./sections/why-plaxonic/why-plaxonic";

const APIMiddlewareIntegration = () => {
  return (
    <>
    <APIMiddlewareHero />
    <APIMiddlewareServices />
    <APIMiddlewareStack />
    <APIMiddlewareProcess />
    <WhyPlaxonic />
    <APIMiddlewareCoverage />
    <APIMiddlewarePayoff />
    <APIMiddlewareEngagementModels />
    <FAQ />
    <CTA />
    </>
  );
};

export default APIMiddlewareIntegration;