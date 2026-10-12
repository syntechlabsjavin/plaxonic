import { ArrowRight, ArrowUpRight } from "lucide-react";

const HealthcareHero = () => {
  return (
    <section className="relative overflow-hidden bg-white text-gray-900">
      {/* Background image + gradient overlay */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src="https://res.cloudinary.com/dfsu0xeb/image/upload/plaxonic/industries/healthcare-life-sciences/Healthcare_Life.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white from-20% via-white/80 via-45% to-transparent to-65%" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[86vh] max-w-[1800px] flex-col justify-center px-6 sm:px-10 lg:px-16 pt-40 pb-24">
        <div className="mb-6 flex items-center gap-3">
          <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
            Who We Serve / Healthcare &amp; Life Sciences
          </span>
        </div>

        <h1 className="max-w-4xl font-inter font-bold tracking-tight text-gray-900 text-[2.7rem] leading-[1.02] sm:text-6xl lg:text-[4.6rem] lg:leading-[0.98]">
          We Build The Platforms Hospitals And Labs{" "}
          <span className="text-primary">Run On</span>.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-600">
          We build the software, data, and AI behind hospitals, payers, pharma,
          and medical device teams. Every health platform is built for the
          moment a decision cannot wait.
        </p>

        <div className="mt-11 flex flex-col sm:flex-row items-start gap-4">
          <a
            href="/contact"
            className="group inline-flex items-center gap-3 bg-primary text-white font-semibold px-8 h-14 hover:bg-primary-dark transition-colors duration-300"
          >
            Talk To Our Team
            <ArrowUpRight
              className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300"
              aria-hidden="true"
            />
          </a>

          <a
            href="/contact"
            className="group inline-flex items-center gap-3 border border-gray-300 text-gray-900 font-semibold px-8 h-14 hover:border-primary hover:text-primary transition-colors duration-300"
          >
            Book A Consultation
            <ArrowRight
              className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HealthcareHero;