import { useEffect, useRef, useState } from "react";
import ModelStackBg from "../../../../../../../assets/what-we-do/artificial-intelligence/modelstack-bg.webp";

interface StackItem {
  name: string;
  logo?: string;
}

interface StackGroup {
  title: string;
  subtitle: string;
  items: StackItem[];
}

const groups: StackGroup[] = [
  {
    title: "Foundation Models",
    subtitle: "Commercial And Open, Chosen Per Task",
    items: [
      { name: "OpenAI", logo: "https://plaxonic.com/logos/ai/openai-w.svg" },
      { name: "Anthropic", logo: "https://plaxonic.com/logos/ai/anthropic-w.svg" },
      { name: "Hugging Face", logo: "https://plaxonic.com/logos/ai/huggingface.svg" },
      { name: "Llama" },
      { name: "NVIDIA", logo: "https://plaxonic.com/logos/ai/nvidia.svg" },
    ],
  },
  {
    title: "Frameworks & Orchestration",
    subtitle: "Training, Fine-Tuning, And Agents",
    items: [
      { name: "PyTorch", logo: "https://plaxonic.com/logos/ai/pytorch.svg" },
      { name: "TensorFlow", logo: "https://plaxonic.com/logos/ai/tensorflow.svg" },
      { name: "LangChain", logo: "https://plaxonic.com/logos/ai/langchain-w.svg" },
      { name: "Python", logo: "https://plaxonic.com/logos/tech/python.svg" },
    ],
  },
  {
    title: "Data & Vector",
    subtitle: "Retrieval, Memory, And Pipelines",
    items: [
      { name: "PostgreSQL / pgvector", logo: "https://plaxonic.com/logos/tech/postgresql.svg" },
      { name: "Redis", logo: "https://plaxonic.com/logos/tech/redis.svg" },
      { name: "Pinecone" },
      { name: "Weaviate" },
    ],
  },
  {
    title: "MLOps & Infrastructure",
    subtitle: "Evaluate, Deploy, Monitor, Scale",
    items: [
      { name: "MLflow", logo: "https://plaxonic.com/logos/ai/mlflow.svg" },
      { name: "Ray", logo: "https://plaxonic.com/logos/ai/ray.svg" },
      { name: "Docker", logo: "https://plaxonic.com/logos/tech/docker.svg" },
      { name: "Kubernetes", logo: "https://plaxonic.com/logos/tech/kubernetes.svg" },
      { name: "AWS", logo: "https://plaxonic.com/logos/tech/aws.svg" },
      { name: "Azure", logo: "https://plaxonic.com/logos/tech/azure.svg" },
      { name: "Google Cloud", logo: "https://plaxonic.com/logos/tech/gcp.svg" },
    ],
  },
];

const useInView = <T extends HTMLElement>(threshold = 0.1) => {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
};

const StackSection = () => {
  const { ref, inView } = useInView<HTMLElement>();

  const reveal = `transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
  }`;

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#0a0c10] py-16 sm:py-20 md:py-24 lg:py-36"
    >
      {/* Background image with slow zoom */}
      <img
        src={ModelStackBg}
        alt=""
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-all duration-[2200ms] ease-out motion-reduce:transition-none ${
          inView ? "opacity-80 scale-100" : "opacity-0 scale-110"
        }`}
      />

      <div className="pointer-events-none absolute inset-0 bg-[#0a0c10]/35" />

      {/* Pulsing glow */}
      <div className="pointer-events-none absolute top-[-15%] right-[-5%] w-[560px] h-[460px] rounded-full bg-primary/10 blur-[170px] animate-pulse motion-reduce:animate-none" />

      <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className={`flex items-center gap-3 mb-6 ${reveal}`}>
            <span className="text-primary-light text-xs font-semibold tracking-[0.2em] uppercase">
              The Stack
            </span>
          </div>

          <h2
            className={`font-inter text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6 ${reveal}`}
            style={{ transitionDelay: "120ms" }}
          >
            Model-Agnostic,{" "}
            <span className="text-white/40">Production-Grade</span>.
          </h2>

          <p
            className={`text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed ${reveal}`}
            style={{ transitionDelay: "240ms" }}
          >
            We are not tied to one model or vendor. We pick the right tools for
            accuracy, latency, cost, and privacy, then engineer them to run
            reliably wherever you need them.
          </p>
        </div>

        <div className="border border-white/10 divide-y divide-white/10">
          {groups.map((group, rowIndex) => (
            <div
              key={group.title}
              className={`grid grid-cols-1 lg:grid-cols-[0.9fr_2fr] gap-5 lg:gap-10 p-6 sm:p-7 lg:p-9 ${reveal}`}
              style={{ transitionDelay: `${350 + rowIndex * 150}ms` }}
            >
              <div>
                <h3 className="text-white text-lg font-bold">{group.title}</h3>
                <p className="text-gray-500 text-sm mt-1.5">{group.subtitle}</p>
              </div>

              <div className="flex flex-wrap gap-2.5 lg:justify-end">
                {group.items.map((item, chipIndex) => (
                  /* Outer span handles the reveal delay; inner span handles hover,
                     so the stagger delay never slows the hover effect. */
                  <span
                    key={item.name}
                    className={reveal}
                    style={{
                      transitionDelay: `${500 + rowIndex * 150 + chipIndex * 70}ms`,
                    }}
                  >
                    <span className="inline-flex items-center gap-2.5 border border-white/10 bg-white/[0.04] px-4 py-2.5 text-gray-200 text-sm font-medium hover:border-primary/40 hover:bg-white/[0.08] hover:-translate-y-0.5 transition-all duration-300">
                      {item.logo ? (
                        <img
                          src={item.logo}
                          alt={`${item.name} logo`}
                          className="w-[18px] h-[18px] object-contain"
                          loading="lazy"
                        />
                      ) : (
                        <span className="w-1.5 h-1.5 bg-primary-light" />
                      )}
                      {item.name}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackSection;