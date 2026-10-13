import { useEffect, useRef, useState } from "react";

/* -------------------------------------------------------------------------- */
/* Types & default content                                                    */
/* -------------------------------------------------------------------------- */

interface ProcessStep {
  title: string;
  tags: string;
  description: string;
}

interface ProcessTimelineProps {
  eyebrow?: string;
  titleMain?: string;
  titleMuted?: string;
  description?: string;
  steps?: ProcessStep[];
}

const DEFAULT_STEPS: ProcessStep[] = [
  {
    title: "Business & Technical Alignment",
    tags: "Goals · Integration Requirements",
    description:
      "Our team begins by understanding your business goals and integration requirements. This helps us define a development strategy that addresses your business priorities and fits your current technology environment.",
  },
  {
    title: "Architecture & Service Planning",
    tags: "Service Boundaries · Patterns",
    description:
      "We map application components, define service boundaries, and select suitable communication patterns. This creates a clear architectural foundation for developing APIs and microservices that work together effectively.",
  },
  {
    title: "API-First Design",
    tags: "Contracts · Auth · Error Handling",
    description:
      "We plan API contracts, data structures, authentication, and error handling before implementation. This gives our development teams a shared understanding of how services will communicate and helps reduce integration issues later.",
  },
  {
    title: "Modular Development",
    tags: "Components · Interfaces",
    description:
      "We develop applications in manageable components with defined responsibilities and interfaces. This helps us support you with easier maintenance, targeted updates, and independent development where the architecture allows.",
  },
  {
    title: "Integration & Quality Assurance",
    tags: "Integration · Performance Testing",
    description:
      "We validate API behavior, service communication, data exchange, security controls, and failure handling. Integration and performance testing help identify issues before they affect production environments.",
  },
  {
    title: "Continuous Improvement",
    tags: "Monitoring · Refinement",
    description:
      "After deployment, monitoring and performance data help identify opportunities to improve reliability, efficiency, and maintainability. We refine APIs and services as your applications, workloads, and business requirements change.",
  },
];

const DEFAULTS: Required<ProcessTimelineProps> = {
  eyebrow: "How We Deliver",
  titleMain: "Our Structured Approach to",
  titleMuted: "Microservices & API Development",
  description:
    "We follow a structured development process that keeps your microservices and APIs aligned with your application architecture and business requirements.",
  steps: DEFAULT_STEPS,
};

/** How far down the viewport (0–1) the timeline "fills" to as you scroll */
const TRIGGER_RATIO = 0.6;

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

const ProcessTimeline=(props: ProcessTimelineProps)=> {
  const { eyebrow, titleMain, titleMuted, description, steps } = {
    ...DEFAULTS,
    ...props,
  };

  const listRef = useRef<HTMLDivElement | null>(null);
  const fillRef = useRef<HTMLSpanElement | null>(null);
  const nodeRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [reached, setReached] = useState<boolean[]>(() =>
    steps.map(() => false)
  );

  // Scroll-linked progress line + "reached" state for each numbered node
  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const list = listRef.current;
      if (!list) return;

      const trigger = window.innerHeight * TRIGGER_RATIO;
      const rect = list.getBoundingClientRect();
      const progress = Math.min(
        Math.max((trigger - rect.top) / rect.height, 0),
        1
      );

      if (fillRef.current) {
        fillRef.current.style.transform = `scaleY(${progress})`;
      }

      const next = steps.map((_, i) => {
        const node = nodeRefs.current[i];
        if (!node) return false;
        const box = node.getBoundingClientRect();
        return box.top + box.height / 2 <= trigger;
      });

      setReached((prev) =>
        prev.length === next.length && prev.every((v, i) => v === next[i])
          ? prev
          : next
      );
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [steps]);

  return (
    // overflow-clip (not overflow-hidden) so the sticky column below still sticks
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-32 overflow-clip">
      {/* Blueprint grid + fade */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(27, 163, 221) 1px, transparent 1px), linear-gradient(rgb(27, 163, 221) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>
      <div
        className="absolute inset-0 bg-linear-to-b from-white/70 via-transparent to-white/80"
        aria-hidden="true"
      />

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.4fr] gap-10 sm:gap-12 lg:gap-20">
          {/* Sticky intro */}
          <div className="lg:sticky lg:top-32 self-start">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
                {eyebrow}
              </span>
            </div>
            <h2 className="font-inter text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-8">
              {titleMain} <span className="text-gray-300">{titleMuted}</span>
            </h2>
            <div className="flex gap-4 max-w-xl">
              <div className="w-[3px] bg-primary shrink-0" />
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div ref={listRef} className="relative pl-12 sm:pl-16">
            <div
              className="absolute left-[22px] sm:left-[30px] top-2 bottom-2 w-[2px] bg-gray-200"
              aria-hidden="true"
            >
              <span
                ref={fillRef}
                className="block w-full h-full bg-primary origin-top"
                style={{ transform: "scaleY(0)" }}
              />
            </div>

            <ol className="space-y-10">
              {steps.map((step, index) => {
                const isReached = reached[index];
                return (
                  <li key={step.title} className="relative group">
                    <div
                      ref={(el) => {
                        nodeRefs.current[index] = el;
                      }}
                      className={`absolute -left-12 sm:-left-16 top-0 w-11 h-11 sm:w-[52px] sm:h-[52px] border-2 border-primary flex items-center justify-center shadow-sm z-10 group-hover:bg-primary transition-colors duration-300 ${
                        isReached ? "bg-primary" : "bg-white"
                      }`}
                    >
                      <span
                        className={`text-xs sm:text-sm font-bold tabular-nums group-hover:text-white transition-colors duration-300 ${
                          isReached ? "text-white" : "text-primary"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="bg-white border border-gray-200 group-hover:border-primary/40 transition-colors duration-300 p-6 lg:p-7">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                        <h3 className="text-gray-900 text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                          {step.title}
                        </h3>
                        <span className="text-primary text-[11px] font-mono bg-primary/10 px-2.5 py-1 self-start">
                          {step.tags}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessTimeline;