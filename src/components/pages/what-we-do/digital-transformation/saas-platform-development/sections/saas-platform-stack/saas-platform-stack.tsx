
const PLATFORM_LAYERS = [
  {
    id: "L1",
    title: "Experience & Edge",
    subtitle: "Global delivery, sub-50ms",
    technologies: [
      "Next.js",
      "Cloudflare",
      "Vercel",
      "WAF",
      "Edge CDN",
    ],
  },
  {
    id: "L2",
    title: "Application Runtime",
    subtitle: "Stateless, autoscaling services",
    technologies: [
      "Node.js",
      "Go",
      "Python",
      "gRPC",
      "GraphQL",
      "Temporal",
    ],
  },
  {
    id: "L3",
    title: "Data & Streaming",
    subtitle: "Tenant-aware persistence",
    technologies: [
      "PostgreSQL",
      "Redis",
      "Kafka",
      "ClickHouse",
      "Elasticsearch",
    ],
  },
  {
    id: "L4",
    title: "Platform & Infrastructure",
    subtitle: "GitOps-driven, immutable",
    technologies: [
      "Kubernetes",
      "Docker",
      "Terraform",
      "Argo CD",
      "Istio",
    ],
  },
  {
    id: "L5",
    title: "Observability & Reliability",
    subtitle: "SLOs, traces, error budgets",
    technologies: [
      "Prometheus",
      "Grafana",
      "OpenTelemetry",
      "Datadog",
      "Loki",
    ],
  },
];

const SaaSPlatformStack = () => {
  return (
    <section
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-32"
      style={{
        background:
          "radial-gradient(120% 120% at 75% 40%, rgb(17, 42, 64) 0%, rgb(12, 26, 43) 45%, rgb(10, 19, 32) 100%)",
      }}
    >
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div
          className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full blur-[150px]"
          style={{
            background: "rgb(27, 163, 221)",
            opacity: 0.16,
          }}
        />

        <div
          className="absolute -right-32 -bottom-32 h-[500px] w-[500px] rounded-full blur-[150px]"
          style={{
            background: "rgb(27, 163, 221)",
            opacity: 0.14,
          }}
        />
      </div>

      <div className="relative z-[2] mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 items-start gap-8 sm:gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
          {/* Left content */}
          <div className="lg:sticky lg:top-32">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                The Platform Stack
              </span>
            </div>

            <h2 className="mb-6 font-inter text-3xl leading-[1.1] font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Engineered As{" "}
              <span className="text-primary">Layers</span>, Not Silos.
            </h2>

            <p className="max-w-md text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg">
              Every platform we build is composed of clean,
              independently scalable layers, so a change in delivery
              never destabilizes data, and infrastructure evolves
              without rewriting the product.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 border border-white/10 bg-white/[0.03] px-5 py-3">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />

              <span className="font-mono text-sm text-gray-300">
                5 layers · 1 paved road
              </span>
            </div>
          </div>

          {/* Right technology layers */}
          <div className="space-y-3">
            {PLATFORM_LAYERS.map((layer, index) => (
              <article
                key={layer.id}
                className="group relative border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-primary/40 lg:p-7"
                style={{
                  marginLeft: `${index * 1.25}rem`,
                }}
              >
                {/* Layer heading */}
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="font-inter text-2xl font-bold text-white/15 tabular-nums transition-colors group-hover:text-primary/40">
                      {layer.id}
                    </span>

                    <div>
                      <h3 className="text-lg leading-tight font-semibold text-white">
                        {layer.title}
                      </h3>

                      <p className="mt-1 text-xs text-gray-500">
                        {layer.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technology tags */}
                <div className="flex flex-wrap gap-2 pl-0 sm:pl-10">
                  {layer.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-gray-300 transition-colors duration-300 group-hover:border-primary/30 group-hover:text-white"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Left hover indicator */}
                <div className="absolute top-0 bottom-0 left-0 w-[3px] origin-top scale-y-0 bg-primary transition-transform duration-500 group-hover:scale-y-100" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaaSPlatformStack;
