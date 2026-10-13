const trustReasons = [
  {
    number: "01",
    title: "Attacker's Mindset",
    description:
      "We test the way real adversaries do, so the weaknesses we find are the ones that actually get exploited.",
  },
  {
    number: "02",
    title: "Always On",
    description:
      "Threats don't keep office hours. Our detection and response run 24/7, every day of the year.",
  },
  {
    number: "03",
    title: "Security Built Into Delivery",
    description:
      "Because we also engineer software, we embed security into the build, not bolt it on after.",
  },
  {
    number: "04",
    title: "Signal Over Noise",
    description:
      "We prioritize ruthlessly, so your team acts on the threats that matter instead of chasing alerts.",
  },
  {
    number: "05",
    title: "Proof, Not Promises",
    description:
      "Clear reporting tied to risk reduced and controls validated, ready for boards and auditors alike.",
  },
  {
    number: "06",
    title: "A True Partner",
    description:
      "We work as an extension of your team, transferring knowledge and raising your security maturity over time.",
  },
];

const WhyPlaxonic = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-[0.8fr_1.5fr] lg:gap-20">
          {/* Left Content */}
          <div className="self-start lg:sticky lg:top-32">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Why Plaxonic
              </span>
            </div>

            <h2 className="mb-8 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Why Teams Trust <span className="text-gray-300">Us</span>.
            </h2>

            <div className="flex gap-4">
              <div className="w-[3px] flex-shrink-0 bg-primary" />

              <p className="text-sm text-gray-600 sm:text-base md:text-lg">
                Security you can prove, run by people who think like attackers
                and build like engineers.
              </p>
            </div>
          </div>

          {/* Right Content - Trust Reasons */}
          <div className="border-t border-gray-200">
            {trustReasons.map((reason) => (
              <div
                key={reason.number}
                className="group flex items-start gap-6 border-b border-gray-200 py-7 transition-colors duration-300 hover:bg-white lg:gap-10 lg:py-8"
              >
                <span className="font-inter text-3xl font-bold leading-none tabular-nums text-gray-200 transition-colors duration-300 group-hover:text-primary/40 lg:text-4xl">
                  {reason.number}
                </span>

                <div>
                  <h4 className="mb-2 font-inter text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary lg:text-2xl">
                    {reason.title}
                  </h4>

                  <p className="max-w-2xl text-base leading-relaxed text-gray-600">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPlaxonic;