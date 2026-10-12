import { useState } from "react";

type Technology = {
  name: string;
  icon: string;
};

type TechnologyCategory = {
  name: string;
  technologies: Technology[];
};

const technologyCategories: TechnologyCategory[] = [
  {
    name: "Frontend",
    technologies: [
      { name: "HTML5", icon: "html5" },
      { name: "CSS", icon: "css" },
      { name: "JavaScript", icon: "javascript" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextdotjs" },
      { name: "Angular", icon: "angular" },
      { name: "Vue.js", icon: "vuedotjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
    ],
  },
  {
    name: "Backend",
    technologies: [
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Express", icon: "express" },
      { name: "NestJS", icon: "nestjs" },
      { name: "Python", icon: "python" },
      { name: "Django", icon: "django" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "PHP", icon: "php" },
      { name: "Laravel", icon: "laravel" },
      { name: ".NET", icon: "dotnet" },
    ],
  },
  {
    name: "CMS",
    technologies: [
      { name: "WordPress", icon: "wordpress" },
      { name: "Drupal", icon: "drupal" },
      { name: "Contentful", icon: "contentful" },
      { name: "Strapi", icon: "strapi" },
      { name: "Sanity", icon: "sanity" },
      { name: "Ghost", icon: "ghost" },
    ],
  },
  {
    name: "E-Commerce",
    technologies: [
      { name: "Shopify", icon: "shopify" },
      { name: "WooCommerce", icon: "woocommerce" },
      { name: "Magento", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg" },
      { name: "BigCommerce", icon: "bigcommerce" },
      { name: "Stripe", icon: "stripe" },
      { name: "PayPal", icon: "paypal" },
    ],
  },
  {
    name: "Cloud & DevOps",
    technologies: [
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Google Cloud", icon: "googlecloud" },
      {
        name: "Microsoft Azure",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
      },
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "Vercel", icon: "vercel" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "Terraform", icon: "terraform" },
    ],
  },
  {
    name: "Databases",
    technologies: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Redis", icon: "redis" },
      { name: "SQLite", icon: "sqlite" },
      { name: "Firebase", icon: "firebase" },
      { name: "Supabase", icon: "supabase" },
      { name: "Elasticsearch", icon: "elasticsearch" },
    ],
  },
  {
    name: "Testing & Quality",
    technologies: [
      { name: "Jest", icon: "jest" },
      { name: "Vitest", icon: "vitest" },
      { name: "Cypress", icon: "cypress" },
      { name: "Selenium", icon: "selenium" },
      { name: "Testing Library", icon: "testinglibrary" },
    ],
  },
];

const TechnologyStack = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  const activeTechnologies =
    technologyCategories.find((category) => category.name === activeCategory)
      ?.technologies ?? [];

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-primary/[0.05] blur-[150px]" />

      <div className="relative z-[2] mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section heading */}
        <div className="mb-12 text-center lg:mb-14">
          <h2 className="mb-4 font-inter text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
            Our Technology <span className="text-primary">Stack</span>.
          </h2>

          <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base md:text-lg">
            Our custom web application development team leverages
            industry-leading technologies to create solutions that fit your
            business goals.
          </p>
        </div>

        {/* Category tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-x-1 gap-y-2 border-b border-gray-200">
          {technologyCategories.map((category) => {
            const isActive = activeCategory === category.name;

            return (
              <button
                key={category.name}
                type="button"
                onClick={() => setActiveCategory(category.name)}
                aria-pressed={isActive}
                className={`relative px-5 py-3 text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-300 sm:text-sm ${
                  isActive
                    ? "text-gray-900"
                    : "text-gray-400 hover:text-gray-700"
                }`}
              >
                {category.name}

                {isActive && (
                  <span className="absolute right-3 -bottom-px left-3 h-[2px] bg-primary" />
                )}
              </button>
            );
          })}
        </div>

        {/* Technology cards */}
        <div
          key={activeCategory}
          className="grid grid-cols-2 gap-4 animate-[tech-fade-in_0.35s_ease-out] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-5"
        >
          {activeTechnologies.map((technology) => (
            <div
              key={technology.name}
              className="group flex min-h-[150px] flex-col items-center justify-center gap-4 border border-gray-200 bg-white px-4 py-7 transition-colors duration-300 hover:border-primary/50 hover:bg-gray-50"
            >
              <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <img
                  src={
                    technology.icon.startsWith("https://")
                      ? technology.icon
                      : `https://cdn.simpleicons.org/${technology.icon}`
                  }
                  alt={`${technology.name} logo`}
                  loading="lazy"
                  className="h-9 w-9 object-contain"
                />
              </div>

              <span className="text-center text-sm leading-snug font-medium text-gray-900">
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
