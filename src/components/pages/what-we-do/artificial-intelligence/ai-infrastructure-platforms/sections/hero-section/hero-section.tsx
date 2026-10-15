import { useEffect, useRef, useState } from "react";
import {
  motion,
  animate,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { ArrowRight } from "lucide-react";

/* ---------- Animation variants ---------- */

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const panel: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], when: "beforeChildren", staggerChildren: 0.1 },
  },
};

const tileVariant: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/* ---------- Animated cluster canvas ---------- */

// Change to your brand primary (r, g, b) so the canvas matches Tailwind's `primary`
const PRIMARY_RGB = "59, 130, 246";

type GraphNode = { x: number; y: number; vx: number; vy: number; phase: number };
type Packet = { a: number; b: number; t: number; speed: number };

const ClusterCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const NODE_COUNT = 64;
    let width = 0;
    let height = 0;
    let raf = 0;
    let visible = true;
    let nodes: GraphNode[] = [];
    let edges: [number, number][] = [];
    let packets: Packet[] = [];

    const newPacket = (): Packet => {
      const [a, b] = edges[Math.floor(Math.random() * edges.length)] ?? [0, 1];
      return { a, b, t: Math.random(), speed: 0.004 + Math.random() * 0.008 };
    };

    const buildGraph = () => {
      const cols = 8;
      const rows = 8;
      nodes = Array.from({ length: NODE_COUNT }, (_, i) => {
        const c = i % cols;
        const r = Math.floor(i / cols);
        return {
          x: ((c + 0.5) / cols) * width + (Math.random() - 0.5) * (width / cols) * 0.5,
          y: ((r + 0.5) / rows) * height + (Math.random() - 0.5) * (height / rows) * 0.5,
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12,
          phase: Math.random() * Math.PI * 2,
        };
      });

      const seen = new Set<string>();
      edges = [];
      nodes.forEach((n, i) => {
        nodes
          .map((m, j) => ({ j, d: (n.x - m.x) ** 2 + (n.y - m.y) ** 2 }))
          .filter((o) => o.j !== i)
          .sort((p, q) => p.d - q.d)
          .slice(0, 2)
          .forEach(({ j }) => {
            const key = i < j ? `${i}-${j}` : `${j}-${i}`;
            if (!seen.has(key)) {
              seen.add(key);
              edges.push([i, j]);
            }
          });
      });
      packets = Array.from({ length: 22 }, newPacket);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildGraph();
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      ctx.lineWidth = 1;
      ctx.strokeStyle = `rgba(${PRIMARY_RGB}, 0.18)`;
      edges.forEach(([a, b]) => {
        ctx.beginPath();
        ctx.moveTo(nodes[a].x, nodes[a].y);
        ctx.lineTo(nodes[b].x, nodes[b].y);
        ctx.stroke();
      });

      packets.forEach((p, i) => {
        p.t += p.speed;
        if (p.t >= 1) {
          packets[i] = { ...newPacket(), t: 0 };
          return;
        }
        const x = nodes[p.a].x + (nodes[p.b].x - nodes[p.a].x) * p.t;
        const y = nodes[p.a].y + (nodes[p.b].y - nodes[p.a].y) * p.t;
        const g = ctx.createRadialGradient(x, y, 0, x, y, 8);
        g.addColorStop(0, `rgba(${PRIMARY_RGB}, 0.9)`);
        g.addColorStop(1, `rgba(${PRIMARY_RGB}, 0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fill();
      });

      nodes.forEach((n) => {
        if (!reduceMotion) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 6 || n.x > width - 6) n.vx *= -1;
          if (n.y < 6 || n.y > height - 6) n.vy *= -1;
        }
        const pulse = 0.5 + 0.5 * Math.sin(time / 700 + n.phase);
        ctx.fillStyle = `rgba(${PRIMARY_RGB}, ${0.35 + pulse * 0.5})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2 + pulse * 1.2, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const loop = (time: number) => {
      if (visible) draw(time);
      raf = requestAnimationFrame(loop);
    };

    resize();
    if (reduceMotion) draw(0);
    else raf = requestAnimationFrame(loop);

    const ro = new ResizeObserver(resize);
    ro.observe(parent);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, [reduceMotion]);

  return <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 h-full w-full" />;
};

/* ---------- Count-up number ---------- */

type CountUpProps = {
  value: number;
  suffix?: string;
  duration?: number;
};

const CountUp = ({ value, suffix = "", duration = 1.4 }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduceMotion = useReducedMotion();
  const previous = useRef(0);

  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    if (reduceMotion) {
      node.textContent = `${Math.round(value).toLocaleString()}${suffix}`;
      return;
    }
    const controls = animate(previous.current, value, {
      duration: previous.current === 0 ? duration : 0.8,
      ease: "easeOut",
      onUpdate: (v) => {
        node.textContent = `${Math.round(v).toLocaleString()}${suffix}`;
      },
    });
    previous.current = value;
    return () => controls.stop();
  }, [inView, value, suffix, duration, reduceMotion]);

  return <span ref={ref}>0{suffix}</span>;
};

/* ---------- Live metrics ---------- */

const rand = (min: number, max: number) => Math.round(min + Math.random() * (max - min));

const useLiveMetrics = () => {
  const [m, setM] = useState({ gpus: 512, rps: 12480, p99: 142, pods: 64 });

  useEffect(() => {
    const id = window.setInterval(() => {
      setM({ gpus: 512, rps: rand(11800, 13200), p99: rand(128, 156), pods: rand(60, 72) });
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return m;
};

/* ---------- Metric tile ---------- */

type MetricTileProps = {
  status: string;
  label: string;
  children: React.ReactNode;
  pulse?: boolean;
};

const MetricTile = ({ status, label, children, pulse = false }: MetricTileProps) => (
  <motion.div
    variants={tileVariant}
    whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
    className="border-b border-white/10 [&:nth-child(odd)]:border-r p-5"
  >
    <div className="flex items-center gap-1.5 mb-2">
      <span className={`w-1.5 h-1.5 ${pulse ? "bg-primary-light animate-pulse" : "bg-green-400"}`} />
      <span className="font-mono text-[10px] text-gray-500 uppercase tracking-wider">{status}</span>
    </div>
    <div className="font-mono text-2xl font-semibold text-white tabular-nums">{children}</div>
    <div className="text-gray-400 text-sm mt-1">{label}</div>
  </motion.div>
);

/* ---------- Hero ---------- */

const HeroSection = () => {
  const { gpus, rps, p99, pods } = useLiveMetrics();
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden bg-[#070809] pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28">
      <motion.img
        src="/ai-infra/services-bg.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        initial={{ opacity: 0, scale: 1.08 }}
        animate={reduceMotion ? { opacity: 0.7, scale: 1 } : { opacity: 0.7, scale: [1.08, 1.04, 1.08] }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { opacity: { duration: 1.2 }, scale: { duration: 20, repeat: Infinity, ease: "easeInOut" } }
        }
      />
      <div className="pointer-events-none absolute inset-0 bg-[#070809]/40" />
      <motion.div
        className="pointer-events-none absolute top-[-12%] left-1/2 -translate-x-1/2 w-[880px] h-[520px] rounded-full bg-primary/15 blur-[180px]"
        animate={reduceMotion ? undefined : { opacity: [0.6, 1, 0.6], scale: [1, 1.12, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-3 mb-8">
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
              Artificial Intelligence / AI Solutions / AI Infrastructure
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-inter text-[2rem] xs:text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1] lg:leading-[1.02]"
          >
            The Platform Your
            <br />
            <motion.span
              className="bg-gradient-to-r from-primary-light via-primary to-primary-light bg-[length:200%_auto] bg-clip-text text-primary"
              animate={reduceMotion ? undefined : { backgroundPosition: ["0% 50%", "200% 50%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
              AI Runs On.
            </motion.span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed mt-8 max-w-2xl mx-auto"
          >
            We build the infrastructure that turns a model into a product: serving, scaling, training, monitoring, and
            cost control, engineered to be fast, reliable, and yours to operate.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 mt-10">
            <motion.button
              type="button"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-primary text-white font-semibold text-base px-8 py-3.5 hover:bg-primary-dark transition-colors"
            >
              Build Your AI Platform
              <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </motion.button>
            <motion.a
              href="/contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto border-2 border-white/25 text-white font-semibold text-base px-8 py-3.5 hover:bg-white hover:text-gray-900 transition-colors"
            >
              See the Stack
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Control-plane panel */}
        <motion.div
          className="mt-14 lg:mt-16 border border-white/10 bg-[#0e1117] overflow-hidden"
          variants={panel}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
            <div className="flex items-center gap-2 font-mono text-[11px] text-gray-500">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              control-plane · prod · healthy
            </div>
            <span className="font-mono text-[11px] text-gray-600">region: multi</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr]">
            <div className="relative h-[200px] lg:h-auto lg:min-h-[220px] border-b lg:border-b-0 lg:border-r border-white/10 overflow-hidden">
              <ClusterCanvas />
              {!reduceMotion && (
                <motion.div
                  className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent via-primary/10 to-transparent"
                  animate={{ y: ["-100%", "300%"] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
                />
              )}
              <span className="absolute top-3 left-4 font-mono text-[10px] text-gray-400 bg-black/40 px-2 py-1">
                cluster · 64 nodes · auto
              </span>
            </div>

            <div className="grid grid-cols-2">
              <MetricTile status="live" label="GPUs online">
                <CountUp value={gpus} />
              </MetricTile>
              <MetricTile status="throughput" label="req/s">
                <CountUp value={rps} />
              </MetricTile>
              <MetricTile status="healthy" label="p99 latency">
                <CountUp value={p99} suffix="ms" />
              </MetricTile>
              <MetricTile status="active" label="autoscaling" pulse>
                <CountUp value={pods} suffix=" pods" />
              </MetricTile>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;