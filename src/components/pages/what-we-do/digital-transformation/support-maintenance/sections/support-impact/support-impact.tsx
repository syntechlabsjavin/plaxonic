import {
  Radar,
  BadgeCheck,
  UserRoundCog,
  FileChartColumn,
} from "lucide-react";
import { useEffect, useState } from "react";

const impactMetrics = [
  {
    value: "99.9%",
    percentage: 99.9,
    color: "#249EDC",
    description: "uptime maintained across managed systems",
  },
  {
    value: "97%",
    percentage: 97,
    color: "#2DD4A7",
    description: "tickets resolved within SLA",
  },
  {
    value: "96%",
    percentage: 96,
    color: "#A78BFA",
    description: "client satisfaction (CSAT)",
  },
];

const impactFeatures = [
  {
    title: "Proactive, Not Reactive",
    description:
      "We catch and fix issues before they become outages or tickets.",
    icon: Radar,
  },
  {
    title: "SLA-Backed",
    description:
      "Response and resolution targets you can hold us accountable to.",
    icon: BadgeCheck,
  },
  {
    title: "Dedicated Engineers",
    description:
      "A team that knows your systems, not a rotating, anonymous queue.",
    icon: UserRoundCog,
  },
  {
    title: "Transparent Reporting",
    description:
      "Clear dashboards and reviews on uptime, incidents, and trends.",
    icon: FileChartColumn,
  },
];

function MetricGauge({
  value,
  percentage,
  color,
  description,
}: {
  value: string;
  percentage: number;
  color: string;
  description: string;
}) {
  const [progress, setProgress] = useState(0);
  const [animated, setAnimated] = useState(false);

  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - progress / 100);

  useEffect(() => {
    // Allow the initial 0% state to render before starting.
    const startTimer = window.setTimeout(() => {
      setAnimated(true);
    }, 100);

    return () => window.clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (!animated) return;

    let frameId = 0;
    let startTime: number | null = null;
    const duration = 1800;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;

      const elapsed = timestamp - startTime;
      const linearProgress = Math.min(elapsed / duration, 1);

      // Ease-out effect: fast at first, then smoothly slows down.
      const easedProgress = 1 - Math.pow(1 - linearProgress, 3);

      setProgress(percentage * easedProgress);

      if (linearProgress < 1) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    frameId = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(frameId);
  }, [animated, percentage]);

  const displayValue =
    percentage === 99.9
      ? `${Math.min(progress, 99.9).toFixed(1)}%`
      : `${Math.floor(progress)}%`;

  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative h-36 w-36">
        <svg
          className="h-full w-full -rotate-90"
          viewBox="0 0 120 120"
          role="img"
          aria-label={`${value} ${description}`}
        >
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="8"
          />

          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>

        {/* Animated number in the center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-inter text-2xl font-bold tabular-nums text-white">
            {displayValue}
          </span>
        </div>
      </div>

      <div className="mt-4 max-w-[180px] text-sm leading-snug text-gray-400">
        {description}
      </div>
    </div>
  );
}

const SupportImpact=()=> {
  return (
    <section className="relative w-full overflow-hidden bg-black py-16 sm:py-20 md:py-24 lg:py-36">
      {/* Background Image */}
      <img
        src="/src/assets/what-we-do/support-impact-bg.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
      />

      {/* Dark Overlay */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-black/40" />

      {/* Blue Glow Effects */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div
          className="absolute -top-32 right-1/4 h-[440px] w-[520px] max-w-full rounded-full blur-[150px]"
          style={{
            background: "#1ba3dd",
            opacity: 0.16,
          }}
        />

        <div
          className="absolute -bottom-32 -left-24 h-[480px] w-[480px] max-w-full rounded-full blur-[150px]"
          style={{
            background: "#1ba3dd",
            opacity: 0.12,
          }}
        />
      </div>

      <div className="relative z-[2] mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Main Impact Section */}
        <div className="mb-14 grid grid-cols-1 items-center gap-10 sm:mb-20 sm:gap-12 lg:mb-24 lg:grid-cols-12 lg:gap-16">
          {/* Left Content */}
          <div className="lg:col-span-5">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                The Plaxonic Impact
              </span>
            </div>

            <h2 className="mb-10 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Reliability You Can{" "}
              <span className="text-primary">Measure</span>.
            </h2>

            {/* Key Statistics */}
            <div className="grid grid-cols-2 gap-px border border-white/10 bg-white/10">
              <div className="bg-black p-6">
                <div className="mb-2 font-inter text-2xl font-bold leading-none text-primary lg:text-3xl">
                  24/7/365
                </div>

                <div className="text-xs leading-snug text-gray-400">
                  Always-on coverage—nights, weekends, and holidays included.
                </div>
              </div>

              <div className="bg-black p-6">
                <div className="mb-2 font-inter text-2xl font-bold leading-none text-primary lg:text-3xl">
                  &lt;15 min
                </div>

                <div className="text-xs leading-snug text-gray-400">
                  Average response on critical incidents, every time.
                </div>
              </div>
            </div>
          </div>

          {/* Circular Metric Gauges */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-7">
            {impactMetrics.map((metric) => (
              <MetricGauge key={metric.value} {...metric} />
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-8 max-w-2xl text-xs leading-relaxed text-gray-400">
          Uptime, SLA-resolution and CSAT figures are illustrative of typical
          managed engagements, not guaranteed results; your targets are set
          with you up front.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-t border-white/10 pt-14 md:grid-cols-2 lg:grid-cols-4">
          {impactFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <div key={feature.title} className="group">
                <Icon
                  className="mb-5 h-6 w-6 text-gray-500 transition-colors duration-300 group-hover:text-primary"
                  strokeWidth={1.5}
                />

                <h3 className="mb-2 text-lg font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SupportImpact;