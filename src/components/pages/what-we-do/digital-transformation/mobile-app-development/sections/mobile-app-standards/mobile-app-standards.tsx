import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Rocket, Activity, WifiOff, Lock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const mobileAppStandards = [
  {
    title: "Launches Fast",
    description:
      "Fast startup times and responsive interactions that make every tap feel immediate.",
    Icon: Rocket,
  },
  {
    title: "Runs Smoothly",
    description:
      "Fluid interactions, optimized across the stack for consistent performance.",
    Icon: Activity,
  },
  {
    title: "Works Offline",
    description:
      "An offline-first architecture keeps core experiences available and syncs reliably when connectivity returns.",
    Icon: WifiOff,
  },
  {
    title: "Protects Data",
    description:
      "Encrypted storage and secure auth that safeguard users at every layer.",
    Icon: Lock,
  },
];

const MobileAppStandards = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const progressLineRef = useRef<HTMLSpanElement>(null);
  const timelineItemsRef = useRef<HTMLDivElement[]>([]);


useEffect(() => {
  const section = sectionRef.current;
  const progressLine = progressLineRef.current;

  if (!section || !progressLine) return;

  const ctx = gsap.context(() => {
    // Animate the blue progress line
    gsap.fromTo(
      progressLine,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 65%",
          end: "bottom 75%",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      }
    );

    // Animate each timeline item as the line reaches it
    timelineItemsRef.current.forEach((item) => {
      if (!item) return;

      const iconBox = item.querySelector(".timeline-icon-box");
      const icon = item.querySelector(".timeline-icon");
      const title = item.querySelector(".timeline-title");
      const description = item.querySelector(".timeline-description");

      if (!iconBox || !icon || !title || !description) return;

      ScrollTrigger.create({
        trigger: item,
        start: "top 65%",
        end: "top 35%",
        onEnter: () => {
          gsap.to(iconBox, {
            borderColor: "#1ba3dc",
            backgroundColor: "#1ba3dc",
            duration: 0.3,
          });

          gsap.to(icon, {
            color: "#ffffff",
            duration: 0.3,
          });

          gsap.to(title, {
            color: "#1ba3dc",
            duration: 0.3,
          });

          gsap.to(description, {
            color: "#4b5563",
            duration: 0.3,
          });
        },
        onLeaveBack: () => {
          gsap.to(iconBox, {
            borderColor: "#e5e7eb",
            backgroundColor: "#ffffff",
            duration: 0.3,
          });

          gsap.to(icon, {
            color: "#9ca3af",
            duration: 0.3,
          });

          gsap.to(title, {
            color: "#9ca3af",
            duration: 0.3,
          });

          gsap.to(description, {
            color: "#9ca3af",
            duration: 0.3,
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
      className="relative w-full overflow-hidden bg-gray-50 pt-14 pb-16 sm:pt-16 sm:pb-20 lg:pb-32"
    >
      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 items-start gap-10 sm:gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 xl:gap-28">
          {/* Left Content */}
          <div>
            <div className="mb-8 flex items-center gap-4">
              <span className="text-xs font-semibold tracking-[0.3em] text-gray-500 uppercase">
                The Plaxonic Standard
              </span>
            </div>

            <h2 className="mb-8 font-inter text-3xl leading-[1.06] font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-6xl">
              Custom Mobile Apps,
              <br />
              Engineered To{" "}
              <span className="relative inline-block text-primary">
                Perform.
                <span className="absolute right-0 -bottom-2 left-0 h-[3px] origin-left bg-primary" />
              </span>
            </h2>

            <div className="mb-6 flex gap-4">
              <span className="w-[3px] shrink-0 bg-primary/60" />

              <p className="text-sm leading-relaxed text-gray-600 sm:text-base lg:text-lg">
                The experience judges a mobile app on how quickly it launches,
                how smoothly it runs, and how securely it handles user data.
                Meeting these standards requires strong engineering, and our
                team delivers it effortlessly.
              </p>
            </div>

            <p className="max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
              That is how we approach custom mobile app development. We treat
              every build as product engineering. Our mobile app development
              services cover the right technical approach, native or
              cross-platform architecture, performance and scalability, and AI
              where it genuinely improves the experience. The result is custom
              mobile software built to perform today and evolve with your
              business.
            </p>
          </div>

          {/* Right Timeline */}
          <div className="relative">
            {/* Static Gray Timeline */}
            <span className="absolute top-4 bottom-4 left-6 w-px bg-gray-200" />

            {/* Animated Primary Timeline */}
            <span
              ref={progressLineRef}
              className="absolute top-4 bottom-4 left-6 w-px origin-top bg-primary"
              style={{ transform: "scaleY(0)" }}
            />

            {/* Timeline Items */}

{mobileAppStandards.map(({ title, description, Icon }, index) => (
  <div
    key={title}
    ref={(element) => {
      if (element) {
        timelineItemsRef.current[index] = element;
      }
    }}
    className="relative flex gap-6 pb-10 last:pb-0"
  >
    {/* Icon Box */}
    <div className="timeline-icon-box relative z-10 flex h-12 w-12 shrink-0 items-center justify-center border border-gray-200 bg-white transition-colors duration-300">
      <Icon className="timeline-icon h-5 w-5 text-gray-400 transition-colors duration-300" />
    </div>

    {/* Item Content */}
    <div
      className={`flex-1 ${
        index < mobileAppStandards.length - 1
          ? "border-b border-gray-200 pb-9"
          : ""
      }`}
    >
      <div className="flex min-h-[3rem] items-center gap-3">
        <h3 className="timeline-title text-lg font-semibold text-gray-400 transition-colors duration-300 lg:text-xl">
          {title}
        </h3>
      </div>

      <p className="timeline-description mt-2 max-w-md text-sm leading-relaxed text-gray-400 transition-colors duration-300 lg:text-base">
        {description}
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

export default MobileAppStandards;
