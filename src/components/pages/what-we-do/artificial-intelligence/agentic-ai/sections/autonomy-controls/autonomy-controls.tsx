import {
  KeyRound,
  UserCheck,
  Wallet,
  Box,
  ScrollText,
  Power,
} from "lucide-react";
import AutonomyControlsBg from "../../../../../../../assets/what-we-do/artificial-intelligence/autonomy-controls-bg.webp";

const AUTONOMY_CONTROLS = [
  {
    icon: KeyRound,
    title: "Scoped Permissions",
    description:
      "Each agent gets only the tools and data it needs, nothing more.",
  },
  {
    icon: UserCheck,
    title: "Approval Gates",
    description:
      "High-stakes actions pause for a human sign-off before they run.",
  },
  {
    icon: Wallet,
    title: "Budget & Rate Limits",
    description:
      "Hard ceilings on spend, calls, and actions, so nothing runs away.",
  },
  {
    icon: Box,
    title: "Sandboxed Execution",
    description:
      "Agents act in isolated environments with no surprise side effects.",
  },
  {
    icon: ScrollText,
    title: "Full Audit Trail",
    description:
      "Every decision and action is logged, traceable, and reviewable.",
  },
  {
    icon: Power,
    title: "Kill Switch",
    description:
      "Pause or stop any agent instantly, individually or across the board.",
  },
];

const AutonomyControls=()=> {
  return (
    <section className="relative overflow-hidden bg-[#070809] py-16 sm:py-20 lg:py-32">
      {/* Background image */}
      <img
        src={AutonomyControlsBg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
      />

      <div className="pointer-events-none absolute inset-0 bg-[#070809]/40" />

      <div className="pointer-events-none absolute bottom-[-20%] right-[-5%] h-[460px] w-[560px] rounded-full bg-primary/10 blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section heading */}
        <div className="mb-12 max-w-3xl lg:mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Control
            </span>
          </div>

          <h2 className="font-inter text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-6xl">
            Autonomy, On A{" "}
            <span className="text-white/40">Leash</span>.
          </h2>

          <p className="mt-7 text-base leading-relaxed text-gray-400 md:text-lg">
            Autonomous does not mean unsupervised. We build agents with the
            controls that let you trust them with real work: scoped, capped,
            sandboxed, logged, and stoppable.
          </p>
        </div>

        {/* Control cards */}
        <div className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {AUTONOMY_CONTROLS.map((control) => {
            const Icon = control.icon;

            return (
              <div
                key={control.title}
                className="group bg-[#0a0c10] p-6 transition-colors duration-300 hover:bg-[#0d1015] sm:p-7 lg:p-8"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center bg-primary/15 text-primary">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>

                  {/* Enabled control indicator */}
                  <span
                    className="inline-flex h-5 w-9 items-center bg-primary/30 p-0.5"
                    aria-label="Control enabled"
                  >
                    <span className="ml-auto h-4 w-4 bg-primary" />
                  </span>
                </div>

                <h3 className="mb-2 font-inter text-lg font-bold text-white">
                  {control.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-400">
                  {control.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AutonomyControls;