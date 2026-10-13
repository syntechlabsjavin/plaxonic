
import {
  CodeXml,
  Network,
  Boxes,
  Radio,
  Lock,
  Workflow,
  Sparkles,
} from "lucide-react";

interface IntegrationService {
  title: string;
  description: string;
  technology: string;
  icon: React.ElementType;
}

const integrationServices: IntegrationService[] = [
  {
    title: "API Design & Development",
    description:
      "Contract-first REST, GraphQL, and gRPC APIs with clean OpenAPI specs, versioning, and developer docs teams actually enjoy using.",
    technology: "REST · GraphQL · gRPC",
    icon: CodeXml,
  },
  {
    title: "Middleware & Orchestration",
    description:
      "Message routing, transformation, and orchestration that turn point-to-point chaos into a managed, observable integration layer.",
    technology: "ESB · Orchestration",
    icon: Network,
  },
  {
    title: "System & App Integration",
    description:
      "Connect ERP, CRM, SaaS, and databases into one fabric, so a change in one system flows everywhere it needs to, instantly.",
    technology: "ERP · CRM · SaaS",
    icon: Boxes,
  },
  {
    title: "Event-Driven & Streaming",
    description:
      "Kafka, pub/sub, and real-time pipelines that move data the moment it changes, with no more batch jobs and stale records.",
    technology: "Kafka · Pub/Sub",
    icon: Radio,
  },
  {
    title: "API Gateway & Security",
    description:
      "Authentication, rate limiting, OAuth2, and threat protection at the edge, so every endpoint is governed and secure by default.",
    technology: "OAuth2 · Rate limiting",
    icon: Lock,
  },
  {
    title: "iPaaS & Automation",
    description:
      "Low-code integration and workflow automation that connect best-of-breed tools without a six-month custom build.",
    technology: "iPaaS · Workflows",
    icon: Workflow,
  },
  {
    title: "AI-Assisted Integration",
    description:
      "Intelligent data mapping and schema matching that accelerate complex integrations, plus anomaly detection on API traffic to catch issues before they spread.",
    technology: "Data mapping · Anomaly detection",
    icon: Sparkles,
  },
];

const APIMiddlewareServices = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-32">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16">
          {/* Left Heading */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
                  What We Deliver
                </span>
              </div>

              <h2 className="font-inter text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-8">
                Make Every System{" "}
                <span className="text-gray-300">
                  Speak The Same Language
                </span>
                .
              </h2>

              <div className="flex gap-4">
                <div className="w-[3px] bg-primary flex-shrink-0" />

                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  Seven integration capabilities that replace brittle exports
                  and manual handoffs with a real-time, governed, secure
                  connectivity layer.
                </p>
              </div>
            </div>
          </div>

          {/* Right Service Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
            {integrationServices.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group relative flex flex-col bg-white border border-gray-200 hover:border-primary/40 transition-colors duration-300 p-7 lg:p-8 overflow-hidden"
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-gray-900 text-lg sm:text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Technology Tag */}
                  <div className="mt-auto pt-5">
                    <span className="inline-flex items-center bg-gray-100 px-3.5 py-1.5 font-mono text-[13px] text-gray-500 group-hover:text-primary transition-colors">
                      {service.technology}
                    </span>
                  </div>

                  {/* Hover Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default APIMiddlewareServices;
