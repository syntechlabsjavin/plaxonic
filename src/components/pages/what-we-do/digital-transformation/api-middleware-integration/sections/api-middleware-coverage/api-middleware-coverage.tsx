
import { Boxes, GitBranch, Workflow } from "lucide-react";

interface Technology {
  name: string;
  logo?: string;
}

interface CoverageCategory {
  title: string;
  icon: typeof Boxes;
  technologies: Technology[];
}

const coverageCategories: CoverageCategory[] = [
  {
    title: "Platforms We Integrate",
    icon: Boxes,
    technologies: [
      {
        name: "Salesforce",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg",
      },
      { name: "SAP", logo: "https://cdn.simpleicons.org/sap" },
      {
        name: "Oracle NetSuite",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
      },
      { name: "Microsoft Dynamics" },
      { name: "Workday" },
      { name: "Stripe", logo: "https://cdn.simpleicons.org/stripe" },
      { name: "HubSpot", logo: "https://cdn.simpleicons.org/hubspot" },
      { name: "ServiceNow" },
      { name: "Shopify", logo: "https://cdn.simpleicons.org/shopify" },
      { name: "Custom In-House Systems" },
    ],
  },
  {
    title: "Standards & Protocols",
    icon: GitBranch,
    technologies: [
      { name: "REST" },
      { name: "GraphQL", logo: "https://cdn.simpleicons.org/graphql" },
      {
        name: "gRPC",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grpc/grpc-plain.svg",
      },
      { name: "SOAP" },
      { name: "WebSockets" },
      { name: "Webhooks" },
      { name: "EDI (X12, EDIFACT)" },
      { name: "HL7 & FHIR" },
      { name: "ISO 20022" },
      {
        name: "OAuth 2.0 / OIDC",
        logo: "https://cdn.simpleicons.org/openid",
      },
    ],
  },
  {
    title: "Integration Patterns",
    icon: Workflow,
    technologies: [
      { name: "API-Led Connectivity" },
      { name: "Event-Driven Architecture" },
      { name: "Batch & Real-Time Sync" },
      { name: "Strangler Pattern (Legacy Migration)" },
      { name: "Saga Pattern (Distributed Transactions)" },
    ],
  },
];

const APIMiddlewareCoverage = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Heading */}
        <div className="mb-10 max-w-3xl sm:mb-14 lg:mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Coverage
            </span>
          </div>

          <h2 className="mb-8 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
            The Systems And Standards We{" "}
            <span className="text-gray-300">Speak Fluently</span>.
          </h2>

          <div className="flex gap-4">
            <div className="w-[3px] shrink-0 bg-primary" />

            <p className="text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
              Integration depth is measured by how many things you can connect,
              and how well. These are the platforms, protocols, and patterns
              our teams work across every day.
            </p>
          </div>
        </div>

        {/* Coverage Categories */}
        <div className="grid grid-cols-1 gap-px border border-gray-200 bg-gray-200 md:grid-cols-3">
          {coverageCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="bg-white p-8 lg:p-10"
              >
                {/* Category Heading */}
                <div className="mb-7 flex items-center gap-3">
                  <Icon
                    className="h-5 w-5 text-gray-500"
                    strokeWidth={1.5}
                  />

                  <h3 className="font-inter text-lg font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                {/* Technology Chips */}
                <ul className="flex flex-wrap gap-2.5">
                  {category.technologies.map((technology) => (
                    <li
                      key={technology.name}
                      className="group/chip inline-flex items-center gap-2 border border-gray-200 bg-gray-50 px-3.5 py-2 text-sm font-medium text-gray-700 transition-colors duration-300 hover:border-primary/40 hover:text-primary"
                    >
                      {technology.logo ? (
                        <img
                          src={technology.logo}
                          alt=""
                          aria-hidden="true"
                          loading="lazy"
                          className="h-4 w-4 shrink-0 object-contain"
                        />
                      ) : (
                        <Icon
                          className="h-4 w-4 shrink-0 text-gray-400 transition-colors group-hover/chip:text-primary"
                          strokeWidth={1.5}
                        />
                      )}

                      <span>{technology.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default APIMiddlewareCoverage;
