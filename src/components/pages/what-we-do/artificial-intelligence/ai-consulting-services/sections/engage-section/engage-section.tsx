import { useEffect, useRef, useState } from "react";

interface Engagement {
  number: string;
  title: string;
  bestFor: string;
  description: string;
  tags: string[];
  href: string;
}

const engagements: Engagement[] = [
  {
    number: "01",
    title: "Advisory Sprint",
    bestFor: "Best when you need direction fast",
    description:
      "A focused engagement to assess readiness, find and prioritize use cases, and leave you with a costed, sequenced AI roadmap.",
    tags: ["Readiness audit", "Use-case scoring", "Roadmap"],
    href: "/contact",
  },
  {
    number: "02",
    title: "Build Partnership",
    bestFor: "Best for taking one idea to production",
    description:
      "We design, prototype, and engineer a specific use case end to end, then deploy it as a monitored, evaluated production system.",
    tags: ["PoC to production", "MLOps", "Evaluation"],
    href: "/contact",
  },
  {
    number: "03",
    title: "Embedded AI Team",
    bestFor: "Best for scaling an AI program",
    description:
      "Senior AI engineers and strategists embed with your team to run a portfolio, ship continuously, and raise your in-house capability.",
    tags: ["Dedicated pod", "Portfolio delivery", "Enablement"],
    href: "/contact",
  },
];

const useInView = <T extends HTMLElement>(threshold = 0.15) => {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
};

const EngageSection = () => {
  const { ref, inView } = useInView<HTMLElement>();

  const reveal = `transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  }`;

  return (
    <section
      ref={ref}
      className="bg-gray-50 py-16 sm:py-20 lg:py-32"
    >
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className={`flex items-center gap-3 mb-6 ${reveal}`}>
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
              Ways To Engage
            </span>
          </div>

          <h2
            className={`font-inter text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] ${reveal}`}
            style={{ transitionDelay: "120ms" }}
          >
            Start Where You <span className="text-gray-300">Are</span>.
          </h2>
        </div>

        {/* Top line that draws across */}
        <div
          className={`h-px bg-gray-200 origin-left transition-transform duration-[1400ms] ease-out motion-reduce:transition-none ${
            inView ? "scale-x-100" : "scale-x-0"
          }`}
          style={{ transitionDelay: "300ms" }}
        />

        <div>
          {engagements.map((item, i) => (
            /* Wrapper carries the reveal delay; the link carries the hover. */
            <div
              key={item.title}
              className={reveal}
              style={{ transitionDelay: `${450 + i * 150}ms` }}
            >
              <a
                href={item.href}
                className="group grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] items-center gap-5 sm:gap-6 lg:gap-12 border-b border-gray-200 py-7 sm:py-8 lg:py-10 hover:bg-white transition-colors duration-300 lg:px-6 lg:-mx-6"
              >
                <div className="flex items-center gap-5 lg:w-[320px]">
                  <span className="font-inter text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-200 group-hover:text-primary transition-colors tabular-nums">
                    {item.number}
                  </span>
                  <div className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none">
                    <h3 className="font-inter text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <div className="text-primary text-xs font-semibold mt-1">
                      {item.bestFor}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                  {item.description}
                </p>

                <div className="flex items-center justify-start lg:justify-end gap-6">
                  <div className="flex flex-wrap gap-2 lg:justify-end lg:max-w-[300px]">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center justify-center px-2.5 py-1 text-xs font-medium text-gray-600 bg-gray-100 group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngageSection;