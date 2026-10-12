import { ArrowRight } from "lucide-react";

const MobileAppIdeaCTA = () => {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="relative flex flex-col gap-7 overflow-hidden bg-white px-6 py-8 shadow-xl ring-1 ring-gray-200 sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:px-8 sm:py-10 lg:px-14 lg:py-14">
          {/* Decorative square pattern */}

          {/* Square mosaic background matching your screenshot */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: "linear-gradient(rgba(148,163,184,0.13) 0 0)",
              backgroundSize: "22px 22px",
              maskImage: `
                linear-gradient(to right, transparent 38%, black 88%),
                repeating-linear-gradient(
                    to right,
                    transparent 0px,
                    transparent 6px,
                    black 6px,
                    black 14px,
                    transparent 14px,
                    transparent 22px
                ),
                repeating-linear-gradient(
                    to bottom,
                    transparent 0px,
                    transparent 6px,
                    black 6px,
                    black 14px,
                    transparent 14px,
                    transparent 22px
                )
                `,
                        WebkitMaskImage: `
                linear-gradient(to right, transparent 38%, black 88%),
                repeating-linear-gradient(
                    to right,
                    transparent 0px,
                    transparent 6px,
                    black 6px,
                    black 14px,
                    transparent 14px,
                    transparent 22px
                ),
                repeating-linear-gradient(
                    to bottom,
                    transparent 0px,
                    transparent 6px,
                    black 6px,
                    black 14px,
                    transparent 14px,
                    transparent 22px
                )
                `,
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
            }}
          />

          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="ctaSquares"
                width="22"
                height="22"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="6"
                  y="6"
                  width="8"
                  height="8"
                  fill="rgba(148,163,184,0.18)"
                />
              </pattern>

              <linearGradient id="ctaFade" x1="0" y1="0" x2="1" y2="0">
                <stop offset="38%" stopColor="black" stopOpacity="0" />
                <stop offset="88%" stopColor="black" stopOpacity="1" />
              </linearGradient>

              <mask id="ctaPatternMask">
                <rect width="100%" height="100%" fill="url(#ctaFade)" />
              </mask>
            </defs>

            <rect
              width="100%"
              height="100%"
              fill="url(#ctaSquares)"
              mask="url(#ctaPatternMask)"
            />
          </svg>

          {/* Decorative squares */}
          <span className="pointer-events-none absolute right-[6%] top-8 h-3.5 w-3.5 bg-gray-200" />
          <span className="pointer-events-none absolute right-[3%] top-1/2 h-5 w-5 -translate-y-1/2 bg-gray-200" />
          <span className="pointer-events-none absolute right-[16%] top-10 h-2 w-2 bg-gray-200/70" />
          <span className="pointer-events-none absolute bottom-8 right-[10%] h-3 w-3 bg-gray-200/80" />
          <span className="pointer-events-none absolute bottom-12 right-[20%] h-2.5 w-2.5 bg-gray-200/60" />

          {/* Background glow */}
          <div className="pointer-events-none absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 bg-gray-200/40 blur-[110px]" />

          {/* Left accent line */}
          <span className="absolute bottom-0 left-0 top-0 z-10 w-1 bg-primary" />

          {/* CTA content */}
          <div className="relative z-10 max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              Your Idea
            </span>

            <h3 className="mb-3 font-inter text-xl font-bold tracking-tight text-gray-900 sm:text-2xl lg:text-3xl">
              Have a Unique App Idea? Let's Build It
            </h3>

            <p className="text-sm leading-relaxed text-gray-600 lg:text-base">
              Tell us what you're imagining. Our custom mobile app development
              services deliver a clear roadmap with the right tech stack to
              launch your app.
            </p>
          </div>

          {/* CTA button */}
          <a
            href="#contact"
            className="group relative z-10 inline-flex w-full flex-shrink-0 items-center justify-center gap-2.5 whitespace-nowrap bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-primary-dark sm:w-auto"
          >
            Pitch Your Idea
            <ArrowRight
              size={16}
              aria-hidden="true"
              className="-rotate-45 transition-transform duration-300 group-hover:rotate-0"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MobileAppIdeaCTA;
