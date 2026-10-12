
import {
  BadgeCheck,
  Layers,
  Gauge,
  ShieldCheck,
  Star,
} from "lucide-react";

interface Benefit {
  title: string;
  description: string;
  icon: React.ElementType;
}

const BENEFITS: Benefit[] = [
  {
    title: "Expertise Across Mobile Platforms",
    description:
      "Our engineers have extensive experience across iOS, Android, React Native, and Flutter. We choose the right approach for your product, balancing native performance with the flexibility and efficiency of cross-platform development.",
    icon: Layers,
  },
  {
    title: "Performance First",
    description:
      "Smooth 60fps interactions, fast launches, and efficient battery use keep the experience responsive. We benchmark and optimize across the stack to maintain performance as your app and user base grow.",
    icon: Gauge,
  },
  {
    title: "Enterprise-Grade Security",
    description:
      "We engineer security into every layer with biometrics, encrypted storage, certificate pinning, and OWASP Mobile Top 10 practices.",
    icon: ShieldCheck,
  },
  {
    title: "App Store Success",
    description:
      "We manage your App Store and Google Play presence across ASO, phased rollouts, updates, and optimization to improve discoverability and support sustained app growth.",
    icon: Star,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100 py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section heading */}
        <div className="mb-10 max-w-3xl sm:mb-14 lg:mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Why Plaxonic
            </span>
          </div>

          <h2 className="font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-6xl lg:text-7xl">
            Why Organizations{" "}
            <span className="text-gray-300">Choose Us</span>.
          </h2>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-7">
          {/* Featured card */}
          <div className="group relative flex min-h-[340px] flex-col justify-between overflow-hidden bg-[#15365f] p-6 text-white sm:p-8 lg:p-12">
            {/* Background image */}
            <img
              src="/src/assets/mobile-application-development/organization.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-bottom mix-blend-multiply"
            />

            {/* Background glow effects */}
            <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-80 rounded-full bg-primary/30 blur-[110px]" />
            <div className="pointer-events-none absolute -bottom-24 right-0 h-72 w-96 bg-primary/25 blur-[120px]" />

            <div className="relative z-10">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center bg-primary">
                  <BadgeCheck
                    size={24}
                    strokeWidth={2}
                    aria-hidden="true"
                    className="text-white"
                  />
                </div>

                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">
                  Zero Error Policy
                </span>
              </div>

              <h3 className="mb-5 font-inter text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                Production-Ready, by Standard
              </h3>

              <p className="max-w-xl text-sm leading-relaxed text-gray-300 sm:text-base lg:text-lg">
                Through our Zero Error Policy, we measure success by
                production stability. We build reliable, fully tested software
                engineered to perform seamlessly under real-world usage.
              </p>
            </div>

            {/* Animated bottom border */}
            <span className="absolute bottom-0 left-0 right-0 z-10 h-1 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />
          </div>

          {/* Benefit cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-7">
            {BENEFITS.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="group relative flex flex-col overflow-hidden border border-gray-200 bg-white p-7 transition-colors duration-300 hover:border-primary/40"
                >
                  {/* Icon */}
                  <div className="mb-5 flex h-12 w-12 items-center justify-center bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20">
                    <Icon
                      size={24}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mb-2.5 text-base font-semibold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-primary lg:text-lg">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-gray-600">
                    {benefit.description}
                  </p>

                  {/* Animated bottom border */}
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
