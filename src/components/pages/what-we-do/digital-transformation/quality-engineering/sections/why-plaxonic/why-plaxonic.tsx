import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

interface QualityReason {
  number: string;
  title: string;
  description: string;
}

const qualityReasons: QualityReason[] = [
  {
    number: "01",
    title: "Engineers, Not Just Testers",
    description:
      "Our QA team writes code, reads architecture, and understands your system, so they find the bugs that matter, not just the obvious ones.",
  },
  {
    number: "02",
    title: "Shift-Left By Default",
    description:
      "We embed quality from the first commit, catching defects when they're cheap to fix instead of waiting for a fragile end-of-cycle test phase.",
  },
  {
    number: "03",
    title: "Automation That Lasts",
    description:
      "We build maintainable suites with stable locators and clean abstractions, not brittle scripts that rot after the first UI change.",
  },
  {
    number: "04",
    title: "Visible, Measurable Quality",
    description:
      "Coverage, defect trends, and pass rates on live dashboards, so quality is a number everyone can see, not a gut feeling.",
  },
  {
    number: "05",
    title: "Flexible Engagement",
    description:
      "Dedicated QA pods, on-demand testing sprints, or a full managed quality function, scaled to where you are right now.",
  },
];

const WhyPlaxonic = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = section.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(
              (entry.target as HTMLElement).dataset.reveal
            );

            setVisibleItems((previous) =>
              previous.includes(index) ? previous : [...previous, index]
            );

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const isVisible = (index: number) => visibleItems.includes(index);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gray-50 py-16 sm:py-20 lg:py-32"
    >
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-[0.85fr_1.5fr] lg:gap-20">
          {/* Left Content */}
          <div
            data-reveal={0}
            className={`self-start transition-all duration-700 ease-out lg:sticky lg:top-32 ${
              isVisible(0)
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Why Plaxonic
              </span>
            </div>

            <h2 className="mb-8 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Quality That{" "}
              <span className="text-gray-300 transition-colors duration-500 hover:text-primary">
                Earns Trust
              </span>
              .
            </h2>

            {/* QA Audit CTA */}
            <div className="border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-gray-200/40">
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Want to know where your quality stands today? Start with a
                free QA audit.
              </p>

              <button
                type="button"
                onClick={() => {
                  const contactSection = document.querySelector("#contact");

                  if (contactSection) {
                    contactSection.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                <span className="transition-colors duration-300 group-hover:text-gray-900">
                  Request a QA audit
                </span>

                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45"
                />
              </button>
            </div>
          </div>

          {/* Right Content: Quality Reasons */}
          <div>
            {qualityReasons.map((reason, index) => (
              <div
                key={reason.number}
                data-reveal={index + 1}
                style={{
                  transitionDelay: isVisible(index + 1)
                    ? `${index * 100}ms`
                    : "0ms",
                }}
                className={`group flex gap-4 border-t border-gray-200 py-6 transition-all duration-700 ease-out sm:gap-6 sm:py-7 lg:gap-8 lg:py-8 ${
                  index === qualityReasons.length - 1 ? "border-b" : ""
                } ${
                  isVisible(index + 1)
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
              >
                <span className="flex-shrink-0 font-inter text-2xl font-bold text-gray-300 transition-colors duration-300 group-hover:text-primary lg:text-3xl">
                  {reason.number}
                </span>

                <div>
                  <h3 className="mb-2 font-inter text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary sm:text-xl lg:text-2xl">
                    {reason.title}
                  </h3>

                  <p className="max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPlaxonic;