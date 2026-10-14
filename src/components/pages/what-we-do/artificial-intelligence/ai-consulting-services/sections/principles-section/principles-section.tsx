import { useEffect, useRef, useState } from "react";
import { Gauge, Lock, ShieldCheck, Workflow, type LucideIcon } from "lucide-react";

interface Principle {
  icon: LucideIcon;
  title: string;
  description: string;
}

const principles: Principle[] = [
  {
    icon: Gauge,
    title: "Outcomes Over Hype",
    description:
      "We start from the number you want to move, not the model of the month. If it does not change the business, we do not build it.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible By Default",
    description:
      "Evaluation, guardrails, and human oversight are part of the build, so accuracy and safety are designed in, not bolted on.",
  },
  {
    icon: Lock,
    title: "Your Data Stays Yours",
    description:
      "We architect for privacy and control, with clear boundaries on where your data lives and how models are allowed to use it.",
  },
  {
    icon: Workflow,
    title: "Built To Run",
    description:
      "We engineer for production from the first prototype, so what we prove keeps working long after the excitement fades.",
  },
];

const useInView = <T extends HTMLElement>(threshold = 0.15) => {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
};

const PrinciplesSection = () => {
  const { ref, inView } = useInView<HTMLElement>();

  const reveal = `transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  }`;

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-32"
    >
      {/* Soft pulsing glow */}
      <div className="pointer-events-none absolute bottom-[-25%] left-1/2 -translate-x-1/2 w-[820px] h-[460px] rounded-full bg-primary/5 blur-[180px] animate-pulse motion-reduce:animate-none" />

      <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="max-w-4xl">
          <div className={`flex items-center gap-3 mb-8 ${reveal}`}>
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
              How We Think
            </span>
          </div>

          <blockquote
            className={`font-inter text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.12] ${reveal}`}
            style={{ transitionDelay: "150ms" }}
          >
            We Don't Chase The Model Of The Month. We Build AI That{" "}
            <span
              className={`text-primary [background-image:linear-gradient(currentColor,currentColor)] bg-no-repeat [background-position:0_100%] [box-decoration-break:clone] transition-[background-size] duration-[1200ms] ease-out delay-[900ms] motion-reduce:transition-none ${
                inView ? "[background-size:100%_3px]" : "[background-size:0%_3px]"
              }`}
            >
              Earns Its Place In Production
            </span>
            .
          </blockquote>
        </div>

        {/* Divider line that draws across */}
        <div
          className={`mt-12 sm:mt-16 lg:mt-20 h-px bg-gray-200 origin-left transition-transform duration-[1400ms] ease-out motion-reduce:transition-none ${
            inView ? "scale-x-100" : "scale-x-0"
          }`}
          style={{ transitionDelay: "400ms" }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 sm:gap-x-10 gap-y-10 sm:gap-y-12 pt-10 sm:pt-12">
          {principles.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`group ${reveal}`}
                style={{ transitionDelay: `${600 + i * 130}ms` }}
              >
                <Icon
                  className="w-6 h-6 text-primary mb-5 transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-6 motion-reduce:transition-none"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="text-gray-900 text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;