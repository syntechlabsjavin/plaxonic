
const integrationPhases = [
  {
    number: "01",
    title: "Discovery & Integration Audit",
    description:
      "We map every system, data flow, and handoff, then pinpoint where brittle exports and manual steps are slowing the business down.",
  },
  {
    number: "02",
    title: "Architecture & Contract Design",
    description:
      "API contracts, data models, and an integration architecture are designed up front, so every team builds against the same source of truth.",
  },
  {
    number: "03",
    title: "Build & Orchestration",
    description:
      "We implement the APIs, middleware, and event flows, transforming, routing, and orchestrating data across your systems.",
  },
  {
    number: "04",
    title: "Security & Governance",
    description:
      "Authentication, authorization, rate limiting, and policy are enforced at the gateway, so every endpoint is governed and protected.",
  },
  {
    number: "05",
    title: "Testing & Performance",
    description:
      "Contract, integration, and load testing validate behavior under real traffic, catching breakage before production ever sees it.",
  },
  {
    number: "06",
    title: "Deploy, Monitor & Scale",
    description:
      "CI/CD, observability, and alerting keep the integration layer healthy and ready to scale as call volumes grow.",
  },
];

const APIMiddlewareProcess = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Content */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="mb-6 flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  How We Deliver
                </span>
              </div>

              <h2 className="mb-6 font-inter text-3xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
                Integration That{" "}
                <span className="text-gray-300">
                  Won&apos;t Break In Six Months
                </span>
                .
              </h2>

              <p className="text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
                Most integrations rot because nobody designed the contracts.
                Our six-phase method builds connectivity that&apos;s governed,
                tested, and observable from day one.
              </p>
            </div>
          </div>

          {/* Right Timeline */}
          <div className="lg:col-span-8">
            <div className="relative pl-10 sm:pl-16">
              {/* Timeline Line */}
              <div className="absolute bottom-2 left-[19px] top-2 w-[2px] bg-gray-200 sm:left-[27px]">
                <div className="h-full w-full origin-top bg-primary" />
              </div>

              {/* Timeline Items */}
              <div className="space-y-8">
                {integrationPhases.map((phase) => (
                  <div key={phase.number} className="group relative">
                    {/* Number */}
                    <div className="absolute -left-10 top-0 sm:-left-16">
                      <div className="flex h-10 w-10 items-center justify-center border-2 border-primary bg-white transition-colors duration-300 group-hover:bg-primary sm:h-14 sm:w-14">
                        <span className="text-[11px] font-bold tabular-nums text-primary transition-colors duration-300 group-hover:text-white sm:text-sm">
                          {phase.number}
                        </span>
                      </div>
                    </div>

                    {/* Phase Card */}
                    <div className="border border-gray-200 bg-gray-50 p-6 transition-colors duration-300 hover:border-primary/40 lg:p-7">
                      <h3 className="mb-3 text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-primary sm:text-xl">
                        {phase.title}
                      </h3>

                      <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default APIMiddlewareProcess;
