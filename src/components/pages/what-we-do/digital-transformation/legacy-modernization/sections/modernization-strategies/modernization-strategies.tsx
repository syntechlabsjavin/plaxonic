import { useEffect, useRef, useState } from "react";
import {
  MoveRight,
  Layers,
  Wrench,
  Network,
  Hammer,
  Repeat,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ModernizationStrategy {
  name: string;
  subtitle: string;
  effort: string;
  benefit: string;
  description: string;
  bestFor: string;
  icon: LucideIcon;
}

const strategies: ModernizationStrategy[] = [
  {
    name: "Rehost",
    subtitle: "Lift & Shift",
    effort: "Low effort",
    benefit: "Quick win",
    description:
      "Move the application to modern cloud infrastructure as-is, with minimal code changes. The fastest way to exit aging data centers and cut hardware cost.",
    bestFor:
      "Best when you need speed, cost savings, or a data-center exit, fast.",
    icon: MoveRight,
  },
  {
    name: "Replatform",
    subtitle: "Cloud Optimization",
    effort: "Low–medium",
    benefit: "Cloud benefits",
    description:
      "Move applications to a modern platform while making targeted optimizations. Adopt managed databases, cloud services, and improved infrastructure without changing the core architecture.",
    bestFor:
      "Best when you want cloud-native benefits without a complete application rewrite.",
    icon: Layers,
  },
  {
    name: "Refactor",
    subtitle: "Code Modernization",
    effort: "Medium",
    benefit: "Maintainable",
    description:
      "Improve existing code, eliminate technical debt, and strengthen testing and maintainability. Preserve the core architecture while making the application easier to evolve.",
    bestFor:
      "Best when the application works but technical debt slows down development and delivery.",
    icon: Wrench,
  },
  {
    name: "Rearchitect",
    subtitle: "Architectural Transformation",
    effort: "Medium–high",
    benefit: "Scalable",
    description:
      "Restructure the application's architecture to support scalability, resilience, and modern integrations. Break down architectural bottlenecks and prepare the system for changing business demands.",
    bestFor:
      "Best when architectural limitations prevent scaling, integration, or rapid innovation.",
    icon: Network,
  },
  {
    name: "Rebuild",
    subtitle: "Build From Scratch",
    effort: "High",
    benefit: "Future-proof",
    description:
      "Redesign and rebuild the application from the ground up using modern technologies and engineering practices. Retain essential business logic while creating a cleaner foundation.",
    bestFor:
      "Best when the existing system is too fragile, outdated, or constrained to modernize effectively.",
    icon: Hammer,
  },
  {
    name: "Replace",
    subtitle: "Adopt a New Solution",
    effort: "Varies",
    benefit: "Lower TCO",
    description:
      "Retire the legacy application and replace it with a suitable modern product, SaaS platform, or commercial solution. Reduce maintenance overhead while adopting proven capabilities.",
    bestFor:
      "Best when an existing product can meet your requirements more economically than maintaining custom software.",
    icon: Repeat,
  },
];

const ModernizationStrategies = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const strategiesRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  const activeStrategy = strategies[activeIndex];
  const ActiveIcon = activeStrategy.icon;

  // Entrance animations.
  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const strategyList = strategiesRef.current;

    if (!section || !heading || !strategyList) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        heading.children,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        strategyList.children,
        {
          opacity: 0,
          x: -25,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: strategyList,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  // Animate the details panel whenever a strategy is selected.
  useEffect(() => {
    const details = detailsRef.current;

    if (!details) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        details.children,
        {
          opacity: 0,
          y: 18,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.07,
          ease: "power2.out",
        }
      );
    }, details);

    return () => ctx.revert();
  }, [activeIndex]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gray-50 py-16 sm:py-20 lg:py-32"
    >
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section heading */}
        <div
          ref={headingRef}
          className="mb-10 max-w-3xl sm:mb-12 lg:mb-16"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              The Right Path
            </span>
          </div>

          <h2 className="mb-8 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-7xl">
            The 6 R's Of{" "}
            <span className="text-gray-300">Modernization</span>.
          </h2>

          <div className="flex gap-4">
            <div className="w-[3px] flex-shrink-0 bg-primary" />

            <p className="text-sm text-gray-600 sm:text-base md:text-lg">
              There's no one-size-fits-all. We assess each
              application and pick the strategy that delivers the
              most value for the least risk, sometimes a mix across
              your portfolio.
            </p>
          </div>
        </div>

        {/* Interactive strategy selector and details */}
        <div className="grid grid-cols-1 gap-px border border-gray-200 bg-gray-200 lg:grid-cols-[1fr_1.1fr]">
          {/* Left: Strategy list */}
          <div
            ref={strategiesRef}
            className="flex flex-col bg-gray-50"
          >
            {strategies.map((strategy, index) => {
              const Icon = strategy.icon;
              const isActive = activeIndex === index;

              return (
                <button
                  key={strategy.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                  aria-controls="modernization-strategy-details"
                  className={`group relative flex items-center gap-4 border-b border-gray-200 px-5 py-5 text-left transition-colors duration-300 last:border-b-0 sm:px-6 lg:px-8 ${
                    isActive
                      ? "bg-white"
                      : "bg-gray-50 hover:bg-white/60"
                  }`}
                >
                  {/* Strategy icon */}
                  <span
                    className={`flex h-11 w-11 flex-shrink-0 items-center justify-center transition-colors duration-300 ${
                      isActive
                        ? "bg-primary text-white"
                        : "bg-primary/10 text-primary group-hover:bg-primary/20"
                    }`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>

                  {/* Strategy label */}
                  <span className="min-w-0 flex-1">
                    <span
                      className={`block font-inter text-lg font-bold transition-colors duration-300 ${
                        isActive ? "text-primary" : "text-gray-900"
                      }`}
                    >
                      {strategy.name}
                    </span>

                    <span className="mt-0.5 block text-xs text-gray-500">
                      {strategy.effort} · {strategy.benefit}
                    </span>
                  </span>

                  {/* Active indicator */}
                  <span
                    className={`absolute bottom-0 left-0 top-0 w-1 bg-primary transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Active strategy details */}
          <div
            id="modernization-strategy-details"
            aria-live="polite"
            aria-atomic="true"
            className="flex flex-col justify-center bg-white p-6 sm:p-8 lg:p-12"
          >
            <div ref={detailsRef} key={activeIndex}>
              {/* Active icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center bg-primary/10 text-primary">
                <ActiveIcon
                  className="h-7 w-7"
                  aria-hidden="true"
                />
              </div>

              {/* Active title */}
              <h3 className="mb-3 font-inter text-xl font-bold text-gray-900 sm:text-2xl lg:text-3xl">
                {activeStrategy.name} — &ldquo;
                {activeStrategy.subtitle}&rdquo;
              </h3>

              {/* Strategy attributes */}
              <div className="mb-5 flex flex-wrap gap-2">
                <span className="bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {activeStrategy.effort}
                </span>

                <span className="bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                  {activeStrategy.benefit}
                </span>
              </div>

              {/* Description */}
              <p className="mb-6 text-sm leading-relaxed text-gray-600 sm:text-base lg:text-lg">
                {activeStrategy.description}
              </p>

              {/* Best use case */}
              <div className="flex gap-3 border-t border-gray-100 pt-5">
                <div className="w-[3px] flex-shrink-0 bg-primary" />

                <p className="text-sm font-medium text-gray-700 lg:text-base">
                  {activeStrategy.bestFor}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernizationStrategies;