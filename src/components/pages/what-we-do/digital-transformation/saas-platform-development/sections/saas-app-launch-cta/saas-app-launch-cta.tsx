
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SaaSAppLaunchCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white pt-10 pb-16 sm:pb-20 lg:pt-16 lg:pb-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="relative overflow-hidden bg-gray-900 px-6 py-14 text-center sm:px-12 sm:py-16 lg:px-20 lg:py-24">
          {/* Background video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/cta.mp4" type="video/mp4" />
          </video>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gray-900/70" />

          {/* Background glow effects */}
          <div
            className="pointer-events-none absolute -top-24 -right-24 h-[480px] w-[480px] rounded-full blur-[140px]"
            style={{ background: "#1ba3dd", opacity: 0.3 }}
          />

          <div
            className="pointer-events-none absolute -bottom-32 -left-24 h-[420px] w-[420px] rounded-full blur-[140px]"
            style={{ background: "#1ba3dd", opacity: 0.18 }}
          />

          {/* Content */}
          <div className="relative z-10">
            <h2 className="font-inter text-3xl leading-[1.1] font-bold sm:text-4xl lg:text-5xl">
              <span className="text-white">
                Ready to engineer a platform{" "}
              </span>
              <span className="text-primary">that scales with you?</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl">
              Start with a platform review. We'll map your tenancy model, reliability targets, and the fastest path to a paved road your teams will actually use.
            </p>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="group inline-flex h-14 items-center gap-3 bg-primary px-10 text-base font-semibold text-white transition-colors duration-300 hover:bg-primary-dark"
              >
                <span>Build Your Platform</span>

                <ArrowUpRight
                  size={20}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaaSAppLaunchCTA;
