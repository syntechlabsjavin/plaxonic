import PlaceHolderX from "../../../../../../../assets/placeholder-x.svg";

const USE_CASES = [
  {
    source: "wikis · docs · drives",
    image: PlaceHolderX,
    imageAlt: "Internal Knowledge Assistant",
    title: "Internal Knowledge Assistant",
    description:
      "One place to ask anything your company already knows, answered with sources.",
  },
  {
    source: "help center · tickets",
    image: PlaceHolderX,
    imageAlt: "Customer Support Copilot",
    title: "Customer Support Copilot",
    description:
      "Draft accurate, cited replies from your support knowledge in seconds.",
  },
  {
    source: "contracts · reports · PDFs",
    image: PlaceHolderX,
    imageAlt: "Document Q&A",
    title: "Document Q&A",
    description:
      "Ask questions across long, dense documents and get answers with page references.",
  },
  {
    source: "papers · filings · web",
    image: PlaceHolderX,
    imageAlt: "Research & Analyst Copilot",
    title: "Research & Analyst Copilot",
    description:
      "Synthesize across many sources with traceable evidence for every claim.",
  },
  {
    source: "policies · regulations",
    image: PlaceHolderX,
    imageAlt: "Policy & Compliance Assistant",
    title: "Policy & Compliance Assistant",
    description:
      "Answer policy questions exactly as written, with the clause it came from.",
  },
  {
    source: "decks · battlecards · CRM",
    image: PlaceHolderX,
    imageAlt: "Product & Sales Enablement",
    title: "Product & Sales Enablement",
    description:
      "Put your latest positioning and answers at every rep's fingertips.",
  },
];

const WhatWeBuild = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section heading */}
        <div className="mb-10 max-w-3xl sm:mb-12 lg:mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              What We Build
            </span>
          </div>

          <h2 className="font-inter text-3xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-7xl">
            Assistants That Know Your{" "}
            <span className="text-gray-300">Stuff</span>.
          </h2>
        </div>

        {/* Use case cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {USE_CASES.map((useCase) => (
            <div
              key={useCase.title}
              className="group flex flex-col overflow-hidden border border-gray-200 bg-white transition-colors hover:border-primary/40"
            >
              {/* Card metadata */}
              <div className="flex items-center justify-between px-5 pt-4">
                <span className="inline-block bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                  retrieves from
                </span>

                <span className="font-mono text-[11px] text-gray-400">
                  {useCase.source}
                </span>
              </div>

              {/* Card image */}
              <div className="relative mx-5 mt-4 h-36 overflow-hidden border border-gray-200">
                <img
                  src={useCase.image}
                  alt={useCase.imageAlt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Card content */}
              <div className="flex-1 p-5">
                <h3 className="mb-2 font-inter text-lg font-bold text-gray-900 transition-colors group-hover:text-primary">
                  {useCase.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-600">
                  {useCase.description}
                </p>
              </div>

              {/* Hover accent */}
              <span className="h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;