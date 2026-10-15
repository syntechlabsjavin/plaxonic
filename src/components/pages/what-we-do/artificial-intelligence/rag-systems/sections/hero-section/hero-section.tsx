import { ArrowRight, Database, FileText } from "lucide-react";
import HeroBgVideo from "../../../../../../../assets/what-we-do/artificial-intelligence/hero.mp4";

const DOCUMENTS = [
  "policy.pdf",
  "handbook.md",
  "tickets.csv",
  "wiki/onboarding",
  "specs.docx",
  "contracts/2026",
  "slack/#support",
  "notion/roadmap",
  "faq.json",
  "reports/q2.xlsx",
];

const HeroSection = () => {
  // Repeat the documents to create a continuous ticker.
  const tickerDocuments = [...DOCUMENTS, ...DOCUMENTS];

  return (
    <section className="relative w-full overflow-hidden bg-[#070809] pt-28 pb-16 sm:pb-20 lg:pt-32 lg:pb-28">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
      >
        <source src={HeroBgVideo} type="video/mp4" />
      </video>

      {/* Background overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#070809] via-[#070809]/70 to-[#070809]/30" />

      <div className="pointer-events-none absolute top-[-15%] left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-primary/15 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Document ticker */}
        <div className="relative mb-12 overflow-hidden lg:mb-16">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-[#070809] to-transparent" />

          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-[#070809] to-transparent" />

          <div className="rag-document-ticker flex w-max gap-3">
            {tickerDocuments.map((document, index) => (
              <span
                key={`${document}-${index}`}
                className="inline-flex shrink-0 items-center gap-2 border border-white/10 bg-white/[0.03] px-3.5 py-2 font-mono text-[12px] whitespace-nowrap text-gray-400"
              >
                <FileText
                  className="h-3.5 w-3.5 text-primary"
                  aria-hidden="true"
                />
                {document}
              </span>
            ))}
          </div>

          {/* Ingestion status */}
          <div className="mt-4 flex items-center justify-center gap-2 font-mono text-[11px] text-gray-600">
            <Database
              className="h-3.5 w-3.5 text-primary"
              aria-hidden="true"
            />
            ingesting into vector store...
          </div>
        </div>

        {/* Hero content */}
        <div className="max-w-4xl">
          <div className="mb-7 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Artificial Intelligence / AI Development / RAG Systems
            </span>
          </div>

          <h1 className="font-inter text-[2rem] font-bold leading-[1.1] tracking-tight text-white xs:text-4xl sm:text-5xl md:text-6xl lg:text-8xl lg:leading-[1.02]">
            Your Knowledge,
            <br />
            <span className="bg-gradient-to-r from-primary-light via-primary to-primary-light bg-clip-text text-primary">
              Answerable.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-400 sm:mt-8 sm:text-lg md:text-xl">
            We build retrieval-augmented generation systems that turn your
            documents, tickets, and wikis into an assistant that answers from
            your truth, with citations, not guesses.
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap">
            <button
              type="button"
              className="group inline-flex w-full items-center justify-center gap-3 bg-primary px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-dark sm:w-auto"
            >
              Index Your Knowledge

              <ArrowRight
                className="-rotate-45 h-5 w-5 transition-transform duration-300 group-hover:rotate-0"
                aria-hidden="true"
              />
            </button>

            <a
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 border-2 border-white/25 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white hover:text-gray-900 sm:w-auto"
            >
              How RAG Works
            </a>
          </div>
        </div>
      </div>

      {/* Ticker animation */}
      <style>{`
        @keyframes rag-document-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .rag-document-ticker {
          animation: rag-document-scroll 45s linear infinite;
          will-change: transform;
        }

        .rag-document-ticker:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .rag-document-ticker {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;