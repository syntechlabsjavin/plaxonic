import {
  BadgeCheck,
  Boxes,
  Gauge,
  ShieldCheck,
  Network,
} from "lucide-react";

const reasons = [
  {
    icon: Boxes,
    title: "Full-Stack Expertise",
    description:
      "Our full-stack web application development services cover frontend, backend, databases, and cloud infrastructure, giving you one accountable team to deliver your complete product.",
  },
  {
    icon: Gauge,
    title: "Performance-First Engineering",
    description:
      "We build speed into your application from day one using lazy loading, code splitting, edge caching, and continuous performance monitoring.",
  },
  {
    icon: ShieldCheck,
    title: "Security by Design",
    description:
      "We build security into every project phase using OWASP best practices, automated code analysis, and routine penetration testing to protect your data.",
  },
  {
    icon: Network,
    title: "Scalable Architecture",
    description:
      "We build cloud-native architectures with microservices, containerization, and auto-scaling to scale your application from initial users to millions.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100 py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Heading */}
        <div className="mb-14 max-w-3xl lg:mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Why Plaxonic
            </span>
          </div>

          <h2 className="font-inter text-[2rem] leading-[1.1] font-bold tracking-tight text-gray-900 xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Why Organizations{" "}
            <span className="text-gray-300">Choose Us</span>.
          </h2>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-7">
          {/* Featured Card */}
          <div className="group relative flex min-h-[320px] flex-col justify-between overflow-hidden bg-gray-900 p-8 text-white lg:p-12">
            {/* Background Glow */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-primary/25 blur-[120px]" />

            {/* Grid Pattern */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #1BA3DD 1px, transparent 1px), linear-gradient(to bottom, #1BA3DD 1px, transparent 1px)",
                backgroundSize: "44px 44px",
              }}
            />

            <div className="relative z-10">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center bg-primary">
                  <BadgeCheck className="h-6 w-6 text-white" />
                </div>

                <span className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                  Zero Error Policy
                </span>
              </div>

              <h3 className="mb-5 font-inter text-2xl leading-tight font-bold lg:text-4xl">
                Production-Ready, by Standard
              </h3>

              <p className="max-w-xl text-base leading-relaxed text-gray-300 lg:text-lg">
                Through our Zero Error Policy, we measure success by
                production stability. We build reliable, fully tested
                software engineered to perform seamlessly under real-world
                usage.
              </p>
            </div>

            {/* Hover Bottom Border */}
            <span className="absolute right-0 bottom-0 left-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />
          </div>

          {/* Benefit Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-7">
            {reasons.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group relative flex flex-col overflow-hidden border border-gray-200 bg-white p-7 transition-colors duration-300 hover:border-primary/40"
              >
                {/* Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="mb-2.5 text-base leading-snug font-semibold text-gray-900 transition-colors duration-300 group-hover:text-primary lg:text-lg">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-600">
                  {description}
                </p>

                {/* Hover Bottom Border */}
                <span className="absolute right-0 bottom-0 left-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;