import { useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

interface CaseStudy {
  company: string;
  category: string;
  title: string;
  description: string;
  link: string;
  metric: string;
  technologies: string;
  image: string;
}

/* -------------------------------------------------------------------------- */
/* Case Study Data                                                            */
/* -------------------------------------------------------------------------- */

const CASE_STUDIES: CaseStudy[] = [
  {
    company:
      "Learning and Educational Technologies (LET) Research Unit, Kyoto University",
    category: "Education & EdTech",
    title:
      "A Learning-Analytics Platform for a Global Research University",
    description:
      "Kyoto University's LET Research Unit was building GOAL, a platform that helps learners become self-directed by synchronizing their learning activity with their physical activity data. SyntechLabs provided the engineering: API integration, a MongoDB pipeline for learner interactions, and device connectivity for physiological data.",
    link: "/insights/case-studies/goal-learning-analytics-kyoto-university",
    metric: "Learning + Wearable Data",
    technologies:
      "API integration · Wearable data · Real-time visualization",
    image:
      "https://res.cloudinary.com/dfsu0xeb/image/upload/v1786088990/plaxonic/insights/case-goal-kyoto.webp",
  },
  {
    company: "Healthcare Technology Solutions",
    category: "Healthcare & IT",
    title: "Building Smarter Digital Healthcare Experiences",
    description:
      "Discover how modern software solutions can streamline healthcare workflows, improve access to information, and help healthcare organizations deliver more connected digital experiences.",
    link: "/insights/case-studies",
    metric: "Connected Healthcare",
    technologies:
      "Healthcare software · API integration · Data management",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    company: "Enterprise Digital Transformation",
    category: "Enterprise Software",
    title: "Scalable Software for Growing Businesses",
    description:
      "Explore how tailored software, integrated systems, and streamlined digital workflows can help businesses improve operational efficiency and build a stronger technology foundation.",
    link: "/insights/case-studies",
    metric: "Operational Efficiency",
    technologies:
      "Custom software · System integration · Cloud solutions",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  },
];

/* -------------------------------------------------------------------------- */
/* Decorative Background Pattern                                             */
/* -------------------------------------------------------------------------- */

const BackgroundPattern = () => (
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
          id="caseStudyDotPattern"
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
        fill="url(#caseStudyDotPattern)"
      />

      <path
        d="M0 30.0376L13.0776 22.0685L19.0852 29.6698L24.2754 28.8116L15.3254 17.5321L0 30.0376Z"
        fill="url(#caseStudyDotPattern)"
      />
    </svg>
  </div>
);

/* -------------------------------------------------------------------------- */
/* Case Studies Component                                                     */
/* -------------------------------------------------------------------------- */

const CaseStudies = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const totalStudies = CASE_STUDIES.length;
  const activeStudy = CASE_STUDIES[activeIndex];

  const handlePrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? totalStudies - 1 : current - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((current) =>
      current === totalStudies - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-24">
      {/* Background Pattern */}
      <BackgroundPattern />

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Our Work
                </span>
              </div>

              <h2 className="font-inter text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-6xl 2xl:text-7xl">
                Case{" "}
                <span className="text-gray-300">Studies</span>.
              </h2>
            </div>

            <div className="mb-2">
              <a
                href="/insights/case-studies"
                className="group inline-flex items-center gap-2 border border-[#1a1f35] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[#1a1f35] transition-colors duration-300 hover:bg-[#1a1f35] hover:text-white lg:px-5 lg:py-2.5 lg:text-[13px] 2xl:px-6 2xl:py-3 2xl:text-sm"
              >
                View All Case Studies

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45 lg:h-[15px] lg:w-[15px] 2xl:h-4 2xl:w-4" />
              </a>
            </div>
          </div>

          <div className="mt-8 flex max-w-2xl gap-4">
            <div className="w-[3px] shrink-0 bg-primary" />

            <p className="text-base text-gray-600 md:text-lg lg:text-base 2xl:text-lg">
              Real challenges, proven solutions. See how we've
              helped businesses transform their operations and
              achieve measurable results.
            </p>
          </div>
        </div>

        {/* Case Study Carousel */}
        <div className="relative overflow-hidden">
          <div className="overflow-hidden border border-gray-200 bg-white">
            <div className="flex flex-col lg:flex-row">
              {/* Case Study Content */}
              <div className="w-full bg-white p-6 sm:p-8 lg:w-[55%] lg:p-8 2xl:p-14">
                <div
                  className="mb-3 text-xl font-bold text-gray-900 sm:text-2xl lg:text-2xl 2xl:text-3xl"
                  key={`company-${activeIndex}`}
                >
                  {activeStudy.company}
                </div>

                <span className="text-sm font-medium text-primary">
                  {activeStudy.category}
                </span>

                <h3
                  key={`title-${activeIndex}`}
                  className="mb-4 mt-4 text-lg font-medium leading-[1.2] text-gray-900 sm:text-xl lg:text-2xl 2xl:text-3xl"
                >
                  {activeStudy.title}
                </h3>

                <p
                  key={`description-${activeIndex}`}
                  className="mb-3 text-base leading-relaxed text-gray-600 sm:text-[18px] lg:text-[15px] 2xl:text-[18px]"
                >
                  {activeStudy.description}
                </p>

                <a
                  href={activeStudy.link}
                  className="group mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  Read the full case study

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                </a>

                {/* Highlight */}
                <div className="flex items-start gap-4">
                  <div className="h-16 w-1 shrink-0 rounded-full bg-primary" />

                  <div>
                    <div className="text-2xl font-bold text-primary sm:text-3xl lg:text-3xl 2xl:text-4xl">
                      {activeStudy.metric}
                    </div>

                    <div className="mt-1 text-sm leading-snug text-gray-500">
                      {activeStudy.technologies}
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Study Image */}
              <div className="relative min-h-[280px] w-full overflow-visible sm:min-h-[380px] lg:min-h-[400px] lg:w-[45%] 2xl:min-h-[480px]">
                {/* Blue Decorative Chevron */}
                <div className="absolute -left-8 -top-4 z-30 sm:-left-14 sm:-top-6 lg:-left-20">
                  <svg
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-auto w-24 sm:w-32 lg:w-[150px] 2xl:w-[180px]"
                    aria-hidden="true"
                  >
                    <path
                      d="M32 1.96094L23.7856 9.27625L9.76804 20.8009L0.858887 9.52145L6.00821 8.66323L12.0566 16.2646L32 1.96094Z"
                      fill="#1BA3DD"
                    />
                  </svg>
                </div>

                {/* Grey Decorative Frame */}
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
                  key={activeStudy.image}
                  src={activeStudy.image}
                  alt={activeStudy.company}
                  className="absolute left-0 right-0 top-0 z-10 h-full w-full object-contain object-center"
                />
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-6 text-center text-base font-bold tabular-nums text-primary">
                {activeIndex + 1}
              </span>

              <div className="relative h-[2px] w-16 bg-gray-300">
                <div
                  className="absolute left-0 top-0 h-full bg-primary transition-all duration-300"
                  style={{
                    width: `${((activeIndex + 1) / totalStudies) * 100}%`,
                  }}
                />
              </div>

              <span className="w-6 text-center text-base font-bold tabular-nums text-gray-900">
                {totalStudies}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrevious}
                aria-label="Previous case study"
                className="flex h-12 w-12 items-center justify-center bg-primary text-white transition-all duration-300 hover:bg-primary-dark"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next case study"
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

export default CaseStudies;