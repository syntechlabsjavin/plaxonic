import { useState } from "react";
import { MessageCircle, ArrowUpRight, Plus } from "lucide-react";

const faqItems = [
  {
    question: "How much does web app development cost?",
    answer:
      "The cost depends on project scope, architectural complexity, feature sets, third-party integrations, and performance requirements. Simple MVP builds differ significantly from enterprise web application development services that require microservices, automated CI/CD pipelines, and advanced security protocols. We provide transparent estimates after defining your exact technical roadmap.",
  },
  {
    question:
      "Why choose Plaxonic for web application development?",
    answer:
      "Plaxonic combines full-stack expertise, performance-first engineering, security by design, and scalable architecture. Our team focuses on building reliable, production-ready applications tailored to your business goals.",
  },
  {
    question: "How long does it take to develop a web app?",
    answer:
      "The timeline depends on your application's complexity, features, integrations, and design requirements. A simple MVP may take a few weeks to a few months, while a complex enterprise application may require several months of planning, development, and testing. We establish a clear timeline after defining the project scope.",
  },
  {
    question: "How do you ensure web application security?",
    answer:
      "We incorporate security throughout the development lifecycle using secure coding practices, OWASP recommendations, access controls, data validation, automated code analysis, and appropriate security testing to help protect your application and its data.",
  },
  {
    question: "What is custom web application development?",
    answer:
      "Custom web application development means designing and building software around your organization's specific workflows, business goals, and user needs rather than relying entirely on an off-the-shelf solution. It allows you to create tailored functionality and scale as your business grows.",
  },
  {
    question:
      "What technologies and frameworks does Plaxonic use for web development?",
    answer:
      "Technology choices depend on your product requirements. A web application may use React or Next.js for the frontend, Node.js or other backend technologies, SQL or NoSQL databases, and cloud infrastructure for deployment. We select a stack based on performance, maintainability, security, and scalability.",
  },
  {
    question:
      "What key considerations should you look for when selecting the best web application development company?",
    answer:
      "Look for relevant project experience, technical expertise, clear communication, transparent pricing, a well-defined development process, security practices, quality assurance, and ongoing support. Choose a team that understands your business goals and can explain how its proposed solution will meet them.",
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
          {/* Left Column */}
          <div className="self-start lg:sticky lg:top-32">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                FAQ<span className="lowercase">s</span>
              </span>
            </div>

            <h2 className="mb-8 font-inter text-3xl leading-[1.1] font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Frequently Asked{" "}
              <span className="text-gray-300">Questions</span>.
            </h2>

            {/* Contact Card */}
            <div className="relative overflow-hidden border border-gray-300 bg-white p-7 lg:p-8">
              <div className="relative">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/30">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>

                <h3 className="mb-2 font-inter text-xl leading-snug font-bold text-gray-900">
                  Still have questions?
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-gray-600">
                  Our engineers are happy to talk specifics.
                </p>

                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Talk to an Expert

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="border-t border-gray-200">
            {faqItems.map((item, index) => {
              const isOpen = activeIndex === index;
              const answerId = `faq-answer-${index}`;

              return (
                <div
                  key={item.question}
                  className="border-b border-gray-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    className="group flex w-full items-start justify-between gap-4 py-6 text-left sm:gap-6 lg:py-7"
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
                      className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center border transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 border-primary bg-primary text-white"
                          : "border-gray-300 text-gray-500 group-hover:border-primary group-hover:text-primary"
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>

                  <div
                    id={answerId}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-3xl pr-2 pb-7 text-sm leading-relaxed text-gray-600 sm:pr-10 sm:text-base">
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