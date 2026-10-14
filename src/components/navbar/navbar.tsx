import { useEffect, useRef, useState } from "react";
import {
  BadgeCheck, BarChart2, BookOpen, Briefcase, Building2, Car, ChevronDown,
  ChevronRight, ClipboardList, Code2, Coffee, Crown, Database, Factory,
  FileCode2, FileText, Globe, GraduationCap, Heart, HeartHandshake, Landmark,
  Layers, Lightbulb, Link2, Menu, Network, Newspaper, PenTool, Plane, Rocket,
  Settings, Shield, Smartphone, Sparkles, Sprout, Star, Target, Trophy,
  BrainCircuit, Cpu, ChartNoAxesColumn, Eye, Bot, Server, ShieldCheck, GitMerge,
  UserPlus, Users, UtensilsCrossed, Wifi, Workflow, X, Zap, 
  type LucideIcon,
} from "lucide-react";
import Logo from "./logo";

/* ----------------------------- Types ----------------------------- */

interface NavChild {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
}

interface MegaColumn {
  heading: string;
  links: NavChild[];
}

interface MegaCategory {
  label: string;
  title: string;
  description: string;
  columns: MegaColumn[];
}

interface FeaturedItem {
  tag: string;
  title: string;
  excerpt: string;
  href: string;
  /** Path to the thumbnail, e.g. "/insights/ai-projects-stall.webp" */
  image?: string;
}

interface PanelConfig {
  /** "intro": left intro text + items. "grid": heading on top + grid of items. */
  layout: "intro" | "grid";
  title: string;
  description: string;
  cta?: { label: string; href: string };
  columns: 1 | 2 | 4;
  /** Vertical spacing between items (intro layout) */
  itemGap?: string;
  items: NavChild[];
  featured?: FeaturedItem[];
}

interface NavItem {
  label: string;
  mega?: MegaCategory[];
  panel?: PanelConfig;
}

/* ------------------------------ Data ----------------------------- */

const NAV_ITEMS: NavItem[] = [
  {
    label: "What we do",
    mega: [
      {
        label: "Digital Transformation",
        title: "Digital Transformation",
        description:
          "End-to-end digital solutions to modernize and scale your business operations.",
        columns: [
          {
            heading: "Engineering",
            links: [
              { label: "Web Application Development", href: "/services/web-application-development", icon: Code2 },
              { label: "Mobile App Development", href: "/services/mobile-app-development", icon: Smartphone },
              { label: "SaaS & Platform Engineering", href: "/services/platform-engineering-services", icon: Layers },
              { label: "Microservices & API Development", href: "/services/microservices-api-development", icon: Network },
              { label: "Custom Application Development", href: "/services/custom-application-development", icon: FileCode2 },
            ],
          },
          {
            heading: "Enterprise Solutions",
            links: [
              { label: "CRM Solutions", href: "/services/crm-solutions", icon: Users },
              { label: "ERP Solutions", href: "/services/erp-solutions", icon: Database },
              { label: "API & Middleware Integration", href: "/services/api-middleware-integration", icon: Link2 },
              { label: "Enterprise Software Development", href: "/services/enterprise-software-development", icon: Building2 },
              { label: "Support & Maintenance", href: "/services/support-maintenance", icon: Settings },
            ],
          },
          {
            heading: "Specialized Services",
            links: [
              { label: "Consulting", href: "/services/consulting", description: "Strategic technology advisory", icon: Briefcase },
              { label: "Cybersecurity", href: "/services/cybersecurity", description: "Enterprise security solutions", icon: Shield },
              { label: "Quality Engineering & Testing", href: "/services/quality-engineering-testing", description: "Comprehensive QA services", icon: Target },
              { label: "Legacy Application Modernization", href: "/services/legacy-application-modernization", icon: Rocket },
            ],
          },
        ],
      },
      {
        label: "Artificial Intelligence (AI)",
        title: "Artificial Intelligence (AI)",
        description:
          "Harness the power of AI to automate, innovate, and transform your business.",
        columns: [
          {
            heading: "AI Development",
            links: [
              {
                label: "AI Consulting & Implementation",
                href: "/services/ai-consulting-services",
                icon: BrainCircuit,
              },
              {
                label: "Core AI Development/Services",
                href: "/services/core-ai-development",
                icon: Cpu,
              },
              {
                label: "Machine Learning",
                href: "/services/machine-learning",
                icon: ChartNoAxesColumn,
              },
              {
                label: "Computer Vision",
                href: "/services/computer-vision",
                icon: Eye,
              },
              {
                label: "Generative AI",
                href: "/services/generative-ai",
                icon: Sparkles,
              },
              {
                label: "RAG Systems",
                href: "/services/rag-systems",
                icon: Database,
              },
            ],
          },
          {
            heading: "AI Solutions",
            links: [
              {
                label: "AI Chatbot",
                href: "/services/ai-chatbot",
                icon: Bot,
              },
              {
                label: "Agentic AI Services",
                href: "/services/agentic-ai",
                icon: Zap,
              },
              {
                label: "AI Agent Applications",
                href: "/services/ai-agent-applications",
                icon: Workflow,
              },
              {
                label: "AI Infrastructure & Platforms",
                href: "/services/ai-infrastructure-platforms",
                icon: Server,
              },
              {
                label: "AI Ethics & Governance",
                href: "/services/ai-ethics-governance",
                icon: ShieldCheck,
              },
            ],
          },
        ],
      },
{
  label: "Cloud & DevOps",
  title: "Cloud & DevOps",
  description:
    "Accelerate delivery and scale infrastructure with modern cloud and DevOps practices.",
  columns: [
    {
      heading: "Cloud Services",
      links: [
        {
          label: "DevOps Consulting & Strategy",
          href: "/services/devops-consulting-services",
          icon: Settings,
        },
        {
          label: "Cloud Migration & Modernization",
          href: "/services/cloud-migration-modernization",
          icon: Globe,
        },
        {
          label: "Cloud Infrastructure Management",
          href: "/services/cloud-infrastructure-management",
          icon: Database,
        },
        {
          label: "Infrastructure as Code (IaC)",
          href: "/services/infrastructure-as-code",
          icon: FileCode2,
        },
        {
          label: "DevOps Automation & CI/CD",
          href: "/services/devops-automation-services",
          icon: GitMerge,
        },
        {
          label: "Kubernetes & Containerization",
          href: "/services/containerization-and-kubernetes",
          icon: Layers,
        },
        {
          label: "Platform Engineering",
          href: "/services/platform-engineering",
          icon: Network,
        },
      ],
    },
    {
      heading: "Operations & Security",
      links: [
        {
          label: "Networking & Service Mesh",
          href: "/services/networking-service-mesh",
          icon: Wifi,
        },
        {
          label: "Database Operations (DBOps)",
          href: "/services/database-operations",
          icon: Database,
        },
        {
          label: "DevSecOps & Cloud Security",
          href: "/services/devsecops-services",
          icon: Shield,
        },
        {
          label: "Monitoring & Observability",
          href: "/services/monitoring-and-observability",
          icon: BarChart2,
        },
        {
          label: "Cloud Cost Optimization (FinOps)",
          href: "/services/cloud-cost-optimization",
          icon: Target,
        },
        {
          label: "Managed Cloud & DevOps Services",
          href: "/services/cloud-managed-services",
          icon: Settings,
        },
        {
          label: "AI + Cloud & MLOps",
          href: "/services/mlops-services",
          icon: BrainCircuit,
        },
      ],
    },
  ],
},
      {
        label: "Next-Gen Systems",
        title: "Next-Gen Systems",
        description: "Connected, intelligent systems for the next generation of products.",
        columns: [
          {
            heading: "Next-Gen Systems",
            links: [{ label: "Internet of Things (IoT)", href: "/services/internet-of-things" }],
          },
        ],
      },
      {
        label: "Digital Marketing",
        title: "Digital Marketing",
        description: "AI-powered marketing that grows visibility and drives results.",
        columns: [
          {
            heading: "Digital Marketing",
            links: [{ label: "AI-Driven SEO", href: "/services/ai-driven-seo" }],
          },
        ],
      },
      {
        label: "Products",
        title: "Products",
        description: "Our engineering expertise, packaged as platforms.",
        columns: [
          {
            heading: "Products",
            links: [
              { label: "ReleaseSphere", href: "/products/releasesphere", description: "Production-ready deployment validation" },
              { label: "View All Products", href: "/products" },
            ],
          },
        ],
      },
    ],
  },

  {
    label: "Who we serve",
    panel: {
      layout: "grid",
      title: "Who we serve",
      description: "Tailored solutions for diverse industry needs",
      columns: 4,
      items: [
        { label: "Healthcare & Life Sciences", href: "/industries/healthcare", description: "Digital health, pharma & biotech solutions", icon: Heart },
        { label: "Banking, Financial Services & Insurance", href: "/industries/banking", description: "Digital banking, fintech & insurtech", icon: Landmark },
        { label: "Manufacturing & Industrial Automation", href: "/industries/manufacturing", description: "Industry 4.0 & smart factory solutions", icon: Factory },
        { label: "Retail & E-commerce", href: "/industries/retail-and-ecommerce", description: "Omnichannel retail & marketplace platforms", icon: Globe },
        { label: "Energy & Utilities", href: "/industries/energy", description: "Smart grid & energy management systems", icon: Zap },
        { label: "Telecommunications & Media", href: "/industries/telecommunications", description: "Telecom networks & media platforms", icon: Wifi },
        { label: "Logistics & Supply Chain", href: "/industries/logistics", description: "Supply chain optimization & tracking", icon: Workflow },
        { label: "Travel & Hospitality", href: "/industries/travel", description: "Travel tech & booking platforms", icon: Plane },
        { label: "Education & EdTech", href: "/industries/education", description: "Learning platforms & education systems", icon: GraduationCap },
        { label: "Government & Public Sector", href: "/industries/government-public-sector", description: "Digital governance & citizen services", icon: Building2 },
        { label: "Automotive & Mobility", href: "/industries/automotive-and-mobility", description: "Connected vehicles & mobility solutions", icon: Car },
        { label: "Real Estate & Construction", href: "/industries/real-estate-and-construction", description: "PropTech & construction management", icon: Building2 },
        // Last row was cut off in the screenshot: add descriptions if the site has them
        { label: "Agriculture & AgriTech", href: "/industries/agriculture", icon: Sprout },
        { label: "Food, QSR & Restaurant", href: "/industries/restaurant", icon: UtensilsCrossed },
        { label: "Sports & Entertainment", href: "/industries/entertainment", icon: Trophy },
        { label: "Non-Profit & Social Impact", href: "/industries/non-profit", icon: HeartHandshake },
      ],
    },
  },

  {
    label: "Who we are",
    panel: {
      layout: "intro",
      title: "About Plaxonic",
      description:
        "We're an AI-first engineering and product company. We help enterprises build production-ready AI, cloud-native platforms, and automation that delivers measurable results.",
      cta: { label: "Learn more about us", href: "/about" },
      columns: 2,
      itemGap: "space-y-6",
      items: [
        { label: "About Plaxonic", href: "/about", description: "Who we are and what we do", icon: Building2 },
        { label: "Culture, Inclusivity, and Diversity", href: "/culture", description: "Building a workplace where everyone belongs", icon: Heart },
        { label: "Our Story", href: "/our-story", description: "Discover our journey and the vision that drives us forward", icon: BookOpen },
        { label: "Leadership", href: "/leadership", description: "Meet our leadership team", icon: Crown },
        { label: "Social Impact & Community", href: "/social-impact", description: "Making a difference together", icon: Users },
        { label: "The Plaxonic Advantage", href: "/plaxonic-advantage", description: "What sets us apart in delivering exceptional value", icon: Star },
      ],
    },
  },

  {
    label: "Insights",
    panel: {
      layout: "intro",
      title: "Insights",
      description:
        "Stay informed with the latest trends, expert perspectives, and in-depth analysis from our technology leaders.",
      cta: { label: "View all insights", href: "/insights" },
      columns: 1,
      itemGap: "space-y-5",
      items: [
        { label: "Perspectives", href: "/insights/perspectives", description: "Expert opinions and thought leadership", icon: Lightbulb },
        { label: "Blog", href: "/insights/blog", description: "Latest articles and tech insights", icon: PenTool },
        { label: "Case Studies", href: "/insights/case-studies", description: "Real-world success stories", icon: FileText },
        { label: "Research & Reports", href: "/insights/research", description: "In-depth analysis and whitepapers", icon: BarChart2 },
        { label: "Newsroom", href: "/insights/newsroom", description: "Press releases and company news", icon: Newspaper },
      ],
      featured: [
        {
          tag: "Research",
          title: "Why 80% of Enterprise AI Projects Stall",
          excerpt: "The failure rate is real and well documented, and so...",
          href: "/insights/research",
          image: "https://res.cloudinary.com/dfsu0xeb/image/upload/v1785845743/plaxonic/insights/o8fgstcmnylj74rkfobp.png",
        },
        {
          tag: "Perspective",
          title: "Cloud-Native Isn't Optional Anymore",
          excerpt: "Most enterprises that moved to the cloud just...",
          href: "/insights/perspectives",
          image: "https://res.cloudinary.com/dfsu0xeb/image/upload/v1785758310/plaxonic/insights/k44flnnkrdhjhskfyjc0.png",
        },
      ],
    },
  },

  {
    label: "Careers",
    panel: {
      layout: "intro",
      title: "Careers",
      description:
        "Build what's next with globally distributed teams, and grow your career doing it.",
      cta: { label: "Explore opportunities", href: "/careers" },
      columns: 2,
      itemGap: "space-y-8",
      items: [
        { label: "Why work with Plaxonic", href: "/why-work-with-plaxonic", description: "Discover what makes us different", icon: Sparkles },
        { label: "Life at Plaxonic", href: "/life-at-plaxonic", description: "Experience our vibrant work culture", icon: Coffee },
        { label: "Plaxonic Promise", href: "/plaxonic-promise", description: "Our commitment to your growth", icon: BadgeCheck },
        { label: "Learning and Development", href: "/learning-and-development", description: "Continuous growth opportunities", icon: GraduationCap },
        { label: "Hiring Process", href: "/hiring-process", description: "Your journey to joining us", icon: ClipboardList },
        { label: "Internships & Early Careers", href: "/internships-early-careers", description: "Start your career with us", icon: UserPlus },
        { label: "Open Positions", href: "/open-positions", description: "Explore current opportunities", icon: Briefcase },
      ],
    },
  },
];

