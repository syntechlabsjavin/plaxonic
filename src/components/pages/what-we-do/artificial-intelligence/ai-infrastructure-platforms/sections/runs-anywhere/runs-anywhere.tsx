import { motion, type Variants } from "framer-motion";
import { Cloud, Building2, Network, Cpu } from "lucide-react";

const RunsAnywhere = () => {
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

  const platforms = [
    {
      icon: Cloud,
      title: "Cloud",
      description: "Elastic GPUs and managed services on the provider you prefer.",
      logos: [
        { src: "https://plaxonic.com/logos/tech/aws.svg", alt: "AWS" },
        { src: "https://plaxonic.com/logos/tech/azure.svg", alt: "Azure" },
        { src: "https://plaxonic.com/logos/tech/gcp.svg", alt: "GCP" },
      ],
    },
    {
      icon: Building2,
      title: "On-prem",
      description: "Your hardware, your data center, full control and data residency.",
      logos: [
        { src: "https://plaxonic.com/logos/tech/kubernetes.svg", alt: "Kubernetes" },
        { src: "https://plaxonic.com/logos/ai/nvidia.svg", alt: "NVIDIA" },
      ],
    },
    {
      icon: Network,
      title: "Hybrid",
      description: "Burst to cloud for peaks, keep sensitive workloads at home.",
      logos: [
        { src: "https://plaxonic.com/logos/tech/kubernetes.svg", alt: "Kubernetes" },
        { src: "https://plaxonic.com/logos/tech/docker.svg", alt: "Docker" },
      ],
    },
    {
      icon: Cpu,
      title: "Edge",
      description: "Run inference on-device and at the edge, close to the data.",
      logos: [
        { src: "https://plaxonic.com/logos/ai/nvidia.svg", alt: "NVIDIA" },
        { src: "https://plaxonic.com/logos/cv/onnx.svg", alt: "ONNX" },
      ],
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
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
              Runs Anywhere
            </span>
          </motion.div>

          <motion.h2
            className="font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-7xl lg:leading-[1.05]"
            variants={itemVariants}
          >
            Your Platform, Your{" "}
            <span className="text-gray-300">Ground</span>.
          </motion.h2>

          <motion.p
            className="mt-7 text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg"
            variants={itemVariants}
          >
            We are not tied to one provider or place. We build portable platforms
            so you choose where your AI runs, and change your mind later without
            a rewrite.
          </motion.p>
        </motion.div>

        {/* Platform grid */}
        <motion.div
          className="grid grid-cols-1 gap-px border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <motion.div
                key={platform.title}
                className="flex flex-col bg-white p-6 sm:p-7 lg:p-8"
                variants={cardVariants}
                whileHover={{
                  backgroundColor: "rgba(249, 250, 251, 1)",
                  transition: { duration: 0.25 },
                }}
              >
                <motion.span
                  className="mb-5 flex h-12 w-12 items-center justify-center bg-primary/10 text-primary"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.3 + index * 0.1,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                >
                  <Icon className="h-6 w-6" />
                </motion.span>

                <h3 className="font-inter mb-2 text-xl font-bold text-gray-900">
                  {platform.title}
                </h3>

                <p className="flex-1 text-sm leading-relaxed text-gray-600">
                  {platform.description}
                </p>

                <div className="mt-6 flex items-center gap-2.5 border-t border-gray-100 pt-5">
                  {platform.logos.map((logo) => (
                    <img
                      key={logo.src}
                      src={logo.src}
                      alt={logo.alt}
                      className="h-6 w-6 object-contain opacity-70 grayscale"
                      loading="lazy"
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default RunsAnywhere;