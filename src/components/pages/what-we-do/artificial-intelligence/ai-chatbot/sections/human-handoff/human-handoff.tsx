import { Bot, ArrowRight, Headset } from "lucide-react";
import PlaceHolderX from "../../../../.../../../../../assets/placeholder-x.svg";

const handoffPoints = [
  "Hands off the moment confidence drops or a customer asks for a person.",
  "Passes the full transcript and context, so no one repeats themselves.",
  "Routes to the right team, with the conversation already summarized.",
];

const HumanHandoff = () => {
  return (
    <section className="overflow-hidden bg-gray-50 py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-16 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Visual and Handoff Card */}
          <div className="relative">
            <div className="relative overflow-hidden border border-gray-200">
              <img
                src={PlaceHolderX}
                alt="Human support agent taking over the conversation"
                className="block aspect-[4/3] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
            </div>

            {/* Handoff Notification */}
            <div className="absolute -bottom-6 -right-2 w-64 border border-gray-200 bg-white p-4 shadow-xl sm:right-6">
              <div className="mb-3 flex items-center gap-2 font-mono text-[11px] text-gray-400">
                <Bot className="h-3.5 w-3.5 text-primary" />
                <span>bot</span>

                <ArrowRight className="h-3 w-3" />

                <Headset className="h-3.5 w-3.5 text-primary" />
                <span>agent</span>
              </div>

              <p className="text-[13px] leading-relaxed text-gray-700">
                Transferring to{" "}
                <span className="font-semibold text-gray-900">Maya</span> with
                the full history and a summary attached.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-6">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Human In The Loop
              </span>
            </div>

            <h2 className="mb-6 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Knows When To Bring In A{" "}
              <span className="text-gray-300">Human</span>.
            </h2>

            <p className="mb-9 text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
              The best bots are honest about their limits. Ours handles the
              routine, then hands the hard or sensitive moments to your team
              gracefully, so customers never feel stuck talking to a wall.
            </p>

            {/* Handoff Features */}
            <div className="space-y-0">
              {handoffPoints.map((point, index) => (
                <div
                  key={point}
                  className="flex items-start gap-5 border-t border-gray-200 py-5 last:border-b"
                >
                  <span className="flex-shrink-0 font-inter text-3xl font-bold leading-none text-primary lg:text-4xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-1 text-base leading-relaxed text-gray-700">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanHandoff;