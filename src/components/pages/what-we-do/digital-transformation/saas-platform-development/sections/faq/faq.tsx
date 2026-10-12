
import { useState } from "react";
import { MessageCircle, ArrowUpRight, Plus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Which tenancy model is right for us, pool, silo, or bridge?",
    answer:
      "It depends on your isolation, compliance, and cost requirements, and it often varies by customer tier. We model this early, since changing it later means re-platforming, and we'll recommend the right mix with the trade-offs spelled out.",
  },
  {
    question: "How is platform engineering different from DevOps?",
    answer:
      "DevOps focuses on collaboration between development and operations, automation, and delivery practices. Platform engineering builds reusable internal platforms, self-service tools, and golden paths that help development teams deliver software more efficiently and consistently.",
  },
  {
    question:
      "Can you re-platform our existing SaaS without disrupting customers?",
    answer:
      "Yes. We plan the migration around your existing architecture, customer workloads, and availability requirements. Depending on the system, we can use phased migrations, data synchronization, and incremental traffic shifting to reduce disruption and validate each stage.",
  },
  {
    question: "How do you keep us compliant with SOC 2, GDPR, or HIPAA?",
    answer:
      "We design security and compliance requirements into the platform architecture, including access controls, audit logging, encryption, data handling, and monitoring. The exact controls depend on your product, data, and applicable compliance obligations.",
  },
  {
    question:
      "How quickly can our developers ship once the platform is in place?",
    answer:
      "That depends on your starting point and the scope of the platform. We focus on self-service environments, automated CI/CD pipelines, reusable templates, and golden paths to reduce manual handoffs and help teams move from commit to production faster.",
  },
  {
    question: "How do you control cloud costs as we scale?",
    answer:
      "We use cost monitoring, resource right-sizing, autoscaling policies, workload analysis, and FinOps guardrails. We also track cost against usage and business metrics so you can identify inefficiencies as traffic and tenant workloads grow.",
  },
  {
    question: "How do you add AI into a SaaS platform responsibly?",
    answer:
      "We evaluate AI use cases against business value, data privacy, security, and reliability requirements. We design appropriate access controls, data boundaries, model monitoring, and human oversight where needed, while measuring performance and operating costs.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="relative overflow-hidden bg-gray-50 py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-[0.8fr_1.5fr] lg:gap-20">
          {/* Left sticky panel */}
          <div className="self-start lg:sticky lg:top-32">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                FAQ<span className="lowercase">s</span>
              </span>
            </div>

            <h2 className="mb-8 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-6xl">
              Frequently Asked{" "}
              <span className="text-gray-300">Questions</span>.
            </h2>

            {/* Contact card */}
            <div className="relative overflow-hidden border border-gray-300 bg-white p-7 lg:p-8">
              <div className="relative">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/30">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>

                <h3 className="mb-2 font-inter text-xl font-bold leading-snug text-gray-900">
                  Still have questions?
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-gray-600">
                  Our platform engineers are happy to talk specifics.
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

          {/* FAQ accordion */}
          <div className="border-t border-gray-200">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;
              const answerId = `saas-faq-answer-${index}`;

              return (
                <div key={item.question} className="border-b border-gray-200">
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    className="group flex w-full items-start justify-between gap-6 py-6 text-left lg:py-7"
                  >
                    <span
                      className={`font-inter text-base font-semibold leading-snug transition-colors sm:text-lg lg:text-xl ${
                        isOpen
                          ? "text-primary"
                          : "text-gray-900 group-hover:text-primary"
                      }`}
                    >
                      {item.question}
                    </span>

                    <span
                      className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center border transition-colors ${
                        isOpen
                          ? "border-primary bg-primary text-white"
                          : "border-gray-300 text-gray-500 group-hover:border-primary group-hover:text-primary"
                      }`}
                    >
                      <Plus
                        className={`h-4 w-4 transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      />
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    id={answerId}
                    aria-hidden={!isOpen}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-3xl pb-6 text-sm leading-relaxed text-gray-600 lg:pb-7 lg:text-base">
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
