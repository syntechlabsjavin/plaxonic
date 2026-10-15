import { motion, type Variants } from "framer-motion";
import {
  ShieldAlert,
  FileText,
  Scale,
  BookText,
  Eye,
  Activity,
  Check,
  ArrowUpRight,
} from "lucide-react";

const DeliverablesSection = () => {
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

  const deliverables = [
    {
      icon: ShieldAlert,
      title: "AI Risk Assessment",
      items: [
        "System inventory & risk tiers",
        "Likelihood × impact mapping",
        "Named controls per risk",
      ],
    },
    {
      icon: FileText,
      title: "Model Cards",
      items: [
        "Intended use & limits",
        "Performance by segment",
        "Known failure modes",
      ],
    },
    {
      icon: Scale,
      title: "Bias & Fairness Audit",
      items: [
        "Subgroup performance",
        "Disparity findings",
        "Remediation plan",
      ],
    },
    {
      icon: BookText,
      title: "AI Policy & Framework",
      items: [
        "Principles & ownership",
        "Review & approval gates",
        "Acceptable-use rules",
      ],
    },
    {
      icon: Eye,
      title: "Explainability Report",
      items: [
        "How decisions are made",
        "Feature attributions",
        "Recourse for users",
      ],
    },
    {
      icon: Activity,
      title: "Audit & Monitoring Plan",
      items: [
        "Metrics & thresholds",
        "Incident response",
        "Review cadence",
      ],
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-32">
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
              What You Get
            </span>
          </motion.div>

          <motion.h2
            className="font-inter text-3xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-7xl"
            variants={itemVariants}
          >
            Governance You Can{" "}
            <span className="text-gray-300">Show</span>.
          </motion.h2>

          <motion.p
            className="mt-7 text-base leading-relaxed text-gray-600 md:text-lg"
            variants={itemVariants}
          >
            Principles are only real when they leave a paper trail. Every
            engagement produces the artifacts your board, your auditors, and
            your regulators expect to see.
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {deliverables.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="group relative overflow-hidden border border-gray-200 bg-white transition-colors duration-300 hover:border-primary/50"
                variants={cardVariants}
              >
                {/* Header bar */}
                <div className="relative flex items-center gap-4 border-b border-gray-200 bg-gray-50 px-5 py-5 transition-colors duration-300 group-hover:bg-primary sm:px-6 lg:px-7">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center bg-white text-primary shadow-sm">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-inter text-lg font-bold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-white">
                    {item.title}
                  </h3>
                </div>

                {/* Checklist */}
                <ul className="divide-y divide-gray-100 px-5 sm:px-6 lg:px-7">
                  {item.items.map((check) => (
                    <li
                      key={check}
                      className="flex items-center gap-3 py-4 text-[15px] text-gray-700"
                    >
                      <Check className="h-4 w-4 flex-shrink-0 text-primary" strokeWidth={2.5} />
                      {check}
                    </li>
                  ))}
                </ul>

                {/* Footer label */}
                <div className="px-5 pb-6 pt-1 sm:px-6 lg:px-7">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 transition-colors duration-300 group-hover:text-primary">
                    Deliverable
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default DeliverablesSection;