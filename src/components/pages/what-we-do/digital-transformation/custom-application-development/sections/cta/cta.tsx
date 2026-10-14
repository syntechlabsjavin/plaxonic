import { ArrowRight } from "lucide-react";
import CtaVideo from "../../../../../../../assets/cta.mp4";


const CTA = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="relative overflow-hidden bg-gray-900 px-6 py-14 text-center sm:px-12 sm:py-16 lg:px-20 lg:py-24">
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
            aria-hidden="true"
          >
            <source src={CtaVideo} type="video/mp4" />
          </video>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gray-900/70" />

          {/* Glow Effects */}
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-[480px] w-[480px] rounded-full blur-[140px]"
            style={{
              background: "#1ba3dd",
              opacity: 0.3,
            }}
          />

          <div
            className="pointer-events-none absolute -bottom-32 -left-24 h-[420px] w-[420px] rounded-full blur-[140px]"
            style={{
              background: "#1ba3dd",
              opacity: 0.18,
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            {/* Command Label */}
            <div className="mb-8 inline-flex items-center gap-2 border border-white/15 bg-white/5 px-4 py-2 font-mono text-xs text-gray-300">
              <span className="h-2 w-2 rounded-full bg-green-400" />

              <span className="font-semibold text-primary">
                npx
              </span>

              <span>start/your-project</span>
            </div>

            {/* Heading */}
            <h2 className="font-inter text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="text-white">
                Have An Idea That
              </span>
              <br />
              <span className="text-primary">
                No Tool Quite Fits?
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
              Bring us the problem—even a messy, half-formed one. A
              short discovery session is all it takes to turn it into
              a concrete plan you can actually build from.
            </p>

            {/* Features */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {[
                "Scoped feature list",
                "Clickable prototype",
                "No-surprise pricing",
              ].map((feature) => (
                <span
                  key={feature}
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-300"
                >
                  <span className="h-1.5 w-1.5 rotate-45 bg-primary" />
                  {feature}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
              <button
                type="button"
                className="group inline-flex h-14 w-full items-center justify-center gap-3 bg-primary px-10 text-base font-semibold text-white transition-colors hover:bg-primary-dark sm:w-auto"
              >
                Start Your Project

                <ArrowRight
                  className="-rotate-45 h-5 w-5 transition-transform duration-300 group-hover:rotate-0"
                  aria-hidden="true"
                />
              </button>

              <a
                href="/contact"
                className="inline-flex h-14 w-full items-center justify-center gap-2 border-2 border-white/30 px-10 text-base font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
              >
                Talk to an Engineer
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;