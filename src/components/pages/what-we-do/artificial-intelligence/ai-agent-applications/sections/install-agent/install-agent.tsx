import { Plug, SlidersHorizontal, Rocket } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const INSTALL_STEPS = [
  {
    number: "01",
    title: "Connect",
    description:
      "Point the agent at your tools, data, and accounts with secure, scoped access.",
    duration: "minutes",
    Icon: Plug,
  },
  {
    number: "02",
    title: "Configure",
    description:
      "Set its scope, tone, permissions, and approval gates to fit how you work.",
    duration: "a few hours",
    Icon: SlidersHorizontal,
  },
  {
    number: "03",
    title: "Deploy",
    description:
      "Go live in a sandbox, watch it run, then turn it loose with guardrails on.",
    duration: "days, not months",
    Icon: Rocket,
  },
] as const;

const InstallAgent = () => {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.65,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Heading */}
        <motion.div
          className="mb-10 max-w-3xl sm:mb-12 lg:mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Go Live
            </span>
          </div>

          <h2 className="font-inter text-3xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-7xl">
            Install It Like An{" "}
            <span className="text-gray-300">App</span>.
          </h2>
        </motion.div>

        {/* Installation Panel */}
        <motion.div
          className="border border-gray-200 bg-white"
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Panel Header */}
          <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4 lg:px-7">
            <span className="font-mono text-[12px] text-gray-500">
              installing: support-agent
            </span>

            <span className="font-mono text-[12px] text-primary">
              step 3 of 3
            </span>
          </div>

          {/* Progress Bar */}
          <div className="h-1 overflow-hidden bg-gray-100">
            <motion.div
              className="h-full origin-left bg-primary"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0 : 1.1,
                delay: 0.2,
                ease: "easeOut",
              }}
            />
          </div>

          {/* Installation Steps */}
          <div className="grid grid-cols-1 divide-y divide-gray-200 md:grid-cols-3 md:divide-x md:divide-y-0">
            {INSTALL_STEPS.map(({ number, title, description, duration, Icon }, index) => (
              <motion.div
                key={number}
                className="p-6 sm:p-7 lg:p-8"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: shouldReduceMotion ? 0 : index * 0.15,
                }}
              >
                {/* Icon and Number */}
                <div className="mb-5 flex items-center justify-between">
                  <motion.span
                    className="flex h-12 w-12 items-center justify-center bg-primary/10 text-primary"
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            scale: 1.08,
                            y: -3,
                          }
                    }
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </motion.span>

                  <span className="font-mono text-[11px] text-gray-400">
                    {number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mb-2 font-inter text-xl font-bold text-gray-900">
                  {title}
                </h3>

                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  {description}
                </p>

                {/* Duration Badge */}
                <span className="inline-block bg-primary/10 px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
                  {duration}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InstallAgent;