import { useState } from "react";
import { ArrowRight, Boxes, GitBranch, Repeat } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Types & default content                                                    */
/* -------------------------------------------------------------------------- */

interface Chip {
  label: string;
  Icon: LucideIcon;
}

interface Cta {
  label: string;
  href: string;
}

interface ServiceHeroProps {
  eyebrow?: string;
  titleTop?: string;
  titleAccent?: string;
  description?: string;
  chips?: Chip[];
  primaryCta?: Cta;
  secondaryCta?: Cta;
}

const DEFAULTS: Required<ServiceHeroProps> = {
  eyebrow: "Digital Transformation / Engineering",
  titleTop: "Microservices & API",
  titleAccent: "Development Services",
  description:
    "We build APIs and microservices that connect applications, services, and data across your technology ecosystem. Our API development and integration services cover custom APIs, web APIs, third-party integrations, and microservices architecture designed around your application requirements.",
  chips: [
    { label: "Independently deployable", Icon: Boxes },
    { label: "Contract-first APIs", Icon: GitBranch },
    { label: "Event-driven", Icon: Repeat },
  ],
  primaryCta: { label: "Explore Our Services", href: "#our-services" },
  secondaryCta: { label: "Talk to Our Experts", href: "/contact" },
};

/* -------------------------------------------------------------------------- */
/* Service topology diagram                                                   */
/* -------------------------------------------------------------------------- */

interface ServiceNode {
  name: string;
  /** Vertical position as a percentage of the diagram height */
  top: number;
}

const GATEWAY = { x: 30, y: 50 } as const;
const SERVICE_X = 64;
const SERVICES: ServiceNode[] = [
  { name: "auth-svc", top: 16 },
  { name: "orders-svc", top: 50 },
  { name: "payments-svc", top: 84 },
];

function usePrefersReducedMotion(): boolean {
  const [reduced] = useState<boolean>(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  return reduced;
}

function ServiceTopology() {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <div className="relative h-[320px] w-full">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        role="img"
        aria-label="Diagram of an API gateway routing requests to microservices"
      >
        <circle cx={GATEWAY.x} cy={GATEWAY.y} r="1.4" fill="#1BA3DD" />

        {SERVICES.map((service, i) => (
          <g key={service.name}>
            <line
              x1={GATEWAY.x}
              y1={GATEWAY.y}
              x2={SERVICE_X}
              y2={service.top}
              stroke="#1BA3DD"
              strokeWidth="0.6"
              strokeOpacity="0.5"
            />
            <circle cx={SERVICE_X} cy={service.top} r="1.4" fill="#1BA3DD" />

            {/* Request packet travelling from the gateway to the service */}
            {!reduceMotion && (
              <circle r="1.3" fill="#4fb8e6" opacity="0">
                <animate
                  attributeName="cx"
                  values={`${GATEWAY.x};${SERVICE_X}`}
                  dur="2.4s"
                  begin={`${i * 0.6}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="cy"
                  values={`${GATEWAY.y};${service.top}`}
                  dur="2.4s"
                  begin={`${i * 0.6}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.15;0.85;1"
                  dur="2.4s"
                  begin={`${i * 0.6}s`}
                  repeatCount="indefinite"
                />
              </circle>
            )}
          </g>
        ))}
      </svg>

      {/* Gateway node */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[30%]">
        <div className="bg-primary/10 border border-primary/40 rounded-md p-3 text-center">
          <div className="text-primary text-[9px] uppercase tracking-wider font-semibold mb-1">
            Gateway
          </div>
          <div className="w-8 h-8 mx-auto rounded bg-primary/20 flex items-center justify-center">
            <GitBranch className="w-4 h-4 text-primary" aria-hidden="true" />
          </div>
          <div className="text-gray-400 text-[8px] font-mono mt-1.5">edge</div>
        </div>
      </div>

      {/* Service nodes */}
      {SERVICES.map((service) => (
        <div
          key={service.name}
          className="absolute w-[34%] -translate-y-1/2"
          style={{ left: `${SERVICE_X}%`, top: `${service.top}%` }}
        >
          <div className="bg-gray-50 border border-gray-200 rounded-md px-3 py-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
            <span className="text-gray-700 text-[10px] font-mono truncate">
              {service.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

const MicroServicesHero=(props: ServiceHeroProps)=> {
  const {
    eyebrow,
    titleTop,
    titleAccent,
    description,
    chips,
    primaryCta,
    secondaryCta,
  } = { ...DEFAULTS, ...props };

  return (
    <section className="relative w-full overflow-hidden bg-white pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-32">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[130px]" />
        <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] rounded-full bg-primary/[0.07] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 sm:gap-12 lg:gap-16">
          {/* Left: copy */}
          <div className="lg:w-[52%]">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
                {eyebrow}
              </span>
            </div>

            <h1 className="font-inter text-[2rem] xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
              <span className="text-gray-900">{titleTop}</span>
              <br />
              <span className="text-primary">{titleAccent}</span>
            </h1>

            <div className="flex gap-4 max-w-2xl mb-10">
              <div className="w-[3px] bg-primary shrink-0" />
              <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
                {description}
              </p>
            </div>

            <ul className="flex flex-wrap gap-3 mb-10">
              {chips.map(({ label, Icon }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 border border-gray-200 bg-gray-50 text-gray-700 text-sm font-medium px-4 py-2"
                >
                  <Icon className="w-4 h-4 text-primary" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <a
                href={primaryCta.href}
                className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-primary text-white font-semibold text-base px-8 py-3.5 hover:bg-primary-dark transition-colors"
              >
                <span>{primaryCta.label}</span>
                <ArrowRight
                  className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300"
                  aria-hidden="true"
                />
              </a>
              <a
                href={secondaryCta.href}
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto border-2 border-gray-900 text-gray-900 font-semibold text-base px-8 py-3.5 hover:bg-gray-900 hover:text-white transition-colors"
              >
                {secondaryCta.label}
              </a>
            </div>
          </div>

          {/* Right: API request card */}
          <div className="lg:w-[48%] flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl">
              <div
                className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full opacity-[0.18] pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgb(27, 163, 221) 0%, transparent 70%)",
                  filter: "blur(60px)",
                }}
              />

              <div className="relative bg-white border border-gray-200 rounded-lg p-6 shadow-xl overflow-hidden">
                <div className="flex items-center justify-between mb-5 font-mono">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold bg-primary text-white px-2 py-1 rounded">
                      GET
                    </span>
                    <span className="text-gray-600 text-xs">/api/v2/orders</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-xs">200</span>
                    <span className="text-gray-400 text-xs">42ms</span>
                  </div>
                </div>

                <ServiceTopology />

                <div className="mt-4 flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-md px-3 py-2">
                  <Repeat
                    className="w-3.5 h-3.5 text-primary shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-gray-500 text-[10px] font-mono">
                    event-bus · order.created → 3 subscribers
                  </span>
                </div>

                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MicroServicesHero;