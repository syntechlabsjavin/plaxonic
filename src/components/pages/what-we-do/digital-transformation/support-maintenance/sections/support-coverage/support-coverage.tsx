import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Wrench, Siren, ShieldCheck, Gauge, BrainCircuit } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const supportPillars = [
  {
    title: "Application Support & Maintenance",
    description:
      "Bug fixes, enhancements, version upgrades, and dependency management that keep your software current, stable, and aligned with the business as it changes.",
    tags: ["Bug fixes", "Enhancements", "Upgrades"],
    metric: "48h",
    metricLabel: "avg. fix turnaround",
    icon: Wrench,
  },
  {
    title: "Monitoring & Incident Response",
    description:
      "24/7 monitoring, intelligent alerting, on-call engineers, and structured root-cause analysis, so issues are caught and resolved before users feel them.",
    tags: ["24/7 monitoring", "On-call", "RCA"],
    metric: "<15m",
    metricLabel: "critical response",
    icon: Siren,
  },
  {
    title: "Security & Patch Management",
    description:
      "Continuous vulnerability scanning, timely patching, and compliance upkeep that keep your systems hardened against an ever-shifting threat landscape.",
    tags: ["Vuln scanning", "Patching", "Compliance"],
    metric: "0",
    metricLabel: "unpatched criticals",
    icon: ShieldCheck,
  },
  {
    title: "Performance Optimization",
    description:
      "Profiling, tuning, capacity planning, and cost optimization that keep your applications fast and your cloud bill lean as usage grows.",
    tags: ["Profiling", "Tuning", "Cost control"],
    metric: "+35%",
    metricLabel: "speed gains",
    icon: Gauge,
  },
  {
    title: "AIOps & Predictive Monitoring",
    description:
      "AI-assisted monitoring that learns your system's normal behavior, detects anomalies before they become incidents, surfaces the likely root cause, and automates first-line triage, so problems are caught early and resolved faster.",
    tags: ["Anomaly detection", "Predictive alerts", "Auto-triage"],
    metric: "Early",
    metricLabel: "anomaly detection",
    icon: BrainCircuit,
  },
];

const SupportCoverage = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Sidebar entrance
        gsap.from(".coverage-sidebar", {
          autoAlpha: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".coverage-sidebar",
            start: "top 85%",
            once: true,
          },
        });

        // Support cards reveal in sequence
        gsap.from(".coverage-card", {
          autoAlpha: 0,
          y: 28,
          duration: 0.7,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".coverage-list",
            start: "top 82%",
            once: true,
          },
        });

        // Stagger each card's tags
        section.querySelectorAll(".coverage-card").forEach((card) => {
          const tags = card.querySelectorAll(".coverage-tag");

          gsap.from(tags, {
            autoAlpha: 0,
            y: 8,
            duration: 0.35,
            stagger: 0.07,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true,
            },
          });
        });
      });

      return () => mm.revert();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-x-clip bg-gray-50 py-16 sm:py-20 lg:py-32"
    >
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-[0.85fr_1.6fr] lg:gap-20">
          {/* Sticky sidebar */}
          <div className="coverage-sidebar self-start lg:sticky lg:top-28">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                What We Cover
              </span>
            </div>

            <h2 className="mb-8 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              We Keep It <span className="text-gray-300">Running</span>.
            </h2>

            <div className="mb-10 flex gap-4">
              <div className="w-[3px] flex-shrink-0 bg-primary" />

              <p className="text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
                Five pillars of managed support that cover the full lifecycle of
                your software, from the everyday fix to the 3am incident.
              </p>
            </div>

            {/* Live coverage indicator */}
            <div className="inline-flex items-center gap-2.5 border border-gray-200 bg-white px-4 py-2.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>

              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-gray-500">
                Live coverage readouts
              </span>
            </div>
          </div>

          {/* Support pillars */}
          <div className="coverage-list divide-y divide-gray-200 border border-gray-200 bg-white">
            {supportPillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <article
                  key={pillar.title}
                  className="coverage-card group relative grid grid-cols-1 gap-6 transition-colors duration-300 hover:bg-gray-50/70 sm:grid-cols-[1fr_auto] sm:gap-10 sm:p-7 lg:p-9 p-6"
                >
                  {/* Hover accent */}
                  <span className="pointer-events-none absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-y-100" />

                  {/* Description and tags */}
                  <div className="min-w-0">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                        <Icon className="h-6 w-6" strokeWidth={2} />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-lg font-semibold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-primary sm:text-xl lg:text-2xl">
                          {pillar.title}
                        </h3>

                        <p className="mt-3 text-sm leading-relaxed text-gray-600 lg:text-base">
                          {pillar.description}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2.5">
                          {pillar.tags.map((tag) => (
                            <span
                              key={tag}
                              className="coverage-tag inline-flex items-center border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 transition-colors group-hover:border-primary/30"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Metric */}
                  <div className="flex items-baseline gap-x-3 sm:min-w-[150px] sm:border-l sm:border-gray-100 sm:pl-8 sm:text-right sm:items-end sm:flex-col">
                    <div className="whitespace-nowrap font-inter text-4xl font-bold leading-none tracking-tight text-primary tabular-nums sm:text-5xl">
                      {pillar.metric}
                    </div>

                    <div className="text-xs leading-snug text-gray-500 sm:mt-2 sm:max-w-[140px]">
                      {pillar.metricLabel}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportCoverage;
