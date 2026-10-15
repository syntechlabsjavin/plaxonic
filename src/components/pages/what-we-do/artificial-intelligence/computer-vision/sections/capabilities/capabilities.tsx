import { useState } from "react";
import {
  Layers,
  PersonStanding,
  ScanSearch,
  Tags,
  Type,
} from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import PlaceHolderXImg from "../../../../../../../assets/placeholder-x.svg";


type CapabilityId =
  | "object-detection"
  | "image-classification"
  | "segmentation"
  | "ocr"
  | "pose-estimation";

interface Capability {
  id: CapabilityId;
  title: string;
  description: string;
  icon: React.ElementType;
  preview: {
    imageAlt: string;
    boxes: { label: string; style: React.CSSProperties }[];
    modelLabel: string;
  };
}

const capabilities: Capability[] = [
  {
    id: "object-detection",
    title: "Object Detection",
    description:
      "Locate and label every object in the frame, with a confidence score for each.",
    icon: ScanSearch,
    preview: {
      imageAlt: "Object Detection",
      modelLabel: "model: detect.v3 · running",
      boxes: [
        {
          label: "car 98%",
          style: { left: "27%", top: "30%", width: "46%", height: "40%" },
        },
        {
          label: "windshield 91%",
          style: { left: "38%", top: "31%", width: "24%", height: "11%" },
        },
      ],
    },
  },
  {
    id: "image-classification",
    title: "Image Classification",
    description:
      "Assign the most relevant category to the entire image in a single pass.",
    icon: Tags,
    preview: {
      imageAlt: "Image Classification",
      modelLabel: "model: classify.v2 · running",
      boxes: [
        {
          label: "urban street 94%",
          style: { left: "20%", top: "40%", width: "60%", height: "20%" },
        },
      ],
    },
  },
  {
    id: "segmentation",
    title: "Segmentation",
    description:
      "Draw precise pixel-level masks for every object and region in the scene.",
    icon: Layers,
    preview: {
      imageAlt: "Segmentation",
      modelLabel: "model: segment.v1 · running",
      boxes: [
        {
          label: "road 96%",
          style: { left: "10%", top: "55%", width: "80%", height: "30%" },
        },
        {
          label: "vehicle 92%",
          style: { left: "30%", top: "35%", width: "40%", height: "25%" },
        },
      ],
    },
  },
  {
    id: "ocr",
    title: "OCR & Document AI",
    description:
      "Extract text, tables, and structured fields from images and scanned documents.",
    icon: Type,
    preview: {
      imageAlt: "OCR & Document AI",
      modelLabel: "model: ocr.v4 · running",
      boxes: [
        {
          label: "license plate 99%",
          style: { left: "35%", top: "60%", width: "30%", height: "10%" },
        },
      ],
    },
  },
  {
    id: "pose-estimation",
    title: "Pose Estimation",
    description:
      "Detect human body keypoints and skeleton structure in real time.",
    icon: PersonStanding,
    preview: {
      imageAlt: "Pose Estimation",
      modelLabel: "model: pose.v2 · running",
      boxes: [
        {
          label: "person 97%",
          style: { left: "40%", top: "25%", width: "20%", height: "55%" },
        },
      ],
    },
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.1 + i * 0.1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const previewVariants: Variants = {
  enter: { opacity: 0, scale: 0.97 },
  center: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

const Capabilities = () => {
  const [activeId, setActiveId] = useState<CapabilityId>("object-detection");
  const active = capabilities.find((c) => c.id === activeId)!;

  return (
    <section id="capabilities" className="bg-white py-16 sm:py-20 lg:py-32">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Header */}
        <motion.div
          className="max-w-3xl mb-12 lg:mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
              What We See
            </span>
          </div>
          <h2 className="font-inter text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.05]">
            One Frame, Many <span className="text-gray-300">Questions</span>.
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mt-6 sm:mt-7">
            The same pixels can answer very different questions. Pick a task to
            see how a model reads the scene.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.4fr] gap-8 lg:gap-12">
          {/* Left – capability list */}
          <div className="flex flex-col">
            {capabilities.map((cap) => {
              const isActive = cap.id === activeId;
              const Icon = cap.icon;

              return (
                <button
                  key={cap.id}
                  type="button"
                  onClick={() => setActiveId(cap.id)}
                  className={`group text-left flex items-start gap-4 p-5 lg:p-6 border-l-2 transition-colors duration-300 ${
                    isActive
                      ? "border-l-primary bg-primary/[0.04]"
                      : "border-l-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 flex-shrink-0 mt-0.5 transition-colors ${
                      isActive
                        ? "text-primary"
                        : "text-gray-400 group-hover:text-primary"
                    }`}
                    strokeWidth={1.5}
                  />
                  <div>
                    <h3
                      className={`font-inter text-lg font-bold transition-colors ${
                        isActive ? "text-primary" : "text-gray-900"
                      }`}
                    >
                      {cap.title}
                    </h3>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.p
                          key="desc"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="text-gray-600 text-sm leading-relaxed overflow-hidden"
                        >
                          <span className="block pt-2">{cap.description}</span>
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right – preview panel */}
          <div className="relative border border-gray-200 bg-gray-900 overflow-hidden aspect-[4/3] lg:aspect-auto lg:min-h-[460px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                className="absolute inset-0"
                variants={previewVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <img
                  src={PlaceHolderXImg}
                  alt={active.preview.imageAlt}
                  className="absolute inset-0 h-full w-full object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-black/15" />

                {/* Detection boxes */}
                {active.preview.boxes.map((box) => (
                  <div
                    key={box.label}
                    className="absolute border-2 border-primary"
                    style={box.style}
                  >
                    <span className="absolute -top-6 left-0 bg-primary text-gray-900 text-[10px] font-bold px-1.5 py-0.5 font-mono whitespace-nowrap">
                      {box.label}
                    </span>
                  </div>
                ))}

                {/* Model status badge */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5">
                  <span className="w-1.5 h-1.5 bg-primary animate-pulse" />
                  <span className="font-mono text-[11px] text-white">
                    {active.preview.modelLabel}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;