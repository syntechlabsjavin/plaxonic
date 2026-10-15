import { motion, useReducedMotion, type Variants } from "framer-motion";
import ScaleBg from "../../../../../../../assets/what-we-do/artificial-intelligence/scale-bg.webp";

/* ---------- Data ---------- */

type Service = {
  name: string;
  description: string;
  tag: string;
};

const SERVICES: Service[] = [
  {
    name: "model-serving",
    description: "Low-latency, autoscaling inference endpoints",
    tag: "GPU · batching",
  },
  {
    name: "compute-orchestration",
    description: "Schedule and pack GPU and CPU workloads efficiently",
    tag: "Kubernetes · Ray",
  },
  {
    name: "mlops-pipelines",
    description: "Automated training, evaluation, and promotion",
    tag: "CI/CD · registry",
  },
  {
    name: "feature-and-vector-store",
    description: "Consistent features and retrieval at serving time",
    tag: "low latency",
  },
  {
    name: "observability",
    description: "Metrics, traces, drift, and quality on every model",
    tag: "alerts · SLOs",
  },
  {
    name: "finops-cost-control",
    description: "Right-size compute and cut idle GPU spend",
    tag: "savings",
  },
  {
    name: "security-governance",
    description: "Access control, isolation, audit, and compliance",
    tag: "RBAC · audit",
  },
  {
    name: "reliability-scaling",
    description: "Load handling, failover, and SLA-backed uptime",
    tag: "HA · autoscale",
  },
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

const tableVariant: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, when: "beforeChildren", staggerChildren: 0.09 },
  },
};

const rowVariant: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/* ---------- Status dot ---------- */

const StatusDot = ({ delay }: { delay: number }) => {
  const reduceMotion = useReducedMotion();

  return (
    <span className="relative inline-flex w-1.5 h-1.5">
      {!reduceMotion && (
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-green-400"
          animate={{ scale: [1, 3], opacity: [0.6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay }}
        />
      )}
      <span className="relative w-1.5 h-1.5 rounded-full bg-green-400" />
    </span>
  );
};

/* ---------- Service row ---------- */

type ServiceRowProps = {
  service: Service;
  index: number;
};

const ServiceRow = ({ service, index }: ServiceRowProps) => (
  <motion.div
    variants={rowVariant}
    className="group relative grid grid-cols-[auto_1fr_auto] gap-3 sm:gap-4 items-center px-4 sm:px-5 lg:px-7 py-4 border-b border-white/[0.06] last:border-0 hover:bg-white/[0.02] transition-colors"
  >
    {/* left accent that slides in on hover */}
    <span
      aria-hidden="true"
      className="pointer-events-none absolute left-0 top-0 h-full w-0.5 bg-primary-light origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"
    />

    <span className="inline-flex items-center gap-2 font-mono text-[11px] text-green-400">
      <StatusDot delay={index * 0.25} /> running
    </span>

    <div className="min-w-0">
      <span className="font-mono text-sm text-primary inline-block transition-transform duration-300 group-hover:translate-x-1">
        {service.name}
      </span>
      <p className="text-gray-400 text-[13px] leading-snug mt-0.5">{service.description}</p>
    </div>

    <span className="hidden sm:inline-block font-mono text-[11px] text-gray-500 border border-white/10 px-2.5 py-1 whitespace-nowrap transition-colors duration-300 group-hover:text-gray-300 group-hover:border-white/25">
      {service.tag}
    </span>
  </motion.div>
);

/* ---------- Section ---------- */

const ServicesSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#0a0c10] py-16 sm:py-20 lg:py-32">
      <motion.img
        src={ScaleBg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.8 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[#0a0c10]/35" />
      <motion.div
        className="pointer-events-none absolute top-[-15%] right-[-5%] w-[560px] h-[460px] rounded-full bg-primary/10 blur-[170px]"
        animate={reduceMotion ? undefined : { opacity: [0.6, 1, 0.6], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Header */}
        <motion.div
          className="max-w-3xl mb-10 sm:mb-12 lg:mb-16"
          variants={headerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">What We Run</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-inter text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
          >
            The Services Behind The{" "}
            <motion.span
              className="text-white/40"
              initial={{ opacity: 0.5 }}
              whileInView={reduceMotion ? undefined : { opacity: [0.5, 1, 0.8] }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, delay: 0.6, ease: "easeOut" }}
            >
              Platform
            </motion.span>
            .
          </motion.h2>
        </motion.div>

        {/* Services table */}
        <motion.div
          className="border border-white/10 bg-[#0e1117]"
          variants={tableVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="grid grid-cols-[auto_1fr_auto] gap-3 sm:gap-4 px-4 sm:px-5 lg:px-7 py-3 border-b border-white/10 font-mono text-[10px] uppercase tracking-wider text-gray-500">
            <span>status</span>
            <span>service</span>
            <span className="hidden sm:block">notes</span>
          </div>

          {SERVICES.map((service, i) => (
            <ServiceRow key={service.name} service={service} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;