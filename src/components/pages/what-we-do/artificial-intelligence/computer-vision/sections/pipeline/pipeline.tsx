import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import PlaceHolderXImg from "../../../../../../../assets/placeholder-x.svg";


interface PipelineStep {
  number: string;
  title: string;
  description: string;
  imageFilter?: string;
  overlay?: React.ReactNode;
}

const steps: PipelineStep[] = [
  {
    number: "01",
    title: "Capture",
    description: "A raw frame from a camera, file, or stream.",
  },
  {
    number: "02",
    title: "Preprocess",
    description: "Resize, normalize, and denoise for the model.",
    imageFilter: "grayscale(1) contrast(1.15)",
  },
  {
    number: "03",
    title: "Detect",
    description: "The model locates and labels what matters.",
    overlay: (
      <>
        <span
          className="absolute border-2 border-primary"
          style={{ left: "20%", top: "24%", width: "34%", height: "52%" }}
        />
        <span
          className="absolute border-2 border-primary"
          style={{ left: "60%", top: "40%", width: "26%", height: "40%" }}
        />
      </>
    ),
  },
  {
    number: "04",
    title: "Interpret",
    description: "Outputs become structured, usable signal.",
    imageFilter: "saturate(1.2)",
    overlay: (
      <span
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(27, 163, 221, 0.45), transparent)",
          mixBlendMode: "screen",
        }}
      />
    ),
  },
  {
    number: "05",
    title: "Act",
    description: "A decision triggers in your system, in real time.",
    overlay: (
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="bg-primary text-white text-xs font-bold px-3 py-1.5 font-mono">
          ALERT → routed
        </span>
      </span>
    ),
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
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

const Pipeline = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-32 overflow-hidden">
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
              The Pipeline
            </span>
          </div>
          <h2 className="font-inter text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.05]">
            From Pixels To <span className="text-gray-300">Decisions</span>.
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-4 lg:gap-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="flex-1 flex flex-col lg:flex-row lg:items-center"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={index + 1}
            >
              {/* Card */}
              <div className="flex-1 border border-gray-200 bg-white overflow-hidden">
                <div className="relative h-36 overflow-hidden bg-gray-900">
                  <img
                    src={PlaceHolderXImg}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                    style={
                      step.imageFilter
                        ? { filter: step.imageFilter }
                        : undefined
                    }
                  />
                  {step.overlay}
                  <span className="absolute top-2 left-2 font-mono text-[10px] text-white/80 bg-black/50 px-1.5 py-0.5">
                    {step.number}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-inter text-base font-bold text-gray-900 mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-[13px] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Arrow (desktop only, not after last step) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center w-8 flex-shrink-0">
                  <ArrowRight className="w-5 h-5 text-gray-300" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pipeline;