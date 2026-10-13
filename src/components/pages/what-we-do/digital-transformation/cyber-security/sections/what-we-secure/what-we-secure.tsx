import { useState } from "react";
import {
  Crosshair,
  Bug,
  ShieldAlert,
  FileSearch,
  ShieldCheck,
  Cloud,
  LockKeyhole,
  Server,
  Activity,
  Radio,
  Siren,
  Search,
} from "lucide-react";

const securityCategories = [
  {
    label: "Offensive Security",
    number: "01",
    heading: "Find What Attackers Would Find, First.",
    services: [
      {
        icon: Crosshair,
        title: "Penetration Testing",
        description:
          "Goal-driven testing of apps, networks, and APIs that surfaces exploitable weaknesses before attackers do.",
      },
      {
        icon: Bug,
        title: "Vulnerability Assessment",
        description:
          "Continuous scanning with prioritized remediation, so the gaps that matter most close first.",
      },
      {
        icon: ShieldAlert,
        title: "Red Teaming",
        description:
          "Adversary-simulated campaigns testing people, process, and technology against real scenarios.",
      },
      {
        icon: FileSearch,
        title: "Application Security Reviews",
        description:
          "Secure code review and threat modeling that build security into the development lifecycle.",
      },
    ],
  },
  {
    label: "Defensive & Cloud",
    number: "02",
    heading: "Build Security Into Every Layer.",
    services: [
      {
        icon: ShieldCheck,
        title: "Cloud Security",
        description:
          "Secure cloud environments, configurations, identities, and workloads to reduce exposure across your infrastructure.",
      },
      {
        icon: Cloud,
        title: "Cloud Security Posture Management",
        description:
          "Identify cloud misconfigurations, enforce security policies, and continuously improve your cloud security posture.",
      },
      {
        icon: LockKeyhole,
        title: "Identity & Access Management",
        description:
          "Protect sensitive resources with least-privilege access, strong authentication, and identity governance.",
      },
      {
        icon: Server,
        title: "Infrastructure Hardening",
        description:
          "Strengthen servers, networks, and endpoints with secure configurations and consistent security controls.",
      },
    ],
  },
  {
    label: "Detect & Respond",
    number: "03",
    heading: "Detect Threats. Respond With Confidence.",
    services: [
      {
        icon: Activity,
        title: "Security Monitoring",
        description:
          "Monitor systems and security signals continuously to identify suspicious activity before it escalates.",
      },
      {
        icon: Radio,
        title: "Managed Detection & Response",
        description:
          "Combine security expertise and threat detection to investigate incidents and respond quickly.",
      },
      {
        icon: Siren,
        title: "Incident Response",
        description:
          "Contain threats, investigate root causes, and restore operations with a structured incident response process.",
      },
      {
        icon: Search,
        title: "Threat Hunting",
        description:
          "Proactively investigate systems and telemetry to uncover hidden threats that automated alerts may miss.",
      },
    ],
  },
];

const WhatWeSecure = () => {
  const [activeTab, setActiveTab] = useState(0);

  const activeCategory = securityCategories[activeTab];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Heading */}
        <div className="mb-10 max-w-3xl sm:mb-12">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              What We Secure
            </span>
          </div>

          <h2 className="font-inter text-[2rem] font-bold leading-[1.1] tracking-tight text-gray-900 xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            What We <span className="text-gray-300">Secure</span>.
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="mb-12 flex flex-wrap gap-2 border-b border-gray-200">
          {securityCategories.map((category, index) => (
            <button
              key={category.label}
              type="button"
              onClick={() => setActiveTab(index)}
              aria-pressed={activeTab === index}
              className={`relative px-5 py-4 text-sm font-semibold transition-colors sm:text-base ${
                activeTab === index
                  ? "text-gray-900"
                  : "text-gray-400 hover:text-gray-700"
              }`}
            >
              {category.label}

              {activeTab === index && (
                <span className="absolute -bottom-px left-0 right-0 h-[3px] bg-primary" />
              )}
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <div
          key={activeCategory.number}
          className="grid grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16"
        >
          {/* Category Introduction */}
          <div className="lg:sticky lg:top-32">
            <span className="font-inter text-5xl font-bold leading-none tabular-nums text-gray-100 sm:text-6xl">
              {activeCategory.number}
            </span>

            <p className="mt-5 max-w-xs font-inter text-xl font-bold leading-snug tracking-tight text-gray-900 sm:text-2xl lg:text-3xl">
              {activeCategory.heading}
            </p>
          </div>

          {/* Services List */}
          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {activeCategory.services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group flex items-start gap-5 py-6 lg:py-7"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                    <Icon
                      className="h-6 w-6 text-primary"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h3 className="mb-1.5 text-base font-semibold text-gray-900 transition-colors duration-300 group-hover:text-primary lg:text-lg">
                      {service.title}
                    </h3>

                    <p className="max-w-2xl text-sm leading-relaxed text-gray-600">
                      {service.description}
                    </p>
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

export default WhatWeSecure;