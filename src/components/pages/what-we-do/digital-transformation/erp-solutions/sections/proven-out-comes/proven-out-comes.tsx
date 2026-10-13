
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CaseStudy {
  company: string;
  service: string;
  title: string;
  description: string;
  result: string;
  resultLabel: string;
  image: string;
  imageAlt: string;
  link: string;
}

const caseStudies: CaseStudy[] = [
  {
    company: "Northstar SaaS",
    service: "Salesforce Implementation",
    title: "A Pipeline Leadership Could Finally Trust",
    description:
      "We rebuilt their pipeline stages around a real qualification framework and automated forecasting, giving leadership a number they could finally trust and reps a clear next move on every deal.",
    result: "+41%",
    resultLabel: "win rate within two quarters",
    image: "/src/assets/what-we-do/placeholder-x.svg",
    imageAlt: "Northstar SaaS",
    link: "#",
  },
  {
    company: "Meridian Financial",
    service: "CRM Customization & Automation",
    title: "Turning Fragmented Data Into Clear Decisions",
    description:
      "We streamlined customer records, connected essential business systems, and automated routine workflows to give teams a consistent view of customer relationships and sales activity.",
    result: "-35%",
    resultLabel: "less manual data processing",
    image: "/src/assets/what-we-do/placeholder-x.svg",
    imageAlt: "Meridian Financial",
    link: "#",
  },
  {
    company: "Vertex Solutions",
    service: "CRM Integration & Optimization",
    title: "Faster Follow-Ups, Stronger Relationships",
    description:
      "We connected lead capture, sales pipelines, and customer communications in one coordinated CRM workflow, helping the team respond faster and manage opportunities more effectively.",
    result: "3x",
    resultLabel: "faster lead response",
    image: "/src/assets/what-we-do/placeholder-x.svg",
    imageAlt: "Vertex Solutions",
    link: "#",
  },
];

const ProvenOutcomes = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeStudy = caseStudies[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? caseStudies.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === caseStudies.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="relative overflow-hidden bg-white py-10 lg:py-16">
      {/* Background dotted pattern */}
      <div className="pointer-events-none absolute -left-10 top-[5%] z-[1] h-[90%] w-[90%] opacity-50">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 32 32"
          preserveAspectRatio="xMinYMin meet"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="dotPatternGreyCrmCs"
              x="0"
              y="0"
              width="0.4"
              height="0.4"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="0.2"
                cy="0.2"
                r="0.06"
                fill="#9ca3af"
              />
            </pattern>
          </defs>

          <path
            d="M32 1.96094L23.7856 9.27625L9.76804 20.8009L0.858887 9.52145L6.00821 8.66323L12.0566 16.2646L32 1.96094Z"
            fill="url(#dotPatternGreyCrmCs)"
          />
          <path
            d="M0 30.0376L13.0776 22.0685L19.0852 29.6698L24.2754 28.8116L15.3254 17.5321L0 30.0376Z"
            fill="url(#dotPatternGreyCrmCs)"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section heading */}
        <div className="mb-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Proven Outcomes
                </span>
              </div>

              <h2 className="mb-8 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                CRM Solutions That{" "}
                <span className="text-gray-300">
                  Deliver Results
                </span>
                .
              </h2>

              <div className="flex max-w-2xl gap-4">
                <div className="w-[3px] flex-shrink-0 bg-primary" />

                <p className="text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
                  Explore how businesses use CRM solutions to improve
                  and build more efficient workflows.
                </p>
              </div>
            </div>

            <div className="lg:mt-16 lg:max-w-md">
              <a
                href="#"
                className="inline-flex h-12 items-center bg-gray-900 px-8 text-sm font-medium text-white transition-colors hover:bg-primary"
              >
                VIEW ALL CASE STUDIES
              </a>
            </div>
          </div>
        </div>

        {/* Case study carousel */}
        <div className="relative overflow-hidden">
          <div
            key={activeStudy.company}
            className="animate-case-study bg-white border border-gray-200 overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row">
              {/* Case study content */}
              <div className="w-full bg-white p-6 sm:p-10 lg:w-[55%] lg:p-14">
                <div className="mb-3 text-2xl font-bold text-gray-900 lg:text-3xl">
                  {activeStudy.company}
                </div>

                <span className="text-sm font-medium text-primary">
                  {activeStudy.service}
                </span>

                <h3 className="mb-4 mt-4 text-lg font-medium leading-[1.2] text-gray-900 sm:text-xl lg:text-2xl xl:text-3xl">
                  {activeStudy.title}
                </h3>

                <p className="mb-3 text-base leading-relaxed text-gray-600 sm:text-[17px] lg:text-[18px]">
                  {activeStudy.description}
                </p>

                <a
                  href={activeStudy.link}
                  className="mb-4 inline-block text-sm font-medium text-primary hover:underline"
                >
                  Read the full case study
                </a>

                <div className="flex items-start gap-4">
                  <div className="h-16 w-1 flex-shrink-0 rounded-full bg-primary" />

                  <div>
                    <div className="text-3xl font-bold text-primary lg:text-4xl">
                      {activeStudy.result}
                    </div>

                    <div className="mt-1 text-sm leading-snug text-gray-500">
                      {activeStudy.resultLabel}
                    </div>
                  </div>
                </div>
              </div>

              {/* Image panel */}
              <div className="relative min-h-[320px] w-full overflow-visible sm:min-h-[380px] lg:min-h-[480px] lg:w-[45%]">
                {/* Blue arrow accent */}
                <div className="absolute -left-14 -top-6 z-30 lg:-left-20">
                  <svg
                    width="180"
                    height="180"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M32 1.96094L23.7856 9.27625L9.76804 20.8009L0.858887 9.52145L6.00821 8.66323L12.0566 16.2646L32 1.96094Z"
                      fill="#1BA3DD"
                    />
                  </svg>
                </div>

                {/* Gray diagonal background accents */}
                <div className="absolute bottom-8 left-4 right-4 top-4 z-0">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 32 32"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M32 1.96094L23.7856 9.27625L9.76804 20.8009L0.858887 9.52145L6.00821 8.66323L12.0566 16.2646L32 1.96094Z"
                      fill="#e5e5e5"
                    />
                    <path
                      d="M0 30.0376L13.0776 22.0685L19.0852 29.6698L24.2754 28.8116L15.3254 17.5321L0 30.0376Z"
                      fill="#e5e5e5"
                    />
                  </svg>
                </div>

                <img
                  src={activeStudy.image}
                  alt={activeStudy.imageAlt}
                  className="absolute left-0 top-0 z-10 h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Carousel controls */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-6 text-center text-base font-bold tabular-nums text-primary">
                {activeIndex + 1}
              </span>

              <div className="relative h-[2px] w-16 bg-gray-300">
                <div
                  className="absolute left-0 top-0 h-full bg-primary transition-all duration-300"
                  style={{
                    width: `${
                      ((activeIndex + 1) / caseStudies.length) * 100
                    }%`,
                  }}
                />
              </div>

              <span className="w-6 text-center text-base font-bold tabular-nums text-gray-900">
                {caseStudies.length}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goToPrevious}
                className="flex h-12 w-12 items-center justify-center bg-primary text-white transition-all duration-300 hover:bg-primary-dark"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={goToNext}
                className="flex h-12 w-12 items-center justify-center bg-primary text-white transition-all duration-300 hover:bg-primary-dark"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide animation */}
      <style>{`
        @keyframes caseStudyEnter {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-case-study {
          animation: caseStudyEnter 0.4s ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-case-study {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default ProvenOutcomes;
