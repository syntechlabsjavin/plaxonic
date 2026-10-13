import {
  TrendingUp,
  Users,
  Workflow,
  ArrowRight,
  Bell,
  Check,
} from "lucide-react";
import { useState } from "react";

const pipelineStages = [
  {
    label: "Lead",
    description: "48 deals captured",
    value: "48",
  },
  {
    label: "Qualified",
    description: "31 deals scoring now",
    value: "31",
  },
  {
    label: "Proposal",
    description: "17 deals awaiting decision",
    value: "17",
  },
  {
    label: "Won",
    description: "9 deals closed",
    value: "9",
  },
  {
    label: "Forecast",
    description: "$1.84M weighted pipeline",
    value: "$1.84M",
    active: true,
  },
];

const CRMHero = () => {
    const [activeStage, setActiveStage] = useState(1);
  return (
    <section className="relative w-full overflow-hidden bg-white pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-28 lg:pt-40">
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="flex flex-col gap-10 sm:gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          {/* Left Content */}
          <div className="lg:w-[55%]">
            <div
              className="mb-6 flex items-center gap-3"
              style={{ opacity: 1, transform: "none" }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Digital Transformations / Enterprise Solutions
              </span>
            </div>

            <h1
              className="mb-8 font-inter text-[2rem] font-bold leading-[1.1] tracking-tight xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ opacity: 1, transform: "none" }}
            >
              <span className="text-gray-900">CRM Software</span>
              <br />
              <span className="text-primary">Solutions</span>
            </h1>

            <div
              className="mb-10 flex max-w-2xl gap-4"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="w-[3px] shrink-0 bg-primary" />

              <p className="text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl">
                We build CRM solutions that bring customer data, sales
                activities, communication, and business processes into one
                connected system. Our team implements and customizes platforms
                like Salesforce, HubSpot, and Zoho, and develops custom CRM
                solutions when your business needs to go beyond standard
                features.
              </p>
            </div>

            {/* Feature Badges */}
            <div
              className="mb-10 flex flex-wrap gap-3"
              style={{ opacity: 1, transform: "none" }}
            >
              <span className="inline-flex items-center gap-2 border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">
                <TrendingUp
                  className="h-4 w-4 text-primary"
                  aria-hidden="true"
                />
                Pipeline you can trust
              </span>

              <span className="inline-flex items-center gap-2 border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">
                <Users
                  className="h-4 w-4 text-primary"
                  aria-hidden="true"
                />
                360° customer view
              </span>

              <span className="inline-flex items-center gap-2 border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">
                <Workflow
                  className="h-4 w-4 text-primary"
                  aria-hidden="true"
                />
                Automated follow-up
              </span>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-4"
              style={{ opacity: 1, transform: "none" }}
            >
              <button
                type="button"
                className="group inline-flex w-full items-center justify-center gap-3 bg-primary px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-dark sm:w-auto"
              >
                <span>Request a Proposal</span>

                <ArrowRight
                  className="-rotate-45 h-5 w-5 transition-transform duration-300 group-hover:rotate-0"
                  aria-hidden="true"
                />
              </button>

              <a
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-3 border-2 border-gray-900 px-8 py-3.5 text-base font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white sm:w-auto"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>

          {/* Right CRM Dashboard */}
          <div
            className="hidden justify-center md:flex lg:w-[45%] lg:justify-end"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="relative mx-auto w-full max-w-xl py-10 lg:mx-0">
              {/* Background Glows */}
              <div className="pointer-events-none absolute -right-6 -top-6 h-48 w-48 rounded-full bg-primary/15 blur-[60px]" />

              <div className="pointer-events-none absolute -bottom-8 -left-6 h-48 w-48 rounded-full bg-indigo-300/20 blur-[60px]" />

              {/* Pipeline Analytics Card */}
              <div
                className="absolute bottom-16 left-0 top-16 z-10 w-[58%] overflow-hidden bg-[#0b0d12] p-7 shadow-2xl"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="pointer-events-none absolute -right-8 -top-10 h-40 w-40 rounded-full bg-primary/25 blur-3xl" />

                <div className="relative">
                  <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">
                    Pipeline
                  </div>

                  <div className="mb-1.5 text-[10px] uppercase tracking-wider text-white/40">
                    Weighted
                  </div>

                  <div className="mb-1 font-inter text-2xl font-bold text-white">
                    $1.84M
                  </div>

                  <div className="mb-6 inline-flex items-center gap-1 text-xs font-medium text-emerald-400">
                    <TrendingUp
                      className="h-3.5 w-3.5"
                      aria-hidden="true"
                    />
                    +18% vs Q2
                  </div>

                  {/* Pipeline Chart */}
                  <div className="mb-5 flex h-20 items-end gap-1.5">
                    {[42, 58, 50, 72, 64, 88, 80].map(
                      (height, index) => (
                        <div
                          key={index}
                          className={`flex-1 bg-gradient-to-t ${
                            index === 5
                              ? "from-primary to-primary-light"
                              : "from-primary/30 to-primary/60"
                          }`}
                          style={{ height: `${height}%` }}
                        />
                      ),
                    )}
                  </div>

                  {/* Metrics */}
                  <div className="flex gap-2">
                    <div className="flex-1 border border-white/10 bg-white/[0.04] px-2.5 py-2">
                      <div className="text-[9px] uppercase tracking-wide text-white/40">
                        Win rate
                      </div>
                      <div className="font-inter text-sm font-bold text-white">
                        24%
                      </div>
                    </div>

                    <div className="flex-1 border border-white/10 bg-white/[0.04] px-2.5 py-2">
                      <div className="text-[9px] uppercase tracking-wide text-white/40">
                        Avg cycle
                      </div>
                      <div className="font-inter text-sm font-bold text-white">
                        38d
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sales Pipeline Card */}
              <div
                className="relative z-20 ml-auto w-[80%] border border-gray-100 bg-white px-6 py-8 shadow-[0_30px_80px_-22px_rgba(15,23,42,0.35)] lg:px-7 lg:py-9"
                style={{ opacity: 1, transform: "none" }}
              >
                {/* Activity Header */}
                <div className="mb-4 flex items-center gap-2">
                  <Bell
                    className="h-3.5 w-3.5 text-primary"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-semibold text-primary">
                    New deal activity
                  </span>
                </div>

                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-inter text-lg font-bold text-gray-900">
                    Sales Pipeline — Q3
                  </h3>

                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-600">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                    Live
                  </span>
                </div>

{/* Progress */}
<div className="mb-6">
  <div className="mb-2 flex items-center justify-between">
    <span className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
      Pipeline progress
    </span>

    <span className="tabular-nums text-[11px] font-bold text-primary">
      {Math.round(((activeStage + 1) / pipelineStages.length) * 100)}%
    </span>
  </div>

  <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
    <div
      className="h-full rounded-full bg-gradient-to-r from-primary to-primary-light transition-all duration-500 ease-out"
      style={{
        width: `${((activeStage + 1) / pipelineStages.length) * 100}%`,
      }}
    />
  </div>
</div>


{/* Pipeline Stages */}
<div>
  {pipelineStages.map((stage, index) => {
    const isActive = index === activeStage;
    const isCompleted = index < activeStage;

    return (
      <div
        key={stage.label}
        className={`relative flex gap-4 ${
          index !== pipelineStages.length - 1 ? "pb-5" : ""
        }`}
      >
        {/* Connector */}
        {index < pipelineStages.length - 1 && (
          <span
            className={`absolute left-[13px] top-7 h-full w-px transition-colors duration-300 ${
              index < activeStage
                ? "bg-emerald-400/50"
                : "bg-gray-200"
            }`}
          />
        )}

        {/* Stage Icon */}
        <span
          className={`relative z-10 mt-0.5 flex h-[26px] w-[26px] shrink-0 items-center justify-center border-2 transition-all duration-300 ${
            isCompleted
              ? "border-emerald-500 bg-emerald-50 text-emerald-600"
              : isActive
                ? "border-primary bg-primary/5"
                : "border-gray-200 bg-white"
          }`}
        >
          {isCompleted ? (
            <Check
              className="h-3.5 w-3.5"
              strokeWidth={3}
              aria-hidden="true"
            />
          ) : (
            <span
              className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                isActive
                  ? "animate-pulse bg-primary"
                  : "bg-gray-300"
              }`}
            />
          )}
        </span>

        {/* Clickable Stage Details */}
        <button
          type="button"
          aria-pressed={isActive}
          onClick={() => setActiveStage(index)}
          className={`-my-1.5 -mr-2 flex flex-1 items-center justify-between gap-3 px-2.5 py-1.5 text-left transition-all duration-300 ${
            isActive
              ? "bg-primary/[0.06] ring-1 ring-primary/20"
              : "hover:bg-gray-50"
          }`}
        >
          <span className="min-w-0">
            <span
              className={`block text-sm font-semibold transition-colors duration-300 ${
                isActive ? "text-primary" : "text-gray-900"
              }`}
            >
              {stage.label}
            </span>

            <span className="mt-0.5 block text-xs text-gray-400">
              {stage.description}
            </span>
          </span>

          <span
            className={`shrink-0 px-2 py-0.5 text-xs font-bold tabular-nums transition-colors duration-300 ${
              isActive
                ? "bg-primary/10 text-primary"
                : isCompleted
                  ? "bg-emerald-50 text-emerald-600"
                  : "bg-gray-100 text-gray-500"
            }`}
          >
            {stage.value}
          </span>
        </button>
      </div>
    );
  })}
</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CRMHero;