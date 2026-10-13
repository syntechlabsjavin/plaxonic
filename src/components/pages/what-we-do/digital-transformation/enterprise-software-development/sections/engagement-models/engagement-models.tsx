import {
  Users,
  ClipboardCheck,
  UserPlus,
  Activity,
} from "lucide-react";

interface EngagementModel {
  title: string;
  description: string;
  icon: React.ElementType;
}

const engagementModels: EngagementModel[] = [
  {
    title: "Dedicated Integration Team",
    description:
      "A cross-functional team that owns your integration roadmap end to end, ideal for large or evolving integration programs.",
    icon: Users,
  },
  {
    title: "Integration Audit & Advisory",
    description:
      "A focused engagement to assess your current integrations, surface risks and bottlenecks, and map the path to a resilient architecture.",
    icon: ClipboardCheck,
  },
  {
    title: "Staff Augmentation",
    description:
      "Senior integration engineers who embed in your team to add capacity and specialized expertise on demand.",
    icon: UserPlus,
  },
  {
    title: "Managed Integration",
    description:
      "Ongoing monitoring, maintenance, and evolution of your integration layer, so connections stay reliable long after launch.",
    icon: Activity,
  },
];

const EngagementModels = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Heading */}
        <div className="mb-10 max-w-3xl sm:mb-14 lg:mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Engagement Models
            </span>
          </div>

          <h2 className="mb-8 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
            Structured Around{" "}
            <span className="text-gray-300">Where You Are</span>.
          </h2>

          <div className="flex gap-4">
            <div className="w-[3px] shrink-0 bg-primary" />

            <p className="text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
              Whether you are connecting two systems or building an
              enterprise integration layer, we structure the engagement
              around where you are.
            </p>
          </div>
        </div>

        {/* Engagement Model Cards */}
        <div className="grid grid-cols-1 gap-px border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-4">
          {engagementModels.map((model) => {
            const Icon = model.icon;

            return (
              <div
                key={model.title}
                className="group relative flex flex-col bg-white p-8 lg:p-9"
              >
                {/* Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon
                    className="h-6 w-6"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-primary sm:text-xl">
                  {model.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-600">
                  {model.description}
                </p>

                {/* Bottom Hover Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EngagementModels;