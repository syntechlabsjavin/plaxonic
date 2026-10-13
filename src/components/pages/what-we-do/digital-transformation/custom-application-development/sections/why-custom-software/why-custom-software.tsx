import { useEffect, useRef } from "react";
import { Check, X } from "lucide-react";

interface WhyCustomSoftwareProps {
  eyebrow?: string;
  heading?: string;
  highlightedHeading?: string;
  description?: string;
  videoSrc?: string;
  offTheShelfTitle?: string;
  offTheShelfSubtitle?: string;
  customTitle?: string;
  customSubtitle?: string;
  offTheShelfPoints?: string[];
  customPoints?: string[];
}

const DEFAULT_OFF_THE_SHELF_POINTS = [
  "You bend your process to fit the tool's assumptions",
  "Pay forever for features you'll never switch on",
  "Critical edge cases left unsupported—handled in spreadsheets",
  "Data trapped behind limited exports and locked APIs",
  "Roadmap set by the vendor, not your priorities",
  "Per-seat pricing that punishes you for growing",
];

const DEFAULT_CUSTOM_POINTS = [
  "The software mirrors exactly how your teams already work",
  "You pay once to build only what you actually use",
  "Every edge case designed in from day one",
  "You own the data, the code, and the integrations",
  "The roadmap is yours—we ship what moves your business",
  "Scales with your usage, not a vendor's seat counter",
];

const WhyCustomSoftware = ({
  eyebrow = "Why Custom",
  heading = "Off-The-Shelf Compromises.",
  highlightedHeading = "Custom Doesn't.",
  description = "Generic software is built for the average of everyone. Your business isn't average—and the difference shows up everywhere it matters.",
  videoSrc = "/src/assets/what-we-do/pt1.mp4",
  offTheShelfTitle = "Off-the-shelf software",
  offTheShelfSubtitle = "Built for the average customer",
  customTitle = "Custom-built by Plaxonic",
  customSubtitle = "Built for exactly one customer: you",
  offTheShelfPoints = DEFAULT_OFF_THE_SHELF_POINTS,
  customPoints = DEFAULT_CUSTOM_POINTS,
}: WhyCustomSoftwareProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = Array.from(
      section.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(24px)";
      element.style.transition =
        "opacity 700ms ease, transform 700ms ease";

      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-black py-16 sm:py-20 md:py-24 lg:py-36"
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-0 bg-black/80" />

      {/* Decorative background glow */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div
          className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full blur-[150px]"
          style={{
            background: "#1ba3dd",
            opacity: 0.2,
          }}
        />

        <div
          className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full blur-[150px]"
          style={{
            background: "#1ba3dd",
            opacity: 0.14,
          }}
        />
      </div>

      <div className="relative z-[2] mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section heading */}
        <div
          data-reveal
          className="mb-10 text-center sm:mb-14"
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {eyebrow}
            </span>
          </div>

          <h2 className="mb-4 font-inter text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {heading}{" "}
            <span className="text-primary">
              {highlightedHeading}
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg">
            {description}
          </p>
        </div>

        {/* Comparison cards */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Off-the-shelf card */}
          <div
            data-reveal
            className="relative border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:p-10"
          >
            <div className="mb-7 flex items-center gap-3 border-b border-white/10 pb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-white/[0.06]">
                <X
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-300">
                  {offTheShelfTitle}
                </h3>

                <p className="text-xs text-gray-500">
                  {offTheShelfSubtitle}
                </p>
              </div>
            </div>

            <ul className="space-y-4">
              {offTheShelfPoints.map((point, index) => (
                <li
                  key={`${index}-${point}`}
                  className="flex items-start gap-3"
                >
                  <X
                    className="mt-1 h-4 w-4 shrink-0 text-gray-500"
                    aria-hidden="true"
                  />

                  <span className="text-sm leading-relaxed text-gray-400">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Custom software card */}
          <div
            data-reveal
            className="relative border border-primary/40 bg-primary/[0.07] p-6 sm:p-8 lg:p-10"
          >
            <div className="mb-7 flex items-center gap-3 border-b border-primary/20 pb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-primary/20">
                <Check
                  className="h-5 w-5 text-primary-light"
                  aria-hidden="true"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  {customTitle}
                </h3>

                <p className="text-xs text-primary-light/70">
                  {customSubtitle}
                </p>
              </div>
            </div>

            <ul className="space-y-4">
              {customPoints.map((point, index) => (
                <li
                  key={`${index}-${point}`}
                  className="flex items-start gap-3"
                >
                  <Check
                    className="mt-1 h-4 w-4 shrink-0 text-primary-light"
                    aria-hidden="true"
                  />

                  <span className="text-sm leading-relaxed text-gray-200">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCustomSoftware;