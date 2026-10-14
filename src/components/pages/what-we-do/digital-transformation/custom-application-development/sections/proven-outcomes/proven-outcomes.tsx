import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import cd1Image from "../../../../../../../assets/what-we-do/cd1.png";
import cd2Image from "../../../../../../../assets/what-we-do/cd2.png";
import cd3Image from "../../../../../../../assets/what-we-do/cd3.png";

interface CaseStudyMetric {
  value: string;
  label: string;
}

interface CaseStudy {
  company: string;
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  metrics: CaseStudyMetric[];
  reverse?: boolean;
}

interface ProvenOutcomesProps {
  eyebrow?: string;
  title?: string;
  highlightedTitle?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  caseStudies?: CaseStudy[];
}

const DEFAULT_CASE_STUDIES: CaseStudy[] = [
  {
    company: "Verdant Logistics",
    category: "Workflow Automation",
    title: "A custom dispatch platform that replaced 11 spreadsheets",
    description:
      "Their operations ran on a fragile web of shared spreadsheets and email threads. We built a single dispatch application with rules-based routing, live driver tracking, and automated customer notifications—turning a daily scramble into a calm, auditable workflow.",
    image: cd1Image,
    imageAlt: "Verdant Logistics",
    metrics: [
      { value: "73%", label: "less manual data entry" },
      { value: "11", label: "spreadsheets retired" },
    ],
  },
  {
    company: "Holloway Health Group",
    category: "Legacy Modernization",
    title:
      "Re-platforming a 15-year-old patient system with zero downtime",
    description:
      "A decade-and-a-half of business logic lived in an unsupported desktop app. We modernized it into a secure, HIPAA-aligned web platform—migrating every record without losing a byte and giving clinicians an interface they actually wanted to use.",
    image: cd2Image,
    imageAlt: "Holloway Health Group",
    reverse: true,
    metrics: [
      { value: "0", label: "records lost in migration" },
      { value: "4x", label: "faster clinician workflows" },
    ],
  },
  {
    company: "Atelier & Co.",
    category: "Customer Portal",
    title: "A self-service portal that cut support tickets in half",
    description:
      "Premium clients wanted to manage orders, approvals, and documents themselves. We built a branded portal with self-service onboarding and live status tracking—deflecting routine support requests while lifting the experience customers rave about.",
    image: cd3Image,
    imageAlt: "Atelier & Co.",
    metrics: [
      { value: "51%", label: "fewer support tickets" },
      { value: "+38", label: "point NPS increase" },
    ],
  },
];

const ProvenOutcomes = ({
  eyebrow = "Proven Outcomes",
  title = "Bespoke Builds That",
  highlightedTitle = "Paid Off",
  description = "Real businesses that traded clunky workarounds for software built precisely for them—and the measurable difference it made.",
  buttonText = "VIEW ALL CASE STUDIES",
  buttonHref = "#",
  caseStudies = DEFAULT_CASE_STUDIES,
}: ProvenOutcomesProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements =
      section.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;

            target.style.opacity = "1";
            target.style.transform = "translateY(0)";

            observer.unobserve(target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    elements.forEach((element, index) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(40px)";
      element.style.transition =
        "opacity 700ms ease, transform 700ms ease";
      element.style.transitionDelay = `${index * 100}ms`;

      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-32"
    >
      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Header */}
        <div
          data-reveal
          className="mb-10 sm:mb-14 lg:mb-16"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {eyebrow}
                </span>
              </div>

              <h2 className="mb-8 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-6xl lg:text-7xl">
                {title}{" "}
                <span className="text-gray-300">
                  {highlightedTitle}
                </span>
                .
              </h2>

              <div className="flex max-w-2xl gap-4">
                <div className="w-[3px] shrink-0 bg-primary" />

                <p className="text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
                  {description}
                </p>
              </div>
            </div>

            <a
              href={buttonHref}
              className="group inline-flex h-12 shrink-0 items-center gap-2 self-start bg-gray-900 px-8 text-sm font-medium text-white transition-colors hover:bg-primary lg:self-auto"
            >
              {buttonText}

              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        {/* Case Studies */}
        <div className="flex flex-col gap-8 lg:gap-12">
          {caseStudies.map((study) => (
            <article
              key={study.company}
              data-reveal
              className="group relative overflow-hidden border border-gray-200 transition-colors duration-300 hover:border-primary/40"
            >
              <div
                className={`flex flex-col lg:flex-row ${
                  study.reverse ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="relative min-h-[260px] overflow-hidden lg:min-h-[420px] lg:w-[44%]">
                  <img
                    src={study.image}
                    alt={study.imageAlt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/10 to-transparent ${
                      study.reverse
                        ? "lg:bg-gradient-to-l"
                        : "lg:bg-gradient-to-r"
                    }`}
                  />

                  <span className="absolute left-5 top-5 bg-primary px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white">
                    {study.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-6 sm:p-8 lg:w-[56%] lg:p-12">
                  <div className="mb-4 text-xl font-bold text-gray-900 sm:text-2xl lg:text-3xl">
                    {study.company}
                  </div>

                  <h3 className="mb-5 font-inter text-xl font-semibold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-primary lg:text-2xl xl:text-3xl">
                    {study.title}
                  </h3>

                  <p className="mb-8 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base lg:text-lg">
                    {study.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-6 sm:gap-10">
                    {study.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="flex items-start gap-3"
                      >
                        <div className="h-12 w-1 shrink-0 rounded-full bg-primary" />

                        <div>
                          <div className="font-inter text-3xl font-bold leading-none text-primary lg:text-4xl">
                            {metric.value}
                          </div>

                          <div className="mt-2 max-w-[160px] text-xs leading-snug text-gray-500">
                            {metric.label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvenOutcomes;