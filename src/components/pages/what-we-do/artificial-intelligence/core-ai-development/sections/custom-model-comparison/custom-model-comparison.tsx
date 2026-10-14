import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";

const comparisonData = [
  {
    dimension: "Domain Accuracy",
    generic: "Plateaus on your edge cases and jargon",
    custom: "Tuned on your data, keeps improving",
  },
  {
    dimension: "Cost At Scale",
    generic: "Per-call costs balloon with volume",
    custom: "Optimized, predictable inference cost",
  },
  {
    dimension: "Latency & Control",
    generic: "Shared limits and network round-trips",
    custom: "Runs where you need it, low latency",
  },
  {
    dimension: "Data & Privacy",
    generic: "Your data leaves your boundary",
    custom: "Stays inside your environment",
  },
  {
    dimension: "Differentiation",
    generic: "The same model your competitors use",
    custom: "An asset only you own",
  },
];

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const rowVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const CustomModelComparison = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Heading */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-10 max-w-3xl sm:mb-12 lg:mb-16"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">
              Why Build Custom
            </span>
          </div>

          <h2 className="font-inter text-3xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-4xl md:text-6xl lg:text-7xl">
            A Wrapper Is Not A{" "}
            <span className="text-gray-300">Moat</span>.
          </h2>

          <p className="mt-7 text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
            Calling an API is a fine place to start. It is a poor place to
            stay. When AI becomes core to your product, owning the model
            changes the economics, the experience, and the edge.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.09,
              },
            },
          }}
          className="border border-gray-200"
        >
          {/* Table Header */}
          <div className="grid grid-cols-1 border-b border-gray-200 bg-gray-50 sm:grid-cols-[1fr_1fr_1.1fr]">
            <div className="hidden p-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-400 lg:p-6 sm:block">
              Dimension
            </div>

            <div className="border-gray-200 p-5 text-sm font-bold text-gray-500 lg:p-6 sm:border-l">
              Generic API
            </div>

            <div className="border-gray-200 bg-primary/[0.04] p-5 text-sm font-bold text-primary lg:p-6 sm:border-l">
              Custom Model With Plaxonic
            </div>
          </div>

          {/* Comparison Rows */}
          {comparisonData.map((item) => (
            <motion.div
              key={item.dimension}
              variants={rowVariants}
              className="grid grid-cols-1 border-b border-gray-200 last:border-b-0 sm:grid-cols-[1fr_1fr_1.1fr]"
            >
              {/* Dimension */}
              <div className="px-5 pt-5 text-sm font-semibold text-gray-900 lg:px-6 sm:py-6">
                {item.dimension}
              </div>

              {/* Generic API */}
              <div className="flex items-start gap-2.5 border-gray-200 px-5 py-4 sm:border-l sm:py-6 lg:px-6">
                <Minus
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-300"
                  strokeWidth={2}
                />

                <span className="text-sm leading-relaxed text-gray-500">
                  {item.generic}
                </span>
              </div>

              {/* Custom Model */}
              <div className="flex items-start gap-2.5 border-gray-200 bg-primary/[0.04] px-5 py-4 sm:border-l sm:py-6 lg:px-6">
                <Check
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"
                  strokeWidth={2}
                />

                <span className="text-sm font-medium leading-relaxed text-gray-800">
                  {item.custom}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CustomModelComparison;