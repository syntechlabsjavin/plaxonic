const WhyItMatters = () => {
  return (
    <section className="bg-white py-24 lg:py-36">
      <div className="max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
          {/* Sticky left column */}
          <div className="lg:sticky lg:top-28">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
                Why It Matters
              </span>
            </div>
            <h2 className="font-inter text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.05]">
              In Healthcare, A Small Gap Is{" "}
              <span className="text-primary">Never Small</span>.
            </h2>
          </div>

          {/* Right column */}
          <div className="flex gap-5">
            <div className="w-[3px] flex-shrink-0 bg-primary" />
            <p className="text-gray-700 text-xl md:text-2xl font-medium leading-relaxed">
              Every system we build for healthcare is designed for its worst
              hour, not its average one. A missing record at 2 p.m. is an
              inconvenience. The same gap during a night shift, mid-handoff,
              with an unconscious patient, is something else entirely. That is
              why we unify clinical data into one live record, run AI a
              clinician can question, and write HIPAA controls into the
              architecture rather than the launch checklist.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;