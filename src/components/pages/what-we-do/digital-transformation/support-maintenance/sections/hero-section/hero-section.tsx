import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Clock,
  ShieldCheck,
  Activity,
  ArrowRight,
  CircleCheck,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const supportFeatures = [
  { label: "24/7/365 coverage", icon: Clock },
  { label: "SLA-backed", icon: ShieldCheck },
  { label: "Proactive monitoring", icon: Activity },
];

const systemStatuses = [
  { name: "API Gateway", uptime: "99.99%" },
  { name: "Web Application", uptime: "99.98%" },
  { name: "Database Cluster", uptime: "100%" },
  { name: "Payments Service", uptime: "99.97%" },
];

const healthMetrics = [
  { value: "99.9%", label: "uptime SLA" },
  { value: "<15m", label: "response" },
  { value: "24/7", label: "coverage" },
];

const HeroSection=()=> {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        "(prefers-reduced-motion: no-preference)",
        () => {
          // Left-side content
          gsap.from(".support-copy", {
            autoAlpha: 0,
            y: 35,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".support-copy",
              start: "top 85%",
              once: true,
            },
          });

          // Dashboard entrance
          gsap.from(".support-dashboard", {
            autoAlpha: 0,
            x: 45,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".support-dashboard",
              start: "top 85%",
              once: true,
            },
          });

          // Individual system rows
          gsap.from(".system-status-row", {
            autoAlpha: 0,
            x: 20,
            duration: 0.45,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".system-status-list",
              start: "top 90%",
              once: true,
            },
          });

          // Dashboard metrics
          gsap.from(".health-metric", {
            autoAlpha: 0,
            y: 15,
            duration: 0.5,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".health-metrics",
              start: "top 95%",
              once: true,
            },
          });

          // Decorative background glow
          gsap.to(".support-glow", {
            scale: 1.12,
            opacity: 0.75,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        }
      );

      return () => mm.revert();
    }, section);

    return () => ctx.revert();
  }, []);

  const handleSupportPlan = () => {
    window.location.href = "/contact";
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-28 lg:pt-40"
    >
      {/* Background grid and glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(238, 242, 246) 1px, transparent 1px), linear-gradient(rgb(238, 242, 246) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(80% 70% at 30% 30%, black 30%, transparent 80%)",
          }}
        />

        <div className="support-glow absolute -left-24 -top-24 h-[520px] w-[520px] max-w-full rounded-full bg-primary/[0.07] blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="flex flex-col gap-10 sm:gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          {/* Left content */}
          <div className="lg:w-[52%]">
            <div className="support-copy mb-6 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Digital Transformation / Enterprise Solutions
              </span>
            </div>

            <h1 className="support-copy mb-8 font-inter text-[2rem] font-bold leading-[1.1] tracking-tight xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-gray-900">Support &amp;</span>
              <br />
              <span className="text-primary">Maintenance</span>
            </h1>

            <div className="support-copy mb-10 flex max-w-2xl gap-4">
              <div className="w-[3px] flex-shrink-0 bg-primary" />

              <p className="text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl">
                Software doesn't look after itself. We keep your
                applications fast, secure, and available, with 24/7
                monitoring, rapid incident response, proactive
                maintenance, and continuous optimization, all backed
                by SLAs you can hold us to.
              </p>
            </div>

            {/* Service highlights */}
            <div className="support-copy mb-10 flex flex-wrap gap-3">
              {supportFeatures.map(({ label, icon: Icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  {label}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="support-copy flex flex-wrap gap-4">
              <button
                type="button"
                onClick={handleSupportPlan}
                className="group inline-flex w-full items-center justify-center gap-3 bg-primary px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-dark sm:w-auto"
              >
                <span>Get a Support Plan</span>

                <ArrowRight className="-rotate-45 transition-transform duration-300 group-hover:rotate-0" size={20} />
              </button>

              <a
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-3 border-2 border-gray-900 px-8 py-3.5 text-base font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white sm:w-auto"
              >
                Free Systems Health Check
              </a>
            </div>
          </div>

          {/* Right system health dashboard */}
          <div className="support-dashboard flex justify-center lg:w-[46%] lg:justify-end">
            <div className="relative w-full max-w-xl">
              <div className="pointer-events-none absolute left-1/4 top-1/4 h-[420px] w-[420px] max-w-full rounded-full bg-primary/[0.14] blur-[80px]" />

              <div className="relative overflow-hidden bg-gray-900 p-4 shadow-2xl sm:p-6 lg:p-7">
                {/* Dashboard header */}
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center bg-primary/20">
                      <Activity className="h-4 w-4 text-primary" />
                    </div>

                    <span className="text-xs font-medium text-gray-300">
                      System Health
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-green-400">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                    all systems operational
                  </span>
                </div>

                {/* System status rows */}
                <div className="system-status-list mb-5 space-y-2.5">
                  {systemStatuses.map((system) => (
                    <div
                      key={system.name}
                      className="system-status-row flex items-center gap-2 border border-white/10 bg-white/[0.03] px-3 py-3 sm:gap-3 sm:px-4"
                    >
                      <span className="h-2 w-2 flex-shrink-0 rounded-full bg-green-400" />

                      <span className="min-w-0 flex-1 truncate text-xs text-gray-300">
                        {system.name}
                      </span>

                      <span className="whitespace-nowrap font-mono text-[10px] text-gray-500">
                        {system.uptime}
                      </span>

                      <span className="whitespace-nowrap text-[10px] font-medium text-green-400">
                        Operational
                      </span>
                    </div>
                  ))}
                </div>

                {/* Incident notification */}
                <div className="mb-5 flex items-center gap-2 border border-primary/30 bg-primary/10 px-3 py-2.5">
                  <CircleCheck className="h-4 w-4 flex-shrink-0 text-primary" />

                  <span className="text-[11px] text-gray-300">
                    Incident{" "}
                    <span className="font-medium text-primary">
                      #4821
                    </span>{" "}
                    resolved in 8m 12s
                  </span>
                </div>

                {/* Health metrics */}
                <div className="health-metrics grid grid-cols-3 gap-px border border-white/10 bg-white/10">
                  {healthMetrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="health-metric bg-gray-900 px-2 py-3 sm:px-3"
                    >
                      <div className="mb-1 font-inter text-base font-bold leading-none text-primary sm:text-lg">
                        {metric.value}
                      </div>

                      <div className="text-[10px] leading-tight text-gray-500">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Decorative dashboard glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;