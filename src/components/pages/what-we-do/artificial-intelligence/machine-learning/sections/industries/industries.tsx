import { motion } from "framer-motion";
import CtaBanner from "../../../../../../../assets/machine-learning/cta-banner.webp";

const INDUSTRIES = [
  {
    title: "Finance & Insurance",
    image: "https://plaxonic.com/machine-learning/card1.png",
    description: "Risk scoring, fraud detection, and forecasting.",
  },
  {
    title: "Retail & E-commerce",
    image: "https://plaxonic.com/machine-learning/card2.png",
    description: "Demand planning, pricing, and recommendations.",
  },
  {
    title: "Healthcare",
    image: "https://plaxonic.com/machine-learning/card3.png",
    description: "Triage, risk prediction, and operational efficiency.",
  },
  {
    title: "Manufacturing",
    image: "https://plaxonic.com/machine-learning/card4.png",
    description: "Predictive maintenance and quality inspection.",
  },
  {
    title: "Logistics",
    image: "https://plaxonic.com/machine-learning/card5.png",
    description: "Route optimization and ETA prediction.",
  },
  {
    title: "Energy & Utilities",
    image: "https://plaxonic.com/machine-learning/card6.png",
    description: "Load forecasting and anomaly detection.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const Industries = () => {
  return (
    <section className="relative overflow-hidden bg-[#0a0c10] py-16 sm:py-20 md:py-24 lg:py-36">
      {/* Background image */}
      <img
        src={CtaBanner}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
      />

      {/* Background overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[#0a0c10]/70" />

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 max-w-3xl lg:mb-16"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-light">
              Where We Work
            </span>
          </div>

          <h2 className="font-inter text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-6xl">
            Models For The Way Your{" "}
            <span className="text-white/40">Industry Runs</span>.
          </h2>
        </motion.div>

        {/* Industry cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
        >
          {INDUSTRIES.map((industry) => (
            <motion.div
              key={industry.title}
              variants={cardVariants}
              className="group relative h-72 overflow-hidden border border-white/10"
            >
              <img
                src={industry.image}
                alt={industry.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
              />

              {/* Card gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10]/85 via-[#0a0c10]/5 to-transparent" />

              {/* Card content */}
              <div className="absolute inset-0 flex flex-col justify-end p-7">
                <h3 className="font-inter text-xl font-bold text-white lg:text-2xl">
                  {industry.title}
                </h3>

                <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-gray-300 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                  {industry.description}
                </p>

                <span className="mt-4 h-[2px] w-10 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;