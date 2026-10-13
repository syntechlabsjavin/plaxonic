import {
  Building2,
  Workflow,
  LayoutDashboard,
  Database,
  RefreshCw,
  Boxes,
  Sparkles,
} from "lucide-react";

const softwareTypes = [
  {
    number: "01",
    icon: Building2,
    title: "Custom Enterprise Applications",
    description:
      "Bespoke line-of-business platforms engineered around your exact operating model, for the cases where off-the-shelf software forces compromises you can't afford.",
  },
  {
    number: "02",
    icon: Workflow,
    title: "Workflow & Process Automation",
    description:
      "Digitize complex approvals, operations, and back-office processes, removing manual handoffs and the errors that come with them.",
  },
  {
    number: "03",
    icon: LayoutDashboard,
    title: "Enterprise Portals & Dashboards",
    description:
      "Unified portals for employees, customers, and partners, with role-based access and real-time operational visibility.",
  },
  {
    number: "04",
    icon: Database,
    title: "Data & Analytics Platforms",
    description:
      "Pipelines, warehouses, and BI that turn fragmented enterprise data into governed, decision-ready insight.",
  },
  {
    number: "05",
    icon: RefreshCw,
    title: "Legacy Modernization",
    description:
      "Re-platform aging monoliths into cloud-native systems incrementally, without halting the business that depends on them.",
  },
  {
    number: "06",
    icon: Boxes,
    title: "Cloud-Native & Microservices",
    description:
      "Distributed, containerized architectures built to scale elastically and evolve service-by-service over time.",
  },
  {
    number: "07",
    icon: Sparkles,
    title: "AI-Enabled Enterprise Applications",
    description:
      "Line-of-business applications with intelligence built in, from in-app copilots and intelligent automation to document processing and predictive analytics, engineered with attention to accuracy, privacy, and cost.",
  },
];

const WhatWeBuild=()=> {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Heading */}
        <div className="mb-10 max-w-3xl sm:mb-14">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              What We Build
            </span>
          </div>

          <h2 className="mb-8 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-6xl lg:text-7xl">
            Software That{" "}
            <span className="text-gray-300">
              Runs The Enterprise
            </span>
            .
          </h2>

          <div className="flex gap-4">
            <div className="w-[3px] flex-shrink-0 bg-primary" />

            <p className="text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
              Seven kinds of enterprise software we design and
              engineer, each built for the scale, security, and
              longevity large organizations demand.
            </p>
          </div>
        </div>

        {/* Software Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {softwareTypes.map((software) => {
            const Icon = software.icon;

            return (
              <div
                key={software.number}
                className="group relative flex flex-col overflow-hidden border border-gray-200 bg-white p-8 transition-colors duration-300 hover:border-primary/40"
              >
                {/* Background Number */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-4 right-3 select-none font-inter text-[120px] font-bold leading-none text-gray-100 transition-colors duration-300 group-hover:text-primary/10"
                >
                  {software.number}
                </span>

                {/* Icon */}
                <div className="relative mb-6 flex h-14 w-14 items-center justify-center bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon
                    className="h-6 w-6"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </div>

                {/* Title */}
                <h3 className="relative mb-3 text-xl font-semibold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-primary">
                  {software.title}
                </h3>

                {/* Description */}
                <p className="relative text-sm leading-relaxed text-gray-600">
                  {software.description}
                </p>

                {/* Hover Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhatWeBuild;