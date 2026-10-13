import { Handshake, ShieldAlert, Hammer } from "lucide-react";

const advisoryFeatures = [
  {
    title: "Stakeholder-Aligned",
    description:
      "We bring the board, business, and engineering into one plan everyone can commit to.",
    icon: Handshake,
  },
  {
    title: "Risk-First",
    description:
      "We surface trade-offs and risks early, so the hard calls are made with eyes open, not mid-program.",
    icon: ShieldAlert,
  },
  {
    title: "Build-Aware",
    description:
      "Our advisors are practitioners. The roadmaps we write are the ones our engineers can actually ship.",
    icon: Hammer,
  },
];

const WhyAdvisoryFirst = () => {
  return (
    <section className="relative overflow-hidden bg-[#070809] py-16 sm:py-20 md:py-24 lg:py-36">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-[-20%] h-[500px] w-[700px] max-w-full -translate-x-1/2 rounded-full bg-primary/15 blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 lg:mb-20">
          <div className="mb-6 inline-flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Why Advisory First
            </span>
          </div>

          <h2 className="mb-6 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Strategy Before <span className="text-primary">Code</span>.
          </h2>

          <p className="text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg">
            Most transformation programs don't fail on technology, they fail
            on unclear priorities, misaligned stakeholders, and roadmaps no
            one believes in. We start by getting those right. The result is a
            plan your board can fund and your teams can execute, with the
            trade-offs made explicit from day one.
          </p>
        </div>

        {/* Advisory Feature Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:gap-6">
          {advisoryFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative h-full overflow-hidden border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-primary/40 lg:p-8"
              >
                {/* Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center bg-primary/15 transition-colors duration-300 group-hover:bg-primary/25">
                  <Icon className="h-6 w-6 text-primary transition-transform duration-500 group-hover:rotate-[-6deg] group-hover:scale-110" />
                </div>

                {/* Card Content */}
                <h3 className="mb-2 text-lg font-semibold text-white lg:text-xl">
                  {feature.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-400">
                  {feature.description}
                </p>

                {/* Animated Bottom Border */}
                <span className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyAdvisoryFirst;