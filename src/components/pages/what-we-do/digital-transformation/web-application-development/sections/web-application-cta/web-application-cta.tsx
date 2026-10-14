import { ArrowUpRight } from "lucide-react";
import CtaVideo from "../../../../../../../assets/cta.mp4";


const WebApplicationCTA = () => {
  return (
    <section className="bg-white pt-10 pb-16 sm:pb-20 lg:pt-16 lg:pb-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="relative overflow-hidden bg-gray-900 px-6 py-14 text-center sm:px-12 sm:py-16 lg:px-20 lg:py-24">
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={CtaVideo} type="video/mp4" />
          </video>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gray-900/70" />

          {/* Background Glow Effects */}
          <div
            className="pointer-events-none absolute -top-24 -right-24 h-[480px] w-[480px] rounded-full blur-[140px]"
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
            <h2 className="font-inter text-3xl leading-[1.1] font-bold sm:text-4xl lg:text-5xl">
              <span className="text-white">
                Ready to build your next{" "}
              </span>
              <span className="text-primary">
                web application?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg md:text-xl">
              Partner with Plaxonic to build fast, secure, and scalable web
              software, from custom applications to AI-native platforms, that
              delivers real business results.
            </p>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
              <a
                href="/contact"
                className="group inline-flex h-14 items-center gap-3 bg-primary px-10 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Start a Project

                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebApplicationCTA;