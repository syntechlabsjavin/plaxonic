import {
  Telescope,
  Layers,
  Scale,
  Handshake,
  Gauge,
  Recycle,
} from "lucide-react";

const reasons = [
  {
    icon: Telescope,
    title: "Practitioners, not slide-makers",
    description:
      "Our advisors have built and run the systems they advise on. The plans we write are grounded in delivery reality.",
  },
  {
    icon: Layers,
    title: "Strategy that connects to build",
    description:
      "Because we also engineer, our roadmaps flow straight into delivery, no translation gap, no lost intent.",
  },
  {
    icon: Scale,
    title: "Vendor-neutral by design",
    description:
      "We have no platform quota to fill. Every recommendation is the one that's right for you.",
  },
  {
    icon: Handshake,
    title: "Stakeholder alignment built in",
    description:
      "We bring the room together, board, business, and engineering, around a plan everyone can commit to.",
  },
  {
    icon: Gauge,
    title: "Bias for momentum",
    description:
      "We move at the speed of decisions, lightweight enough to act this quarter, rigorous enough to trust.",
  },
  {
    icon: Recycle,
    title: "We leave you stronger",
    description:
      "Knowledge transfer is part of the work, your teams own the strategy long after we step back.",
  },
];

const WhyPlaxonic = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Heading */}
        <div className="mb-10 max-w-3xl sm:mb-14 lg:mb-20">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Why Plaxonic
            </span>
          </div>

          <h2 className="mb-8 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-6xl lg:text-7xl">
            Why Teams Choose{" "}
            <span className="text-gray-300">Us</span>.
          </h2>

          <div className="flex gap-4">
            <div className="w-[3px] flex-shrink-0 bg-primary" />

            <p className="text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
              Plenty of firms will write you a strategy. Far fewer will
              stand behind it, and fewer still can build it. We do all
              three.
            </p>
          </div>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="group relative flex h-full flex-col overflow-hidden border border-gray-200 bg-gray-50 p-6 transition-colors duration-300 hover:border-primary/40 lg:p-7"
              >
                {/* Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                  <Icon
                    className="h-6 w-6 text-primary"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </div>

                {/* Card Content */}
                <h3 className="mb-2.5 text-base font-semibold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-primary lg:text-lg">
                  {reason.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-600">
                  {reason.description}
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

export default WhyPlaxonic;