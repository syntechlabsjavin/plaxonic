import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Activity,
} from "lucide-react";
import PlaceHolderX from "../../../../../../../assets/what-we-do/placeholder-x.svg";

const ManagedSecurity = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#070809] py-16 sm:py-20 md:py-24 lg:py-36">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/4 top-[-15%] h-[500px] w-[600px] rounded-full bg-primary/15 blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-light">
                Managed Security
              </span>
            </div>

            <h2 className="mb-6 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Eyes On Your Stack,{" "}
              <span className="text-primary">Around The Clock</span>.
            </h2>

            <p className="mb-8 max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg">
              Run security as an outcome, not an overhead. Our managed
              services give you enterprise-grade monitoring, response, and
              expertise as an extension of your team, with prioritized signal
              instead of endless alerts.
            </p>

            <a
              href="/contact"
              className="group inline-flex w-full items-center justify-center gap-3 bg-primary px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-dark sm:w-auto"
            >
              <span>Explore Managed Security</span>

              <ArrowRight className="h-5 w-5 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
            </a>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="relative overflow-hidden shadow-2xl ring-1 ring-white/10">
              <img
                src={PlaceHolderX}
                alt="Security operations monitoring"
                className="block aspect-[4/3] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#070809]/70 via-transparent to-transparent" />
            </div>

            {/* Threats Blocked Card */}
            <div className="absolute -left-4 -top-5 flex items-center gap-3 border border-white/15 bg-white/[0.07] px-4 py-3 backdrop-blur-md sm:-left-6">
              <ShieldCheck
                className="h-5 w-5 text-primary-light"
                aria-hidden="true"
              />

              <div>
                <div className="text-lg font-bold leading-none text-white">
                  12,480
                </div>
                <div className="mt-0.5 text-[11px] text-gray-400">
                  Threats blocked / mo
                </div>
              </div>
            </div>

            {/* Response Time Card */}
            <div className="absolute -right-4 top-1/2 flex -translate-y-1/2 items-center gap-3 border border-white/15 bg-white/[0.07] px-4 py-3 backdrop-blur-md sm:-right-6">
              <Clock
                className="h-5 w-5 text-primary-light"
                aria-hidden="true"
              />

              <div>
                <div className="text-lg font-bold leading-none text-white">
                  {"< 15 min"}
                </div>
                <div className="mt-0.5 text-[11px] text-gray-400">
                  Mean time to respond
                </div>
              </div>
            </div>

            {/* System Status Card */}
            <div className="absolute -bottom-5 left-8 flex items-center gap-3 border border-white/15 bg-white/[0.07] px-4 py-3 backdrop-blur-md">
              <Activity
                className="h-5 w-5 text-emerald-400"
                aria-hidden="true"
              />

              <div>
                <div className="text-lg font-bold leading-none text-white">
                  All systems normal
                </div>
                <div className="mt-0.5 text-[11px] text-gray-400">
                  24/7 live monitoring
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagedSecurity;