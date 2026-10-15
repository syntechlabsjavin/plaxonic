import {
  Brain,
  Wrench,
  Eye,
  CircleCheck,
} from "lucide-react";
import AgentCubes from "../../../../../../../assets/what-we-do/artificial-intelligence/agents-cubes.webp";

const AGENT_STEPS = [
  {
    type: "Thought",
    message:
      "The user wants a refund status. I need the order and the policy.",
    icon: Brain,
    iconClass: "text-gray-500",
    highlight: false,
  },
  {
    type: "Action",
    message: "call: orders.lookup(id=4471)",
    icon: Wrench,
    iconClass: "text-[#9d7bff]",
    highlight: false,
  },
  {
    type: "Observation",
    message: "status = shipped, eligible = true, window = 5 days",
    icon: Eye,
    iconClass: "text-gray-500",
    highlight: false,
  },
  {
    type: "Action",
    message: "call: policy.search('refund window')",
    icon: Wrench,
    iconClass: "text-[#9d7bff]",
    highlight: false,
  },
  {
    type: "Observation",
    message:
      "policy.pdf §4.2 confirms a 5 business-day refund window",
    icon: Eye,
    iconClass: "text-gray-500",
    highlight: false,
  },
  {
    type: "Answer",
    message:
      "Your refund is approved and will arrive within 5 business days.",
    icon: CircleCheck,
    iconClass: "text-primary",
    highlight: true,
  },
];

const AgentsSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#070809] py-16 sm:py-20 md:py-24 lg:py-32">
      {/* Background image */}
      <img
        src={AgentCubes}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
      />

      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#070809]/90 via-[#070809]/35 to-transparent" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-[-5%] top-[-15%] h-[460px] w-[560px] rounded-full bg-primary/12 blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-[0.85fr_1.4fr] lg:gap-16">
          {/* Section heading */}
          <div className="self-start lg:sticky lg:top-28">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Beyond Chat
              </span>
            </div>

            <h2 className="mb-6 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
              Agents That{" "}
              <span className="text-primary">Take Action</span>.
            </h2>

            <p className="text-base leading-relaxed text-gray-400 sm:text-[17px] md:text-lg">
              The real leap is generation that does things: reasons over
              a goal, calls your tools and data, and completes the task.
              We build agents with the tools, memory, and guardrails to
              act safely inside your systems.
            </p>
          </div>

          {/* Agent execution trace */}
          <div className="border border-white/10 bg-[#0e1117]">
            {/* Trace header */}
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 font-mono text-[11px] text-gray-500 sm:px-5">
              <span className="h-1.5 w-1.5 flex-shrink-0 animate-pulse bg-primary" />

              <span className="min-w-0">
                agent trace · goal: resolve refund request
              </span>
            </div>

            {/* Trace steps */}
            <div className="space-y-2.5 p-4 sm:p-5 lg:p-6">
              {AGENT_STEPS.map((step, index) => {
                const StepIcon = step.icon;

                return (
                  <div
                    key={`${step.type}-${index}`}
                    className={
                      step.highlight
                        ? "flex items-start gap-3 border border-primary/40 bg-primary/[0.06] p-3.5"
                        : "flex items-start gap-3 border-l-2 border-l-white/10 p-3.5 pl-4"
                    }
                  >
                    <StepIcon
                      className={`mt-0.5 h-4 w-4 flex-shrink-0 ${step.iconClass}`}
                      aria-hidden="true"
                    />

                    <div className="min-w-0">
                      <span
                        className={`font-mono text-[10px] uppercase tracking-wider ${
                          step.highlight
                            ? "text-primary"
                            : "text-gray-500"
                        }`}
                      >
                        {step.type}
                      </span>

                      <p
                        className={`font-mono text-sm leading-relaxed ${
                          step.highlight
                            ? "text-white"
                            : "text-gray-300"
                        }`}
                      >
                        {step.message}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;