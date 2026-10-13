
import {
  TrendingUp,
  Contact,
  Megaphone,
  LifeBuoy,
  Plug,
  PieChart,
} from "lucide-react";

const capabilities = [
  {
    icon: TrendingUp,
    title: "Sales Pipeline & Deal Management",
    description:
      "We build and manage sales pipelines around your actual sales process. Our team tracks opportunities across stages, assigns ownership, monitors deal activity, and gives sales teams a clear view of what needs attention at every stage.",
    tags: ["Visual Pipelines", "Forecasting", "Quote-To-Cash"],
  },
  {
    icon: Contact,
    title: "Lead & Contact Management",
    description:
      "We help you keep lead and customer information organized in one place. Your teams can track conversations, activities, notes, and follow-ups while getting a complete view of each customer's relationship with your business.",
    tags: ["Lead Scoring", "Unified Profiles", "Activity Timeline"],
  },
  {
    icon: Megaphone,
    title: "Marketing Automation",
    description:
      "We help you automate repetitive marketing activities and connect campaigns with your CRM data. You can set up lead nurturing, audience segmentation, follow-ups, and campaign tracking to manage leads throughout the customer journey.",
    tags: ["Email Journeys", "Segmentation", "Campaign ROI"],
  },
  {
    icon: LifeBuoy,
    title: "Customer Service & Support",
    description:
      "We build CRM workflows that help you manage customer requests and service activities more efficiently. Your support teams can track cases, assign issues, monitor response times, and access relevant customer information throughout the support process.",
    tags: ["Case Management", "SLA Routing", "Knowledge Base"],
  },
  {
    icon: Plug,
    title: "Integrations & Data Sync",
    description:
      "We connect your CRM with the tools your teams already use, including email, ERP, telephony, marketing, and other business systems. Your data stays synchronized across platforms, reducing duplicate work and keeping important information accessible where your teams need it.",
    tags: ["API Connectors", "Two-Way Sync", "ERP & Telephony"],
  },
  {
    icon: PieChart,
    title: "Analytics & Dashboards",
    description:
      "We build reports and dashboards that help you understand sales activity, customer interactions, pipeline performance, and business trends. You can give sales teams, managers, and leadership the information they need for day-to-day decisions.",
    tags: ["Custom Reports", "Revenue Insights", "Role Dashboards"],
  },
];

const CRMCapabilities = () => {
  return (
    <section className="bg-gray-100 py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Header */}
        <div
          className="mb-10 sm:mb-14 lg:mb-16"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  What We Deliver
                </span>
              </div>

              <h2 className="mb-8 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                CRM Capabilities Built Around{" "}
                <span className="text-gray-300">Your Business</span>.
              </h2>

              <div className="flex max-w-2xl gap-4">
                <div className="w-[3px] shrink-0 bg-primary" />

                <p className="text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
                  We build and customize CRM solutions to help your teams
                  manage customer relationships, sales activities, data,
                  and everyday business processes in one place.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Capability Cards */}
        <div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          style={{ opacity: 1 }}
        >
          {capabilities.map((capability) => {
            const Icon = capability.icon;

            return (
              <div
                key={capability.title}
                className="group relative flex flex-col overflow-hidden border border-gray-200 bg-white p-6 transition-colors duration-300 hover:border-primary/40 sm:p-8 lg:p-9"
                style={{ opacity: 1, transform: "none" }}
              >
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 shrink-0 items-center justify-center bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                  <Icon
                    className="h-6 w-6 text-primary"
                    aria-hidden="true"
                  />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-primary sm:text-xl">
                  {capability.title}
                </h3>

                {/* Description */}
                <p className="mb-5 text-sm leading-relaxed text-gray-600 lg:text-base">
                  {capability.description}
                </p>

                {/* Tags */}
                <div className="mt-auto flex flex-wrap gap-2 border-t border-gray-100 pt-5">
                  {capability.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center border border-gray-300 px-2.5 py-1 text-xs font-medium text-gray-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CRMCapabilities;
