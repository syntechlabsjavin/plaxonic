import {
  Search,
  PenLine,
  Palette,
  CalendarClock,
  ChartNoAxesColumn,
  ArrowRight,
} from "lucide-react";


const agentTasks = [
  { label: "Research market", Icon: Search },
  { label: "Draft messaging", Icon: PenLine },
  { label: "Generate creative", Icon: Palette },
  { label: "Schedule rollout", Icon: CalendarClock },
  { label: "Report results", Icon: ChartNoAxesColumn },
];

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#070809] pt-28 pb-16 sm:pb-20 lg:pt-32 lg:pb-28">
      {/* Background Image */}
      <img
        src="/agentic-ai/safety-bg.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[#070809]/60" />

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-[-12%] h-[520px] w-[880px] -translate-x-1/2 rounded-full bg-primary/15 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="mx-auto max-w-3xl text-center">
          {/* Breadcrumb Label */}
          <div className="mb-8 inline-flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Artificial Intelligence / AI Solutions / Agentic AI
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-inter text-[2rem] font-bold leading-[1.1] tracking-tight text-white xs:text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
            Give It A Goal.
            <br />
            <span className="bg-gradient-to-r from-primary-light via-primary to-primary-light bg-clip-text text-primary">
              It Does The Rest.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg md:text-xl">
            We build agentic AI that plans, uses your tools, and completes
            multi-step work on its own, with the guardrails and oversight to let
            it run safely.
          </p>

          {/* Agent Tasks */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-2.5">
            {agentTasks.map(({ label, Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm text-gray-300"
              >
                <Icon className="h-3.5 w-3.5 text-primary" />
                {label}
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => {
                window.location.href = "/contact";
              }}
              className="group inline-flex w-full items-center justify-center gap-3 bg-primary px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-dark sm:w-auto"
            >
              Deploy an Agent
              <ArrowRight className="-rotate-45 h-5 w-5 transition-transform duration-300 group-hover:rotate-0" />
            </button>

            <a
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 border-2 border-white/25 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white hover:text-gray-900 sm:w-auto"
            >
              See How They Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;