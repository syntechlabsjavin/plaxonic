import {
  RotateCw,
  Eye,
  Bell,
  Headset,
  Wrench,
  ShieldPlus,
  ChevronRight,
  Activity,
} from "lucide-react";

const supportSteps = [
  {
    title: "Monitor",
    description:
      "Continuous, automated monitoring across your entire stack, around the clock.",
    icon: Eye,
  },
  {
    title: "Detect",
    description:
      "Smart alerting surfaces anomalies the moment they appear, before users notice.",
    icon: Bell,
  },
  {
    title: "Respond",
    description:
      "On-call engineers triage and acknowledge within your SLA, every time.",
    icon: Headset,
  },
  {
    title: "Resolve",
    description:
      "We fix, verify, and restore service, then confirm everything is healthy.",
    icon: Wrench,
  },
  {
    title: "Prevent",
    description:
      "Root-cause analysis feeds back into hardening, so it doesn't happen twice.",
    icon: ShieldPlus,
  },
];

const SupportProcess=()=> {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 lg:mb-16">
          <div className="mb-6 inline-flex items-center gap-2 border border-primary/30 bg-primary/10 px-4 py-2">
            <RotateCw className="h-3.5 w-3.5 text-primary" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              A continuous cycle
            </span>
          </div>

          <h2 className="mb-6 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            How Our Support{" "}
            <span className="text-gray-300">Works</span>.
          </h2>

          <p className="text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
            Support isn't a ticket queue, it's a loop. We watch, catch, fix,
            and harden your systems on repeat, so reliability compounds over
            time.
          </p>
        </div>

        {/* Support Process Steps */}
        <div className="flex flex-col lg:flex-row lg:items-stretch">
          {supportSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.title} className="contents">
                {/* Step Card */}
                <div className="group flex-1 border border-gray-200 bg-white p-6 text-center transition-colors duration-300 hover:border-primary/40 lg:p-7">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mb-2 text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-primary">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-600">
                    {step.description}
                  </p>
                </div>

                {/* Arrow Between Steps */}
                {index < supportSteps.length - 1 && (
                  <div className="flex items-center justify-center py-2 lg:px-1 lg:py-0">
                    <ChevronRight className="h-5 w-5 rotate-90 text-gray-300 lg:rotate-0" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Continuous Cycle Message */}
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
          <RotateCw className="h-4 w-4 text-primary" />
          <span>…and back to monitoring, continuously.</span>
        </div>

        {/* Monitoring Details */}
        <div className="mx-auto mt-12 flex max-w-4xl items-start gap-4 border border-gray-200 bg-white p-6 lg:p-7">
          <Activity className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-500" />

          <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
            Our monitoring goes beyond static thresholds. Anomaly detection
            and predictive alerting flag unusual patterns early, and automated
            triage routes issues to the right responder, reducing noise and
            time to resolution.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SupportProcess;