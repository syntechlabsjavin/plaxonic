import { motion, type Variants } from "framer-motion";
import QuoteBg from "../../../../../../../assets/what-we-do/artificial-intelligence/quote-bg.webp";

const QuoteSection = () => {
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
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="relative w-full overflow-hidden bg-black py-16 sm:py-20 md:py-24 lg:py-40">
      {/* Background image */}
      <img
        src={QuoteBg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.span
            className="font-inter text-5xl leading-none text-primary/40 sm:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            “
          </motion.span>

          <motion.blockquote
            className="-mt-6 font-inter text-2xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
            variants={itemVariants}
          >
            An algorithm can make a decision. It can never be the one{" "}
            <span className="text-primary">held responsible</span> for
            it.
          </motion.blockquote>

          <motion.p
            className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg"
            variants={itemVariants}
          >
            That is why every system we govern has a human owner, a clear line
            of accountability, and the means for a person to understand,
            question, and override what the AI decides.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;