import { Cpu, Video, Zap } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const flowSteps = [
  {
    icon: Video,
    title: "Camera feed",
    subtitle: "Live stream or file",
  },
  {
    icon: Cpu,
    title: "On-device model",
    subtitle: "Inference at the edge",
  },
  {
    icon: Zap,
    title: "Instant action",
    subtitle: "Alert, gate, or log",
  },
] as const;

const platforms = [
  "NVIDIA Jetson",
  "Mobile (iOS / Android)",
  "Raspberry Pi",
  "Cloud GPU",
  "On-prem server",
  "Browser (WASM)",
] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: 0.1 + i * 0.12,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const EdgeSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#0a0c10] py-16 sm:py-20 md:py-24 lg:py-36">
      {/* Soft glow */}
      <div className="pointer-events-none absolute top-[-15%] right-[-5%] w-[560px] h-[460px] max-w-full rounded-full bg-primary/10 blur-[170px]" />

      <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.5fr] gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Left – copy */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
                Real-Time
              </span>
            </div>
            <h2 className="font-inter text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Runs Where The <span className="text-white/40">Camera Is</span>.
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
              Many vision problems cannot wait for a round trip to the cloud. We
              optimize and deploy models to run on the edge, in milliseconds, so
              decisions happen at the moment they matter, even with no
              connection.
            </p>
          </motion.div>

          {/* Right – flow + platforms */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={1}
          >
{/* Flow cards */}
<div className="relative flex items-stretch">
  {flowSteps.map((step, index) => {
    const Icon = step.icon;
    const isLast = index === flowSteps.length - 1;

    return (
      <div key={step.title} className="flex-1 flex items-center">
        <div className="flex-1 border border-white/10 bg-white/[0.03] p-3 sm:p-6 text-center">
          <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto bg-primary/15 text-primary flex items-center justify-center mb-3 sm:mb-4">
            <Icon className="w-6 h-6" />
          </div>
          <div className="text-white font-semibold text-sm">{step.title}</div>
          <div className="text-gray-500 text-xs mt-1">{step.subtitle}</div>
        </div>

        {/* Animated connector line */}
        {!isLast && (
          <div className="w-4 sm:w-12 h-[2px] bg-white/10 relative overflow-hidden flex-shrink-0">
            <motion.span
              className="absolute top-0 bottom-0 w-1/2 bg-primary"
              initial={{ left: "-50%" }}
              animate={{ left: "100%" }}
              transition={{
                duration: 1.6,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        )}
      </div>
    );
  })}
</div>

            {/* Latency callout */}
            <div className="flex items-center justify-center gap-3 mt-6 mb-8">
              <span className="font-inter text-2xl sm:text-3xl font-bold text-primary">
                &lt; 30ms
              </span>
              <span className="text-gray-500 text-sm">
                end-to-end on edge hardware
              </span>
            </div>

            {/* Platform chips */}
            <div className="flex flex-wrap gap-2.5">
              {platforms.map((platform) => (
                <span
                  key={platform}
                  className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.03] px-3.5 py-2 text-gray-300 text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-primary" />
                  {platform}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EdgeSection;