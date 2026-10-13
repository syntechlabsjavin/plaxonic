import { useEffect, useRef, useState } from "react";

const impactStats = [
  { target: 120, suffix: "+", label: "Transformation programs advised" },
  { target: 40, suffix: "%", label: "Average reduction in delivery risk" },
  { target: 3, suffix: "x", label: "Faster decision-to-roadmap cycle" },
  { target: 13, suffix: "yrs", label: "Median advisor experience" },
];

const AdvisoryImpact = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [counts, setCounts] = useState<number[]>(
    impactStats.map(() => 0)
  );

  // Start counting when the section enters the viewport.
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Animate all statistics from 0 to their target values.
  useEffect(() => {
    if (!hasStarted) return;

    const duration = 1800;
    let animationFrame = 0;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;

      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out effect for a smooth finish.
      const easedProgress = 1 - Math.pow(1 - progress, 4);

      setCounts(
        impactStats.map((stat) =>
          Math.round(stat.target * easedProgress)
        )
      );

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#070809] py-16 sm:py-20 md:py-24 lg:py-36"
    >
      <img
        src="/placeholder-x.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#070809] via-[#070809]/90 to-[#070809]/70" />

      <div className="pointer-events-none absolute left-1/4 top-[-20%] h-[500px] w-[600px] max-w-full rounded-full bg-primary/15 blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="mb-10 max-w-3xl sm:mb-14 lg:mb-20">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-light">
              The Impact
            </span>
          </div>

          <h2 className="mb-8 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-6xl lg:text-7xl">
            Advice That{" "}
            <span className="text-primary">
              Moves The Number
            </span>
            .
          </h2>

          <p className="text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg">
            Strategy only matters if it changes outcomes. Here's the
            kind of impact our advisory work consistently drives for
            the organizations we partner with.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {impactStats.map((stat, index) => (
            <div
              key={stat.label}
              className="border-l border-white/15 pl-6"
            >
              <div
                className="font-inter text-4xl font-bold leading-none tracking-tight text-white sm:text-5xl lg:text-6xl"
                aria-label={`${stat.target}${stat.suffix}`}
              >
                <span>{counts[index]}</span>
                <span>{stat.suffix}</span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-gray-400 md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-xs leading-relaxed text-gray-400">
          Illustrative figures based on typical engagements. Your
          baseline and targets are modeled up front, never promised
          blind.
        </p>
      </div>
    </section>
  );
};

export default AdvisoryImpact;