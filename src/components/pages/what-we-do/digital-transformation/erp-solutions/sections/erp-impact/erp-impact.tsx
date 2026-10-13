
import React from "react";
import {
  Workflow,
  ShieldCheck,
  Factory,
  RefreshCw,
} from "lucide-react";

interface ImpactStat {
  value: string;
  label: string;
}

interface ImpactFeature {
  title: string;
  description: string;
  icon: React.ElementType;
}

const impactStats: ImpactStat[] = [
  {
    value: "−40%",
    label: "faster month-end financial close",
  },
  {
    value: "+30%",
    label: "improvement in inventory accuracy",
  },
  {
    value: "1",
    label: "source of truth across departments",
  },
  {
    value: "99.9%",
    label: "reconciled, trustworthy data",
  },
];

const impactFeatures: ImpactFeature[] = [
  {
    title: "Process-First Delivery",
    description:
      "We fix the operating model before configuring software, so the ERP fits the business.",
    icon: Workflow,
  },
  {
    title: "Zero-Disruption Cutovers",
    description:
      "Phased rollouts and reconciled migrations keep operations running through go-live.",
    icon: ShieldCheck,
  },
  {
    title: "Industry Depth",
    description:
      "Hands-on expertise across manufacturing, distribution, and multi-entity finance.",
    icon: Factory,
  },
  {
    title: "Integrations That Hold",
    description:
      "Resilient, monitored connections keep every downstream system in lockstep.",
    icon: RefreshCw,
  },
];

const ERPImpact: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black py-16 sm:py-20 md:py-24 lg:py-36">
      {/* Background image and overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/what-we-do/erp6.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Blue glow effects */}
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        <div
          className="absolute left-1/3 top-0 h-[400px] w-[600px] rounded-full blur-[150px]"
          style={{
            background: "rgb(27, 163, 221)",
            opacity: 0.16,
          }}
        />

        <div
          className="absolute -bottom-32 -right-20 h-[480px] w-[480px] rounded-full blur-[150px]"
          style={{
            background: "rgb(27, 163, 221)",
            opacity: 0.12,
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-[2] mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Heading and statistics */}
        <div className="mb-14 grid grid-cols-1 items-center gap-10 sm:mb-20 sm:gap-12 lg:mb-24 lg:grid-cols-2 lg:gap-16">
          {/* Heading */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                The Plaxonic Impact
              </span>
            </div>

            <h2 className="mb-6 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              An ERP That Pays{" "}
              <span className="text-primary">For Itself</span>.
            </h2>

            <div className="flex max-w-xl gap-4">
              <div className="w-[3px] shrink-0 bg-primary" />

              <p className="text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg">
                The return on a well-run ERP isn't a line item—it's faster
                closes, leaner inventory, and decisions made on numbers
                everyone trusts. Here's what our clients typically see.
              </p>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-8 sm:gap-y-10">
            {impactStats.map((stat) => (
              <div key={stat.label} className="p-2">
                <div className="mb-3 font-inter text-4xl font-bold leading-none text-primary sm:text-5xl lg:text-5xl xl:text-6xl">
                  {stat.value}
                </div>

                <div className="text-sm leading-snug text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-8 max-w-2xl text-xs leading-relaxed text-gray-400">
          Illustrative figures based on typical engagements. Your baseline and
          targets are modeled up front, never promised blind.
        </p>

        {/* Feature cards */}
        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 border-t border-white/10 pt-10 sm:grid-cols-2 sm:pt-14 lg:grid-cols-4">
          {impactFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <div key={feature.title} className="group">
                <Icon
                  size={24}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="mb-5 h-6 w-6 text-gray-500 transition-colors duration-300 group-hover:text-primary-light"
                />

                <h3 className="mb-2 text-lg font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ERPImpact;
