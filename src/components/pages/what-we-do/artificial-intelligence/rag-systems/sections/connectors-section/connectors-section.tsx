import { Database } from "lucide-react";
import { motion } from "framer-motion";

const CONNECTORS = [
  { name: "Notion", image: "https://plaxonic.com/logos/sources/notion.svg", x: 50, y: 10 },
  { name: "Slack", image: "https://plaxonic.com/logos/sources/slack.svg", x: 70, y: 15.359 },
  { name: "Google Drive", image: "https://plaxonic.com/logos/sources/gdrive.svg", x: 84.641, y: 30 },
  { name: "Confluence", image: "https://plaxonic.com/logos/sources/confluence.svg", x: 90, y: 50 },
  { name: "Salesforce", image: "https://plaxonic.com/logos/sources/salesforce.svg", x: 84.641, y: 70 },
  { name: "Dropbox", image: "https://plaxonic.com/logos/sources/dropbox.svg", x: 70, y: 84.641 },
  { name: "GitHub", image: "https://plaxonic.com/logos/sources/github.svg", x: 50, y: 90 },
  { name: "Jira", image: "https://plaxonic.com/logos/sources/jira.svg", x: 30, y: 84.641 },
  { name: "Zendesk", image: "https://plaxonic.com/logos/sources/zendesk.svg", x: 15.359, y: 70 },
  { name: "SharePoint", image: "https://plaxonic.com/logos/sources/sharepoint.svg", x: 10, y: 50 },
  { name: "Websites", image: "https://plaxonic.com/logos/sources/websites.svg", x: 15.359, y: 30 },
  { name: "PDFs & docs", image: "https://plaxonic.com/logos/sources/pdf.svg", x: 30, y: 15.359 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const logoReveal = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

const ConnectorsSection = () => {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-32">
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
              Connect Everything
            </span>
          </div>

          <h2 className="font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Every Source, One{" "}
            <span className="text-gray-300">Index</span>.
          </h2>

          <p className="mt-6 text-sm leading-relaxed text-gray-600 sm:mt-7 sm:text-base md:text-lg">
            Your knowledge is scattered across a dozen tools. We connect them,
            keep them in sync, and unify them into a single searchable index,
            with permissions respected.
          </p>
        </motion.div>

        {/* Desktop connector diagram */}
        <div className="relative mx-auto hidden aspect-square w-full max-w-[760px] lg:block">
          {/* Connector lines */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <title>Connector lines</title>
            <desc>
              Lines radiating from a central vector store to each connected
              source.
            </desc>

            {CONNECTORS.map((connector, index) => (
              <motion.line
                key={connector.name}
                x1="50"
                y1="50"
                x2={connector.x}
                y2={connector.y}
                stroke="rgba(27,163,221,0.35)"
                strokeWidth="0.3"
                strokeDasharray="1.5 1.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                  ease: "easeOut",
                }}
              />
            ))}
          </svg>

          {/* Central vector store */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex h-20 w-20 items-center justify-center bg-primary text-white">
              <Database className="h-9 w-9" strokeWidth={2} aria-hidden="true" />
            </div>

            <div className="absolute left-1/2 top-full mt-3 w-40 -translate-x-1/2 text-center">
              <div className="font-inter text-base font-bold text-gray-900">
                Vector store
              </div>
              <div className="text-xs text-gray-500">unified index</div>
            </div>
          </motion.div>

          {/* Animated source nodes */}
          <motion.div
            className="absolute inset-0"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {CONNECTORS.map((connector) => (
              <motion.div
                key={connector.name}
                variants={logoReveal}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${connector.x}%`,
                  top: `${connector.y}%`,
                }}
              >
                <div
                  title={connector.name}
                  className="flex h-16 w-16 items-center justify-center border border-gray-200 bg-white shadow-sm transition-colors duration-300 hover:border-primary/40"
                >
                  <img
                    src={connector.image}
                    alt={connector.name}
                    className="h-9 w-9 object-contain"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile and tablet connector list */}
        <motion.div
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:hidden"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {CONNECTORS.map((connector) => (
            <motion.div
              key={connector.name}
              variants={logoReveal}
              className="inline-flex items-center gap-2 border border-gray-200 bg-white px-3.5 py-2.5 text-sm font-medium text-gray-700"
            >
              <img
                src={connector.image}
                alt=""
                className="h-5 w-5 object-contain"
                loading="lazy"
              />
              {connector.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ConnectorsSection;