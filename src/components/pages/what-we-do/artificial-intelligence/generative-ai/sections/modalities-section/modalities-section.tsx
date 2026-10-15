import { useEffect, useState } from "react";
import {
  FileText,
  CodeXml,
  Image as ImageIcon,
  AudioLines,
  Database,
} from "lucide-react";

const TYPING_TEXT =
  "Introducing a faster way to close your month. Automated reconciliation, board-ready in one click, and zero late nights.";

const audioBars = [
  0.320886, 0.363782, 0.742028, 0.881298, 0.570832, 0.654188,
  0.447423, 0.489609, 0.359827, 0.245623, 0.291783, 0.352816,
  0.496212, 0.61087, 0.816616, 0.849616, 0.931678, 0.651043,
  0.494185, 0.571831, 0.275441, 0.267717, 0.14363, 0.154401,
  0.356198, 0.268201, 0.422337, 0.396197, 0.431725, 0.546889,
  0.433772, 0.305202, 0.298423, 0.226612, 0.13534, 0.233357,
  0.20027, 0.415433, 0.557824, 0.382924, 0.905772, 0.773956,
  0.877791, 0.757371, 0.380785, 0.415072, 0.328193, 0.268937,
];

const ModalitiesSection = () => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;

    setTypedText("");

    const interval = window.setInterval(() => {
      index += 1;
      setTypedText(TYPING_TEXT.slice(0, index));

      if (index >= TYPING_TEXT.length) {
        window.clearInterval(interval);
      }
    }, 30);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="modalities" className="bg-white py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section heading */}
        <div className="mb-10 max-w-3xl sm:mb-12 lg:mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              What We Generate
            </span>
          </div>

          <h2 className="font-inter text-3xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Every Medium Your{" "}
            <span className="text-gray-300">Work Needs</span>.
          </h2>
        </div>

        <div className="border-t border-gray-200">
          {/* Text generation */}
          <div className="grid grid-cols-1 items-center gap-6 border-b border-gray-200 py-8 sm:gap-8 sm:py-10 lg:grid-cols-2 lg:gap-16 lg:py-14">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center bg-primary/10 text-primary">
                  <FileText className="h-5 w-5" />
                </span>

                <span className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
                  Text
                </span>
              </div>

              <h3 className="mb-3 font-inter text-xl font-bold leading-snug text-gray-900 sm:text-2xl lg:text-3xl">
                Copy, Answers, And Long-Form Content
              </h3>

              <p className="max-w-xl text-base leading-relaxed text-gray-600 sm:text-[17px] md:text-lg">
                Marketing copy, summaries, replies, and reports that match
                your voice and stay on the facts.
              </p>
            </div>

            {/* Typing animation preview */}
            <div>
              <div className="min-h-[160px] border border-gray-200 bg-gray-50 p-6">
                <p
                  className="font-inter text-base leading-relaxed text-gray-700"
                  aria-live="off"
                >
                  {typedText}
                  <span
                    className="ml-0.5 inline-block w-[0.5ch] -mb-0.5 animate-pulse bg-primary-light"
                    aria-hidden="true"
                    style={{ height: "1em" }}
                  />
                </p>
              </div>
            </div>
          </div>

          {/* Code generation */}
          <div className="grid grid-cols-1 items-center gap-6 border-b border-gray-200 py-8 sm:gap-8 sm:py-10 lg:grid-cols-2 lg:gap-16 lg:py-14">
            <div className="lg:order-2">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center bg-primary/10 text-primary">
                  <CodeXml className="h-5 w-5" />
                </span>

                <span className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
                  Code
                </span>
              </div>

              <h3 className="mb-3 font-inter text-xl font-bold leading-snug text-gray-900 sm:text-2xl lg:text-3xl">
                Code Generation And Assistants
              </h3>

              <p className="max-w-xl text-base leading-relaxed text-gray-600 sm:text-[17px] md:text-lg">
                Scaffolding, refactors, and in-product copilots that
                understand your codebase and conventions.
              </p>
            </div>

            <div className="lg:order-1">
              <div className="overflow-hidden border border-white/10 bg-[#0e1117]">
                <div className="border-b border-white/10 px-4 py-2 font-mono text-[11px] text-gray-500">
                  summarize.ts
                </div>

                <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-relaxed text-gray-300">
                  <code>{`export async function summarize(doc: string) {
  const res = await model.generate({
    prompt: build(doc),
    guardrails: ["grounded", "cited"],
  });
  return res.text;
}`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Image generation */}
          <div className="grid grid-cols-1 items-center gap-6 border-b border-gray-200 py-8 sm:gap-8 sm:py-10 lg:grid-cols-2 lg:gap-16 lg:py-14">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center bg-primary/10 text-primary">
                  <ImageIcon className="h-5 w-5" />
                </span>

                <span className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
                  Image
                </span>
              </div>

              <h3 className="mb-3 font-inter text-xl font-bold leading-snug text-gray-900 sm:text-2xl lg:text-3xl">
                Visuals And Product Imagery
              </h3>

              <p className="max-w-xl text-base leading-relaxed text-gray-600 sm:text-[17px] md:text-lg">
                On-brand images, variations, and edits generated and
                controlled to your guidelines.
              </p>
            </div>

            <div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  {
                    src: "https://plaxonic.com/generative-ai/visual-2.png",
                    label: "var 1",
                  },
                  {
                    src: "https://plaxonic.com/generative-ai/visual-4.png",
                    label: "var 2",
                  },
                  {
                    src: "https://plaxonic.com/generative-ai/visual-3.png",
                    label: "var 3",
                  },
                ].map((visual) => (
                  <div
                    key={visual.label}
                    className="relative aspect-square overflow-hidden border border-gray-200"
                  >
                    <img
                      src={visual.src}
                      alt="Generated visual sample"
                      className="absolute inset-0 h-full w-full object-cover"
                    />

                    <span className="absolute bottom-1.5 left-1.5 bg-black/50 px-1 font-mono text-[9px] text-white/90">
                      {visual.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Audio generation */}
          <div className="grid grid-cols-1 items-center gap-6 border-b border-gray-200 py-8 sm:gap-8 sm:py-10 lg:grid-cols-2 lg:gap-16 lg:py-14">
            <div className="lg:order-2">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center bg-primary/10 text-primary">
                  <AudioLines className="h-5 w-5" />
                </span>

                <span className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
                  Audio
                </span>
              </div>

              <h3 className="mb-3 font-inter text-xl font-bold leading-snug text-gray-900 sm:text-2xl lg:text-3xl">
                Voice And Speech
              </h3>

              <p className="max-w-xl text-base leading-relaxed text-gray-600 sm:text-[17px] md:text-lg">
                Natural voices, narration, and conversational audio tuned
                to your domain.
              </p>
            </div>

            <div className="lg:order-1">
              <div className="flex h-[150px] items-center justify-center gap-[3px] border border-gray-200 bg-gray-50 px-6">
                {audioBars.map((height, index) => (
                  <span
                    key={index}
                    className="w-[4px] flex-shrink-0 rounded-full bg-primary/70"
                    style={{
                      height: "72%",
                      transform: `scaleY(${height})`,
                      transformOrigin: "center",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Synthetic data generation */}
          <div className="grid grid-cols-1 items-center gap-6 border-b border-gray-200 py-8 sm:gap-8 sm:py-10 lg:grid-cols-2 lg:gap-16 lg:py-14">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center bg-primary/10 text-primary">
                  <Database className="h-5 w-5" />
                </span>

                <span className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
                  Data
                </span>
              </div>

              <h3 className="mb-3 font-inter text-xl font-bold leading-snug text-gray-900 sm:text-2xl lg:text-3xl">
                Synthetic And Structured Data
              </h3>

              <p className="max-w-xl text-base leading-relaxed text-gray-600 sm:text-[17px] md:text-lg">
                Privacy-safe synthetic datasets and structured outputs
                that fit straight into your systems.
              </p>
            </div>

            <div>
              <div className="overflow-hidden border border-gray-200 bg-gray-50">
                <div className="grid grid-cols-3 border-b border-gray-200 bg-white font-mono text-[11px] text-gray-500">
                  <span className="px-3 py-2">id</span>
                  <span className="border-l border-gray-200 px-3 py-2">
                    segment
                  </span>
                  <span className="border-l border-gray-200 px-3 py-2">
                    score
                  </span>
                </div>

                {[
                  {
                    id: "8841",
                    segment: "enterprise",
                    score: "0.92",
                  },
                  {
                    id: "8842",
                    segment: "smb",
                    score: "0.64",
                  },
                  {
                    id: "8843",
                    segment: "enterprise",
                    score: "0.88",
                  },
                ].map((row) => (
                  <div
                    key={row.id}
                    className="grid grid-cols-3 border-b border-gray-100 font-mono text-[12px] text-gray-700 last:border-0"
                  >
                    <span className="px-3 py-2">{row.id}</span>

                    <span className="border-l border-gray-200 px-3 py-2">
                      {row.segment}
                    </span>

                    <span className="border-l border-gray-200 px-3 py-2 text-primary">
                      {row.score}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModalitiesSection;