import { useEffect, useRef } from "react";
import {
  PenTool,
  Puzzle,
  Gauge,
  ArrowRight,
  LayoutDashboard,
  Workflow,
  ChartColumn,
  CreditCard,
  ShieldCheck,
  Plug,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Types & default content                                                    */
/* -------------------------------------------------------------------------- */

interface HeroFeature {
  label: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
}

interface AppModule {
  label: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
}

interface CustomApplicationHeroProps {
  eyebrow?: string;
  titleMain?: string;
  titleAccent?: string;
  description?: string;
  features?: HeroFeature[];
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  modules?: AppModule[];
  canvasLabel?: string;
  matchLabel?: string;
  matchValue?: string;
}

/* -------------------------------------------------------------------------- */
/* Default data                                                               */
/* -------------------------------------------------------------------------- */

const DEFAULT_FEATURES: HeroFeature[] = [
  { label: "Built from scratch", icon: PenTool },
  { label: "Modular by design", icon: Puzzle },
  { label: "100% fit to your workflow", icon: Gauge },
];

const DEFAULT_MODULES: AppModule[] = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Workflows", icon: Workflow },
  { label: "Reporting", icon: ChartColumn },
  { label: "Billing", icon: CreditCard },
  { label: "Access & Roles", icon: ShieldCheck },
  { label: "Integrations", icon: Plug },
];

const DEFAULTS: Required<CustomApplicationHeroProps> = {
  eyebrow: "Digital Transformation / Engineering",
  titleMain: "Custom Application",
  titleAccent: "Development",
  description:
    "Off-the-shelf tools force your business to bend around their limits. We do the opposite—engineering software around the exact way your teams work. From internal tools and customer portals to workflow automation and legacy modernization, every module is built to fit you, and only you.",
  features: DEFAULT_FEATURES,
  primaryButtonText: "Scope Your Build",
  primaryButtonHref: "/contact",
  secondaryButtonText: "Book a Discovery Call",
  secondaryButtonHref: "/contact",
  modules: DEFAULT_MODULES,
  canvasLabel: "your-app · build canvas",
  matchLabel: "requirements matched",
  matchValue: "100%",
};

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

const CustomApplicationHero = (
  props: CustomApplicationHeroProps
) => {
  const {
    eyebrow,
    titleMain,
    titleAccent,
    description,
    features,
    primaryButtonText,
    primaryButtonHref,
    secondaryButtonText,
    secondaryButtonHref,
    modules,
    canvasLabel,
    matchLabel,
    matchValue,
  } = {
    ...DEFAULTS,
    ...props,
  };

  const sectionRef = useRef<HTMLElement | null>(null);

  // Fade and slide hero elements into view.
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const animatedElements =
      section.querySelectorAll<HTMLElement>("[data-animate]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1 }
    );

    animatedElements.forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(20px)";
      element.style.transition =
        "opacity 700ms ease, transform 700ms ease";

      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [features, modules]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-28"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[130px]" />

        <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] rounded-full bg-primary/[0.07] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 sm:gap-12 lg:gap-16">
          {/* Left content */}
          <div className="lg:w-[55%]">
            <div data-animate className="flex items-center gap-3 mb-6">
              <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
                {eyebrow}
              </span>
            </div>

            <h1
              data-animate
              className="font-inter text-[2rem] xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8"
            >
              <span className="text-gray-900">{titleMain}</span>
              <br />
              <span className="text-primary">{titleAccent}</span>
            </h1>

            <div
              data-animate
              className="flex gap-4 max-w-2xl mb-10"
            >
              <div className="w-[3px] bg-primary shrink-0" />

              <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
                {description}
              </p>
            </div>

            {/* Feature badges */}
            <div
              data-animate
              className="flex flex-wrap gap-3 mb-10"
            >
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <span
                    key={feature.label}
                    className="inline-flex items-center gap-2 border border-gray-200 bg-gray-50 text-gray-700 text-sm font-medium px-4 py-2"
                  >
                    <Icon
                      aria-hidden={true}
                      className="w-4 h-4 text-primary shrink-0"
                    />
                    {feature.label}
                  </span>
                );
              })}
            </div>

            {/* CTA buttons */}
            <div
              data-animate
              className="flex flex-col sm:flex-row flex-wrap gap-4"
            >
              <a
                href={primaryButtonHref}
                className="inline-flex items-center justify-center gap-3 bg-primary text-white font-semibold text-base px-8 py-3.5 hover:bg-primary-dark transition-colors group w-full sm:w-auto"
              >
                <span>{primaryButtonText}</span>

                <ArrowRight
                  aria-hidden={true}
                  className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300"
                />
              </a>

              <a
                href={secondaryButtonHref}
                className="inline-flex items-center justify-center gap-3 border-2 border-gray-900 text-gray-900 font-semibold text-base px-8 py-3.5 hover:bg-gray-900 hover:text-white transition-colors w-full sm:w-auto"
              >
                {secondaryButtonText}
              </a>
            </div>
          </div>

          {/* Right application preview */}
          <div
            data-animate
            className="lg:w-[45%] flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg">
              {/* Preview glow */}
              <div
                aria-hidden="true"
                className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full opacity-[0.18]"
                style={{
                  background:
                    "radial-gradient(circle, rgb(27, 163, 221) 0%, transparent 70%)",
                  filter: "blur(60px)",
                }}
              />

              {/* Application canvas */}
              <div className="relative bg-white border border-gray-200 p-6 shadow-xl overflow-hidden">
                {/* Window header */}
                <div className="flex items-center justify-between mb-5 font-mono">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400 shrink-0" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 shrink-0" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400 shrink-0" />

                    <span className="text-gray-400 text-xs ml-2 truncate">
                      {canvasLabel}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-1 shrink-0">
                    TAILORED
                  </span>
                </div>

                {/* Module grid */}
                <div className="border border-dashed border-gray-300 p-4">
                  <div className="grid grid-cols-2 gap-3">
                    {modules.map((module) => {
                      const Icon = module.icon;

                      return (
                        <div
                          key={module.label}
                          data-animate
                          className="flex items-center gap-2.5 bg-gray-50 border border-gray-200 px-3 py-3 min-w-0"
                        >
                          <div className="w-8 h-8 bg-primary/10 flex items-center justify-center shrink-0">
                            <Icon
                              aria-hidden={true}
                              className="w-4 h-4 text-primary"
                            />
                          </div>

                          <span className="text-gray-700 text-xs font-medium truncate">
                            {module.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Requirements progress */}
                <div className="mt-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-500 text-[11px] font-mono">
                      {matchLabel}
                    </span>

                    <span className="text-primary text-[11px] font-mono font-semibold">
                      {matchValue}
                    </span>
                  </div>

                  <div
                    className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden"
                    role="progressbar"
                    aria-label={matchLabel}
                    aria-valuenow={100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: matchValue }}
                    />
                  </div>
                </div>

                {/* Decorative glow */}
                <div
                  aria-hidden="true"
                  className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomApplicationHero;