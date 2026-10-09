import { ArrowUpRight } from "lucide-react";
import { useEffect, useId, useState } from "react";

const ROTATING_WORDS = [
  "ENGINEERING",
  "AUTOMATION",
  "PLATFORMS",
  "SECURITY",
  "IMPACT",
  "AGILITY",
  "SCALABILITY",
  "VELOCITY",
  "INTEGRATION",
  "EFFICIENCY",
  "OUTCOMES",
] as const;

const WORD_INTERVAL_MS = 2200;

function useRotatingIndex(length: number, intervalMs: number): number {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % length),
      intervalMs,
    );
    return () => window.clearInterval(id);
  }, [length, intervalMs]);

  return index;
}

const HeroSection = () => {
  const patternId = useId();
  const wordIndex = useRotatingIndex(ROTATING_WORDS.length, WORD_INTERVAL_MS);
  return (
    <>
      <section className="relative w-full overflow-hidden bg-white h-dvh">
        {/* Dot-grid background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id={patternId}
                x="0"
                y="0"
                width="28"
                height="28"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="3" cy="3" r="1.5" fill="#c0c0c0" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${patternId})`} />
          </svg>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-16 w-full">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-16">
              {/* Headline */}
              <div className="lg:flex-1 lg:min-w-0">
                <h1 className="inline-flex flex-col">
                  <span className="font-inter text-[2.75rem] xs:text-[3.5rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[5rem] xl:text-[7rem] 2xl:text-[10rem] font-black text-gray-900 leading-[0.95] tracking-[-0.02em] uppercase lg:whitespace-nowrap">
                    WHERE AI
                  </span>

                  <span className="flex items-center gap-2 sm:gap-3 md:gap-4 mt-1">
                    <span className="font-inter text-[1.4rem] xs:text-[1.8rem] sm:text-[2.5rem] md:text-[3.2rem] lg:text-[2.5rem] xl:text-[3.4rem] 2xl:text-[4.8rem] font-black text-gray-900 leading-[0.95] tracking-[-0.02em] uppercase shrink-0">
                      MEETS
                    </span>

                    <span className="flex-1 inline-flex items-center justify-center bg-[#1ba3dd] px-2.5 xs:px-3 sm:px-4 md:px-6 py-1 md:py-2 min-w-0">
                      <span className="relative inline-grid font-inter text-[1.15rem] xs:text-[1.5rem] sm:text-[2.1rem] md:text-[2.7rem] lg:text-[2rem] xl:text-[2.8rem] 2xl:text-[4rem] font-black text-white leading-[0.95] tracking-[-0.02em] uppercase">
                        {/* Invisible copies reserve the width of the longest word */}
                        <span
                          aria-hidden="true"
                          className="col-start-1 row-start-1 grid invisible"
                        >
                          {ROTATING_WORDS.map((word) => (
                            <span
                              key={word}
                              className="col-start-1 row-start-1 whitespace-nowrap"
                            >
                              {word}
                            </span>
                          ))}
                        </span>

                        <span className="col-start-1 row-start-1 flex items-center justify-center overflow-hidden">
                          <span
                            key={wordIndex}
                            className="inline-block whitespace-nowrap motion-safe:animate-word-in"
                          >
                            {ROTATING_WORDS[wordIndex]}
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </h1>
              </div>

              {/* Supporting copy */}
              <div className="lg:w-[400px] xl:w-[450px]">
                <div className="flex gap-5 mb-4">
                  <div className="w-[5px] bg-[#1ba3dd] shrink-0" />
                  <h2 className="text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold text-gray-900">
                    Engineering what&apos;s next. Delivering it now.
                  </h2>
                </div>

                <p className="text-gray-600 text-base xl:text-lg leading-relaxed mb-6">
                  We help global enterprises build production-ready AI systems,
                  cloud-native platforms, and automation-driven solutions,
                  engineered for scale, delivering measurable results.
                </p>

                <a
                  href="/services"
                  className="inline-flex items-center gap-3 bg-[#1ba3dd] text-white font-semibold text-lg px-8 py-3 hover:bg-[#168ab8] transition-colors group"
                >
                  <span>Discover</span>
                  <ArrowUpRight
                    className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2">
            <span className="text-gray-500 text-sm tracking-wider uppercase">
              Scroll
            </span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2 motion-safe:animate-scroll-bob">
              <div className="w-1.5 h-3 bg-gray-400 rounded-full" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
