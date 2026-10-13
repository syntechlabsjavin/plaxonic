import ComplianceStandards from "./sections/compliance-standards/compliance-standards";
import CTA from "./sections/cta/cta";
import DefenseInDepth from "./sections/defense-in-depth/defense-in-depth";
import FAQ from "./sections/faq/faq";
import HeroSection from "./sections/hero-section/hero-section";
import ManagedSecurity from "./sections/managed-security/managed-security";
import OurApproach from "./sections/our-approach/our-approach";
import ThreatLandscape from "./sections/threat-landscape/threat-landscape";
import WhatWeSecure from "./sections/what-we-secure/what-we-secure";
import WhyPlaxonic from "./sections/why-plaxonic/why-plaxonic";

const CyberSecurity = () => {
  return (
    <>
    <HeroSection />
    <ThreatLandscape />
    <WhatWeSecure />
    <DefenseInDepth />
    <OurApproach />
    <ManagedSecurity />
    <ComplianceStandards />
    <WhyPlaxonic />
    <FAQ />
    <CTA />
    </>
  );
};

export default CyberSecurity;
