
import { useEffect, useRef, useState } from "react";

interface ImplementationPhase {
  number: string;
  title: string;
  description: string;
  side: "left" | "right";
}

const implementationPhases: ImplementationPhase[] = [
  {
    number: "01",
    title: "Discovery & Data Audit",
    description:
      "We start by understanding your sales process, customer data, existing tools, and team workflows. We review your current data, identify gaps or inconsistencies, and define the CRM structure around how your business operates.",
    side: "left",
  },
  {
    number: "02",
    title: "Architecture & Customization",
    description:
      "We configure the CRM solutions around your processes, including fields, pipelines, user roles, permissions, workflows, and automation.",
    side: "right",
  },
  {
    number: "03",
    title: "Data Migration & Cleansing",
    description:
      "We prepare your existing data before moving it into the new CRM. Our team identifies duplicates, cleans and standardizes records, maps fields, and validates the migration, so your team starts with organized, usable customer data.",
    side: "left",
  },
  {
    number: "04",
    title: "Automation & Integration",
    description:
      "We connect your CRM with the business tools you already use, including email, ERP, marketing, and telephony systems. We also automate repetitive workflows to reduce manual data entry and keep information consistent across connected systems.",
    side: "right",
  },
  {
    number: "05",
    title: "Training & Adoption",
    description:
      "We train your teams based on their roles and day-to-day CRM activities. You receive practical training materials and rollout guidance to help your teams understand the new system and use it confidently in their regular workflows.",
    side: "left",
  },
  {
    number: "06",
    title: "Optimization & Support",
    description:
      "Our team monitors the CRM after launch and makes adjustments based on how your teams are using it. We can refine dashboards, add new automation, improve workflows, and provide ongoing support as your CRM requirements evolve.",
    side: "right",
  },
];

const CustomCRMImplementation = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const phaseRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visiblePhases, setVisiblePhases] = useState<Set<number>>(
    new Set([0])
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(
              (entry.target as HTMLElement).dataset.phaseIndex
            );

            setVisiblePhases((previous) => {
              if (previous.has(index)) return previous;

              const next = new Set(previous);
              next.add(index);
              return next;
            });
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    phaseRefs.current.forEach((phase) => {
      if (phase) observer.observe(phase);
    });

    return () => observer.disconnect();
  }, []);

  const progress = Math.max(...Array.from(visiblePhases), 0) /
    (implementationPhases.length - 1);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gray-50 py-16 sm:py-20 lg:py-32"
    >
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 lg:mb-16">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              How We Implement
            </span>
          </div>

          <h2 className="mb-6 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 xs:text-4xl sm:text-5xl md:text-6xl">
            Custom CRM Solutions Built Around{" "}
            <span className="text-gray-300">Your Business</span>.
          </h2>

          <p className="text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
            Our team follows a structured six-phase approach to understand
            your requirements, configure the CRM, connect your existing
            systems, and prepare your teams to use it effectively. Each
            phase keeps the implementation aligned with your business
            processes and goals.
          </p>
        </div>

        {/* Implementation timeline */}
        <div className="relative mx-auto max-w-5xl">
          {/* Timeline background */}
          <div className="absolute bottom-2 left-7 top-2 w-[2px] -translate-x-1/2 bg-gray-200 md:left-1/2">
            <span
              className="block h-full w-full origin-top bg-primary transition-transform duration-700 ease-out"
              style={{ transform: `scaleY(${progress})` }}
            />
          </div>

          <div className="space-y-8 md:space-y-2">
            {implementationPhases.map((phase, index) => {
              const isVisible = visiblePhases.has(index);

              return (
                <div
                  key={phase.number}
                  ref={(element) => {
                    phaseRefs.current[index] = element;
                  }}
                  data-phase-index={index}
                  className={`relative md:grid md:grid-cols-2 md:items-center md:gap-0 transition-all duration-700 ease-out ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[30px] opacity-0"
                  }`}
                >
                  {/* Timeline node */}
                  <div className="absolute left-7 top-7 z-10 -translate-x-1/2 md:left-1/2 md:top-1/2 md:-translate-y-1/2">
                    <div
                      className={`ip-node flex h-12 w-12 items-center justify-center border-2 bg-white shadow-sm transition-colors duration-300 ${
                        isVisible
                          ? "border-primary"
                          : "border-gray-200"
                      }`}
                    >
                      <span
                        className={`ip-node-num text-xs font-bold tabular-nums transition-colors duration-300 ${
                          isVisible ? "text-primary" : "text-gray-400"
                        }`}
                      >
                        {phase.number}
                      </span>
                    </div>
                  </div>

                  {/* Phase card */}
                  <div
                    className={`pl-20 md:pl-0 ${
                      phase.side === "left"
                        ? "md:col-start-1 md:pr-16 md:text-right"
                        : "md:col-start-2 md:pl-16"
                    }`}
                  >
                    <div className="group border border-gray-200 bg-white p-6 transition-colors duration-300 hover:border-primary/40 lg:p-7">
                      <h3 className="mb-3 text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-primary sm:text-xl">
                        {phase.title}
                      </h3>

                      <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomCRMImplementation;
