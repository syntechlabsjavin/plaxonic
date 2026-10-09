import { ArrowUp, Mic, Paperclip, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const PLACEHOLDER_TOPICS = [
  "Data Analytics & Insights",
  "Cloud Solutions",
  "AI Services",
  "Cybersecurity",
  "Digital Transformation",
  "Automation",
] as const;

const PLACEHOLDER_INTERVAL_MS = 2800;

function useRotatingIndex(length: number, intervalMs: number): number {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % length),
      intervalMs,
    );
    return () => window.clearInterval(id);
  }, [length, intervalMs]);

  return index;
}

const AiAssistant = () => {
  const [inputValue, setInputValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const topicIndex = useRotatingIndex(
    PLACEHOLDER_TOPICS.length,
    PLACEHOLDER_INTERVAL_MS,
  );

  const hasInput = inputValue.trim().length > 0;

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);

    // Auto-grow textarea
    const el = e.target;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 150)}px`;
  };

  const handleSubmit = () => {
    if (!hasInput) return;
    // Hook up to your AI backend here
    console.log("Submit:", inputValue);
    setInputValue("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleAttachClick = () => {
    fileInputRef.current?.click();
  };

  const handleQuickPrompt = (prompt: string) => {
    setInputValue(prompt);
    textareaRef.current?.focus();
  };

  return (
    <section
      id="ai-assistant"
      className="relative overflow-hidden py-14 sm:py-20 lg:py-32 scroll-mt-24"
      style={{ contain: "paint" }}
    >
      {/* Black background */}
      <div className="absolute inset-0 bg-black" />

      {/* Animated gradient sweeps */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ willChange: "auto", contain: "paint" }}
      >
        <div
          className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] animate-shadow-sweep-1"
          style={{
            background:
              "linear-gradient(135deg, transparent 28%, rgba(27,163,221,0.15) 32%, rgba(27,163,221,0.06) 38%, transparent 42%, transparent 52%, rgba(27,163,221,0.12) 56%, rgba(27,163,221,0.04) 62%, transparent 66%)",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
        />
        <div
          className="absolute -top-1/2 -right-1/2 w-[200%] h-[200%] animate-shadow-sweep-2"
          style={{
            background:
              "linear-gradient(160deg, transparent 38%, rgba(27,163,221,0.18) 42%, rgba(27,163,221,0.07) 48%, transparent 52%)",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
        />
        <div
          className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] animate-shadow-sweep-3"
          style={{
            background:
              "linear-gradient(120deg, transparent 20%, rgba(27,163,221,0.1) 25%, transparent 30%, transparent 60%, rgba(27,163,221,0.08) 65%, transparent 70%)",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="text-center">
          {/* Heading */}
          <p className="text-primary font-semibold text-sm sm:text-base uppercase tracking-wider mb-6">
            AI-Powered Intelligence Arch
            <span style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}>
              I
            </span>
          </p>

          <h2 className="font-inter text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl 2xl:text-7xl font-bold leading-tight">
            <span className="text-white">All Your Questions.</span>
            <br />
            <span className="text-primary">One Intelligent Agent.</span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-lg 2xl:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
            Turn complex business challenges into instant solutions with
            Plaxonic Intelligence.
          </p>

          {/* Chat UI */}
          <div className="mt-12 max-w-5xl mx-auto">
            {/* Input box */}
            <div className="bg-white shadow-lg p-3 border border-gray-200">
              <div className="flex items-end gap-3">
                <div className="flex-1 relative">
                  <textarea
                    ref={textareaRef}
                    rows={1}
                    value={inputValue}
                    onChange={handleInput}
                    onKeyDown={handleKeyDown}
                    className="w-full bg-transparent outline-none border-none focus:outline-none focus:ring-0 focus:border-none text-gray-800 text-lg resize-none py-4 px-5 max-h-[150px] relative z-10"
                    style={{ boxShadow: "none" }}
                    aria-label="Ask Plaxonic Assistant"
                  />

                  {/* Animated placeholder (only when empty) */}
                  {!hasInput && (
                    <div className="absolute top-0 left-0 py-4 px-5 pointer-events-none text-lg text-gray-400">
                      Ask me about{" "}
                      <span className="text-gray-400">
                        <span className="inline" key={topicIndex}>
                          {PLACEHOLDER_TOPICS[topicIndex]}
                        </span>
                        <span className="inline-block w-[3px] h-[1em] bg-current ml-1 align-middle animate-pulse" />
                      </span>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!hasInput}
                  className={`
                    w-12 h-12 flex items-center justify-center transition-all flex-shrink-0 mb-1
                    ${
                      hasInput
                        ? "bg-primary text-white hover:bg-primary-dark"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }
                  `}
                  aria-label="Send message"
                >
                  <ArrowUp className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              {/* Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-2 px-2 pt-2 border-t border-gray-100 mt-2">
                <div className="flex items-center gap-2">
                  <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    accept="image/*,application/pdf,.txt,.md,.csv,.tsv,.json,.xml,.yaml,.yml,.log,.html,.htm,.js,.ts,.jsx,.tsx,.py,.java,.c,.cpp,.cs,.go,.rb,.php,.sh,.sql,.css"
                    aria-hidden="true"
                  />

                  <button
                    type="button"
                    title="Attach a file to analyze"
                    aria-label="Attach a file to analyze"
                    onClick={handleAttachClick}
                    className="flex items-center gap-1.5 text-gray-500 hover:text-gray-700 transition-colors px-3 py-1.5 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Paperclip className="w-4 h-4" aria-hidden="true" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleQuickPrompt("Cloud Solutions")}
                    className="hidden xs:flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition-colors px-3 py-1.5 border border-gray-200 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Cloud Solutions
                  </button>

                  <button
                    type="button"
                    onClick={() => handleQuickPrompt("AI Services")}
                    className="hidden sm:flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition-colors px-3 py-1.5 border border-gray-200 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    AI Services
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    title="Speak your question"
                    aria-label="Speak your question"
                    className="flex items-center gap-1.5 transition-colors px-3 py-1.5 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-gray-500 hover:text-gray-700"
                  >
                    <Mic className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              Arch
              <span
                style={{
                  fontFamily:
                    'Georgia, Cambria, "Times New Roman", Times, serif',
                }}
              >
                I
              </span>{" "}
              can make mistakes. Consider checking important information.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
            <a
              href="/plaxonic-intelligence"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-3 min-h-[3.5rem] lg:min-h-[3rem] 2xl:min-h-[3.5rem] py-3 px-8 sm:px-10 lg:px-8 2xl:px-10 bg-primary text-white font-semibold uppercase tracking-wider text-sm hover:bg-primary-dark transition-colors text-center"
            >
              Learn more about Plaxonic Intelligence
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiAssistant;