import {
  Anchor,
  Quote,
  Gauge,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";

const TRUST_SIGNALS = [
  {
    title: "Grounded Span",
    description:
      "Every sentence traces to retrieved text, so nothing is invented.",
    icon: Anchor,
  },
  {
    title: "Inline Citations",
    description:
      "Sources are linked at the claim level, not just listed at the end.",
    icon: Quote,
  },
  {
    title: "Confidence & Abstention",
    description:
      "Low-evidence questions get a careful answer or an honest I do not know.",
    icon: Gauge,
  },
  {
    title: "Freshness",
    description:
      "Re-indexing keeps answers current as your sources change.",
    icon: Clock,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const TrustedAnswerSection = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section heading */}
        <motion.div
          className="mb-10 max-w-3xl sm:mb-12 lg:mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Trust &amp; Evaluation
            </span>
          </div>

          <h2 className="font-inter text-3xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-7xl">
            Anatomy Of A Trusted{" "}
            <span className="text-gray-300">Answer</span>.
          </h2>

          <p className="mt-6 text-sm leading-relaxed text-gray-600 sm:mt-7 sm:text-base md:text-lg">
            A good RAG answer is more than text. We measure and engineer the
            signals that make it trustworthy, then test them continuously
            against your real questions.
          </p>
        </motion.div>

        {/* Answer and trust signals */}
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Example answer card */}
          <motion.div
            className="border border-gray-200 bg-white"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            {/* Card header */}
            <div className="flex items-center justify-between gap-3 border-b border-gray-100 bg-gray-50 px-5 py-3">
              <span className="font-mono text-[11px] text-gray-400">
                answer · q: refund window for enterprise?
              </span>

              <span className="inline-flex shrink-0 items-center gap-1.5 font-mono text-[11px] text-primary">
                <Gauge className="h-3.5 w-3.5" aria-hidden="true" />
                conf 0.93
              </span>
            </div>

            {/* Answer content */}
            <div className="p-6 lg:p-8">
              <p className="text-lg leading-relaxed text-gray-800">
                Enterprise accounts have a{" "}
                <span className="bg-primary/10 px-1 text-gray-900">
                  14-day refund window
                </span>{" "}
                from delivery
                <sup className="font-bold text-primary"> [1]</sup>, extended
                from the standard 5 days
                <sup className="font-bold text-primary"> [2]</sup>.
              </p>

              {/* Source citations */}
              <div className="mt-6 flex flex-wrap gap-2 font-mono text-[11px] text-gray-500">
                <span className="inline-flex items-center gap-1.5 border border-gray-200 px-2 py-1">
                  <Quote
                    className="h-3 w-3 text-primary"
                    aria-hidden="true"
                  />
                  [1] contracts/ent.pdf · p.7
                </span>

                <span className="inline-flex items-center gap-1.5 border border-gray-200 px-2 py-1">
                  <Quote
                    className="h-3 w-3 text-primary"
                    aria-hidden="true"
                  />
                  [2] policy.pdf · p.4
                </span>

                <span className="inline-flex items-center gap-1.5 border border-gray-200 px-2 py-1">
                  <Clock
                    className="h-3 w-3 text-primary"
                    aria-hidden="true"
                  />
                  indexed 2h ago
                </span>
              </div>
            </div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {TRUST_SIGNALS.map((signal) => {
              const SignalIcon = signal.icon;

              return (
                <motion.div key={signal.title} variants={fadeUp}>
                  <div className="mb-2.5 flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary/10 text-primary">
                      <SignalIcon
                        className="h-[18px] w-[18px]"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </span>

                    <h3 className="font-inter text-base font-bold text-gray-900">
                      {signal.title}
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-gray-600">
                    {signal.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedAnswerSection;