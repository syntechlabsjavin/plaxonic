import { useEffect, useRef, useState } from "react";
import {
  Building2,
  Workflow,
  Settings2,
  Users,
  RefreshCw,
  ChartNoAxesCombined,
  type LucideIcon,
} from "lucide-react";

interface SoftwareSolution {
  number: string;
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
}

interface SoftwareSolutionsProps {
  eyebrow?: string;
  heading?: string;
  highlightedHeading?: string;
  description?: string;
  solutions?: SoftwareSolution[];
}

const DEFAULT_SOLUTIONS: SoftwareSolution[] = [
  {
    number: "01",
    title: "Enterprise Web Applications",
    description:
      "Mission-critical platforms that run core operations—built to handle real load, complex permissions, and the edge cases generic tools never anticipated.",
    features: ["High-load", "Role-based access", "Audit-ready"],
    icon: Building2,
  },
  {
    number: "02",
    title: "Internal Tools & Admin Portals",
    description:
      "Purpose-built internal platforms that simplify administration, centralize business operations, and give your teams the tools they need to work efficiently.",
    features: ["Centralized operations", "Custom permissions", "Team productivity"],
    icon: Settings2,
  },
  {
    number: "03",
    title: "Workflow & Process Automation",
    description:
      "Automate repetitive tasks and connect business processes with intelligent workflows that reduce manual effort, minimize errors, and accelerate delivery.",
    features: ["Automated workflows", "System integration", "Fewer manual tasks"],
    icon: Workflow,
  },
  {
    number: "04",
    title: "Customer & Partner Portals",
    description:
      "Create secure digital experiences where customers and partners can access information, manage requests, track progress, and collaborate with your business.",
    features: ["Secure access", "Self-service tools", "Real-time updates"],
    icon: Users,
  },
  {
    number: "05",
    title: "Legacy Application Modernization",
    description:
      "Modernize outdated applications with improved architecture, better usability, and scalable technologies while protecting the business logic your organization depends on.",
    features: ["Modern architecture", "Improved performance", "System migration"],
    icon: RefreshCw,
  },
  {
    number: "06",
    title: "Data Dashboards & Reporting",
    description:
      "Turn complex business data into actionable insights with custom dashboards, consolidated reporting, and clear visualizations designed around your key metrics.",
    features: ["Live dashboards", "Custom reporting", "Data-driven insights"],
    icon: ChartNoAxesCombined,
  },
];

const SoftwareSolutions = ({
  eyebrow = "Solutions We Craft",
  heading = "Software Shaped",
  highlightedHeading = "Around You",
  description = "Whatever your business runs on, we build it deliberately—six categories of bespoke software, each engineered for the problem in front of you rather than a generic template.",
  solutions = DEFAULT_SOLUTIONS,
}: SoftwareSolutionsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const activeSolution = solutions[activeIndex];

  useEffect(() => {
    setActiveIndex(0);
  }, [solutions]);

useEffect(() => {
  const elements = [
    headerRef.current,
    panelRef.current,
  ].filter((element): element is HTMLDivElement => element !== null);

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLDivElement;

          element.style.opacity = "1";
          element.style.transform = "translateY(0)";

          observer.unobserve(element);
        }
      });
    },
    { threshold: 0.12 },
  );

  elements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(24px)";
    element.style.transition =
      "opacity 700ms ease, transform 700ms ease";

    observer.observe(element);
  });

  return () => observer.disconnect();
}, []);

  if (!activeSolution) return null;

  const ActiveIcon = activeSolution.icon;

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-gray-100 py-16 sm:py-20 lg:py-32"
    >
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section heading */}
        <div
          ref={headerRef}
          className="mb-10 sm:mb-14 lg:mb-16"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {eyebrow}
                </span>
              </div>

              <h2 className="mb-8 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-6xl lg:text-7xl">
                {heading}{" "}
                <span className="text-gray-300">
                  {highlightedHeading}
                </span>
                .
              </h2>

              <div className="flex max-w-2xl gap-4">
                <div className="w-[3px] shrink-0 bg-primary" />
                <p className="text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive solutions */}
        <div className="grid grid-cols-1 gap-px border border-gray-200 bg-gray-200 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Solution navigation */}
          <div className="flex flex-col bg-gray-100">
            {solutions.map((solution, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={solution.number}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative flex items-center gap-5 border-b border-gray-200 px-6 py-5 text-left transition-colors duration-300 last:border-b-0 lg:px-8 lg:py-6 ${
                    isActive ? "bg-white" : "hover:bg-white/60"
                  }`}
                >
                  <span
                    className={`absolute bottom-0 left-0 top-0 w-[3px] origin-top bg-primary transition-transform duration-300 ${
                      isActive ? "scale-y-100" : "scale-y-0"
                    }`}
                  />

                  <span
                    className={`shrink-0 font-inter text-2xl font-bold leading-none tabular-nums transition-colors duration-300 lg:text-3xl ${
                      isActive
                        ? "text-primary"
                        : "text-gray-300 group-hover:text-gray-400"
                    }`}
                  >
                    {solution.number}
                  </span>

                  <h3
                    className={`font-inter text-base font-semibold transition-colors duration-300 lg:text-lg ${
                      isActive
                        ? "text-gray-900"
                        : "text-gray-500 group-hover:text-gray-700"
                    }`}
                  >
                    {solution.title}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Active solution details */}
          <div className="relative min-h-[420px] overflow-hidden bg-white">
            <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-primary/[0.06] blur-3xl" />

            <div
              ref={panelRef}
              key={activeSolution.number}
              className="relative z-10 flex h-full flex-col p-6 sm:p-8 lg:p-12"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-8 top-6 select-none font-inter text-[5rem] font-bold leading-none tabular-nums text-gray-100 sm:text-[7rem] lg:text-[9rem]"
              >
                {activeSolution.number}
              </span>

              <div className="relative mb-8 flex h-14 w-14 items-center justify-center bg-primary/10">
                <ActiveIcon
                  className="h-7 w-7 text-primary"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </div>

              <h3 className="relative mb-5 max-w-md font-inter text-xl font-bold tracking-tight text-gray-900 sm:text-2xl lg:text-4xl">
                {activeSolution.title}
              </h3>

              <p className="relative mb-auto max-w-lg text-sm leading-relaxed text-gray-600 sm:text-base lg:text-lg">
                {activeSolution.description}
              </p>

              <div className="relative mt-8 flex flex-wrap gap-2 border-t border-gray-100 pt-8">
                {activeSolution.features.map((feature) => (
                  <span
                    key={feature}
                    className="inline-flex items-center border border-gray-200 bg-gray-50 px-4 py-2 text-xs font-medium text-gray-600 lg:text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareSolutions;