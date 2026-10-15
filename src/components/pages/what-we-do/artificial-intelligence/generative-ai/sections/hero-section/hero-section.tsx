import { useEffect, useState } from "react";
import { ArrowRight, FileText, Image, CodeXml } from "lucide-react";
import HeroLinesBg from "../../../../../../../assets/what-we-do/artificial-intelligence/hero-lines.png";

const TYPING_TEXT =
  "Here is a phased go-to-market plan. We start with a focused beta to validate the core value, instrument every step, then expand channels once the funnel is proven and the messaging is sharp.";

const HeroSection = () => {
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

  const floatingImages = [
    {
      src: "https://plaxonic.com/generative-ai/float-vr.png",
      alt: "Generated sample",
      className: "absolute top-[20%] left-[4%] w-32 -rotate-6",
    },
    {
      src: "https://plaxonic.com/generative-ai/float-tiger.png",
      alt: "Generated sample",
      className: "absolute top-[15%] right-[6%] w-28 rotate-6",
    },
    {
      src: "https://plaxonic.com/generative-ai/float-bonsai.png",
      alt: "Generated sample",
      className: "absolute top-[54%] left-[6%] w-28 rotate-3",
    },
    {
      src: "https://plaxonic.com/generative-ai/visual-1.png",
      alt: "Generated sample",
      className: "absolute top-[50%] right-[5%] w-28 -rotate-3",
    },
  ];

  const generatedFiles = [
    { name: "copy.md", Icon: FileText },
    { name: "hero.png", Icon: Image },
    { name: "landing.tsx", Icon: CodeXml },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#070809] pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28">
      {/* Animated background line artwork */}
      <div
        aria-hidden="true"
        className="hero-bg-animation pointer-events-none absolute inset-0 transform-gpu will-change-transform"
        style={{
          backfaceVisibility: "hidden",
        }}
      >
        <img
          src={HeroLinesBg}
          alt=""
          className="h-full w-full object-cover opacity-50"
        />
      </div>

      {/* Floating generated images */}
      <div className="pointer-events-none absolute inset-0 z-[5] hidden lg:block">
        {floatingImages.map((item, index) => (
          <div
            key={item.src}
            className={`${item.className} hero-image-animation`}
            style={{
              animationDelay: `${index * -1.2}s`,
              animationDuration: `${5 + index * 0.8}s`,
            }}
          >
            <div className="overflow-hidden border border-white/15 shadow-2xl shadow-black/50">
              <img
                src={item.src}
                alt={item.alt}
                className="block aspect-square w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Animated ambient glow effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="hero-glow-animation absolute h-[420px] w-[700px] rounded-full bg-primary/20 blur-[150px]"
          style={{
            top: "-10%",
            left: "20%",
            animationDelay: "0s",
          }}
        />

        <div
          className="hero-glow-animation absolute h-[380px] w-[520px] rounded-full bg-[#7c5cff]/15 blur-[150px]"
          style={{
            top: "0%",
            right: "12%",
            animationDelay: "-5s",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Artificial Intelligence / AI Development / Generative AI
            </span>
          </div>

          <h1 className="font-inter text-[2rem] font-bold leading-[1.03] tracking-tight text-white xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
            Put Generation
            <br />
            <span className="bg-gradient-to-r from-primary-light via-primary to-[#9d7bff] bg-clip-text text-primary">
              To Work.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-400 sm:mt-8 sm:text-lg md:text-xl">
            We build generative AI that writes, codes, designs, and answers,
            grounded in your knowledge, wrapped in guardrails, and engineered
            to ship real value, not just demos.
          </p>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <button
              type="button"
              className="group inline-flex items-center justify-center gap-3 bg-primary px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Build With GenAI
              <ArrowRight className="h-5 w-5 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
            </button>

            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/25 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white hover:text-gray-900"
            >
              What We Generate
            </a>
          </div>
        </div>

        {/* Generative AI prompt preview */}
        <div className="mx-auto mt-12 max-w-3xl border border-white/10 bg-[#0e1117] sm:mt-14 lg:mt-20">
          {/* Prompt header */}
          <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
            <div className="flex min-w-0 items-center gap-2 font-mono text-[11px] text-gray-500">
              <span className="flex-shrink-0 text-primary-light">&gt;</span>

              <span className="truncate">
                prompt: draft a launch plan for our new product
              </span>
            </div>

            <span className="flex-shrink-0 font-mono text-[10px] text-gray-600">
              {typedText.length < TYPING_TEXT.length
                ? "generating"
                : "complete"}
            </span>
          </div>

          {/* Typing response */}
          <div className="p-5 sm:p-6 lg:p-7">
            <div
              className="min-h-[7rem] whitespace-pre-wrap font-mono text-sm leading-relaxed text-gray-300 md:text-base"
              aria-live="off"
            >
              {typedText}
              <span
                className="ml-0.5 inline-block w-[0.5ch] -mb-0.5 animate-pulse bg-primary-light"
                aria-hidden="true"
                style={{ height: "1em" }}
              />
            </div>

            {/* Generated file tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {generatedFiles.map(({ name, Icon }) => (
                <span
                  key={name}
                  className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-gray-400"
                >
                  <Icon className="h-3.5 w-3.5 text-primary-light" />
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;