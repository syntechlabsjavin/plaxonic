
interface EngagementModel {
  number: string;
  title: string;
  description: string;
}

const ENGAGEMENT_MODELS: EngagementModel[] = [
  {
    number: "01",
    title: "Dedicated Platform Team",
    description:
      "A cross-functional team that owns your platform roadmap end to end, ideal for products in active growth.",
  },
  {
    number: "02",
    title: "Platform Review & Advisory",
    description:
      "A focused engagement to assess architecture, tenancy, and reliability, and map the fastest path to a paved road.",
  },
  {
    number: "03",
    title: "Staff Augmentation",
    description:
      "Senior platform and SaaS engineers who embed in your team to add capacity and specialized expertise on demand.",
  },
  {
    number: "04",
    title: "Product Co-Development",
    description:
      "A shared-ownership build where we take a SaaS product from architecture to scaled, revenue-generating platform with you.",
  },
];

const SaaSPlatformEngagement = () => {
  return (
    <section
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-32"
      style={{
        background:
          "radial-gradient(120% 120% at 75% 40%, rgb(17, 42, 64) 0%, rgb(12, 26, 43) 45%, rgb(10, 19, 32) 100%)",
      }}
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[-10%] h-[460px] w-[560px] rounded-full bg-primary/15 blur-[170px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section heading */}
        <div className="mb-10 max-w-3xl sm:mb-14">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              How We Engage
            </span>
          </div>

          <h2 className="mb-8 font-inter text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl md:text-6xl lg:text-7xl">
            Engagement Models That{" "}
            <span className="text-gray-600">Fit How You Build</span>.
          </h2>

          <div className="flex gap-4">
            <div className="w-[3px] shrink-0 bg-primary" />

            <p className="text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg">
              Whether you need a team to own the platform or specialists to
              accelerate yours, we structure the engagement around your stage
              and goals.
            </p>
          </div>
        </div>

        {/* Engagement cards */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2">
          {ENGAGEMENT_MODELS.map((model) => (
            <div
              key={model.number}
              className="group relative border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-primary/40 hover:bg-white/[0.06] sm:p-8 lg:p-10"
            >
              <div className="flex items-start gap-5">
                {/* Number */}
                <span className="shrink-0 font-inter text-3xl font-bold leading-none text-white/15 transition-colors duration-300 group-hover:text-primary/50 [font-variant-numeric:tabular-nums] lg:text-4xl">
                  {model.number}
                </span>

                {/* Content */}
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-white lg:text-2xl">
                    {model.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-400 lg:text-base">
                    {model.description}
                  </p>
                </div>
              </div>

              {/* Hover accent */}
              <span className="absolute bottom-0 left-0 top-0 w-[3px] origin-top scale-y-0 bg-primary transition-transform duration-500 group-hover:scale-y-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaaSPlatformEngagement;
