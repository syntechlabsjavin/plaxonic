import { motion } from "framer-motion";
import Collage1 from "../../../../../../../assets/machine-learning/collage-1.png";
import Collage2 from "../../../../../../../assets/machine-learning/collage-2.png";

const dataPrinciples = [
  {
    number: "01",
    text: "We audit, clean, and label the data before a single model is trained.",
  },
  {
    number: "02",
    text: "We engineer the features that actually carry signal, not just the easy ones.",
  },
  {
    number: "03",
    text: "We watch for leakage, bias, and drift, so the model is honest about what it knows.",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const DataFirst = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-center">
          {/* Image Collage */}
          <motion.div
            className="relative h-[340px] xs:h-[420px] sm:h-[480px] order-2 lg:order-1"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Top Image */}
            <motion.div
              className="absolute top-0 left-0 w-[68%] h-[64%] overflow-hidden border border-gray-200"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.img
                src={Collage1}
                alt="Colorful data signal patterns"
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </motion.div>

            {/* Bottom Image */}
            <motion.div
              className="absolute bottom-0 right-0 w-[60%] h-[58%] overflow-hidden border border-gray-200 shadow-[0_-20px_40px_rgba(0,0,0,0.08)]"
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: "easeOut",
              }}
            >
              <motion.img
                src={Collage2}
                alt="Data flow lines"
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </motion.div>

            {/* Data Quality Badge */}
            <motion.div
              className="absolute bottom-6 left-2 bg-primary text-white px-5 py-3"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: 0.35,
                ease: "easeOut",
              }}
              whileHover={{ y: -4 }}
            >
              <div className="font-mono text-xs">garbage in,</div>
              <div className="font-inter text-lg font-bold leading-tight">
                garbage out.
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="order-1 lg:order-2"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
                Data First
              </span>
            </div>

            <h2 className="font-inter text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
              A Model Is Only As Good As Its{" "}
              <span className="text-gray-300">Data</span>.
            </h2>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-9">
              The accuracy you see in a demo lives or dies on the data behind
              it. Most of the real work in machine learning is not the model,
              it is everything upstream of it. That is where we spend our
              effort, so your predictions hold up on the cases that matter.
            </p>

            {/* Data Principles */}
            <motion.div
              className="space-y-0"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.12,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {dataPrinciples.map((principle) => (
                <motion.div
                  key={principle.number}
                  variants={{
                    hidden: { opacity: 0, x: 18 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.5,
                        ease: "easeOut" as const,
                      },
                    },
                  }}
                  className="group flex items-start gap-4 py-4 border-t border-gray-200 last:border-b"
                >
                  <span className="font-mono text-sm text-primary font-bold flex-shrink-0 mt-0.5">
                    {principle.number}
                  </span>

                  <p className="text-gray-700 text-base leading-relaxed transition-colors duration-300 group-hover:text-gray-900">
                    {principle.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DataFirst;