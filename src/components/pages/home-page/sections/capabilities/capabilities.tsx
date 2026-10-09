import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Icons                                                                      */
/* -------------------------------------------------------------------------- */

interface IconProps {
  className?: string;
}

function IconFrame({
  className,
  children,
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const stroke = {
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function AiConsultingIcon({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <circle cx="24" cy="16" r="8" {...stroke} />
      <path d="M20 14L22 16L20 18" {...stroke} />
      <path d="M28 14L26 16L28 18" {...stroke} />
      <path d="M14 30H34" {...stroke} />
      <path d="M10 36H38" {...stroke} />
      <path d="M18 42H30" {...stroke} />
      <path d="M24 24V30" {...stroke} />
    </IconFrame>
  );
}

function AgenticAiIcon({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <rect x="14" y="6" width="20" height="14" rx="3" {...stroke} />
      <circle cx="20" cy="13" r="2" fill="currentColor" />
      <circle cx="28" cy="13" r="2" fill="currentColor" />
      <path d="M24 20V26" {...stroke} />
      <path d="M16 26H32L36 42H12L16 26Z" {...stroke} />
      <path d="M8 18L14 13" {...stroke} />
      <path d="M40 18L34 13" {...stroke} />
      <circle cx="8" cy="18" r="2" fill="currentColor" />
      <circle cx="40" cy="18" r="2" fill="currentColor" />
    </IconFrame>
  );
}

function CloudIcon({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <path
        d="M12 32C8.68629 32 6 29.3137 6 26C6 22.6863 8.68629 20 12 20C12 14.4772 16.4772 10 22 10C26.4183 10 30.1651 12.8687 31.4562 16.8C32.2827 16.2872 33.254 16 34.2857 16C37.9496 16 41 19.0504 41 22.7143C41 26.0929 38.3942 28.8687 35 29.266"
        {...stroke}
      />
      <path d="M20 28L24 24L28 28" {...stroke} />
      <path d="M24 24V38" {...stroke} />
    </IconFrame>
  );
}

function DataIcon({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <rect x="8" y="30" width="6" height="10" rx="1" fill="currentColor" />
      <rect x="17" y="22" width="6" height="18" rx="1" fill="currentColor" />
      <rect x="26" y="14" width="6" height="26" rx="1" fill="currentColor" />
      <rect x="35" y="8" width="6" height="32" rx="1" fill="currentColor" />
      <circle cx="11" cy="26" r="2" {...stroke} />
      <circle cx="20" cy="18" r="2" {...stroke} />
      <circle cx="29" cy="10" r="2" {...stroke} />
      <path d="M13 25L18 19" {...stroke} strokeWidth={1.5} />
      <path d="M22 17L27 11" {...stroke} strokeWidth={1.5} />
    </IconFrame>
  );
}

function PlatformIcon({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <rect x="8" y="6" width="32" height="10" rx="2" {...stroke} />
      <rect x="8" y="20" width="32" height="10" rx="2" {...stroke} />
      <rect x="8" y="34" width="32" height="10" rx="2" {...stroke} />
      <circle cx="14" cy="11" r="2" fill="currentColor" />
      <circle cx="14" cy="25" r="2" fill="currentColor" />
      <circle cx="14" cy="39" r="2" fill="currentColor" />
      <path d="M20 11H34" {...stroke} />
      <path d="M20 25H30" {...stroke} />
      <path d="M20 39H28" {...stroke} />
    </IconFrame>
  );
}

function DevOpsIcon({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <circle cx="24" cy="24" r="16" {...stroke} />
      <path d="M24 8C24 8 32 16 32 24C32 32 24 40 24 40" {...stroke} />
      <path d="M24 8C24 8 16 16 16 24C16 32 24 40 24 40" {...stroke} />
      <path d="M16 14L20 18L16 22" {...stroke} />
      <path d="M32 26L28 30L32 34" {...stroke} />
    </IconFrame>
  );
}

function EnterpriseSoftwareIcon({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <rect x="6" y="8" width="36" height="26" rx="2" {...stroke} />
      <path d="M6 14H42" {...stroke} />
      <circle cx="10" cy="11" r="1" fill="currentColor" />
      <circle cx="14" cy="11" r="1" fill="currentColor" />
      <circle cx="18" cy="11" r="1" fill="currentColor" />
      <path d="M14 22L10 26L14 30" {...stroke} />
      <path d="M24 22L28 26L24 30" {...stroke} />
      <path d="M21 20L17 32" {...stroke} strokeWidth={1.5} />
      <path d="M18 38H30" {...stroke} />
      <path d="M24 34V38" {...stroke} />
    </IconFrame>
  );
}

function CybersecurityIcon({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <path
        d="M24 4L8 12V22C8 33.05 14.84 43.22 24 46C33.16 43.22 40 33.05 40 22V12L24 4Z"
        {...stroke}
      />
      <path d="M18 24L22 28L30 20" {...stroke} strokeWidth={2.5} />
    </IconFrame>
  );
}

/* -------------------------------------------------------------------------- */
/* Data                                                                       */
/* -------------------------------------------------------------------------- */

interface Capability {
  title: string;
  description: string;
  href: string;
  Icon: (props: IconProps) => ReactNode;
}

const CAPABILITIES: Capability[] = [
  {
    title: "AI Consulting & Implementation",
    description:
      "From AI strategy to production deployment systems that deliver measurable business impact.",
    href: "/services/ai-consulting-services",
    Icon: AiConsultingIcon,
  },
  {
    title: "Agentic AI Services",
    description:
      "Build intelligent agents that work autonomously, making decisions and taking action independently.",
    href: "/services/agentic-ai",
    Icon: AgenticAiIcon,
  },
  {
    title: "Cloud Migration & Modernization",
    description:
      "Beyond lift-and-shift: cloud-native re-architecture that unlocks scalability, performance, and cost savings.",
    href: "/services/cloud-migration-modernization",
    Icon: CloudIcon,
  },
  {
    title: "Data Science & Analytics",
    description:
      "Transform raw data into competitive advantage with predictive models and intelligent analytics platforms.",
    href: "/services/data-science-analytics",
    Icon: DataIcon,
  },
  {
    title: "SaaS & Platform Engineering",
    description:
      "Engineer scalable multi-tenant platforms designed for performance, reliability, and rapid feature delivery.",
    href: "/services/platform-engineering-services",
    Icon: PlatformIcon,
  },
  {
    title: "DevOps Automation & CI/CD",
    description:
      "CI/CD systems that bring engineering velocity: faster releases, fewer errors, happier development teams.",
    href: "/services/devops-automation-services",
    Icon: DevOpsIcon,
  },
  {
    title: "Enterprise Software Development",
    description:
      "Custom production-grade applications built for scale and business-critical operations.",
    href: "/services/enterprise-software-development",
    Icon: EnterpriseSoftwareIcon,
  },
  {
    title: "Cybersecurity & Digital Trust",
    description:
      "Security architecture for enterprises: zero-trust, governance, compliance engineered from the start.",
    href: "/services/cybersecurity",
    Icon: CybersecurityIcon,
  },
];

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

const Capabilities = () => {
  return (
    <section className="bg-gray-100 py-14 sm:py-20 lg:py-28">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Header */}
        <div className="mb-10 sm:mb-12 lg:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
                  What we engineer
                </span>
              </div>
              <h2 className="font-inter text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1]">
                Our <span className="text-gray-300">Capabilities</span>.
              </h2>
            </div>

            <div className="mb-2">
              <a
                href="/services"
                className="group inline-flex items-center gap-2 px-6 py-3 lg:px-5 lg:py-2.5 2xl:px-6 2xl:py-3 border border-[#1a1f35] text-[#1a1f35] font-semibold text-sm lg:text-[13px] 2xl:text-sm uppercase tracking-wider hover:bg-[#1a1f35] hover:text-white transition-colors duration-300"
              >
                View All Services
                <ArrowUpRight
                  className="w-4 h-4 lg:w-[15px] lg:h-[15px] 2xl:w-4 2xl:h-4 group-hover:rotate-45 transition-transform duration-300"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          <div className="flex gap-4 max-w-2xl mt-8">
            <div className="w-[3px] bg-primary shrink-0" />
            <p className="text-gray-600 text-base md:text-lg lg:text-base 2xl:text-lg">
              From AI strategy to production systems, engineered by teams who
              understand the difference between demos and solutions that truly
              scale.
            </p>
          </div>
        </div>

        {/* Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 overflow-hidden border border-gray-200">
          {CAPABILITIES.map(({ title, description, href, Icon }) => (
            <li
              key={href}
              className="group relative bg-white transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Hover glow + frosted layer */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute inset-0 backdrop-blur-sm bg-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <a
                href={href}
                className="relative block p-6 sm:p-7 lg:p-6 2xl:p-8 h-full min-h-[200px] sm:min-h-[220px] lg:min-h-[200px] 2xl:min-h-[220px] flex flex-col justify-between z-10"
              >
                <div>
                  <h3 className="text-gray-900 text-lg lg:text-base 2xl:text-lg font-medium mb-2 group-hover:text-primary transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-base sm:text-[18px] lg:text-[15px] 2xl:text-[18px] leading-relaxed">
                    {description}
                  </p>
                </div>

                <div className="flex items-end justify-between mt-4">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-12 h-12 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12" />
                  </div>
                  <div className="text-gray-400 group-hover:text-primary transition-colors duration-300">
                    <ArrowUpRight
                      className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Bottom accent line that grows on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Capabilities;
