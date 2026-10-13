
import React from "react";
import {
  Layers,
  Wrench,
  CodeXml,
  LifeBuoy,
} from "lucide-react";

interface EngagementModel {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const engagementModels: EngagementModel[] = [
  {
    number: "01",
    title: "End-to-End Implementation",
    description:
      "We take you from platform selection through process design, migration, and go-live—a complete rollout owned end to end.",
    icon: Layers,
  },
  {
    number: "02",
    title: "ERP Rescue & Optimization",
    description:
      "A focused engagement to stabilize a troubled or underused ERP—reconciling data, fixing processes, and restoring trust in the numbers.",
    icon: Wrench,
  },
  {
    number: "03",
    title: "Custom ERP Development",
    description:
      "A bespoke platform engineered around your exact operating model, for when no off-the-shelf suite fits how you really run.",
    icon: CodeXml,
  },
  {
    number: "04",
    title: "Managed ERP & Support",
    description:
      "Ongoing administration, optimization, and hypercare that keeps the platform evolving with the business after go-live.",
    icon: LifeBuoy,
  },
];

const ERPEngagementModels: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section heading */}
        <div className="mb-10 max-w-3xl sm:mb-14 lg:mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              How We Engage
            </span>
          </div>

          <h2 className="mb-8 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-6xl lg:text-7xl">
            Engagement Models That{" "}
            <span className="text-gray-300">Fit How You Work</span>.
          </h2>

          <div className="flex gap-4">
            <div className="w-[3px] shrink-0 bg-primary" />

            <p className="text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
              Whether you're replacing a tangle of legacy systems, rescuing a
              stalled implementation, or extending an ERP you already run, we
              structure the engagement around where you are.
            </p>
          </div>
        </div>

        {/* Engagement model cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {engagementModels.map((model) => {
            const Icon = model.icon;

            return (
              <div
                key={model.number}
                className="group relative flex flex-col overflow-hidden border border-gray-200 bg-white p-6 transition-colors duration-300 hover:border-primary/40 sm:p-8"
              >
                {/* Icon and number */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                    <Icon
                      size={24}
                      strokeWidth={2}
                      aria-hidden="true"
                      className="h-6 w-6 text-primary"
                    />
                  </div>

                  <span className="font-inter text-3xl font-bold tabular-nums text-gray-100 transition-colors duration-300 group-hover:text-primary/20">
                    {model.number}
                  </span>
                </div>

                {/* Card content */}
                <h3 className="mb-3 text-lg font-semibold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-primary">
                  {model.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-600">
                  {model.description}
                </p>

                {/* Bottom hover accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ERPEngagementModels;
