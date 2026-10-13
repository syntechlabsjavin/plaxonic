const deliverySteps = [
  {
    number: "01",
    title: "Discovery & Requirements",
    description:
      "We immerse in your domain, stakeholders, and constraints, translating business goals into a clear, prioritized scope and success metrics.",
  },
  {
    number: "02",
    title: "Architecture & Design",
    description:
      "A solution architecture, data model, and security design are defined up front, so the system is built on foundations that scale.",
  },
  {
    number: "03",
    title: "Agile Development",
    description:
      "Cross-functional teams ship in iterative sprints with continuous demos, so you see working software early and steer as you go.",
  },
  {
    number: "04",
    title: "Quality & Security Engineering",
    description:
      "Automated testing, code review, and security checks run in the pipeline, so quality is engineered in, not inspected at the end.",
  },
  {
    number: "05",
    title: "Deployment & DevOps",
    description:
      "CI/CD, infrastructure-as-code, and observability deliver reliable, repeatable releases into production with confidence.",
  },
  {
    number: "06",
    title: "Support & Evolution",
    description:
      "SLAs, monitoring, and a dedicated team keep the platform healthy and evolving with the business long after go-live.",
  },
];

const DeliveryModel=()=> {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Heading */}
        <div className="mb-10 max-w-3xl sm:mb-14">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              How We Build
            </span>
          </div>

          <h2 className="mb-6 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            A Delivery Model Built For{" "}
            <span className="text-gray-300">
              The Long Run
            </span>
            .
          </h2>

          <p className="text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
            Enterprise software lives for a decade. Our process
            is engineered to deliver value fast, and to keep the
            platform maintainable for years after.
          </p>
        </div>

        {/* Delivery Process */}
        <div className="border-t border-gray-200">
          {deliverySteps.map((step) => (
            <div
              key={step.number}
              className="group grid grid-cols-1 items-start gap-4 border-b border-gray-200 py-8 transition-colors hover:bg-gray-50 md:grid-cols-12 md:gap-8 lg:py-10"
            >
              {/* Step Number */}
              <div className="font-inter text-5xl font-bold leading-none text-gray-200 transition-colors duration-300 group-hover:text-primary lg:text-6xl md:col-span-2">
                {step.number}
              </div>

              {/* Step Title */}
              <h3 className="text-xl font-semibold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-primary md:col-span-4 lg:text-2xl">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-sm leading-relaxed text-gray-600 md:col-span-6 md:pt-1 lg:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DeliveryModel;