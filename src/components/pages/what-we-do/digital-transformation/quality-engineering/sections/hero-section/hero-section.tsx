import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  LoaderCircle,
  X,
  Gauge,
  ShieldCheck,
} from "lucide-react";
import QeHeroBg from "../../../../../../../assets/what-we-do/qe-hero-bg.webp";


const testResults = [
  { name: "auth › login flow", duration: "212ms", status: "passed" },
  { name: "checkout › payment", duration: "388ms", status: "passed" },
  { name: "api › rate limiter", duration: "—", status: "running" },
  { name: "cart › sync conflict", duration: "1.4s", status: "failed" },
  { name: "search › relevance", duration: "176ms", status: "passed" },
];

const HeroSection = () => {
  const [coverage, setCoverage] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    let startTime: number | null = null;

    const duration = 1800;
    const targetCoverage = 94;

    const animateCoverage = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCoverage(Math.round(easedProgress * targetCoverage));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateCoverage);
      }
    };

    animationFrame = requestAnimationFrame(animateCoverage);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (coverage / 100) * circumference;

  return (
    <section className="relative w-full overflow-hidden bg-[#070809] pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-28 lg:pt-40">
      {/* Background Image */}
      <img
        src={QeHeroBg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-50"
      />

      {/* Background Overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[#070809]/55" />
      <div className="pointer-events-none absolute -left-[8%] -top-24 h-[520px] w-[620px] rounded-full bg-primary/15 blur-[170px]" />

      {/* Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 30% 20%, black 10%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 30% 20%, black 10%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left Content */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Digital Transformation / Specialized Services
              </span>
            </div>

            <h1 className="mb-6 font-inter text-[2rem] font-bold leading-[1.1] tracking-tight xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-white">Quality Engineering</span>
              <br />
              <span className="text-primary">&amp; Testing</span>
            </h1>

            <p className="mb-6 max-w-xl text-base font-medium leading-snug text-white sm:text-lg md:text-xl lg:text-2xl">
              Ship faster, break nothing. We build quality into every release,
              so confidence scales with your velocity.
            </p>

            <div className="mb-10 flex max-w-xl gap-4">
              <div className="w-[3px] flex-shrink-0 bg-primary" />
              <p className="text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg">
                From test automation and performance to security, API, and
                continuous QA wired into your pipeline, our quality engineers
                catch defects before your users ever do.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col flex-wrap gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => (window.location.href = "/contact")}
                className="group inline-flex w-full items-center justify-center gap-3 bg-primary px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-dark sm:w-auto"
              >
                <span>Start Testing With Us</span>
                <ArrowRight className="h-5 w-5 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
              </button>

              <a
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-3 border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white hover:text-gray-900 sm:w-auto"
              >
                Book a QA Audit
              </a>
            </div>
          </div>

          {/* Right Content - Test Dashboard */}
          <div className="relative min-w-0">
            <div className="relative border border-white/10 bg-[#0c0f15] shadow-2xl">
              {/* Dashboard Header */}
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3.5 sm:px-5">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-mono text-xs text-gray-500">
                  ci › test run #4821
                </span>
              </div>

              {/* Test Results */}
              <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:p-5 lg:p-7">
                <div className="min-w-0 space-y-2.5">
                  {testResults.map((test) => (
                    <div
                      key={test.name}
                      className="flex min-w-0 items-center gap-3 border border-white/10 bg-white/[0.03] px-3.5 py-2.5"
                    >
                      <span
                        className={`flex h-5 w-5 flex-shrink-0 items-center justify-center ${
                          test.status === "passed"
                            ? "bg-emerald-500/20 text-emerald-400"
                            : test.status === "running"
                              ? "bg-primary/20 text-primary"
                              : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {test.status === "passed" && (
                          <Check className="h-3.5 w-3.5" />
                        )}
                        {test.status === "running" && (
                          <LoaderCircle className="h-3.5 w-3.5 animate-spin" />
                        )}
                        {test.status === "failed" && (
                          <X className="h-3.5 w-3.5" />
                        )}
                      </span>

                      <span className="truncate font-mono text-[13px] text-gray-300">
                        {test.name}
                      </span>

                      <span className="ml-auto flex-shrink-0 font-mono text-[11px] text-gray-500">
                        {test.duration}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Animated Test Coverage Gauge */}
                <div className="flex flex-col items-center justify-center gap-2 sm:w-[150px]">
                  <div className="relative h-28 w-28">
                    <svg
                      viewBox="0 0 100 100"
                      className="h-full w-full -rotate-90"
                      role="img"
                      aria-label={`Test coverage: ${coverage} percent`}
                    >
                      {/* Background Circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="none"
                        stroke="rgba(255,255,255,0.08)"
                        strokeWidth="8"
                      />

                      {/* Animated Progress Circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="none"
                        stroke="#1ba3dd"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                      />
                    </svg>

                    {/* Animated Percentage */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold leading-none tabular-nums text-white">
                        {coverage}%
                      </span>

                      <span className="mt-1 text-[10px] uppercase tracking-wide text-gray-500">
                        Coverage
                      </span>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-xs font-semibold text-emerald-400">
                      4 passed
                    </div>
                    <div className="text-xs font-semibold text-red-400">
                      1 failed
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Release Speed Card */}
            <div className="absolute -bottom-5 -left-4 flex items-center gap-3 border border-white/15 bg-white/[0.07] px-4 py-3 backdrop-blur-md sm:-left-6">
              <Gauge className="h-5 w-5 text-primary" aria-hidden="true" />
              <div>
                <div className="text-base font-bold leading-none text-white">
                  3× faster
                </div>
                <div className="mt-0.5 text-[11px] text-gray-400">
                  release cycles
                </div>
              </div>
            </div>

            {/* Release Quality Card */}
            <div className="absolute -right-4 -top-5 flex items-center gap-3 border border-white/15 bg-white/[0.07] px-4 py-3 backdrop-blur-md sm:-right-6">
              <ShieldCheck
                className="h-5 w-5 text-emerald-400"
                aria-hidden="true"
              />
              <div>
                <div className="text-base font-bold leading-none text-white">
                  Zero-defect
                </div>
                <div className="mt-0.5 text-[11px] text-gray-400">
                  release goal
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;