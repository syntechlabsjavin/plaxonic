import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const migrationSteps = [
  {
    number: "01",
    progress: 5,
    title: "Assess & Map",
    description:
      "We audit the codebase, dependencies, and data, then map the highest-value, lowest-risk slices to move first.",
  },
  {
    number: "02",
    progress: 25,
    title: "Establish the Strangler",
    description:
      "A routing layer sits in front of the legacy system, so new modern services can take over functions one at a time.",
  },
  {
    number: "03",
    progress: 60,
    title: "Migrate Incrementally",
    description:
      "We carve out and rebuild capabilities slice by slice, redirecting traffic as each one goes live, with no downtime.",
  },
  {
    number: "04",
    progress: 100,
    title: "Decommission Legacy",
    description:
      "Once every function runs on the new platform, the old system is safely retired, and its costs disappear with it.",
  },
];

const IncrementalMigration = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const legendRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const legend = legendRef.current;
    const cards = cardsRef.current;

    if (!section || !heading || !legend || !cards) return;

    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        heading.children,
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 85%",
            once: true,
          },
        }
      );

      // Legend animation
      gsap.fromTo(
        legend,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: legend,
            start: "top 90%",
            once: true,
          },
        }
      );

      const cardsList = gsap.utils.toArray<HTMLElement>(
        ".migration-card",
        cards
      );

      // Cards appear one by one
      gsap.fromTo(
        cardsList,
        {
          opacity: 0,
          y: 45,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cards,
            start: "top 82%",
            once: true,
          },
        }
      );

      // Progress bars animate from 0% to their target percentages
      cardsList.forEach((card, index) => {
        const bar = card.querySelector<HTMLElement>(".migration-progress");
        const counter = card.querySelector<HTMLElement>(
          ".migration-percentage"
        );

        const target = migrationSteps[index].progress;

        if (!bar || !counter) return;

        const counterValue = { value: 0 };

        gsap.set(bar, { width: "0%" });

        ScrollTrigger.create({
          trigger: card,
          start: "top 88%",
          once: true,
          onEnter: () => {
            gsap.to(bar, {
              width: `${target}%`,
              duration: 1.5,
              delay: index * 0.12,
              ease: "power3.out",
            });

            gsap.to(counterValue, {
              value: target,
              duration: 1.5,
              delay: index * 0.12,
              ease: "power2.out",
              onUpdate: () => {
                counter.textContent = `${Math.round(
                  counterValue.value
                )}% modern`;
              },
            });
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-32"
    >
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Heading */}
        <div
          ref={headingRef}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 lg:mb-20"
        >
          <div className="mb-6 inline-flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              How We Migrate
            </span>
          </div>

          <h2 className="mb-6 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
            Incremental, Not{" "}
            <span className="text-gray-300">Big-Bang</span>.
          </h2>

          <p className="text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
            Using the strangler-fig pattern, we replace the old system piece
            by piece while it keeps running, so there's no risky overnight
            cutover and the business never stops.
          </p>
        </div>

        {/* Legend */}
        <div
          ref={legendRef}
          className="mb-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          <span className="flex items-center gap-2 text-sm text-gray-500">
            <span className="h-3 w-3 bg-gray-300" />
            Legacy system
          </span>

          <span className="flex items-center gap-2 text-sm text-gray-500">
            <span className="h-3 w-3 bg-primary" />
            Modern platform
          </span>
        </div>

        {/* Migration Steps */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 gap-6 md:grid-cols-4 lg:gap-7"
        >
          {migrationSteps.map((step) => (
            <div
              key={step.number}
              className="migration-card group relative flex flex-col border border-gray-200 p-6 transition-colors duration-300 hover:border-primary/40 lg:p-7"
            >
              {/* Progress Bar */}
              <div className="relative mb-6 h-3 w-full overflow-hidden bg-gray-200">
                <div className="migration-progress absolute inset-y-0 left-0 bg-primary" />
              </div>

              {/* Step Number and Percentage */}
              <div className="mb-2 flex items-baseline gap-3">
                <span className="font-inter text-2xl font-bold text-gray-300 transition-colors duration-300 group-hover:text-primary">
                  {step.number}
                </span>

                <span className="migration-percentage font-mono text-xs font-semibold text-primary">
                  0% modern
                </span>
              </div>

              {/* Content */}
              <h3 className="mb-2.5 font-inter text-lg font-bold leading-snug text-gray-900 lg:text-xl">
                {step.title}
              </h3>

              <p className="text-sm leading-relaxed text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IncrementalMigration;