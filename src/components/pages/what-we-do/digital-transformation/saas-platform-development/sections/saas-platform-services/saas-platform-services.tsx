
import {
  Activity,
  Cloud,
  CreditCard,
  Database,
  Lock,
  Network,
  Plug,
  Sparkles,
  Terminal,
} from "lucide-react";

const PLATFORM_SERVICES = [
  {
    title: "Multi-Tenant SaaS Architecture",
    description:
      "Tenant isolation models, pool, silo, or bridge, with row-level security, per-tenant data residency, and noisy-neighbor protection engineered in from day one.",
    Icon: Network,
    featured: true,
  },
  {
    title: "Subscription, Billing & Metering",
    description:
      "Usage-based and seat-based pricing, dunning, proration, and revenue recognition wired to Stripe, Chargebee, or your billing engine.",
    Icon: CreditCard,
  },
  {
    title: "Internal Developer Platforms",
    description:
      "Golden paths, self-service environments, and paved roads via Backstage that cut time-to-first-deploy from weeks to minutes.",
    Icon: Terminal,
  },
  {
    title: "Cloud-Native Infrastructure",
    description:
      "Kubernetes, service meshes, and immutable, GitOps-driven infrastructure across AWS, Azure, and GCP.",
    Icon: Cloud,
  },
  {
    title: "Observability & SRE",
    description:
      "SLOs, error budgets, distributed tracing, and on-call runbooks that keep platforms reliable at scale.",
    Icon: Activity,
  },
  {
    title: "Platform Security & Compliance",
    description:
      "Zero-trust IAM, per-tenant RBAC, secrets management, and audit trails that make SOC 2, GDPR, and HIPAA evidence continuous.",
    Icon: Lock,
  },
  {
    title: "Data Platform & Analytics",
    description:
      "Tenant-aware pipelines, warehousing, and embedded analytics that turn product usage into dashboards your customers act on.",
    Icon: Database,
  },
  {
    title: "API & Integration Platforms",
    description:
      "Versioned public APIs, webhooks, and an integration marketplace that turns your product into an ecosystem.",
    Icon: Plug,
  },
  {
    title: "AI-Native SaaS",
    description:
      "In-product copilots, RAG pipelines, and model integration wired into your tenancy and data layers, with usage-aware cost controls so AI features scale without runaway spend.",
    Icon: Sparkles,
  },
];

const SaaSPlatformServices = () => {
  return (
    <section className="bg-gray-100 py-16 sm:py-20 lg:py-32">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        {/* Section heading */}
        <div className="mb-10 sm:mb-14 lg:mb-16">
          <div className="flex flex-col gap-8 lg:gap-16">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                  What We Engineer
                </span>
              </div>

              <h2 className="mb-8 font-inter text-3xl leading-[1.1] font-bold tracking-tight text-gray-900 sm:text-4xl md:text-6xl lg:text-7xl">
                The Full SaaS{" "}
                <span className="text-gray-300">Platform</span>.
              </h2>

              <div className="flex max-w-2xl gap-4">
                <div className="w-[3px] shrink-0 bg-primary" />

                <p className="text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
                  Engineering disciplines that turn an idea into a
                  multi-tenant product, and the internal platform your
                  teams use to ship it safely, repeatedly, and fast.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Service cards */}
        <div className="grid auto-rows-[minmax(220px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PLATFORM_SERVICES.map(
            ({ title, description, Icon, featured }) => (
              <article
                key={title}
                className={`group relative cursor-pointer overflow-hidden transition-all duration-300 ${
                  featured
                    ? "bg-gray-900 sm:col-span-2 sm:row-span-2"
                    : "border border-gray-200 bg-white hover:border-primary/40"
                }`}
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-primary/30 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Featured card image */}
                {featured && (
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-full sm:w-1/2">
                    <img
                      src="/src/assets/saas-platform-development/multi-tenant.jpg"
                      alt="Abstract multi-tenant architecture visual"
                      className="absolute inset-0 h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent sm:via-gray-900/30" />
                  </div>
                )}

                {/* Card content */}
                <div
                  className={`relative z-10 flex h-full flex-col justify-between p-7 lg:p-8 ${
                    featured ? "sm:w-1/2" : ""
                  }`}
                >
                  <div>
                    <div
                      className={`mb-6 flex h-12 w-12 items-center justify-center transition-colors ${
                        featured
                          ? "bg-primary/20 group-hover:bg-primary/30"
                          : "bg-primary/10 group-hover:bg-primary/20"
                      }`}
                    >
                      <Icon
                        size={24}
                        strokeWidth={2}
                        className="text-primary"
                      />
                    </div>

                    <h3
                      className={`mb-3 font-inter font-semibold transition-colors duration-300 ${
                        featured
                          ? "text-2xl text-white group-hover:text-primary-light lg:text-3xl"
                          : "text-lg text-gray-900 group-hover:text-primary"
                      }`}
                    >
                      {title}
                    </h3>

                    <p
                      className={`leading-relaxed ${
                        featured
                          ? "max-w-md text-base text-gray-400 lg:text-lg"
                          : "text-sm text-gray-600"
                      }`}
                    >
                      {description}
                    </p>
                  </div>
                </div>

                {/* Bottom hover accent */}
                <div className="absolute right-0 bottom-0 left-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default SaaSPlatformServices;
