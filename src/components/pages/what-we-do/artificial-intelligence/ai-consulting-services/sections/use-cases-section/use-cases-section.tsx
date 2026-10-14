import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Uc1Img from "../../../../../../../assets/what-we-do/artificial-intelligence/uc-1.png"
import Uc2Img from "../../../../../../../assets/what-we-do/artificial-intelligence/uc-2.png"
import Uc3Img from "../../../../../../../assets/what-we-do/artificial-intelligence/uc-3.png"
import Uc4Img from "../../../../../../../assets/what-we-do/artificial-intelligence/uc-4.png"
import Uc5Img from "../../../../../../../assets/what-we-do/artificial-intelligence/uc-5.png"


interface UseCase {
  image: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  href: string;
}

const useCases: UseCase[] = [
  {
    image: Uc1Img,
    title: "Support Copilots",
    category: "Customer Experience",
    tags: ["LLMs", "Automation"],
    description:
      "Assistants that draft accurate replies from your knowledge base, cutting handle time while keeping a human in control.",
    href: "/contact",
  },
  {
    image: Uc2Img,
    title: "Document Intelligence",
    category: "Operations",
    tags: ["NLP", "OCR"],
    description:
      "Extract, classify, and validate data from contracts, invoices, and forms, turning paperwork into structured signal.",
    href: "/contact",
  },
  {
    image: Uc3Img,
    title: "Demand Forecasting",
    category: "Planning",
    tags: ["Machine Learning", "Forecasting"],
    description:
      "Models that read seasonality and signals to forecast demand, so inventory, staffing, and spend stay ahead of reality.",
    href: "/contact",
  },
  {
    image: Uc4Img,
    title: "Anomaly & Fraud Detection",
    category: "Risk",
    tags: ["Anomaly Detection", "Security"],
    description:
      "Spot the patterns humans miss, flagging anomalies and fraud in real time before they spread across the business.",
    href: "/contact",
  },
  {
    image: Uc5Img,
    title: "Retrieval Assistants (RAG)",
    category: "Knowledge",
    tags: ["RAG", "Search"],
    description:
      "Grounded assistants that answer from your own documents with citations, so teams find trusted answers in seconds.",
    href: "/contact",
  },
  {
    image: Uc1Img,
    title: "Intelligent Process Automation",
    category: "Automation",
    tags: ["Workflow", "ML"],
    description:
      "Combine models with workflow to automate judgment-heavy steps that rule-based tools could never handle.",
    href: "/contact",
  },
];

const useInView = <T extends HTMLElement>(threshold = 0.1) => {
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

// 1 card on mobile, 2 on md, 3 on lg (matches the card widths below)
const getVisibleCount = () => {
  if (typeof window === "undefined") return 3;
  if (window.matchMedia("(min-width: 1024px)").matches) return 3;
  if (window.matchMedia("(min-width: 768px)").matches) return 2;
  return 1;
};

const useVisibleCount = () => {
  const [count, setCount] = useState(getVisibleCount);

  useEffect(() => {
    const update = () => setCount(getVisibleCount());
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return count;
};

const UseCasesSection = () => {
  const { ref, inView } = useInView<HTMLElement>();
  const visibleCount = useVisibleCount();
  const [index, setIndex] = useState(0);

  const maxIndex = Math.max(0, useCases.length - visibleCount);

  // Keep the index valid when the screen size changes
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));

  const atStart = index === 0;
  const atEnd = index >= maxIndex;

  const reveal = `transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  }`;

  return (
    <section
      ref={ref}
      className="w-full bg-white py-16 sm:py-20 lg:py-28 overflow-hidden"
    >
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-16 mb-10 lg:mb-12">
          <div>
            <div className={`flex items-center gap-3 mb-4 ${reveal}`}>
              <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
                Use Cases
              </span>
            </div>

            <h2
              className={`font-inter text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1] ${reveal}`}
              style={{ transitionDelay: "120ms" }}
            >
              Where AI Earns <span className="text-primary">Its Keep</span>.
            </h2>
          </div>
        </div>

        <div
          className={`flex gap-4 max-w-2xl mb-12 ${reveal}`}
          style={{ transitionDelay: "240ms" }}
        >
          <div
            className={`w-[3px] bg-primary flex-shrink-0 origin-top transition-transform duration-1000 ease-out motion-reduce:transition-none ${
              inView ? "scale-y-100" : "scale-y-0"
            }`}
            style={{ transitionDelay: "500ms" }}
          />
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            The patterns we deploy most often, each one a proven way to turn AI
            from a demo into measurable value across the business.
          </p>
        </div>

        <div className="relative -mx-1">
          <div className="overflow-hidden px-1">
            {/* Track: --step is how far one slide moves at each breakpoint */}
            <div
              className="flex items-stretch gap-12 will-change-transform [backface-visibility:hidden] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none [--step:calc(100%_+_3rem)] md:[--step:calc(50%_+_1.5rem)] lg:[--step:calc(33.333%_+_1rem)]"
              style={{ transform: `translateX(calc(${index} * var(--step) * -1))` }}
            >
              {useCases.map((item, i) => (
                <div
                  key={item.title}
                  className={`w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)] flex-shrink-0 self-stretch ${reveal}`}
                  style={{ transitionDelay: `${350 + i * 100}ms` }}
                >
                  <a href={item.href} className="block h-full">
                    <div className="group relative bg-white overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-200 h-full flex flex-col cursor-pointer">
                      <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-500 ease-out z-10" />

                      <div className="relative aspect-[16/10] overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center px-3 py-1.5 text-sm font-semibold text-white bg-primary">
                            {item.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6 sm:p-8 flex flex-col flex-grow">
                        <div className="flex flex-wrap gap-2 mb-3 min-h-[32px]">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center justify-center px-2.5 py-1 text-xs font-medium text-gray-600 bg-gray-100 group-hover:bg-primary group-hover:text-white transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors min-h-[60px] leading-tight">
                          {item.title}
                        </h3>

                        <p className="text-gray-600 text-base sm:text-[17px] lg:text-[18px] leading-relaxed line-clamp-3 mb-4 flex-grow">
                          {item.description}
                        </p>

                        <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/btn mt-auto">
                          Read more
                          <ArrowRight
                            className="w-4 h-4 transition-transform duration-300 group-hover/btn:-rotate-45"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`flex items-center justify-end gap-2 mt-10 ${reveal}`}
            style={{ transitionDelay: "600ms" }}
          >
            <button
              type="button"
              aria-label="Previous"
              onClick={prev}
              disabled={atStart}
              className={`w-12 h-12 flex items-center justify-center bg-primary text-white transition-all duration-300 ${
                atStart
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-primary-dark active:scale-95"
              }`}
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>

            <button
              type="button"
              aria-label="Next"
              onClick={next}
              disabled={atEnd}
              className={`w-12 h-12 flex items-center justify-center bg-primary text-white transition-all duration-300 ${
                atEnd
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-primary-dark active:scale-95"
              }`}
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;