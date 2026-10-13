import { useEffect, useRef } from "react";
import {
  Clock,
  Puzzle,
  ServerCrash,
  UserRoundX,
  Lock,
  Banknote,
  Unplug,
  GitBranch,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface LegacySign {
  title: string;
  description: string;
  icon: LucideIcon;
}

const legacySigns: LegacySign[] = [
  {
    title: "Releases Take Weeks",
    description:
      "Every change is risky, manual, and slow, so shipping anything new is a project in itself.",
    icon: Clock,
  },
  {
    title: "Nobody Dares Touch The Code",
    description:
      "Tribal knowledge, no tests, and a fragile codebase mean small edits cause big outages.",
    icon: Puzzle,
  },
  {
    title: "Frequent Outages",
    description:
      "The system buckles under load it was never designed for, and downtime is becoming routine.",
    icon: ServerCrash,
  },
  {
    title: "Can't Hire For The Stack",
    description:
      "The language or framework is end-of-life and the engineers who know it are retiring.",
    icon: UserRoundX,
  },
  {
    title: "Security & Compliance Gaps",
    description:
      "Unsupported components and missing patches leave you exposed and failing audits.",
    icon: Lock,
  },
  {
    title: "Spiraling Maintenance Bills",
    description:
      "Most of the budget goes to keeping it running, leaving nothing for innovation.",
    icon: Banknote,
  },
  {
    title: "Can't Integrate Or Scale",
    description:
      "Rigid architecture makes new APIs, partners, and channels painfully hard to add.",
    icon: Unplug,
  },
  {
    title: "Stuck On-Premise",
    description:
      "You can't take advantage of cloud elasticity, automation, or modern tooling.",
    icon: GitBranch,
  },
];

const LegacySignsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const cards = cardsRef.current;

    if (!section || !heading || !cards) return;

    const ctx = gsap.context(() => {
      // Heading animation: fade in and move upward.
      gsap.fromTo(
        heading.children,
        {
          opacity: 0,
          y: 30,
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

      // Cards animate from minimum opacity and scale to full size.
      gsap.fromTo(
        cards.children,
        {
          opacity: 0,
          y: 40,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: {
            each: 0.12,
            from: "start",
          },
          ease: "power3.out",
          scrollTrigger: {
            trigger: cards,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-16 sm:py-20 lg:py-32"
    >
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section heading */}
        <div
          ref={headingRef}
          className="mb-10 max-w-3xl sm:mb-14 lg:mb-16"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Is It Time?
            </span>
          </div>

          <h2 className="mb-8 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-7xl">
            Signs You've{" "}
            <span className="text-gray-300">Outgrown It</span>.
          </h2>

          <div className="flex gap-4">
            <div className="w-[3px] flex-shrink-0 bg-primary" />

            <p className="text-sm text-gray-600 sm:text-base md:text-lg">
              If a few of these sound familiar, your systems are
              costing you more than you think. The good news: each
              one is fixable.
            </p>
          </div>
        </div>

        {/* Legacy warning cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7"
        >
          {legacySigns.map((sign) => {
            const Icon = sign.icon;

            return (
              <div
                key={sign.title}
                className="group relative overflow-hidden border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/[0.05] sm:p-7"
              >
                {/* Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center border border-gray-200 transition-colors duration-300 group-hover:border-primary/40 group-hover:bg-primary/5">
                  <Icon
                    className="h-6 w-6 text-gray-400 transition-colors duration-300 group-hover:text-primary"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                </div>

                {/* Card content */}
                <h3 className="mb-2 font-inter text-base font-bold leading-snug text-gray-900 lg:text-lg">
                  {sign.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-600">
                  {sign.description}
                </p>

                {/* Animated hover underline */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LegacySignsSection;