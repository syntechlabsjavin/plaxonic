import { motion, type Variants } from "framer-motion";
import { Gauge, Coins, ShieldCheck, Infinity } from "lucide-react";
import ScaleBg from "../../../../../../../assets/what-we-do/artificial-intelligence/scale-bg.webp";

const ScaleSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const features = [
    {
      icon: Gauge,
      title: "Fast Under Load",
      description:
        "Low-latency serving that holds up at peak, with autoscaling that reacts in seconds.",
    },
    {
      icon: Coins,
      title: "Lean On Cost",
      description:
        "Right-sized compute and zero idle GPUs, so you pay for what you actually use.",
    },
    {
      icon: ShieldCheck,
      title: "Safe By Design",
      description:
        "Isolation, access control, and audit baked into every layer of the platform.",
    },
    {
      icon: Infinity,
      title: "Reliable Always",
      description:
        "Failover, redundancy, and SLAs that keep your AI online when it matters.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-black py-16 sm:py-20 md:py-24 lg:py-36">
      {/* Background image */}
      <img
        src={ScaleBg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-35"
      />

      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/55" />

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Header */}
        <motion.div
          className="mb-10 max-w-3xl sm:mb-14 lg:mb-16"
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
              Built To Scale
            </span>
          </motion.div>

          <motion.h2
            className="font-inter text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-7xl lg:leading-[1.05]"
            variants={itemVariants}
          >
            From One Model To{" "}
            <span className="text-white/40">Millions Of Calls</span>.
          </motion.h2>

          <motion.p
            className="mt-7 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg"
            variants={itemVariants}
          >
            The jump from a working demo to a service the business depends on is
            all about infrastructure. We engineer for the load, the cost, and
            the day it has to just keep running.
          </motion.p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="bg-black/60 p-6 backdrop-blur-sm sm:p-7 lg:p-8"
                variants={cardVariants}
                whileHover={{
                  backgroundColor: "rgba(0, 0, 0, 0.75)",
                  transition: { duration: 0.25 },
                }}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.3 + index * 0.1,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                >
                  <Icon className="mb-5 h-6 w-6 text-primary" />
                </motion.div>

                <h3 className="font-inter mb-2 text-lg font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ScaleSection;