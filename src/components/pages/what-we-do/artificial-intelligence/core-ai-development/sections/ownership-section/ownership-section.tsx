import { motion } from "framer-motion";
import { Check } from "lucide-react";

const ownershipItems = [
  {
    title: "The trained model and its weights",
    description: "Yours to own, run, and extend. No black box, no lock-in.",
  },
  {
    title: "Documented architecture and data lineage",
    description:
      "Every decision, dataset, and dependency recorded for your team.",
  },
  {
    title: "Evaluation suite",
    description:
      "Repeatable tests tied to the metrics your business actually cares about.",
  },
  {
    title: "Inference API or on-device build",
    description:
      "Deployed where you need it, wired into your stack and CI.",
  },
  {
    title: "Monitoring and drift detection",
    description:
      "Live visibility into accuracy, latency, and cost in production.",
  },
  {
    title: "Retraining pipeline and runbook",
    description:
      "So the model keeps improving long after we hand it over.",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const OwnershipSection = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              className="mb-10"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
                  What You Get
                </span>
              </div>

              <h2 className="font-inter text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1]">
                You Own What We{" "}
                <span className="text-gray-300">Build</span>.
              </h2>
            </motion.div>

            {/* Ownership Checklist */}
            <motion.div
              className="space-y-0"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {ownershipItems.map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="group flex items-start gap-4 py-5 border-t border-gray-200 last:border-b transition-colors duration-300 hover:border-primary/30"
                >
                  <span className="flex-shrink-0 w-6 h-6 bg-primary/10 text-primary flex items-center justify-center mt-0.5 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                    <Check className="w-4 h-4" />
                  </span>

                  <div>
                    <h3 className="text-gray-900 font-semibold text-base transition-colors duration-300 group-hover:text-primary">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            className="relative lg:sticky lg:top-28"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <motion.div
              className="relative overflow-hidden border border-gray-200"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <motion.img
                src="https://plaxonic.com/core-ai/own-flow.webp"
                alt="Flowing light representing a delivered model"
                className="block w-full aspect-[4/5] object-cover"
                whileHover={{ scale: 1.035 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent pointer-events-none" />
            </motion.div>

            {/* Ownership Badge */}
            <motion.div
              className="absolute -bottom-5 -left-5 hidden sm:block bg-primary text-white px-6 py-4"
              initial={{ opacity: 0, y: 18, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.55,
                delay: 0.3,
                ease: "easeOut",
              }}
              whileHover={{ y: -4 }}
            >
              <div className="font-inter text-2xl font-bold leading-none">
                100%
              </div>

              <div className="text-white/80 text-xs mt-1">
                yours, weights and all
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OwnershipSection;