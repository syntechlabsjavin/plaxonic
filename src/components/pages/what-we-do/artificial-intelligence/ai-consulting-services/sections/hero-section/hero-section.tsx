import { ArrowRight } from "lucide-react";
import HeroBgImg from "../../../../../../../assets/what-we-do/artificial-intelligence/hero.webp"

const trustItems = [
  "Strategy to production",
  "Responsible by design",
  "Measured by outcomes",
];

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#070809] pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28">
      <style>{`
        @keyframes hero-fade-up {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero-bg-zoom {
          from { opacity: 0; transform: scale(1.12); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes hero-glow {
          0%, 100% { opacity: 0.6; transform: translateX(-50%) scale(1); }
          50%      { opacity: 1;   transform: translateX(-50%) scale(1.08); }
        }
        @keyframes hero-gradient {
          0%, 100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        @keyframes hero-dot {
          0%, 100% { opacity: 1; }
          50%      { opacity: 0.35; }
        }

        .hero-fade-up {
          opacity: 0;
          animation: hero-fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .hero-bg-zoom {
          opacity: 0;
          animation: hero-bg-zoom 2.2s ease-out forwards;
        }
        .hero-glow {
          animation: hero-glow 8s ease-in-out infinite;
        }
        .hero-gradient-text {
          background-size: 200% 100%;
          animation: hero-gradient 6s ease-in-out infinite;
        }
        .hero-dot {
          animation: hero-dot 2.4s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-fade-up,
          .hero-bg-zoom {
            animation: none;
            opacity: 1;
          }
          .hero-glow,
          .hero-gradient-text,
          .hero-dot {
            animation: none;
          }
        }
      `}</style>

      {/* Background image */}
      <img
        src={HeroBgImg}
        alt=""
        aria-hidden="true"
        className="hero-bg-zoom pointer-events-none absolute inset-0 h-full w-full object-cover"
      />

      <div className="pointer-events-none absolute inset-0 bg-[#070809]/15" />

      {/* Glow */}
      <div className="hero-glow pointer-events-none absolute top-[-15%] left-1/2 -translate-x-1/2 w-[900px] h-[560px] rounded-full bg-primary/15 blur-[180px]" />

      <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="hero-fade-up inline-flex items-center gap-3 mb-8"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
              Artificial Intelligence / AI Development / AI Consulting
            </span>
          </div>

          <h1
            className="hero-fade-up font-inter text-[2rem] xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight leading-[1.1]"
            style={{ animationDelay: "0.25s" }}
          >
            Turn AI Ambition Into
            <br />
            <span className="hero-gradient-text bg-gradient-to-r from-primary-light via-primary to-primary-light bg-clip-text text-primary">
              Deployed Advantage.
            </span>
          </h1>

          <p
            className="hero-fade-up text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed mt-6 sm:mt-8 max-w-2xl mx-auto"
            style={{ animationDelay: "0.4s" }}
          >
            We help you find the use cases that matter, prove them fast, and
            engineer them into production. Strategy, prototypes, and real
            systems, built responsibly and measured by the outcomes they move.
          </p>

          <div
            className="hero-fade-up flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 mt-10 sm:mt-11"
            style={{ animationDelay: "0.55s" }}
          >
            <button
              type="button"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-primary text-white font-semibold text-base px-8 py-3.5 hover:bg-primary-dark hover:scale-[1.03] active:scale-[0.97] transition-all duration-300"
            >
              Book an AI Strategy Call
              <ArrowRight
                className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300"
                aria-hidden="true"
              />
            </button>

            <a
              href="/contact"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 border-2 border-white/25 text-white font-semibold text-base px-8 py-3.5 hover:bg-white hover:text-gray-900 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300"
            >
              See How We Work
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-3 mt-10 sm:mt-14">
            {trustItems.map((item, i) => (
              <span
                key={item}
                className="hero-fade-up inline-flex items-center gap-2 text-gray-400 text-sm"
                style={{ animationDelay: `${0.7 + i * 0.12}s` }}
              >
                <span
                  className="hero-dot w-1.5 h-1.5 bg-primary-light"
                  style={{ animationDelay: `${i * 0.4}s` }}
                />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;