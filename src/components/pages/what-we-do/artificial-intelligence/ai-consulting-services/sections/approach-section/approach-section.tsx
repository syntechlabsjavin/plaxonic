import { useEffect, useRef, useState } from "react";

interface Step {
  title: string;
  description: string;
  deliverable: string;
}

const steps: Step[] = [
  {
    title: "Discover",
    description:
      "We map your goals, data, and constraints, then surface the use cases worth pursuing.",
    deliverable: "Opportunity map",
  },
  {
    title: "Frame",
    description:
      "We define success in business terms, scope the first build, and agree how we measure it.",
    deliverable: "Scoped plan + metrics",
  },
  {
    title: "Prototype",
    description:
      "We build a working proof against your real data to validate value and de-risk the approach.",
    deliverable: "Evaluated PoC",
  },
  {
    title: "Build",
    description:
      "We engineer the model into a reliable, monitored service with evaluation and guardrails.",
    deliverable: "Production system",
  },
  {
    title: "Scale",
    description:
      "We extend, optimize, and hand over, raising your team's AI capability as we go.",
    deliverable: "Adoption + uplift",
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

const ApproachSection = () => {
  const { ref, inView } = useInView<HTMLElement>();

  const reveal = `transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  }`;

  return (
    <section
      id="approach"
      ref={ref}
      className="bg-gray-50 py-16 sm:py-20 lg:py-32"
    >
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="max-w-3xl mb-10 sm:mb-14 lg:mb-16">
          <div className={`flex items-center gap-3 mb-6 ${reveal}`}>
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
              How We Work
            </span>
          </div>

          <h2
            className={`font-inter text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.05] ${reveal}`}
            style={{ transitionDelay: "120ms" }}
          >
            From Idea To <span className="text-gray-300">Impact</span>.
          </h2>
        </div>

        {/* Progress bar that fills left to right */}
        <div className="relative h-[3px] bg-gray-200 mb-0 overflow-hidden">
          <div
            className={`absolute inset-y-0 left-0 w-full bg-primary origin-left transition-transform duration-[1600ms] ease-out motion-reduce:transition-none ${
              inView ? "scale-x-100" : "scale-x-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-x border-b border-gray-200">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className={`group relative bg-white p-6 sm:p-7 lg:p-8 border-t-2 border-t-primary border-r border-gray-200 last:border-r-0 hover:bg-primary/[0.03] ${reveal}`}
              style={{ transitionDelay: `${400 + i * 150}ms` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-7 flex items-center justify-center bg-primary text-white text-xs font-bold transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none">
                  {i + 1}
                </span>
                <h3 className="font-inter text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6 min-h-[72px]">
                {step.description}
              </p>

              <div className="border-t border-gray-100 pt-3">
                <div className="text-[10px] font-semibold tracking-[0.14em] uppercase text-gray-400">
                  Deliverable
                </div>
                <div className="text-gray-900 text-sm font-semibold mt-1 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none">
                  {step.deliverable}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;