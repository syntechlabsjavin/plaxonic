import {
  FileStack,
  Scissors,
  Boxes,
  Database,
  Search,
  ListFilter,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import ArchitectureBg from "../../../../../../../assets/what-we-do/artificial-intelligence/architecture-bg.webp";

const INDEXING_STEPS = [
  {
    title: "Ingest",
    description: "Connect and load your sources",
    icon: FileStack,
  },
  {
    title: "Chunk",
    description: "Split into meaningful passages",
    icon: Scissors,
  },
  {
    title: "Embed",
    description: "Encode chunks as vectors",
    icon: Boxes,
  },
];

const QUERY_STEPS = [
  {
    title: "Retrieve",
    description: "Find the closest passages",
    icon: Search,
  },
  {
    title: "Rerank",
    description: "Order by true relevance",
    icon: ListFilter,
  },
  {
    title: "Generate",
    description: "Answer, grounded and cited",
    icon: Sparkles,
  },
];

type WorkflowStep = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const WorkflowLane = ({
  steps,
  highlighted = false,
}: {
  steps: WorkflowStep[];
  highlighted?: boolean;
}) => {
  return (
    <div className="grid grid-cols-1 items-stretch gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
      {steps.map((step, index) => {
        const StepIcon = step.icon;

        return (
          <div key={step.title} className="contents">
            <div
              className={`border p-5 backdrop-blur-sm lg:p-6 ${
                highlighted
                  ? "border-primary/40 bg-[#0a0c10]/80"
                  : "border-white/10 bg-[#0a0c10]/80"
              }`}
            >
              <StepIcon
                className="mb-4 h-6 w-6 text-primary"
                strokeWidth={1.5}
                aria-hidden="true"
              />

              <h3 className="font-inter text-lg font-bold text-white">
                {step.title}
              </h3>

              <p className="mt-1.5 text-sm text-gray-400">
                {step.description}
              </p>
            </div>

            {index < steps.length - 1 && (
              <div className="hidden items-center justify-center sm:flex">
                <ArrowRight
                  className="h-5 w-5 text-gray-600"
                  aria-hidden="true"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const Architecture = () => {
  return (
    <section
      id="architecture"
      className="relative overflow-hidden bg-[#0a0c10] py-16 sm:py-20 lg:py-32"
    >
      {/* Background image */}
      <img
        src={ArchitectureBg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-55"
      />

      {/* Background overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[#0a0c10]/55" />

      <div className="pointer-events-none absolute right-[-5%] top-[-15%] h-[460px] w-[560px] rounded-full bg-primary/10 blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section heading */}
        <div className="mb-10 max-w-3xl sm:mb-14 lg:mb-20">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              The Architecture
            </span>
          </div>

          <h2 className="font-inter text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
            Two Lanes, One{" "}
            <span className="text-primary">Vector Store</span>.
          </h2>

          <p className="mt-6 text-sm leading-relaxed text-gray-400 sm:mt-7 sm:text-base md:text-lg">
            RAG has an offline side that prepares your knowledge and an
            online side that answers in real time. Both meet at the vector
            store.
          </p>
        </div>

        {/* Offline indexing lane */}
        <div>
          <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-gray-500">
            Indexing · offline
          </div>

          <WorkflowLane steps={INDEXING_STEPS} />
        </div>

        {/* Shared vector store */}
        <div className="my-5 flex justify-center lg:my-7">
          <div className="inline-flex items-center gap-4 border-2 border-primary bg-[#0a0c10]/85 px-7 py-4 backdrop-blur-sm">
            <Database
              className="h-7 w-7 text-primary"
              aria-hidden="true"
            />

            <div>
              <div className="text-lg font-bold leading-tight text-white">
                Vector store
              </div>

              <div className="font-mono text-xs text-gray-400">
                embeddings + metadata index
              </div>
            </div>
          </div>
        </div>

        {/* Real-time query lane */}
        <div>
          <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-gray-500">
            Query · real-time
          </div>

          <WorkflowLane steps={QUERY_STEPS} highlighted />
        </div>
      </div>
    </section>
  );
};

export default Architecture;