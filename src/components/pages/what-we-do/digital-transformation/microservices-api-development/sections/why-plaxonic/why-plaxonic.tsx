import { useEffect, useRef } from "react";
import {
  Layers3,
  FileJson,
  Split,
  ArrowLeftRight,
  ShieldCheck,
  LifeBuoy,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Types & default content                                                    */
/* -------------------------------------------------------------------------- */

interface WhyPlaxonicItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
}

interface WhyPlaxonicProps {
  eyebrow?: string;
  titleMain?: string;
  titleMuted?: string;
  description?: string;
  items?: WhyPlaxonicItem[];
}

const DEFAULT_ITEMS: WhyPlaxonicItem[] = [
  {
    title: "Architecture-Led Development",
    description:
      "We define the architecture before building individual services, with clear boundaries, communication patterns, and technology choices based on your application requirements.",
    icon: Layers3,
  },
  {
    title: "Custom API Development",
    description:
      "We design your APIs around how your applications and systems need to exchange data. We build custom APIs with clear contracts, authentication, documentation, versioning, and integration requirements.",
    icon: FileJson,
  },
  {
    title: "Microservices Modernization",
    description:
      "We can modernize existing monolithic applications incrementally through targeted service decomposition. We identify suitable components for migration while keeping critical business operations running.",
    icon: Split,
  },
  {
    title: "Integration Expertise",
    description:
      "We connect applications, services, databases, third-party platforms, and enterprise systems through APIs and messaging patterns suited to your architecture.",
    icon: ArrowLeftRight,
  },
  {
    title: "Built for Reliability",
    description:
      "Throughout development, we consider resilience, error handling, security, monitoring, and testing. This helps your services remain dependable as traffic, integrations, and system complexity increase.",
    icon: ShieldCheck,
  },
  {
    title: "Ongoing Technical Support",
    description:
      "After deployment, your systems may still need optimization, monitoring, new integrations, and architecture changes. We provide ongoing technical support to help your APIs and microservices evolve with your requirements.",
    icon: LifeBuoy,
  },
];

const DEFAULTS: Required<WhyPlaxonicProps> = {
  eyebrow: "Why Plaxonic",
  titleMain: "Microservices & API Engineering",
  titleMuted: "Built Around Your Systems",
  description:
    "Our developers approach API and microservices development with your existing architecture, business requirements, and long-term technology plans in mind. We focus on clear service boundaries, reliable integrations, maintainable code, and practical solutions your teams can manage after delivery.",
  items: DEFAULT_ITEMS,
};

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

const WhyPlaxonic = (props: WhyPlaxonicProps) => {
  const { eyebrow, titleMain, titleMuted, description, items } = {
    ...DEFAULTS,
    ...props,
  };

  const sectionRef = useRef<HTMLElement | null>(null);

  // Fade in the section when it enters the viewport.
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
      { threshold: 0.1 },
    );

    animatedElements.forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(24px)";
      element.style.transition = "opacity 600ms ease, transform 600ms ease";

      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gray-100 py-16 sm:py-20 lg:py-32"
    >
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section intro */}
        <div data-animate className="mb-10 sm:mb-14 lg:mb-16 max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
              {eyebrow}
            </span>
          </div>

          <h2 className="font-inter text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-8">
            {titleMain} <span className="text-gray-300">{titleMuted}</span>
          </h2>

          <div className="flex gap-4">
            <div className="w-[3px] bg-primary shrink-0" />

            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Feature cards */}
        <div
          data-animate
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200"
        >
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group relative bg-white p-6 sm:p-8 lg:p-10 transition-colors duration-300 overflow-hidden"
              >
                {/* Hover glow */}
                <div
                  aria-hidden="true"
                  className="absolute -top-10 -right-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                />

                <div className="relative z-10">
                  {/* Number and icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-inter text-2xl sm:text-3xl lg:text-4xl font-bold text-primary leading-none">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="w-11 h-11 bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors duration-300">
                      <Icon
                        aria-hidden={true}
                        className="w-5 h-5 text-primary"
                      />
                    </div>
                  </div>

                  {/* Card content */}
                  <h3 className="text-gray-900 text-lg sm:text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom hover indicator */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyPlaxonic;
