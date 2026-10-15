import Architecture from "./sections/architecture/architecture";
import ConnectorsSection from "./sections/connectors-section/connectors-section";
import CTA from "./sections/cta/cta";
import FAQ from "./sections/faq/faq";
import HeroSection from "./sections/hero-section/hero-section";
import RetrievalSection from "./sections/retrieval-section/retrieval-section";
import TrustedAnswerSection from "./sections/trusted-answer-section/trusted-answer-section";
import WhatWeBuild from "./sections/what-we-build/what-we-build";
import WhyRAG from "./sections/why-rag/why-rag";

const RAGSystems = () => {
  return (
    <>
    <HeroSection />
    <WhyRAG />
    <Architecture />
    <RetrievalSection />
    <WhatWeBuild />
    <WhatWeBuild />
    <ConnectorsSection />
    <TrustedAnswerSection />
    <FAQ />
    <CTA />
    </>
  );
};

export default RAGSystems;