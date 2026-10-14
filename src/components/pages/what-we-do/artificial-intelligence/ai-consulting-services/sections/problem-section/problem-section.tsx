import { useEffect, useRef, useState } from "react";

interface ProblemCard {
  number: string;
  title: string;
  description: string;
}

const problems: ProblemCard[] = [
  {
    number: "01",
    title: "Stuck In Pilots",
    description:
      "Promising demos never cross the gap to a reliable, monitored system real users depend on.",
  },
  {
    number: "02",
    title: "Unclear ROI",
    description:
      "Initiatives launch without a tie to a number the business cares about, so they quietly lose funding.",
  },
  {
    number: "03",
    title: "No Path To Production",
    description:
      "Missing data foundations, governance, and engineering turn a clever model into shelfware.",
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

const ProblemSection = () => {
  const { ref, inView } = useInView<HTMLElement>();

  const reveal = (visible: boolean) =>
    `transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`;

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-gray-50 py-16 sm:py-20 md:py-24 lg:py-36"
    >
      {/* Soft glow */}
      <div
        className={`pointer-events-none absolute top-[-15%] right-[-5%] w-[560px] h-[460px] rounded-full bg-primary/5 blur-[160px] transition-all duration-[1600ms] ease-out motion-reduce:transition-none ${
          inView ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
      />

      <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="max-w-3xl">
          <div
            className={`flex items-center gap-3 mb-6 ${reveal(inView)}`}
          >
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
              The Real Problem
            </span>
          </div>

          <h2
            className={`font-inter text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.05] ${reveal(
              inView
            )}`}
            style={{ transitionDelay: "120ms" }}
          >
            Most AI Pilots Never{" "}
            <span className="text-gray-300">Reach Production</span>.
          </h2>

          <p
            className={`text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mt-7 max-w-2xl ${reveal(
              inView
            )}`}
            style={{ transitionDelay: "240ms" }}
          >
            The hard part was never the demo. It is everything around it: the
            right use case, clean data, a path to deployment, and the trust to
            let it run. That is exactly the gap we close.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200 mt-10 sm:mt-14 lg:mt-20">
          {problems.map((item, i) => (
            <div
              key={item.number}
              className={`group relative bg-white p-6 sm:p-8 lg:p-10 overflow-hidden hover:border-primary/40 ${reveal(
                inView
              )}`}
              style={{ transitionDelay: `${380 + i * 140}ms` }}
            >
              <div className="font-inter text-4xl sm:text-5xl lg:text-6xl font-bold text-primary/25 group-hover:text-primary/60 transition-colors duration-300 leading-none mb-5">
                {item.number}
              </div>

              <h3 className="text-gray-900 group-hover:text-primary transition-colors duration-300 text-lg sm:text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>

              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;