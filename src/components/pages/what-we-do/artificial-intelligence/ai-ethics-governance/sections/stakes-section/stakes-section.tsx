import { motion, type Variants } from "framer-motion";

const StakesSection = () => {
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

  const tagVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  // 3x3 risk matrix cells (row-major, top-left = high impact / low likelihood)
  const matrixCells = [
    // Row 1 (High Impact)
    {
      bg: "bg-primary/[0.08]",
      tags: ["Regulatory breach"],
    },
    {
      bg: "bg-primary/[0.16]",
      tags: ["Bias & unfairness", "Privacy breach", "Security misuse"],
    },
    {
      bg: "bg-primary/[0.16]",
      tags: ["Reputational harm"],
    },
    // Row 2 (Medium Impact)
    {
      bg: "bg-gray-50",
      tags: [],
    },
    {
      bg: "bg-primary/[0.08]",
      tags: ["IP & copyright"],
    },
    {
      bg: "bg-primary/[0.16]",
      tags: ["Hallucination"],
    },
    // Row 3 (Low Impact)
    {
      bg: "bg-gray-50",
      tags: [],
    },
    {
      bg: "bg-gray-50",
      tags: [],
    },
    {
      bg: "bg-primary/[0.08]",
      tags: ["Drift over time"],
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <motion.div
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
                The Stakes
              </span>
            </motion.div>

            <motion.h2
              className="font-inter mb-6 text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl"
              variants={itemVariants}
            >
              Know The Risks Before They{" "}
              <span className="text-gray-300">Find You</span>.
            </motion.h2>

            <motion.p
              className="mb-6 text-base leading-relaxed text-gray-600 md:text-lg"
              variants={itemVariants}
            >
              AI fails in ways traditional software never did: quietly, at scale,
              and in public. The first job of governance is to see those risks
              clearly, rank them honestly, and put a named control on each.
            </motion.p>

            <motion.p
              className="text-sm leading-relaxed text-gray-500 md:text-base"
              variants={itemVariants}
            >
              We start every engagement with a structured risk assessment,
              mapping each risk by how likely it is and how much it would hurt,
              so effort goes where it matters most.
            </motion.p>
          </motion.div>

          {/* Risk matrix */}
          <motion.div
            className="relative"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="flex">
              {/* Vertical axis label */}
              <div className="flex items-center justify-center pr-3">
                <span className="rotate-180 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-400 [writing-mode:vertical-rl]">
                  Impact →
                </span>
              </div>

              <div className="flex-1">
                <div
                  className="grid grid-cols-3 grid-rows-3 border border-gray-200"
                  style={{ aspectRatio: "1.1 / 1" }}
                >
                  {matrixCells.map((cell, index) => (
                    <div
                      key={index}
                      className={`relative flex flex-col justify-center gap-1 border border-gray-100 p-2 ${cell.bg}`}
                    >
                      {cell.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          className="inline-block border border-gray-200 bg-white px-1.5 py-1 text-center text-[10px] font-semibold leading-tight text-gray-800 sm:text-[11px]"
                          variants={tagVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          transition={{
                            delay: 0.3 + index * 0.05,
                          }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Horizontal axis label */}
                <div className="mt-3 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-400">
                  Likelihood →
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StakesSection;