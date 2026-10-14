import { useEffect, useRef } from "react";
import {
  Boxes,
  Cloud,
  Database,
  MonitorSmartphone,
  Webhook,
  Cpu,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LegacyModernizeBg from "../../../../../../../assets/what-we-do/legacy-modernize-bg.png";

gsap.registerPlugin(ScrollTrigger);

interface ModernizationLayer {
  title: string;
  description: string;
  icon: LucideIcon;
}

const modernizationLayers: ModernizationLayer[] = [
  {
    title: "Monolith → Microservices",
    description:
      "Decompose tightly-coupled monoliths into independently deployable services with clean boundaries, so teams can ship in parallel without stepping on each other.",
    icon: Boxes,
  },
  {
    title: "On-Prem → Cloud",
    description:
      "Migrate workloads to AWS, Azure, or GCP with the right mix of containers, serverless, and managed services.",
    icon: Cloud,
  },
  {
    title: "Database Modernization",
    description:
      "Move off legacy and proprietary databases to scalable, cost-efficient engines, with zero data loss.",
    icon: Database,
  },
  {
    title: "UI / UX Re-platforming",
    description:
      "Replace dated, hard-to-use front ends with fast, responsive, modern interfaces your users actually enjoy.",
    icon: MonitorSmartphone,
  },
  {
    title: "API Enablement",
    description:
      "Wrap legacy logic in clean, documented APIs so old systems can integrate with the modern world.",
    icon: Webhook,
  },
  {
    title: "Mainframe Modernization",
    description:
      "Re-host, re-factor, or re-platform mainframe workloads, preserving decades of business logic while shedding the cost and lock-in.",
    icon: Cpu,
  },
];

const WhatWeModernize = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const cards = cardsRef.current;

    if (!section || !heading || !cards) return;

    const ctx = gsap.context(() => {
      // Animate heading elements from below.
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

      // Animate cards from a smaller size and lower position.
      gsap.fromTo(
        cards.children,
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
          stagger: 0.12,
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
      className="relative overflow-hidden bg-[#070809] py-16 sm:py-20 lg:py-32"
    >
      {/* Background image */}
      <img
        src={LegacyModernizeBg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />

      {/* Ambient background glow */}
      <div className="pointer-events-none absolute bottom-[-20%] right-[-5%] h-[460px] w-[560px] rounded-full bg-primary/12 blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section heading */}
        <div
          ref={headingRef}
          className="mb-10 max-w-3xl sm:mb-14 lg:mb-16"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              What We Modernize
            </span>
          </div>

          <h2 className="mb-6 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            From The Metal Up To{" "}
            <span className="text-white/40">The Screen</span>.
          </h2>

          <p className="max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg">
            Whatever layer is holding you back, infrastructure,
            data, services, or interface, we modernize it as part
            of one coherent plan.
          </p>
        </div>

        {/* Modernization cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        >
          {modernizationLayers.map((layer) => {
            const Icon = layer.icon;

            return (
              <div
                key={layer.title}
                className="group relative overflow-hidden border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.05] sm:p-7 lg:p-8"
              >
                {/* Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center bg-primary/15 text-primary transition-colors duration-300 group-hover:bg-primary/25">
                  <Icon
                    className="h-6 w-6"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </div>

                {/* Card title */}
                <h3 className="mb-2.5 font-inter text-lg font-bold leading-snug text-white sm:text-xl">
                  {layer.title}
                </h3>

                {/* Card description */}
                <p className="max-w-xl text-sm leading-relaxed text-gray-400 md:text-base">
                  {layer.description}
                </p>

                {/* Animated bottom border */}
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

export default WhatWeModernize;