
import { ArrowUpRight } from "lucide-react";

interface CaseStudy {
  image: string;
  name: string;
  category: string;
  title: string;
  description: string;
  metric: string;
  metricDescription: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    image: "/src/assets/saas-platform-development/case-3.png",
    name: "LedgerWorks",
    category: "Multi-Tenant SaaS",
    title: "Re-platforming a fintech SaaS to silo-per-tenant isolation",
    description:
      "We migrated a single-database app to a hybrid tenancy model with per-tenant data residency, unlocking enterprise deals that required regional isolation.",
    metric: "4,200+",
    metricDescription:
      "enterprise tenants onboarded with zero data-isolation incidents",
  },
  {
    image: "/src/assets/saas-platform-development/case-1.png",
    name: "Northwind Labs",
    category: "Internal Developer Platform",
    title: "A Backstage-powered platform that made deploys boring",
    description:
      "Golden paths, ephemeral environments, and self-service scaffolding replaced a brittle ticket-driven workflow across 30 engineering teams.",
    metric: "18 min",
    metricDescription:
      "from first commit to production, down from 9 days",
  },
  {
    image: "/src/assets/saas-platform-development/case-2.png",
    name: "Atlas Commerce",
    category: "Cloud-Native Infrastructure",
    title: "Kubernetes + FinOps cut the cloud bill while traffic tripled",
    description:
      "Right-sizing, spot orchestration, and autoscaling guardrails kept spend flat through a 3x demand surge during peak retail season.",
    metric: "57%",
    metricDescription:
      "reduction in cloud cost per transaction at 3x scale",
  },
];

const SaaSPlatformCaseStudies = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-32">
      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section heading */}
        <div className="mb-10 sm:mb-14 lg:mb-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Proven Outcomes
                </span>
              </div>

              <h2 className="mb-8 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-6xl lg:text-7xl">
                Platforms That{" "}
                <span className="text-gray-300">Moved The Metric</span>.
              </h2>

              <div className="flex max-w-2xl gap-4">
                <div className="w-[3px] shrink-0 bg-primary" />

                <p className="text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
                  Three engagements where the right platform decisions
                  translated directly into revenue, velocity, and cost.
                </p>
              </div>
            </div>

            {/* View all link */}
            <a
              href="#"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-gray-900 transition-colors hover:text-primary"
            >
              VIEW ALL CASE STUDIES

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
            </a>
          </div>
        </div>

        {/* Case study cards */}
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {CASE_STUDIES.map((study) => (
            <article
              key={study.name}
              className="group relative flex h-full flex-col border border-gray-200 bg-white transition-colors duration-300 hover:border-primary/40"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden lg:h-64">
                <img
                  src={study.image}
                  alt={study.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/10 to-transparent" />

                <span className="absolute left-4 top-4 bg-gray-900/60 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white">
                  {study.category}
                </span>

                <div className="absolute bottom-4 left-4 text-xl font-bold text-white">
                  {study.name}
                </div>
              </div>

              {/* Card content */}
              <div className="flex flex-1 flex-col p-7 lg:p-8">
                <h3 className="mb-3 text-lg font-semibold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-primary lg:text-xl">
                  {study.title}
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-gray-600">
                  {study.description}
                </p>

                {/* Highlight metric */}
                <div className="mt-auto flex items-start gap-4 border-t border-gray-100 pt-5">
                  <div className="h-14 w-1 shrink-0 rounded-full bg-primary" />

                  <div>
                    <div className="font-inter text-3xl font-bold leading-none text-primary">
                      {study.metric}
                    </div>

                    <div className="mt-2 text-xs leading-snug text-gray-500">
                      {study.metricDescription}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom hover line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaaSPlatformCaseStudies;
