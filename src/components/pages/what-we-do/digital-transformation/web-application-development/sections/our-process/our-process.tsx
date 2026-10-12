import {
  Compass,
  PenTool,
  CodeXml,
  ShieldCheck,
  Rocket,
  LifeBuoy,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We analyze your business goals, users, and technical requirements to define a clear roadmap.",
    Icon: Compass,
  },
  {
    number: "02",
    title: "Architecture & Design",
    description:
      "Our engineers design scalable architecture while our designers create user-interactive interfaces.",
    Icon: PenTool,
  },
  {
    number: "03",
    title: "Agile Development",
    description:
      "Our team builds in rapid, iterative sprints with continuous feedback, regular code reviews, and transparent tracking to deliver software efficiently.",
    Icon: CodeXml,
  },
  {
    number: "04",
    title: "Quality Assurance",
    description:
      "We provide comprehensive unit, integration, end-to-end, performance, and security testing at every stage of development.",
    Icon: ShieldCheck,
  },
  {
    number: "05",
    title: "Development & Launch",
    description:
      "Deployments with CI/CD pipelines, monitoring, and production-ready infrastructure ensure your business never faces downtime.",
    Icon: Rocket,
  },
  {
    number: "06",
    title: "Ongoing Support",
    description:
      "After your web application launch, we monitor, maintain, and optimize performance while delivering continuous updates and security patches.",
    Icon: LifeBuoy,
  },
];

const OurProcess = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gray-50 py-16 sm:py-20 lg:py-32">
      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section heading */}
        <div className="mb-16 max-w-3xl lg:mb-20">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Our Process
            </span>
          </div>

          <h2 className="mb-8 font-inter text-[2rem] leading-[1.1] font-bold tracking-tight text-gray-900 xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            How We <span className="text-gray-300">Build</span>.
          </h2>

          <div className="flex gap-4">
            <div className="w-[3px] shrink-0 bg-primary" />

            <p className="text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
              Our web application development team follows a transparent,
              proven methodology that delivers on time, on budget, and to the
              standards production demands.
            </p>
          </div>
        </div>

        {/* Process cards */}
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
          {processSteps.map(({ number, title, description, Icon }) => (
            <div
              key={number}
              className="group relative border border-gray-200 bg-white px-7 pt-12 pb-8 transition-colors duration-300 hover:border-primary/40"
            >
              {/* Number badge */}
              <div className="absolute -top-6 left-7 flex h-14 w-14 items-center justify-center bg-primary text-white shadow-lg shadow-primary/25 transition-colors duration-300 group-hover:bg-primary-dark">
                <span className="font-inter text-xl font-bold tabular-nums">
                  {number}
                </span>
              </div>

              {/* Decorative icon */}
              <Icon
                strokeWidth={1.5}
                className="absolute top-6 right-6 h-8 w-8 text-gray-200 transition-colors duration-300 group-hover:text-primary/40"
              />

              {/* Card content */}
              <h3 className="mt-2 mb-3 font-inter text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-primary lg:text-2xl">
                {title}
              </h3>

              <p className="max-w-sm text-sm leading-relaxed text-gray-600 lg:text-base">
                {description}
              </p>

              {/* Bottom hover indicator */}
              <span className="absolute right-0 bottom-0 left-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;