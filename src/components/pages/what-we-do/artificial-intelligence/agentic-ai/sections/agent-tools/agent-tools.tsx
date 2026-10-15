import { motion } from "framer-motion";
import {
  Globe,
  Database,
  Terminal,
  Mail,
  CalendarClock,
  CreditCard,
} from "lucide-react";

const tools = [
  {
    title: "Web & Search",
    command: 'web.search("competitor pricing")',
    icon: Globe,
  },
  {
    title: "Your Databases",
    command: 'db.query("orders WHERE status=\'open\'")',
    icon: Database,
  },
  {
    title: "Code Execution",
    command: "python.run(analysis.py)",
    icon: Terminal,
  },
  {
    title: "Email & Messaging",
    command: "email.send(to, subject, body)",
    icon: Mail,
  },
  {
    title: "Calendars & Scheduling",
    command: "calendar.book(slot)",
    icon: CalendarClock,
  },
  {
    title: "Apps & APIs",
    command: 'api.call("crm.update", deal)',
    icon: CreditCard,
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const AgentTools = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-32">
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
              Tool Use
            </span>
          </div>

          <h2 className="font-inter text-3xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-4xl md:text-6xl lg:text-7xl">
            Agents That Actually{" "}
            <span className="text-gray-300">Do Things</span>.
          </h2>

          <p className="mt-7 text-base leading-relaxed text-gray-600 md:text-lg">
            The difference between a chatbot and an agent is hands. We give
            agents safe, scoped access to the tools and systems they need to
            finish the job, not just talk about it.
          </p>
        </motion.div>

        {/* Tool cards */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {tools.map((tool) => {
            const Icon = tool.icon;

            return (
              <motion.div
                key={tool.title}
                variants={cardVariants}
                className="group overflow-hidden border border-gray-200 bg-white transition-colors duration-300 hover:border-primary/40"
              >
                <div className="p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <h3 className="font-inter text-lg font-bold text-gray-900">
                    {tool.title}
                  </h3>
                </div>

                {/* Terminal command */}
                <div className="overflow-x-auto border-t border-gray-200 bg-[#0e1117] px-5 py-3 font-mono text-[12px] text-primary">
                  <span className="text-gray-600">&gt; </span>
                  <code className="whitespace-nowrap">{tool.command}</code>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AgentTools;