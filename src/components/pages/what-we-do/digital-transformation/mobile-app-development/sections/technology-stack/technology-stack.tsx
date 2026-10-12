
import { useState } from "react";

interface Technology {
  name: string;
  logo: string;
  alt: string;
}

interface TechnologyCategory {
  label: string;
  technologies: Technology[];
}

const TECHNOLOGY_STACK: TechnologyCategory[] = [
  {
    label: "iOS",
    technologies: [
      {
        name: "Swift & SwiftUI",
        logo: "https://cdn.simpleicons.org/swift",
        alt: "Swift logo",
      },
      {
        name: "UIKit",
        logo: "https://cdn.simpleicons.org/apple",
        alt: "Apple logo",
      },
      {
        name: "Xcode",
        logo: "https://cdn.simpleicons.org/xcode",
        alt: "Xcode logo",
      },
      {
        name: "Core Data",
        logo: "https://cdn.simpleicons.org/apple",
        alt: "Apple logo",
      },
    ],
  },
  {
    label: "Android",
    technologies: [
      {
        name: "Kotlin",
        logo: "https://cdn.simpleicons.org/kotlin",
        alt: "Kotlin logo",
      },
      {
        name: "Java",
        logo: "https://cdn.simpleicons.org/openjdk",
        alt: "OpenJDK logo",
      },
      {
        name: "Jetpack Compose",
        logo: "https://cdn.simpleicons.org/jetpackcompose",
        alt: "Jetpack Compose logo",
      },
      {
        name: "Android Studio",
        logo: "https://cdn.simpleicons.org/androidstudio",
        alt: "Android Studio logo",
      },
    ],
  },
  {
    label: "Cross-Platform",
    technologies: [
      {
        name: "React Native",
        logo: "https://cdn.simpleicons.org/react",
        alt: "React logo",
      },
      {
        name: "Flutter",
        logo: "https://cdn.simpleicons.org/flutter",
        alt: "Flutter logo",
      },
      {
        name: "Expo",
        logo: "https://cdn.simpleicons.org/expo",
        alt: "Expo logo",
      },
      {
        name: "Ionic",
        logo: "https://cdn.simpleicons.org/ionic",
        alt: "Ionic logo",
      },
    ],
  },
  {
    label: "Backend & APIs",
    technologies: [
      {
        name: "Node.js",
        logo: "https://cdn.simpleicons.org/nodedotjs",
        alt: "Node.js logo",
      },
      {
        name: "Python",
        logo: "https://cdn.simpleicons.org/python",
        alt: "Python logo",
      },
      {
        name: "Firebase",
        logo: "https://cdn.simpleicons.org/firebase",
        alt: "Firebase logo",
      },
      {
        name: "GraphQL",
        logo: "https://cdn.simpleicons.org/graphql",
        alt: "GraphQL logo",
      },
    ],
  },
  {
    label: "AI & ML",
    technologies: [
      {
        name: "TensorFlow",
        logo: "https://cdn.simpleicons.org/tensorflow",
        alt: "TensorFlow logo",
      },
      {
        name: "PyTorch",
        logo: "https://cdn.simpleicons.org/pytorch",
        alt: "PyTorch logo",
      },
      {
        name: "OpenAI",
        logo: "https://cdn.simpleicons.org/openai",
        alt: "OpenAI logo",
      },
      {
        name: "Hugging Face",
        logo: "https://cdn.simpleicons.org/huggingface",
        alt: "Hugging Face logo",
      },
    ],
  },
  {
    label: "Testing & CI/CD",
    technologies: [
      {
        name: "Jest",
        logo: "https://cdn.simpleicons.org/jest",
        alt: "Jest logo",
      },
      {
        name: "Cypress",
        logo: "https://cdn.simpleicons.org/cypress",
        alt: "Cypress logo",
      },
      {
        name: "GitHub Actions",
        logo: "https://cdn.simpleicons.org/githubactions",
        alt: "GitHub Actions logo",
      },
      {
        name: "Docker",
        logo: "https://cdn.simpleicons.org/docker",
        alt: "Docker logo",
      },
    ],
  },
];

const TechnologyStack = () => {
  const [activeTab, setActiveTab] = useState("iOS");

  const activeCategory = TECHNOLOGY_STACK.find(
    (category) => category.label === activeTab,
  );

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[700px] max-w-full -translate-x-1/2 rounded-full bg-primary/[0.05] blur-[150px]" />

      <div className="relative z-[2] mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section heading */}
        <div className="mb-12 text-center lg:mb-14">
          <h2 className="mb-4 font-inter text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
            Our Technology <span className="text-primary">Stack</span>.
          </h2>

          <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base md:text-lg">
            We use cutting-edge mobile app development technologies to build
            performant, native-quality applications for every platform.
          </p>
        </div>

        {/* Category tabs */}
        <div
          className="mb-12 flex flex-wrap justify-center gap-x-1 gap-y-2 border-b border-gray-200"
          role="tablist"
          aria-label="Technology categories"
        >
          {TECHNOLOGY_STACK.map((category) => {
            const isActive = activeTab === category.label;

            return (
              <button
                key={category.label}
                type="button"
                role="tab"
                id={`tab-${category.label
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")}`}
                aria-selected={isActive}
                aria-controls="technology-panel"
                onClick={() => setActiveTab(category.label)}
                className={`relative px-4 py-3 text-xs font-semibold tracking-[0.12em] transition-colors duration-300 sm:px-5 sm:text-sm ${
                  isActive
                    ? "text-gray-900"
                    : "text-gray-400 hover:text-gray-700"
                }`}
              >
                {category.label}

                <span
                  className={`absolute bottom-[-1px] left-3 right-3 h-[2px] origin-center bg-primary transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Technology cards */}
        <div
          id="technology-panel"
          role="tabpanel"
          aria-labelledby={`tab-${activeTab
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")}`}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-5 xl:grid-cols-6"
        >
          {activeCategory?.technologies.map((technology) => (
            <div
              key={technology.name}
              className="group flex min-h-[150px] flex-col items-center justify-center gap-4 border border-gray-200 bg-white px-4 py-7 transition-colors duration-300 hover:border-primary/50 hover:bg-gray-50"
            >
              <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <img
                  src={technology.logo}
                  alt={technology.alt}
                  loading="lazy"
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                />
              </div>

              <span className="text-center text-sm font-medium leading-snug text-gray-900">
                {technology.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
