
import {
  Sparkles,
  Cpu,
  Bot,
  ScanEye,
  Mic,
  RefreshCw,
  ArrowUpRight,
} from "lucide-react";

const aiFeatures = [
  {
    title: "On-Device ML and Intelligent Personalization",
    Icon: Cpu,
  },
  {
    title: "In-App AI Assistants and Copilots",
    Icon: Bot,
  },
  {
    title: "Computer Vision and Image Recognition",
    Icon: ScanEye,
  },
  {
    title: "Voice and Conversational Interfaces",
    Icon: Mic,
  },
];

const modernizationFeatures = [
  "Modern Architecture",
  "Refreshed UI/UX",
  "Better Performance",
  "New Platform Capabilities",
];

const MobileAIAndModernization = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#070809] py-16 sm:py-20 md:py-24 lg:py-36">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[8%] h-[620px] w-[620px] rounded-full bg-primary/25 blur-[180px]" />

        <div className="absolute right-[5%] bottom-[-20%] h-[540px] w-[540px] rounded-full bg-primary/15 blur-[160px]" />
      </div>

      {/* Background Dot Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Heading */}
        <div className="mb-10 max-w-3xl sm:mb-14 lg:mb-16">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-primary" />

            <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              AI-Native &amp; Modernization
            </span>
          </div>

          <h2 className="mb-7 font-inter text-3xl leading-[1.08] font-bold tracking-tight text-white sm:text-4xl lg:text-6xl">
            Developing Your App In A{" "}
            <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-primary">
              Smarter Way
            </span>
            .
          </h2>

          <p className="max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
            We help you stay updated in the mobile app development landscape
            by building intelligence into your app and modernizing the ones
            that have fallen behind.
          </p>
        </div>

        {/* Main Feature Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-7">
          {/* AI-Native Mobile Apps */}
          <article className="group relative overflow-hidden border border-white/10 bg-white/[0.035] backdrop-blur-xl transition-colors duration-300 hover:border-primary/30 lg:col-span-2">
            {/* Decorative Network */}
            <NetworkMesh />

            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/20 blur-[120px]" />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0b0e12] via-[#0b0e12]/85 to-transparent" />

            <div className="relative z-[1] max-w-2xl p-6 sm:p-8 lg:p-10">
              {/* Card Heading */}
              <div className="mb-6 flex items-center gap-3 sm:gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-primary/15 text-primary">
                  <Sparkles className="h-5 w-5" />
                </div>

                <h3 className="font-inter text-xl font-bold text-white sm:text-2xl lg:text-3xl">
                  AI-Native Mobile Apps
                </h3>
              </div>

              <p className="mb-8 text-base leading-relaxed text-gray-300">
                As a leading mobile app development company, we build
                AI-intelligent apps that your business needs and show how
                they can improve your current app. After discussing your
                vision, our developers engineer it with a focus on
                performance, privacy, and battery life.
              </p>

              {/* AI Features */}
              <div className="mb-8 grid grid-cols-1 gap-2.5">
                {aiFeatures.map(({ title, Icon }) => (
                  <div
                    key={title}
                    className="group/feature flex items-center gap-3.5 border border-white/10 bg-white/[0.03] px-4 py-3.5 transition-colors duration-300 hover:border-primary/40 hover:bg-white/[0.06]"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary/15 text-primary transition-colors duration-300 group-hover/feature:bg-primary/25">
                      <Icon className="h-4 w-4" />
                    </div>

                    <span className="text-sm leading-snug font-medium text-gray-200">
                      {title}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="group/button inline-flex max-w-full items-center justify-center gap-3 border border-white/15 bg-white/[0.04] px-5 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:border-primary/50 hover:bg-white/[0.08] sm:px-7"
              >
                <span>Explore AI-Native Mobile Apps</span>

                <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover/button:rotate-45" />
              </a>
            </div>
          </article>

          {/* Mobile App Modernization */}
          <article className="group relative flex flex-col overflow-hidden border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-colors duration-300 hover:border-primary/30 sm:p-8 lg:p-10">
            <NetworkMesh />

            <div className="pointer-events-none absolute -top-20 -right-16 h-64 w-64 rounded-full bg-primary/20 blur-[120px]" />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0e12] via-[#0b0e12]/70 to-transparent" />

            <div className="relative z-[1] flex h-full flex-col">
              <div className="mb-6 flex h-11 w-11 items-center justify-center bg-primary/15 text-primary">
                <RefreshCw className="h-5 w-5" />
              </div>

              <h3 className="mb-4 font-inter text-xl font-bold text-white sm:text-2xl">
                Mobile App Modernization
              </h3>

              <p className="mb-8 text-base leading-relaxed text-gray-300">
                We help you revitalize your mobile app with modern
                architecture. Our designers provide a new UI/UX that
                improves performance on the new platform without disrupting
                your existing users.
              </p>

              {/* Modernization Benefits */}
              <div className="mt-auto flex flex-wrap gap-2">
                {modernizationFeatures.map((feature) => (
                  <span
                    key={feature}
                    className="border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-gray-300 transition-colors duration-300 hover:border-primary/40 hover:bg-primary/10"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

/* Decorative Network Background */
const NetworkMesh = () => {
  const lines = [
    [30, 50, 130, 90],
    [130, 90, 240, 130],
    [30, 50, 80, 180],
    [80, 180, 180, 250],
    [130, 90, 180, 250],
    [180, 250, 250, 290],
    [240, 130, 250, 290],
    [240, 130, 320, 200],
    [250, 290, 320, 200],
    [320, 200, 410, 150],
    [410, 150, 360, 120],
    [360, 120, 300, 60],
    [300, 60, 240, 130],
    [320, 200, 450, 250],
    [450, 250, 410, 150],
    [450, 250, 486, 330],
    [380, 310, 450, 250],
    [250, 290, 380, 310],
    [180, 250, 150, 340],
    [60, 300, 180, 250],
    [80, 180, 60, 300],
    [110, 260, 180, 250],
    [110, 260, 80, 180],
    [220, 40, 240, 130],
    [220, 40, 300, 60],
    [470, 80, 300, 60],
    [470, 80, 410, 150],
    [320, 200, 380, 310],
  ];

  const nodes = [
    [30, 50],
    [130, 90],
    [80, 180],
    [60, 300],
    [180, 250],
    [150, 340],
    [240, 130],
    [250, 290],
    [320, 200],
    [300, 60],
    [380, 310],
    [410, 150],
    [450, 250],
    [470, 80],
    [360, 120],
    [220, 40],
    [486, 330],
    [110, 260],
  ];

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-80"
      viewBox="0 0 500 360"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      {lines.map(([x1, y1, x2, y2], index) => (
        <line
          key={`line-${index}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="rgba(150,185,215,0.16)"
          strokeWidth="0.5"
        />
      ))}

      {nodes.map(([cx, cy], index) => (
        <circle
          key={`node-${index}`}
          cx={cx}
          cy={cy}
          r={index % 5 === 0 ? 2.1 : 1.3}
          fill={
            index % 3 === 0
              ? "rgba(150,200,235,0.85)"
              : "rgba(120,160,195,0.5)"
          }
        />
      ))}
    </svg>
  );
};

export default MobileAIAndModernization;
