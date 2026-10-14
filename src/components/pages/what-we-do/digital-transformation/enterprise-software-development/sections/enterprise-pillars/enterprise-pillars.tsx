import {
  ShieldCheck,
  Gauge,
  HeartPulse,
  ScrollText,
} from "lucide-react";
import EnterprisePillarstImg from "../../../../../../../assets/what-we-do/enterprise-pillars-bg.jpg"


const enterprisePillars = [
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    description:
      "Threat modeling, encryption, and access control engineered in from day one, mapped to the standards your auditors and regulators require.",
    tags: ["SOC 2", "ISO 27001", "GDPR", "HIPAA"],
  },
  {
    icon: Gauge,
    title: "Scale & Performance",
    description:
      "Architectures that hold up under millions of users and heavy throughput, load-tested, horizontally scalable, and cost-aware.",
    tags: ["Horizontal scale", "Load-tested", "Caching"],
  },
  {
    icon: HeartPulse,
    title: "Reliability & Resilience",
    description:
      "High availability, disaster recovery, and graceful failure handling that keep mission-critical systems running through anything.",
    tags: ["99.99% SLA", "HA / DR", "Failover"],
  },
  {
    icon: ScrollText,
    title: "Governance & Longevity",
    description:
      "Clean architecture, documentation, and test coverage that keep the platform maintainable, and yours, long after launch.",
    tags: ["Clean architecture", "Docs", "Test coverage"],
  },
];

const EnterprisePillars= ()=> {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0c10] py-16 sm:py-20 md:py-24 lg:py-36">
      {/* Background Image */}
      <img
        src={EnterprisePillarstImg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
      />

      {/* Dark Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[#0a0c10]/40" />

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[5%] top-[-10%] h-[460px] w-[560px] rounded-full bg-primary/15 blur-[170px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Heading */}
        <div className="mb-10 max-w-3xl sm:mb-14">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Enterprise-Grade by Default
            </span>
          </div>

          <h2 className="mb-8 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-6xl lg:text-7xl">
            The Hard Parts,{" "}
            <span className="text-gray-600">Handled</span>.
          </h2>

          <div className="flex gap-4">
            <div className="w-[3px] flex-shrink-0 bg-primary" />

            <p className="text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg">
              Security, scale, reliability, and maintainability
              aren't features we add at the end. They're the
              foundation everything else is built on.
            </p>
          </div>
        </div>

        {/* Enterprise Pillars Grid */}
        <div className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 lg:grid-cols-2">
          {enterprisePillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <div
                key={pillar.title}
                className="group relative bg-[#0a0c10] p-8 transition-colors duration-300 hover:bg-white/[0.02] lg:p-10"
              >
                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center bg-primary/15 transition-colors duration-300 group-hover:bg-primary/25">
                    <Icon
                      className="h-6 w-6 text-primary"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <h3 className="mb-3 text-xl font-semibold text-white lg:text-2xl">
                      {pillar.title}
                    </h3>

                    <p className="mb-5 text-sm leading-relaxed text-gray-400 lg:text-base">
                      {pillar.description}
                    </p>

                    {/* Feature Tags */}
                    <div className="flex flex-wrap gap-2">
                      {pillar.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center border border-primary/20 bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default EnterprisePillars;