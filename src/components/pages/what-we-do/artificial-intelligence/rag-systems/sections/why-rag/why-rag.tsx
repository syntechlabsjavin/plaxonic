import { TriangleAlert, BadgeCheck } from "lucide-react";

const WhyRAG = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section heading */}
        <div className="mb-10 max-w-3xl sm:mb-12 lg:mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Why RAG
            </span>
          </div>

          <h2 className="font-inter text-3xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-7xl">
            A Model That Guesses Is A{" "}
            <span className="text-gray-300">Liability</span>.
          </h2>

          <p className="mt-6 text-sm leading-relaxed text-gray-600 sm:mt-7 sm:text-base md:text-lg">
            A general model has never read your policies, your tickets, or
            last week's decision. Ask it anyway and it will answer
            confidently, and sometimes wrongly. RAG fixes that by retrieving
            the truth before it speaks.
          </p>
        </div>

        {/* Comparison cards */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          {/* Plain LLM */}
          <div className="overflow-hidden border border-gray-200">
            <div className="flex items-center gap-2 border-b border-red-100 bg-red-50 px-5 py-3">
              <TriangleAlert
                className="h-4 w-4 text-red-500"
                aria-hidden="true"
              />

              <span className="text-sm font-bold text-red-600">
                Plain LLM, no retrieval
              </span>
            </div>

            <div className="p-6">
              <div className="mb-3 font-mono text-[11px] text-gray-400">
                &gt; what is our refund window?
              </div>

              <p className="text-base leading-relaxed text-gray-700">
                Refunds are typically processed within 30 days, though it
                can vary by retailer.
              </p>

              <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-red-600">
                <span className="h-1.5 w-1.5 bg-red-500" />
                Plausible, generic, and wrong for you. No source.
              </div>
            </div>
          </div>

          {/* Grounded with RAG */}
          <div className="overflow-hidden border-2 border-primary">
            <div className="flex items-center gap-2 border-b border-primary/20 bg-primary/[0.06] px-5 py-3">
              <BadgeCheck
                className="h-4 w-4 text-primary"
                aria-hidden="true"
              />

              <span className="text-sm font-bold text-primary">
                Grounded with RAG
              </span>
            </div>

            <div className="p-6">
              <div className="mb-3 font-mono text-[11px] text-gray-400">
                &gt; what is our refund window?
              </div>

              <p className="text-base leading-relaxed text-gray-800">
                Your refund window is 5 business days from delivery
                <sup className="font-bold text-primary"> [1]</sup>, with a
                14-day window for enterprise accounts
                <sup className="font-bold text-primary"> [2]</sup>.
              </p>

              <div className="mt-5 flex flex-wrap gap-2 font-mono text-[11px] text-gray-500">
                <span className="border border-gray-200 px-2 py-0.5">
                  [1] policy.pdf · p.4
                </span>

                <span className="border border-gray-200 px-2 py-0.5">
                  [2] handbook.md
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRAG;