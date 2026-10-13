import { useEffect, useRef } from "react";
import {
  Wallet,
  ShieldOff,
  Users,
  TrendingUp,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const riskMetrics = [
  {
    label: "Maintenance cost",
    description: "of IT budget on keeping the lights on",
    value: 88,
    icon: Wallet,
  },
  {
    label: "Security exposure",
    description: "unpatched, unsupported components",
    value: 72,
    icon: ShieldOff,
  },
  {
    label: "Talent scarcity",
    description: "fewer engineers who know the stack",
    value: 64,
    icon: Users,
  },
  {
    label: "Opportunity lost",
    description: "slower to ship than competitors",
    value: 94,
    icon: TrendingUp,
  },
];

const LegacyRiskSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const chart = chartRef.current;

    if (!section || !heading || !chart) return;

    const ctx = gsap.context(() => {
      // Animate the text content.
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

      // Reveal the chart container.
      gsap.fromTo(
        chart,
        {
          opacity: 0,
          y: 45,
          scale: 0.97,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: chart,
            start: "top 85%",
            once: true,
          },
        }
      );

      // Animate every bar from 0% to its target height.
      const bars = chart.querySelectorAll<HTMLElement>(".risk-bar");
      const percentages =
        chart.querySelectorAll<HTMLElement>(".risk-percentage");

      bars.forEach((bar, index) => {
        const targetHeight = Number(bar.dataset.value) || 0;
        const percentage = percentages[index];

        gsap.fromTo(
          bar,
          {
            height: "0%",
          },
          {
            height: `${targetHeight}%`,
            duration: 1.4,
            delay: 0.25 + index * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: chart,
              start: "top 85%",
              once: true,
            },
          }
        );

        // Count each percentage upward from zero.
        if (percentage) {
          const counter = { value: 0 };

          gsap.to(counter, {
            value: targetHeight,
            duration: 1.4,
            delay: 0.25 + index * 0.15,
            ease: "power3.out",
            snap: { value: 1 },
            onUpdate: () => {
              percentage.textContent = `${counter.value}%`;
            },
            scrollTrigger: {
              trigger: chart,
              start: "top 85%",
              once: true,
            },
          });
        }
      });

      // Animate the metric labels from bottom to top.
      gsap.fromTo(
        chart.querySelectorAll(".risk-label"),
        {
          opacity: 0,
          y: 15,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          delay: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: chart,
            start: "top 75%",
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
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute top-[-15%] left-[-5%] h-[460px] w-[560px] rounded-full bg-primary/5 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left content */}
          <div ref={headingRef}>
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                The Cost Of Standing Still
              </span>
            </div>

            <h2 className="mb-6 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Legacy Doesn't Age Gracefully,{" "}
              <span className="text-gray-300">
                It Compounds Risk
              </span>
              .
            </h2>

            <p className="mb-6 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
              Every year a critical system stays unmodernized, the
              cost of keeping it alive climbs, the security surface
              widens, and the pool of people who understand it
              shrinks. Doing nothing isn't the safe option, it's
              the expensive one.
            </p>

            <p className="max-w-xl text-sm leading-relaxed text-gray-500 md:text-base">
              Modernization turns that compounding liability back
              into an asset, on your timeline, without putting the
              business at risk.
            </p>
          </div>

          {/* Right chart */}
          <div
            ref={chartRef}
            className="relative border border-gray-200 bg-gray-50 p-4 sm:p-6 lg:p-8"
          >
            {/* Bars */}
            <div className="mb-6 flex h-56 items-end gap-3 sm:h-64 sm:gap-6">
              {riskMetrics.map((metric) => {
                const Icon = metric.icon;

                return (
                  <div
                    key={metric.label}
                    className="flex h-full min-w-0 flex-1 flex-col items-center justify-end"
                  >
                    <Icon
                      className="mb-3 h-5 w-5 shrink-0 -translate-y-2 text-primary"
                      aria-hidden="true"
                    />

                    <div className="relative flex h-full w-full items-end">
                      <div
                        data-value={metric.value}
                        className="risk-bar relative w-full bg-gradient-to-t from-red-500/70 via-orange-400/70 to-primary"
                        style={{ height: "0%" }}
                      >
                        <span className="risk-percentage absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-bold text-gray-900">
                          0%
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Metric descriptions */}
            <div className="grid grid-cols-4 gap-4 border-t border-gray-200 pt-4 sm:gap-6">
              {riskMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="risk-label text-center"
                >
                  <div className="text-[11px] font-semibold leading-tight text-gray-700 sm:text-xs">
                    {metric.label}
                  </div>

                  <div className="mt-1 hidden text-[9px] leading-tight text-gray-400 sm:block sm:text-[10px]">
                    {metric.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegacyRiskSection;