import {
  Users,
  ClipboardCheck,
  UserPlus,
  Handshake,
} from "lucide-react";

const engagementModels = [
  {
    icon: Users,
    title: "Dedicated Development Team",
    description:
      "A cross-functional team that works as an extension of yours, ideal for evolving products and long-term roadmaps.",
    bestFor: "Evolving products & long-term roadmaps",
  },
  {
    icon: ClipboardCheck,
    title: "Fixed-Scope Project",
    description:
      "Clearly defined scope, timeline, and budget, suited to well-specified builds with firm delivery dates.",
    bestFor: "Well-specified builds, firm dates",
  },
  {
    icon: UserPlus,
    title: "Staff Augmentation",
    description:
      "Skilled engineers who plug into your existing team to add capacity and specialized expertise on demand.",
    bestFor: "Added capacity & specialist skills",
  },
  {
    icon: Handshake,
    title: "Product Co-Development",
    description:
      "A shared-ownership partnership where we help you design, build, and scale a product from concept to market.",
    bestFor: "Concept-to-market partnerships",
  },
];

const EngagementModels = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Heading */}
        <div className="mb-14 max-w-3xl lg:mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Engagement Models
            </span>
          </div>

          <h2 className="mb-8 font-inter text-[2rem] leading-[1.1] font-bold tracking-tight text-gray-900 xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Models That Fit{" "}
            <span className="text-gray-300">How You Work</span>.
          </h2>

          <div className="flex gap-4">
            <div className="w-[3px] shrink-0 bg-primary" />

            <p className="text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
              Every organization is at a different stage. We structure
              engagements around your needs, not a fixed template.
            </p>
          </div>
        </div>

        {/* Engagement Model Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {engagementModels.map(
            ({ icon: Icon, title, description, bestFor }) => (
              <div
                key={title}
                className="group relative flex h-full flex-col overflow-hidden border border-gray-200 bg-white p-7 transition-colors duration-300 hover:border-primary/40 lg:p-8"
              >
                {/* Icon */}
                <div className="mb-7">
                  <div className="flex h-12 w-12 items-center justify-center bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-3 font-inter text-lg leading-snug font-semibold text-gray-900 transition-colors duration-300 group-hover:text-primary lg:text-xl">
                  {title}
                </h3>

                {/* Description */}
                <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-600">
                  {description}
                </p>

                {/* Best For */}
                <div className="border-t border-gray-100 pt-5">
                  <div className="mb-1.5 text-[10px] font-semibold tracking-[0.15em] text-gray-400 uppercase">
                    Best for
                  </div>

                  <div className="text-sm font-medium text-gray-800">
                    {bestFor}
                  </div>
                </div>

                {/* Hover Bottom Border */}
                <span className="absolute right-0 bottom-0 left-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default EngagementModels;