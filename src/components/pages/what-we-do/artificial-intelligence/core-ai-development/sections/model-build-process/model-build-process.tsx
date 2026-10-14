import { motion } from "framer-motion";

const buildSteps = [
  {
    number: "01",
    title: "Data Engineering",
    description:
      "We collect, clean, label, and version the data your model learns from, the part that decides everything.",
    position: "top",
  },
  {
    number: "02",
    title: "Model Design",
    description:
      "We choose the architecture and baseline, build vs fine-tune vs prompt, that fits your accuracy, cost, and latency targets.",
    position: "bottom",
  },
  {
    number: "03",
    title: "Training & Tuning",
    description:
      "We train, fine-tune, and optimize, tracking every run so improvements are measured, not guessed.",
    position: "top",
  },
  {
    number: "04",
    title: "Evaluation",
    description:
      "We test against held-out data and real edge cases with metrics tied to the business outcome, not just a leaderboard.",
    position: "bottom",
  },
  {
    number: "05",
    title: "Deployment",
    description:
      "We serve the model as a scalable, low-latency API or on-device build, wired into your stack and CI.",
    position: "top",
  },
  {
    number: "06",
    title: "Monitor & Retrain",
    description:
      "We watch accuracy, drift, and cost in production and retrain on a cadence, so the model stays sharp over time.",
    position: "bottom",
  },
] as const;

const headingVariants = {
  hidden: {
    opacity: 0,
    y: 30,
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

const stepVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const mobileStepVariants = {
  hidden: {
    opacity: 0,
    x: 12,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const ModelBuildProcess = () => {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Heading */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-10 max-w-3xl sm:mb-14 lg:mb-24"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">
              The Build
            </span>
          </div>

          <h2 className="font-inter text-3xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-4xl md:text-6xl lg:text-7xl">
            How A Model Gets{" "}
            <span className="text-gray-300">Made</span>.
          </h2>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="relative hidden lg:block">
          {/* Horizontal Timeline Line */}
          <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-gray-200">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full w-full origin-left bg-primary"
            />
          </div>

          {/* Timeline Steps */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="relative grid grid-cols-6"
          >
            {buildSteps.map((step) => {
              const isTop = step.position === "top";

              return (
                <div
                  key={step.number}
                  className="relative flex h-[420px] items-center justify-center px-3"
                >
                  {/* Alternating Step Card */}
                  <motion.div
                    variants={stepVariants}
                    whileHover={{ y: isTop ? -4 : 4 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`absolute w-full px-1 ${
                      isTop
                        ? "bottom-1/2 mb-10"
                        : "top-1/2 mt-10"
                    }`}
                  >
                    <div className="border border-gray-200 bg-white p-5 transition-colors duration-300 hover:border-primary/40">
                      <div className="mb-3 font-inter text-3xl font-bold leading-none text-primary/30">
                        {step.number}
                      </div>

                      <h3 className="mb-2 font-inter text-base font-bold leading-snug text-gray-900">
                        {step.title}
                      </h3>

                      <p className="text-[13px] leading-relaxed text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Vertical Connector */}
                  <span
                    className={`absolute left-1/2 h-10 w-[2px] -translate-x-1/2 bg-gray-200 ${
                      isTop ? "bottom-1/2" : "top-1/2"
                    }`}
                  />

                  {/* Timeline Marker */}
                  <motion.span
                    initial={{ scale: 0, rotate: 45 }}
                    whileInView={{ scale: 1, rotate: 45 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.15,
                      ease: "easeOut",
                    }}
                    className="relative z-10 h-3.5 w-3.5 bg-primary ring-4 ring-white"
                  />
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Mobile & Tablet Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="relative pl-8 lg:hidden"
        >
          {/* Vertical Timeline Line */}
          <div className="absolute bottom-2 left-[7px] top-2 w-[2px] bg-gray-200">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 1.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full w-full origin-top bg-primary"
            />
          </div>

          {/* Timeline Steps */}
          {buildSteps.map((step) => (
            <motion.div
              key={step.number}
              variants={mobileStepVariants}
              className="relative pb-8 last:pb-0"
            >
              {/* Timeline Marker */}
              <span className="absolute -left-8 top-1.5 h-3.5 w-3.5 rotate-45 bg-primary ring-4 ring-white" />

              <div className="mb-2 font-inter text-3xl font-bold leading-none text-primary/30">
                {step.number}
              </div>

              <h3 className="mb-1.5 font-inter text-lg font-bold text-gray-900">
                {step.title}
              </h3>

              <p className="text-sm leading-relaxed text-gray-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ModelBuildProcess;