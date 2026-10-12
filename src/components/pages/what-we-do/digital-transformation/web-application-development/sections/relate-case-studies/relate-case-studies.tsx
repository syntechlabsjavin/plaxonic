import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const caseStudies = [
  {
    company: "JPack Solutions",
    category: "Custom Website & E-Commerce",
    title: "A Fast, Modern Storefront for Custom Packaging Orders",
    description:
      "We built JPack Solutions a high-performance website and online ordering experience that turns a quote-heavy process into a smooth digital flow, letting customers configure and request custom packaging in minutes.",
    link: "#",
    metric: "Self-serve",
    metricDescription:
      "custom packaging quoting and ordering, fully online",
    image: "/src/assets/web-application-development/jpack-cover.png",
    imageAlt: "JPack Solutions",
  },
  {
    company: "Case Study 2",
    category: "Web Application Development",
    title: "Building Better Digital Experiences",
    description:
      "Explore how our engineering team creates scalable web applications that streamline business processes and deliver a seamless user experience.",
    link: "#",
    metric: "Scalable",
    metricDescription:
      "digital solutions designed to support business growth",
    image: "/src/assets/web-application-development/superbuddy-cover.png",
    imageAlt: "Web application development case study",
  },
  {
    company: "Case Study 3",
    category: "Custom Software Development",
    title: "Transforming Business Workflows with Technology",
    description:
      "Discover how tailored software solutions help organizations improve operational efficiency, simplify workflows, and achieve measurable results.",
    link: "#",
    metric: "Efficient",
    metricDescription:
      "streamlined workflows and optimized business processes",
    image: "/src/assets/web-application-development/limsera-cover.png",
    imageAlt: "Custom software development case study",
  },
];

const RelatedCaseStudies = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCase = caseStudies[activeIndex];

  const previousSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? caseStudies.length - 1 : current - 1,
    );
  };

  const nextSlide = () => {
    setActiveIndex((current) =>
      current === caseStudies.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-16">
      {/* Decorative dotted background */}
      <div className="pointer-events-none absolute -left-10 top-[5%] z-[1] h-[90%] w-[90%] opacity-50">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 32 32"
          preserveAspectRatio="xMinYMin meet"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="dotPatternGreyWebCs"
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
            fill="url(#dotPatternGreyWebCs)"
          />
          <path
            d="M0 30.0376L13.0776 22.0685L19.0852 29.6698L24.2754 28.8116L15.3254 17.5321L0 30.0376Z"
            fill="url(#dotPatternGreyWebCs)"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section heading */}
        <div className="mb-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                  Case Studies
                </span>
              </div>

              <h2 className="mb-8 font-inter text-[2rem] leading-[1.1] font-bold tracking-tight text-gray-900 xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Related{" "}
                <span className="text-gray-300">Case Studies</span>.
              </h2>

              <div className="flex max-w-2xl gap-4">
                <div className="w-[3px] shrink-0 bg-primary" />
                <p className="text-sm text-gray-600 sm:text-base md:text-lg">
                  Discover how our engineering team builds high-performing
                  custom web applications that streamline business workflows,
                  improve efficiency, and deliver measurable results.
                </p>
              </div>
            </div>

            <div className="lg:mt-16 lg:max-w-md">
              <a
                href="/insights/case-studies"
                className="inline-flex h-12 items-center bg-gray-900 px-8 text-sm font-medium text-white transition-colors hover:bg-primary"
              >
                VIEW ALL CASE STUDIES
              </a>
            </div>
          </div>
        </div>

        {/* Featured case study */}
        <div className="relative overflow-hidden">
          <div
            key={activeCase.company}
            className="overflow-hidden border border-gray-200 bg-white"
          >
            <div className="flex flex-col lg:flex-row">
              {/* Case study content */}
              <div className="w-full bg-white p-6 sm:p-10 lg:w-[55%] lg:p-14">
                <div className="mb-3 text-xl font-bold text-gray-900 sm:text-2xl lg:text-3xl">
                  {activeCase.company}
                </div>

                <span className="text-sm font-medium text-primary">
                  {activeCase.category}
                </span>

                <h3 className="mt-4 mb-4 text-xl leading-[1.2] font-medium text-gray-900 lg:text-2xl xl:text-3xl">
                  {activeCase.title}
                </h3>

                <p className="mb-3 text-base leading-relaxed text-gray-600 sm:text-[17px] lg:text-[18px]">
                  {activeCase.description}
                </p>

                <a
                  href={activeCase.link}
                  className="mb-4 inline-block text-sm font-medium text-primary hover:underline"
                >
                  Read the full case study
                </a>

                <div className="flex items-start gap-4">
                  <div className="h-16 w-1 shrink-0 rounded-full bg-primary" />
                  <div>
                    <div className="text-3xl font-bold text-primary lg:text-4xl">
                      {activeCase.metric}
                    </div>
                    <div className="mt-1 text-sm leading-snug text-gray-500">
                      {activeCase.metricDescription}
                    </div>
                  </div>
                </div>
              </div>

              {/* Case study image */}
              <div className="relative min-h-[280px] w-full overflow-visible sm:min-h-[380px] lg:min-h-[480px] lg:w-[45%]">
                {/* Blue arrow accent */}
                <div className="absolute -top-6 -left-14 z-30 lg:-left-20">
                  <svg
                    width="180"
                    height="180"
                    viewBox="0 0 32 32"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M32 1.96094L23.7856 9.27625L9.76804 20.8009L0.858887 9.52145L6.00821 8.66323L12.0566 16.2646L32 1.96094Z"
                      fill="#1BA3DD"
                    />
                  </svg>
                </div>

                {/* Gray geometric background */}
                <div className="absolute top-4 right-4 bottom-8 left-4 z-0">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 32 32"
                    preserveAspectRatio="none"
                    fill="none"
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
                  src={activeCase.image}
                  alt={activeCase.imageAlt}
                  className="absolute top-0 left-0 z-10 h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Slider controls */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-6 text-center text-base font-bold tabular-nums text-primary">
                {activeIndex + 1}
              </span>

              <div className="relative h-[2px] w-16 bg-gray-300">
                <div
                  className="absolute top-0 left-0 h-full bg-primary transition-all duration-300"
                  style={{
                    width: `${((activeIndex + 1) / caseStudies.length) * 100}%`,
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
                onClick={previousSlide}
                aria-label="Previous slide"
                className="flex h-12 w-12 items-center justify-center bg-primary text-white transition-all duration-300 hover:bg-primary-dark"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                className="flex h-12 w-12 items-center justify-center bg-primary text-white transition-all duration-300 hover:bg-primary-dark"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedCaseStudies;