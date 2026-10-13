import { Check, ArrowRight } from "lucide-react";

const partnershipBenefits = [
  "Senior advisors, not junior analysts, on every engagement",
  "Embedded with your team, working from your context and constraints",
  "A clear hand-off, or we stay on to deliver, your call",
  "Knowledge transferred, so your team is stronger when we leave",
];

const HowWePartner = () => {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="pointer-events-none absolute -inset-4 bg-primary/10 blur-[60px]" />

            <div className="relative overflow-hidden">
              <img
                src="/src/assets/what-we-do/placeholder-x.svg"
                alt="Advisors working alongside a client team"
                className="block aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                How We Partner
              </span>
            </div>

            <h2 className="mb-6 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Advisors Who Stay{" "}
              <span className="text-gray-300">In The Room</span>.
            </h2>

            <p className="mb-8 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
              We don't parachute in, hand over a report, and disappear. Our
              consultants work as part of your team, accountable to the same
              outcomes, and committed to seeing decisions turn into results.
            </p>

            {/* Partnership Benefits */}
            <ul className="mb-10 space-y-4">
              {partnershipBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center bg-primary/10">
                    <Check
                      className="h-4 w-4 text-primary"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </span>

                  <span className="text-base leading-relaxed text-gray-700">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="/contact"
              className="group inline-flex w-full items-center justify-center gap-3 bg-primary px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-dark sm:w-auto"
            >
              <span>Talk To An Advisor</span>

              <ArrowRight
                className="-rotate-45 h-5 w-5 transition-transform duration-300 group-hover:rotate-0"
                strokeWidth={2}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWePartner;