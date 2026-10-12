
import {
  Blocks,
  Layers,
  Sparkles,
  Users,
  Building2,
  MonitorSmartphone,
  AppWindow,
  RadioTower,
  Film,
  CalendarClock,
  Braces,
  RefreshCw,
  Store,
  ShoppingBag,
  ShoppingCart,
  Package,
  LayoutTemplate,
  Rocket,
  Newspaper,
} from "lucide-react";

const categories = [
  {
    number: "01",
    title: "Web Applications",
    cards: [
      {
        icon: Blocks,
        title: "Custom Web Application Development",
        description:
          "We build custom web portals around your business logic and workflows. These web applications give customers secure, user-friendly access to business information and services. We serve every industry and user group.",
      },
      {
        icon: Layers,
        title: "SaaS & Multi-Tenant Applications",
        description:
          "Our custom SaaS web application development services deliver scalable, multi-tenant platforms with subscription management, automated billing, data isolation, and enterprise-grade infrastructure for rapid, long-term business growth.",
      },
      {
        icon: Sparkles,
        title: "AI-Native Web Application",
        description:
          "We build intelligent, AI-native web pages with RAG-powered search, context-aware copilots, and generative features, plus automated workflows that boost productivity and user engagement.",
      },
      {
        icon: Users,
        title: "Customer & Partner Portals",
        description:
          "We create engaging, creative customer-facing web apps that enhance security, improve customer interaction, and improve user experience. These portals give clients, partners, and vendors unified self-service access to the data, transactions, and support they need.",
      },
      {
        icon: Building2,
        title: "Enterprise Web Platforms",
        description:
          "Through our enterprise web application development services, we design enterprise web apps for high availability, robust security, and peak performance, supporting complex workflows and high concurrent usage at scale.",
      },
      {
        icon: MonitorSmartphone,
        title: "Progressive Web Apps (PWAs)",
        description:
          "We deliver app-like web experiences with offline functionality, real-time push notifications, and near-native performance. These web apps provide seamless cross-platform mobile access without requiring app-store distribution.",
      },
      {
        icon: AppWindow,
        title: "Single Page Application (SPAs)",
        description:
          "We build modern single-page applications that eliminate loading delays by updating content dynamically. Our engineering team creates smooth, desktop-like web experiences that load content instantly.",
      },
      {
        icon: RadioTower,
        title: "Real-Time & Collaborative Applications",
        description:
          "We build WebSocket-powered applications with live data streaming, real-time dashboards, and instant notifications. Our architecture allows multiple users to collaborate, edit, and sync data with zero delays.",
      },
      {
        icon: Film,
        title: "Media & Streaming Applications",
        description:
          "We build high-performance streaming platforms for video and audio content using adaptive bitrate streaming and a global CDN integration to ensure buffer-free, low-latency media delivery for massive concurrent audiences worldwide.",
      },
      {
        icon: CalendarClock,
        title: "On-Demand & Booking Platforms",
        description:
          "We scale your service marketplace with custom booking platforms. These platforms schedule, reserve, and deliver on-demand services with real-time availability, integrated payments, and automated user notifications.",
      },
      {
        icon: Braces,
        title: "API-First & Headless Applications",
        description:
          "We develop API-First & headless applications using flexible REST and GraphQL APIs. We separate the back-end logic, giving you complete freedom to connect digital channels and integrate external software seamlessly.",
      },
      {
        icon: RefreshCw,
        title: "Legacy Web App Modernization",
        description:
          "Through our legacy web application modernization services, we re-platform and re-architect aging applications into secure, cloud-native systems, without disrupting the business that depends on them.",
      },
    ],
  },
  {
    number: "02",
    title: "E-Commerce",
    cards: [
      {
        icon: Store,
        title: "E-Commerce Development",
        description:
          "We build e-commerce web apps like storefronts and multi-vendor marketplaces on the right platform, including Shopify, Magento, and WooCommerce.",
      },
      {
        icon: ShoppingBag,
        title: "Shopify E-Commerce Development",
        description:
          "We engineer conversion-focused Shopify and Shopify Plus stores with custom themes, apps, integrations, and checkout experiences.",
      },
      {
        icon: ShoppingCart,
        title: "WooCommerce Development",
        description:
          "We develop flexible WooCommerce stores on WordPress with custom plugins, payment gateways, and full control over your catalog, content, and workflows.",
      },
      {
        icon: Package,
        title: "Custom E-Commerce Development",
        description:
          "We engineer industry-led commerce platforms and marketplaces for catalogs, business rules, and scale that packaged tools can't handle.",
      },
    ],
  },
  {
    number: "03",
    title: "Website & CMS",
    cards: [
      {
        icon: LayoutTemplate,
        title: "Website & CMS Development",
        description:
          "We build custom websites and content platforms on the right system for your team, including WordPress, Joomla, Drupal, and headless CMS.",
      },
      {
        icon: Rocket,
        title: "Landing Pages & Microsites",
        description:
          "We design and develop high-converting landing pages and campaign microsites that deliver speed, clarity, and measurable marketing results.",
      },
      {
        icon: Newspaper,
        title: "WordPress Development",
        description:
          "From marketing sites to complex content hubs, we develop custom WordPress sites and themes that are fast, secure, and easy for your team to manage.",
      },
      {
        icon: Blocks,
        title: "Drupal Development",
        description:
          "For complex content models and multi-site setups, we build enterprise-grade Drupal sites and custom modules. These web applications provide the security and scale large organizations demand.",
      },
    ],
  },
];

const WebApplicationTypes = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-32">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Heading */}
        <div className="mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
              What We Build
            </span>
          </div>

          <h2 className="font-inter text-[2rem] xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-8">
            Custom Web Applications We{" "}
            <span className="text-gray-300">Develop</span>.
          </h2>

          <div className="flex gap-4 max-w-2xl">
            <div className="w-[3px] bg-primary flex-shrink-0" />
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">
              We deliver industry-leading web application development services
              to meet our clients&apos; needs. Explore the different types of
              web applications we deliver.
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-16 lg:space-y-24">
          {categories.map((category) => (
            <div key={category.number}>
              {/* Category Heading */}
              <div className="flex items-center gap-4 sm:gap-5 mb-8">
                <span className="font-inter text-4xl sm:text-5xl font-bold text-gray-200 leading-none tabular-nums flex-shrink-0">
                  {category.number}
                </span>

                <h3 className="font-inter text-xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                  {category.title}
                </h3>

                <span className="hidden sm:block flex-1 h-px bg-gray-200" />
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
                {category.cards.map((card) => {
                  const Icon = card.icon;

                  return (
                    <div
                      key={card.title}
                      className="group relative flex flex-col bg-white border border-gray-200 hover:border-primary/40 transition-colors duration-300 p-6 lg:p-7 overflow-hidden h-full"
                    >
                      <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-5 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>

                      <h4 className="text-gray-900 text-base lg:text-lg font-semibold mb-2.5 leading-snug group-hover:text-primary transition-colors duration-300">
                        {card.title}
                      </h4>

                      <p className="text-gray-600 text-sm leading-relaxed">
                        {card.description}
                      </p>

                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebApplicationTypes;
