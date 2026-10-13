import {
  ArrowLeftRight,
  Boxes,
  DoorOpen,
  FileJson,
  Split,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Types & default content                                                    */
/* -------------------------------------------------------------------------- */

interface ServiceItem {
  title: string;
  description: string;
  Icon: LucideIcon;
}

interface ServicesGridProps {
  eyebrow?: string;
  titleMain?: string;
  titleMuted?: string;
  description?: string;
  items?: ServiceItem[];
}

const DEFAULT_ITEMS: ServiceItem[] = [
  {
    title: "API Development Services",
    description:
      "We provide custom API development for web, mobile, enterprise, and internal applications, with clear contracts, authentication, documentation, and versioning built around your requirements.",
    Icon: FileJson,
  },
  {
    title: "API Integration Services",
    description:
      "Our team connects your applications, third-party platforms, databases, and business systems through reliable API integrations that keep data moving across your technology ecosystem.",
    Icon: ArrowLeftRight,
  },
  {
    title: "Microservices Development",
    description:
      "We design and develop independent services around your business capabilities, with clear service boundaries and communication patterns that support modular application architectures.",
    Icon: Boxes,
  },
  {
    title: "Microservices Modernization",
    description:
      "Modernize legacy and monolithic applications through a gradual migration to microservices. We identify suitable components for decomposition while keeping critical business operations running.",
    Icon: Split,
  },
  {
    title: "API Gateway & Management",
    description:
      "Set up API gateways to handle routing, authentication, access control, rate limiting, traffic management, and monitoring across your API ecosystem.",
    Icon: DoorOpen,
  },
  {
    title: "API Maintenance & Optimization",
    description:
      "Keep your APIs and microservices reliable after deployment through performance optimization, monitoring, troubleshooting, security updates, and ongoing architectural improvements.",
    Icon: Wrench,
  },
];

const DEFAULTS: Required<ServicesGridProps> = {
  eyebrow: "What We Build",
  titleMain: "API Solutions Designed",
  titleMuted: "For Your Architecture",
  description:
    "We design and build APIs and microservices around your integration requirements. Our developers help you establish reliable API structures and build architectures that can evolve as your technology needs change.",
  items: DEFAULT_ITEMS,
};

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

const MicroServicesGrid=(props: ServicesGridProps)=> {
  const { eyebrow, titleMain, titleMuted, description, items } = {
    ...DEFAULTS,
    ...props,
  };

  return (
    <section
      id="our-services"
      className="bg-gray-100 scroll-mt-24 py-16 sm:py-20 lg:py-32"
    >
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Header */}
        <div className="mb-10 sm:mb-14 lg:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
              {eyebrow}
            </span>
          </div>

          <h2 className="font-inter text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-8">
            {titleMain} <span className="text-gray-300">{titleMuted}</span>
          </h2>

          <div className="flex gap-4 max-w-2xl">
            <div className="w-[3px] bg-primary shrink-0" />
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Cards */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ title, description: itemDescription, Icon }, index) => (
            <li
              key={title}
              className="group relative bg-white border border-gray-200 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 sm:p-8 lg:p-10 overflow-hidden"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-4 right-3 font-inter text-[7rem] font-bold leading-none text-gray-900/[0.04] tabular-nums select-none"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-6 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-gray-900 text-lg sm:text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {itemDescription}
                </p>
              </div>

              {/* Bottom accent bar that grows on hover */}
              <span className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default MicroServicesGrid;