import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

interface CodeSymbol {
  x: number;
  y: number;
  char: string;
  size: number;
  opacity: number;
  speed: number;
  drift: number;
  phase: number;
}

const CODE_CHARS = [
  "{", "}", "[", "]", "(", ")", "<", ">",
  "#", "0", "1", ":", ";", "+", "=", "/",
  "$", "&", "%", "*", "×", "→",
];

const CTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Reveal content when the section enters the viewport.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Animated code-symbol background.
  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !section || !ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let animationId = 0;
    let isOnScreen = false;
    let symbols: CodeSymbol[] = [];

    const createSymbols = () => {
      symbols = [];

      // Dense character field, similar to the reference screenshot.
      const count = Math.max(
        420,
        Math.floor((width * height) / 1250)
      );

      for (let i = 0; i < count; i++) {
        symbols.push({
          x: Math.random() * width,
          y: Math.random() * height,
          char: CODE_CHARS[
            Math.floor(Math.random() * CODE_CHARS.length)
          ],
          size: Math.random() * 9 + 12,
          opacity: Math.random() * 0.19 + 0.035,
          speed: Math.random() * 0.22 + 0.035,
          drift: (Math.random() - 0.5) * 0.12,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    const resizeCanvas = () => {
      const rect = section.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = rect.width;
      height = rect.height;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      createSymbols();
      render(0);
    };

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      symbols.forEach((symbol) => {
        // Subtle brightness changes make the code field feel alive.
        const pulse = reducedMotion
          ? 1
          : 0.78 +
            Math.sin(time * 0.0007 + symbol.phase) * 0.22;

        ctx.font = `${symbol.size}px monospace`;
        ctx.textBaseline = "middle";
        ctx.fillStyle = `rgba(255,255,255,${
          symbol.opacity * pulse
        })`;

        ctx.fillText(symbol.char, symbol.x, symbol.y);

        if (!reducedMotion) {
          symbol.y += symbol.speed;
          symbol.x += symbol.drift;

          // Wrap characters around the edges for seamless motion.
          if (symbol.y > height + 20) {
            symbol.y = -20;
            symbol.x = Math.random() * width;
          }

          if (symbol.x < -20) symbol.x = width + 10;
          if (symbol.x > width + 20) symbol.x = -10;
        }
      });

      if (isOnScreen && !reducedMotion) {
        animationId = requestAnimationFrame(render);
      }
    };

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isOnScreen = entry.isIntersecting;
        cancelAnimationFrame(animationId);

        if (isOnScreen) {
          if (reducedMotion) {
            render(0);
          } else {
            animationId = requestAnimationFrame(render);
          }
        }
      },
      { threshold: 0 }
    );

    const resizeObserver = new ResizeObserver(resizeCanvas);

    visibilityObserver.observe(section);
    resizeObserver.observe(section);

    resizeCanvas();

    return () => {
      cancelAnimationFrame(animationId);
      visibilityObserver.disconnect();
      resizeObserver.disconnect();
    };
  }, []);

  const handleAuditClick = () => {
    const contactSection = document.querySelector("#contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.location.href = "/contact";
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative isolate w-full overflow-hidden bg-[#20a9df] py-16 sm:py-20 md:py-24 lg:py-36"
    >
      {/* Cyan-blue gradient */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-br from-[#159bd0] via-[#20a9df] to-[#149dce]" />

      {/* Soft lighting across the background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.12),transparent_68%)]" />

      {/* Animated programming characters */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          maskImage:
            "radial-gradient(ellipse 110% 100% at 50% 50%, black 45%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 110% 100% at 50% 50%, black 45%, transparent 100%)",
        }}
      >
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
        />
      </div>

      {/* CTA content */}
      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div
          className={`mx-auto max-w-5xl text-center transition-all duration-1000 ease-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          {/* Eyebrow */}
          <div className="mb-8 inline-flex items-center gap-3">
            <span className="h-[2px] w-8 bg-white" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white sm:text-sm">
              Ship With Confidence
            </span>

            <span className="h-[2px] w-8 bg-white" />
          </div>

          {/* Heading */}
          <h2 className="font-inter text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl md:text-6xl lg:text-7xl">
            <span className="text-gray-900">
              Ready To Release
            </span>

            <br />

            <span className="text-white">
              Without The Anxiety?
            </span>
          </h2>

          {/* Description */}
          <p
            className={`mx-auto mt-8 max-w-4xl text-base leading-relaxed text-white/90 transition-all duration-700 delay-200 sm:text-lg md:text-xl ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            Let's find the gaps in your quality before your users do.
            Start with a QA audit, and we'll show you exactly what to
            test, automate, and improve first.
          </p>

          {/* Actions */}
          <div
            className={`mt-10 flex flex-col items-center justify-center gap-4 transition-all duration-700 delay-300 sm:mt-12 sm:flex-row sm:gap-5 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            <button
              type="button"
              onClick={handleAuditClick}
              className="group inline-flex h-14 w-full items-center justify-center gap-3 bg-white px-8 text-base font-semibold text-primary transition-colors duration-300 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#20a9df] sm:w-auto sm:px-10"
            >
              <span>Request a QA Audit</span>

              <ArrowRight
                aria-hidden="true"
                size={20}
                className="-rotate-45 transition-transform duration-300 group-hover:rotate-0"
              />
            </button>

            <a
              href="/contact"
              className="inline-flex h-14 w-full items-center justify-center border-2 border-white/50 px-8 text-base font-semibold text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#20a9df] sm:w-auto sm:px-10"
            >
              Talk to a QA Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;