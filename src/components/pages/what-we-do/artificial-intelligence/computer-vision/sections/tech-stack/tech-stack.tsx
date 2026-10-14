import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

type TabId = "frameworks" | "models" | "deploy";

interface TechItem {
  name: string;
  logo: string;
}

const tabs: { id: TabId; label: string }[] = [
  { id: "frameworks", label: "Frameworks" },
  { id: "models", label: "Models" },
  { id: "deploy", label: "Deploy & Data" },
];

const techByTab: Record<TabId, TechItem[]> = {
  frameworks: [
    { name: "OpenCV", logo: "https://plaxonic.com/logos/cv/opencv.svg" },
    { name: "PyTorch", logo: "https://plaxonic.com/logos/ai/pytorch.svg" },
    {
      name: "TensorFlow",
      logo: "https://plaxonic.com/logos/ai/tensorflow.svg",
    },
    { name: "MediaPipe", logo: "https://plaxonic.com/logos/cv/mediapipe.svg" },
  ],
  models: [
    { name: "YOLO", logo: "https://plaxonic.com/logos/cv/ultralytics.svg" },
    { name: "Detectron2", logo: "" },
    { name: "SAM", logo: "" },
    { name: "CLIP", logo: "https://plaxonic.com/logos/ai/huggingface.svg" },
  ],
  deploy: [
    { name: "ONNX", logo: "https://plaxonic.com/logos/cv/onnx.svg" },
    { name: "Nvidia", logo: "https://plaxonic.com/logos/ai/nvidia.svg" },
    { name: "Roboflow", logo: "https://plaxonic.com/logos/cv/roboflow.svg" },
    { name: "Python", logo: "https://plaxonic.com/logos/tech/python.svg" },
  ],
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: 0.08 + i * 0.06,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const gridVariants: Variants = {
  enter: { opacity: 0, y: 12 },
  center: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const TechStack = () => {
  const [activeTab, setActiveTab] = useState<TabId>("frameworks");
  const items = techByTab[activeTab];

  return (
    <section className="relative w-full bg-gray-50 py-16 sm:py-20 lg:py-32 overflow-hidden">
      {/* Soft glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] max-w-full rounded-full bg-primary/[0.05] blur-[150px]" />

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 relative z-[2]">
        {/* Header */}
        <motion.div
          className="text-center mb-12 lg:mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
        >
          <h2 className="font-inter text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-4">
            Built On What The Field <span className="text-primary">Trusts</span>
            .
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Battle-tested vision frameworks and models, chosen to fit your
            accuracy, speed, and deployment needs.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-x-1 gap-y-2 mb-12 border-b border-gray-200">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-5 py-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] transition-colors duration-300 ${
                  isActive
                    ? "text-gray-900"
                    : "text-gray-400 hover:text-gray-700"
                }`}
              >
                {tab.label}
                {isActive && (
                  <motion.span
                    layoutId="tech-tab-underline"
                    className="absolute left-3 right-3 -bottom-px h-[2px] bg-primary"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Logo grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-5"
            variants={gridVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {items.map((item, index) => (
              <motion.div
                key={item.name}
                className="group flex flex-col items-center justify-center gap-4 min-h-[150px] bg-white border border-gray-200 hover:border-primary/50 hover:bg-gray-50 transition-colors duration-300 px-4 py-7"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                {item.logo ? (
                  <div className="flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={item.logo}
                      alt={`${item.name} logo`}
                      loading="lazy"
                      className="w-9 h-9 object-contain"
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="w-10 h-10 rounded-md bg-primary/10 text-primary font-semibold text-sm flex items-center justify-center">
                      {item.name.slice(0, 2)}
                    </span>
                  </div>
                )}
                <span className="text-gray-900 text-sm font-medium text-center leading-snug">
                  {item.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TechStack;
