import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import DeptSalesImg from "../../../../../../../assets/what-we-do/artificial-intelligence/dept-sales.webp";
import PlaceHolderX from "../../../../../../../assets/placeholder-x.svg";

type Department = {
  name: string;
  heading: string;
  description: string;
  image: string;
  agent: string;
};

const departments: Department[] = [
  {
    name: "Sales",
    heading: "Pipeline That Fills Itself",
    description:
      "Research, outreach, and follow-up handled, so reps spend their time closing, not prospecting.",
    image: DeptSalesImg,
    agent: "sales",
  },
  {
    name: "Support",
    heading: "Support That Never Sleeps",
    description:
      "Resolve customer issues, manage tickets, and deliver timely responses across your support channels.",
    image: PlaceHolderX,
    agent: "support",
  },
  {
    name: "Marketing",
    heading: "Content That Keeps Moving",
    description:
      "Research topics, create on-brand content, and coordinate campaigns without slowing your team down.",
    image: PlaceHolderX,
    agent: "marketing",
  },
  {
    name: "Operations",
    heading: "Operations On Autopilot",
    description:
      "Coordinate workflows, automate repetitive tasks, and keep everyday business processes running smoothly.",
    image: PlaceHolderX,
    agent: "operations",
  },
  {
    name: "HR & People",
    heading: "A Better Employee Experience",
    description:
      "Simplify onboarding, guide employees, and handle routine people operations from day one.",
    image: PlaceHolderX,
    agent: "hr",
  },
];

const AgentDepartment = () => {
  const [activeDepartment, setActiveDepartment] = useState("Sales");

  const activeData =
    departments.find((department) => department.name === activeDepartment) ??
    departments[0];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Heading */}
        <motion.div
          className="mb-8 max-w-3xl sm:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              By Team
            </span>
          </div>

          <h2 className="font-inter text-3xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-7xl">
            An App For Every{" "}
            <span className="text-gray-300">Function</span>.
          </h2>
        </motion.div>

        {/* Department Tabs */}
        <motion.div
          className="mb-6 flex flex-wrap gap-2 border-b border-gray-200 sm:mb-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          role="tablist"
          aria-label="Departments"
        >
          {departments.map((department) => {
            const isActive = activeDepartment === department.name;

            return (
              <button
                key={department.name}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveDepartment(department.name)}
                className={`-mb-px border-b-2 px-4 py-3 text-sm font-semibold transition-colors duration-300 sm:px-5 ${
                  isActive
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-900"
                }`}
              >
                {department.name}
              </button>
            );
          })}
        </motion.div>

        {/* Active Department Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeData.name}
            className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            role="tabpanel"
          >
            {/* Text Content */}
            <div className="lg:pr-6">
              <h3 className="mb-4 font-inter text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
                {activeData.heading}
              </h3>

              <p className="mb-6 text-sm leading-relaxed text-gray-600 sm:mb-7 sm:text-base md:text-lg">
                {activeData.description}
              </p>

              <button
                type="button"
                onClick={() =>
                  window.location.assign(
                    `/contact?agent=${encodeURIComponent(
                      `${activeData.agent} agent`
                    )}`
                  )
                }
                className="group inline-flex items-center gap-2 font-semibold text-primary"
              >
                Deploy The {activeData.name} Agent
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>
            </div>

            {/* Department Image */}
            <motion.div
              className="relative overflow-hidden border border-gray-200"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.08 }}
            >
              <img
                src={activeData.image}
                alt={`${activeData.name} agent app`}
                className="block aspect-[16/10] w-full object-cover"
                loading="lazy"
              />

              <div className="absolute left-4 top-4 inline-flex items-center gap-2 bg-black/55 px-3 py-1.5 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                <span className="font-mono text-[11px] text-white">
                  {activeData.agent}-agent · live
                </span>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AgentDepartment;