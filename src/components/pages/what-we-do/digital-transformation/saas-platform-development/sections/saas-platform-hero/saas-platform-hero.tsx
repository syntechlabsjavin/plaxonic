
import { Activity, ArrowRight, Server, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PLATFORM_FEATURES = [
  {
    label: "Multi-tenant",
    Icon: Server,
  },
  {
    label: "99.99% SLA",
    Icon: Activity,
  },
  {
    label: "Self-serve onboarding",
    Icon: Users,
  },
];

const TENANTS = [
  {
    initials: "AC",
    name: "acme-corp",
    region: "us-east-1",
    usage: 64,
  },
  {
    initials: "GL",
    name: "globex-saas",
    region: "eu-west-2",
    usage: 38,
  },
  {
    initials: "IN",
    name: "initech-cloud",
    region: "ap-south-1",
    usage: 81,
  },
  {
    initials: "UM",
    name: "umbrella-io",
    region: "us-west-2",
    usage: 52,
  },
];

const PLATFORM_STATS = [
  { value: "1,284", label: "Tenants" },
  { value: "$412K", label: "MRR" },
  { value: "99.99%", label: "Uptime" },
];

const SaaSPlatformHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full overflow-hidden bg-white pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-32">
      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="flex flex-col gap-8 sm:gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          {/* Left content */}
          <div className="lg:w-[55%]">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                Digital Transformation / Engineering
              </span>
            </div>

            <h1 className="mb-8 font-inter text-[2rem] leading-[1.1] font-bold tracking-tight xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-gray-900">
                SaaS &amp; Platform
              </span>
              <br />
              <span className="text-primary">Engineering</span>
            </h1>

            <div className="mb-10 flex max-w-2xl gap-4">
              <div className="w-[3px] shrink-0 bg-primary" />

              <p className="text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl">
                We architect multi-tenant SaaS products and the internal
                platforms that ship them. From subscription billing and
                tenant isolation to golden-path developer platforms and
                SRE-grade observability, we engineer the foundations that
                let your product scale from first customer to global rollout.
              </p>
            </div>

            {/* Feature badges */}
            <div className="mb-10 flex flex-wrap gap-3">
              {PLATFORM_FEATURES.map(({ label, Icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  <Icon size={16} className="text-primary" />
                  {label}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="group inline-flex w-full items-center justify-center gap-3 bg-primary px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-dark sm:w-auto"
              >
                <span>Build Your Platform</span>

                <ArrowRight
                  size={20}
                  className="-rotate-45 transition-transform duration-300 group-hover:rotate-0"
                />
              </button>

              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="inline-flex w-full items-center justify-center gap-3 border-2 border-gray-900 px-8 py-3.5 text-base font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white sm:w-auto"
              >
                Book a Platform Review
              </button>
            </div>
          </div>

          {/* Right dashboard illustration */}
          <div className="flex justify-center lg:w-[45%] lg:justify-end">
            <div className="relative w-full max-w-lg">
              <div className="absolute top-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/20 blur-[60px]" />

              <div
                role="img"
                aria-label="Illustrative SaaS control-plane dashboard showing sample tenant, revenue, and uptime metrics"
                className="relative overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-xl sm:p-6"
              >
                {/* Dashboard header */}
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                    <span className="font-mono text-xs text-gray-600">
                      control-plane · healthy
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="border border-gray-300 px-1.5 py-0.5 font-mono text-[9px] tracking-wider text-gray-400 uppercase">
                      sample
                    </span>
                    <span className="font-mono text-xs text-gray-400">
                      v2.14.0
                    </span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="mb-5 grid grid-cols-3 gap-2">
                  {PLATFORM_STATS.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-md border border-gray-200 bg-gray-50 p-2.5 sm:p-3"
                    >
                      <div className="text-base leading-none font-bold text-gray-900 sm:text-lg">
                        {stat.value}
                      </div>

                      <div className="mt-1.5 text-[9px] tracking-wider text-gray-500 uppercase sm:text-[10px]">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tenant list */}
                <div className="space-y-2">
                  {TENANTS.map((tenant) => (
                    <div
                      key={tenant.name}
                      className="flex items-center gap-2.5 rounded-md border border-gray-100 bg-gray-50 px-2.5 py-2.5 sm:gap-3 sm:px-3"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-primary/10">
                        <span className="text-[10px] font-bold text-primary">
                          {tenant.initials}
                        </span>
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="truncate font-mono text-xs text-gray-800">
                          {tenant.name}
                        </div>
                        <div className="font-mono text-[10px] text-gray-400">
                          {tenant.region}
                        </div>
                      </div>

                      <div className="w-14 shrink-0 sm:w-20">
                        <div className="h-1.5 overflow-hidden rounded-full bg-gray-200">
                          <div
                            className="h-full rounded-full bg-primary transition-all duration-500"
                            style={{ width: `${tenant.usage}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Decorative glow */}
                <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaaSPlatformHero;
