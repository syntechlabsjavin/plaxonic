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
              A Student Disengages in{" "}
              <span className="text-primary">Silence</span>.
            </h2>
          </div>

          {/* Right column */}
          <div className="flex gap-5">
            <div className="w-[3px] flex-shrink-0 bg-primary" />
            <p className="text-gray-700 text-xl md:text-2xl font-medium leading-relaxed">
              The time between a student disengaging and someone noticing decides whether they finish the term. Coursework stops being opened, an assignment is never submitted, a concept the whole cohort missed goes unflagged, and logins quietly stop. We shorten that gap with engagement data consolidated across LMS, SIS, and assessment tools, early-alert models that read behavior rather than grades alone, and signals routed to the advisor who can act.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;