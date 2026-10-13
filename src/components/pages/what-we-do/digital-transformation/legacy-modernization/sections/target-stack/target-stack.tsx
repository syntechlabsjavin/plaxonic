import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cloudTechnologies = [
  { name: "AWS", logo: "https://plaxonic.com/logos/tech/aws.svg" },
  { name: "Microsoft Azure", logo: "https://plaxonic.com/logos/tech/azure.svg" },
  { name: "Google Cloud", logo: "https://plaxonic.com/logos/tech/gcp.svg" },
  { name: "Kubernetes", logo: "https://plaxonic.com/logos/tech/kubernetes.svg" },
  { name: "Docker", logo: "https://plaxonic.com/logos/tech/docker.svg" },
  { name: "Terraform", logo: "https://plaxonic.com/logos/tech/terraform.svg" },
  { name: "OpenShift", logo: "https://plaxonic.com/logos/tech/openshift.svg" },
  { name: "Serverless", logo: "https://plaxonic.com/logos/tech/serverless.svg" },
];

const developmentTechnologies = [
  { name: ".NET Core", logo: "https://plaxonic.com/logos/tech/dotnet.svg" },
  { name: "Java / Spring", logo: "https://plaxonic.com/logos/tech/java.svg" },
  { name: "Node.js", logo: "https://plaxonic.com/logos/tech/nodejs.svg" },
  { name: "Python", logo: "https://plaxonic.com/logos/tech/python.svg" },
  { name: "React", logo: "https://plaxonic.com/logos/tech/react.svg" },
  { name: "PostgreSQL", logo: "https://plaxonic.com/logos/tech/postgresql.svg" },
  { name: "MongoDB", logo: "https://plaxonic.com/logos/tech/mongodb.svg" },
  { name: "GraphQL", logo: "https://plaxonic.com/logos/tech/graphql.svg" },
  { name: "Kafka", logo: "https://plaxonic.com/logos/tech/kafka.svg" },
];

type Technology = {
  name: string;
  logo: string;
};

type TechnologyRowProps = {
  technologies: Technology[];
  direction: "left" | "right";
  rowRef: React.RefObject<HTMLDivElement | null>;
};

const TechnologyRow = ({
  technologies,
  direction,
  rowRef,
}: TechnologyRowProps) => {
  // Duplicate the technologies to create a seamless marquee.
  const repeatedTechnologies = [
    ...technologies,
    ...technologies,
    ...technologies,
  ];

  return (
    <div className="flex overflow-hidden">
      <div
        ref={rowRef}
        className={`technology-track flex w-max flex-shrink-0 gap-4 pr-4 ${
          direction === "left" ? "move-left" : "move-right"
        }`}
      >
        {repeatedTechnologies.map((technology, index) => (
          <span
            key={`${technology.name}-${index}`}
            className="inline-flex flex-shrink-0 items-center gap-2.5 whitespace-nowrap border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-700 transition-colors duration-300 hover:border-primary/40 hover:text-primary md:text-base"
          >
            <img
              src={technology.logo}
              alt={`${technology.name} logo`}
              className="h-5 w-5 flex-shrink-0 object-contain"
              loading="lazy"
            />
            {technology.name}
          </span>
        ))}
      </div>
    </div>
  );
};

const TargetStack = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const firstRowRef = useRef<HTMLDivElement>(null);
  const secondRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const firstRow = firstRowRef.current;
    const secondRow = secondRowRef.current;

    if (!section || !heading || !firstRow || !secondRow) return;

    const ctx = gsap.context(() => {
      // Animate the heading and description on scroll.
      gsap.fromTo(
        heading.children,
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.16,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 85%",
            once: true,
          },
        }
      );

      // Animate the technology rows into view.
      gsap.fromTo(
        [firstRow, secondRow],
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: firstRow,
            start: "top 90%",
            once: true,
          },
        }
      );

      // Continuous marquee animation.
      const createMarquee = (
        element: HTMLDivElement,
        direction: "left" | "right",
        duration: number
      ) => {
        const getDistance = () => element.scrollWidth / 3;

        gsap.fromTo(
          element,
          {
            x: direction === "left" ? 0 : -getDistance(),
          },
          {
            x: direction === "left" ? -getDistance() : 0,
            duration,
            ease: "none",
            repeat: -1,
            onRepeat: () => {
              // The duplicated items make each loop visually seamless.
            },
          }
        );
      };

      createMarquee(firstRow, "left", 42);
      createMarquee(secondRow, "right", 48);

      // Pause the marquee while the user hovers over a row.
      const tracks = [firstRow, secondRow];

      tracks.forEach((track) => {
        track.addEventListener("mouseenter", () => {
          gsap.to(track, {
            timeScale: 0,
            duration: 0.3,
          });
        });

        track.addEventListener("mouseleave", () => {
          gsap.to(track, {
            timeScale: 1,
            duration: 0.3,
          });
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gray-50 py-16 sm:py-20 lg:py-28"
    >
      {/* Heading */}
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div
          ref={headingRef}
          className="mb-10 flex flex-col gap-6 sm:mb-12 lg:mb-14 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Target Stack
              </span>
            </div>

            <h2 className="font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Built On What <span className="text-gray-300">Lasts</span>.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
            We modernize onto proven, well-supported platforms with deep
            talent pools, so your new system stays modern far longer than
            the one it replaced.
          </p>
        </div>
      </div>

      {/* Animated Technology Rows */}
      <div className="relative space-y-4">
        {/* Left and right fade edges */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-12 bg-gradient-to-r from-gray-50 to-transparent sm:w-24" />

        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-12 bg-gradient-to-l from-gray-50 to-transparent sm:w-24" />

        <TechnologyRow
          technologies={cloudTechnologies}
          direction="left"
          rowRef={firstRowRef}
        />

        <TechnologyRow
          technologies={developmentTechnologies}
          direction="right"
          rowRef={secondRowRef}
        />
      </div>
    </section>
  );
};

export default TargetStack;