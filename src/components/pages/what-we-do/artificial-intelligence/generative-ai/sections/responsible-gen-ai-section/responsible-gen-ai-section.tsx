import {
  Anchor,
  Quote,
  ShieldCheck,
  UserCheck,
  ScrollText,
  ArrowRight,
} from "lucide-react";

const TRUST_CHECKS = [
  {
    title: "Grounded",
    description: "Tied to your sources, not invented.",
    icon: Anchor,
  },
  {
    title: "Cited",
    description: "Every claim traceable to a document.",
    icon: Quote,
  },
  {
    title: "Filtered",
    description: "Safety, PII, and policy checks.",
    icon: ShieldCheck,
  },
  {
    title: "Reviewed",
    description: "Human in the loop where it counts.",
    icon: UserCheck,
  },
  {
    title: "Logged",
    description: "Audited and reproducible.",
    icon: ScrollText,
  },
];

const ResponsibleGenAISection = () => {
  return (
    <section className="overflow-hidden bg-gray-50 py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section heading */}
        <div className="mb-10 max-w-3xl sm:mb-12 lg:mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Responsible GenAI
            </span>
          </div>

          <h2 className="font-inter text-3xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Creativity, Through A{" "}
            <span className="text-gray-300">Trust Gate</span>.
          </h2>

          <p className="mt-6 text-base leading-relaxed text-gray-600 sm:mt-7 sm:text-[17px] md:text-lg">
            Generation is powerful and fallible. Nothing reaches your
            users until it has passed the checks that keep it accurate,
            safe, and accountable.
          </p>
        </div>

        {/* Trust gate workflow */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch">
          {/* Raw model output */}
          <div className="flex flex-shrink-0 flex-col justify-center border border-dashed border-gray-300 bg-white p-5 text-center lg:w-44">
            <div className="mb-1 font-mono text-xs text-gray-400">
              raw generation
            </div>

            <div className="text-sm font-semibold text-gray-700">
              Model output
            </div>
          </div>

          {/* Input arrow */}
          <div className="hidden items-center lg:flex">
            <ArrowRight
              className="h-5 w-5 text-gray-300"
              aria-hidden="true"
            />
          </div>

          {/* Trust checks */}
          <div className="grid flex-1 grid-cols-1 gap-px border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-5">
            {TRUST_CHECKS.map((check) => {
              const CheckIcon = check.icon;

              return (
                <div
                  key={check.title}
                  className="group bg-white p-5 text-center transition-colors hover:bg-primary/[0.03]"
                >
                  <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <CheckIcon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="font-inter text-sm font-bold text-gray-900">
                    {check.title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-relaxed text-gray-600">
                    {check.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Output arrow */}
          <div className="hidden items-center lg:flex">
            <ArrowRight
              className="h-5 w-5 text-primary"
              aria-hidden="true"
            />
          </div>

          {/* Trusted output */}
          <div className="flex flex-shrink-0 flex-col justify-center border-2 border-primary bg-primary p-5 text-center lg:w-44">
            <div className="mb-1 font-mono text-xs text-white/70">
              shipped
            </div>

            <div className="text-sm font-semibold text-white">
              Trusted output
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponsibleGenAISection;