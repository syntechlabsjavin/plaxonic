import {
  Network,
  Server,
  AppWindow,
  Database,
  UserCog,
} from "lucide-react";

const defenseLayers = [
  {
    level: "L1",
    title: "Network",
    description:
      "Segmentation and monitoring that contain threats and limit lateral movement.",
    icon: Network,
    width: "100%",
  },
  {
    level: "L2",
    title: "Infrastructure",
    description:
      "Hardened cloud and endpoints with continuous posture management and guardrails.",
    icon: Server,
    width: "88%",
  },
  {
    level: "L3",
    title: "Applications",
    description:
      "Secure SDLC, code review, and testing that keep vulnerabilities out of production.",
    icon: AppWindow,
    width: "76%",
  },
  {
    level: "L4",
    title: "Data",
    description:
      "Classification, encryption, and key management protecting your most sensitive assets.",
    icon: Database,
    width: "64%",
  },
  {
    level: "L5",
    title: "People & Identity",
    description:
      "Zero-trust access, MFA, and awareness training at the core of every defense.",
    icon: UserCog,
    width: "52%",
  },
];

const DefenseInDepth = () => {
  return (
    <section className="overflow-hidden bg-gray-50 py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Left Content */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Defense In Depth
              </span>
            </div>

            <h2 className="mb-8 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Concentric Layers,{" "}
              <span className="text-gray-300">Core Protected</span>.
            </h2>

            <div className="flex gap-4">
              <div className="w-[3px] flex-shrink-0 bg-primary" />

              <p className="text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
                No single control stops every attack. We nest defenses from
                the network perimeter down to identity at the core, so when
                one layer is tested, the next still holds.
              </p>
            </div>
          </div>

          {/* Right Content - Defense Layers */}
          <div className="space-y-3">
            {defenseLayers.map((layer) => {
              const Icon = layer.icon;

              return (
                <div
                  key={layer.level}
                  className="group mx-auto flex w-full origin-center items-center gap-4 border border-gray-200 bg-white p-4 shadow-sm transition-colors duration-300 hover:border-primary/40 lg:p-5 sm:w-[var(--layer-w)]"
                  style={
                    {
                      "--layer-w": layer.width,
                    } as React.CSSProperties
                  }
                >
                  {/* Icon */}
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-primary/10">
                    <Icon
                      className="h-5 w-5 text-primary"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Layer Details */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm font-bold text-primary lg:text-base">
                        {layer.level}
                      </span>

                      <h4 className="truncate text-sm font-semibold text-gray-900 lg:text-base">
                        {layer.title}
                      </h4>
                    </div>

                    <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-gray-600 lg:text-sm">
                      {layer.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DefenseInDepth;