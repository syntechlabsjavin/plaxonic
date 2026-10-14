import {
  Activity,
  Brain,
  CircleCheck,
  Database,
  RefreshCw,
  Rocket,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Collect",
    description: "Gather and version the right data.",
    icon: Database,
    // top
    position: { left: "50%", top: "6%" },
  },
  {
    number: "02",
    title: "Train",
    description: "Fit and tune candidate models.",
    icon: Brain,
    // top-right
    position: { left: "86%", top: "28%" },
  },
  {
    number: "03",
    title: "Evaluate",
    description: "Test against real, held-out cases.",
    icon: CircleCheck,
    // bottom-right
    position: { left: "86%", top: "72%" },
  },
  {
    number: "04",
    title: "Deploy",
    description: "Ship as a reliable service.",
    icon: Rocket,
    // bottom
    position: { left: "50%", top: "94%" },
  },
  {
    number: "05",
    title: "Monitor",
    description: "Track accuracy, drift, and cost.",
    icon: Activity,
    // bottom-left
    position: { left: "14%", top: "72%" },
  },
  {
    number: "06",
    title: "Improve",
    description: "Feed learnings back into data.",
    icon: RefreshCw,
    // top-left
    position: { left: "14%", top: "28%" },
  },
] as const;

const Ownership=()=> {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
              How We Work
            </span>
          </div>
          <h2 className="font-inter text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1]">
            ML Is A Loop, Not A{" "}
            <span className="text-gray-300">Launch</span>.
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mt-7">
            A model is never finished. We run the cycle continuously, so accuracy
            compounds and your system keeps learning from the world it operates in.
          </p>
        </div>

        {/* ── Desktop circular layout ── */}
        <div className="hidden lg:block relative w-full max-w-[720px] aspect-square mx-auto">
          {/* Dashed circle */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-dashed border-primary/35"
            style={{ width: "52%", height: "52%" }}
          />

          {/* Center node */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-44 z-10">
            <div className="w-20 h-20 mx-auto bg-primary text-white flex items-center justify-center rounded-none">
              <RefreshCw className="w-9 h-9" />
            </div>
            <div className="font-inter text-lg font-bold text-gray-900 mt-4">
              Continuous
            </div>
            <div className="text-gray-500 text-sm">learning loop</div>
          </div>

          {/* Step cards */}
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-44"
                style={{
                  left: step.position.left,
                  top: step.position.top,
                }}
              >
                <div className="group bg-white border border-gray-200 hover:border-primary/40 transition-colors p-4 text-center shadow-sm">
                  <div className="w-11 h-11 mx-auto bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center mb-3 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="font-mono text-[11px] text-primary">
                      {step.number}
                    </span>
                    <h3 className="font-inter text-base font-bold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Mobile vertical timeline ── */}
        <div className="lg:hidden relative pl-8">
          <div className="absolute left-[7px] top-2 bottom-10 w-[2px] bg-gray-200" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative pb-7">
                <span className="absolute -left-8 top-1 w-3.5 h-3.5 bg-primary rotate-45 ring-4 ring-gray-50" />
                <div className="flex items-center gap-3 mb-1">
                  <Icon className="w-4 h-4 text-primary" />
                  <h3 className="font-inter text-lg font-bold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}

          <div className="flex items-center gap-2 text-primary text-sm font-semibold pt-1">
            <RefreshCw className="w-4 h-4" />
            and back to Collect, continuously.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ownership;