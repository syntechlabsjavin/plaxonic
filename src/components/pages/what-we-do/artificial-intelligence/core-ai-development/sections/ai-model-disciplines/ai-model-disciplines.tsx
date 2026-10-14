import { motion } from "framer-motion";

const disciplines = [
  {
    number: "01",
    title: "Large Language Models",
    image: "https://plaxonic.com/core-ai/slide1.png",
    description:
      "Fine-tuning, instruction-tuning, and RAG over your own corpus, with evaluation that keeps answers grounded and accurate.",
  },
  {
    number: "02",
    title: "Computer Vision",
    image: "https://plaxonic.com/core-ai/slide8.png",
    description:
      "Detection, segmentation, OCR, and quality inspection models trained on your imagery and tuned for real-world conditions.",
  },
  {
    number: "03",
    title: "Predictive ML",
    image: "https://plaxonic.com/core-ai/slide3.webp",
    description:
      "Forecasting, classification, and scoring models that turn your historical data into decisions you can act on.",
  },
  {
    number: "04",
    title: "Speech & Audio",
    image: "https://plaxonic.com/core-ai/slide7.png",
    description:
      "Transcription, diarization, and voice interfaces tuned to your domain, accents, and acoustic environment.",
  },
  {
    number: "05",
    title: "Recommenders & Ranking",
    image: "https://plaxonic.com/core-ai/slide10.png",
    description:
      "Personalization and ranking systems that learn from behavior to surface the right item at the right moment.",
  },
  {
    number: "06",
    title: "Generative Models",
    image: "https://plaxonic.com/core-ai/slide6.png",
    description:
      "Image, text, and structured generation built with guardrails, so creativity stays useful, on-brand, and safe.",
  },
];

const headingVariants = {
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

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const AIModelDisciplines = () => {
  return (
    <section
      id="disciplines"
      className="overflow-hidden bg-gray-50 py-16 sm:py-20 lg:py-32"
    >
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Heading */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-10 max-w-3xl sm:mb-12 lg:mb-16"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">
              What We Build
            </span>
          </div>

          <h2 className="font-inter text-3xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-4xl md:text-6xl lg:text-7xl">
            Models Across Every{" "}
            <span className="text-gray-300">Modality</span>.
          </h2>

          <p className="mt-7 text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
            Whatever shape your data takes, text, images, audio, or signals,
            we build the model that understands it. Hover to explore each
            discipline.
          </p>
        </motion.div>

        {/* Desktop Expandable Cards */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="hidden h-[460px] gap-2 lg:flex"
        >
          {disciplines.map((item) => (
            <motion.div
              key={item.number}
              variants={cardVariants}
              whileHover={{
                flexGrow: 3,
                transition: {
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
              className="group relative min-w-0 flex-1 cursor-pointer overflow-hidden border border-gray-200"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/10 to-transparent" />

              {/* Card Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="mb-3 font-inter text-3xl font-bold leading-none text-white">
                  {item.number}
                </span>

                <h3 className="min-h-[3.25rem] font-inter text-xl font-bold leading-tight text-white">
                  {item.title}
                </h3>

                {/* Expandable Description */}
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-gray-300 opacity-0 transition-opacity delay-150 duration-500 group-hover:opacity-100">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Top Accent Line */}
              <span className="absolute left-0 right-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile & Tablet Cards */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:hidden"
        >
          {disciplines.map((item) => (
            <motion.div
              key={item.number}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group relative h-64 overflow-hidden border border-gray-200"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/65 via-gray-900/10 to-transparent transition-colors duration-300 group-hover:from-gray-900/80" />

              {/* Card Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="font-inter text-lg font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-gray-300">
                  {item.description}
                </p>
              </div>

              {/* Top Accent Line */}
              <span className="absolute left-0 right-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AIModelDisciplines;