import {
  Gauge,
  ShieldCheck,
  Layers,
  ArrowRight,
} from "lucide-react";

const architectureLayers = [
  {
    title: "Experience Layer",
    description: "Web · Mobile · Portals",
  },
  {
    title: "API & Integration",
    description: "Gateway · Events · Contracts",
  },
  {
    title: "Domain Services",
    description: "Business logic · Microservices",
  },
  {
    title: "Data & Storage",
    description: "SQL · NoSQL · Warehouse",
  },
  {
    title: "Cloud Infrastructure",
    description: "Containers · CI/CD · Observability",
  },
];

const EnterpriseSoftwareHero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(238, 242, 246) 1px, transparent 1px), linear-gradient(rgb(238, 242, 246) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(80% 70% at 30% 30%, black 30%, transparent 80%)",
          }}
        />

        <div className="absolute -left-24 -top-24 h-[520px] w-[520px] rounded-full bg-primary/[0.07] blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="flex flex-col gap-10 sm:gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          {/* Left Content */}
          <div className="lg:w-[52%]">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Digital Transformation / Enterprise Solutions
              </span>
            </div>

            <h1 className="mb-8 font-inter text-[2rem] font-bold leading-[1.1] tracking-tight xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-gray-900">
                Enterprise Software
              </span>
              <br />
              <span className="text-primary">Development</span>
            </h1>

            <div className="mb-10 flex max-w-2xl gap-4">
              <div className="w-[3px] shrink-0 bg-primary" />

              <p className="text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl">
                When software has to run the business, across thousands
                of users, strict compliance, and zero tolerance for
                downtime, generic tools don't cut it. We architect and
                build mission-critical custom platforms that scale, stay
                secure, and last for years, not quarters.
              </p>
            </div>

            {/* Feature Badges */}
            <div className="mb-10 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">
                <Gauge className="h-4 w-4 text-primary" />
                Built for scale
              </span>

              <span className="inline-flex items-center gap-2 border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Secure &amp; compliant
              </span>

              <span className="inline-flex items-center gap-2 border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">
                <Layers className="h-4 w-4 text-primary" />
                Domain-driven
              </span>
            </div>

            {/* Buttons */}
            <div className="flex flex-col flex-wrap gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => {
                  window.location.href = "/contact";
                }}
                className="group inline-flex w-full items-center justify-center gap-3 bg-primary px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-dark sm:w-auto"
              >
                <span>Build Enterprise Software</span>

                <ArrowRight className="-rotate-45 h-5 w-5 transition-transform duration-300 group-hover:rotate-0" />
              </button>

              <a
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-3 border-2 border-gray-900 px-8 py-3.5 text-base font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white sm:w-auto"
              >
                Book a Discovery Call
              </a>
            </div>
          </div>

          {/* Right Dashboard */}
          <div className="flex justify-center lg:w-[46%] lg:justify-end">
            <div className="relative w-full max-w-xl">
              <div className="absolute left-1/4 top-1/4 h-[420px] w-[420px] rounded-full bg-primary/[0.14] blur-[80px]" />

              <div className="relative overflow-hidden bg-gray-900 p-6 shadow-2xl lg:p-7">
                {/* Dashboard Header */}
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center bg-primary/20">
                      <Layers className="h-4 w-4 text-primary" />
                    </div>

                    <span className="text-xs font-medium text-gray-300">
                      Reference Architecture
                    </span>
                  </div>

                  <span className="font-mono text-[10px] text-gray-500">
                    scalable · secure
                  </span>
                </div>

                {/* Architecture Layers */}
                <div className="mb-5 space-y-2.5">
                  {architectureLayers.map((layer) => (
                    <div
                      key={layer.title}
                      className="group flex items-center justify-between border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-primary/40"
                    >
                      <div>
                        <div className="text-sm font-semibold leading-tight text-white">
                          {layer.title}
                        </div>

                        <div className="mt-0.5 text-[10px] text-gray-500">
                          {layer.description}
                        </div>
                      </div>

                      <span className="h-1.5 w-1.5 shrink-0 bg-primary" />
                    </div>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-px border border-white/10 bg-white/10">
                  <div className="bg-gray-900 px-3 py-3">
                    <div className="mb-1 font-inter text-base font-bold leading-none text-primary lg:text-lg">
                      SOC 2
                    </div>
                    <div className="text-[10px] leading-tight text-gray-500">
                      compliant
                    </div>
                  </div>

                  <div className="bg-gray-900 px-3 py-3">
                    <div className="mb-1 font-inter text-base font-bold leading-none text-primary lg:text-lg">
                      99.99%
                    </div>
                    <div className="text-[10px] leading-tight text-gray-500">
                      uptime SLA
                    </div>
                  </div>

                  <div className="bg-gray-900 px-3 py-3">
                    <div className="mb-1 font-inter text-base font-bold leading-none text-primary lg:text-lg">
                      10M+
                    </div>
                    <div className="text-[10px] leading-tight text-gray-500">
                      users
                    </div>
                  </div>
                </div>

                {/* Dashboard Glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSoftwareHero;