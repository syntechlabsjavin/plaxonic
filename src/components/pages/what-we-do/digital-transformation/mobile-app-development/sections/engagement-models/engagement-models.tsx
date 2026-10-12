
import {
  Users,
  ClipboardCheck,
  UserPlus,
  Handshake,
} from "lucide-react";

interface EngagementModel {
  title: string;
  description: string;
  bestFor: string;
  icon: React.ElementType;
}

const ENGAGEMENT_MODELS: EngagementModel[] = [
  {
    title: "Dedicated Development Team",
    description:
      "A cross-functional mobile team that works as an extension of your organization, supporting evolving products and long-term roadmaps.",
    bestFor: "Evolving products & long-term roadmaps",
    icon: Users,
  },
  {
    title: "Fixed-Scope Project",
    description:
      "A clearly defined scope, timeline, and budget for well-specified mobile app builds with firm delivery requirements.",
    bestFor: "Well-specified builds & firm dates",
    icon: ClipboardCheck,
  },
  {
    title: "Staff Augmentation",
    description:
      "Skilled mobile engineers who integrate with your existing team, adding development capacity and specialized expertise when needed.",
    bestFor: "Added capacity & specialist skills",
    icon: UserPlus,
  },
  {
    title: "Product Co-Development",
    description:
      "A collaborative partnership where we help design, build, and scale your mobile product from concept through market launch.",
    bestFor: "Concept-to-market partnerships",
    icon: Handshake,
  },
];

const EngagementModels = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section heading */}
        <div className="mb-10 max-w-3xl sm:mb-14 lg:mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Engagement Models
            </span>
          </div>

          <h2 className="mb-8 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-6xl lg:text-7xl">
            Models That Fit{" "}
            <span className="text-gray-300">How You Work</span>.
          </h2>

          <div className="flex gap-4">
            <div className="w-[3px] flex-shrink-0 bg-primary" />

            <p className="text-sm text-gray-600 sm:text-base md:text-lg">
              We structure our mobile app development services around your
              product goals, team requirements, and delivery needs. We provide
              you with the flexibility to choose an engagement model that fits
              how you work.
            </p>
          </div>
        </div>

        {/* Engagement model cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {ENGAGEMENT_MODELS.map((model) => {
            const Icon = model.icon;

            return (
              <div
                key={model.title}
                className="group relative flex h-full flex-col overflow-hidden border border-gray-200 bg-white p-7 transition-colors duration-300 hover:border-primary/40 lg:p-8"
              >
                {/* Icon */}
                <div className="mb-7">
                  <div className="flex h-12 w-12 items-center justify-center bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon size={24} strokeWidth={2} aria-hidden="true" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-3 font-inter text-lg font-semibold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-primary lg:text-xl">
                  {model.title}
                </h3>

                {/* Description */}
                <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-600">
                  {model.description}
                </p>

                {/* Best for */}
                <div className="border-t border-gray-100 pt-5">
                  <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400">
                    Best for
                  </div>

                  <div className="text-sm font-medium text-gray-800">
                    {model.bestFor}
                  </div>
                </div>

                {/* Animated bottom border */}
                <span className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EngagementModels;
