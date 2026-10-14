import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const NETWORK_COLOR = "27,163,221";
const NETWORK_LAYERS = [4, 7, 8, 6, 3];

type Node = { x: number; y: number };

function NeuralField({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let nodes: Node[][] = [];
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const layout = () => {
      width = parent.clientWidth;
      height = parent.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const padX = width * 0.08;
      const innerW = width - padX * 2;
      const padY = height * 0.16;
      const innerH = height - padY * 2;
      const lastLayer = NETWORK_LAYERS.length - 1;

      nodes = NETWORK_LAYERS.map((count, layerIndex) => {
        const x = padX + (lastLayer === 0 ? innerW / 2 : (innerW * layerIndex) / lastLayer);
        const lastNode = count - 1;

        return Array.from({ length: count }, (_, index) => ({
          x,
          y: padY + (lastNode === 0 ? innerH / 2 : (innerH * index) / lastNode),
        }));
      });
    };

    const draw = (progress: number) => {
      ctx.clearRect(0, 0, width, height);
      const sweep = progress * width;

      for (let layer = 0; layer < nodes.length - 1; layer++) {
        for (const from of nodes[layer]) {
          for (const to of nodes[layer + 1]) {
            const midpoint = (from.x + to.x) / 2;
            const alpha =
              0.06 + 0.5 * (1 - Math.min(Math.abs(midpoint - sweep) / 180, 1));

            ctx.strokeStyle = `rgba(${NETWORK_COLOR},${alpha.toFixed(3)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(from.x, from.y);
            ctx.lineTo(to.x, to.y);
            ctx.stroke();
          }
        }
      }

      for (const layer of nodes) {
        for (const node of layer) {
          const intensity = 1 - Math.min(Math.abs(node.x - sweep) / 140, 1);

          ctx.fillStyle = `rgba(${NETWORK_COLOR},${(0.4 + 0.6 * intensity).toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(node.x, node.y, 3 + 2.5 * intensity, 0, Math.PI * 2);
          ctx.fill();

          if (intensity > 0.4) {
            ctx.strokeStyle = `rgba(${NETWORK_COLOR},${(0.4 * intensity).toFixed(3)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(node.x, node.y, 8 + 6 * intensity, 0, Math.PI * 2);
            ctx.stroke();
          }
        }
      }
    };

    layout();

    if (reducedMotion) {
      draw(0.5);
      return;
    }

    let frame = 0;
    let startedAt = 0;

    const tick = (time: number) => {
      frame = requestAnimationFrame(tick);
      if (!startedAt) startedAt = time;
      const progress = (((time - startedAt) % 3400) / 3400) * 1.2 - 0.1;
      draw(progress);
    };

    frame = requestAnimationFrame(tick);

    const onResize = () => layout();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
}

function openProposalModal() {
  window.dispatchEvent(
    new CustomEvent("open-proposal-modal", {
      detail: { source: "core-ai-hero" },
    }),
  );
}

const HeroSection=()=> {
  return (
    <section className="relative w-full overflow-hidden bg-[#070809] pt-28 sm:pt-32 lg:pt-40">
      <div className="pointer-events-none absolute top-[-10%] left-[-5%] h-[520px] w-[680px] max-w-full rounded-full bg-primary/15 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Artificial Intelligence / AI Development / Core AI
          </span>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 pb-14 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-16 lg:pb-16">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-inter text-[2rem] font-bold leading-[1.1] tracking-tight text-white xs:text-4xl sm:text-5xl md:text-6xl lg:text-8xl lg:leading-[1.02]"
          >
            Custom AI,
            <br />
            <span className="bg-gradient-to-r from-primary-light via-primary to-primary-light bg-clip-text text-primary">
              Engineered To The Metal.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="mb-8 text-base leading-relaxed text-gray-400 sm:text-lg md:text-xl">
              We design, train, and ship custom models, not thin wrappers around
              someone else&apos;s API. From data pipeline to deployed inference, we
              build the AI your product actually runs on.
            </p>

            <div className="flex flex-col flex-wrap gap-4 sm:flex-row">
              <button
                type="button"
                onClick={openProposalModal}
                className="group inline-flex w-full items-center justify-center gap-3 bg-primary px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-dark sm:w-auto"
              >
                Scope Your Model
                <ArrowRight className="h-5 w-5 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
              </button>

              <a
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 border-2 border-white/25 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white hover:text-gray-900 sm:w-auto"
              >
                What We Build
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative h-[200px] border-t border-white/10 sm:h-[240px] lg:h-[300px]"
        style={{
          maskImage: "linear-gradient(to bottom, black 35%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 35%, transparent 100%)",
        }}
      >
        <NeuralField className="absolute inset-0 h-full w-full" />
      </motion.div>
    </section>
  );
}

export default HeroSection;