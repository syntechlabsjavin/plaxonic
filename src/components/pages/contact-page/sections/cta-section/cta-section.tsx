import { ArrowUpRight } from "lucide-react";

interface CtaSectionProps {
  onRequestProposal?: () => void;
}

const CtaSection = ({ onRequestProposal }: CtaSectionProps) => {
  return (
    <section className="bg-white pt-10 lg:pt-16 pb-16 sm:pb-20 lg:pb-32">
      <div className="max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="relative overflow-hidden bg-gray-900 px-6 py-14 sm:px-12 sm:py-16 lg:px-20 lg:py-24 text-center">
          {/* Background video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="https://plaxonic.com/cta.mp4" type="video/mp4" />
          </video>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gray-900/70" />

          {/* Blue glow blobs */}
          <div
            className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full blur-[140px] pointer-events-none"
            style={{ background: "rgb(27, 163, 221)", opacity: 0.3 }}
          />
          <div
            className="absolute -bottom-32 -left-24 w-[420px] h-[420px] rounded-full blur-[140px] pointer-events-none"
            style={{ background: "rgb(27, 163, 221)", opacity: 0.18 }}
          />

          {/* Content */}
          <div className="relative z-10">
            <h2 className="font-inter text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1]">
              <span className="text-white">
                Are you ready to start building your
              </span>{" "}
              <span className="text-primary">modern digital business?</span>
            </h2>

            <p className="text-gray-400 text-base sm:text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
              Tell us where you want to go, and we will show you the fastest
              path to get there.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-5 mt-12">
              <button
                type="button"
                onClick={onRequestProposal}
                className="group inline-flex items-center gap-3 h-14 px-10 bg-primary text-white font-semibold hover:bg-primary-dark transition-colors text-base"
              >
                Request a proposal
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
