
import {
  FileCheck2,
  ShieldCheck,
  Radio,
  Activity,
} from "lucide-react";
import Api1 from "../../../../../../../assets/what-we-do/api1.png"

const benefits = [
  {
    icon: FileCheck2,
    title: "Contract-First By Design",
    description:
      "APIs designed before they're built, so teams integrate against a stable, documented spec.",
  },
  {
    icon: ShieldCheck,
    title: "Zero-Trust Security",
    description:
      "OAuth2, scoped tokens, and gateway policy protect every endpoint from the first request.",
  },
  {
    icon: Radio,
    title: "Event-Driven & Real-Time",
    description:
      "Streaming and pub/sub move data the instant it changes, with no nightly batch lag.",
  },
  {
    icon: Activity,
    title: "Observability Built-In",
    description:
      "Tracing, metrics, and alerting ship with every integration, not bolted on later.",
  },
];

const WhyPlaxonic = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black py-16 sm:py-20 md:py-24 lg:py-36">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={Api1}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Blue Glow Effects */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div
          className="absolute -top-32 left-1/4 h-[440px] w-[560px] rounded-full blur-[150px]"
          style={{
            background: "#1ba3dd",
            opacity: 0.18,
          }}
        />

        <div
          className="absolute -bottom-32 -right-24 h-[480px] w-[480px] rounded-full blur-[150px]"
          style={{
            background: "#1ba3dd",
            opacity: 0.12,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-[2] mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Heading */}
        <div className="mb-10 max-w-3xl sm:mb-14">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Why Plaxonic
            </span>
          </div>

          <h2 className="font-inter text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Connected Systems,{" "}
            <span className="text-primary">
              Engineered To Last
            </span>
            .
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div key={benefit.title} className="group">
                {/* Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="mb-2 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-primary">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-400">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyPlaxonic;
