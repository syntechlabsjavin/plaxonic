
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Server,
  TriangleAlert,
  Database,
  Cloud,
  Boxes,
  Zap,
} from "lucide-react";
import LegacyHeroBg from "../../../../../../../assets/what-we-do/legacy-hero-bg.webp"


const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const legacyItems = [
    { label: "Monolith", Icon: TriangleAlert },
    { label: "On-prem DB", Icon: Database },
    { label: "Manual deploys", Icon: TriangleAlert },
  ];

  const modernItems = [
    { label: "Microservices", Icon: Boxes },
    { label: "Cloud-native", Icon: Cloud },
    { label: "CI/CD pipeline", Icon: Zap },
  ];

  const handleModernizeClick = () => {
    const contactSection = document.querySelector("#contact");

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/contact";
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`legacy-hero relative w-full overflow-hidden bg-[#070809] pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28 ${
        isVisible ? "legacy-hero-visible" : ""
      }`}
    >
      {/* Background image */}
      <img
        src={LegacyHeroBg}
        alt=""
        aria-hidden="true"
        className="legacy-hero-bg pointer-events-none absolute inset-0 h-full w-full object-cover"
      />

      {/* Animated background glow */}
      <div
        aria-hidden="true"
        className="legacy-hero-glow pointer-events-none absolute -top-24 right-[-8%] h-[520px] w-[620px] rounded-full bg-primary/15 blur-[170px]"
      />

      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
          maskImage:
            "radial-gradient(70% 60% at 70% 20%, black 10%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left content */}
          <div className="legacy-hero-content">
            <div className="legacy-animate mb-6 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Digital Transformation / Specialized Services
              </span>
            </div>

            <h1 className="legacy-animate mb-6 font-inter text-[2rem] font-bold leading-[1.1] tracking-tight xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-white">Legacy Application</span>
              <br />
              <span className="text-primary">Modernization</span>
            </h1>

            <p className="legacy-animate mb-6 max-w-xl text-base font-medium leading-snug text-white sm:text-lg md:text-xl lg:text-2xl">
              Turn the systems holding you back into the platforms that move
              you forward, without the big-bang risk.
            </p>

            <div className="legacy-animate mb-10 flex max-w-xl gap-4">
              <div className="w-[3px] flex-shrink-0 bg-primary" />

              <p className="text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg">
                We modernize aging monoliths, mainframes, and on-prem
                applications into secure, cloud-native systems, incrementally
                and without downtime, so your business never has to stop to
                move forward.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="legacy-animate flex flex-col flex-wrap gap-4 xs:flex-row">
              <button
                type="button"
                onClick={handleModernizeClick}
                className="group inline-flex items-center justify-center gap-3 bg-primary px-6 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary-dark sm:px-8"
              >
                <span>Modernize Your Stack</span>

                <ArrowRight
                  aria-hidden="true"
                  className="-rotate-45 transition-transform duration-300 group-hover:rotate-0"
                  size={20}
                />
              </button>

              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 border-2 border-white/30 px-6 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-gray-900 sm:px-8"
              >
                Get a Legacy Assessment
              </a>
            </div>
          </div>

          {/* Right transformation visual */}
          <div className="legacy-hero-visual relative grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 sm:gap-4">
            {/* Legacy card */}
            <div className="legacy-card relative min-w-0 border border-white/10 bg-[#0c0f15] p-3 sm:p-5 lg:p-6">
              <div className="mb-5 flex items-center gap-2">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center bg-red-500/15 text-red-400">
                  <Server size={16} />
                </span>

                <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-400 sm:text-xs">
                  Legacy
                </span>
              </div>

              <div className="space-y-2.5">
                {legacyItems.map(({ label, Icon }, index) => (
                  <div
                    key={label}
                    className="legacy-list-item flex min-w-0 items-center gap-2 border border-white/10 bg-white/[0.03] px-2 py-2.5 sm:gap-2.5 sm:px-3"
                    style={{ "--item-index": index } as React.CSSProperties}
                  >
                    <Icon
                      size={16}
                      aria-hidden="true"
                      className="flex-shrink-0 text-red-400/80"
                    />

                    <span className="truncate font-mono text-[10px] text-gray-400 line-through decoration-red-400/50 sm:text-xs">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-2 text-[9px] font-semibold text-red-400 sm:text-[11px]">
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400" />
                <span>High maintenance · slow</span>
              </div>
            </div>

            {/* Transformation arrow */}
            <div className="legacy-transform-arrow relative flex h-8 w-8 flex-shrink-0 items-center justify-center bg-primary text-white shadow-lg shadow-primary/30 sm:h-10 sm:w-10">
              <ArrowRight size={20} aria-hidden="true" />
            </div>

            {/* Modern card */}
            <div className="modern-card relative min-w-0 border border-primary/30 bg-gradient-to-br from-primary/15 to-[#0c0f15] p-3 sm:p-5 lg:p-6">
              <div className="mb-5 flex items-center gap-2">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center bg-primary/20 text-primary">
                  <Cloud size={16} />
                </span>

                <span className="text-[10px] font-semibold uppercase tracking-wide text-primary sm:text-xs">
                  Modern
                </span>
              </div>

              <div className="space-y-2.5">
                {modernItems.map(({ label, Icon }, index) => (
                  <div
                    key={label}
                    className="modern-list-item flex min-w-0 items-center gap-2 border border-primary/20 bg-primary/[0.06] px-2 py-2.5 sm:gap-2.5 sm:px-3"
                    style={{ "--item-index": index } as React.CSSProperties}
                  >
                    <Icon
                      size={16}
                      aria-hidden="true"
                      className="flex-shrink-0 text-primary"
                    />

                    <span className="truncate font-mono text-[10px] text-white sm:text-xs">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-2 text-[9px] font-semibold text-emerald-400 sm:text-[11px]">
                <span className="modern-status-dot h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                <span>Scalable · fast</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Component-specific animations */}
      <style>{`
        .legacy-hero-bg {
          opacity: 0;
          transform: scale(1.04);
          transition: opacity 1s ease, transform 1.5s ease;
        }

        .legacy-hero-visible .legacy-hero-bg {
          opacity: 1;
          transform: scale(1);
        }

        .legacy-hero-glow {
          animation: legacyGlow 8s ease-in-out infinite;
        }

        .legacy-animate {
          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity 700ms ease,
            transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .legacy-hero-visible .legacy-animate {
          opacity: 1;
          transform: translateY(0);
        }

        .legacy-hero-visible .legacy-animate:nth-child(1) {
          transition-delay: 100ms;
        }

        .legacy-hero-visible .legacy-animate:nth-child(2) {
          transition-delay: 220ms;
        }

        .legacy-hero-visible .legacy-animate:nth-child(3) {
          transition-delay: 340ms;
        }

        .legacy-hero-visible .legacy-animate:nth-child(4) {
          transition-delay: 460ms;
        }

        .legacy-card,
        .modern-card {
          opacity: 0;
          transition:
            opacity 700ms ease,
            transform 700ms cubic-bezier(0.22, 1, 0.36, 1),
            border-color 300ms ease;
        }

        .legacy-card {
          transform: translateX(-24px);
        }

        .modern-card {
          transform: translateX(24px);
        }

        .legacy-hero-visible .legacy-card,
        .legacy-hero-visible .modern-card {
          opacity: 1;
          transform: translateX(0);
        }

        .legacy-hero-visible .modern-card {
          transition-delay: 200ms;
        }

        .legacy-list-item,
        .modern-list-item {
          opacity: 0;
          transition:
            opacity 500ms ease,
            transform 500ms ease,
            background-color 250ms ease;
        }

        .legacy-list-item {
          transform: translateX(-10px);
        }

        .modern-list-item {
          transform: translateX(10px);
        }

        .legacy-hero-visible .legacy-list-item,
        .legacy-hero-visible .modern-list-item {
          opacity: 1;
          transform: translateX(0);
          transition-delay: calc(350ms + var(--item-index) * 120ms);
        }

        .legacy-list-item:hover {
          background-color: rgba(248, 113, 113, 0.08);
        }

        .modern-list-item:hover {
          background-color: rgba(56, 189, 248, 0.12);
        }

        .legacy-transform-arrow {
          opacity: 0;
          transform: scale(0.7);
          transition:
            opacity 500ms ease 350ms,
            transform 500ms ease 350ms;
        }

        .legacy-hero-visible .legacy-transform-arrow {
          opacity: 1;
          transform: scale(1);
        }

        .legacy-hero-visible .legacy-transform-arrow::before {
          content: "";
          position: absolute;
          inset: 0;
          background: inherit;
          z-index: 0;
          animation: transformPulse 2s ease-in-out infinite;
        }

        .legacy-transform-arrow svg {
          position: relative;
          z-index: 1;
        }

        .modern-status-dot {
          animation: statusPulse 1.8s ease-in-out infinite;
        }

        @keyframes legacyGlow {
          0%, 100% {
            opacity: 0.45;
            transform: scale(0.96);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.06);
          }
        }

        @keyframes transformPulse {
          0%, 100% {
            opacity: 0;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.12);
          }
        }

        @keyframes statusPulse {
          0%, 100% {
            opacity: 0.45;
          }
          50% {
            opacity: 1;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .legacy-hero *,
          .legacy-hero *::before,
          .legacy-hero *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
            transition-delay: 0ms !important;
          }

          .legacy-hero .legacy-animate,
          .legacy-hero .legacy-card,
          .legacy-hero .modern-card,
          .legacy-hero .legacy-list-item,
          .legacy-hero .modern-list-item,
          .legacy-hero .legacy-transform-arrow,
          .legacy-hero .legacy-hero-bg {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
