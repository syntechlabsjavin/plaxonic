import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import proto1Image from "../../../../../../../assets/what-we-do/proto-1.webp";
import proto2Image from "../../../../../../../assets/what-we-do/proto-2.png";
import proto3Image from "../../../../../../../assets/what-we-do/proto-3.png";
import proto4Image from "../../../../../../../assets/what-we-do/proto-4.png";

/* -------------------------------------------------------------------------- */
/* Types & content                                                            */
/* -------------------------------------------------------------------------- */

interface Protocol {
  id: string;
  /** Tab label and panel heading */
  name: string;
  /** Short line under the tab label */
  tagline: string;
  description: string;
  bestFor: string[];
  /** Code sample lines. An empty string renders an unnumbered blank line. */
  code: string[];
  /** Background image shown while this tab is active */
  image: string;
}

// NOTE: only the REST entry comes from your HTML. The copy and code samples for
// the other four protocols are drafts. Replace them with your live-site text.
const PROTOCOLS: Protocol[] = [
  {
    id: "rest",
    name: "REST",
    tagline: "Resource-based, widely supported",
    description:
      "REST supports clear resource-based communication between clients and services. It works well for business applications, third-party integrations, and systems that need widely supported API standards.",
    bestFor: [
      "Business applications",
      "Third-party integrations",
      "Widely supported standards",
    ],
    code: [
      "GET /api/v2/orders/8821",
      "Accept: application/json",
      "",
      "200 OK",
      '{ "id": 8821, "status": "shipped" }',
    ],
    image: proto1Image,
  },
  {
    id: "graphql",
    name: "GraphQL",
    tagline: "Flexible queries, single endpoint",
    description:
      "GraphQL lets clients request exactly the data they need through a single endpoint. It suits applications with complex data relationships, multiple client types, and fast-changing front-end requirements.",
    bestFor: [
      "Complex data relationships",
      "Web and mobile clients",
      "Rapid front-end iteration",
    ],
    code: [
      "POST /graphql",
      "query { order(id: 8821) { id status } }",
      "",
      "200 OK",
      '{ "data": { "order": { "id": 8821, "status": "shipped" } } }',
    ],
    image: proto2Image,
  },
  {
    id: "grpc",
    name: "gRPC",
    tagline: "Fast, strongly typed service calls",
    description:
      "gRPC enables fast, strongly typed communication between services using efficient binary serialization. It fits internal microservice traffic where performance and clear contracts matter most.",
    bestFor: [
      "Service-to-service calls",
      "Low-latency systems",
      "Contract-first design",
    ],
    code: [
      "rpc GetOrder(OrderRequest) returns (Order)",
      "request { id: 8821 }",
      "",
      "status: OK",
      "Order { id: 8821, status: SHIPPED }",
    ],
    image: proto3Image,
  },
  {
    id: "event-streaming",
    name: "Event Streaming",
    tagline: "Continuous, event-driven data",
    description:
      "Event streaming moves data continuously as events happen, decoupling producers from consumers. It supports real-time pipelines, asynchronous workflows, and event-driven architectures.",
    bestFor: [
      "Event-driven systems",
      "Real-time data pipelines",
      "Decoupled services",
    ],
    code: [
      "topic: orders.events",
      "key: order-8821",
      "",
      "event: order.shipped",
      '{ "id": 8821, "status": "shipped" }',
    ],
    image: proto4Image,
  },
  {
    id: "websockets",
    name: "WebSockets",
    tagline: "Two-way, real-time connection",
    description:
      "WebSockets keep a two-way connection open between client and server, so updates can flow in either direction instantly. They suit live interfaces and applications that need real-time interaction.",
    bestFor: [
      "Live dashboards",
      "Chat and notifications",
      "Real-time collaboration",
    ],
    code: [
      "GET /ws/orders",
      "Upgrade: websocket",
      "",
      "101 Switching Protocols",
      '{ "event": "order.updated", "id": 8821 }',
    ],
    image: proto1Image,
  },
];

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

const ProtocolsTabs=()=> {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const active = PROTOCOLS[activeIndex];

  const selectTab = (index: number, focus = false) => {
    const next = (index + PROTOCOLS.length) % PROTOCOLS.length;
    setActiveIndex(next);
    if (focus) tabRefs.current[next]?.focus();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      selectTab(activeIndex + 1, true);
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      selectTab(activeIndex - 1, true);
    }
  };

  return (
    <section className="relative w-full bg-black py-16 sm:py-20 lg:py-32 overflow-hidden">
      {/* Background images, crossfaded per active tab */}
      <div className="absolute inset-0 pointer-events-none z-[1]" aria-hidden="true">
        {PROTOCOLS.map((protocol, index) => (
          <img
            key={protocol.id}
            src={protocol.image}
            alt=""
            loading={index === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/25 to-transparent" />
      </div>

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 relative z-[2]">
        {/* Header */}
        <div className="mb-10 sm:mb-14 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
              Communication Protocols
            </span>
          </div>
          <h2 className="font-inter text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
            Right API Type &amp; Protocol for{" "}
            <span className="text-primary">Every Communication</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Different applications need different ways to exchange data. Our API
            development services use communication protocols suited to your
            application architecture, data requirements, and integration
            workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.5fr] gap-6 lg:gap-10">
          {/* Tabs */}
          <div
            role="tablist"
            aria-label="Communication protocols"
            aria-orientation="vertical"
            onKeyDown={handleKeyDown}
            className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible"
          >
            {PROTOCOLS.map((protocol, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={protocol.id}
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`protocol-tab-${protocol.id}`}
                  aria-selected={isActive}
                  aria-controls={`protocol-panel-${protocol.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => selectTab(index)}
                  className={`group relative text-left shrink-0 lg:shrink w-full min-w-[180px] lg:min-w-0 border px-5 py-4 backdrop-blur-md transition-all duration-300 ${
                    isActive
                      ? "bg-white/10 border-primary/60"
                      : "bg-black/30 border-white/10 hover:border-white/25"
                  }`}
                >
                  <span
                    className={`absolute left-0 top-0 bottom-0 w-[3px] bg-primary transition-transform duration-300 origin-top ${
                      isActive ? "scale-y-100" : "scale-y-0"
                    }`}
                  />
                  <div
                    className={`font-inter text-lg font-bold transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-gray-300 group-hover:text-white"
                    }`}
                  >
                    {protocol.name}
                  </div>
                  <div className="text-gray-500 text-xs mt-1">
                    {protocol.tagline}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Panel */}
          <div className="relative bg-black/30 backdrop-blur-md border border-white/10 min-h-[360px]">
            <div
              key={active.id}
              role="tabpanel"
              id={`protocol-panel-${active.id}`}
              aria-labelledby={`protocol-tab-${active.id}`}
              className="grid grid-cols-1 md:grid-cols-2 h-full motion-safe:animate-fade-in"
            >
              <div className="p-6 sm:p-8 lg:p-10 flex flex-col">
                <h3 className="font-inter text-2xl lg:text-3xl font-bold text-white mb-4">
                  {active.name}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
                  {active.description}
                </p>

                <div className="mt-auto">
                  <div className="text-gray-500 text-xs uppercase tracking-[0.15em] mb-3">
                    Best for
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {active.bestFor.map((item) => (
                      <li
                        key={item}
                        className="text-xs font-medium text-primary bg-primary/10 border border-primary/30 px-3 py-1.5"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gray-900/80 border-t md:border-t-0 md:border-l border-white/10 p-6 lg:p-8 flex flex-col">
                <div className="flex items-center gap-2 mb-5" aria-hidden="true">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                </div>

                <pre className="font-mono text-[13px] leading-relaxed text-gray-300 whitespace-pre-wrap">
                  <code>
                    {active.code.map((line, i) => (
                      <span key={i} className="flex gap-3">
                        <span className="text-gray-600 select-none w-4 text-right">
                          {line === "" ? "" : i + 1}
                        </span>
                        <span>{line === "" ? "\u00A0" : line}</span>
                      </span>
                    ))}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProtocolsTabs;