
import { ArrowRight, ArrowUpRight } from "lucide-react";

const EducationEdTechHero = () => {
  return (
    <section className="relative overflow-hidden bg-white text-gray-900">
      {/* Background Image */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src="https://res.cloudinary.com/dfsu0xeb/image/upload/plaxonic/industries/education-edtech/Education.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white from-20% via-white/80 via-45% to-transparent to-65%" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[86vh] max-w-[1800px] flex-col justify-center px-6 pt-40 pb-24 sm:px-10 lg:px-16">
        <div className="mb-6 flex items-center gap-3">
          <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
            Who We Serve / Education &amp; EdTech
          </span>
        </div>

        <h1 className="max-w-4xl font-inter text-[2.7rem] leading-[1.02] font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-[4.6rem] lg:leading-[0.98]">
          Learning Platforms &amp;{" "}
          <span className="text-primary">Education Systems</span>.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-600">
          Every click, quiz, and dropout is a signal about where a learner is
          thriving or falling behind, and most of it disappears between the
          LMS, the gradebook, and the student portal. We build the platforms
          that turn that engagement into support you can act on while the
          student is still in the course, not after they have gone quiet.
        </p>

        {/* CTA Buttons */}
        <div className="mt-11 flex flex-col items-start gap-4 sm:flex-row">
          <a
            href="/contact"
            className="group inline-flex h-14 items-center gap-3 bg-primary px-8 font-semibold text-white transition-colors duration-300 hover:bg-primary-dark"
          >
            Talk To An Engineer
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
          </a>

          <a
            href="/contact"
            className="group inline-flex h-14 items-center gap-3 border border-gray-300 px-8 font-semibold text-gray-900 transition-colors duration-300 hover:border-primary hover:text-primary"
          >
            Book A Consultation
            <ArrowRight className="-rotate-45 h-4 w-4 transition-transform duration-300 group-hover:rotate-0" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default EducationEdTechHero;
