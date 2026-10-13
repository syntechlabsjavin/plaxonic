import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    number: "01",
    title: "Zero-Downtime By Default",
    description:
      "Incremental, strangler-fig migrations mean your business keeps running throughout. No risky overnight cutovers, no all-or-nothing bets.",
  },
  {
    number: "02",
    title: "We Decode The Undocumented",
    description:
      "Decades-old code with no docs and no original authors? That's our specialty. We reverse-engineer business logic so nothing critical is lost.",
  },
  {
    number: "03",
    title: "Business Logic Preserved",
    description:
      "Modernization should change how the system runs, not what it does. We protect the rules your business depends on while replacing the plumbing.",
  },
  {
    number: "04",
    title: "Right Strategy, Not The Trendy One",
    description:
      "Sometimes a rehost beats a rewrite. We pick the approach that delivers value fastest for the lowest risk, per application.",
  },
  {
    number: "05",
    title: "Cloud, Security & Cost-Aware",
    description:
      "We modernize with FinOps and security built in, so the new platform is cheaper to run and safer than what it replaced, from day one.",
  },
];

const WhyPlaxonic = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const assessmentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const sidebar = sidebarRef.current;
    const benefitsContainer = benefitsRef.current;
    const assessment = assessmentRef.current;

    if (!section || !sidebar || !benefitsContainer || !assessment) return;

    const ctx = gsap.context(() => {
      // Animate the sidebar content
      gsap.fromTo(
        sidebar.children,
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.16,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sidebar,
            start: "top 82%",
            once: true,
          },
        }
      );

      // Animate the assessment call-to-action card
      gsap.fromTo(
        assessment,
        {
          opacity: 0,
          y: 25,
          scale: 0.97,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: assessment,
            start: "top 90%",
            once: true,
          },
        }
      );

      // Stagger each benefit row as it enters the viewport
      const benefitItems = gsap.utils.toArray<HTMLElement>(
        ".why-benefit",
        benefitsContainer
      );

      benefitItems.forEach((item) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            x: 35,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              once: true,
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gray-50 py-16 sm:py-20 lg:py-32"
    >
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-[0.85fr_1.5fr] lg:gap-20">
          {/* Left Sidebar */}
          <div
            ref={sidebarRef}
            className="self-start lg:sticky lg:top-32"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Why Plaxonic
              </span>
            </div>

            <h2 className="mb-8 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Modernize Without{" "}
              <span className="text-gray-300">The Fear</span>.
            </h2>

            {/* Assessment CTA */}
            <div
              ref={assessmentRef}
              className="border border-gray-200 bg-white p-6"
            >
              <p className="mb-4 text-sm text-gray-600">
                Not sure where to start? A legacy assessment shows you
                exactly what to modernize first.
              </p>

              <button
                type="button"
                onClick={() => {
                  window.location.href = "/contact";
                }}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                Get A Legacy Assessment

                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45"
                />
              </button>
            </div>
          </div>

          {/* Right Benefits List */}
          <div ref={benefitsRef}>
            {benefits.map((benefit) => (
              <div
                key={benefit.number}
                className="why-benefit group flex gap-4 border-t border-gray-200 py-7 last:border-b sm:gap-6 lg:gap-8 lg:py-8"
              >
                <span className="flex-shrink-0 font-inter text-2xl font-bold text-gray-300 transition-colors duration-300 group-hover:text-primary lg:text-3xl">
                  {benefit.number}
                </span>

                <div>
                  <h3 className="mb-2 font-inter text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary sm:text-xl lg:text-2xl">
                    {benefit.title}
                  </h3>

                  <p className="max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPlaxonic;