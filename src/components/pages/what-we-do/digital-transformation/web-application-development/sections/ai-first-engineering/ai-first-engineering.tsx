import {
  ArrowUpRight,
  Bot,
  Search,
  Sparkles,
  Workflow,
} from "lucide-react";

const AIFirstEngineering = () => {
  const aiFeatures = [
    {
      title: "RAG-powered intelligent search",
      Icon: Search,
    },
    {
      title: "In-app copilots and assistants",
      Icon: Bot,
    },
    {
      title: "Generative and summarization features",
      Icon: Sparkles,
    },
    {
      title: "Workflow automation and intelligent recommendations",
      Icon: Workflow,
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#070809] py-16 sm:py-20 md:py-24 lg:py-36">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-10%] left-[10%] h-[640px] w-[640px] rounded-full bg-primary/25 blur-[180px]" />

        <div className="absolute right-[5%] bottom-[-20%] h-[560px] w-[560px] rounded-full bg-primary/15 blur-[160px]" />

        <div className="absolute top-[30%] right-[30%] h-[360px] w-[360px] rounded-full bg-[#4fb8e6]/10 blur-[140px]" />
      </div>

      {/* Noise texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left content */}
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                AI-First Engineering
              </span>
            </div>

            <h2 className="mb-8 font-inter text-3xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Where Web Engineering
              <br className="hidden sm:block" /> Meets{" "}
              <span className=" bg-clip-text text-primary">
                AI
              </span>
              .
            </h2>

            <p className="mb-6 text-base leading-relaxed text-gray-300 sm:text-lg">
              As an AI-first engineering company, we build AI into the
              foundation of your web software rather than tacking it on later.
              This includes intent-aware search, interactive copilots,
              generative text tools, and workflow automation that eliminates
              manual tasks from everyday workflows.
            </p>

            <p className="mb-10 text-sm leading-relaxed text-gray-400 sm:text-base">
              Our team guides your AI roadmap and implements features where
              they add real business value while optimizing for data security,
              output precision, and infrastructure cost.
            </p>

            <a
              href="/services/ai-agent-applications"
              className="group inline-flex w-full items-center justify-center gap-3 bg-white px-6 py-3.5 text-base font-semibold text-gray-900 transition-colors hover:bg-primary hover:text-white sm:w-auto sm:px-8"
            >
              Explore AI-Native Web Applications

              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
            </a>
          </div>

          {/* Right AI feature panel */}
          <div className="relative">
            <div className="relative border border-white/10 bg-white/[0.035] p-6 shadow-2xl backdrop-blur-xl lg:p-8">
              {/* Search bar */}
              <div className="mb-5 flex items-center gap-3 border border-white/10 bg-black/30 px-4 py-3.5">
                <Sparkles className="h-4 w-4 shrink-0 text-primary-light" />

                <span className="flex-1 truncate text-sm text-gray-400">
                  Ask anything about your data…
                </span>

                <kbd className="border border-white/15 px-1.5 py-0.5 font-mono text-[10px] text-gray-500">
                  ⏎
                </kbd>
              </div>

              {/* Animated progress line */}
              <div className="relative mb-6 h-1 w-full overflow-hidden bg-white/5">
                <div className="absolute inset-y-0 w-1/3 animate-[ai-scan_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-primary to-transparent" />
              </div>

              {/* AI feature list */}
              <div className="space-y-2.5">
                {aiFeatures.map(({ title, Icon }) => (
                  <div
                    key={title}
                    className="group flex items-center gap-3.5 border border-white/10 bg-white/[0.03] px-4 py-3.5 transition-colors duration-300 hover:border-primary/40 hover:bg-white/[0.06]"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary/15">
                      <Icon className="h-4 w-4 text-primary-light" />
                    </div>

                    <span className="text-sm leading-snug font-medium text-gray-200">
                      {title}
                    </span>

                    <span className="ml-auto h-1.5 w-1.5 shrink-0 bg-primary/50 transition-colors group-hover:bg-primary-light" />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom-right glow */}
            <div className="pointer-events-none absolute -right-8 -bottom-8 h-44 w-44 rounded-full bg-primary/30 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFirstEngineering;
