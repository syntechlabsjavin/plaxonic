import { ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    tag: "IoT & Edge",
    title: "Smart Metering & Grid Telemetry",
    description:
      "The sensing layer that turns meters, feeders, and substations into a live picture, ingesting readings by the billion and pushing detection to the edge so an overload or a fault is caught next to the asset, not in an overnight batch.",
    href: "/services/internet-of-things",
  },
  {
    tag: "Data & Analytics",
    title: "Unified Grid & Asset Data",
    description:
      "One real-time view drawn from the SCADA, GIS, and billing systems that never agreed, so a single question about a transformer's health or a customer's outage does not take three exports and a spreadsheet to answer.",
    href: "/services/data-science-analytics",
  },
  {
    tag: "Machine Learning",
    title: "Load Forecasting & Demand Response",
    description:
      "Models that read weather, behavior, and behind-the-meter generation to forecast demand and orchestrate response, so you dispatch and curtail on real intent instead of last year's average, before the peak breaks a record.",
    href: "/services/machine-learning",
  },
  {
    tag: "Digital Twins",
    title: "Grid Simulation & Predictive Maintenance",
    description:
      "A living model of the network and its assets that runs what-if before you commit and flags the transformer that will fail before it does, so maintenance becomes condition-based and the healthy unit is not replaced early.",
    href: "/services/digital-twins",
  },
  {
    tag: "Integration",
    title: "SCADA, GIS & OT/IT Integration",
    description:
      "The connective layer between the control room, the asset map, and the enterprise, so the grid the operator sees, the network the planner maps, and the meter data the billing system holds stay in sync instead of drifting apart.",
    href: "/services/middleware-integration-services",
  },
  {
    tag: "Cloud & Security",
    title: "Resilient, Secure Grid Infrastructure",
    description:
      "Cloud that scales to the peak and holds through the storm, hardened for critical infrastructure with the observability and OT security to keep the network stable and defended when the load is highest and the stakes are the lights staying on.",
    href: "/services/cybersecurity",
  },
] as const;

const WhatWeBuild = () => {
  return (
    <section className="bg-white py-24 lg:py-36">
      <div className="max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="max-w-3xl mb-14 lg:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
              What We Build
            </span>
          </div>
          <h2 className="font-inter text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-6">
            Engineering That Balances The{" "}
            <span className="text-primary">Grid</span>.
          </h2>
          <div className="flex gap-4">
            <div className="w-[3px] flex-shrink-0 bg-primary" />
            <p className="text-gray-600 text-lg leading-relaxed">
              We build across generation, transmission, and distribution,
              covering grid telemetry, unified asset and network data,
              forecasting models, control room integration, and the secure
              infrastructure underneath them.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <a
              key={service.href}
              href={service.href}
              className="group relative flex h-full flex-col overflow-hidden border border-gray-200 bg-white p-7 lg:p-8 hover:border-primary/40 hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-300"
            >
              <span className="inline-flex self-start bg-primary px-3 py-1 text-white text-xs font-medium uppercase tracking-wider mb-5">
                {service.tag}
              </span>

              <h3 className="font-inter text-xl lg:text-2xl font-bold text-gray-900 leading-snug mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm lg:text-base leading-relaxed flex-1">
                {service.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-primary">
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Explore
                </span>
                <ArrowUpRight
                  className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300"
                  aria-hidden="true"
                />
              </div>

              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;