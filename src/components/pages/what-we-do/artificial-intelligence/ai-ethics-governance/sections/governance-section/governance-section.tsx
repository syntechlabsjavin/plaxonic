import { motion, type Variants } from "framer-motion";
import {
  PenTool,
  Database,
  Hammer,
  ClipboardCheck,
  Rocket,
  Activity,
} from "lucide-react";

const GovernanceSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 36 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const stages = [
    {
      number: "01",
      icon: PenTool,
      title: "Design",
      description: "Intended use, affected people, and red lines defined.",
    },
    {
      number: "02",
      icon: Database,
      title: "Data",
      description: "Provenance, consent, and bias in the data examined.",
    },
    {
      number: "03",
      icon: Hammer,
      title: "Build",
      description: "Documented choices, secure and reproducible by default.",
    },
    {
      number: "04",
      icon: ClipboardCheck,
      title: "Validate",
      description: "Fairness, accuracy, and safety tested before release.",
    },
    {
      number: "05",
      icon: Rocket,
      title: "Deploy",
      description: "Approvals, guardrails, and a rollback plan in place.",
    },
    {
      number: "06",
      icon: Activity,
      title: "Monitor",
      description: "Drift, harm, and performance watched in production.",
    },
  ];

  return (
    <section className="overflow-hidden bg-gray-50 py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Header */}
        <motion.div
          className="mb-10 max-w-3xl sm:mb-12 lg:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div
            className="mb-6 flex items-center gap-3"
            variants={itemVariants}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Governance In Practice
            </span>
          </motion.div>

          <motion.h2
            className="font-inter text-3xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-7xl"
            variants={itemVariants}
          >
            A Gate At Every <span className="text-gray-300">Stage</span>.
          </motion.h2>

          <motion.p
            className="mt-7 text-base leading-relaxed text-gray-600 md:text-lg"
            variants={itemVariants}
          >
            Governance is not a document you write once. It is a set of checks
            built into how AI is made and run, so nothing reaches users until it
            has earned the right to.
          </motion.p>
        </motion.div>

        {/* Stages grid */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {stages.map((stage) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.number}
                className="group relative flex flex-col overflow-hidden border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 sm:p-7 lg:p-9"
                variants={cardVariants}
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="font-inter text-4xl font-bold leading-none text-primary/25 transition-colors duration-300 group-hover:text-primary/60 lg:text-5xl">
                    {stage.number}
                  </span>
                </div>

                <h3 className="font-inter mb-3 text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary sm:text-xl lg:text-2xl">
                  {stage.title}
                </h3>

                <p className="flex-1 text-base leading-relaxed text-gray-600">
                  {stage.description}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-primary">
                  <span className="flex h-4 w-4 items-center justify-center border border-primary text-[9px]">
                    ✓
                  </span>
                  gate
                </div>

                {/* Bottom accent bar */}
                <span className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default GovernanceSection;