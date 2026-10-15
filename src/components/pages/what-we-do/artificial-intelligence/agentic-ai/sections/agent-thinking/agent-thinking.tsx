import { Brain, Wrench, Eye, RefreshCw, RotateCcw } from "lucide-react";
import LoopBg from "../../../../../../../assets/what-we-do/artificial-intelligence/loop-bg.webp";

type ThinkingStep = {
  number: string;
  title: string;
  description: string;
  icon: typeof Brain;
};

const thinkingSteps: ThinkingStep[] = [
  {
    number: "01",
    title: "Plan",
    description: "Break the goal into a sequence of concrete steps.",
    icon: Brain,
  },
  {
    number: "02",
    title: "Act",
    description: "Call the right tool or model to do the next step.",
    icon: Wrench,
  },
  {
    number: "03",
    title: "Observe",
    description: "Read the result and check progress toward the goal.",
    icon: Eye,
  },
  {
    number: "04",
    title: "Reflect",
    description: "Adjust the plan, retry, or move on, until done.",
    icon: RefreshCw,
  },
];

const AgentThinking = () => {
  return (
    <section className="relative overflow-hidden bg-[#0a0c10] py-16 sm:py-20 lg:py-32">
      {/* Background image */}
      <img
        src={LoopBg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
      />

      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-5%] top-[-15%] h-[460px] w-[560px] rounded-full bg-primary/10 blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section heading */}
        <div className="mb-14 max-w-3xl lg:mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              How An Agent Thinks
            </span>
          </div>

          <h2 className="font-inter text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-6xl">
            Plan, Act, Observe,{" "}
            <span className="text-white/40">Repeat</span>.
          </h2>

          <p className="mt-7 text-base leading-relaxed text-gray-400 md:text-lg">
            An agent is not one prompt. It runs a loop, taking a step, checking
            the result, and deciding what to do next, until the goal is actually
            met.
          </p>
        </div>

        {/* Thinking steps */}
        <div className="relative">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {thinkingSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative border border-white/10 bg-white/[0.03] p-6 lg:p-7"
                >
                  <span className="absolute right-5 top-5 font-mono text-xs text-gray-600">
                    {step.number}
                  </span>

                  <div className="mb-5 flex h-12 w-12 items-center justify-center bg-primary/15 text-primary">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <h3 className="mb-2 font-inter text-xl font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-400">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Loop completion message */}
          <div className="mt-6 flex items-center justify-center gap-2.5 text-sm font-medium text-primary">
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            <span>loops until the goal is complete, then stops</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentThinking;