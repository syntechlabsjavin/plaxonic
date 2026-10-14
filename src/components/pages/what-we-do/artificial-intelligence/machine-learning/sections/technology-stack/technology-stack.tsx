import { useState } from "react";

const TOOL_CATEGORIES = [
  "Modeling",
  "Data & Compute",
  "Pipelines & MLOps",
  "Viz & Cloud",
] as const;

type ToolCategory = (typeof TOOL_CATEGORIES)[number];

type Tool = {
  name: string;
  logo?: string;
  alt?: string;
  initials?: string;
  category: ToolCategory;
};

const TOOLS: Tool[] = [
  // Modeling
  {
    name: "scikit-learn",
    logo: "https://plaxonic.com/logos/ml/scikit.svg",
    alt: "scikit-learn logo",
    category: "Modeling",
  },
  {
    name: "PyTorch",
    logo: "https://plaxonic.com/logos/ai/pytorch.svg",
    alt: "PyTorch logo",
    category: "Modeling",
  },
  {
    name: "TensorFlow",
    logo: "https://plaxonic.com/logos/ai/tensorflow.svg",
    alt: "TensorFlow logo",
    category: "Modeling",
  },
  {
    name: "XGBoost",
    initials: "XG",
    category: "Modeling",
  },

  // Data & Compute
  {
    name: "Pandas",
    logo: "https://plaxonic.com/logos/ml/pandas.svg",
    alt: "Pandas logo",
    category: "Data & Compute",
  },
  {
    name: "NumPy",
    logo: "https://plaxonic.com/logos/ml/numpy.svg",
    alt: "NumPy logo",
    category: "Data & Compute",
  },
  {
    name: "Apache Spark",
    logo: "https://plaxonic.com/logos/ml/spark.svg",
    alt: "Apache Spark logo",
    category: "Data & Compute",
  },
  {
    name: "Databricks",
    logo: "https://plaxonic.com/logos/ml/jupyter.svg",
    alt: "Databricks logo",
    category: "Data & Compute",
  },

  // Pipelines & MLOps
  {
    name: "Airflow",
    logo: "https://plaxonic.com/logos/ml/airflow.svg",
    alt: "Apache Airflow logo",
    category: "Pipelines & MLOps",
  },
  {
    name: "MLflow",
    logo: "https://plaxonic.com/logos/ai/mlflow.svg",
    alt: "ML Flow",
    category: "Pipelines & MLOps",
  },
  {
    name: "Docker",
    logo: "https://plaxonic.com/logos/tech/docker.svg",
    alt: "Docker logo",
    category: "Pipelines & MLOps",
  },
  {
    name: "Ray",
    logo: "https://plaxonic.com/logos/ai/ray.svg",
    alt: "Ray",
    category: "Pipelines & MLOps",
  },
  {
    name: "DVC",
    initials: "DVC",
    category: "Pipelines & MLOps",
  },

  // Viz & Cloud
  {
    name: "Plotly",
    logo: "https://plaxonic.com/logos/ml/plotly.svg",
    alt: "Plotly",
    category: "Viz & Cloud",
  },
  {
    name: "AWS",
    logo: "https://plaxonic.com/logos/tech/aws.svg",
    alt: "AWS logo",
    category: "Viz & Cloud",
  },
  {
    name: "Microsoft Azure",
    logo: "https://plaxonic.com/logos/tech/azure.svg",
    alt: "Microsoft Azure logo",
    category: "Viz & Cloud",
  },
  {
    name: "Google Cloud",
    logo: "https://plaxonic.com/logos/tech/gcp.svg",
    alt: "Google Cloud logo",
    category: "Viz & Cloud",
  },
];

const TechnologyStack = () => {
  const [activeCategory, setActiveCategory] =
    useState<ToolCategory>("Modeling");

  const filteredTools = TOOLS.filter(
    (tool) => tool.category === activeCategory
  );

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-32 overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-primary/[0.05] blur-[150px]" />

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 relative z-[2]">
        <div className="text-center mb-12 lg:mb-14">
          <h2 className="font-inter text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-4">
            Proven Tools, Used{" "}
            <span className="text-primary">Properly</span>.
          </h2>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            We work with proven, industry-leading tools chosen to fit your
            problem, not our habits.
          </p>
        </div>

        <div
          className="flex flex-wrap justify-center gap-x-1 gap-y-2 mb-12 border-b border-gray-200"
          role="tablist"
          aria-label="Tool categories"
        >
          {TOOL_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
                className={`relative px-5 py-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] transition-colors duration-300 ${
                  isActive
                    ? "text-gray-900"
                    : "text-gray-400 hover:text-gray-700"
                }`}
              >
                {category}

                {isActive && (
                  <span className="absolute left-3 right-3 -bottom-px h-[2px] bg-primary" />
                )}
              </button>
            );
          })}
        </div>

        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-5"
          role="tabpanel"
        >
          {filteredTools.map((tool) => (
            <div
              key={tool.name}
              className="group flex flex-col items-center justify-center gap-4 min-h-[150px] bg-white border border-gray-200 hover:border-primary/50 hover:bg-gray-50 transition-colors duration-300 px-4 py-7"
            >
              <div className="flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {tool.logo ? (
                  <img
                    src={tool.logo}
                    alt={tool.alt ?? `${tool.name} logo`}
                    loading="lazy"
                    className="w-9 h-9 object-contain"
                  />
                ) : (
                  <span className="flex h-9 w-9 items-center justify-center rounded bg-primary/10 text-primary text-xs font-bold">
                    {tool.initials}
                  </span>
                )}
              </div>

              <span className="text-gray-900 text-sm font-medium text-center leading-snug">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;