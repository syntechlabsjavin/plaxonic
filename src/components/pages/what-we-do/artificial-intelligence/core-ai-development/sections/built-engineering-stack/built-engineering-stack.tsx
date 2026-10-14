import { motion } from "framer-motion";

const techStack = [
  {
    label: "languages:",
    technologies: [
      { name: "Python", logo: "https://plaxonic.com/logos/tech/python.svg" },
      { name: "Rust" },
      { name: "C++" },
    ],
  },
  {
    label: "deep_learning:",
    technologies: [
      { name: "PyTorch", logo: "https://plaxonic.com/logos/ai/pytorch.svg" },
      { name: "TensorFlow", logo: "https://plaxonic.com/logos/ai/tensorflow.svg" },
      { name: "JAX" },
    ],
  },
  {
    label: "llm_tooling:",
    technologies: [
      { name: "Hugging Face", logo: "https://plaxonic.com/logos/ai/huggingface.svg" },
      { name: "LangChain", logo: "https://plaxonic.com/logos/ai/langchain-w.svg" },
      { name: "vLLM" },
    ],
  },
  {
    label: "data:",
    technologies: [
      { name: "pgvector", logo: "https://plaxonic.com/logos/tech/postgresql.svg" },
      { name: "Redis", logo: "https://plaxonic.com/logos/tech/redis.svg" },
      { name: "Spark" },
    ],
  },
  {
    label: "serving:",
    technologies: [{ name: "FastAPI" }, { name: "ONNX" }, { name: "Triton" }],
  },
  {
    label: "mlops:",
    technologies: [
      { name: "MLflow", logo: "https://plaxonic.com/logos/ai/mlflow.svg" },
      { name: "Ray", logo: "https://plaxonic.com/logos/ai/ray.svg" },
      { name: "Docker", logo: "https://plaxonic.com/logos/tech/docker.svg" },
      { name: "Kubernetes", logo: "https://plaxonic.com/logos/tech/kubernetes.svg" },
    ],
  },
  {
    label: "cloud:",
    technologies: [
      { name: "AWS", logo: "https://plaxonic.com/logos/tech/aws.svg" },
      { name: "Azure", logo: "https://plaxonic.com/logos/tech/azure.svg" },
      { name: "Google Cloud", logo: "https://plaxonic.com/logos/tech/gcp.svg" },
    ],
  },
];

const contentVariants = {
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

const stackVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const rowVariants = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const BuiltEngineeringStack = () => {
  return (
    <section className="relative overflow-hidden bg-[#0a0c10] py-16 sm:py-20 lg:py-32">
      {/* Background Image */}
      <img
        src="/core-ai/built-waves.webp"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70"
      />

      {/* Background Gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0a0c10]/90 via-[#0a0c10]/50 to-transparent" />

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute bottom-[-20%] left-[-5%] h-[460px] w-[560px] max-w-full rounded-full bg-primary/10 blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
          {/* Left Content */}
          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">
                Engineering Stack
              </span>
            </div>

            <h2 className="mb-6 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-6xl">
              Built Like Real{" "}
              <span className="text-white/40">Software</span>.
            </h2>

            <p className="text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg">
              Notebooks do not survive contact with production. We build
              models with the same rigor as any critical system: versioned,
              tested, observable, and reproducible end to end.
            </p>
          </motion.div>

          {/* Engineering Stack Panel */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.75,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden border border-white/10 bg-[#0e1117]"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary/60" />
              </div>

              <span className="font-mono text-[11px] text-gray-500">
                stack.yaml
              </span>
            </div>

            {/* Stack Content */}
            <motion.div
              variants={stackVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="space-y-3.5 p-5 lg:p-7"
            >
              {techStack.map((category) => (
                <motion.div
                  key={category.label}
                  variants={rowVariants}
                  className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4"
                >
                  {/* YAML Category */}
                  <span className="flex-shrink-0 font-mono text-sm text-primary sm:w-36">
                    {category.label}
                  </span>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((technology) => (
                      <motion.span
                        key={technology.name}
                        whileHover={{
                          y: -2,
                          borderColor: "rgba(255,255,255,0.25)",
                          transition: { duration: 0.2 },
                        }}
                        className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[13px] font-medium text-gray-200"
                      >
                        {technology.logo ? (
                          <img
                            src={technology.logo}
                            alt=""
                            aria-hidden="true"
                            loading="lazy"
                            className="h-4 w-4 flex-shrink-0 object-contain"
                          />
                        ) : (
                          <span className="h-1.5 w-1.5 flex-shrink-0 bg-primary-light" />
                        )}

                        {technology.name}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BuiltEngineeringStack;