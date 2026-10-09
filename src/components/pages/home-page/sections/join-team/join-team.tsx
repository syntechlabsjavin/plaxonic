
import { ArrowUpRight } from "lucide-react";

/* ============================================
   Join Team Section
============================================ */

interface JoinTeamProps {
  image?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
}

const JoinTeam = ({
  image = "/src/assets/side-image.webp",
  eyebrow = "Join SyntechLabs",
  title = "Build What's Next",
  description = "Work on innovative software solutions, AI-powered systems, cloud-native platforms, and enterprise applications. Join our team to solve meaningful challenges and build technology that makes a difference.",
}: JoinTeamProps) => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="flex flex-col-reverse lg:flex-row">
        {/* Left Image */}
        <div className="relative h-64 min-h-[320px] w-full sm:min-h-[400px] lg:h-auto lg:min-h-[440px] lg:w-1/2 2xl:min-h-[500px]">
          <img
            src={image}
            alt="SyntechLabs team collaboration"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full bg-gray-100 lg:w-1/2">
          <div className="mx-auto max-w-[900px] px-6 py-14 sm:px-10 sm:py-16 lg:mr-auto lg:px-12 lg:py-16 2xl:px-16 2xl:py-24">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {eyebrow}
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-4 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl 2xl:text-6xl">
              {title}
            </h2>

            {/* Description */}
            <p className="mt-6 text-base leading-relaxed text-gray-700 sm:text-lg 2xl:text-xl">
              {description}
            </p>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="/careers"
                className="group inline-flex h-12 w-full items-center justify-center gap-2 border border-gray-900 bg-transparent px-8 text-base font-medium text-gray-900 transition-colors hover:bg-gray-900 hover:text-white sm:w-auto lg:h-11 lg:px-6 lg:text-sm 2xl:h-12 2xl:px-8 2xl:text-base"
              >
                Explore SyntechLabs Careers
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45 lg:h-4 lg:w-4 2xl:h-5 2xl:w-5" />
              </a>

              <a
                href="/open-positions"
                className="group inline-flex h-12 w-full items-center justify-center gap-2 border border-primary bg-primary px-8 text-base font-medium text-white transition-colors hover:bg-primary-dark sm:w-auto lg:h-11 lg:px-6 lg:text-sm 2xl:h-12 2xl:px-8 2xl:text-base"
              >
                Apply Today
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45 lg:h-4 lg:w-4 2xl:h-5 2xl:w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinTeam;