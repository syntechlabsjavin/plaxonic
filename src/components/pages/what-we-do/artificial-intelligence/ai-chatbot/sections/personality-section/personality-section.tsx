import { useState } from "react";
import PersonalityBg from "../../../../../../../assets/what-we-do/artificial-intelligence/personality-bg.png";


type Tone = "Formal" | "Friendly";
type Length = "Concise" | "Detailed";

const replies: Record<Tone, Record<Length, string>> = {
  Formal: {
    Concise: "Your refund has been initiated. It should arrive within 5 days.",
    Detailed:
      "Your refund has been successfully initiated and should arrive within approximately 5 business days. Please let me know if you need any further assistance.",
  },
  Friendly: {
    Concise: "All done! Your refund should arrive in about 5 days.",
    Detailed:
      "Done and dusted! Refund's on its way, about 5 days. Anything else I can sort for you?",
  },
};

const PersonalitySection = () => {
  const [tone, setTone] = useState<Tone>("Friendly");
  const [length, setLength] = useState<Length>("Detailed");

  const renderOption = <T extends string>(
    options: T[],
    selected: T,
    onSelect: (value: T) => void,
  ) =>
    options.map((option) => (
      <button
        key={option}
        type="button"
        onClick={() => onSelect(option)}
        aria-pressed={selected === option}
        className={`flex-1 py-2.5 text-xs font-semibold transition-colors ${
          selected === option
            ? "bg-primary text-white"
            : "text-gray-400 hover:text-white"
        }`}
      >
        {option}
      </button>
    ));

  return (
    <section className="relative overflow-hidden bg-[#070809] py-16 sm:py-20 md:py-24 lg:py-36">
      {/* Background Image */}
      <img
        src={PersonalityBg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />

      {/* Background Glow */}
      <div className="pointer-events-none absolute bottom-[-20%] left-[-5%] h-[460px] w-[560px] max-w-full rounded-full bg-primary/12 blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-[0.9fr_1.3fr] lg:gap-16">
          {/* Section Content */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-light">
                Your Voice
              </span>
            </div>

            <h2 className="mb-6 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Sounds Like You, Not A{" "}
              <span className="text-white/40">Robot</span>.
            </h2>

            <p className="text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg">
              Your chatbot is part of your brand. We tune its tone, length, and
              personality to match your voice, and keep it consistent across
              every conversation. Try the controls.
            </p>
          </div>

          {/* Personality Controls */}
          <div className="border border-white/10 bg-[#0e1117]">
            <div className="grid grid-cols-1 gap-5 border-b border-white/10 p-5 sm:grid-cols-2 sm:gap-6 sm:p-6 lg:p-7">
              {/* Tone */}
              <div>
                <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500">
                  Tone
                </div>

                <div className="flex border border-white/10">
                  {renderOption(
                    ["Formal", "Friendly"] as Tone[],
                    tone,
                    setTone,
                  )}
                </div>
              </div>

              {/* Length */}
              <div>
                <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500">
                  Length
                </div>

                <div className="flex border border-white/10">
                  {renderOption(
                    ["Concise", "Detailed"] as Length[],
                    length,
                    setLength,
                  )}
                </div>
              </div>
            </div>

            {/* Sample Reply */}
            <div className="p-5 sm:p-6 lg:p-7">
              <div className="mb-3 font-mono text-[11px] text-gray-500">
                sample reply
              </div>

              <div
                key={`${tone}-${length}`}
                aria-live="polite"
                className="border border-white/10 bg-white/[0.06] px-4 py-3 text-sm leading-relaxed text-gray-200"
              >
                {replies[tone][length]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalitySection;