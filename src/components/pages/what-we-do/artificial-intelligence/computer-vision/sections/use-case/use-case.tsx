import { motion, type Variants } from "framer-motion";
import PlaceHolderXImg from "../../../../../../../assets/placeholder-x.svg";


interface UseCase {
  title: string;
  description: string;
  /** Tailwind classes that control grid span + height */
  className: string;
}

const useCases: UseCase[] = [
  {
    title: "Quality Inspection",
    description:
      "Catch defects on the line faster and more consistently than the human eye.",
    className:
      "lg:col-span-2 lg:row-span-2 h-full min-h-[300px] lg:min-h-[420px] lg:h-auto",
  },
  {
    title: "Retail Analytics",
    description: "Footfall, shelf, and queue insight from existing cameras.",
    className: "h-56 lg:h-auto",
  },
  {
    title: "Medical Imaging",
    description: "Assist diagnosis with detection and triage support.",
    className: "h-56 lg:h-auto",
  },
  {
    title: "Security & Safety",
    description: "Detect intrusions, PPE, and hazards in real time.",
    className: "lg:col-span-2 lg:row-span-2 h-56 lg:h-auto",
  },
  {
    title: "Agriculture",
    description: "Crop health and yield from drone and field imagery.",
    className: "h-56 lg:h-auto",
  },
  {
    title: "Logistics",
    description: "Read labels, count pallets, and verify loads automatically.",
    className: "h-56 lg:h-auto",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.08 + i * 0.08,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const UseCases = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-32">
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
              In The Field
            </span>
          </div>
          <h2 className="font-inter text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.05]">
            Cameras, Put To <span className="text-gray-300">Work</span>.
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 lg:auto-rows-[200px]">
          {useCases.map((item, index) => (
            <motion.div
              key={item.title}
              className={`group relative overflow-hidden border border-gray-200 ${item.className}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={index + 1}
            >
              <img
                src={PlaceHolderXImg}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/25 to-transparent" />

              {/* Corner accents (appear on hover) */}
              <span className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-primary-light opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-primary-light opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="font-inter text-lg lg:text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mt-2 max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 overflow-hidden transition-all duration-500">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;