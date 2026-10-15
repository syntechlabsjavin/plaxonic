type AutonomyLevel = {
  level: string;
  title: string;
  subtitle: string;
  description: string;
  width: string;
  agentic?: boolean;
};

const autonomyLevels: AutonomyLevel[] = [
  {
    level: "L1",
    title: "Rules",
    subtitle: "You do everything",
    description:
      "Rigid scripts. Breaks the moment reality differs from the flowchart.",
    width: "64%",
  },
  {
    level: "L2",
    title: "Assistant",
    subtitle: "You drive, it helps",
    description: "Answers and drafts when asked, one turn at a time.",
    width: "73%",
  },
  {
    level: "L3",
    title: "Copilot",
    subtitle: "You approve each step",
    description:
      "Suggests next steps and acts with your approval at each one.",
    width: "82%",
  },
  {
    level: "L4",
    title: "Agent",
    subtitle: "You set the goal",
    description:
      "Plans and completes a whole task with tools, reporting back.",
    width: "91%",
    agentic: true,
  },
  {
    level: "L5",
    title: "Multi-agent",
    subtitle: "You set the outcome",
    description:
      "A team of agents coordinates to deliver an entire workflow.",
    width: "100%",
    agentic: true,
  },
];

const AutonomyShift = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Heading */}
        <div className="mb-12 max-w-3xl lg:mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              The Shift
            </span>
          </div>

          <h2 className="font-inter text-3xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-4xl md:text-6xl lg:text-7xl">
            From Assistants To{" "}
            <span className="text-gray-300">Autonomy</span>.
          </h2>

          <p className="mt-7 text-base leading-relaxed text-gray-600 md:text-lg">
            Most AI still waits for your next instruction. Agentic AI is the
            step where you hand over the goal, not the keystrokes. Here is the
            ladder.
          </p>
        </div>

        {/* Autonomy Levels */}
        <div className="space-y-3">
          {autonomyLevels.map((item) => (
            <div
              key={item.level}
              style={{ width: item.width }}
              className={`flex min-w-[260px] max-w-full items-center gap-4 border p-4 sm:gap-5 sm:p-5 lg:p-6 ${
                item.agentic
                  ? "border-primary bg-primary/[0.05]"
                  : "border-gray-200 bg-gray-50"
              }`}
            >
              {/* Level */}
              <span
                className={`flex-shrink-0 font-mono text-sm font-bold ${
                  item.agentic ? "text-primary" : "text-gray-400"
                }`}
              >
                {item.level}
              </span>

              {/* Level Details */}
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3
                    className={`font-inter text-lg font-bold lg:text-xl ${
                      item.agentic ? "text-primary" : "text-gray-900"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <span className="font-mono text-xs text-gray-400">
                    {item.subtitle}
                  </span>
                </div>

                <p className="mt-1 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>

              {/* Agentic Badge */}
              {item.agentic && (
                <span className="hidden flex-shrink-0 bg-primary/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-primary sm:inline-block">
                  Agentic
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutonomyShift;