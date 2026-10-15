import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Sparkles,
  Send,
} from "lucide-react";
import DockedBg from "../../../../../../../assets/what-we-do/artificial-intelligence/docked-bg.png";

const DockedAgent = () => {
  return (
    <section className="relative overflow-hidden bg-[#0a0c10] py-16 sm:py-20 md:py-24 lg:py-36">
      {/* Background */}
      <img
        src={DockedBg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70"
      />

      <div className="pointer-events-none absolute right-[-5%] top-[-15%] h-[460px] w-[560px] rounded-full bg-primary/10 blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Heading */}
        <motion.div
          className="mb-10 max-w-3xl sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-light">
              In Your Product
            </span>
          </div>

          <h2 className="font-inter text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Docked Right Where You{" "}
            <span className="text-white/40">Work</span>.
          </h2>

          <p className="mt-6 text-sm leading-relaxed text-gray-400 sm:mt-7 sm:text-base md:text-lg">
            The best agent app does not pull you into another tab. We embed it
            inside the app your team already lives in, so it acts on what is on
            screen, in context.
          </p>
        </motion.div>

        {/* Browser / Product Preview */}
        <motion.div
          className="overflow-hidden border border-white/10 bg-[#0e1117]"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
        >
          {/* Browser Header */}
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />

            <span className="ml-3 font-mono text-[11px] text-gray-500">
              app.yourcompany.com / dashboard
            </span>
          </div>

          <div className="grid min-h-[360px] grid-cols-1 lg:grid-cols-[1.6fr_1fr]">
            {/* Dashboard */}
            <motion.div
              className="border-b border-white/10 p-5 sm:p-6 lg:border-b-0 lg:border-r lg:p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <div className="mb-6 flex items-center gap-2 text-sm text-gray-400">
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </div>

              {/* Dashboard Metrics */}
              <div className="mb-5 grid grid-cols-3 gap-2 sm:gap-3">
                {["Revenue", "Open deals", "At risk"].map((metric) => (
                  <div
                    key={metric}
                    className="border border-white/10 p-3 sm:p-4"
                  >
                    <div className="mb-2 h-6 w-14 bg-white/10" />
                    <div className="text-[11px] text-gray-500">{metric}</div>
                  </div>
                ))}
              </div>

              {/* Dashboard Rows */}
              <div className="space-y-2.5">
                {[50, 58, 66, 74].map((width, index) => (
                  <motion.div
                    key={width}
                    className="flex items-center gap-3 border border-white/[0.06] px-3 py-2.5"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.35 + index * 0.1,
                    }}
                  >
                    <span className="h-6 w-6 shrink-0 bg-white/10" />
                    <span
                      className="h-2.5 bg-white/10"
                      style={{ width: `${width}%` }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Docked AI Agent */}
            <motion.div
              className="flex flex-col bg-[#0b0e13]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Agent Header */}
              <div className="flex items-center gap-2.5 border-b border-white/10 px-5 py-3.5">
                <span className="flex h-8 w-8 items-center justify-center bg-primary text-white">
                  <Sparkles className="h-4 w-4" />
                </span>

                <span className="text-sm font-semibold text-white">
                  Deals Agent
                </span>

                <motion.span
                  className="ml-auto h-1.5 w-1.5 rounded-full bg-green-400"
                  animate={{ opacity: [1, 0.45, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              {/* Chat Messages */}
              <div className="flex flex-1 flex-col justify-end gap-3 p-5">
                <motion.div
                  className="max-w-[85%] self-end bg-primary px-3.5 py-2.5 text-[13px] text-white"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.65 }}
                >
                  Which deals are at risk this week?
                </motion.div>

                <motion.div
                  className="max-w-[90%] self-start border border-white/10 bg-white/[0.06] px-3.5 py-2.5 text-[13px] leading-relaxed text-gray-200"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.9 }}
                >
                  3 deals slipped. I drafted check-in emails and added tasks for
                  each owner. Want me to send them?

                  <div className="mt-2.5 flex flex-wrap gap-2">
                    <span className="border border-primary-light/40 px-2 py-0.5 text-[11px] text-primary-light">
                      Send all
                    </span>

                    <span className="border border-white/15 px-2 py-0.5 text-[11px] text-gray-400">
                      Review first
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Chat Input Preview */}
              <div className="flex items-center gap-2 border-t border-white/10 px-4 py-3">
                <span className="flex-1 text-sm text-gray-600">
                  Ask the agent...
                </span>

                <span className="flex h-8 w-8 items-center justify-center bg-primary/20 text-primary-light">
                  <Send className="h-4 w-4" />
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DockedAgent;