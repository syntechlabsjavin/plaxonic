import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Case1 from "../../../../../../../assets/what-we-do/case-1.png";
/* -------------------------------------------------------------------------- */
/* Types & default content                                                    */
/* -------------------------------------------------------------------------- */

interface CaseStudyMetric {
  value: string;
  description: string;
}

interface CaseStudy {
  company: string;
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  metrics: CaseStudyMetric[];
  featured?: boolean;
}

interface CaseStudiesProps {
  eyebrow?: string;
  titleMain?: string;
  titleMuted?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  caseStudies?: CaseStudy[];
}

/* -------------------------------------------------------------------------- */
/* Default case studies                                                       */
/* -------------------------------------------------------------------------- */

const DEFAULT_CASE_STUDIES: CaseStudy[] = [
  {
    company: "Cartwheel Retail",
    category: "Monolith Decomposition",
    title:
      "Breaking a 1.2M-line monolith into 40 services, without a freeze",
    description:
      "Using a strangler-fig approach, we peeled checkout, catalog, and fulfillment out of a decade-old monolith one bounded context at a time. New services shipped behind the existing API while the legacy core kept serving traffic, so the business never paused.",
    image: Case1,
    imageAlt: "Cartwheel Retail",
    featured: true,
    metrics: [
      {
        value: "11x",
        description: "more frequent deploys",
      },
      {
        value: "0",
        description: "minutes of migration downtime",
      },
    ],
  },
  {
    company: "Meridian Bank",
    category: "API Platform",
    title: "An open-banking API platform serving 80M calls a day",
    description:
      "A governed API gateway with OAuth2, rate limiting, and a developer portal turned core banking into a partner-ready product.",
    image: Case1,
    imageAlt: "Meridian Bank",
    metrics: [
      {
        value: "80M+",
        description: "API calls per day at p99 under 90ms",
      },
    ],
  },
  {
    company: "Polaris Logistics",
    category: "Event-Driven Architecture",
    title:
      "Real-time shipment tracking on a Kafka event backbone",
    description:
      "Event sourcing and CQRS replaced nightly batch jobs, giving customers live tracking and the ops team an auditable history.",
    image: Case1,
    imageAlt: "Polaris Logistics",
    metrics: [
      {
        value: "Real-time",
        description: "tracking, replacing 6-hour batch delays",
      },
    ],
  },
];

const DEFAULTS: Required<CaseStudiesProps> = {
  eyebrow: "Proven Outcomes",
  titleMain: "Systems We Helped",
  titleMuted: "Engineer",
  description:
    "Explore how we have helped businesses solve complex technology challenges through API development, system integration, and modern application architectures.",
  buttonText: "VIEW ALL CASE STUDIES",
  buttonHref: "#",
  caseStudies: DEFAULT_CASE_STUDIES,
};

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

const CaseStudies = (props: CaseStudiesProps) => {
  const {
    eyebrow,
    titleMain,
    titleMuted,
    description,
    buttonText,
    buttonHref,
    caseStudies,
  } = {
    ...DEFAULTS,
    ...props,
  };

  const sectionRef = useRef<HTMLElement | null>(null);

  // Reveal content as it enters the viewport.
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const animatedElements =
      section.querySelectorAll<HTMLElement>("[data-animate]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1 }
    );

    animatedElements.forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(24px)";
      element.style.transition =
        "opacity 600ms ease, transform 600ms ease";

      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [caseStudies]);

  const featuredStudy = caseStudies.find(
    (study) => study.featured
  );

  const secondaryStudies = caseStudies.filter(
    (study) => study !== featuredStudy
  );

  /* ------------------------------------------------------------------------ */
  /* Metric                                                                    */
  /* ------------------------------------------------------------------------ */

  const renderMetric = (
    metric: CaseStudyMetric,
    featured = false
  ) => (
    <div className="flex items-start gap-3" key={metric.value}>
      <div
        className={`${
          featured ? "h-12" : "h-11"
        } w-1 bg-primary rounded-full shrink-0`}
      />

      <div>
        <div
          className={`font-inter ${
            featured
              ? "text-3xl lg:text-4xl"
              : "text-2xl"
          } font-bold text-primary leading-none`}
        >
          {metric.value}
        </div>

        <div
          className={`text-gray-500 text-xs leading-snug mt-2 ${
            featured ? "max-w-[160px]" : "mt-1.5"
          }`}
        >
          {metric.description}
        </div>
      </div>
    </div>
  );

  /* ------------------------------------------------------------------------ */
  /* Featured case study                                                       */
  /* ------------------------------------------------------------------------ */

  const renderFeaturedStudy = (study: CaseStudy) => (
    <article
      key={study.company}
      data-animate
      className="group relative border border-gray-200 hover:border-primary/40 transition-colors duration-300 mb-6 lg:mb-8 overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Image */}
        <div className="relative lg:w-[42%] min-h-[280px] lg:min-h-[440px] overflow-hidden">
          <img
            src={study.image}
            alt={study.imageAlt}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-gray-900/70 via-gray-900/10 to-transparent" />

          <span className="absolute top-5 left-5 bg-primary text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5">
            {study.category}
          </span>
        </div>

        {/* Content */}
        <div className="lg:w-[58%] p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
          <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            {study.company}
          </div>

          <h3 className="font-inter text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-900 leading-snug mb-5 group-hover:text-primary transition-colors duration-300">
            {study.title}
          </h3>

          <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 max-w-2xl">
            {study.description}
          </p>

          <div className="flex flex-wrap gap-6 sm:gap-10">
            {study.metrics.map((metric) =>
              renderMetric(metric, true)
            )}
          </div>
        </div>
      </div>

      {/* Hover indicator */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
      />
    </article>
  );

  /* ------------------------------------------------------------------------ */
  /* Secondary case study                                                      */
  /* ------------------------------------------------------------------------ */

  const renderSecondaryStudy = (study: CaseStudy) => (
    <article
      key={study.company}
      data-animate
      className="group relative flex flex-col sm:flex-row h-full border border-gray-200 hover:border-primary/40 transition-colors duration-300 overflow-hidden"
    >
      {/* Image */}
      <div className="relative sm:w-[40%] min-h-[180px] overflow-hidden">
        <img
          src={study.image}
          alt={study.imageAlt}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1">
          {study.category}
        </span>
      </div>

      {/* Content */}
      <div className="sm:w-[60%] p-6 lg:p-7 flex flex-col">
        <div className="text-lg font-bold text-gray-900 mb-2">
          {study.company}
        </div>

        <h3 className="text-gray-900 text-base lg:text-lg font-semibold leading-snug mb-3 group-hover:text-primary transition-colors duration-300">
          {study.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-5">
          {study.description}
        </p>

        <div className="flex flex-wrap items-start gap-5 pt-4 mt-auto border-t border-gray-100">
          {study.metrics.map((metric) =>
            renderMetric(metric)
          )}
        </div>
      </div>

      {/* Hover indicator */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
      />
    </article>
  );

  /* ------------------------------------------------------------------------ */
  /* Render                                                                    */
  /* ------------------------------------------------------------------------ */

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-16 sm:py-20 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 relative z-10">
        {/* Section heading */}
        <div data-animate className="mb-10 sm:mb-14 lg:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
                  {eyebrow}
                </span>
              </div>

              <h2 className="font-inter text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-8">
                {titleMain}{" "}
                <span className="text-gray-300">
                  {titleMuted}
                </span>
              </h2>

              <div className="flex gap-4 max-w-2xl">
                <div className="w-[3px] bg-primary shrink-0" />

                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  {description}
                </p>
              </div>
            </div>

            <a
              href={buttonHref}
              className="group inline-flex items-center gap-2 h-12 px-8 bg-gray-900 text-white text-sm font-medium hover:bg-primary transition-colors shrink-0 self-start lg:self-auto"
            >
              {buttonText}

              <ArrowUpRight
                aria-hidden={true}
                className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300"
              />
            </a>
          </div>
        </div>

        {/* Featured study */}
        {featuredStudy && renderFeaturedStudy(featuredStudy)}

        {/* Secondary studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {secondaryStudies.map((study) =>
            renderSecondaryStudy(study)
          )}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;