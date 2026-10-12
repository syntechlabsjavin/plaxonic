
interface LifecycleStep {
  number: string;
  title: string;
  description: string;
}

const LIFECYCLE_STEPS: LifecycleStep[] = [
  {
    number: "01",
    title: "Assess & Strategize",
    description:
      "Architecture review, tenancy modeling, and a build-vs-buy map. We define the platform's north-star and the SLOs it must hold.",
  },
  {
    number: "02",
    title: "Architect the Platform",
    description:
      "Tenant isolation, data partitioning, and service boundaries, designed with cost, blast radius, and compliance in mind.",
  },
  {
    number: "03",
    title: "Build & Containerize",
    description:
      "Services shipped as immutable images on a paved road, with golden paths so every team builds the same trusted way.",
  },
  {
    number: "04",
    title: "Automate Everything",
    description:
      "CI/CD, infrastructure-as-code, and policy-as-code. Environments spin up in minutes and deploys are boring on purpose.",
  },
  {
    number: "05",
    title: "Operate & Observe",
    description:
      "SLOs, tracing, and error budgets feed on-call runbooks, so reliability is a metric, not a hope.",
  },
  {
    number: "06",
    title: "Scale & Optimize",
    description:
      "Continuous cost-tuning, capacity planning, and platform self-service that compounds developer velocity over time.",
  },
];

const SaaSPlatformLifecycle = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-32">
      {/* Background grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(27, 163, 221) 1px, transparent 1px), linear-gradient(rgb(27, 163, 221) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Background fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/80" />

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section heading */}
        <div className="mb-10 sm:mb-14 lg:mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Engineering Lifecycle
            </span>
          </div>

          <h2 className="mb-8 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-6xl lg:text-7xl">
            From Zero To{" "}
            <span className="text-gray-300">Paved Road</span>.
          </h2>

          <div className="flex max-w-2xl gap-4">
            <div className="w-[3px] shrink-0 bg-primary" />

            <p className="text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
              A continuous loop, not a one-way handoff. Each phase feeds the
              next and the platform keeps improving long after launch.
            </p>
          </div>
        </div>

        {/* Lifecycle steps */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="absolute left-0 right-0 top-7 hidden h-[2px] bg-gray-200 lg:block">
            <div className="h-full origin-left bg-primary" />
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
            {LIFECYCLE_STEPS.map((step) => (
              <div key={step.number} className="relative">
                {/* Step number */}
                <div className="mb-5 flex items-center gap-3 lg:block">
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center border-2 border-primary bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <span className="text-sm font-bold tabular-nums text-primary">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Step content */}
                <h3 className="mb-2 text-lg font-semibold leading-snug text-gray-900">
                  {step.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Continuous improvement label */}
          <div className="mt-10 hidden items-center justify-end gap-2 text-sm font-medium text-primary lg:flex">
            <span className="text-xs uppercase tracking-[0.15em]">
              Continuous improvement loop
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaaSPlatformLifecycle;
