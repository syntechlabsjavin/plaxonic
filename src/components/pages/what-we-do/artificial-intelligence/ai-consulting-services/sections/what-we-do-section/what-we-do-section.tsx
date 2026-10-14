import { useEffect, useRef, useState } from "react";
import {
  Cog,
  Compass,
  Database,
  FlaskConical,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";
import CapabilityImg from "../../../../../../../assets/what-we-do/artificial-intelligence/capability.png"

type TileSpan = "md:col-span-2" | "md:col-span-3";

interface CapabilityTile {
  type: "capability";
  span: TileSpan;
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ImageTile {
  type: "image";
  span: TileSpan;
  src: string;
  alt: string;
  eyebrow: string;
  caption: string;
}

interface CtaTile {
  type: "cta";
  span: TileSpan;
  text: string;
}

type Tile = CapabilityTile | ImageTile | CtaTile;

const tiles: Tile[] = [
  {
    type: "capability",
    span: "md:col-span-3",
    icon: Compass,
    title: "AI Strategy & Roadmap",
    description:
      "We translate business goals into a prioritized AI portfolio, with a funding case and a sequence you can actually execute.",
  },
  {
    type: "capability",
    span: "md:col-span-3",
    icon: Target,
    title: "Use-Case Discovery & Prioritization",
    description:
      "We run structured discovery to separate high-value opportunities from expensive distractions, scored on impact and feasibility.",
  },
  {
    type: "image",
    span: "md:col-span-2",
    src: CapabilityImg,
    alt: "Abstract representation of an AI model",
    eyebrow: "Idea to system",
    caption: "One team, end to end.",
  },
  {
    type: "capability",
    span: "md:col-span-2",
    icon: Database,
    title: "Data & Platform Readiness",
    description:
      "We assess and shape the data foundations, pipelines, and platform your AI needs to be accurate and dependable.",
  },
  {
    type: "capability",
    span: "md:col-span-2",
    icon: FlaskConical,
    title: "Rapid Prototyping & PoCs",
    description:
      "We build working proofs in weeks, not quarters, so you can see real results before committing to a full build.",
  },
  {
    type: "capability",
    span: "md:col-span-3",
    icon: Cog,
    title: "Production Engineering & MLOps",
    description:
      "We engineer models into reliable, monitored services with evaluation, versioning, and the ops to keep them healthy.",
  },
  {
    type: "cta",
    span: "md:col-span-3",
    text: "We don't hand you a slide deck. We hand you something that runs.",
  },
  {
    type: "capability",
    span: "md:col-span-3",
    icon: ShieldCheck,
    title: "Responsible AI & Governance",
    description:
      "We build in evaluation, guardrails, and oversight so your AI is accurate, compliant, and trusted from day one.",
  },
  {
    type: "capability",
    span: "md:col-span-3",
    icon: Users,
    title: "Adoption & Team Enablement",
    description:
      "We bring your people along with training, change management, and clear ways of working, so the AI actually gets used.",
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

const WhatWeDoSection = () => {
  const { ref, inView } = useInView<HTMLElement>();

  const reveal = `transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  }`;

  const renderTile = (tile: Tile, index: number) => {
    const delay = { transitionDelay: `${250 + index * 90}ms` };

    if (tile.type === "image") {
      return (
        <div
          key={`image-${index}`}
          className={`group ${tile.span} relative overflow-hidden min-h-[220px] border border-gray-200 ${reveal}`}
          style={delay}
        >
          <img
            src={tile.src}
            alt={tile.alt}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110 motion-reduce:transition-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/5 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <span className="text-white/70 text-[11px] font-semibold tracking-[0.16em] uppercase">
              {tile.eyebrow}
            </span>
            <div className="text-white text-lg font-semibold mt-1">
              {tile.caption}
            </div>
          </div>
        </div>
      );
    }

    if (tile.type === "cta") {
      return (
        <div
          key={`cta-${index}`}
          className={`${tile.span} relative overflow-hidden bg-primary text-white p-8 lg:p-10 flex flex-col justify-between min-h-[200px] ${reveal}`}
          style={delay}
        >
          <Sparkles
            className="w-7 h-7 text-white/80 animate-pulse motion-reduce:animate-none"
            aria-hidden="true"
          />
          <p className="font-inter text-xl sm:text-2xl lg:text-3xl font-bold leading-snug mt-6">
            {tile.text}
          </p>
        </div>
      );
    }

    const Icon = tile.icon;

    return (
      <div
        key={tile.title}
        className={`group relative ${tile.span} bg-white border border-gray-200 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 p-6 sm:p-7 lg:p-8 overflow-hidden ${reveal}`}
        style={delay}
      >
        <div className="w-12 h-12 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center mb-6 transition-colors duration-300">
          <Icon
            className="w-6 h-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 motion-reduce:transition-none"
            aria-hidden="true"
          />
        </div>

        <h3 className="text-gray-900 text-lg lg:text-xl font-semibold mb-2.5 group-hover:text-primary transition-colors duration-300">
          {tile.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
          {tile.description}
        </p>

        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
      </div>
    );
  };

  return (
    <section
      ref={ref}
      className="bg-white py-16 sm:py-20 lg:py-32"
    >
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="max-w-3xl mb-10 sm:mb-14 lg:mb-16">
          <div className={`flex items-center gap-3 mb-6 ${reveal}`}>
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
              What We Do
            </span>
          </div>

          <h2
            className={`font-inter text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.05] ${reveal}`}
            style={{ transitionDelay: "120ms" }}
          >
            From Boardroom To <span className="text-gray-300">Production</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-5 lg:gap-6">
          {tiles.map(renderTile)}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;