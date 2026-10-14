import { Repeat, Gauge, ShieldCheck, GitBranch } from "lucide-react";

const WebApplicationStandard = () => {
  return (
    <section className="relative z-30 w-full overflow-hidden bg-[#0a0c10] shadow-[0_-24px_60px_-10px_rgba(0,0,0,0.25)] -mt-20 sm:-mt-28 lg:-mt-36 pt-28 sm:pt-36 lg:pt-44 pb-16 sm:pb-20 lg:pb-32">
      {/* Background Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(27, 163, 220, 0.18) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(70% 60% at 50% 0%, black 20%, transparent 75%)",
        }}
      />

      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-primary/15 blur-[170px]" />

      {/* Background Video */}
      <div className="pointer-events-none absolute inset-x-0 top-0 bottom-32 z-0 overflow-hidden lg:bottom-40">
        <video
          src="/qw.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute right-0 top-0 h-full w-[60%] object-cover"
        />

        <div className="absolute inset-0 bg-[#0a0c10]/45" />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgb(10, 12, 16) 0%, rgb(10, 12, 16) 44%, rgba(10, 12, 16, 0.6) 68%, rgba(10, 12, 16, 0.12) 90%, transparent 100%)",
          }}
        />

        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0a0c10] to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0a0c10] to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div
          className="mb-8 flex items-center gap-4"
          style={{ opacity: 1, transform: "none" }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
            The Plaxonic Standard
          </span>
        </div>

        <div className="grid grid-cols-1 items-end gap-x-12 gap-y-8 lg:grid-cols-12">
          <h2
            className="font-inter text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:col-span-7 lg:text-6xl xl:text-7xl"
            style={{ opacity: 1, transform: "none" }}
          >
            Web Application
            <br />
            Development For
            <br />
            <span className="relative inline-block text-primary">
              The Real Work
              <span
                className="absolute -bottom-2 left-0 right-0 h-[3px] origin-left bg-primary"
                style={{ transform: "none" }}
              />
            </span>
            <span className="text-primary">.</span>
          </h2>

          <div
            className="flex gap-4 lg:col-span-5"
            style={{ opacity: 1, transform: "none" }}
          >
            <span className="w-[3px] flex-shrink-0 bg-primary/60" />

            <p className="text-sm leading-relaxed text-gray-300 sm:text-base lg:text-lg">
              A web application is a platform where your business audience
              becomes customers. They interact with your business&apos;s
              products and services and decide whether to buy. That buying
              decision is the most important decision for your business, and to
              make it happen, we design your web application with cutting-edge
              technology and creative designs.
            </p>
          </div>
        </div>

        <p
          className="mt-8 max-w-4xl text-sm leading-relaxed text-gray-400 sm:text-base lg:mt-10 lg:text-lg"
          style={{ opacity: 1, transform: "none" }}
        >
          As a leading web application development service provider, we approach
          web development as an{" "}
          <span className="font-medium text-primary">
            engineering solution
          </span>{" "}
          to your business challenges. We engineer custom applications and
          enterprise web applications, content-driven sites, and mobile
          applications for performance and scalability. Our expert team builds
          with modern frameworks and cloud-native infrastructure, embedding AI
          where it creates real value. We deliver web apps that exceed
          expectations and turn your vision into reality.
        </p>

        {/* Feature Cards */}
        <div className="mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/10">
          {/* Card 1 */}
          <div
            className="group relative py-8 lg:py-9 px-0 sm:px-7 lg:px-8 border-white/10 border-b sm:border-b-0 sm:[&:nth-child(odd)]:border-r lg:border-r lg:last:border-r-0 sm:[&:nth-child(odd)]:pl-0 sm:[&:nth-child(even)]:pr-0 lg:!px-8 lg:first:!pl-0 lg:last:!pr-0 hover:bg-white/[0.02] transition-colors duration-300"
            style={{ opacity: 1, transform: "none" }}
          >
            <span className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-primary transition-all duration-500" />

            <span className="block font-inter text-5xl font-bold text-white/10 group-hover:text-primary/60 tabular-nums leading-none mb-6 transition-colors duration-300">
              01
            </span>

            <div className="flex items-center gap-3 mb-3">
              <Repeat className="w-5 h-5 text-primary flex-shrink-0" />

              <h3 className="text-white text-base lg:text-lg font-semibold leading-snug">
                Continuous &amp; Adaptable Execution
              </h3>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Through agile web application development practices, we break
              complex development cycles into fast-paced milestones, providing a
              risk-free, sustainable solution. We prioritize flexibility and
              clear communication as we engineer your solutions.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="group relative py-8 lg:py-9 px-0 sm:px-7 lg:px-8 border-white/10 border-b sm:border-b-0 sm:[&:nth-child(odd)]:border-r lg:border-r lg:last:border-r-0 sm:[&:nth-child(odd)]:pl-0 sm:[&:nth-child(even)]:pr-0 lg:!px-8 lg:first:!pl-0 lg:last:!pr-0 hover:bg-white/[0.02] transition-colors duration-300"
            style={{ opacity: 1, transform: "none" }}
          >
            <span className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-primary transition-all duration-500" />

            <span className="block font-inter text-5xl font-bold text-white/10 group-hover:text-primary/60 tabular-nums leading-none mb-6 transition-colors duration-300">
              02
            </span>

            <div className="flex items-center gap-3 mb-3">
              <Gauge className="w-5 h-5 text-primary flex-shrink-0" />

              <h3 className="text-white text-base lg:text-lg font-semibold leading-snug">
                Performance Under Load
              </h3>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              With our robust backend architecture, optimized database queries,
              and intelligent caching, we keep traffic spikes from slowing your
              business. We keep your application performing at its best, even
              under heavy concurrent loads. Your platform stays fast, reliable,
              and responsive during sudden traffic surges.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="group relative py-8 lg:py-9 px-0 sm:px-7 lg:px-8 border-white/10 border-b sm:border-b-0 sm:[&:nth-child(odd)]:border-r lg:border-r lg:last:border-r-0 sm:[&:nth-child(odd)]:pl-0 sm:[&:nth-child(even)]:pr-0 lg:!px-8 lg:first:!pl-0 lg:last:!pr-0 hover:bg-white/[0.02] transition-colors duration-300"
            style={{ opacity: 1, transform: "none" }}
          >
            <span className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-primary transition-all duration-500" />

            <span className="block font-inter text-5xl font-bold text-white/10 group-hover:text-primary/60 tabular-nums leading-none mb-6 transition-colors duration-300">
              03
            </span>

            <div className="flex items-center gap-3 mb-3">
              <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0" />

              <h3 className="text-white text-base lg:text-lg font-semibold leading-snug">
                Security-First Architecture
              </h3>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              We embed security into our engineering framework. By integrating
              OWASP guidelines, we protect your web application from emerging
              cyber threats and protect sensitive user data.
            </p>
          </div>

          {/* Card 4 */}
          <div
            className="group relative py-8 lg:py-9 px-0 sm:px-7 lg:px-8 border-white/10 border-b sm:border-b-0 sm:[&:nth-child(odd)]:border-r lg:border-r lg:last:border-r-0 sm:[&:nth-child(odd)]:pl-0 sm:[&:nth-child(even)]:pr-0 lg:!px-8 lg:first:!pl-0 lg:last:!pr-0 hover:bg-white/[0.02] transition-colors duration-300"
            style={{ opacity: 1, transform: "none" }}
          >
            <span className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-primary transition-all duration-500" />

            <span className="block font-inter text-5xl font-bold text-white/10 group-hover:text-primary/60 tabular-nums leading-none mb-6 transition-colors duration-300">
              04
            </span>

            <div className="flex items-center gap-3 mb-3">
              <GitBranch className="w-5 h-5 text-primary flex-shrink-0" />

              <h3 className="text-white text-base lg:text-lg font-semibold leading-snug">
                Evolve Without a Rebuild
              </h3>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              We develop your web app for long-term longevity. Our application
              leverages microservices, allowing your business web application to
              adopt new technologies without costly, full-scale rebuilds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebApplicationStandard;
