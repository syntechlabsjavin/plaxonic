import { useEffect, useState } from "react";

const costStages = [
  {
    multiplier: 1,
    stage: "Requirements",
    description: "caught early",
    height: 16,
    color: "bg-primary",
  },
  {
    multiplier: 5,
    stage: "Development",
    description: "in code review",
    height: 32,
    color: "bg-primary",
  },
  {
    multiplier: 10,
    stage: "QA / Testing",
    description: "pre-release",
    height: 52,
    color: "bg-primary",
  },
  {
    multiplier: 25,
    stage: "Staging",
    description: "before launch",
    height: 74,
    color: "bg-primary",
  },
  {
    multiplier: 100,
    stage: "Production",
    description: "found by users",
    height: 100,
    color: "bg-gradient-to-t from-red-500/80 to-red-400",
  },
];

const QualityEngineeringCost = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frameId: number;
    let startTime: number | null = null;

    const duration = 1600;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;

      const elapsed = timestamp - startTime;
      const linearProgress = Math.min(elapsed / duration, 1);

      // Smoothly decelerate at the end
      const easedProgress = 1 - Math.pow(1 - linearProgress, 3);

      setProgress(easedProgress);

      if (linearProgress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gray-50 py-16 sm:py-20 lg:py-32">
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-[-5%] top-[-15%] h-[460px] w-[560px] rounded-full bg-primary/5 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Why Quality Engineering
              </span>
            </div>

            <h2 className="mb-6 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
              The Later A Bug Is Found,{" "}
              <span className="text-gray-300">The More It Costs</span>.
            </h2>

            <p className="mb-6 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
              A defect that slips to production can cost up to 100× more to fix
              than one caught at the start, in engineering hours, lost revenue,
              and trust. Quality engineering shifts testing left, so problems
              are found when they're cheap, not catastrophic.
            </p>

            <p className="max-w-xl text-sm leading-relaxed text-gray-500 md:text-base">
              We don't bolt testing on at the end. We engineer quality into
              every commit, every build, and every release.
            </p>
          </div>

          {/* Animated Defect Cost Chart */}
          <div className="relative border border-gray-200 bg-white p-6 lg:p-8">
            <div className="flex h-64 items-end gap-3 sm:gap-4">
              {costStages.map((item) => {
                const animatedHeight = item.height * progress;
                const animatedMultiplier = Math.round(
                  item.multiplier * progress
                );

                return (
                  <div
                    key={item.stage}
                    className="flex h-full min-w-0 flex-1 flex-col items-center justify-end"
                  >
                    {/* Animated Cost Label */}
                    <span className="mb-2 text-sm font-bold tabular-nums text-gray-900 sm:text-base">
                      {animatedMultiplier}×
                    </span>

                    {/* Bar grows from 0 to target height */}
                    <div
                      className={`w-full origin-bottom ${item.color}`}
                      style={{
                        height: `${animatedHeight}%`,
                        transition: "none",
                      }}
                      role="img"
                      aria-label={`${item.multiplier} times relative defect repair cost at ${item.stage}`}
                    />
                  </div>
                );
              })}
            </div>

            {/* Stage Labels */}
            <div className="mt-4 grid grid-cols-5 gap-3 border-t border-gray-200 pt-4 sm:gap-4">
              {costStages.map((item) => (
                <div key={item.stage} className="min-w-0 text-center">
                  <div className="text-[10px] font-semibold leading-tight text-gray-700 sm:text-xs">
                    {item.stage}
                  </div>

                  <div className="mt-0.5 hidden text-[9px] text-gray-400 sm:block sm:text-[10px]">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-5 text-center text-xs text-gray-500">
              Relative cost to fix a defect, by stage of discovery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityEngineeringCost;