
import {
  Webhook,
  ShieldCheck,
  Zap,
  ArrowRight,
} from "lucide-react";
import ApiVideo from "../../../../../../../assets/what-we-do/api.mp4";
const highlights = [
  {
    icon: Webhook,
    label: "Real-time, event-driven",
  },
  {
    icon: ShieldCheck,
    label: "Secure by default",
  },
  {
    icon: Zap,
    label: "Built for scale",
  },
];

const services = [
  {
    name: "Inventory Service",
    latency: "18ms",
    status: "200",
  },
  {
    name: "Payments Service",
    latency: "42ms",
    status: "201",
  },
  {
    name: "CRM Sync",
    latency: "27ms",
    status: "200",
  },
  {
    name: "ERP Ledger",
    latency: "33ms",
    status: "200",
  },
];

const metrics = [
  {
    value: "12ms",
    label: "p99 latency",
  },
  {
    value: "500M",
    label: "calls / mo",
  },
  {
    value: "99.99%",
    label: "uptime",
  },
];

const APIMiddlewareHero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0c10] pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-28">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={ApiVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[#0a0c10]/60" />
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute -top-24 left-[-8%] w-[620px] h-[520px] rounded-full bg-primary/15 blur-[170px]" />

        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px), linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px)",
            backgroundSize: "58px 58px",
            maskImage:
              "radial-gradient(75% 70% at 25% 35%, black 25%, transparent 80%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 sm:gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="lg:w-[52%]">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
                Digital Transformation / Enterprise Solutions
              </span>
            </div>

            <h1 className="font-inter text-[2rem] xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
              <span className="text-white">API &amp; Middleware</span>
              <br />
              <span className="text-primary">Integration</span>
            </h1>

            <div className="flex gap-4 max-w-2xl mb-10">
              <div className="w-[3px] bg-primary flex-shrink-0" />

              <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed">
                Your systems shouldn't talk through spreadsheets and nightly
                CSV exports. We design APIs and middleware that connect your
                apps, data, and partners in real time: contract-first, secure
                by default, and built to handle scale without breaking.
              </p>
            </div>

            {/* Highlight Badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.03] text-gray-300 text-sm font-medium px-4 py-2"
                  >
                    <Icon className="w-4 h-4 text-primary" />
                    {item.label}
                  </span>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-primary text-white font-semibold text-base px-8 py-3.5 hover:bg-primary-dark transition-colors group w-full sm:w-auto"
              >
                <span>Connect Your Systems</span>

                <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 border-2 border-white/30 text-white font-semibold text-base px-8 py-3.5 hover:bg-white hover:text-gray-900 transition-colors w-full sm:w-auto"
              >
                Get an Integration Audit
              </a>
            </div>
          </div>

          {/* Right API Dashboard */}
          <div className="lg:w-[46%] flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl">
              <div className="absolute top-1/4 left-1/4 w-[420px] h-[420px] rounded-full bg-primary/[0.18] blur-[80px]" />

              <div className="relative bg-[#0e1117] border border-white/10 p-6 lg:p-7 shadow-2xl overflow-hidden">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                    <span className="w-2.5 h-2.5 rounded-full bg-primary/60" />
                  </div>

                  <span className="text-[10px] font-mono text-gray-500">
                    api-gateway · prod
                  </span>
                </div>

                {/* API Request */}
                <div className="font-mono text-xs mb-4 border border-white/10 bg-black/30 px-3.5 py-3">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-primary font-semibold">
                      POST
                    </span>

                    <span className="text-gray-300">/v2/orders</span>

                    <span className="ml-auto inline-flex items-center gap-1 text-green-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      201
                    </span>
                  </div>

                  <div className="text-gray-600">
                    routing through middleware…
                  </div>
                </div>

                {/* Connected Services */}
                <div className="space-y-2.5 mb-5">
                  {services.map((service) => (
                    <div
                      key={service.name}
                      className="flex items-center gap-3 border border-white/10 bg-white/[0.02] px-3.5 py-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-light flex-shrink-0" />

                      <span className="text-gray-300 text-xs flex-1 truncate">
                        {service.name}
                      </span>

                      <span className="text-[10px] font-mono text-gray-500">
                        {service.latency}
                      </span>

                      <span className="text-[10px] font-mono text-green-400 w-7 text-right">
                        {service.status}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-3 gap-px bg-white/10 border border-white/10">
                  {metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="bg-[#0e1117] px-3 py-3"
                    >
                      <div className="text-primary text-base lg:text-lg font-bold leading-none font-inter mb-1">
                        {metric.value}
                      </div>

                      <div className="text-gray-500 text-[10px] leading-tight">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Dashboard Glow */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default APIMiddlewareHero;
