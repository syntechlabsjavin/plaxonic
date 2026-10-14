import { ArrowRight, Compass, ShieldCheck } from "lucide-react";
import Hero12 from "../../../../../../../assets/what-we-do/hero12.mp4"

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-28 lg:pt-40">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left Content */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Digital Transformation / Specialized Services
              </span>
            </div>

            <h1 className="mb-6 font-inter text-[2rem] font-bold leading-[1.1] tracking-tight xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-gray-900">
                Technology Consulting{" "}
              </span>
              <span className="text-primary">&amp; Advisory</span>
            </h1>

            <p className="mb-6 max-w-xl text-lg font-medium leading-snug text-gray-900 sm:text-xl md:text-2xl">
              We help leaders decide what to build, why it matters, and how to
              get there, before a single line of code is written.
            </p>

            <p className="mb-10 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
              Plaxonic&apos;s advisory teams sit alongside your leadership to
              set technology strategy, modernize architecture, and de-risk
              transformation, turning ambiguity into a clear, fundable roadmap,
              and staying in the room to see it through.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <button
                type="button"
                onClick={() => {
                  window.location.href = "/contact";
                }}
                className="group inline-flex w-full items-center justify-center gap-3 bg-primary px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-dark sm:w-auto"
              >
                <span>Book a Strategy Call</span>

                <ArrowRight className="h-5 w-5 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
              </button>

              <a
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-3 border-2 border-gray-900 px-8 py-3.5 text-base font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white sm:w-auto"
              >
                Explore Our Approach
              </a>
            </div>
          </div>

          {/* Right Video Section */}
          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-white">
              <video
                src={Hero12}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="absolute inset-0 h-full w-full bg-white object-cover"
              />
            </div>

            {/* Vendor-Neutral Card */}
            <div className="absolute -left-2 top-10 flex items-center gap-3 border border-gray-200 bg-white px-3 py-2.5 shadow-xl sm:-left-6 sm:px-4 sm:py-3">
              <Compass className="h-5 w-5 flex-shrink-0 text-primary" />

              <div>
                <div className="text-base font-bold leading-none text-gray-900">
                  Vendor-neutral
                </div>

                <div className="mt-0.5 text-[11px] text-gray-500">
                  Advice with no agenda
                </div>
              </div>
            </div>

            {/* Decision-Ready Card */}
            <div className="absolute -right-2 bottom-10 flex items-center gap-3 border border-gray-200 bg-white px-3 py-2.5 shadow-xl sm:-right-6 sm:px-4 sm:py-3">
              <ShieldCheck className="h-5 w-5 flex-shrink-0 text-primary" />

              <div>
                <div className="text-base font-bold leading-none text-gray-900">
                  Decision-ready
                </div>

                <div className="mt-0.5 text-[11px] text-gray-500">
                  Roadmaps you can fund
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;