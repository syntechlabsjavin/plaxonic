import { useEffect, useRef } from "react";
import { Search, PenTool, CodeXml, ShieldCheck, Rocket } from "lucide-react";

interface BuildStep {
  number: string;
  title: string;
  description: string;
  width: string;
  Icon: typeof Search;
}

interface HowWeBuildProps {
  eyebrow?: string;
  title?: string;
  highlightedTitle?: string;
  description?: string;
  steps?: BuildStep[];
}

const DEFAULT_STEPS: BuildStep[] = [
  {
    number: "01",
    title: "Discover & Scope",
    description:
      "We sit with your teams, map the real workflows, and define a sharp scope—so we build the right thing before we build the thing right.",
    width: "64%",
    Icon: Search,
  },
  {
    number: "02",
    title: "Design & Prototype",
    description:
      "Clickable prototypes and UX flows let you feel the product early and steer it—long before a line of production code is committed.",
    width: "73%",
    Icon: PenTool,
  },
  {
    number: "03",
    title: "Architect & Build",
    description:
      "We engineer in tested, reviewable increments on a clean architecture, shipping working software every sprint with full transparency.",
    width: "82%",
    Icon: CodeXml,
  },
  {
    number: "04",
    title: "Test & Harden",
    description:
      "Automated tests, security reviews, and load testing prove the application is correct, fast, and safe under real-world conditions.",
    width: "91%",
    Icon: ShieldCheck,
  },
  {
    number: "05",
    title: "Launch & Evolve",
    description:
      "We deploy, monitor, and keep improving—because great custom software is a living product, not a one-time delivery.",
    width: "100%",
    Icon: Rocket,
  },
];

const HowWeBuild = ({
  eyebrow = "How We Build",
  title = "From Idea To",
  highlightedTitle = "Delivered",
  description = "A transparent, low-risk path from a rough idea to software in production—with you steering at every checkpoint, never in the dark.",
  steps = DEFAULT_STEPS,
}: HowWeBuildProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;

            target.style.opacity = "1";
            target.style.transform = "translateY(0)";

            observer.unobserve(target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    elements.forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(24px)";
      element.style.transition = "opacity 700ms ease, transform 700ms ease";

      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gray-50 py-16 sm:py-20 lg:py-32"
    >
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Header */}
        <div data-reveal className="mb-10 max-w-3xl sm:mb-14 lg:mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {eyebrow}
            </span>
          </div>

          <h2 className="mb-8 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-6xl lg:text-7xl">
            {title} <span className="text-gray-300">{highlightedTitle}</span>.
          </h2>

          <div className="flex gap-4">
            <div className="w-[3px] shrink-0 bg-primary" />

            <p className="text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
              {description}
            </p>
          </div>
        </div>

        {/* Build Process */}
        <div className="flex flex-col">
          {steps.map((step, index) => {
            const Icon = step.Icon;

            return (
              <div
                key={step.number}
                data-reveal
                className="group relative w-full self-start sm:w-[var(--step-width)]"
                style={
                  {
                    "--step-width": step.width,
                    transitionDelay: `${index * 100}ms`,
                  } as React.CSSProperties
                }
              >
                <div className="relative -mt-px flex items-stretch overflow-hidden border border-gray-200 bg-white transition-all duration-300 first:mt-0 group-hover:border-primary/50 group-hover:shadow-xl">
                  {/* Step Number */}
                  <div className="relative flex w-20 shrink-0 items-center justify-center border-r border-gray-200 bg-gray-50 transition-colors duration-300 group-hover:bg-primary/[0.06] sm:w-36">
                    <span className="font-inter text-5xl font-bold leading-none tabular-nums text-gray-200 transition-colors duration-300 group-hover:text-primary/60 sm:text-7xl">
                      {step.number}
                    </span>

                    <div className="absolute bottom-0 left-0 top-0 w-[3px] origin-top scale-y-0 bg-primary transition-transform duration-300 group-hover:scale-y-100" />
                  </div>

                  {/* Step Content */}
                  <div className="min-w-0 flex-1 p-5 sm:p-8 lg:p-9">
                    <div className="mb-3 flex items-center gap-3 sm:gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white sm:h-11 sm:w-11">
                        <Icon
                          className="h-5 w-5"
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-primary sm:text-xl lg:text-2xl">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-sm leading-relaxed text-gray-600 lg:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeBuild;
