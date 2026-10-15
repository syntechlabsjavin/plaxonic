import {
  ArrowDown,
  FileText,
  Search,
  Sparkles,
  Quote,
} from "lucide-react";

const KNOWLEDGE_FILES = [
  "policy.pdf",
  "handbook.md",
  "tickets.csv",
  "specs.docx",
  "wiki/*",
];

const GroundedByDesign = () => {
  return (
    <section className="overflow-hidden bg-gray-50 py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section heading */}
        <div className="mb-10 max-w-3xl sm:mb-12 lg:mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Grounded By Design
            </span>
          </div>

          <h2 className="font-inter text-3xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Answers From Your{" "}
            <span className="text-gray-300">Knowledge</span>.
          </h2>

          <p className="mt-6 text-base leading-relaxed text-gray-600 sm:mt-7 sm:text-[17px] md:text-lg">
            A model that makes things up is a liability. We ground
            generation in your own documents with retrieval, so every
            answer is current, specific, and cited.
          </p>
        </div>

        {/* Knowledge base */}
        <div className="border border-gray-200 bg-white p-5">
          <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-400">
            Your knowledge base
          </div>

          <div className="flex flex-wrap gap-2.5">
            {KNOWLEDGE_FILES.map((file) => (
              <span
                key={file}
                className="inline-flex items-center gap-2 border border-gray-200 bg-gray-50 px-3 py-1.5 font-mono text-[12px] text-gray-600"
              >
                <FileText
                  className="h-3.5 w-3.5 flex-shrink-0 text-primary"
                  aria-hidden="true"
                />
                {file}
              </span>
            ))}
          </div>
        </div>

        {/* Flow direction indicator */}
        <div className="flex justify-center py-3">
          <ArrowDown
            className="h-6 w-6 text-gray-300"
            aria-hidden="true"
          />
        </div>

        {/* Retrieval augmented generation workflow */}
        <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-[1fr_auto_1fr_auto_1.2fr] md:gap-3">
          {/* Retrieve */}
          <div className="flex flex-col justify-center border border-gray-200 bg-white p-6">
            <span className="mb-4 flex h-11 w-11 items-center justify-center bg-primary/10 text-primary">
              <Search className="h-5 w-5" aria-hidden="true" />
            </span>

            <h3 className="font-inter text-lg font-bold text-gray-900">
              Retrieve
            </h3>

            <p className="mt-1 text-sm text-gray-600">
              Find the most relevant passages
            </p>
          </div>

          {/* Connector */}
          <div className="flex items-center justify-center md:px-1">
            <span className="hidden h-[2px] w-8 bg-gray-300 md:block" />
            <span className="h-6 w-[2px] bg-gray-300 md:hidden" />
          </div>

          {/* Augment and generate */}
          <div className="flex flex-col justify-center bg-gray-900 p-6 text-white">
            <span className="mb-4 flex h-11 w-11 items-center justify-center bg-primary text-white">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </span>

            <h3 className="font-inter text-lg font-bold text-white">
              Augment &amp; Generate
            </h3>

            <p className="mt-1 text-sm text-gray-400">
              Model answers using that context
            </p>
          </div>

          {/* Connector */}
          <div className="flex items-center justify-center md:px-1">
            <span className="hidden h-[2px] w-8 bg-gray-300 md:block" />
            <span className="h-6 w-[2px] bg-gray-300 md:hidden" />
          </div>

          {/* Grounded answer */}
          <div className="border-2 border-primary bg-primary/[0.04] p-6">
            <div className="mb-3 flex items-center gap-2">
              <Quote
                className="h-4 w-4 text-primary"
                aria-hidden="true"
              />

              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                Grounded answer
              </span>
            </div>

            <p className="text-sm leading-relaxed text-gray-800">
              Refunds are processed within five business days under the
              current policy
              <sup className="font-bold text-primary"> [1]</sup>, with
              exceptions for flagged accounts
              <sup className="font-bold text-primary"> [2]</sup>.
            </p>

            {/* Source citations */}
            <div className="mt-4 flex flex-wrap gap-2 font-mono text-[11px] text-gray-500">
              <span className="border border-gray-200 px-2 py-0.5">
                [1] policy.pdf
              </span>

              <span className="border border-gray-200 px-2 py-0.5">
                [2] handbook.md
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroundedByDesign;