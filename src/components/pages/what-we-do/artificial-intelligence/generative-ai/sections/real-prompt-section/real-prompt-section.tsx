import AppsBanner from "../../../../../../../assets/what-we-do/artificial-intelligence/apps-banner.png";

const RealPromptsSection = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section heading */}
        <div className="mb-10 max-w-3xl sm:mb-12 lg:mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Put To Use
            </span>
          </div>

          <h2 className="font-inter text-3xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Real Prompts, Real{" "}
            <span className="text-gray-300">Output</span>.
          </h2>
        </div>

        {/* Prompt examples grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:auto-rows-[230px] lg:grid-cols-3">
          {/* Marketing card */}
          <div className="group relative flex flex-col overflow-hidden border border-gray-200 transition-colors hover:border-primary/40 lg:col-span-2 lg:row-span-2">
            <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-2.5">
              <span className="font-mono text-xs text-primary">
                &gt;
              </span>

              <span className="truncate font-mono text-[11px] text-gray-500">
                on-brand hero image, product on gradient
              </span>

              <span className="ml-auto flex-shrink-0 bg-primary/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary">
                Marketing
              </span>
            </div>

            <div className="relative min-h-[160px] flex-1">
              <img
                src={AppsBanner}
                alt="Generated visual"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              <span className="absolute bottom-3 left-4 text-sm font-medium text-white">
                12 variations, brand-safe
              </span>
            </div>
          </div>

          {/* Support card */}
          <div className="group relative flex flex-col overflow-hidden border border-gray-200 transition-colors hover:border-primary/40">
            <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-2.5">
              <span className="font-mono text-xs text-primary">
                &gt;
              </span>

              <span className="truncate font-mono text-[11px] text-gray-500">
                draft a reply to an angry refund email
              </span>

              <span className="ml-auto flex-shrink-0 bg-primary/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary">
                Support
              </span>
            </div>

            <div className="flex-1 p-5">
              <p className="text-sm leading-relaxed text-gray-700">
                Hi Sam, you are right and I am sorry. Your refund is on
                its way, and here is what we changed so it does not
                happen again.
              </p>
            </div>
          </div>

          {/* Engineering card */}
          <div className="group relative flex flex-col overflow-hidden border border-gray-200 transition-colors hover:border-primary/40">
            <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-2.5">
              <span className="font-mono text-xs text-primary">
                &gt;
              </span>

              <span className="truncate font-mono text-[11px] text-gray-500">
                add input validation to this endpoint
              </span>

              <span className="ml-auto flex-shrink-0 bg-primary/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary">
                Engineering
              </span>
            </div>

            <pre className="flex-1 overflow-auto whitespace-pre-wrap bg-[#0e1117] p-4 font-mono text-[12px] leading-relaxed text-gray-300">
              <code>{`if (!body.email) return res.status(400)
  .json({ error: 'email required' })`}</code>
            </pre>
          </div>

          {/* Knowledge card */}
          <div className="group relative flex flex-col overflow-hidden border border-gray-200 transition-colors hover:border-primary/40">
            <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-2.5">
              <span className="font-mono text-xs text-primary">
                &gt;
              </span>

              <span className="truncate font-mono text-[11px] text-gray-500">
                summarize this 40-page contract
              </span>

              <span className="ml-auto flex-shrink-0 bg-primary/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary">
                Knowledge
              </span>
            </div>

            <div className="flex-1 p-5">
              <p className="text-sm leading-relaxed text-gray-700">
                Net-30 terms, auto-renews yearly, 60-day cancellation
                notice, liability capped at fees paid.
              </p>
            </div>
          </div>

          {/* Sales card */}
          <div className="group relative flex flex-col overflow-hidden border border-gray-200 transition-colors hover:border-primary/40">
            <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-2.5">
              <span className="font-mono text-xs text-primary">
                &gt;
              </span>

              <span className="truncate font-mono text-[11px] text-gray-500">
                personalize this outreach for a CFO
              </span>

              <span className="ml-auto flex-shrink-0 bg-primary/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary">
                Sales
              </span>
            </div>

            <div className="flex-1 p-5">
              <p className="text-sm leading-relaxed text-gray-700">
                Most finance teams we work with close the month 40%
                faster. Worth a quick look for your team?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealPromptsSection;