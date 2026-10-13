
import React from "react";
import { ArrowUpRight } from "lucide-react";

const CTA: React.FC = () => {
  return (
    <section className="bg-white pt-10 pb-16 sm:pb-20 lg:pt-16 lg:pb-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="relative overflow-hidden bg-gray-900 px-6 py-14 text-center sm:px-12 sm:py-16 lg:px-20 lg:py-24">
          {/* Background video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/cta.mp4" type="video/mp4" />
          </video>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gray-900/70" />

          {/* Blue glow effects */}
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-[480px] w-[480px] rounded-full blur-[140px]"
            style={{
              background: "rgb(27, 163, 221)",
              opacity: 0.3,
            }}
          />

          <div
            className="pointer-events-none absolute -bottom-32 -left-24 h-[420px] w-[420px] rounded-full blur-[140px]"
            style={{
              background: "rgb(27, 163, 221)",
              opacity: 0.18,
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            <h2 className="font-inter text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-5xl">
              <span className="text-white">
                Still Running The Business
              </span>{" "}
              <span className="text-primary">
                On Disconnected Systems?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg md:text-xl">
              Book a free ERP assessment. We'll review how your systems work
              today, show where they're holding you back, and map the fastest
              path to one platform your whole business runs on.
            </p>

            {/* CTA button */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
              <a
                href="/contact"
                className="group inline-flex h-14 items-center gap-3 bg-primary px-10 text-base font-semibold text-white transition-colors duration-300 hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
              >
                Talk to an ERP Expert

                <ArrowUpRight
                  size={20}
                  strokeWidth={2}
                  aria-hidden="true"
                  className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
