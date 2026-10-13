import {
  Search,
  Lightbulb,
  Map,
  Rocket,
  ShieldCheck,
} from "lucide-react";

const engagementSteps = [
  {
    icon: Search,
    title: "Assess",
    description:
      "We immerse in your business, systems, and goals, separating the real constraints from the assumed ones.",
  },
  {
    icon: Lightbulb,
    title: "Strategize",
    description:
      "We frame the options, model the trade-offs, and align stakeholders on a direction everyone can commit to.",
  },
  {
    icon: Map,
    title: "Roadmap",
    description:
      "We sequence the work into a phased, fundable plan with clear owners, milestones, and success metrics.",
  },
  {
    icon: Rocket,
    title: "Enable",
    description:
      "We help you mobilize, standing up teams, partners, and ways of working so delivery starts on the right foot.",
  },
  {
    icon: ShieldCheck,
    title: "Govern",
    description:
      "We keep the program honest with lightweight governance, surfacing risk early and protecting momentum.",
  },
];

const HowWeEngage = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Heading */}
        <div className="mb-10 max-w-3xl sm:mb-14 lg:mb-20">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Our Approach
            </span>
          </div>

          <h2 className="mb-8 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-6xl lg:text-7xl">
            How We <span className="text-gray-300">Engage</span>.
          </h2>

          <div className="flex gap-4">
            <div className="w-[3px] flex-shrink-0 bg-primary" />

            <p className="text-sm text-gray-600 sm:text-base md:text-lg">
              A repeatable path from uncertainty to action, lightweight enough
              to move fast, rigorous enough to bet the business on.
            </p>
          </div>
        </div>

        {/* Engagement Steps */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:grid-cols-5">
          {engagementSteps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="group relative flex h-full flex-col overflow-hidden border border-gray-200 bg-white p-6 transition-colors duration-300 hover:border-primary/40 lg:p-7"
              >
                {/* Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                  <Icon
                    className="h-6 w-6 text-primary"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </div>

                {/* Title */}
                <h3 className="mb-2.5 text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-primary">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-600">
                  {step.description}
                </p>

                {/* Hover Accent */}
                <span className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeEngage;