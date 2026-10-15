import ChannelsSection from "./sections/channels-section/channels-section";
import CTA from "./sections/cta/cta";
import FAQ from "./sections/faq/faq";
import HeroSection from "./sections/hero-section/hero-section";
import HumanHandoff from "./sections/human-handoff/human-handoff";
import PersonalitySection from "./sections/personality-section/personality-section";
import UnderstandingSection from "./sections/understanding-section/understanding-section";
import WhatItCanDo from "./sections/what-it-can-do/what-it-can-do";

const AIChatbot = () => {
  return (
    <>
    <HeroSection />
    <ChannelsSection />
    <UnderstandingSection />
    <WhatItCanDo />
    <HumanHandoff />
    <PersonalitySection />
    <FAQ />
    <CTA />
    </>
  );
};

export default AIChatbot;