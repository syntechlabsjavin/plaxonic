import { useEffect, useRef, useState } from "react";

interface StatCard {
  value: string;
  label: string;
  description: string;
  image: string;
  dark: boolean;
}

const STAT_CARDS: StatCard[] = [
  {
    value: "1800+",
    label: "Enterprise Projects",
    description:
      "Production-ready systems delivered across 40+ countries for global enterprises worldwide.",
    image: "/aCard1.png",
    dark: false,
  },
  {
    value: "92%+",
    label: "Production Success Rate",
    description:
      "The systems that actually ship and deliver measurable business impact at scale.",
    image: "/aCard2.png",
    dark: true,
  },
  {
    value: "200+",
    label: "AI & Engineering Specialists",
    description:
      "Globally distributed teams building production AI systems, cloud platforms, enterprise software daily.",
    image: "/aCard4.png",
    dark: true,
  },
  {
    value: "90%",
    label: "Client Retention",
    description:
      "Long-term partnerships built on delivery excellence, trust, and measurable business outcomes.",
    image: "/aCard3.png",
    dark: true,
  },
];

function useInView<T extends HTMLElement>(threshold = 0.3) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

const StatsSection = () => {
  const { ref: sectionRef, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-white">
      {/* Dot-grid / glow background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #1BA3DD 1px, transparent 1px), linear-gradient(to bottom, #1BA3DD 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #1BA3DD 1px, transparent 1px), linear-gradient(to bottom, #1BA3DD 1px, transparent 1px)",
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
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-white/40" />
      </div>

      <div
        ref={sectionRef}
        className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 w-full py-20 lg:py-0"
      >
        {/* Headline */}
        <p
          className={`mb-12 lg:mb-16 max-w-4xl text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.2] 2xl:text-[4rem] font-medium text-gray-900 transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-24"
          }`}
        >
          Trusted by global enterprises across{" "}
          <span className="text-gray-400">40+ countries</span>, we deliver
          production-ready <span className="text-gray-900">AI systems</span>,
          cloud-native platforms, and measurable business transformation.
        </p>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STAT_CARDS.map((card, index) => (
            <div
              key={card.label}
              className={`relative overflow-hidden bg-cover bg-center h-[360px] sm:h-[400px] lg:h-[430px] border border-gray-200 transition-all duration-700 ease-out ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                backgroundImage: `url("${card.image}")`,
                transitionDelay: `${index * 120}ms`,
              }}
            >
              <div className="relative z-10 p-4 sm:p-6 lg:p-6 2xl:p-8 h-full flex flex-col">
                <h3 className="mb-3 leading-snug">
                  <span
                    className={`block text-[40px] sm:text-[48px] 2xl:text-[56px] font-bold leading-none ${
                      card.dark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {card.value}
                  </span>
                  <span
                    className={`text-[16px] sm:text-[16px] 2xl:text-[18px] font-medium ${
                      card.dark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {card.label}
                  </span>
                </h3>
                <p
                  className={`text-[14px] sm:text-[14px] 2xl:text-[16px] font-normal leading-relaxed max-w-[90%] ${
                    card.dark ? "text-white/80" : "text-gray-600"
                  }`}
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
