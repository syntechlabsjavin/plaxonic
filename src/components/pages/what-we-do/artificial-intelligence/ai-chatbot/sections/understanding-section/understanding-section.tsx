import { Target, Tag, SmilePlus, Languages } from "lucide-react";

const understandingDetails = [
  {
    title: "Intent",
    value: "book_appointment",
    description: "What the user wants to do",
    Icon: Target,
  },
  {
    title: "Entities",
    value: "date=Friday · time=2pm · service=consult",
    description: "The details that matter",
    Icon: Tag,
  },
  {
    title: "Sentiment",
    value: "neutral → eager",
    description: "Tone and urgency",
    Icon: SmilePlus,
  },
  {
    title: "Language",
    value: "auto-detected · en",
    description: "Replies in kind",
    Icon: Languages,
  },
];

const UnderstandingSection = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section heading */}
        <div className="mb-10 max-w-3xl sm:mb-14 lg:mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Understanding
            </span>
          </div>

          <h2 className="font-inter text-3xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-4xl md:text-6xl lg:text-7xl">
            It Understands, Not Just{" "}
            <span className="text-primary">Matches</span>.
          </h2>

          <p className="mt-6 text-sm leading-relaxed text-gray-600 sm:mt-7 sm:text-base md:text-lg">
            Old bots matched keywords and broke the moment a customer phrased
            things their own way. Ours reads meaning, so it gets the real
            request even when it is messy.
          </p>
        </div>

        {/* Message and understanding details */}
        <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
          {/* Incoming message */}
          <div className="border border-gray-200 bg-white p-6 sm:p-8 lg:p-10">
            <div className="mb-4 font-mono text-[11px] text-gray-400">
              incoming message
            </div>

            <p className="font-inter text-lg leading-relaxed text-gray-900 sm:text-xl lg:text-2xl">
              “hey can u squeeze me in{" "}
              <span className="bg-primary/10 px-1">friday</span> arvo for a{" "}
              <span className="bg-primary/10 px-1">consult</span>? around{" "}
              <span className="bg-primary/10 px-1">2ish</span>”
            </p>
          </div>

          {/* Understanding attributes */}
          <div className="grid grid-cols-1 gap-px border border-gray-200 bg-gray-200 sm:grid-cols-2">
            {understandingDetails.map(
              ({ title, value, description, Icon }) => (
                <div key={title} className="bg-white p-6">
                  <div className="mb-3 flex items-center gap-2.5">
                    <Icon
                      className="h-5 w-5 text-primary"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />

                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-400">
                      {title}
                    </span>
                  </div>

                  <div className="break-words font-mono text-sm font-semibold text-gray-900">
                    {value}
                  </div>

                  <p className="mt-2 text-xs text-gray-500">
                    {description}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnderstandingSection;