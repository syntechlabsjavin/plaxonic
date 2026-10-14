import { ArrowRight, ShieldCheck, Lock } from "lucide-react";
import CybersecurityHero from "../../../../../../../assets/what-we-do/cybersecurity-hero.webp";

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
              <span className="text-gray-900">Cybersecurity </span>
              <span className="text-primary">Services</span>
            </h1>

            <p className="mb-6 max-w-xl text-base font-medium leading-snug text-gray-900 sm:text-lg md:text-xl lg:text-2xl">
              Security that holds up under real-world pressure, from the
              code you ship to the cloud you run and the people who use it.
            </p>

            <p className="mb-10 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
              Plaxonic helps organizations find weaknesses before
              attackers do, harden their systems, and respond fast when
              it matters, from offensive testing and cloud security to
              24/7 detection and compliance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <button
                type="button"
                onClick={() =>
                  (window.location.href = "/contact")
                }
                className="group inline-flex w-full items-center justify-center gap-3 bg-primary px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-dark sm:w-auto"
              >
                <span>Request a Security Assessment</span>

                <ArrowRight className="-rotate-45 transition-transform duration-300 group-hover:rotate-0" size={20} />
              </button>

              <a
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-3 border-2 border-gray-900 px-8 py-3.5 text-base font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white sm:w-auto"
              >
                Talk to a Security Expert
              </a>
            </div>
          </div>

          {/* Right Image and Floating Cards */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-6 bg-primary/15 blur-[70px]" />

            <div className="relative overflow-hidden bg-[#0d0f14] shadow-2xl ring-1 ring-black/10">
              <img
                src={CybersecurityHero}
                alt="Security operations"
                className="block aspect-[4/3] w-full object-cover sm:aspect-[16/10] lg:aspect-[4/3]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#070809]/70 via-transparent to-transparent" />
            </div>

            {/* Threat Protection Card */}
            <div className="absolute -left-2 top-10 flex items-center gap-3 border border-gray-200 bg-white px-4 py-3 shadow-xl sm:-left-6">
              <ShieldCheck
                className="h-5 w-5 flex-shrink-0 text-primary"
                aria-hidden="true"
              />

              <div>
                <div className="text-base font-bold leading-none text-gray-900">
                  99.99%
                </div>

                <div className="mt-0.5 text-[11px] text-gray-500">
                  Threats stopped at the edge
                </div>
              </div>
            </div>

            {/* Monitoring Card */}
            <div className="absolute -right-2 bottom-10 flex items-center gap-3 border border-gray-200 bg-white px-4 py-3 shadow-xl sm:-right-6">
              <Lock
                className="h-5 w-5 flex-shrink-0 text-primary"
                aria-hidden="true"
              />

              <div>
                <div className="text-base font-bold leading-none text-gray-900">
                  24/7
                </div>

                <div className="mt-0.5 text-[11px] text-gray-500">
                  Monitoring &amp; response
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