import { motion, useReducedMotion, type Variants } from "framer-motion";

/* ---------- Data ---------- */

const UNDERNEATH_ITEMS: string[] = [
  "Serving & Inference",
  "Autoscaling & GPUs",
  "Versioning & Rollback",
  "Monitoring & Drift",
  "Cost Control",
  "Security & Access",
  "Pipelines & Retraining",
  "Reliability & SLAs",
];

/* ---------- Animation variants ---------- */

const EASE = [0.22, 1, 0.36, 1] as const;

const headerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const diagramContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.25 } },
};

const modelBox: Variants = {
  hidden: { opacity: 0, y: -30, scale: 0.92 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: EASE } },
};

const underneathPanel: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE, when: "beforeChildren", staggerChildren: 0.07 },
  },
};

const chip: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.94 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

/* ---------- Section ---------- */

const HardPartSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-32">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Header */}
        <motion.div
          className="max-w-3xl mb-10 sm:mb-12 lg:mb-16"
          variants={headerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">The Hard Part</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-inter text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1] lg:leading-[1.05]"
          >
            The Model Is The Tip Of The{" "}
            <motion.span
              className="text-gray-300"
              initial={{ opacity: 0.4 }}
              whileInView={reduceMotion ? undefined : { opacity: [0.4, 1, 0.7] }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, delay: 0.6, ease: "easeOut" }}
            >
              Iceberg
            </motion.span>
            .
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mt-7"
          >
            A model in a notebook is a demo. Everything that makes it reliable, fast, affordable, and safe in
            production lives below the surface. That is the part we build.
          </motion.p>
        </motion.div>

        {/* Iceberg diagram */}
        <motion.div
          className="max-w-3xl mx-auto"
          variants={diagramContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Visible tip: gently bobs like it's floating */}
          <motion.div variants={modelBox}>
            <motion.div
              className="mx-auto w-[55%] min-w-[240px] border-2 border-primary bg-primary/[0.05] p-5 text-center"
              animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="text-[11px] font-mono uppercase tracking-wider text-primary mb-1">visible</div>
              <div className="font-inter text-lg font-bold text-gray-900">The Model</div>
            </motion.div>
          </motion.div>

          {/* Waterline divider: draws out from the centre */}
          <div className="relative my-4">
            <motion.div
              className="border-t border-dashed border-gray-300 origin-center"
              variants={{
                hidden: { scaleX: 0, opacity: 0 },
                show: { scaleX: 1, opacity: 1, transition: { duration: 0.9, ease: EASE } },
              }}
            />
            <motion.span
              className="absolute left-1/2 -translate-x-1/2 -top-2.5 bg-white px-3 font-mono text-[10px] uppercase tracking-wider text-gray-400"
              variants={{
                hidden: { opacity: 0, y: -6 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
              }}
            >
              Production Line
            </motion.span>
          </div>

          {/* Everything underneath */}
          <motion.div
            className="border border-gray-200 bg-gray-50 p-6 lg:p-8"
            variants={underneathPanel}
          >
            <motion.div
              variants={chip}
              className="text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-4 text-center"
            >
              Everything Underneath
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {UNDERNEATH_ITEMS.map((item) => (
                <motion.div
                  key={item}
                  variants={chip}
                  whileHover={{ y: -4 }}
                  className="border border-gray-200 bg-white px-3 py-3 text-center text-gray-700 text-[13px] font-medium cursor-default transition-[border-color,box-shadow] duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HardPartSection;