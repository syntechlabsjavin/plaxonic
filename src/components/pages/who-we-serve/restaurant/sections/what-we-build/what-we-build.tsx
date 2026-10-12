import { ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    tag: "Cloud & Platform",
    title: "Scalable Learning Platforms & LMS",
    description:
      "Learning platforms and student portals built to hold up when the whole institution logs in at once, with an architecture that serves web, mobile, and offline from one codebase instead of three separate builds.",
    href: "/services/platform-engineering-services",
  },
  {
    tag: "Data & Analytics",
    title: "Unified Learner & Engagement Data",
    description:
      "One real-time view of the student and their progress, drawn from the LMS, SIS, and assessment tools that never agreed, so a single question about a learner or a cohort does not take an export and an evening to answer.",
    href: "/services/data-science-analytics",
  },
  {
    tag: "Machine Learning",
    title: "Adaptive Learning & Early-Alert",
    description:
      "Models that read real engagement, not just last score, so each learner gets the next step they actually need and advisors get a signal the week a student starts drifting, not the term after they have gone.",
    href: "/services/machine-learning",
  },
  {
    tag: "Generative AI",
    title: "AI Tutoring & Content Generation",
    description:
      "Generative tutors that answer a student at 2am and course tools that draft, grade, and give feedback at scale, grounded in your own curriculum with retrieval so the answers stay accurate and on-syllabus.",
    href: "/services/generative-ai",
  },
  {
    tag: "Integration",
    title: "LMS, SIS & Courseware Integration",
    description:
      "The connective layer between your LMS, SIS, video, and third-party courseware, built on LTI and xAPI so rosters, grades, and activity flow in real time instead of breaking every time a tool updates.",
    href: "/services/middleware-integration-services",
  },
  {
    tag: "Mobile",
    title: "Mobile-First Learning Experiences",
    description:
      "Native mobile learning that works on the commute and off the network, so a student in a lecture hall or a low-bandwidth region gets the same course, quizzes, and progress as anyone at a desk.",
    href: "/services/mobile-app-development",
  },
] as const;

const WhatWeBuild = () => {
  return (
    <section className="bg-white py-24 lg:py-36">
      <div className="max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="max-w-3xl mb-14 lg:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
              What We Build
            </span>
          </div>

          <h2 className="font-inter text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-6">
            The Systems Behind Every Course And{" "}
            <span className="text-primary">Every Learner</span>.
          </h2>

          <div className="flex gap-4">
            <div className="w-[3px] flex-shrink-0 bg-primary" />
            <p className="text-gray-600 text-lg leading-relaxed">
              We build across learning delivery, student data, and institutional
              systems, covering learning platforms, unified learner data,
              adaptive models, AI tutoring, and the integration layer that
              keeps them connected.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <a
              key={service.href}
              href={service.href}
              className="group relative flex h-full flex-col overflow-hidden border border-gray-200 bg-white p-7 lg:p-8 hover:border-primary/40 hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-300"
            >
              <span className="inline-flex self-start bg-primary px-3 py-1 text-white text-xs font-medium uppercase tracking-wider mb-5">
                {service.tag}
              </span>

              <h3 className="font-inter text-xl lg:text-2xl font-bold text-gray-900 leading-snug mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm lg:text-base leading-relaxed flex-1">
                {service.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-primary">
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Explore
                </span>

                <ArrowUpRight
                  className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300"
                  aria-hidden="true"
                />
              </div>

              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;