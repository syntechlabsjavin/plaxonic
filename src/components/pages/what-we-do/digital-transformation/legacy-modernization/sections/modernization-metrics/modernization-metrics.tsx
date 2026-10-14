import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LegacyMetricsBg from "../../../../../../../assets/what-we-do/legacy-metrics-bg.png";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  {
    prefix: "−",
    value: 60,
    suffix: "%",
    label: "Lower maintenance cost",
    description: "freed up for innovation",
  },
  {
    prefix: "",
    value: 5,
    suffix: "×",
    label: "Faster releases",
    description: "from months to days",
  },
  {
    prefix: "",
    value: 0,
    suffix: "",
    label: "Downtime at cutover",
    description: "incremental, zero-stop migration",
  },
  {
    prefix: "",
    value: 99.9,
    suffix: "%",
    label: "Post-migration uptime",
    description: "on resilient cloud infrastructure",
  },
];

const ModernizationMetrics = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const noteRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const metricsContainer = metricsRef.current;
    const note = noteRef.current;

    if (!section || !heading || !metricsContainer || !note) return;

    const ctx = gsap.context(() => {
      // Heading entrance animation
      gsap.fromTo(
        heading.children,
        {
          opacity: 0,
          y: 35,
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

      const cards = gsap.utils.toArray<HTMLElement>(
        ".metric-card",
        metricsContainer
      );

      // Staggered metric card entrance
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 45,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: metricsContainer,
            start: "top 82%",
            once: true,
          },
        }
      );

      // Count-up animation for each metric
      cards.forEach((card, index) => {
        const numberElement = card.querySelector<HTMLElement>(
          ".metric-number"
        );

        if (!numberElement) return;

        const metric = metrics[index];
        const counter = { value: 0 };

        gsap.to(counter, {
          value: metric.value,
          duration: 1.8,
          delay: 0.2 + index * 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: metricsContainer,
            start: "top 82%",
            once: true,
          },
          onUpdate: () => {
            const displayValue =
              metric.value % 1 === 0
                ? Math.round(counter.value).toString()
                : counter.value.toFixed(1);

            numberElement.textContent = `${metric.prefix}${displayValue}${metric.suffix}`;
          },
        });
      });

      // Disclaimer entrance
      gsap.fromTo(
        note,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: note,
            start: "top 95%",
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0a0c10] py-16 sm:py-20 lg:py-28"
    >
      {/* Background Image */}
      <img
        src={LegacyMetricsBg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
      />

      {/* Dark Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[#0a0c10]/55" />

      {/* Grid Pattern */}
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
          ref={headingRef}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 lg:mb-16"
        >
          <div className="mb-6 inline-flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-light">
              The Payoff
            </span>
          </div>

          <h2 className="font-inter text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Modernization That{" "}
            <span className="text-primary">Pays Back</span>.
          </h2>
        </div>

        {/* Metrics Grid */}
        <div
          ref={metricsRef}
          className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="metric-card bg-[#0a0c10]/80 p-6 text-center sm:p-8 lg:p-10"
            >
              <div className="font-inter text-[clamp(2.5rem,1.8rem+2.6vw,3.75rem)] font-extrabold leading-none tracking-tight text-white">
                <span className="metric-number">
                  {`${metric.prefix}0${metric.suffix}`}
                </span>
              </div>

              <div className="mt-4 text-sm font-semibold text-white md:text-base">
                {metric.label}
              </div>

              <div className="mt-1.5 text-xs text-gray-500 md:text-sm">
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p
          ref={noteRef}
          className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-gray-400"
        >
          Illustrative figures based on typical engagements. Your baseline and
          targets are modeled up front, never promised blind.
        </p>
      </div>
    </section>
  );
};

export default ModernizationMetrics;