/* --------------------------- Shared bits -------------------------- */

type Variant = "mega" | "card" | "panel";

const VARIANTS: Record<Variant, { box: string; icon: string; gap: string; align: string }> = {
  mega: { box: "w-7 h-7", icon: "w-4 h-4", gap: "gap-3", align: "items-center" },
  card: { box: "w-9 h-9", icon: "w-[18px] h-[18px]", gap: "gap-3", align: "items-start" },
  panel: { box: "w-11 h-11", icon: "w-5 h-5", gap: "gap-4", align: "items-start" },
};

const ItemLink = ({
  link,
  onClick,
  variant,
}: {
  link: NavChild;
  onClick: () => void;
  variant: Variant;
}) => {
  const v = VARIANTS[variant];
  const Icon = link.icon;
  return (
    <a
      href={link.href}
      onClick={onClick}
      className={`flex ${v.align} ${v.gap} text-gray-800 hover:text-primary transition-colors`}
    >
      {Icon && (
        <span className={`${v.box} shrink-0 flex items-center justify-center bg-primary/10 text-primary`}>
          <Icon className={v.icon} aria-hidden="true" />
        </span>
      )}
      <span className="block text-base">
        {link.label}
        {link.description && (
          <span className="block text-sm text-gray-500">{link.description}</span>
        )}
      </span>
    </a>
  );
};

