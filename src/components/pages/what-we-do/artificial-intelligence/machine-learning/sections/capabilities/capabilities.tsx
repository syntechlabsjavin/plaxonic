import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  Sparkles,
  ShieldAlert,
  Boxes,
  SlidersHorizontal,
  Wrench,
} from "lucide-react";

const capabilities = [
  {
    icon: TrendingUp,
    problem: "Forecast demand, revenue, and load",
    method: "Time-series forecasting",
  },
  {
    icon: Users,
    problem: "Predict churn, conversion, and risk",
    method: "Classification & propensity models",
  },
  {
    icon: Sparkles,
    problem: "Recommend the next best action",
    method: "Recommender & ranking systems",
  },
  {
    icon: ShieldAlert,
    problem: "Catch fraud and anomalies in real time",
    method: "Anomaly detection",
  },
  {
    icon: Boxes,
    problem: "Segment customers and behavior",
    method: "Clustering & unsupervised learning",
  },
  {
    icon: SlidersHorizontal,
    problem: "Optimize pricing and operations",
    method: "Optimization & reinforcement learning",
  },
  {
    icon: Wrench,
    problem: "Predict failures before they happen",
    method: "Predictive maintenance",
  },
];

const headingVariants = {
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

const rowVariants = {
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

const Capabilities = () => {
  return (
    <section
      id="capabilities"
      className="bg-gray-50 py-16 sm:py-20 lg:py-32"
    >
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Heading */}
        <motion.div
          className="max-w-3xl mb-12 lg:mb-16"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
              What We Predict
            </span>
          </div>

          <h2 className="font-inter text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.05]">
            Your Problem, The Right{" "}
            <span className="text-gray-300">Method</span>.
          </h2>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mt-7">
            We start from the decision you want to improve, then bring the
            modeling technique that fits it. No method in search of a problem.
          </p>
        </motion.div>

        {/* Capabilities List */}
        <motion.div
          className="border-t border-gray-200"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {capabilities.map((capability) => {
            const Icon = capability.icon;

            return (
              <motion.div
                key={capability.method}
                variants={rowVariants}
                className="group grid grid-cols-1 sm:grid-cols-[1.3fr_auto_1fr] items-center gap-3 sm:gap-8 border-b border-gray-200 py-7 lg:py-8 hover:bg-white transition-colors duration-300 sm:px-5 sm:-mx-5"
              >
                {/* Problem / Business Outcome */}
                <div className="flex items-center gap-4">
                  <Icon
                    className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors flex-shrink-0"
                    strokeWidth={1.5}
                  />

                  <p className="text-gray-900 text-lg lg:text-xl font-semibold leading-snug">
                    {capability.problem}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex items-center pl-10 sm:pl-0 text-gray-300 font-mono text-lg group-hover:text-primary transition-colors">
                  →
                </div>

                {/* Machine Learning Method */}
                <div className="flex items-center gap-3 pl-10 sm:pl-0">
                  <span className="w-2 h-2 bg-primary rotate-45 flex-shrink-0" />

                  <span className="text-primary text-base lg:text-lg font-semibold">
                    {capability.method}
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

export default Capabilities;