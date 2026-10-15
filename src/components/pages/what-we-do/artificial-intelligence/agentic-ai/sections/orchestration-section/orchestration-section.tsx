import { motion } from "framer-motion";
import { Search, PenLine, CodeXml, ShieldCheck, Cpu } from "lucide-react";

const agents = [
  {
    name: "Researcher",
    description: "Gathers facts",
    icon: Search,
    position: "top",
    line: { x1: 50, y1: 50, x2: 50, y2: 12 },
  },
  {
    name: "Writer",
    description: "Drafts content",
    icon: PenLine,
    position: "right",
    line: { x1: 50, y1: 50, x2: 88, y2: 50 },
  },
  {
    name: "Engineer",
    description: "Runs code & tools",
    icon: CodeXml,
    position: "bottom",
    line: { x1: 50, y1: 50, x2: 50, y2: 88 },
  },
  {
    name: "Reviewer",
    description: "Checks the work",
    icon: ShieldCheck,
    position: "left",
    line: { x1: 50, y1: 50, x2: 12, y2: 50 },
  },
] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

const nodePositions = {
  top: "left-1/2 top-[12%]",
  right: "left-[88%] top-1/2",
  bottom: "left-1/2 top-[88%]",
  left: "left-[12%] top-1/2",
};

const OrchestrationSection = () => {
  return (
    <section
      id="orchestration"
      className="overflow-hidden bg-white py-16 sm:py-20 lg:py-32"
    >
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              variants={fadeUpVariants}
              className="mb-6 flex items-center gap-3"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Multi-Agent
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUpVariants}
              className="mb-6 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-6xl"
            >
              A Team Of Agents, One{" "}
              <span className="text-gray-300">Orchestrator</span>.
            </motion.h2>

            <motion.p
              variants={fadeUpVariants}
              className="mb-8 text-base leading-relaxed text-gray-600 md:text-lg"
            >
              Hard work rarely fits one agent. We design systems where an
              orchestrator breaks a goal into parts and assigns each to a
              specialist agent, then assembles their output into a finished
              result. Like a team, with a manager who never sleeps.
            </motion.p>

            {/* Specialist agent cards */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-4"
            >
              {agents.map((agent) => {
                const Icon = agent.icon;

                return (
                  <motion.div
                    key={agent.name}
                    variants={fadeUpVariants}
                    className="flex items-start gap-3 border border-gray-200 p-4"
                  >
                    <Icon
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />

                    <div>
                      <div className="text-sm font-semibold text-gray-900">
                        {agent.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {agent.description}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right orchestration diagram */}
          <motion.div
            className="relative mx-auto aspect-square w-full max-w-[520px]"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Connection lines */}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              fill="none"
              aria-hidden="true"
            >
              <title>Orchestration links</title>
              <desc>
                Lines connecting a central orchestrator to each specialist
                agent.
              </desc>

              {agents.map((agent, index) => (
                <motion.line
                  key={agent.name}
                  x1={agent.line.x1}
                  y1={agent.line.y1}
                  x2={agent.line.x2}
                  y2={agent.line.y2}
                  stroke="rgba(27,163,221,0.3)"
                  strokeWidth="0.4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    delay: 0.2 + index * 0.12,
                  }}
                />
              ))}
            </svg>

            {/* Central orchestrator */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <motion.div
                className="mx-auto flex h-20 w-20 items-center justify-center bg-primary text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 16,
                  delay: 0.2,
                }}
              >
                <Cpu className="h-9 w-9" aria-hidden="true" />
              </motion.div>

              <div className="mt-3 whitespace-nowrap font-inter text-sm font-bold text-gray-900">
                Orchestrator
              </div>
            </div>

            {/* Specialist diagram nodes */}
            {agents.map((agent, index) => {
              const Icon = agent.icon;

              return (
                <motion.div
                  key={agent.name}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 ${
                    nodePositions[agent.position]
                  }`}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: 0.35 + index * 0.12,
                    ease: "easeOut",
                  }}
                >
                  <div className="flex items-center gap-2 whitespace-nowrap border border-gray-200 bg-white px-3 py-2 shadow-sm">
                    <Icon
                      className="h-4 w-4 flex-shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span className="text-xs font-semibold text-gray-800">
                      {agent.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OrchestrationSection;
