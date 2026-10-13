
import {
  DoorOpen,
  Radio,
  Boxes,
  FileCode2,
} from "lucide-react";

interface Technology {
  name: string;
  logo?: string;
  logoAlt?: string;
  special?: boolean;
  wrapperClass?: string;
  textClass?: string;
}

interface TechnologyCategory {
  title: string;
  icon: React.ElementType;
  technologies: Technology[];
}

const technologyCategories: TechnologyCategory[] = [
  {
    title: "API Gateways",
    icon: DoorOpen,
    technologies: [
      {
        name: "Kong",
        logo: "/src/assets/what-we-do/kong.svg",
        logoAlt: "Kong logo",
      },
      {
        name: "Apigee",
        logo: "/src/assets/what-we-do/apigee.svg",
        logoAlt: "Apigee logo",
      },
      {
        name: "AWS API Gateway",
        logo: "/src/assets/what-we-do/aws-api-gateway.svg",
        logoAlt: "AWS API Gateway logo",
      },
      {
        name: "Azure API Management",
        logo: "/src/assets/what-we-do/azure-api-management.svg",
        logoAlt: "Azure API Management logo",
      },
    ],
  },
  {
    title: "Message Brokers",
    icon: Radio,
    technologies: [
      {
        name: "Apache Kafka",
        logo: "/src/assets/what-we-do/kafka.svg",
        logoAlt: "Apache Kafka logo",
      },
      {
        name: "RabbitMQ",
        logo: "/src/assets/what-we-do/rabbitmq.svg",
        logoAlt: "RabbitMQ logo",
      },
      {
        name: "AWS SQS / SNS",
        logo: "/src/assets/what-we-do/aws-sqs.svg",
        logoAlt: "AWS SQS / SNS logo",
      },
      {
        name: "ActiveMQ",
        logo: "/src/assets/what-we-do/activemq.svg",
        logoAlt: "ActiveMQ logo",
      },
    ],
  },
  {
    title: "iPaaS & ESB",
    icon: Boxes,
    technologies: [
      {
        name: "MuleSoft",
        logo: "/src/assets/what-we-do/mulesoft.svg",
        logoAlt: "MuleSoft logo",
      },
      {
        name: "Boomi",
        logo: "/src/assets/what-we-do/boomi.webp",
        logoAlt: "Boomi logo",
        wrapperClass: "w-11 h-11 -ml-2",
        textClass: "-ml-2",
      },
      {
        name: "Azure Integration",
        logo: "/src/assets/what-we-do/azure-integration.svg",
        logoAlt: "Azure Integration logo",
      },
      {
        name: "Workato",
        logo: "/src/assets/what-we-do/workato.svg",
        logoAlt: "Workato logo",
      },
    ],
  },
  {
    title: "Protocols & Standards",
    icon: FileCode2,
    technologies: [
      {
        name: "REST & GraphQL",
        logo: "/src/assets/what-we-do/graphql.svg",
        logoAlt: "REST & GraphQL logo",
      },
      {
        name: "gRPC",
        logo: "/src/assets/what-we-do/grpc.svg",
        logoAlt: "gRPC logo",
      },
      {
        name: "Webhooks & SOAP",
        special: true,
      },
      {
        name: "OAuth2 / OIDC",
        logo: "/src/assets/what-we-do/openid.svg",
        logoAlt: "OAuth2 / OIDC logo",
      },
    ],
  },
];

const APIMiddlewareStack = () => {
  return (
    <section className="relative bg-gray-50 py-16 sm:py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Heading */}
        <div className="mb-10 sm:mb-14 max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
              The Integration Stack
            </span>
          </div>

          <h2 className="font-inter text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-8">
            Right Tool, <span className="text-gray-300">Right Layer</span>.
          </h2>

          <div className="flex gap-4">
            <div className="w-[3px] bg-primary flex-shrink-0" />

            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              We're fluent across the modern integration landscape, and we
              pick technologies for your throughput, security, and team, not
              for the logo on the slide.
            </p>
          </div>
        </div>

        {/* Technology Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
          {technologyCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="group bg-white p-8 hover:bg-primary/[0.02] transition-colors duration-300"
              >
                {/* Category Icon */}
                <div className="w-12 h-12 bg-gray-900 group-hover:bg-primary flex items-center justify-center mb-6 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-gray-900 text-lg font-semibold mb-5">
                  {category.title}
                </h3>

                {/* Technology List */}
                <ul className="space-y-3">
                  {category.technologies.map((technology) => (
                    <li
                      key={technology.name}
                      className="flex items-center gap-3 text-gray-600 text-sm"
                    >
                      {technology.special ? (
                        <span className="w-7 h-7 flex items-center justify-center flex-shrink-0">
                          <span className="w-1.5 h-1.5 bg-primary rotate-45" />
                        </span>
                      ) : (
                        <span
                          className={`${
                            technology.wrapperClass ?? "w-7 h-7"
                          } flex items-center justify-center flex-shrink-0`}
                        >
                          <img
                            src={technology.logo}
                            alt={technology.logoAlt ?? technology.name}
                            className="max-w-full max-h-full object-contain"
                            loading="lazy"
                          />
                        </span>
                      )}

                      <span className={technology.textClass ?? ""}>
                        {technology.name}
                      </span>
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

export default APIMiddlewareStack;
