import { ArrowRight, Check } from "lucide-react";

const supportPlans = [
  {
    name: "Essential",
    responseSla: "Next Business Day",
    tagline: "Keep the lights on.",
    description:
      "Dependable upkeep for stable systems that need a reliable safety net.",
    features: [
      "Business-hours support",
      "Monthly maintenance & updates",
      "Email & ticket support",
      "Security patching",
      "Monthly status report",
    ],
    featured: false,
    theme: "light",
  },
  {
    name: "Business",
    responseSla: "< 4 hours",
    tagline: "Stay ahead of issues.",
    description:
      "Proactive monitoring and priority response for business-critical software.",
    features: [
      "Extended-hours support",
      "24/7 proactive monitoring",
      "Priority incident response",
      "Performance optimization",
      "Bi-weekly reporting & reviews",
    ],
    featured: true,
    theme: "dark",
  },
  {
    name: "Enterprise 24/7",
    responseSla: "< 15 minutes",
    tagline: "Mission-critical, always on.",
    description:
      "A dedicated team and the tightest SLAs for systems that can never go down.",
    features: [
      "24/7/365 coverage",
      "Dedicated support team",
      "<15 min critical response",
      "Full monitoring & security ops",
      "Quarterly architecture reviews",
    ],
    featured: false,
    theme: "light",
  },
] as const;

export default function SupportPlans() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 lg:mb-16">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Support Plans
            </span>
          </div>

          <h2 className="mb-6 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Coverage That{" "}
            <span className="text-gray-300">Fits How You Run</span>.
          </h2>

          <p className="text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
            Three tiers, each backed by a clear SLA. Not sure which fits? Start
            with a free health check and we'll recommend the right level.
          </p>
        </div>

        {/* Support plan cards */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3 lg:gap-8">
          {supportPlans.map((plan) => {
            const isFeatured = plan.featured;

            return (
              <div
                key={plan.name}
                className={`relative flex flex-col border p-6 transition-colors duration-300 sm:p-8 lg:p-10 ${
                  isFeatured
                    ? "border-gray-900 bg-gray-900 shadow-2xl lg:-mt-4 lg:mb-0"
                    : "border-gray-200 bg-white hover:border-primary/40"
                }`}
              >
                {/* Featured plan accent */}
                {isFeatured && (
                  <>
                    <div className="absolute -top-px left-0 right-0 h-1 bg-primary" />

                    <span className="absolute right-6 top-6 bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                      Most popular
                    </span>
                  </>
                )}

                {/* Plan name */}
                <div
                  className={`mb-3 text-sm font-semibold uppercase tracking-[0.18em] ${
                    isFeatured ? "text-primary-light" : "text-primary"
                  }`}
                >
                  {plan.name}
                </div>

                {/* SLA */}
                <div className="mb-1">
                  <div
                    className={`mb-1 text-[11px] uppercase tracking-wider ${
                      isFeatured ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    Response SLA
                  </div>

                  <div
                    className={`font-inter text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl ${
                      isFeatured ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.responseSla}
                  </div>
                </div>

                {/* Description */}
                <p
                  className={`mb-7 mt-5 text-sm leading-relaxed ${
                    isFeatured ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <span
                    className={`font-medium ${
                      isFeatured ? "text-gray-200" : "text-gray-900"
                    }`}
                  >
                    {plan.tagline}
                  </span>{" "}
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="mb-9 space-y-3.5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-3 text-sm ${
                        isFeatured ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <Check
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"
                        strokeWidth={2}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  type="button"
                  onClick={() =>
                    (window.location.href = `/contact?plan=${encodeURIComponent(
                      plan.name
                    )}`)
                  }
                  className={`group mt-auto inline-flex h-12 items-center justify-center gap-2 px-6 text-sm font-semibold transition-colors ${
                    isFeatured
                      ? "bg-primary text-white hover:bg-primary-dark"
                      : "border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                  }`}
                >
                  Choose {plan.name}

                  <ArrowRight
                    aria-hidden="true"
                    className="-rotate-45 h-4 w-4 transition-transform duration-300 group-hover:rotate-0"
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}