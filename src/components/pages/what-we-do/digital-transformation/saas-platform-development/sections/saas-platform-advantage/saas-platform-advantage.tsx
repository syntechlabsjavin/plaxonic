
import {
  Boxes,
  Gauge,
  ShieldCheck,
  Coins,
  FileCheck,
} from "lucide-react";

interface AdvantageStat {
  value: string;
  label: string;
}

interface AdvantageItem {
  title: string;
  description: string;
  icon: typeof Boxes;
}

const ADVANTAGE_STATS: AdvantageStat[] = [
  { value: "5x", label: "Faster deploys" },
  { value: "60%", label: "Lower infra cost" },
  { value: "99.99%", label: "Platform SLA" },
  { value: "10M+", label: "Tenants served" },
];

const ADVANTAGE_ITEMS: AdvantageItem[] = [
  {
    title: "Tenancy-first design",
    description:
      "Isolation, data residency, and per-tenant limits modeled before a line of product code, no costly re-platforming later.",
    icon: Boxes,
  },
  {
    title: "Developer velocity, by default",
    description:
      "Golden paths and self-service environments take teams from commit to production in minutes, not change-review weeks.",
    icon: Gauge,
  },
  {
    title: "Reliability as a metric",
    description:
      "SLOs and error budgets make reliability measurable and negotiable, so you ship fast without flying blind.",
    icon: ShieldCheck,
  },
  {
    title: "Cost-aware scaling",
    description:
      "FinOps guardrails, autoscaling, and right-sizing keep the cloud bill flat while traffic multiplies.",
    icon: Coins,
  },
  {
    title: "Compliance-ready",
    description:
      "SOC 2, GDPR, and HIPAA controls baked into the platform, audit evidence is generated, not scrambled for.",
    icon: FileCheck,
  },
];

const SaaSPlatformAdvantage = () => {
  return (
    <section className="bg-gray-100 py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-[0.95fr_1.3fr] lg:gap-20">
          {/* Left content panel */}
          <div className="self-start lg:sticky lg:top-32">
            <div className="relative overflow-hidden p-6 sm:p-8 lg:p-10">
              <img
                src="/src/assets/saas-platform-development/advantage.png"
                alt="Abstract pastel platform visual"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/40" />

              <div className="relative z-10">
                {/* Section label */}
                <div className="mb-6 flex items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    Why Plaxonic
                  </span>
                </div>

                {/* Heading */}
                <h2 className="mb-8 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-6xl">
                  The Platform{" "}
                  <span className="text-gray-400">Advantage</span>.
                </h2>

                {/* Description */}
                <div className="flex max-w-xl gap-4">
                  <div className="w-[3px] shrink-0 bg-primary" />

                  <p className="text-sm leading-relaxed text-gray-700 sm:text-base md:text-lg">
                    We don't just hand over infrastructure, we hand over
                    leverage. The platforms we build make every future team
                    faster, safer, and cheaper to run.
                  </p>
                </div>

                {/* Statistics */}
                <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-gray-900/10 pt-10">
                  {ADVANTAGE_STATS.map((stat) => (
                    <div key={stat.label}>
                      <div className="mb-1 font-inter text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                        {stat.value}
                      </div>

                      <div className="text-sm text-gray-900">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Disclaimer */}
                <p className="mt-8 max-w-2xl text-xs leading-relaxed text-gray-500">
                  Illustrative figures based on typical engagements. Your
                  baseline and targets are modeled up front, never promised
                  blind.
                </p>
              </div>
            </div>
          </div>

          {/* Right advantage list */}
          <div className="divide-y divide-gray-300 border-y border-gray-300">
            {ADVANTAGE_ITEMS.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative flex gap-4 px-2 py-7 transition-all duration-300 hover:bg-white hover:px-4 sm:gap-6 sm:hover:px-6 lg:py-8"
                >
                  {/* Icon */}
                  <div className="flex shrink-0 items-start">
                    <div className="flex h-12 w-12 items-center justify-center border border-gray-200 bg-white transition-colors duration-300 group-hover:border-primary group-hover:bg-primary">
                      <Icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-white" />
                    </div>
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-primary sm:text-xl">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                      {item.description}
                    </p>
                  </div>

                  {/* Hover accent */}
                  <div className="absolute bottom-0 left-0 top-0 w-[3px] origin-center scale-y-0 bg-primary transition-transform duration-300 group-hover:scale-y-100" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaaSPlatformAdvantage;
