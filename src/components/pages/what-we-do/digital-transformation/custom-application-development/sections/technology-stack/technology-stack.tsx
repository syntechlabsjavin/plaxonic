import { useEffect, useRef } from "react";
import {
  Monitor,
  Server,
  Database,
  Cloud,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

interface Technology {
  name: string;
  logo: string;
}

interface TechnologyCategory {
  title: string;
  icon: LucideIcon;
  technologies: Technology[];
}

interface TechnologyStackProps {
  eyebrow?: string;
  heading?: string;
  highlightedHeading?: string;
  description?: string;
  footerText?: string;
  categories?: TechnologyCategory[];
}

const DEFAULT_CATEGORIES: TechnologyCategory[] = [
  {
    title: "Frontend",
    icon: Monitor,
    technologies: [
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "TypeScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Vue",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      },
      {
        name: "Tailwind CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Redux",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    technologies: [
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Python",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: ".NET",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
      },
      {
        name: "Java",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "Go",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
      },
      {
        name: "GraphQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      },
    ],
  },
  {
    title: "Data",
    icon: Database,
    technologies: [
      {
        name: "PostgreSQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Redis",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      },
      {
        name: "Elasticsearch",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg",
      },
      {
        name: "Prisma",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
      },
      {
        name: "BigQuery",
        logo: "https://cdn.simpleicons.org/googlebigquery",
      },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    technologies: [
      {
        name: "AWS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "Azure",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
      },
      {
        name: "Docker",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "Kubernetes",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg",
      },
      {
        name: "Terraform",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
      },
      {
        name: "GitHub Actions",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg",
      },
    ],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    technologies: [
      {
        name: "React Native",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Flutter",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      },
      {
        name: "Swift",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
      },
      {
        name: "Kotlin",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
      },
      {
        name: "Expo",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg",
      },
      {
        name: "PWA",
        logo: "https://cdn.simpleicons.org/pwa",
      },
    ],
  },
];

const TechnologyStack = ({
  eyebrow = "Engineered With",
  heading = "A Modern, Proven",
  highlightedHeading = "Stack",
  description = "We choose technology for longevity and maintainability—never hype. Every tool here is battle-tested, well-supported, and picked to fit the specific job your application has to do.",
  footerText = "Don't see your stack? We adapt to your existing ecosystem and team conventions.",
  categories = DEFAULT_CATEGORIES,
}: TechnologyStackProps) => {
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
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-32"
    >
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section heading */}
        <div
          data-reveal
          className="mb-10 max-w-3xl sm:mb-14 lg:mb-16"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {eyebrow}
            </span>
          </div>

          <h2 className="mb-8 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-6xl lg:text-7xl">
            {heading}{" "}
            <span className="text-gray-300">
              {highlightedHeading}
            </span>
            .
          </h2>

          <div className="flex gap-4">
            <div className="w-[3px] shrink-0 bg-primary" />

            <p className="text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
              {description}
            </p>
          </div>
        </div>

        {/* Technology categories */}
        <div
          data-reveal
          className="grid grid-cols-1 gap-px border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-5"
        >
          {categories.map((category) => {
            const CategoryIcon = category.icon;

            return (
              <div
                key={category.title}
                className="group bg-white p-6 transition-colors duration-300 hover:bg-gray-50 sm:p-7 lg:p-8"
              >
                {/* Category heading */}
                <div className="mb-6 flex items-center gap-3 border-b border-gray-100 pb-5">
                  <div className="flex h-10 w-10 items-center justify-center bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                    <CategoryIcon
                      className="h-5 w-5 text-primary"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="text-base font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                {/* Technology list */}
                <ul className="space-y-3">
                  {category.technologies.map((technology) => (
                    <li
                      key={technology.name}
                      className="flex items-center gap-3 text-sm text-gray-600 transition-colors duration-200 hover:text-primary"
                    >
                      <img
                        src={technology.logo}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        className="h-5 w-5 shrink-0 object-contain"
                      />

                      <span>{technology.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p
          data-reveal
          className="mt-8 text-center text-sm text-gray-400"
        >
          {footerText}
        </p>
      </div>
    </section>
  );
};

export default TechnologyStack;