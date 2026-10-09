import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StatCard {
  value: string;
  label: string;
  description: string;
  bgImage: string;
  textColor: "dark" | "light";
  left: string;
  top: number;
}

const STAT_CARDS: StatCard[] = [
  {
    value: "1800+",
    label: "Enterprise Projects",
    description:
      "Production-ready systems delivered across 40+ countries for global enterprises worldwide.",
    bgImage: "https://plaxonic.com/aCard1.png",
    textColor: "dark",
    left: "0%",
    top: 0,
  },
  {
    value: "92%+",
    label: "Production Success Rate",
    description:
      "The systems that actually ship and deliver measurable business impact at scale.",
    bgImage: "https://plaxonic.com/aCard2.png",
    textColor: "light",
    left: "34%",
    top: 465,
  },
  {
    value: "200+",
    label: "AI & Engineering Specialists",
    description:
      "Globally distributed teams building production AI systems, cloud platforms, enterprise software daily.",
    bgImage: "https://plaxonic.com/aCard4.png",
    textColor: "light",
    left: "16%",
    top: 930,
  },
  {
    value: "90%",
    label: "Client Retention",
    description:
      "Long-term partnerships built on delivery excellence, trust, and measurable business outcomes.",
    bgImage: "https://plaxonic.com/aCard3.png",
    textColor: "light",
    left: "auto",
    top: 1395,
  },
];

const TrustedSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const xRef = useRef<HTMLDivElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const textEl = textRef.current;
    const xEl = xRef.current;
    const cardsWrapper = cardsWrapperRef.current;
    if (!section || !textEl || !xEl || !cardsWrapper) return;

    const ctx = gsap.context(() => {
      gsap.set(textEl, {
        xPercent: -116,
        scale: 0.7,
        opacity: 0,
        transformOrigin: "left center",
      });
      gsap.set(xEl, {
        scale: 1,
        x: 0,
        opacity: 1,
        transformOrigin: "center center",
      });
      gsap.set(cardsWrapper, {
        y: 590,
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=3200",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          // Prevent pin-spacer from expanding the page width
          pinSpacing: true,
        },
      });

      // PHASE 1
      tl.to(
        textEl,
        {
          xPercent: 0,
          opacity: 1,
          ease: "none",
          duration: 0.35,
        },
        0,
      );
      tl.to(
        xEl,
        {
          scale: 0.4,
          x: 310,
          ease: "none",
          duration: 0.35,
        },
        0,
      );

      // PHASE 2
      tl.to(
        textEl,
        {
          scale: 1,
          ease: "none",
          duration: 0.2,
        },
        0.35,
      );
      tl.to(
        xEl,
        {
          scale: 0,
          x: 460,
          opacity: 0,
          ease: "none",
          duration: 0.2,
        },
        0.35,
      );

      // PHASE 3
      tl.to(
        cardsWrapper,
        {
          opacity: 1,
          y: 500,
          ease: "none",
          duration: 0.08,
        },
        0.52,
      );
      tl.to(
        textEl,
        {
          opacity: 0.15,
          ease: "none",
          duration: 0.25,
        },
        0.55,
      );
      tl.to(
        cardsWrapper,
        {
          y: -760,
          ease: "none",
          duration: 0.45,
        },
        0.55,
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full max-w-[100vw] bg-white min-h-screen flex items-center overflow-hidden relative"
      style={{ overflowX: "hidden" }}
    >
      {/* Clip everything inside so GSAP transforms never expand page width */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Background layers */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #1BA3DD 1px, transparent 1px),
              linear-gradient(to bottom, #1BA3DD 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #1BA3DD 1px, transparent 1px),
              linear-gradient(to bottom, #1BA3DD 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, #1BA3DD 2px, transparent 2px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.08]"
          style={{
            background: "radial-gradient(circle, #1BA3DD 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, #1BA3DD 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg, transparent, transparent 4px, #1BA3DD 4px, #1BA3DD 5px
            )`,
          }}
        />
        <div
          className="absolute top-0 left-0 w-64 h-64 opacity-[0.1]"
          style={{
            background: "linear-gradient(135deg, #1BA3DD 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-64 h-64 opacity-[0.1]"
          style={{
            background: "linear-gradient(315deg, #1BA3DD 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-white/40 pointer-events-none" />

      {/* Main content — also clipped */}
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 w-full relative z-10 min-h-screen flex items-center overflow-hidden">
        {/* TEXT */}
        <div
          ref={textRef}
          className="absolute inset-0 flex items-center z-10 px-4 sm:px-6 lg:px-8 xl:px-16 overflow-hidden"
          style={{ opacity: 0 }}
        >
          <p className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:[font-size:3.25rem] lg:[line-height:1.2] 2xl:[font-size:4rem] font-medium text-gray-900 max-w-4xl">
            Trusted by global enterprises across{" "}
            <span className="text-gray-400">40+ countries</span>, we deliver
            production-ready <span className="text-gray-900">AI systems</span>,
            cloud-native platforms, and measurable business transformation.
          </p>
        </div>

        {/* X LOGO */}
        <div
          ref={xRef}
          className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none overflow-hidden"
        >
          <img
            src="https://plaxonic.com/plaxonic-X.webp"
            alt="Plaxonic X"
            className="w-[240px] xs:w-[320px] sm:w-[450px] md:w-[650px] lg:w-[850px] h-auto select-none max-w-none"
            draggable={false}
          />
        </div>

        {/* STATS CARDS */}
        <div
          ref={cardsWrapperRef}
          className="absolute inset-x-0 top-0 z-30 px-4 sm:px-6 lg:px-8 xl:px-16 pointer-events-none overflow-hidden"
          style={{ opacity: 0 }}
        >
          <div
            className="max-w-[1800px] mx-auto relative"
            style={{ height: 1825 }}
          >
            {STAT_CARDS.map((card) => (
              <div
                key={card.value}
                className="absolute w-[85%] sm:w-[48%] lg:w-[32%] pointer-events-auto overflow-hidden bg-cover bg-center border border-gray-200"
                style={{
                  backgroundImage: `url("${card.bgImage}")`,
                  height: 430,
                  top: card.top,
                  left: card.left === "auto" ? undefined : card.left,
                  right: card.left === "auto" ? "0%" : undefined,
                }}
              >
                <div className="relative z-10 p-4 sm:p-6 lg:p-6 2xl:p-8 h-full flex flex-col">
                  <h3 className="mb-3 leading-snug">
                    <span
                      className={`text-[40px] sm:text-[52px] lg:text-[48px] 2xl:text-[63px] font-bold leading-none ${
                        card.textColor === "light"
                          ? "text-white"
                          : "text-gray-900"
                      }`}
                    >
                      {card.value}
                    </span>
                    <span
                      className={`text-[16px] sm:text-[18px] lg:text-[16px] 2xl:text-[20px] font-medium ml-1 ${
                        card.textColor === "light"
                          ? "text-white"
                          : "text-gray-900"
                      }`}
                    >
                      {card.label}
                    </span>
                  </h3>
                  <p
                    className={`text-[14px] sm:text-[16px] lg:text-[14px] 2xl:text-[18px] font-normal leading-relaxed max-w-[85%] ${
                      card.textColor === "light"
                        ? "text-white/80"
                        : "text-gray-600"
                    }`}
                  >
                    {card.description}
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

export default TrustedSection;