/* ----------------------------- Navbar ---------------------------- */

interface NavbarProps {
  onAskArchI?: () => void;
}

const Navbar = ({ onAskArchI }: NavbarProps) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>(
    NAV_ITEMS[0].mega?.[0].label ?? ""
  );
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);

  // Close any open dropdown when clicking outside the header
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const toggleMenu = (label: string) =>
    setOpenMenu((current) => (current === label ? null : label));

  const closeAll = () => {
    setOpenMenu(null);
    setMobileOpen(false);
  };

  const openItem = NAV_ITEMS.find((i) => i.label === openMenu);
  const megaItem = openItem?.mega ? openItem : undefined;
  const activeMega = megaItem?.mega?.find((c) => c.label === activeCategory);
  const panel = openItem?.panel;

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300"
    >
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="flex items-center justify-between h-16 xl:h-20">
          <div className="flex items-center">
            <a href="/" className="cursor-pointer" aria-label="Plaxonic home">
              <Logo className="xl:w-[120px] xl:h-[45px]" />
            </a>

            <nav
              ref={navRef}
              className="hidden lg:flex items-center space-x-0 xl:space-x-0.5 2xl:space-x-1 ml-6 xl:ml-10 2xl:ml-40"
            >
              {NAV_ITEMS.map((item) => {
                const isOpen = openMenu === item.label;
                return (
                  <div key={item.label} className="relative">
                    <button
                      type="button"
                      onClick={() => toggleMenu(item.label)}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      className={`flex items-center space-x-1 px-2 xl:px-2.5 2xl:px-4 py-2 hover:text-primary transition-colors rounded-lg whitespace-nowrap ${
                        isOpen ? "text-primary" : "text-gray-700"
                      }`}
                    >
                      <span className="font-normal text-sm xl:text-[15px] 2xl:text-lg whitespace-nowrap">
                        {item.label}
                      </span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 xl:w-4 xl:h-4 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                );
              })}
            </nav>
          </div>

          <div className="hidden lg:flex items-center space-x-2 2xl:space-x-3">
            <a
              href="/contact"
              className="h-9 xl:h-10 px-3 xl:px-4 2xl:px-5 text-primary font-normal text-sm xl:text-[15px] 2xl:text-lg border border-primary hover:bg-primary/5 transition-colors flex items-center justify-center whitespace-nowrap"
            >
              Contact
            </a>

            <button
              type="button"
              onClick={onAskArchI}
              className="h-9 xl:h-10 px-3 xl:px-4 2xl:px-5 bg-primary text-white font-normal text-sm xl:text-[15px] 2xl:text-lg hover:bg-primary-dark transition-colors flex items-center justify-center space-x-1.5 xl:space-x-2 whitespace-nowrap"
            >
              <Sparkles
                className="w-3.5 h-3.5 xl:w-4 xl:h-4 flex-shrink-0"
                aria-hidden="true"
              />
              <span>
                Ask Arch
                <span style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}>
                  I
                </span>
              </span>
            </button>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* ------------- Desktop: What we do (mega menu) ------------- */}
      {megaItem && activeMega && (
        <div className="hidden lg:block fixed left-0 right-0 top-16 xl:top-20 bottom-0 bg-white border-t border-gray-200">
          <div className="flex h-full">
            {/* Left: categories */}

            <div className="w-[22%] max-w-[410px] min-w-[300px] shrink-0 border-r border-primary/60 px-5 xl:px-6 pt-8 pb-4 overflow-y-auto">
              <p className="px-4 pb-5 text-sm xl:text-base font-semibold tracking-wider text-gray-400 uppercase">
                {megaItem.label}
              </p>

              <ul className="space-y-1">
                {megaItem.mega!.map((cat) => {
                  const active = cat.label === activeCategory;

                  return (
                    <li key={cat.label}>
                      <button
                        type="button"
                        onMouseEnter={() => setActiveCategory(cat.label)}
                        onClick={() => setActiveCategory(cat.label)}
                        className={`w-full flex items-center justify-between px-4 py-4 text-left text-base xl:text-lg transition-colors ${
                          active
                            ? "bg-slate-50 text-primary"
                            : "text-gray-700 hover:text-primary"
                        }`}
                      >
                        <span>{cat.label}</span>

                        <ChevronRight
                          className={`w-4 h-4 shrink-0 ${
                            active ? "text-primary" : "text-gray-400"
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>


            {/* Right: content */}
            <div className="flex-1 min-w-0 bg-slate-50 px-6 xl:px-10 2xl:px-12 py-8 overflow-y-auto">
              <h3 className="text-xl xl:text-2xl font-semibold text-gray-900">
                {activeMega.title}
              </h3>

              <p className="mt-1 text-base xl:text-lg text-gray-500">
                {activeMega.description}
              </p>

              <div
                className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 xl:gap-x-12"
              >
                {activeMega.columns.map((col) => {
                  const isCard = col.links.some((l) => l.description);

                  return (
                    <div key={col.heading} className="min-w-0">
                      <p className="text-sm xl:text-base font-semibold tracking-wider text-gray-400 uppercase">
                        {col.heading}
                      </p>

                      <ul
                        className={
                          isCard
                            ? "mt-4 bg-white p-6 space-y-6"
                            : "mt-4 xl:mt-6 px-2 space-y-3 xl:space-y-4"
                        }
                      >
                        {col.links.map((link) => (
                          <li key={link.href}>
                            <ItemLink
                              link={link}
                              onClick={closeAll}
                              variant={isCard ? "card" : "mega"}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ------- Desktop: Who we serve / Who we are / Insights / Careers ------- */}
      {panel && (
        <div className="hidden lg:block absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto">
          {panel.layout === "grid" ? (
            <div className="px-6 py-8">
              <h3 className="text-xl font-semibold text-gray-900">{panel.title}</h3>
              <p className="mt-1 text-base text-gray-500">{panel.description}</p>
              <ul className="mt-10 grid grid-cols-4 gap-x-8 gap-y-10 px-3">
                {panel.items.map((link) => (
                  <li key={link.href}>
                    <ItemLink link={link} onClick={closeAll} variant="panel" />
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="flex">
              {/* Intro */}
              <div className="w-1/3 shrink-0 bg-white px-6 py-10">
                <h3 className="text-2xl font-semibold text-gray-900">{panel.title}</h3>
                <p className="mt-2 text-base text-gray-600">{panel.description}</p>
                {panel.cta && (
                  <a
                    href={panel.cta.href}
                    onClick={closeAll}
                    className="mt-3 inline-flex items-center gap-1 text-base text-primary hover:text-primary-dark transition-colors"
                  >
                    {panel.cta.label}
                    <ChevronRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                )}
              </div>

              {/* Items */}
              <div
                className={`flex-1 py-10 ${
                  panel.featured
                    ? "bg-white px-8"
                    : "bg-slate-50 border-l border-primary px-12"
                }`}
              >
                {panel.columns === 2 ? (
                  <div className="grid grid-cols-2 gap-x-10">
                    {[0, 1].map((col) => (
                      <ul key={col} className={panel.itemGap ?? "space-y-6"}>
                        {panel.items
                          .filter((_, i) => i % 2 === col)
                          .map((link) => (
                            <li key={link.href}>
                              <ItemLink link={link} onClick={closeAll} variant="panel" />
                            </li>
                          ))}
                      </ul>
                    ))}
                  </div>
                ) : (
                  <ul className={panel.itemGap ?? "space-y-6"}>
                    {panel.items.map((link) => (
                      <li key={link.href}>
                        <ItemLink link={link} onClick={closeAll} variant="panel" />
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Featured (Insights) */}
              {panel.featured && (
                <div className="w-1/3 shrink-0 bg-slate-50 border-l border-primary px-8 py-10">
                  <h4 className="text-xl font-semibold text-gray-900">Featured</h4>
                  <ul className="mt-6 space-y-5">
                    {panel.featured.map((f) => (
                      <li key={f.title}>
                        <a
                          href={f.href}
                          onClick={closeAll}
                          className="group flex items-center gap-4"
                        >
                          {f.image ? (
                            <img src={f.image} alt="" className="w-32 h-20 object-cover shrink-0" />
                          ) : (
                            <span className="w-32 h-20 bg-gray-200 shrink-0" />
                          )}
                          <span className="flex-1 block">
                            <span className="block text-xs font-semibold tracking-wider text-primary uppercase">
                              {f.tag}
                            </span>
                            <span className="block text-base text-gray-900 group-hover:text-primary transition-colors">
                              {f.title}
                            </span>
                            <span className="block text-sm text-gray-500">{f.excerpt}</span>
                          </span>
                          <ChevronRight className="w-4 h-4 text-gray-400 shrink-0" aria-hidden="true" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ------------------------- Mobile menu ------------------------- */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 sm:px-6 py-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const expanded = mobileExpanded === item.label;
              return (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => setMobileExpanded(expanded ? null : item.label)}
                    aria-expanded={expanded}
                    className="w-full flex items-center justify-between text-left py-2 text-gray-700 hover:text-primary transition-colors"
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>

                  {expanded && item.panel && (
                    <ul className="pl-4 pb-2 space-y-1">
                      {item.panel.items.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            onClick={closeAll}
                            className="block py-1.5 text-sm text-gray-600 hover:text-primary"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}

                  {expanded && item.mega && (
                    <div className="pl-4 pb-2 space-y-3">
                      {item.mega.map((cat) => (
                        <div key={cat.label}>
                          <p className="text-xs font-semibold tracking-wider text-gray-500 uppercase pt-2">
                            {cat.label}
                          </p>
                          <ul>
                            {cat.columns
                              .flatMap((col) => col.links)
                              .map((link) => (
                                <li key={link.href}>
                                  <a
                                    href={link.href}
                                    onClick={closeAll}
                                    className="block py-1.5 text-sm text-gray-600 hover:text-primary"
                                  >
                                    {link.label}
                                  </a>
                                </li>
                              ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="mt-4 flex gap-2">
            <a
              href="/contact"
              className="h-10 px-5 text-primary border border-primary flex items-center justify-center"
            >
              Contact
            </a>
            <button
              type="button"
              onClick={onAskArchI}
              className="h-10 px-5 bg-primary text-white flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              <span>
                Ask Arch
                <span style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}>
                  I
                </span>
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;