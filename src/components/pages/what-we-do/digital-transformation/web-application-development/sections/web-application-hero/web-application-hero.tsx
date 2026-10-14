import { ArrowRight } from "lucide-react";
import WebAppHero from "../../../../../../../assets/web-application-development/web-app-hero-buddy.webp";


const WebApplicationHero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-32">
      <div
        className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 text-center"
        style={{ opacity: 1, transform: "none" }}
      >
        <div
          className="flex items-center justify-center gap-3 mb-6"
          style={{ opacity: 1, transform: "none" }}
        >
          <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
            Digital Transformation / Engineering
          </span>
        </div>

        <h1
          className="font-inter text-[2rem] xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
          style={{ opacity: 1, transform: "none" }}
        >
          <span className="text-gray-900">
            Web Application Development{" "}
          </span>
          <span className="text-primary">Services</span>
        </h1>

        <p
          className="text-gray-900 text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-snug max-w-3xl mx-auto mb-6"
          style={{ opacity: 1, transform: "none" }}
        >
          Partner with us for Custom Web Application Development Services.
        </p>

        <p
          className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
          style={{ opacity: 1, transform: "none" }}
        >
          Plaxonic offers comprehensive web development services. Our engineers
          delve deep into your business structure and challenges to deliver a
          structured solution. From custom applications and SaaS platforms to
          e-commerce and{" "}
          <span className="whitespace-nowrap">AI-powered</span> experiences, we
          design and build solutions for your business. At every stage of
          development, our expert team delivers real-world solutions that drive
          success.
        </p>

        <div
          className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-4"
          style={{ opacity: 1, transform: "none" }}
        >
          <button
            type="button"
            className="inline-flex items-center justify-center gap-3 bg-primary text-white font-semibold text-base px-8 py-3.5 hover:bg-primary-dark transition-colors group w-full sm:w-auto"
          >
            <span>Start Your Project</span>

            <ArrowRight
              className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300"
              aria-hidden="true"
            />
          </button>

          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-3 border-2 border-gray-900 text-gray-900 font-semibold text-base px-8 py-3.5 hover:bg-gray-900 hover:text-white transition-colors w-full sm:w-auto"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>

      <div
        className="relative z-20 mt-6 lg:mt-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 xl:px-16 will-change-transform"
        style={{ transform: "scale(0.94)" }}
      >
        <div className="pointer-events-none absolute inset-x-16 bottom-6 h-32 rounded-[50%] bg-primary/15 blur-[70px]" />

        <div className="relative">
          <img
            src={WebAppHero}
            alt="Super Buddy AI social media management dashboard shown across desktop and mobile"
            className="relative block w-full h-auto object-contain"
          />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white via-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default WebApplicationHero;