import { ArrowRight } from "lucide-react";
import MobileHero from "../../../../../../../assets/mobile-application-development/mobile-hero-devices.webp";

const MobileAppHero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-28">
      {/* Desktop Device Image */}
      <div className="absolute inset-y-0 right-0 hidden w-[55%] items-center justify-center pr-6 lg:flex xl:pr-12">
        <img
          src={MobileHero}
          alt="Mobile apps across iOS, Android, React Native and Flutter"
          className="h-auto max-h-[80%] w-auto max-w-[96%] object-contain drop-shadow-2xl"
        />
      </div>

      {/* Bottom Gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-40 bg-gradient-to-t from-black to-transparent" />

      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-24 left-[-10%] h-[520px] w-[640px] rounded-full bg-primary/15 blur-[170px]" />

      {/* Dot Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(27, 163, 220, 0.14) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(60% 60% at 20% 30%, black 10%, transparent 70%)",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="lg:w-1/2 lg:pr-10">
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Digital Transformation / Engineering
            </span>
          </div>

          {/* Heading */}
          <h1 className="mb-6 font-inter text-[2rem] leading-[1.1] font-bold tracking-tight xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-white">
              Mobile App Development
            </span>
            <br />
            <span className="text-primary">Services</span>
          </h1>

          {/* Subtitle */}
          <p className="mb-8 max-w-2xl text-base leading-snug font-medium text-white sm:text-lg md:text-xl lg:text-2xl">
            Building native iOS, Android, cross-platform, and AI-powered
            mobile app development solutions for every business and user.
          </p>

          {/* Description */}
          <div className="mb-10 flex max-w-2xl gap-4">
            <div className="w-[3px] shrink-0 bg-primary" />

            <p className="text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg">
              As a leading mobile app development company, we deliver
              custom mobile development services according to your business
              needs. Our team of expert engineers builds apps that launch
              fast, run smoothly, and scale seamlessly, from consumer
              platforms and on-demand solutions to secure enterprise
              applications across iOS, Android, React Native, and Flutter.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col flex-wrap gap-4 sm:flex-row">
            <a
              href="/contact"
              className="group inline-flex w-full items-center justify-center gap-3 bg-primary px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-dark sm:w-auto"
            >
              <span>Start Your Project</span>

              <ArrowRight className="-rotate-45 h-5 w-5 transition-transform duration-300 group-hover:rotate-0" />
            </a>

            <a
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-3 border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white hover:text-gray-900 sm:w-auto"
            >
              Schedule a Consultation
            </a>
          </div>

          {/* Mobile Device Image */}
          <div className="mt-12 lg:hidden">
            <img
              src="/mobile-hero-devices.webp"
              alt="Mobile apps across iOS, Android, React Native and Flutter"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppHero;