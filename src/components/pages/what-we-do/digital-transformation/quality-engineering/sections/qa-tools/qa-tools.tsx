import { useEffect, useRef, useState } from "react";

interface Tool {
  name: string;
  logo?: string;
}

const firstRowTools: Tool[] = [
  { name: "Selenium", logo: "https://plaxonic.com/logos/qa/selenium.svg" },
  { name: "Cypress", logo: "https://plaxonic.com/logos/qa/cypress.svg" },
  { name: "Playwright", logo: "https://plaxonic.com/logos/qa/playwright.svg" },
  { name: "Appium", logo: "https://plaxonic.com/logos/qa/appium.svg" },
  { name: "JUnit", logo: "https://plaxonic.com/logos/qa/junit.svg" },
  { name: "TestNG" },
  { name: "Jest", logo: "https://plaxonic.com/logos/qa/jest.svg" },
  { name: "Mocha", logo: "https://plaxonic.com/logos/qa/mocha.svg" },
  { name: "Cucumber", logo: "https://plaxonic.com/logos/qa/cucumber.svg" },
];

const secondRowTools: Tool[] = [
  { name: "JMeter", logo: "https://plaxonic.com/logos/qa/jmeter.svg" },
  { name: "k6", logo: "https://plaxonic.com/logos/qa/k6.svg" },
  { name: "Gatling", logo: "https://plaxonic.com/logos/qa/gatling.svg" },
  { name: "Postman", logo: "https://plaxonic.com/logos/qa/postman.svg" },
  { name: "REST-assured" },
  { name: "BrowserStack", logo: "https://plaxonic.com/logos/qa/browserstack.svg" },
  { name: "Sauce Labs", logo: "https://plaxonic.com/logos/qa/saucelabs.svg" },
  { name: "Jenkins", logo: "https://plaxonic.com/logos/qa/jenkins.svg" },
  { name: "GitHub Actions", logo: "https://plaxonic.com/logos/qa/ghactions.svg" },
];

interface ToolRowProps {
  tools: Tool[];
  direction: "left" | "right";
  duration: number;
}

const ToolRow = ({ tools, direction, duration }: ToolRowProps) => {
  // Duplicate the list to create a seamless infinite marquee.
  const duplicatedTools = [...tools, ...tools];

  return (
    <div className="flex overflow-hidden">
      <div
        className={`qa-marquee-track flex w-max flex-shrink-0 gap-4 pr-4 ${
          direction === "left"
            ? "qa-marquee-left"
            : "qa-marquee-right"
        }`}
        style={{
          animationDuration: `${duration}s`,
        }}
      >
        {duplicatedTools.map((tool, index) => (
          <div
            key={`${tool.name}-${index}`}
            className="group inline-flex flex-shrink-0 items-center gap-2.5 whitespace-nowrap border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-700 transition-colors duration-300 hover:border-primary/40 hover:text-primary md:text-base"
          >
            {tool.logo ? (
              <img
                src={tool.logo}
                alt={`${tool.name} logo`}
                className="h-5 w-5 flex-shrink-0 object-contain transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            ) : (
              <span className="h-1.5 w-1.5 flex-shrink-0 bg-primary" />
            )}

            {tool.name}
          </div>
        ))}
      </div>
    </div>
  );
};

const QATools = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-gray-50 py-16 sm:py-20 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Heading */}
        <div
          className={`mb-10 flex flex-col gap-6 transition-all duration-1000 ease-out sm:mb-12 lg:mb-14 lg:flex-row lg:items-end lg:justify-between ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="max-w-xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Our Toolbox
              </span>
            </div>

            <h2 className="font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Tools We Test{" "}
              <span className="text-gray-300">With</span>.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
            We're tool-agnostic and pick the right stack for your platform,
            languages, and team, then make it run reliably in your pipeline.
          </p>
        </div>
      </div>

      {/* Animated Tool Marquees */}
      <div
        className={`relative space-y-4 transition-all duration-1000 ease-out ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
        style={{ transitionDelay: "200ms" }}
      >
        {/* Left Edge Fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-12 bg-gradient-to-r from-gray-50 to-transparent sm:w-24" />

        {/* Right Edge Fade */}
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-12 bg-gradient-to-l from-gray-50 to-transparent sm:w-24" />

        <ToolRow
          tools={firstRowTools}
          direction="left"
          duration={45}
        />

        <ToolRow
          tools={secondRowTools}
          direction="right"
          duration={50}
        />
      </div>

      {/* Marquee Animation Styles */}
      <style>{`
        .qa-marquee-track {
          will-change: transform;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .qa-marquee-left {
          animation-name: qa-scroll-left;
        }

        .qa-marquee-right {
          animation-name: qa-scroll-right;
        }

        @keyframes qa-scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes qa-scroll-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        @media (hover: hover) {
          .qa-marquee-track:hover {
            animation-play-state: paused;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .qa-marquee-track {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default QATools;