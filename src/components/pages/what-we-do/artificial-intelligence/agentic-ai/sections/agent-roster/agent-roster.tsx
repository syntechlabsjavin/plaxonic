import { motion } from "framer-motion";
import {
  Search,
  Headset,
  TrendingUp,
  ChartNoAxesColumn,
  Server,
  FileSpreadsheet,
} from "lucide-react";

const agents = [
  {
    title: "Research Agent",
    description:
      "Scours sources, synthesizes findings, and delivers a cited brief on demand.",
    image: "https://plaxonic.com/agentic-ai/app-1.png",
    icon: Search,
  },
  {
    title: "Support Ops Agent",
    description:
      "Resolves tickets end to end, updating systems and escalating only when needed.",
    image: "https://plaxonic.com/agentic-ai/app-2.png",
    icon: Headset,
  },
  {
    title: "Sales Development Agent",
    description:
      "Researches leads, personalizes outreach, and books qualified meetings.",
    image: "https://plaxonic.com/agentic-ai/app-3.png",
    icon: TrendingUp,
  },
  {
    title: "Data Analysis Agent",
    description:
      "Queries your data, runs the analysis, and writes up the insight.",
    image: "https://plaxonic.com/agentic-ai/app-4.png",
    icon: ChartNoAxesColumn,
  },
  {
    title: "DevOps Agent",
    description:
      "Watches systems, triages incidents, and runs safe, approved remediations.",
    image: "https://plaxonic.com/agentic-ai/app-5.png",
    icon: Server,
  },
  {
    title: "Back-Office Agent",
    description:
      "Processes documents, reconciles records, and clears repetitive queues.",
    image: "https://plaxonic.com/agentic-ai/app-6.png",
    icon: FileSpreadsheet,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const AgentRoster = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section heading */}
        <motion.div
          className="mb-12 max-w-3xl lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              The Roster
            </span>
          </div>

          <h2 className="font-inter text-3xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-4xl md:text-6xl lg:text-7xl">
            Agents For The Work You{" "}
            <span className="text-gray-300">Repeat</span>.
          </h2>
        </motion.div>

        {/* Agent cards */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {agents.map((agent) => {
            const Icon = agent.icon;

            return (
              <motion.article
                key={agent.title}
                variants={cardVariants}
                className="group flex flex-col overflow-hidden border border-gray-200 transition-colors duration-300 hover:border-primary/40"
              >
                {/* Image header */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={agent.image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Image gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />

                  {/* Agent title and icon */}
                  <div className="absolute bottom-3 left-4 flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center bg-primary text-white">
                      <Icon
                        className="h-[18px] w-[18px]"
                        aria-hidden="true"
                      />
                    </span>

                    <span className="font-inter text-lg font-bold text-white">
                      {agent.title}
                    </span>
                  </div>

                  {/* Ready status */}
                  <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 bg-black/50 px-2 py-1 font-mono text-[10px] text-green-400 backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                    ready
                  </span>
                </div>

                {/* Agent description */}
                <div className="flex-1 p-5">
                  <p className="text-sm leading-relaxed text-gray-600">
                    {agent.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AgentRoster;