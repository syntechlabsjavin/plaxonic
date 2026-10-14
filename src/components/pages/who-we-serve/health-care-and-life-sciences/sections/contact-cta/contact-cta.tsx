import { ArrowRight, ArrowUpRight } from "lucide-react";

const ContactCta = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0a0c10] py-24 lg:py-36 text-white"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -top-24 right-[-5%] h-[460px] w-[560px] rounded-full bg-primary/20 blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
        <h2 className="font-inter text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
          Build A Healthcare System That{" "}
          <span className="text-primary">Earns Trust</span>.
        </h2>

        <p className="max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed mb-10">
          Tell us what is slowing your teams down. We will review the
          architecture, compliance position, and integration requirements, then
          bring back a plan you can act on.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
            className="group inline-flex items-center gap-3 border border-white/25 text-white font-semibold px-8 h-14 hover:border-primary-light hover:text-primary transition-colors duration-300"
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

export default ContactCta;