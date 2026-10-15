type ActionExample = {
  category: string;
  question: string;
  response: string;
};

const actionExamples: ActionExample[] = [
  {
    category: "Answer",
    question: "What's your return policy?",
    response: "30 days, unworn, with receipt. Want me to start a return?",
  },
  {
    category: "Book",
    question: "Can I see a demo next week?",
    response: "Tuesday 11am or Wednesday 3pm work, which suits you?",
  },
  {
    category: "Transact",
    question: "Add 2 more to my order",
    response: "Added. Your new total is $128, shall I confirm?",
  },
  {
    category: "Qualify",
    question: "Do you work with hospitals?",
    response: "We do. How many sites are you looking to cover?",
  },
  {
    category: "Troubleshoot",
    question: "The app won't log me in",
    response: "Let's fix that. Are you seeing an error code on screen?",
  },
  {
    category: "Hand off",
    question: "I want to speak to a person",
    response: "Of course, connecting you to Maya now with your details.",
  },
];

const WhatItCanDo = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section heading */}
        <div className="mb-10 max-w-3xl sm:mb-14 lg:mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              What It Can Do
            </span>
          </div>

          <h2 className="font-inter text-3xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-4xl md:text-6xl lg:text-7xl">
            More Than Answers.{" "}
            <span className="text-gray-300">Actions</span>.
          </h2>
        </div>

        {/* Action cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {actionExamples.map((example) => (
            <div
              key={example.category}
              className="group border border-gray-200 p-6 transition-colors hover:border-primary/40"
            >
              <span className="mb-5 inline-block bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                {example.category}
              </span>

              <div className="flex flex-col gap-2.5">
                {/* User message */}
                <div className="max-w-[85%] self-end bg-gray-100 px-3 py-2 text-[13px] leading-snug text-gray-800">
                  {example.question}
                </div>

                {/* Assistant response */}
                <div className="max-w-[90%] self-start border border-primary/15 bg-primary/[0.06] px-3 py-2 text-[13px] leading-snug text-gray-800">
                  {example.response}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatItCanDo;