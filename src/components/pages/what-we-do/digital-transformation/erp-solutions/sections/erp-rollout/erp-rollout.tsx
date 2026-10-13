
import React from "react";

interface ImplementationPhase {
  number: string;
  title: string;
  description: string;
}

const implementationPhases: ImplementationPhase[] = [
  {
    number: "01",
    title: "Discovery & Process Mapping",
    description:
      "We map how finance, operations, and supply chain actually work today—surfacing the gaps a new ERP needs to close.",
  },
  {
    number: "02",
    title: "Solution Design & Blueprint",
    description:
      "A target operating model and platform blueprint: modules, data model, and the integrations that tie it together.",
  },
  {
    number: "03",
    title: "Configuration & Customization",
    description:
      "We configure modules to your processes and build only the customizations that earn their place—nothing bloated.",
  },
  {
    number: "04",
    title: "Data Migration & Validation",
    description:
      "Legacy data is cleansed, mapped, and reconciled, so the system goes live on records your team can trust.",
  },
  {
    number: "05",
    title: "Integration & Testing",
    description:
      "End-to-end and user-acceptance testing across every connected system—validated against real business scenarios.",
  },
  {
    number: "06",
    title: "Go-Live & Hypercare",
    description:
      "A phased cutover with on-hand hypercare support, then optimization that keeps the platform evolving with you.",
  },
];

const ERPRollout: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-2 pb-16 sm:pb-20 lg:pt-4 lg:pb-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section heading */}
        <div className="mb-10 max-w-3xl sm:mb-14 lg:mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              How We Implement
            </span>
          </div>

          <h2 className="mb-6 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-6xl">
            A Rollout That{" "}
            <span className="text-gray-300">
              Doesn't Stall The Business
            </span>
            .
          </h2>

          <div className="flex max-w-2xl gap-4">
            <div className="w-[3px] shrink-0 bg-primary" />

            <p className="text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
              ERP projects fail on disruption and data, not features. Our
              six-phase method is built to go live cleanly—and keep operations
              running while it does.
            </p>
          </div>
        </div>

        {/* Implementation phases */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {implementationPhases.map((phase, index) => (
            <div key={phase.number} className="group relative">
              {/* Number and connecting line */}
              <div className="mb-6 flex items-center">
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center border-2 border-primary bg-white transition-colors duration-300 group-hover:bg-primary">
                  <span className="tabular-nums text-sm font-bold text-primary transition-colors duration-300 group-hover:text-white">
                    {phase.number}
                  </span>
                </div>

                {index < implementationPhases.length - 1 && (
                  <div className="ml-3 hidden h-[2px] flex-1 bg-gray-200 xl:block">
                    <div className="h-full origin-left bg-primary/40 transition-transform duration-300" />
                  </div>
                )}
              </div>

              {/* Phase content */}
              <h3 className="mb-3 text-lg font-semibold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-primary">
                {phase.title}
              </h3>

              <p className="text-sm leading-relaxed text-gray-600">
                {phase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ERPRollout;
