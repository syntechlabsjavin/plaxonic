
import {
  Compass,
  PenTool,
  CodeXml,
  ShieldCheck,
  Rocket,
  ChartNoAxesCombined,
} from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Research",
    description:
      "We analyze your business audience, market, and business objectives to define a winning mobile app development strategy.",
    icon: Compass,
  },
  {
    number: "02",
    title: "UX/UI Design",
    description:
      "Our designer prepares a platform-specific design with interactive prototypes, user testing, and pixel-perfect interfaces.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Agile Development",
    description:
      "Our developers use sprint-based development with continuous builds and beta testing via TestFlight and Play Console.",
    icon: CodeXml,
  },
  {
    number: "04",
    title: "Quality Assurance",
    description:
      "Our quality analyst team tests the mobile application across real devices, runs automated regression, profiles performance, and conducts security audits.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "App Store Launch",
    description:
      "Our team handles App Store and Play Store submissions, ASO optimization, and phased rollout strategies.",
    icon: Rocket,
  },
  {
    number: "06",
    title: "Growth & Support",
    description:
      "After the mobile app launch, we provide post-launch analytics, crash monitoring, feature updates, A/B testing, and ongoing optimization.",
    icon: ChartNoAxesCombined,
  },
];

const OurProcess = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gray-50 py-16 sm:py-20 lg:py-32">
      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section heading */}
        <div className="mb-10 max-w-3xl sm:mb-14 lg:mb-20">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Our Process
            </span>
          </div>

          <h2 className="mb-8 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-6xl lg:text-7xl">
            How We <span className="text-gray-300">Build</span>.
          </h2>

          <div className="flex gap-4">
            <div className="w-[3px] flex-shrink-0 bg-primary" />

            <p className="text-sm text-gray-600 sm:text-base md:text-lg">
              Our end-to-end custom mobile app development services turn your
              idea into a launch-ready product.
            </p>
          </div>
        </div>

        {/* Process cards */}
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
          {PROCESS_STEPS.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative border border-gray-200 bg-white px-7 pb-8 pt-12 transition-colors duration-300 hover:border-primary/40"
              >
                {/* Number badge */}
                <div className="absolute -top-6 left-7 flex h-14 w-14 items-center justify-center bg-primary text-white shadow-lg shadow-primary/25 transition-colors duration-300 group-hover:bg-primary-dark">
                  <span className="font-inter text-xl font-bold tabular-nums">
                    {step.number}
                  </span>
                </div>

                {/* Decorative icon */}
                <Icon
                  size={32}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="absolute right-6 top-6 text-gray-200 transition-colors duration-300 group-hover:text-primary/40"
                />

                {/* Card content */}
                <h3 className="mb-3 mt-2 font-inter text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-primary sm:text-xl lg:text-2xl">
                  {step.title}
                </h3>

                <p className="max-w-sm text-sm leading-relaxed text-gray-600 lg:text-base">
                  {step.description}
                </p>

                {/* Hover underline */}
                <span className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
