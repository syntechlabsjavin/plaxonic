import {
  MousePointerClick,
  Bot,
  Gauge,
  ShieldAlert,
  Webhook,
  Smartphone,
  Accessibility,
  Eye,
} from "lucide-react";

const testingServices = [
  {
    title: "Functional & Regression Testing",
    description:
      "Every feature verified against requirements, and a regression net that keeps shipped functionality from breaking as you move fast.",
    technology: "Manual + automated",
    Icon: MousePointerClick,
  },
  {
    title: "Test Automation",
    description:
      "Resilient, maintainable automation suites in Selenium, Cypress, and Playwright, wired into CI so they run on every commit.",
    technology: "Selenium + Cypress + Playwright",
    Icon: Bot,
  },
  {
    title: "Performance & Load Testing",
    description:
      "Find the breaking point before your users do. Load, stress, and soak testing with JMeter and k6 to validate scale.",
    technology: "JMeter + k6 + Gatling",
    Icon: Gauge,
  },
  {
    title: "Security Testing",
    description:
      "Vulnerability scanning, penetration testing, and OWASP-aligned checks baked into the QA cycle, not bolted on after.",
    technology: "OWASP + DAST + SAST",
    Icon: ShieldAlert,
  },
  {
    title: "API & Integration Testing",
    description:
      "Contract, schema, and end-to-end API validation with Postman and REST-assured, so services talk to each other correctly.",
    technology: "Postman + REST-assured",
    Icon: Webhook,
  },
  {
    title: "Mobile App Testing",
    description:
      "Real-device and emulator coverage across iOS and Android, with Appium automation for gestures, networks, and OS versions.",
    technology: "Appium + real devices",
    Icon: Smartphone,
  },
  {
    title: "Accessibility Testing",
    description:
      "WCAG 2.2 and ADA conformance audits so your product works for everyone, and keeps you on the right side of compliance.",
    technology: "WCAG 2.2 + ADA",
    Icon: Accessibility,
  },
  {
    title: "Usability & Visual QA",
    description:
      "Pixel-level visual regression and usability validation that protects the experience your designers intended.",
    technology: "Visual regression",
    Icon: Eye,
  },
];

const WhatWeTest = () => {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Heading */}
        <div className="mb-10 max-w-3xl sm:mb-14 lg:mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              What We Test
            </span>
          </div>

          <h2 className="mb-8 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-6xl lg:text-7xl">
            Testing Across{" "}
            <span className="text-gray-300">Every Layer</span>.
          </h2>

          <div className="flex gap-4">
            <div className="w-[3px] flex-shrink-0 bg-primary" />

            <p className="text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
              From the smallest unit to the full user journey, we cover the
              surfaces where quality actually breaks, functional, performance,
              security, and everything between.
            </p>
          </div>
        </div>

        {/* Testing Service Cards */}
        <div className="grid grid-cols-1 gap-px border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-4">
          {testingServices.map(({ title, description, technology, Icon }) => (
            <div
              key={title}
              className="group relative bg-white p-7 transition-colors duration-300 hover:bg-gray-50 lg:p-8"
            >
              {/* Icon */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>

              {/* Title */}
              <h3 className="mb-2.5 font-inter text-lg font-bold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-primary">
                {title}
              </h3>

              {/* Description */}
              <p className="mb-5 text-sm leading-relaxed text-gray-600">
                {description}
              </p>

              {/* Technology */}
              <span className="inline-block w-full border-t border-gray-100 pt-3 font-mono text-[13px] text-gray-500">
                {technology}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeTest;