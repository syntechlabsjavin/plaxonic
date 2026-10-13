import {
  Compass,
  Map,
  GitBranch,
  Wallet,
  Network,
  Workflow,
  Building2,
  Gauge,
  Users,
  ShieldCheck,
  Lock,
  ChartNoAxesColumn,
} from "lucide-react";

const advisoryAreas = [
  {
    number: "01",
    title: "Strategy & Roadmap",
    items: [
      {
        icon: Compass,
        title: "Technology Strategy",
        description:
          "Align technology investment with business goals, define the north star, the bets, and the sequence to get there.",
      },
      {
        icon: Map,
        title: "Digital Transformation Roadmaps",
        description:
          "A phased, fundable plan that turns a broad ambition into concrete initiatives, owners, and milestones.",
      },
      {
        icon: GitBranch,
        title: "Build vs. Buy Advisory",
        description:
          "Clear, evidence-based recommendations on where to build, where to buy, and where to integrate, with the trade-offs spelled out.",
      },
      {
        icon: Wallet,
        title: "Investment & TCO Modeling",
        description:
          "Cost, risk, and return modeled across options, so funding decisions are made on numbers, not gut feel.",
      },
    ],
  },
  {
    number: "02",
    title: "Architecture & Engineering",
    items: [
      {
        icon: Network,
        title: "Architecture Assessment",
        description:
          "An honest review of your current systems, surfacing risk, bottlenecks, and the highest-leverage places to act.",
      },
      {
        icon: Workflow,
        title: "Modernization Planning",
        description:
          "A pragmatic path off legacy systems, sequenced to reduce risk while keeping the business running.",
      },
      {
        icon: Building2,
        title: "Cloud & Platform Strategy",
        description:
          "Right-size your cloud and platform decisions for cost, performance, and operational maturity, not hype.",
      },
      {
        icon: Gauge,
        title: "Performance & Scalability Reviews",
        description:
          "Find the constraints before your users do, with a clear plan to scale capacity and resilience.",
      },
    ],
  },
  {
    number: "03",
    title: "Operating Model & Governance",
    items: [
      {
        icon: Users,
        title: "Team & Operating Model Design",
        description:
          "Structure teams, ownership, and ways of working so delivery is fast, accountable, and sustainable.",
      },
      {
        icon: ShieldCheck,
        title: "Delivery Governance",
        description:
          "Lightweight governance that keeps programs on track, surfaces risk early, and protects momentum.",
      },
      {
        icon: Lock,
        title: "Security & Compliance Advisory",
        description:
          "Embed security and compliance into the operating model from the start, not as a late-stage scramble.",
      },
      {
        icon: ChartNoAxesColumn,
        title: "Measurement & KPIs",
        description:
          "Define the metrics that prove value, so progress is visible and investment stays justified.",
      },
    ],
  },
];

const WhereWeAdvise = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Heading */}
        <div className="mb-10 sm:mb-14 lg:mb-20">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Where We Advise
            </span>
          </div>

          <h2 className="mb-8 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-6xl lg:text-7xl">
            Where We <span className="text-gray-300">Advise</span>.
          </h2>

          <div className="flex max-w-2xl gap-4">
            <div className="w-[3px] flex-shrink-0 bg-primary" />
            <p className="text-sm text-gray-600 sm:text-base md:text-lg">
              From boardroom strategy to architecture decisions, our advisory
              spans the full arc of a transformation, each engagement scoped
              to the decision you need to make next.
            </p>
          </div>
        </div>

        {/* Advisory Categories */}
        <div className="space-y-16 lg:space-y-24">
          {advisoryAreas.map((area) => (
            <div key={area.number}>
              {/* Category Heading */}
              <div className="mb-8 flex items-center gap-3 sm:gap-5">
                <span className="font-inter text-3xl font-bold leading-none tabular-nums text-gray-200 sm:text-4xl md:text-5xl">
                  {area.number}
                </span>

                <h3 className="font-inter text-xl font-bold tracking-tight text-gray-900 sm:whitespace-nowrap sm:text-2xl md:text-3xl">
                  {area.title}
                </h3>

                <span className="hidden h-px flex-1 bg-gray-200 sm:block" />
              </div>

              {/* Advisory Cards */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
                {area.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group relative flex h-full flex-col overflow-hidden border border-gray-200 bg-white p-6 transition-colors duration-300 hover:border-primary/40 lg:p-7"
                    >
                      {/* Icon */}
                      <div className="mb-5 flex h-12 w-12 items-center justify-center bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                        <Icon
                          className="h-6 w-6 text-primary"
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                      </div>

                      {/* Content */}
                      <h4 className="mb-2.5 text-base font-semibold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-primary lg:text-lg">
                        {item.title}
                      </h4>

                      <p className="text-sm leading-relaxed text-gray-600">
                        {item.description}
                      </p>

                      {/* Hover Accent */}
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhereWeAdvise;