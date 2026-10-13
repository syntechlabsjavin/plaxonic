import { useEffect, useRef, useState } from "react";
import {
  ClipboardList,
  PenTool,
  Bot,
  CirclePlay,
  ChartNoAxesColumn,
  RefreshCw,
} from "lucide-react";

const lifecycleSteps = [
  {
    number: "01",
    title: "Plan & Strategize",
    description:
      "We map your risks, define coverage goals, and shape a test strategy aligned to how your product actually ships.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Design Test Cases",
    description:
      "Detailed scenarios, edge cases, and data sets, traceable back to requirements so nothing falls through the cracks.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Build Automation",
    description:
      "We automate the high-value, repeatable checks and wire them into your pipeline for continuous execution.",
    icon: Bot,
  },
  {
    number: "04",
    title: "Execute & Triage",
    description:
      "Suites run on every build. Failures are triaged fast, with clear, reproducible reports for your developers.",
    icon: CirclePlay,
  },
  {
    number: "05",
    title: "Report & Analyze",
    description:
      "Live dashboards on coverage, pass rates, and defect trends, so quality is visible to everyone, not buried.",
    icon: ChartNoAxesColumn,
  },
  {
    number: "06",
    title: "Optimize & Scale",
    description:
      "We prune flaky tests, expand coverage, and tune the suite so quality keeps pace as your product grows.",
    icon: RefreshCw,
  },
];

const QALifecycle = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-32"
    >
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Heading */}
        <div
          className={`mx-auto mb-12 max-w-3xl text-center transition-all duration-700 ease-out sm:mb-16 lg:mb-20 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-6 inline-flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              How We Work
            </span>
          </div>

          <h2 className="mb-6 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
            The QA <span className="text-gray-300">lifecycle</span>.
          </h2>

          <p className="text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
            A repeatable, transparent process that turns testing from a
            last-minute scramble into a continuous, measurable discipline.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">
          {/* Timeline Track */}
          <div className="absolute bottom-0 left-8 top-0 w-[2px] -translate-x-1/2 bg-gray-200 lg:left-1/2" />

          {/* Animated Timeline Progress */}
          <div
            className="absolute left-8 top-0 w-[2px] -translate-x-1/2 origin-top bg-gradient-to-b from-primary to-primary-dark transition-transform duration-[2200ms] ease-out lg:left-1/2"
            style={{
              height: "100%",
              transform: `translateX(-50%) scaleY(${isVisible ? 1 : 0})`,
              transitionDelay: "200ms",
            }}
          />

          <div className="space-y-10 lg:space-y-4">
            {lifecycleSteps.map((step, index) => {
              const StepIcon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={step.number}
                  className={`relative flex items-center ${
                    isLeft ? "lg:justify-start" : "lg:justify-end"
                  }`}
                >
                  {/* Timeline Marker */}
                  <div
                    className={`absolute left-8 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center bg-primary text-white shadow-lg transition-all duration-700 ease-out hover:scale-110 hover:shadow-primary/30 lg:left-1/2 ${
                      isVisible
                        ? "scale-100 opacity-100"
                        : "scale-50 opacity-0"
                    }`}
                    style={{
                      transitionDelay: `${250 + index * 180}ms`,
                    }}
                  >
                    <StepIcon className="h-5 w-5" />
                  </div>

                  {/* Timeline Card */}
                  <div
                    className={`ml-20 w-full transition-all duration-700 ease-out lg:ml-0 lg:w-[calc(50%-3rem)] ${
                      isLeft
                        ? "lg:mr-auto lg:pr-12 lg:text-right"
                        : "lg:ml-auto lg:pl-12"
                    } ${
                      isVisible
                        ? "translate-x-0 translate-y-0 opacity-100"
                        : `${
                            isLeft
                              ? "-translate-x-8"
                              : "translate-x-8"
                          } translate-y-5 opacity-0`
                    }`}
                    style={{
                      transitionDelay: `${300 + index * 180}ms`,
                    }}
                  >
                    <div className="group border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-gray-900/5">
                      <span className="font-inter text-2xl font-extrabold tabular-nums text-primary lg:text-3xl">
                        {step.number}
                      </span>

                      <h3 className="mb-2 mt-1 font-inter text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary lg:text-xl">
                        {step.title}
                      </h3>

                      <p className="text-sm leading-relaxed text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QALifecycle;