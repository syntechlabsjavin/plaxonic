import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeroBgVideo from "../../../../../../../assets/machine-learning/hero.mp4";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#070809] min-h-[640px] lg:min-h-[760px] flex flex-col">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70"
      >
        <source src={HeroBgVideo} type="video/mp4" />
      </video>

      {/* Background Overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070809] via-[#070809]/45 to-[#070809]/65" />

      <div className="pointer-events-none absolute bottom-[-25%] left-[-5%] w-[680px] h-[520px] rounded-full bg-primary/15 blur-[180px]" />

      {/* Breadcrumb */}
      <div className="relative z-10 max-w-[1800px] mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-16 pt-28 sm:pt-32 lg:pt-32">
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase break-words">
            Artificial Intelligence / AI Development / Machine Learning
          </span>
        </motion.div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1800px] mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-16 mt-auto pb-16 lg:pb-24">
        <motion.h1
          className="font-inter text-[2.25rem] xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.02] max-w-4xl"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: "easeOut",
          }}
        >
          Find The Pattern.
          <br />
          <span className="bg-gradient-to-r from-primary-light via-primary to-primary-light bg-clip-text text-primary">
            Predict The Future.
          </span>
        </motion.h1>

        <motion.div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mt-9"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.35,
            ease: "easeOut",
          }}
        >
          {/* Description */}
          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
            We build machine learning systems that turn your data into
            forecasts, scores, and decisions, accurate in the lab and
            dependable in production.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 flex-shrink-0">
            <motion.button
              type="button"
              className="group inline-flex items-center justify-center gap-3 bg-primary text-white font-semibold text-base px-8 py-3.5 hover:bg-primary-dark transition-colors w-full sm:w-auto"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25 }}
            >
              Model My Data

              <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </motion.button>

            <motion.a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/25 text-white font-semibold text-base px-8 py-3.5 hover:bg-white hover:text-gray-900 transition-colors w-full sm:w-auto"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25 }}
            >
              What We Predict
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;