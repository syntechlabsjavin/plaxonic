import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Scale,
  Eye,
  ClipboardCheck,
  Lock,
  ShieldCheck,
} from "lucide-react";
import AIEthicsBg from "../../../../../../../assets/what-we-do/artificial-intelligence/ai-ethics.png";

const HeroSection = () => {
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

  const principles = [
    {
      icon: Scale,
      title: "Fairness",
      description: "Tested for bias, fair across the people it affects.",
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Explainable decisions, documented and inspectable.",
    },
    {
      icon: ClipboardCheck,
      title: "Accountability",
      description: "Clear owners and a human answerable for outcomes.",
    },
    {
      icon: Lock,
      title: "Privacy",
      description: "Data minimized, protected, and used with consent.",
    },
    {
      icon: ShieldCheck,
      title: "Safety",
      description: "Guardrails, oversight, and limits that prevent harm.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#070809] pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28">
      {/* Background image */}
      <img
        src={AIEthicsBg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />

      {/* Glow blob */}
      <div className="pointer-events-none absolute top-[-12%] left-1/2 h-[500px] w-[860px] -translate-x-1/2 rounded-full bg-primary/12 blur-[180px]" />

      {/* Horizontal line pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px)",
          backgroundSize: "100% 34px",
          maskImage:
            "radial-gradient(70% 70% at 50% 30%, black 20%, transparent 80%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Hero content */}
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div
            className="mb-8 flex items-center gap-3"
            variants={itemVariants}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Artificial Intelligence / AI Solutions / AI Ethics
            </span>
          </motion.div>

          <motion.h1
            className="font-inter text-[2rem] font-bold leading-[1.1] tracking-tight text-white xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
            variants={itemVariants}
          >
            Powerful AI,
            <br />
            <span className="bg-gradient-to-r from-primary-light via-primary to-primary-light bg-clip-text text-primary">
              Worthy Of Trust.
            </span>
          </motion.h1>

          <motion.p
            className="mt-8 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg md:text-xl"
            variants={itemVariants}
          >
            We help you build and run AI you can stand behind: fair, transparent,
            accountable, and compliant. Not as a brake on innovation, but as the
            foundation that lets you move with confidence.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            variants={itemVariants}
          >
            <button
              type="button"
              className="group inline-flex w-full items-center justify-center gap-3 bg-primary px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-dark sm:w-auto"
            >
              Assess Your AI
              <ArrowRight className="h-5 w-5 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
            </button>

            <a
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 border-2 border-white/25 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white hover:text-gray-900 sm:w-auto"
            >
              Our Principles
            </a>
          </motion.div>
        </motion.div>

        {/* Principles grid */}
        <motion.div
          id="principles"
          className="mt-12 grid grid-cols-1 gap-px border border-white/10 bg-white/10 xs:grid-cols-2 sm:mt-14 lg:mt-20 lg:grid-cols-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={principle.title}
                className="group border-t-2 border-t-primary bg-[#0a0c10] p-5 sm:p-6 lg:p-7"
                variants={cardVariants}
                whileHover={{
                  backgroundColor: "rgba(14, 16, 22, 1)",
                  transition: { duration: 0.25 },
                }}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.25 + index * 0.08,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                >
                  <Icon className="mb-4 h-6 w-6 text-primary" />
                </motion.div>

                <h3 className="font-inter mb-1.5 text-base font-bold text-white">
                  {principle.title}
                </h3>
                <p className="text-xs leading-relaxed text-gray-500">
                  {principle.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;