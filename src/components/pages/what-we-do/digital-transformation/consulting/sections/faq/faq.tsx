
import { useState } from "react";
import { MessageCircle, ArrowUpRight, Plus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What Is Mobile App Development?",
    answer:
      "Mobile app development is the process of planning, designing, building, testing, launching, and maintaining applications for mobile devices. It can involve native development for iOS or Android, cross-platform development, or progressive web apps, depending on the product requirements.",
  },
  {
    question: "How Do You Choose a Mobile App Development Company?",
    answer:
      "Choose a company based on its relevant portfolio, technical expertise, communication process, security practices, and post-launch support. Review similar projects, clarify your requirements, and make sure the team can explain its proposed approach, timeline, and budget.",
  },
  {
    question: "Who Provides End-to-End Mobile App Development?",
    answer:
      "An end-to-end mobile app development partner supports the full product lifecycle, including discovery, UX/UI design, development, quality assurance, app store deployment, and ongoing maintenance.",
  },
  {
    question: "What Is Enterprise Mobile App Development?",
    answer:
      "Enterprise mobile app development involves building secure, scalable mobile applications for organizations. These apps can support internal workflows, employee productivity, customer engagement, and integration with existing enterprise systems.",
  },
  {
    question: "How Do You Start a Mobile App Development Business?",
    answer:
      "Start by identifying your target market, choosing a clear service offering, building a skilled team, defining your development process, and creating a portfolio. Establish reliable project management, quality assurance, and client communication practices as your business grows.",
  },
  {
    question: "What Is B2B Mobile App Development?",
    answer:
      "B2B mobile app development focuses on applications that help businesses work with other businesses. Common use cases include partner portals, field service management, inventory tracking, procurement, and business workflow automation.",
  },
  {
    question: "How Is AI Changing Mobile App Development?",
    answer:
      "AI is enabling more personalized user experiences, intelligent search, conversational assistants, predictive insights, image recognition, and workflow automation. AI-assisted development tools can also help teams test, build, and maintain applications more efficiently.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="relative overflow-hidden bg-gray-50 py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-[0.8fr_1.5fr] lg:gap-20">
          {/* Left sidebar */}
          <div className="self-start lg:sticky lg:top-32">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                FAQ<span className="lowercase">s</span>
              </span>
            </div>

            <h2 className="mb-8 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Frequently Asked{" "}
              <span className="text-gray-300">Questions</span>.
            </h2>

            {/* Contact card */}
            <div className="relative overflow-hidden border border-gray-300 bg-white p-6 sm:p-7 lg:p-8">
              <div className="relative">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/30">
                  <MessageCircle
                    size={24}
                    className="text-white"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mb-2 font-inter text-xl font-bold leading-snug text-gray-900">
                  Still have questions?
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-gray-600">
                  Our mobile engineers are happy to talk specifics.
                </p>

                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-primary-dark"
                >
                  Talk to an Expert

                  <ArrowUpRight
                    size={16}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* FAQ accordion */}
          <div className="border-t border-gray-200">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = activeIndex === index;
              const answerId = `faq-answer-${index}`;
              const questionId = `faq-question-${index}`;

              return (
                <div key={item.question} className="border-b border-gray-200">
                  <button
                    id={questionId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => toggleFAQ(index)}
                    className="group flex w-full items-start justify-between gap-6 py-6 text-left lg:py-7"
                  >
                    <span
                      className={`font-inter text-base font-semibold transition-colors duration-300 sm:text-lg lg:text-xl ${
                        isOpen
                          ? "text-primary"
                          : "text-gray-900 group-hover:text-primary"
                      }`}
                    >
                      {item.question}
                    </span>

                    <span
                      className={`mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center border transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 border-primary bg-primary text-white"
                          : "border-gray-300 text-gray-500 group-hover:border-primary group-hover:text-primary"
                      }`}
                    >
                      <Plus size={16} aria-hidden="true" />
                    </span>
                  </button>

                  {/* Animated answer */}
                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    aria-hidden={!isOpen}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-3xl pb-7 pr-6 text-sm leading-relaxed text-gray-600 sm:pr-10 sm:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
