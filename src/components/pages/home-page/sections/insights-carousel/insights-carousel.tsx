import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties, MouseEvent } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Data                                                                       */
/* -------------------------------------------------------------------------- */

interface Insight {
  title: string;
  category: "Research" | "Perspective";
  href: string;
  image: string;
  description: string;
  /** "light" = white text (dark image), "dark" = black text (light image) */
  tone: "light" | "dark";
}

const INSIGHTS: Insight[] = [
  {
    title: "Why 80% of Enterprise AI Projects Stall",
    category: "Research",
    href: "/insights/research/why-80-percent-enterprise-ai-projects-stall",
    image:
      "https://res.cloudinary.com/dfsu0xeb/image/upload/e_trim:30/c_fill,ar_3:4/v1785845744/plaxonic/insights/do1k7pdj53gegoolhjhi.png",
    description:
      "The failure rate is real and well documented, and so are the reasons. This report examines both, and the small minority of teams who consistently get enterprise AI right.",
    tone: "light",
  },
  {
    title: "Cloud-Native Isn't Optional Anymore",
    category: "Perspective",
    href: "/insights/perspectives/cloud-native-isnt-optional-anymore",
    image:
      "https://res.cloudinary.com/dfsu0xeb/image/upload/e_trim:30/c_fill,ar_3:4/v1785762610/plaxonic/insights/pasmhe1ebszdvsdcu30q.png",
    description:
      "Most enterprises that moved to the cloud just lifted and shifted, and now pay more to run the same apps more slowly. Real speed and resilience come from how an app is built.",
    tone: "dark",
  },
  {
    title: "Top Cloud Trends for 2026",
    category: "Research",
    href: "/insights/research/top-cloud-trends-for-2026",
    image:
      "https://res.cloudinary.com/dfsu0xeb/image/upload/e_trim:30/c_fill,ar_3:4/v1786087915/plaxonic/insights/top-cloud-trends-2026-highlight.webp",
    description:
      "The year the cloud stopped being a destination and became a decision. A look at the shifts, from AI-native infrastructure to FinOps, reshaping how enterprises build in 2026.",
    tone: "dark",
  },
  {
    title: "Why Manufacturing Automation Fails, and How to Get It Right",
    category: "Research",
    href: "/insights/research/why-manufacturing-automation-fails",
    image:
      "https://res.cloudinary.com/dfsu0xeb/image/upload/e_trim:30/c_fill,ar_3:4/v1785838159/plaxonic/insights/w6xel7wj39yohxalaa8p.png",
    description:
      "Field-tested lessons from the plants that learned the hard way, plus the industry evidence that explains why automation stalls and a practical path to getting it right.",
    tone: "light",
  },
  {
    title: "Engineering Trust: What Production AI Actually Requires",
    category: "Perspective",
    href: "/insights/perspectives/engineering-trust-what-production-ai-requires",
    image:
      "https://res.cloudinary.com/dfsu0xeb/image/upload/e_trim:30/c_fill,ar_3:4/v1785758309/plaxonic/insights/ziotgduvgz8sw19naxmd.png",
    description:
      "Most AI fails in production not because of the model, but because the surrounding system was never engineered. Trust comes from reliability, transparency, and safety by design.",
    tone: "dark",
  },
];

/* -------------------------------------------------------------------------- */
/* Layout of each slot around the active card                                  */
/* -------------------------------------------------------------------------- */

interface Slot {
  /** Horizontal offset as a multiple of the card width */
  x: number;
  y: number;
  rotateY: number;
  scale: number;
  z: number;
}

const SLOTS: Record<number, Slot> = {
  0: { x: 0, y: 0, rotateY: 0, scale: 1, z: 30 },
  1: { x: 0.7036, y: 20, rotateY: -15, scale: 0.8, z: 20 },
  2: { x: 1.166, y: 40, rotateY: -25, scale: 0.65, z: 10 },
};

const VISIBLE_RANGE = 2;
const AUTOPLAY_MS = 5000;
const RING_RADIUS = 21;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

/** Signed circular distance from the active card, e.g. -2..2 for 5 cards */
function getOffset(index: number, active: number, total: number): number {
  const half = Math.floor(total / 2);
  return ((index - active + total + half) % total) - half;
}

function getCardStyle(offset: number): CSSProperties {
  const abs = Math.abs(offset);
  const sign = Math.sign(offset);
  const slot = SLOTS[Math.min(abs, VISIBLE_RANGE)];
  const visible = abs <= VISIBLE_RANGE;

  return {
    width: "var(--card-w)",
    zIndex: visible ? slot.z : 0,
    opacity: visible ? 1 : 0,
    pointerEvents: visible ? "auto" : "none",
    transform: `translate(calc(var(--card-w) * ${slot.x * sign}), ${slot.y}px) rotateY(${
      slot.rotateY * sign
    }deg) scale(${slot.scale})`,
  };
}

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

const InsightsCarousel = () => {
  const total = INSIGHTS.length;
  const [active, setActive] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [hovered, setHovered] = useState<boolean>(false);

  const ringRef = useRef<SVGCircleElement | null>(null);
  const elapsedRef = useRef<number>(0);

  const resetProgress = useCallback(() => {
    elapsedRef.current = 0;
    if (ringRef.current) {
      ringRef.current.style.strokeDashoffset = String(RING_CIRCUMFERENCE);
    }
  }, []);

  const goTo = useCallback(
    (index: number) => {
      setActive(((index % total) + total) % total);
      resetProgress();
    },
    [total, resetProgress],
  );

  const isRunning = !paused && !hovered;

  // Autoplay with a progress ring updated directly on the DOM node
  useEffect(() => {
    if (!isRunning) return;

    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      elapsedRef.current += now - last;
      last = now;
      const progress = Math.min(elapsedRef.current / AUTOPLAY_MS, 1);

      if (ringRef.current) {
        ringRef.current.style.strokeDashoffset = String(
          RING_CIRCUMFERENCE * (1 - progress),
        );
      }

      if (progress >= 1) {
        elapsedRef.current = 0;
        setActive((a) => (a + 1) % total);
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isRunning, total]);

  const handleCardClick = (e: MouseEvent<HTMLElement>, index: number) => {
    if (index !== active) {
      // Side cards bring themselves to the front instead of navigating
      e.preventDefault();
      goTo(index);
    }
  };

  return (
    <section className="relative bg-white py-14 sm:py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="font-inter text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 tracking-tight mb-4">
            Plaxonic <span className="text-[#1ba3dd]">Intelligence</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg xl:text-xl max-w-2xl mx-auto">
            Where we stand on the technologies, trends, and transformations
            defining the future of enterprise technology
          </p>
        </div>

        <div
          className="relative overflow-hidden pb-16"
          role="region"
          aria-roledescription="carousel"
          aria-label="Plaxonic Intelligence"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") goTo(active - 1);
            if (e.key === "ArrowRight") goTo(active + 1);
          }}
        >
          {/* Pause / play with progress ring */}
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? "Play" : "Pause"}
            className="absolute top-0 right-0 z-40 w-12 h-12 flex items-center justify-center cursor-pointer"
          >
            <svg
              className="absolute inset-0 w-12 h-12 -rotate-90"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <circle
                cx="24"
                cy="24"
                r={RING_RADIUS}
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="2"
              />
              <circle
                ref={ringRef}
                cx="24"
                cy="24"
                r={RING_RADIUS}
                fill="none"
                stroke="#9ca3af"
                strokeWidth="2"
                strokeDasharray={RING_CIRCUMFERENCE}
                strokeDashoffset={RING_CIRCUMFERENCE}
                strokeLinecap="round"
              />
            </svg>
            {paused ? (
              <Play
                className="w-4 h-4 text-[#9ca3af] relative z-10"
                fill="currentColor"
                aria-hidden="true"
              />
            ) : (
              <Pause
                className="w-4 h-4 text-[#9ca3af] relative z-10"
                fill="currentColor"
                aria-hidden="true"
              />
            )}
          </button>

          {/* Stage */}
          <div
            className="relative h-[440px] sm:h-[500px] md:h-[580px] flex items-center justify-center [--card-w:280px] sm:[--card-w:310px] md:[--card-w:360px] lg:[--card-w:340px] xl:[--card-w:388px]"
            style={{ perspective: "1200px" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {INSIGHTS.map((item, index) => {
              const offset = getOffset(index, active, total);
              const isActive = offset === 0;
              const light = item.tone === "light";

              return (
                <article
                  key={item.href}
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${total}`}
                  onClick={(e) => handleCardClick(e, index)}
                  className="group/card absolute aspect-[3/4] shadow-2xl cursor-pointer overflow-hidden transition-[transform,opacity] duration-700 ease-out [backface-visibility:hidden] [transform-style:preserve-3d]"
                  style={getCardStyle(offset)}
                >
                  <div className="absolute -inset-[2px] bg-white">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Readability overlay, shown on hover / keyboard focus */}
                  <div
                    className={`pointer-events-none absolute inset-0 backdrop-blur-md opacity-0 transition-opacity duration-300 group-hover/card:opacity-100 group-focus-within/card:opacity-100 ${
                      light ? "bg-black/40" : "bg-white/40"
                    }`}
                  />

                  <div
                    className={`relative h-full p-5 sm:p-6 xl:p-8 flex flex-col z-10 ${
                      light ? "text-white" : "text-black"
                    }`}
                  >
                    <div className="mb-4 sm:mb-5">
                      <span className="inline-block px-3 py-1 bg-[#1ba3dd] text-white text-xs font-medium uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-[28px] lg:text-[24px] xl:text-[28px] font-medium leading-tight">
                      <a
                        href={item.href}
                        tabIndex={isActive ? 0 : -1}
                        className="cursor-pointer transition-opacity hover:opacity-80"
                      >
                        {item.title}
                      </a>
                    </h3>

                    <p
                      className={`text-base sm:text-[18px] lg:text-[16px] xl:text-[18px] font-normal leading-relaxed mt-3 sm:mt-4 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100 group-focus-within/card:opacity-100 ${
                        light ? "text-white/90" : "text-black/80"
                      }`}
                    >
                      {item.description}
                    </p>

                    <div className="grow" />

                    <a
                      href={item.href}
                      tabIndex={isActive ? 0 : -1}
                      className="flex w-fit items-center gap-2 cursor-pointer"
                    >
                      <span className="text-xs font-semibold uppercase tracking-wider">
                        Learn More
                      </span>
                      <ArrowRight
                        className="w-4 h-4 opacity-0 -translate-x-2.5 transition-all duration-300 group-hover/card:opacity-100 group-hover/card:translate-x-0 group-focus-within/card:opacity-100 group-focus-within/card:translate-x-0"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Mobile / tablet controls */}
          <div className="mt-6 flex items-center justify-center gap-4 lg:hidden">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => goTo(active - 1)}
              className="flex h-12 w-12 items-center justify-center bg-primary text-white transition-colors hover:bg-primary-dark"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => goTo(active + 1)}
              className="flex h-12 w-12 items-center justify-center bg-primary text-white transition-colors hover:bg-primary-dark"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsCarousel;
