import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import PlaceHolderXImg from "../../../../../../../assets/placeholder-x.svg";

const detections = [
  {
    label: "car 95%",
    style: { left: "34.5%", top: "74.5%", width: "7.5%", height: "8%" },
  },
  {
    label: "person 97%",
    style: { left: "41.5%", top: "73%", width: "3.2%", height: "11.5%" },
  },
  {
    label: "car 96%",
    style: { left: "75%", top: "76%", width: "14%", height: "13%" },
  },
  {
    label: "traffic light 91%",
    style: { left: "37.5%", top: "46%", width: "3.5%", height: "7%" },
  },
] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.15 + i * 0.12,
      ease: [0.22, 1, 0.36, 1] as const, // ← fix
    },
  }),
};

const boxVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.6 + i * 0.15,
      ease: "easeOut",
    },
  }),
};

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#070809] min-h-[680px] lg:min-h-[800px] flex">
      {/* Background image + overlays */}
      <div className="absolute inset-0">
        <div className="relative overflow-hidden h-full w-full">
          <img
            src={PlaceHolderXImg}
            alt="Street scene analyzed by computer vision"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />

          {/* Scan line */}
          <motion.div
            aria-hidden="true"
            className="absolute left-0 right-0 h-px bg-primary-light/70 shadow-[0_0_18px_2px_rgba(79,184,230,0.5)]"
            initial={{ top: "0%" }}
            animate={{ top: "93.7277%" }}
            transition={{
              duration: 3.2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          {/* Detection boxes */}
          {detections.map((item, i) => (
            <motion.div
              key={item.label}
              className="absolute border-2 border-primary"
              style={item.style}
              variants={boxVariants}
              initial="hidden"
              animate="visible"
              custom={i}
            >
              <span className="absolute -top-0.5 -left-0.5 w-2 h-2 border-t-2 border-l-2 border-white" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 border-t-2 border-r-2 border-white" />
              <span className="absolute -bottom-0.5 -left-0.5 w-2 h-2 border-b-2 border-l-2 border-white" />
              <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 border-b-2 border-r-2 border-white" />

              <span className="absolute -top-6 left-0 inline-flex items-center gap-1.5 bg-primary text-gray-900 text-[10px] font-bold px-1.5 py-0.5 whitespace-nowrap font-mono">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#070809] via-[#070809]/15 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#070809]/40 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-[1800px] mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-16 flex flex-col">
        <motion.div
          className="flex self-start items-center gap-3 mt-28 lg:mt-32"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <span className="text-primary text-[10px] xs:text-xs font-semibold tracking-[0.2em] uppercase">
            Artificial Intelligence / AI Development / Computer Vision
          </span>
        </motion.div>

        <div className="mt-auto pb-16 lg:pb-24 max-w-3xl">
          <motion.h1
            className="font-inter text-[2.25rem] xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.02]"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Teach Machines
            <br />
            <span className="bg-gradient-to-r from-primary-light via-primary to-primary-light bg-clip-text text-primary">
              To See.
            </span>
          </motion.h1>

          <motion.p
            className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mt-6 sm:mt-8 max-w-2xl"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            We build computer vision systems that detect, read, and understand
            the world in real time, turning cameras and images into decisions
            your business can act on.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row sm:flex-wrap gap-4 mt-8 sm:mt-10"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <button
              type="button"
              className="group inline-flex items-center justify-center sm:justify-start gap-3 w-full sm:w-auto bg-primary text-white font-semibold text-base px-8 py-3.5 hover:bg-primary-dark transition-colors"
            >
              Show Us Your Footage
              <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </button>

            <a
              href="/contact"
              className="inline-flex items-center justify-center sm:justify-start gap-2 w-full sm:w-auto border-2 border-white/30 text-white font-semibold text-base px-8 py-3.5 hover:bg-white hover:text-gray-900 transition-colors"
            >
              What We See
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;