import { motion } from "framer-motion";
import {
  Inbox,
  Headset,
  TrendingUp,
  FileSearch,
  CalendarClock,
  Receipt,
  ClipboardList,
  Megaphone,
} from "lucide-react";

const agents = [
  {
    title: "Inbox Agent",
    category: "Productivity",
    description:
      "Triages, drafts, and follows up on email so your inbox stays clear.",
    icon: Inbox,
  },
  {
    title: "Support Agent",
    category: "Customer",
    description:
      "Resolves tickets end to end across chat, email, and help center.",
    icon: Headset,
  },
  {
    title: "SDR Agent",
    category: "Sales",
    description:
      "Researches leads, personalizes outreach, and books meetings.",
    icon: TrendingUp,
  },
  {
    title: "Research Agent",
    category: "Knowledge",
    description:
      "Investigates a question and returns a cited brief on demand.",
    icon: FileSearch,
  },
  {
    title: "Scheduler Agent",
    category: "Operations",
    description:
      "Coordinates calendars and books across teams without the back-and-forth.",
    icon: CalendarClock,
  },
  {
    title: "Finance Agent",
    category: "Back Office",
    description:
      "Processes invoices, reconciles records, and flags anomalies.",
    icon: Receipt,
  },
  {
    title: "Onboarding Agent",
    category: "HR & People",
    description:
      "Guides new hires and completes the setup checklist for them.",
    icon: ClipboardList,
  },
  {
    title: "Content Agent",
    category: "Marketing",
    description:
      "Drafts, repurposes, and schedules on-brand content at pace.",
    icon: Megaphone,
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
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut" as const,
    },
  },
};

const AgentCatalogSection = () => {
  return (
    <section id="catalog" className="bg-gray-50 py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Header */}
        <motion.div
          className="mb-10 flex flex-col gap-6 sm:mb-12 lg:mb-16 lg:flex-row lg:items-end lg:justify-between"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                The Catalog
              </span>
            </div>

            <h2 className="font-inter text-3xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-7xl">
              Ready Agents, On The{" "}
              <span className="text-gray-300">Shelf</span>.
            </h2>
          </div>

          <p className="max-w-full text-sm text-gray-600 md:text-base lg:max-w-sm">
            Start from a proven agent app and tailor it to you, instead of
            building from scratch. Every one is customizable and yours to own.
          </p>
        </motion.div>

        {/* Agent Cards */}
        <motion.div
          className="grid grid-cols-1 gap-px border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
        >
          {agents.map((agent) => {
            const Icon = agent.icon;

            return (
              <motion.div
                key={agent.title}
                variants={cardVariants}
                className="group flex flex-col bg-white p-6 transition-colors duration-300 hover:bg-primary/[0.02]"
                whileHover={{ y: -4 }}
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>

                  <span className="pt-1 text-right font-mono text-[10px] uppercase tracking-wider text-gray-400">
                    {agent.category}
                  </span>
                </div>

                <h3 className="mb-2 font-inter text-lg font-bold text-gray-900">
                  {agent.title}
                </h3>

                <p className="flex-1 text-sm leading-relaxed text-gray-600">
                  {agent.description}
                </p>

                <button
                  type="button"
                  className="mt-5 inline-flex w-full items-center justify-center border border-gray-300 py-2 text-xs font-semibold uppercase tracking-wider text-gray-700 transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white"
                  onClick={() =>
                    window.location.assign(
                      `/contact?agent=${encodeURIComponent(agent.title)}`
                    )
                  }
                >
                  Deploy
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AgentCatalogSection;