import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Boxes, Database, FlaskConical, Rocket, type LucideIcon } from "lucide-react";

/* ---------- Data ---------- */

type Layer = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const LAYERS: Layer[] = [
  {
    icon: Database,
    title: "Data & Feature Layer",
    description: "Pipelines, feature stores, and vector databases that feed every model.",
  },
  {
    icon: FlaskConical,
    title: "Training & Experimentation",
    description: "Reproducible training, tracking, and a registry of versioned models.",
  },
  {
    icon: Boxes,
    title: "Serving & Inference",
    description: "Low-latency, autoscaling endpoints with batching, caching, and GPUs.",
  },
  {
    icon: Rocket,
    title: "Orchestration & Delivery",
    description: "CI/CD for models, rollouts, canaries, and instant rollback.",
  },
];

const CROSS_CUTTING: string[] = ["Security & Governance", "Observability", "Cost / FinOps"];

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

const layersContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

const layerCard: Variants = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
};

const barsContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.5 } },
};

const bar: Variants = {
  hidden: { opacity: 0, scaleY: 0 },
  show: { opacity: 1, scaleY: 1, transition: { duration: 0.7, ease: EASE } },
};

/* ---------- Layer card ---------- */

type LayerCardProps = {
  layer: Layer;
  index: number;
};

const LayerCard = ({ layer, index }: LayerCardProps) => {
  const reduceMotion = useReducedMotion();
  const Icon = layer.icon;

  return (
    <motion.div
      variants={layerCard}
      whileHover={reduceMotion ? undefined : { x: 6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group flex items-center gap-4 sm:gap-5 border border-gray-200 bg-white hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-[border-color,box-shadow] duration-300 p-4 sm:p-5 lg:p-6"
    >
      <motion.span
        className="relative w-12 h-12 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center flex-shrink-0 transition-colors"
        whileHover={reduceMotion ? undefined : { rotate: [0, -8, 8, 0] }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="w-6 h-6" aria-hidden="true" />
        <span className="absolute -top-1.5 -left-1.5 font-mono text-[9px] text-gray-400 bg-white px-1 opacity-0 group-hover:opacity-100 transition-opacity">
          0{index + 1}
        </span>
      </motion.span>
      <div>
        <h3 className="font-inter text-lg sm:text-xl font-bold text-gray-900">{layer.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mt-1">{layer.description}</p>
      </div>
    </motion.div>
  );
};

/* ---------- Section ---------- */

const PlatformSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="stack" className="bg-gray-50 py-16 sm:py-20 lg:py-32">
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
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">The Platform</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-inter text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1] lg:leading-[1.05]"
          >
            Every Layer, One{" "}
            <motion.span
              className="text-gray-300"
              initial={{ opacity: 0.4 }}
              whileInView={reduceMotion ? undefined : { opacity: [0.4, 1, 0.7] }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, delay: 0.6, ease: "easeOut" }}
            >
              Platform
            </motion.span>
            .
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mt-7"
          >
            We assemble the full stack, from data to serving, with security, observability, and cost control woven
            through every layer, not bolted on at the end.
          </motion.p>
        </motion.div>

        {/* Layers + cross-cutting bars */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-5 lg:gap-6">
          <motion.div
            className="space-y-4"
            variants={layersContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {LAYERS.map((layer, i) => (
              <LayerCard key={layer.title} layer={layer} index={i} />
            ))}
          </motion.div>

          <motion.div
            className="flex lg:flex-row gap-3 lg:gap-3"
            variants={barsContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {CROSS_CUTTING.map((label) => (
              <motion.div
                key={label}
                variants={bar}
                style={{ originY: 0 }}
                className="relative overflow-hidden flex-1 lg:w-16 lg:flex-none bg-primary hover:bg-primary-dark transition-colors text-white flex items-center justify-center p-3 lg:p-0"
              >
                {!reduceMotion && (
                  <motion.span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 h-1/2 bg-gradient-to-b from-transparent via-white/15 to-transparent"
                    animate={{ y: ["-120%", "240%"] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
                  />
                )}
                <span className="relative font-semibold text-xs lg:[writing-mode:vertical-rl] lg:rotate-180 lg:py-6 text-center tracking-wide">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;