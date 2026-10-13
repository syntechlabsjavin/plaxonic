import {
  Database,
  Rocket,
  ShieldCheck,
  Wrench,
} from "lucide-react";

interface PayoffItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

const payoffItems: PayoffItem[] = [
  {
    title: "One source of truth",
    description:
      "Data flows automatically between systems, so every team works from the same current information instead of reconciling spreadsheets.",
    icon: Database,
  },
  {
    title: "Faster time to launch",
    description:
      "New partners, tools, and channels connect in a fraction of the time, because the connective layer is built to extend rather than rebuilt each time.",
    icon: Rocket,
  },
  {
    title: "Fewer breakages",
    description:
      "Versioned APIs, monitoring, and resilient middleware mean an upstream change or outage no longer cascades into a business-wide failure.",
    icon: ShieldCheck,
  },
  {
    title: "Lower maintenance load",
    description:
      "A governed, observable integration layer replaces brittle point-to-point scripts, cutting the ongoing cost of keeping systems connected.",
    icon: Wrench,
  },
];

const APIMiddlewarePayoff = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Content */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="mb-6 flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  The Payoff
                </span>
              </div>

              <h2 className="mb-8 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
                Why The Integration Layer Is{" "}
                <span className="text-gray-300">
                  Worth Getting Right
                </span>
                .
              </h2>

              <div className="flex gap-4">
                <div className="w-[3px] shrink-0 bg-primary" />

                <p className="text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
                  A good integration layer is invisible when it works and
                  very expensive when it does not. Done well, it changes
                  how the whole business runs.
                </p>
              </div>
            </div>
          </div>

          {/* Right Benefit Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7 lg:gap-6">
            {payoffItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative flex flex-col border border-gray-200 bg-white p-7 transition-colors duration-300 hover:border-primary/40 lg:p-8"
                >
                  {/* Icon */}
                  <div className="mb-6 flex h-12 w-12 items-center justify-center bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon
                      className="h-6 w-6"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-primary sm:text-xl">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>

                  {/* Hover Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default APIMiddlewarePayoff;