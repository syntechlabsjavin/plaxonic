import {
  Search,
  ShieldCheck,
  Eye,
  Siren,
  RefreshCw,
} from "lucide-react";

const approachSteps = [
  {
    title: "Identify",
    description:
      "Map your assets, attack surface, and risks, so you know exactly what you're defending.",
    icon: Search,
  },
  {
    title: "Protect",
    description:
      "Harden systems, enforce access, and close gaps with controls sized to your real risk.",
    icon: ShieldCheck,
  },
  {
    title: "Detect",
    description:
      "Monitor continuously across your environment to catch threats early, day or night.",
    icon: Eye,
  },
  {
    title: "Respond",
    description:
      "Contain, investigate, and recover fast when an incident hits, with a clear playbook.",
    icon: Siren,
  },
  {
    title: "Recover",
    description:
      "Restore operations, learn from every event, and strengthen defenses for next time.",
    icon: RefreshCw,
  },
];

const OurApproach = () => {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Heading */}
        <div className="mb-10 max-w-3xl sm:mb-14 lg:mb-24">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Our Approach
            </span>
          </div>

          <h2 className="mb-8 font-inter text-[2rem] font-bold leading-[1.1] tracking-tight text-gray-900 xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            A Continuous{" "}
            <span className="text-gray-300">Lifecycle</span>.
          </h2>

          <div className="flex gap-4">
            <div className="w-[3px] flex-shrink-0 bg-primary" />

            <p className="text-sm text-gray-600 sm:text-base md:text-lg">
              Security isn't a project with an end date. We run a continuous
              loop, aligned to recognized frameworks, that keeps your posture
              improving over time.
            </p>
          </div>
        </div>

        {/* Lifecycle Steps */}
        <div className="relative">
          {/* Horizontal Connecting Line */}
          <div className="absolute left-0 right-0 top-7 hidden h-[2px] bg-gray-200 lg:block">
            <div className="h-full w-full origin-left bg-primary/60" />
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            {approachSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.title} className="relative">
                  {/* Step Icon */}
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center border-2 border-primary bg-white text-primary shadow-sm">
                    <Icon
                      className="h-6 w-6"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Step Content */}
                  <div className="mt-5">
                    <h4 className="mb-2 font-inter text-xl font-bold text-gray-900">
                      {step.title}
                    </h4>

                    <p className="pr-4 text-sm leading-relaxed text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;