import {
  LayoutTemplate,
  BrainCircuit,
  Wrench,
  Database,
  ShieldCheck,
} from "lucide-react";

const AGENT_LAYERS = [
  {
    icon: LayoutTemplate,
    title: "Interface",
    description:
      "Where your team meets the agent: a panel in your app, a chat, or no UI at all.",
    width: "92%",
  },
  {
    icon: BrainCircuit,
    title: "Agent Core",
    description:
      "The reasoning that plans, decides, and drives the work toward the goal.",
    width: "82%",
  },
  {
    icon: Wrench,
    title: "Tools & Actions",
    description:
      "The hands: search, code, APIs, and the apps the agent operates.",
    width: "72%",
  },
  {
    icon: Database,
    title: "Your Data",
    description:
      "Grounding in your knowledge, records, and context, kept private.",
    width: "62%",
  },
  {
    icon: ShieldCheck,
    title: "Guardrails",
    description:
      "Permissions, approvals, and limits that keep it safe and on task.",
    width: "52%",
  },
];

const AgentLayers=()=> {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Under The Hood
              </span>
            </div>

            <h2 className="mb-6 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
              What's Inside An Agent{" "}
              <span className="text-gray-300">App</span>.
            </h2>

            <p className="text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
              An agent application is more than a model. It is a full product:
              an interface your team trusts, a reasoning core, the tools to act,
              your data to ground it, and the guardrails to keep it safe. We
              build and assemble every layer.
            </p>
          </div>

          {/* Right layered cards */}
          <div className="flex flex-col items-center gap-3">
            {AGENT_LAYERS.map((layer) => {
              const Icon = layer.icon;

              return (
                <div
                  key={layer.title}
                  style={{ width: layer.width }}
                  className="group flex w-full min-w-0 max-w-full items-center gap-4 border border-gray-200 bg-white p-4 shadow-[0_6px_16px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-primary/40 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] max-sm:!w-full sm:min-w-[260px]"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>

                  <div className="min-w-0">
                    <h3 className="mb-1 font-inter text-base font-bold text-gray-900">
                      {layer.title}
                    </h3>

                    <p className="text-xs leading-relaxed text-gray-600">
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
}

export default AgentLayers;