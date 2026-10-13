import { useEffect, useRef, useState } from "react";
import {
  GitCommitHorizontal,
  Hammer,
  FlaskConical,
  Rocket,
  CircleCheck,
  ArrowRight,
} from "lucide-react";

const pipelineSteps = [
  {
    title: "Commit",
    description: "push to branch",
    icon: GitCommitHorizontal,
  },
  {
    title: "Build",
    description: "compile & lint",
    icon: Hammer,
  },
  {
    title: "Test",
    description: "automated suite",
    icon: FlaskConical,
  },
  {
    title: "Deploy",
    description: "gated release",
    icon: Rocket,
  },
];

const benefits = [
  "Quality gates that block regressions before merge",
  "Parallelized suites that keep pipelines fast",
  "Self-healing locators that cut flaky-test noise",
  "Rich reports and dashboards your whole team can read",
];

const ContinuousTesting = () => {
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
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#070809] py-16 sm:py-20 md:py-24 lg:py-36"
    >
      {/* Background */}
      <img
        src="/qe-automation-bg.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
      />

      <div className="pointer-events-none absolute inset-0 bg-[#070809]/50" />

      <div className="pointer-events-none absolute bottom-[-20%] left-[-5%] h-[460px] w-[560px] rounded-full bg-primary/12 blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Pipeline Card */}
          <div
            className={`relative order-2 border border-white/10 bg-[#0c0f15] p-5 transition-all duration-1000 ease-out sm:p-7 lg:order-1 lg:p-9 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            }`}
          >
            {/* Header */}
            <div className="mb-7 flex items-center justify-between">
              <span className="font-mono text-xs text-gray-500">
                pipeline.yml
              </span>

              <span className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                passing
              </span>
            </div>

            {/* Pipeline Steps */}
            <div className="relative">
              {/* Background connector */}
              <div className="absolute bottom-6 left-[27px] top-6 w-[2px] bg-white/10" />

              {/* Animated connector */}
              <div
                className="absolute left-[27px] top-6 w-[2px] origin-top bg-gradient-to-b from-primary-light to-primary transition-transform duration-[1800ms] ease-out"
                style={{
                  height: "calc(100% - 48px)",
                  transform: isVisible ? "scaleY(1)" : "scaleY(0)",
                  transitionDelay: "300ms",
                }}
              />

              <div className="space-y-5">
                {pipelineSteps.map((step, index) => {
                  const StepIcon = step.icon;

                  return (
                    <div
                      key={step.title}
                      className={`relative flex items-center gap-4 transition-all duration-700 ease-out ${
                        isVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-5 opacity-0"
                      }`}
                      style={{
                        transitionDelay: `${350 + index * 220}ms`,
                      }}
                    >
                      {/* Step Icon */}
                      <div className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center border border-primary/30 bg-[#0e2534] text-primary transition-all duration-300 hover:border-primary hover:bg-primary/20">
                        <StepIcon className="h-6 w-6" />
                      </div>

                      {/* Step Details */}
                      <div className="flex flex-1 items-center justify-between border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors duration-300 hover:border-primary/30 hover:bg-white/[0.05]">
                        <div>
                          <div className="text-sm font-semibold text-white">
                            {step.title}
                          </div>

                          <div className="text-xs text-gray-500">
                            {step.description}
                          </div>
                        </div>

                        <CircleCheck
                          className={`h-5 w-5 text-emerald-400 transition-all duration-500 ${
                            isVisible
                              ? "scale-100 opacity-100"
                              : "scale-50 opacity-0"
                          }`}
                          style={{
                            transitionDelay: `${750 + index * 220}ms`,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`order-1 transition-all duration-1000 ease-out lg:order-2 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Continuous Testing
              </span>
            </div>

            <h2 className="mb-6 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Automation That Runs{" "}
              <span className="text-white/40">While You Sleep</span>.
            </h2>

            <p className="mb-8 max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg">
              We wire testing directly into your CI/CD pipeline, so every
              commit is built, tested, and quality-gated automatically. Broken
              builds never reach your users, and your team gets feedback in
              minutes, not days.
            </p>

            {/* Benefits */}
            <ul className="mb-9 space-y-3">
              {benefits.map((benefit, index) => (
                <li
                  key={benefit}
                  className={`flex items-start gap-3 text-sm text-gray-300 transition-all duration-700 ease-out md:text-base ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-5 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${450 + index * 150}ms`,
                  }}
                >
                  <CircleCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />

                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              type="button"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex w-full items-center justify-center gap-3 bg-primary px-8 py-3.5 text-base font-semibold text-white transition-colors duration-300 hover:bg-primary-dark sm:w-auto"
            >
              <span>Automate Your QA</span>

              <ArrowRight className="-rotate-45 h-5 w-5 transition-transform duration-300 group-hover:rotate-0" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContinuousTesting;