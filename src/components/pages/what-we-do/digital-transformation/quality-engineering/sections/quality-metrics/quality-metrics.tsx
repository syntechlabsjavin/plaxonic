import { useEffect, useRef, useState } from "react";
import QeMetricsBg from "../../../../../../../assets/what-we-do/qe-metrics-bg.png";

const metrics = [
  {
    target: 92,
    prefix: "",
    suffix: "%",
    title: "Defects caught pre-release",
    description: "before they reach production",
  },
  {
    target: 70,
    prefix: "−",
    suffix: "%",
    title: "Less regression time",
    description: "through smart automation",
  },
  {
    target: 3,
    prefix: "",
    suffix: "×",
    title: "Faster release cycles",
    description: "with continuous testing",
  },
  {
    target: 99,
    prefix: "",
    suffix: "%",
    title: "Critical-path coverage",
    description: "across core user journeys",
  },
];

const QualityMetrics = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>(
    metrics.map(() => 0)
  );

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
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1800;
    let animationFrame = 0;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;

      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out animation: fast at first, then smoothly slows down.
      const easedProgress = 1 - Math.pow(1 - progress, 4);

      setCounts(
        metrics.map((metric) =>
          Math.round(metric.target * easedProgress)
        )
      );

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCounts(metrics.map((metric) => metric.target));
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0a0c10] py-16 sm:py-20 md:py-24 lg:py-28"
    >
      {/* Background Image */}
      <img
        src={QeMetricsBg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
      />

      {/* Dark Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[#0a0c10]/50" />

      {/* Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 80%)",
        }}
      />

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-[-20%] h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-primary/12 blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Heading */}
        <div
          className={`mx-auto mb-10 max-w-3xl text-center transition-all duration-1000 ease-out sm:mb-14 lg:mb-16 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-6 inline-flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-light">
              The Impact
            </span>
          </div>

          <h2 className="font-inter text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Quality You Can{" "}
            <span className="text-primary">Measure</span>.
          </h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <div
              key={metric.title}
              className={`group bg-[#0a0c10]/80 p-6 text-center transition-all duration-700 ease-out hover:bg-[#11151c]/95 sm:p-8 lg:p-10 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{
                transitionDelay: `${200 + index * 180}ms`,
              }}
            >
              {/* Animated Number */}
              <div className="font-inter text-[clamp(2.5rem,1.8rem+2.6vw,3.75rem)] font-extrabold leading-none tracking-tight text-white transition-colors duration-300 group-hover:text-primary-light">
                <span>
                  {metric.prefix}
                  {counts[index]}
                  {metric.suffix}
                </span>
              </div>

              <div className="mt-4 text-sm font-semibold text-white md:text-base">
                {metric.title}
              </div>

              <div className="mt-1.5 text-xs text-gray-500 md:text-sm">
                {metric.description}
              </div>

              {/* Decorative Accent */}
              <div
                className={`mx-auto mt-6 h-[2px] bg-primary transition-all duration-700 ease-out ${
                  isVisible ? "w-10" : "w-0"
                }`}
                style={{
                  transitionDelay: `${600 + index * 180}ms`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p
          className={`mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-gray-400 transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          Illustrative figures based on typical engagements. Your baseline and
          targets are modeled up front, never promised blind.
        </p>
      </div>
    </section>
  );
};

export default QualityMetrics;