import { ArrowRight } from "lucide-react";

const CustomBuildCTA = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-20">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="relative overflow-hidden ring-1 ring-gray-200 shadow-xl bg-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-7 sm:gap-10 px-6 sm:px-8 lg:px-14 py-10 lg:py-14">
          {/* Background */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent" />
          </div>

          {/* Primary Accent */}
          <span className="absolute left-0 top-0 bottom-0 w-1 bg-primary z-10" />

          {/* Content */}
          <div className="relative max-w-2xl">
            <span className="inline-flex items-center gap-2 text-primary text-[11px] font-semibold tracking-[0.22em] uppercase mb-4">
              Custom Build
            </span>

            <h3 className="font-inter text-2xl lg:text-3xl font-bold text-gray-900 mb-3 tracking-tight">
              Don&apos;t See Your Exact Use Case?
            </h3>

            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              We build for needs that don&apos;t fit a standard list. Tell us
              about your business and goals, and our team will come back with a
              clear product roadmap, scope, and recommended approach.
            </p>
          </div>

          {/* CTA Button */}
          <button
            type="button"
            className="group relative z-10 inline-flex items-center justify-center gap-2.5 bg-primary text-white font-semibold text-sm px-7 py-3.5 hover:bg-primary-dark transition-colors flex-shrink-0 whitespace-nowrap"
          >
            Describe Your Project

            <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomBuildCTA;