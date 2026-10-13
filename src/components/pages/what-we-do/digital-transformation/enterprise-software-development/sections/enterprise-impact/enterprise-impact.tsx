import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Compass, Lock, TrendingUp, Handshake } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  {
    value: "99.99%",
    description: "uptime across mission-critical systems",
    progress: 0.99,
  },
  {
    value: "10M+",
    description: "users supported on platforms we've built",
    progress: 0.88,
  },
  {
    value: "40%",
    description: "faster delivery than in-house build-outs",
    progress: 0.4,
  },
  {
    value: "100%",
    description: "audit-ready — SOC 2 & ISO 27001 aligned",
    progress: 1,
  },
];

const features = [
  {
    icon: Compass,
    title: "Architecture-first",
    description:
      "We design for scale and change before a line of production code is written.",
  },
  {
    icon: Lock,
    title: "Security baked in",
    description:
      "Threat modeling and compliance are part of delivery, never an afterthought.",
  },
  {
    icon: TrendingUp,
    title: "Built to scale",
    description:
      "Systems that grow from launch to millions of users without a rewrite.",
  },
  {
    icon: Handshake,
    title: "Long-term partnership",
    description:
      "Dedicated teams that stay, so your platform keeps evolving with the business.",
  },
];

const EnterpriseImpact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const motion = gsap.matchMedia();

      motion.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          fullMotion: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { reduceMotion } = context.conditions as {
            reduceMotion: boolean;
            fullMotion: boolean;
          };

          if (reduceMotion) return;

          // Heading entrance
          gsap.from(".impact-heading", {
            autoAlpha: 0,
            y: 35,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".impact-heading",
              start: "top 85%",
              once: true,
            },
          });

          // Metrics enter in sequence
          gsap.from(".impact-metric", {
            autoAlpha: 0,
            y: 28,
            duration: 0.7,
            stagger: 0.14,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".impact-metrics",
              start: "top 82%",
              once: true,
            },
          });

          // Animate each metric bar from zero to its target
          section
            .querySelectorAll<HTMLElement>(".impact-progress")
            .forEach((bar) => {
              const target = Number(bar.dataset.progress ?? 1);

              gsap.fromTo(
                bar,
                { scaleX: 0 },
                {
                  scaleX: target,
                  duration: 1.4,
                  ease: "power3.out",
                  scrollTrigger: {
                    trigger: bar,
                    start: "top 90%",
                    once: true,
                  },
                },
              );
            });

          // Disclaimer entrance
          gsap.from(".impact-disclaimer", {
            autoAlpha: 0,
            y: 12,
            duration: 0.65,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".impact-disclaimer",
              start: "top 92%",
              once: true,
            },
          });

          // Feature cards enter with a stagger
          gsap.from(".impact-feature", {
            autoAlpha: 0,
            y: 32,
            duration: 0.75,
            stagger: 0.14,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".impact-features",
              start: "top 85%",
              once: true,
            },
          });

          // Subtle, continuous background glow
          gsap.to(".impact-glow", {
            opacity: (index) => (index === 0 ? 0.23 : 0.17),
            duration: 3.5,
            stagger: 0.8,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        },
      );

      return () => motion.revert();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-black py-16 sm:py-20 md:py-24 lg:py-36"
    >
      {/* Background image */}
      <img
        src="/src/assets/what-we-do/enterprise-impact-bg.jpg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
      />

      {/* Dark overlay */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-black/40" />

      {/* Blue ambient lighting */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div
          className="impact-glow absolute -left-24 -top-32 h-[440px] w-[520px] rounded-full blur-[150px]"
          style={{ background: "#1ba3dd", opacity: 0.16 }}
        />
        <div
          className="impact-glow absolute -bottom-32 right-1/4 h-[480px] w-[480px] rounded-full blur-[150px]"
          style={{ background: "#1ba3dd", opacity: 0.12 }}
        />
      </div>

      <div className="relative z-[2] mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Heading and metrics */}
        {/* Main impact section */}
        <div className="mb-16 grid grid-cols-1 gap-10 sm:mb-20 lg:mb-24 lg:grid-cols-[0.9fr_2.1fr] lg:gap-16 xl:gap-20">
          {/* Left heading */}
          <div className="impact-heading">
            <div className="mb-8 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
                The Plaxonic Impact
              </span>
            </div>

            <h2 className="max-w-[520px] font-inter text-4xl font-bold leading-[1.02] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[clamp(3.5rem,4.8vw,5.6rem)]">
              Proof At
              <span className="block text-primary">Enterprise</span>
              <span className="block">
                <span className="text-primary">Scale</span>.
              </span>
            </h2>
          </div>

          {/* Right metrics */}
          <div className="impact-metrics space-y-8 lg:space-y-10">
            {metrics.map((metric) => (
              <div
                key={metric.value}
                className="impact-metric border-b border-white/10 pb-7 last:border-0"
              >
                <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
                  <div className="font-inter text-5xl font-bold leading-none tracking-tight text-white sm:text-6xl lg:text-[4.5rem]">
                    {metric.value}
                  </div>

                  <p className="max-w-md text-left text-sm leading-relaxed text-gray-400 sm:text-right lg:text-base">
                    {metric.description}
                  </p>
                </div>

                {/* Animated progress bar */}
                <div className="h-2 w-full overflow-hidden bg-white/[0.07]">
                  <div
                    data-progress={metric.progress}
                    className="impact-progress h-full origin-left bg-gradient-to-r from-[#159bc5] to-[#42b8e0]"
                    style={{ transform: "scaleX(0)" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="impact-disclaimer mt-8 max-w-2xl text-xs leading-relaxed text-gray-400">
          Illustrative figures based on typical engagements. Your baseline and
          targets are modeled up front, never promised blind.
        </p>

        {/* Enterprise strengths */}
        <div className="impact-features grid grid-cols-1 gap-x-8 gap-y-10 border-t border-white/10 pt-14 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="impact-feature group">
              <div className="mb-5 flex h-12 w-12 items-center justify-center bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
              </div>

              <h3 className="mb-2 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-primary">
                {title}
              </h3>

              <p className="text-sm leading-relaxed text-gray-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseImpact;
