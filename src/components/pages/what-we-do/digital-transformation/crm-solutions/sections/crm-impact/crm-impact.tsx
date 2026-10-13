
import { useEffect, useRef, useState } from "react";
import {
  Award,
  ShieldCheck,
  UserCheck,
  RefreshCw,
} from "lucide-react";

const impactStats = [
  {
    value: "+32%",
    label: "Sales win-rate improvement",
  },
  {
    value: "-45%",
    label: "Less time spent on manual tasks",
  },
  {
    value: "360°",
    label: "Complete customer view",
  },
  {
    value: "5x",
    label: "Faster lead response",
  },
];

const impactFeatures = [
  {
    title: "Certified CRM Specialists",
    description:
      "Our team brings hands-on experience across leading CRM platforms, with the technical expertise to implement, customize, and integrate CRM software around your business requirements.",
    Icon: Award,
  },
  {
    title: "Data-Ready CRM Migrations",
    description:
      "We prepare your data before migration by cleaning records, resolving duplicates, mapping fields, and validating the transfer. Your new CRM starts with organized and usable customer information.",
    Icon: ShieldCheck,
  },
  {
    title: "Adoption Built Into the Rollout",
    description:
      "We involve your teams throughout implementation and provide role-based training, practical guidance, and support to help you use the CRM in your day-to-day work.",
    Icon: UserCheck,
  },
  {
    title: "Reliable CRM Integrations",
    description:
      "We connect your CRM with the systems your business already uses and configure data syncs to keep customer and operational information consistent across connected platforms.",
    Icon: RefreshCw,
  },
];

const CRMImpact = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-black py-16 sm:py-20 md:py-24 lg:py-36"
    >
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div
          className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full blur-[150px]"
          style={{
            background: "#1ba3dd",
            opacity: 0.2,
          }}
        />

        <div
          className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full blur-[150px]"
          style={{
            background: "#1ba3dd",
            opacity: 0.14,
          }}
        />
      </div>

      <div className="relative z-[2] mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Heading */}
        <div
          className={`mb-10 max-w-3xl transition-all duration-700 sm:mb-14 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              The Plaxonic Impact
            </span>
          </div>

          <h2 className="font-inter text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            CRM Solutions Built For{" "}
            <span className="text-primary">
              Measurable Impact
            </span>
            .
          </h2>
        </div>

        {/* Impact statistics */}
        <div
          className={`mb-10 grid grid-cols-2 gap-px border border-white/10 bg-white/10 transition-all delay-100 duration-700 sm:mb-14 lg:mb-16 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          } lg:grid-cols-4`}
        >
          {impactStats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-black p-5 transition-colors duration-300 hover:bg-white/[0.03] sm:p-7 lg:p-9"
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="mb-3 font-inter text-3xl font-bold leading-none text-primary sm:text-4xl lg:text-5xl xl:text-6xl">
                {stat.value}
              </div>

              <div className="text-sm leading-snug text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-8 max-w-2xl text-xs leading-relaxed text-gray-400">
          Illustrative figures based on typical engagements. Your
          baseline and targets are defined during planning, giving
          you clear measures to track throughout the CRM implementation.
        </p>

        {/* Feature cards */}
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {impactFeatures.map((feature, index) => {
            const Icon = feature.Icon;

            return (
              <div
                key={feature.title}
                className={`group transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: `${200 + index * 120}ms`,
                }}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center bg-primary/15 transition-colors duration-300 group-hover:bg-primary/25">
                  <Icon
                    className="h-6 w-6 text-primary"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </div>

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

export default CRMImpact;
