import { motion, type Variants } from "framer-motion";
import FrameworksBg from "../../../../../../../assets/what-we-do/artificial-intelligence/frameworks-bg.webp";

const FrameworksSection = () => {
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

  const frameworks = [
    {
      badge: "EU",
      title: "EU AI Act",
      description:
        "Risk-tier your systems, meet the obligations, and prepare the technical documentation.",
    },
    {
      badge: "NIST",
      title: "NIST AI RMF",
      description:
        "Govern, map, measure, and manage risk against a recognized, practical framework.",
    },
    {
      badge: "ISO",
      title: "ISO/IEC 42001",
      description:
        "Stand up an AI management system you can certify and continually improve.",
    },
    {
      badge: "GDPR",
      title: "GDPR & privacy law",
      description:
        "Lawful basis, data minimization, and rights handling for AI that touches personal data.",
    },
    {
      badge: "OECD",
      title: "OECD AI Principles",
      description:
        "Align to globally accepted principles for trustworthy, human-centered AI.",
    },
    {
      badge: "SEC",
      title: "Sector regulation",
      description:
        "Map to the rules of your industry, from finance to healthcare to public sector.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0a0c10] py-16 sm:py-20 lg:py-32">
      {/* Background image */}
      <img
        src={FrameworksBg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[#0a0c10]/55" />

      {/* Glow blob */}
      <div className="pointer-events-none absolute bottom-[-20%] left-[-5%] h-[460px] w-[560px] rounded-full bg-primary/10 blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
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
              Aligned
            </span>
          </motion.div>

          <motion.h2
            className="font-inter text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
            variants={itemVariants}
          >
            Mapped To The Rules That{" "}
            <span className="text-white/40">Matter</span>.
          </motion.h2>

          <motion.p
            className="mt-7 text-base leading-relaxed text-gray-400 md:text-lg"
            variants={itemVariants}
          >
            The regulatory landscape is moving fast. We translate the frameworks
            you are accountable to into concrete controls, evidence, and
            documentation, so compliance is something you can actually show.
          </motion.p>
        </motion.div>

        {/* Frameworks grid */}
        <motion.div
          className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {frameworks.map((framework) => (
            <motion.div
              key={framework.badge}
              className="group bg-[#0e1117] p-6 transition-colors hover:bg-white/[0.02] sm:p-7 lg:p-8"
              variants={cardVariants}
            >
              <div className="mb-4 flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center border border-primary/30 bg-primary/10 font-inter text-xs font-bold tracking-tight text-primary">
                  {framework.badge}
                </span>
                <h3 className="font-inter text-lg font-bold text-white">
                  {framework.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-400">
                {framework.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FrameworksSection;