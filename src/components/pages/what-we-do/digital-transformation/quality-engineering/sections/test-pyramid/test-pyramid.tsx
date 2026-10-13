import { useEffect, useRef, useState } from "react";

const pyramidLevels = [
  {
    title: "End-to-End",
    label: "E2E Tests",
    percentage: 10,
    width: 34,
    number: "1",
    description:
      "A focused set of journeys that prove the whole system works together. Few, high-value, and stable.",
  },
  {
    title: "Integration",
    label: "Integration Tests",
    percentage: 30,
    width: 62,
    number: "2",
    description:
      "Services, APIs, and modules verified against their contracts, where most real-world bugs actually hide.",
  },
  {
    title: "Unit",
    label: "Unit Tests",
    percentage: 60,
    width: 100,
    number: "3",
    description:
      "Fast, isolated checks on every function and component. The broad, cheap foundation that runs in seconds.",
  },
];

const TestPyramid = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    // Trigger the animation when the section enters the viewport.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gray-50 py-16 sm:py-20 lg:py-32"
    >
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left Side - Test Pyramid */}
          <div>
            {/* Section Heading */}
            <div
              className={`mb-10 transition-all duration-700 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Our Strategy
                </span>
              </div>

              <h2 className="font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
                A Balanced <span className="text-gray-300">Test Pyramid</span>.
              </h2>
            </div>

            {/* Pyramid Bars */}
            <div className="flex flex-col items-center gap-3">
              {pyramidLevels.map((level, index) => (
                <div
                  key={level.title}
                  className={`flex h-16 items-center justify-center bg-primary shadow-lg transition-all duration-1000 ease-out sm:h-20 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                  style={{
                    width: isVisible ? `${level.width}%` : "0%",
                    transitionDelay: `${index * 200}ms`,
                  }}
                >
                  <span
                    className={`whitespace-nowrap text-sm font-semibold tracking-wide text-white transition-opacity duration-500 sm:text-base ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      transitionDelay: `${index * 200 + 400}ms`,
                    }}
                  >
                    {level.label}
                    <span className="ml-2 text-xs font-normal text-white/70">
                      {level.percentage}%
                    </span>
                  </span>
                </div>
              ))}

              {/* Pyramid Caption */}
              <div
                className={`mt-3 flex w-full items-center justify-between text-xs font-medium text-gray-400 transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                }`}
                style={{ transitionDelay: "800ms" }}
              >
                <span>← Slower, fewer, costlier</span>
                <span>Faster, more, cheaper →</span>
              </div>
            </div>
          </div>

          {/* Right Side - Explanation Cards */}
          <div className="space-y-5">
            {pyramidLevels.map((level, index) => (
              <div
                key={level.title}
                className={`group flex gap-5 border border-gray-200 bg-white p-6 transition-all duration-700 hover:border-primary/40 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{
                  transitionDelay: `${300 + index * 180}ms`,
                }}
              >
                {/* Number */}
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-primary transition-transform duration-300 group-hover:scale-105">
                  <span className="font-bold text-white">
                    {level.number}
                  </span>
                </div>

                {/* Card Content */}
                <div className="min-w-0">
                  <div className="mb-1.5 flex flex-wrap items-center gap-3">
                    <h3 className="font-inter text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary lg:text-xl">
                      {level.title}
                    </h3>

                    <span className="font-mono text-xs font-semibold text-primary">
                      {level.percentage}% of suite
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed text-gray-600">
                    {level.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestPyramid;