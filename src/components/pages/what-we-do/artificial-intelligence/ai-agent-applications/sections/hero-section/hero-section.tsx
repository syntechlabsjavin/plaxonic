import { motion } from "framer-motion";
import { ArrowRight, Inbox, ChartNoAxesColumn, Headset } from "lucide-react";
import AIAgentApplicationBg from "../../../../../../../assets/what-we-do/artificial-intelligence/ai-agent-applications-bg.webp";

type AgentCard = {
  id: string;
  filename: string;
  title: string;
  description: string;
  icon: typeof Inbox;
  position: "left" | "center" | "right";
  rotation: number;
  floatY: number[];
  duration: number;
  delay: number;
};

const agentCards: AgentCard[] = [
  {
    id: "inbox",
    filename: "inbox-agent.app",
    title: "Inbox Agent",
    description: "Drafted 3 replies, flagged 1 for review",
    icon: Inbox,
    position: "left",
    rotation: -6,
    floatY: [0, -12, 0, 8, 0],
    duration: 5.2,
    delay: 0,
  },
  {
    id: "analytics",
    filename: "analytics-agent.app",
    title: "Analytics Agent",
    description: "Weekly report ready, revenue up vs plan",
    icon: ChartNoAxesColumn,
    position: "center",
    rotation: 4,
    floatY: [0, 10, 0, -14, 0],
    duration: 6,
    delay: 0.4,
  },
  {
    id: "support",
    filename: "support-agent.app",
    title: "Support Agent",
    description: "Resolved 18 tickets, escalated 2",
    icon: Headset,
    position: "right",
    rotation: 7,
    floatY: [0, -10, 0, 12, 0],
    duration: 5.6,
    delay: 0.8,
  },
];

export default function HeroSection() {
  const scrollToAgents = () => {
    const section = document.getElementById("agent-apps");
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#070809] pb-16 pt-28 sm:pb-20 lg:pb-28 lg:pt-40">
      {/* Background */}
      <img
        src={AIAgentApplicationBg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
      />

      <div className="pointer-events-none absolute inset-0 bg-[#070809]/40" />

      <div className="pointer-events-none absolute left-1/2 top-[-12%] h-[520px] w-[880px] -translate-x-1/2 rounded-full bg-primary/15 blur-[180px]" />

      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(70% 60% at 50% 40%, black 20%, transparent 80%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Hero content */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-3 sm:mb-8"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary sm:text-xs">
              Artificial Intelligence / AI Solutions / AI Agent Apps
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-inter text-[2rem] font-bold leading-[1.03] tracking-tight text-white xs:text-4xl sm:text-5xl md:text-6xl lg:text-8xl"
          >
            Agents You Can
            <br />
            <span className="bg-gradient-to-r from-primary-light via-primary to-primary-light bg-clip-text text-primary">
              Actually Deploy.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-400 sm:mt-8 sm:text-lg md:text-xl"
          >
            Not a science project. Packaged AI agent applications, ready to
            drop into your business, living inside the tools your teams already
            use and owning real work end to end.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col flex-wrap items-stretch justify-center gap-4 sm:mt-10 sm:flex-row sm:items-center"
          >
            <button
              type="button"
              onClick={scrollToAgents}
              className="group inline-flex items-center justify-center gap-3 bg-primary px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Browse Agent Apps
              <ArrowRight className="h-5 w-5 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
            </button>

            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/25 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white hover:text-gray-900"
            >
              See the Catalog
            </a>
          </motion.div>
        </div>

        {/* Floating agent application cards */}
        <div className="relative mx-auto mt-12 h-[280px] max-w-2xl sm:mt-16 sm:h-[320px]">
          {agentCards.map((agent) => {
            const Icon = agent.icon;

            const positionClass =
              agent.position === "left"
                ? "left-1/2 z-10 ml-[-58%]"
                : agent.position === "center"
                  ? "left-1/2 z-30 ml-[-50%]"
                  : "left-1/2 z-20 ml-[8%]";

            return (
              <motion.div
                key={agent.id}
                initial={{
                  opacity: 0,
                  y: 35,
                  rotate: agent.rotation,
                }}
                animate={{
                  opacity: 1,
                  y: agent.floatY,
                  rotate: agent.rotation,
                }}
                transition={{
                  opacity: { duration: 0.7, delay: agent.delay + 0.2 },
                  y: {
                    duration: agent.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: agent.delay,
                  },
                  rotate: {
                    duration: agent.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: agent.delay,
                  },
                }}
                whileHover={{
                  y: -18,
                  rotate: 0,
                  scale: 1.06,
                  zIndex: 50,
                  transition: { duration: 0.25 },
                }}
                className={`absolute top-0 w-64 cursor-pointer border border-white/15 bg-[#0e1117] shadow-2xl will-change-transform sm:w-72 ${positionClass}`}
              >
                {/* Window header */}
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="h-2 w-2 rounded-full bg-primary/60" />

                  <span className="ml-2 truncate font-mono text-[10px] text-gray-500">
                    {agent.filename}
                  </span>
                </div>

                {/* Card content */}
                <div className="p-4">
                  <div className="mb-3 flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center bg-primary text-white">
                      <Icon className="h-4 w-4" />
                    </span>

                    <span className="text-sm font-semibold text-white">
                      {agent.title}
                    </span>

                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-green-400" />
                  </div>

                  <div className="border-l-2 border-primary/40 pl-3 text-xs leading-relaxed text-gray-400">
                    {agent.description}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}