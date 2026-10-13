import {
  Database,
  Activity,
  GitMerge,
  ArrowRight,
} from "lucide-react";
import erpVideo from "../../../../../../../assets/what-we-do/erp5.mp4";

const glass = {
  clear: {
    backgroundColor: "rgba(255,255,255,0.03)",
  },
  frost: {
    backgroundColor: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
  },
  heavy: {
    backgroundColor: "rgba(255,255,255,0.14)",
    backdropFilter: "blur(24px)",
    WebkitBackdropFilter: "blur(24px)",
  },
} as const;

const gridTiles = [
  { col: "col-start-1 col-span-2", row: "row-start-1 row-span-1", variant: "frost" },
  { col: "col-start-3 col-span-1", row: "row-start-1 row-span-2", variant: "clear" },
  { col: "col-start-4 col-span-1", row: "row-start-1 row-span-1", variant: "heavy" },
  { col: "col-start-5 col-span-2", row: "row-start-1 row-span-2", variant: "clear" },
  { col: "col-start-1 col-span-1", row: "row-start-2 row-span-2", variant: "heavy" },
  { col: "col-start-2 col-span-1", row: "row-start-2 row-span-1", variant: "clear" },
  { col: "col-start-4 col-span-1", row: "row-start-2 row-span-2", variant: "frost" },
  { col: "col-start-2 col-span-2", row: "row-start-3 row-span-1", variant: "frost" },
  { col: "col-start-5 col-span-1", row: "row-start-3 row-span-2", variant: "heavy" },
  { col: "col-start-6 col-span-1", row: "row-start-3 row-span-1", variant: "clear" },
  { col: "col-start-1 col-span-1", row: "row-start-4 row-span-1", variant: "clear" },
  { col: "col-start-2 col-span-1", row: "row-start-4 row-span-2", variant: "heavy" },
  { col: "col-start-3 col-span-2", row: "row-start-4 row-span-1", variant: "clear" },
  { col: "col-start-6 col-span-1", row: "row-start-4 row-span-2", variant: "frost" },
  { col: "col-start-1 col-span-1", row: "row-start-5 row-span-2", variant: "frost" },
  { col: "col-start-3 col-span-1", row: "row-start-5 row-span-1", variant: "heavy" },
  { col: "col-start-4 col-span-2", row: "row-start-5 row-span-1", variant: "clear" },
  { col: "col-start-3 col-span-1", row: "row-start-6 row-span-1", variant: "frost" },
  { col: "col-start-4 col-span-1", row: "row-start-6 row-span-1", variant: "heavy" },
  { col: "col-start-5 col-span-2", row: "row-start-6 row-span-1", variant: "frost" },
] as const;

const features = [
  { label: "One system of record", Icon: Database },
  { label: "Real-time visibility", Icon: Activity },
  { label: "Automated operations", Icon: GitMerge },
];

const ERPHero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-28 lg:pt-40">
      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="flex flex-col gap-10 sm:gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="lg:w-[52%]">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Digital Transformations / Enterprise Solutions
              </span>
            </div>

            <h1 className="mb-8 font-inter text-[2rem] font-bold leading-[1.1] tracking-tight xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-gray-900">ERP</span>
              <br />
              <span className="text-primary">Solutions</span>
            </h1>

            <div className="mb-10 flex max-w-2xl gap-4">
              <div className="w-[3px] flex-shrink-0 bg-primary" />

              <p className="text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl">
                When finance, inventory, production, and people live in
                separate systems, every report is a guess. We design,
                implement, and customize SAP, Oracle NetSuite, Dynamics
                365, and bespoke ERP platforms—so your whole business
                runs on one connected source of truth, in real time.
              </p>
            </div>

            <div className="mb-10 flex flex-wrap gap-3">
              {features.map(({ label, Icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                  {label}
                </span>
              ))}
            </div>

            <div className="flex flex-col flex-wrap gap-4 sm:flex-row">
              <a
                href="/contact"
                className="group inline-flex w-full items-center justify-center gap-3 bg-primary px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-dark sm:w-auto"
              >
                <span>Modernize Your ERP</span>
                <ArrowRight className="-rotate-45 h-5 w-5 transition-transform duration-300 group-hover:rotate-0" />
              </a>

              <a
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-3 border-2 border-gray-900 px-8 py-3.5 text-base font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white sm:w-auto"
              >
                Get an ERP Assessment
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:w-[46%] lg:justify-end">
            <div className="relative w-full max-w-[560px]">
              <div className="relative aspect-square w-full overflow-hidden bg-white">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  src={erpVideo}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
                  {gridTiles.map((tile, index) => (
                    <div
                      key={index}
                      className={`${tile.col} ${tile.row} border border-white/10`}
                      style={glass[tile.variant]}
                    />
                  ))}
                </div>

                <div
                  className="pointer-events-none absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
                    backgroundSize: "16.66% 16.66%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ERPHero;
