import { motion } from "framer-motion";
import { ArrowRight, Cpu } from "lucide-react";
import AiModelIMg from "../../../../../../../assets/machine-learning/model.png";

const featureData = [
  { label: "tenure_months", value: "27" },
  { label: "monthly_usage", value: "0.41" },
  { label: "support_tickets", value: "5" },
  { label: "plan_tier", value: "basic" },
  { label: "last_login_days", value: "18" },
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

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const IdeaSection = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Heading */}
        <motion.div
          className="max-w-3xl mb-10 sm:mb-14 lg:mb-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
              The Idea
            </span>
          </div>

          <h2 className="font-inter text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.05]">
            Raw Data In, Real{" "}
            <span className="text-gray-300">Decisions Out</span>.
          </h2>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mt-7">
            Machine learning is a function you do not have to write by hand.
            It learns the mapping from your data to the answer you need, then
            applies it to cases it has never seen.
          </p>
        </motion.div>

        {/* Machine Learning Workflow */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[1fr_auto_0.9fr_auto_1fr] items-stretch gap-6 lg:gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {/* Input Data Card */}
          <motion.div
            variants={cardVariants}
            className="border border-gray-200 bg-gray-50 transition-all duration-300 hover:border-gray-300 hover:shadow-md"
          >
            <div className="px-5 py-3 border-b border-gray-200 font-mono text-[11px] text-gray-400">
              features.csv
            </div>

            <div className="p-3">
              {featureData.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center justify-between px-3 py-2 font-mono text-[13px] border-b border-gray-100 last:border-0"
                >
                  <span className="text-gray-500">{feature.label}</span>
                  <span className="text-gray-900 font-semibold">
                    {feature.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* First Arrow */}
          <motion.div
            variants={cardVariants}
            className="flex items-center justify-center lg:px-1"
          >
            <ArrowRight className="w-6 h-6 text-gray-300 rotate-90 lg:rotate-0" />
          </motion.div>

          {/* Trained Model Card */}
          <motion.div
            variants={cardVariants}
            className="relative bg-[#0a0c10] text-white flex flex-col items-center justify-center p-8 overflow-hidden min-h-[220px] group"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.img
              src={AiModelIMg}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />

            <div className="absolute inset-0 bg-[#0a0c10]/20 pointer-events-none" />

            <Cpu className="w-10 h-10 text-primary-light relative z-10" />

            <div className="font-inter text-lg font-bold mt-4 relative z-10">
              Trained model
            </div>

            <div className="text-gray-500 text-xs mt-1 relative z-10 font-mono">
              churn_classifier · v4
            </div>
          </motion.div>

          {/* Second Arrow */}
          <motion.div
            variants={cardVariants}
            className="flex items-center justify-center lg:px-1"
          >
            <ArrowRight className="w-6 h-6 text-gray-300 rotate-90 lg:rotate-0" />
          </motion.div>

          {/* Prediction Card */}
          <motion.div
            variants={cardVariants}
            className="border-2 border-primary bg-primary/[0.04] flex flex-col justify-center p-8 transition-colors duration-300 hover:bg-primary/[0.07]"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-3">
              Prediction
            </div>

            <motion.div
              className="font-inter text-5xl font-bold text-gray-900 leading-none"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              0.82
            </motion.div>

            <div className="text-gray-900 font-semibold mt-3">
              High churn risk
            </div>

            <p className="text-gray-600 text-sm mt-2 leading-relaxed">
              Flagged for retention outreach, with the top drivers explained.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IdeaSection;