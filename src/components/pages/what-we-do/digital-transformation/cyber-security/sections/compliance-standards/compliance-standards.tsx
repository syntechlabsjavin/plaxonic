const frameworks = [
  "ISO 27001",
  "SOC 2",
  "GDPR",
  "HIPAA",
  "PCI DSS",
  "NIST CSF",
  "CIS Controls",
  "FedRAMP",
];

const ComplianceStandards = () => {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Heading */}
        <div className="mb-10 flex flex-col gap-6 sm:mb-12 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Compliance &amp; Standards
              </span>
            </div>

            <h2 className="font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Audit-Ready,{" "}
              <span className="text-gray-300">By Design</span>.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
            We align your controls to the frameworks your customers and
            regulators expect, and help you prove it, so passing the audit is
            a byproduct of being genuinely secure.
          </p>
        </div>
      </div>

      {/* Scrolling Frameworks */}
      <div className="relative">
        {/* Left Fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-24" />

        {/* Right Fade */}
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-24" />

        <div className="compliance-marquee flex w-max items-center gap-4">
          {[0, 1].map((group) => (
            <div
              key={group}
              className="flex shrink-0 items-center gap-4"
              aria-hidden={group === 1}
            >
              {frameworks.map((framework) => (
                <span
                  key={framework}
                  className="flex items-center justify-center whitespace-nowrap border border-gray-200 bg-gray-50 px-6 py-5 font-inter text-base font-bold text-gray-900 sm:px-8 sm:py-6 sm:text-lg lg:text-xl"
                >
                  {framework}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Animation */}
      <style>{`
        @keyframes compliance-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 0.5rem));
          }
        }

        .compliance-marquee {
          animation: compliance-scroll 35s linear infinite;
          will-change: transform;
        }

        .compliance-marquee:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .compliance-marquee {
            animation: none;
            flex-wrap: wrap;
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default ComplianceStandards;