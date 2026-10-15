import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  BadgeCheck,
  BarChart2,
  BookOpen,
  Boxes,
  Briefcase,
  Building2,
  Car,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  Code2,
  Coffee,
  Crown,
  Database,
  DollarSign,
  Factory,
  FileCode2,
  FileText,
  Glasses,
  Globe,
  GraduationCap,
  Heart,
  HeartHandshake,
  Landmark,
  Layers,
  Lightbulb,
  Link2,
  Mail,
  Menu,
  Network,
  Newspaper,
  Palette,
  PenTool,
  Plane,
  Rocket,
  Settings,
  Shield,
  Smartphone,
  Sparkles,
  Sprout,
  Star,
  Target,
  Trophy,
  BrainCircuit,
  Cpu,
  ChartNoAxesColumn,
  Eye,
  Bot,
  Server,
  ShieldCheck,
  UserPlus,
  Users,
  UtensilsCrossed,
  Wifi,
  Workflow,
  X,
  Zap,
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

interface MegaCategory {
  label: string;
  title: string;
  description: string;
  items: NavChild[];
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
        items: [
          {
            label: "Web Application Development",
            description: "Modern web apps with React, Next.js & more",
            href: "/services/web-application-development",
            icon: Code2,
          },
          {
            label: "Mobile App Development",
            description: "Native & cross-platform mobile solutions",
            href: "/services/mobile-app-development",
            icon: Smartphone,
          },
          {
            label: "SaaS & Platform Engineering",
            description: "Scalable multi-tenant SaaS platforms",
            href: "/services/platform-engineering-services",
            icon: Layers,
          },
          {
            label: "Microservices & API Development",
            description: "Distributed systems architecture",
            href: "/services/microservices-api-development",
            icon: Network,
          },
          {
            label: "Custom Application Development",
            description: "Tailored software for your needs",
            href: "/services/custom-application-development",
            icon: FileCode2,
          },
          {
            label: "CRM Solutions",
            description: "Customer relationship management",
            href: "/services/crm-solutions",
            icon: Users,
          },
          {
            label: "ERP Solutions",
            description: "Enterprise resource planning systems",
            href: "/services/erp-solutions",
            icon: Database,
          },
          {
            label: "API & Middleware Integration",
            description: "Seamless system connectivity",
            href: "/services/api-middleware-integration",
            icon: Link2,
          },
          {
            label: "Enterprise Software Development",
            description: "Large-scale business applications",
            href: "/services/enterprise-software-development",
            icon: Building2,
          },
          {
            label: "Support & Maintenance",
            description: "24/7 ongoing technical support",
            href: "/services/support-maintenance",
            icon: Settings,
          },
          {
            label: "Consulting",
            description: "Strategic technology advisory",
            href: "/services/consulting",
            icon: Briefcase,
          },
          {
            label: "Cybersecurity",
            description: "Enterprise security solutions",
            href: "/services/cybersecurity",
            icon: Shield,
          },
          {
            label: "Quality Engineering & Testing",
            description: "Comprehensive QA services",
            href: "/services/quality-engineering-testing",
            icon: Target,
          },
          {
            label: "Legacy Application Modernization",
            description: "Transform legacy systems",
            href: "/services/legacy-application-modernization",
            icon: Rocket,
          },
          {
            label: "UI/UX",
            description: "User-centered design solutions",
            href: "/services/ui-ux-design",
            icon: PenTool,
          },
          {
            label: "Brand Design",
            description: "Identity, logo & brand systems",
            href: "/services/brand-design",
            icon: Palette,
          },
        ],
      },
      {
        label: "Artificial Intelligence (AI)",
        title: "Artificial Intelligence (AI)",
        description:
          "Harness the power of AI to automate, innovate, and transform your business.",
        items: [
          {
            label: "AI Consulting & Implementation",
            description: "Strategic AI adoption roadmap",
            href: "/services/ai-consulting-services",
            icon: BrainCircuit,
          },
          {
            label: "Core AI Development/Services",
            description: "Custom AI model development",
            href: "/services/core-ai-development",
            icon: Cpu,
          },
          {
            label: "Machine Learning",
            description: "Predictive models & algorithms",
            href: "/services/machine-learning",
            icon: ChartNoAxesColumn,
          },
          {
            label: "Computer Vision",
            description: "Image & video analysis systems",
            href: "/services/computer-vision",
            icon: Eye,
          },
          {
            label: "Generative AI",
            description: "LLMs, content generation & more",
            href: "/services/generative-ai",
            icon: Sparkles,
          },
          {
            label: "RAG Systems",
            description: "Retrieval-Augmented Generation",
            href: "/services/rag-systems",
            icon: Database,
          },
          {
            label: "AI Chatbot",
            description: "Intelligent conversational agents",
            href: "/services/ai-chatbot",
            icon: Bot,
          },
          {
            label: "Agentic AI Services",
            description: "Autonomous AI agent systems",
            href: "/services/agentic-ai",
            icon: Zap,
          },
          {
            label: "AI Agent Applications",
            description: "Task-specific AI applications",
            href: "/services/ai-agent-applications",
            icon: Workflow,
          },
          {
            label: "AI Infrastructure & Platforms",
            description: "MLOps & AI deployment",
            href: "/services/ai-infrastructure-platforms",
            icon: Server,
          },
          {
            label: "AI Ethics & Governance",
            description: "Responsible AI frameworks",
            href: "/services/ai-ethics-governance",
            icon: ShieldCheck,
          },
        ],
      },
      {
        label: "Cloud & DevOps",
        title: "Cloud & DevOps",
        description:
          "Accelerate delivery and scale infrastructure with modern cloud and DevOps practices.",
        items: [
          {
            label: "DevOps Consulting & Strategy",
            description: "DevOps transformation roadmap",
            href: "/services/devops-consulting-services",
            icon: Briefcase,
          },
          {
            label: "Cloud Migration & Modernization",
            description: "Seamless cloud transitions",
            href: "/services/cloud-migration-modernization",
            icon: Rocket,
          },
          {
            label: "Cloud Infrastructure Management",
            description: "AWS, Azure & GCP expertise",
            href: "/services/cloud-infrastructure-management",
            icon: Server,
          },
          {
            label: "Infrastructure as Code (IaC)",
            description: "Terraform, Pulumi & CloudFormation",
            href: "/services/infrastructure-as-code",
            icon: FileCode2,
          },
          {
            label: "DevOps Automation & CI/CD",
            description: "Automated delivery pipelines",
            href: "/services/devops-automation-services",
            icon: Workflow,
          },
          {
            label: "Kubernetes & Containerization",
            description: "Container orchestration at scale",
            href: "/services/containerization-and-kubernetes",
            icon: Boxes,
          },
          {
            label: "Platform Engineering",
            description: "Internal developer platforms",
            href: "/services/platform-engineering",
            icon: Layers,
          },
          {
            label: "Networking & Service Mesh",
            description: "Network architecture & Istio",
            href: "/services/networking-service-mesh",
            icon: Network,
          },
          {
            label: "Database Operations (DBOps)",
            description: "Database management & optimization",
            href: "/services/database-operations",
            icon: Database,
          },
          {
            label: "DevSecOps & Cloud Security",
            description: "Security-first DevOps practices",
            href: "/services/devsecops-services",
            icon: ShieldCheck,
          },
          {
            label: "Monitoring & Observability",
            description: "Full-stack visibility & alerting",
            href: "/services/monitoring-and-observability",
            icon: Activity,
          },
          {
            label: "Cloud Cost Optimization (FinOps)",
            description: "Optimize cloud spending",
            href: "/services/cloud-cost-optimization",
            icon: DollarSign,
          },
          {
            label: "Managed Cloud & DevOps Services",
            description: "End-to-end managed services",
            href: "/services/cloud-managed-services",
            icon: Settings,
          },
          {
            label: "AI + Cloud & MLOps",
            description: "ML deployment & operations",
            href: "/services/mlops-services",
            icon: BrainCircuit,
          },
        ],
      },
      {
        label: "Next-Gen Systems",
        title: "Next-Gen Systems",
        description:
          "Future-proof your business with emerging technologies and innovative solutions.",
        items: [
          {
            label: "Internet of Things (IoT)",
            description: "Connected device ecosystems",
            href: "/services/internet-of-things",
            icon: Wifi,
          },
          {
            label: "Data Science & Analytics",
            description: "Advanced analytics & insights",
            href: "/services/data-science-analytics",
            icon: BarChart2,
          },
          {
            label: "Robotics & RPA",
            description: "Robotic process automation",
            href: "/services/robotic-process-automation-services",
            icon: Bot,
          },
          {
            label: "Digital Twins",
            description: "Virtual replicas for simulation",
            href: "/services/digital-twins",
            icon: Boxes,
          },
          {
            label: "AR/VR & Spatial Computing",
            description: "Immersive experiences",
            href: "/services/ar-vr-development-services",
            icon: Glasses,
          },
          {
            label: "Blockchain Solutions",
            description: "Decentralized applications",
            href: "/services/blockchain-solutions",
            icon: Link2,
          },
        ],
      },
      {
        label: "Digital Marketing",
        title: "Digital Marketing",
        description:
          "Drive growth and engagement with data-driven digital marketing strategies.",
        items: [
          {
            label: "Search Engine Optimization (SEO)",
            description: "Organic search visibility",
            href: "/services/search-engine-optimization",
            icon: Globe,
          },
          {
            label: "AI-Driven SEO",
            description: "AI-powered SEO strategies",
            href: "/services/ai-driven-seo",
            icon: Sparkles,
          },
          {
            label: "Content Marketing",
            description: "Strategic content creation",
            href: "/services/content-marketing",
            icon: FileText,
          },
          {
            label: "Paid Marketing",
            description: "PPC & paid advertising",
            href: "/services/paid-marketing",
            icon: Target,
          },
          {
            label: "Social Media Marketing",
            description: "Social platform growth",
            href: "/services/social-media-marketing",
            icon: Users,
          },
          {
            label: "Conversion Rate Optimization",
            description: "Maximize conversions",
            href: "/services/conversion-rate-optimization",
            icon: ChartNoAxesColumn,
          },
          {
            label: "Marketing Automation",
            description: "Automated marketing workflows",
            href: "/services/marketing-automation",
            icon: Zap,
          },
          {
            label: "Email Marketing",
            description: "Email campaigns & nurturing",
            href: "/services/email-marketing",
            icon: Mail,
          },
          {
            label: "Analytics & Growth Intelligence",
            description: "Data-driven insights",
            href: "/services/analytics-growth-intelligence",
            icon: BarChart2,
          },
          {
            label: "Branding & Digital Presence",
            description: "Brand strategy & identity",
            href: "/services/branding-digital-presence",
            icon: Palette,
          },
          {
            label: "Industry-Focused Marketing",
            description: "Sector-specific campaigns",
            href: "/services/industry-focused-marketing",
            icon: Building2,
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
        {
          label: "Healthcare & Life Sciences",
          href: "/industries/healthcare",
          description: "Digital health, pharma & biotech solutions",
          icon: Heart,
        },
        {
          label: "Banking, Financial Services & Insurance",
          href: "/industries/banking",
          description: "Digital banking, fintech & insurtech",
          icon: Landmark,
        },
        {
          label: "Manufacturing & Industrial Automation",
          href: "/industries/manufacturing",
          description: "Industry 4.0 & smart factory solutions",
          icon: Factory,
        },
        {
          label: "Retail & E-commerce",
          href: "/industries/retail-and-ecommerce",
          description: "Omnichannel retail & marketplace platforms",
          icon: Globe,
        },
        {
          label: "Energy & Utilities",
          href: "/industries/energy",
          description: "Smart grid & energy management systems",
          icon: Zap,
        },
        {
          label: "Telecommunications & Media",
          href: "/industries/telecommunications",
          description: "Telecom networks & media platforms",
          icon: Wifi,
        },
        {
          label: "Logistics & Supply Chain",
          href: "/industries/logistics",
          description: "Supply chain optimization & tracking",
          icon: Workflow,
        },
        {
          label: "Travel & Hospitality",
          href: "/industries/travel",
          description: "Travel tech & booking platforms",
          icon: Plane,
        },
        {
          label: "Education & EdTech",
          href: "/industries/education",
          description: "Learning platforms & education systems",
          icon: GraduationCap,
        },
        {
          label: "Government & Public Sector",
          href: "/industries/government-public-sector",
          description: "Digital governance & citizen services",
          icon: Building2,
        },
        {
          label: "Automotive & Mobility",
          href: "/industries/automotive-and-mobility",
          description: "Connected vehicles & mobility solutions",
          icon: Car,
        },
        {
          label: "Real Estate & Construction",
          href: "/industries/real-estate-and-construction",
          description: "PropTech & construction management",
          icon: Building2,
        },
        // Last row was cut off in the screenshot: add descriptions if the site has them
        {
          label: "Agriculture & AgriTech",
          href: "/industries/agriculture",
          icon: Sprout,
        },
        {
          label: "Food, QSR & Restaurant",
          href: "/industries/restaurant",
          icon: UtensilsCrossed,
        },
        {
          label: "Sports & Entertainment",
          href: "/industries/entertainment",
          icon: Trophy,
        },
        {
          label: "Non-Profit & Social Impact",
          href: "/industries/non-profit",
          icon: HeartHandshake,
        },
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
        {
          label: "About Plaxonic",
          href: "/about",
          description: "Who we are and what we do",
          icon: Building2,
        },
        {
          label: "Culture, Inclusivity, and Diversity",
          href: "/culture",
          description: "Building a workplace where everyone belongs",
          icon: Heart,
        },
        {
          label: "Our Story",
          href: "/our-story",
          description:
            "Discover our journey and the vision that drives us forward",
          icon: BookOpen,
        },
        {
          label: "Leadership",
          href: "/leadership",
          description: "Meet our leadership team",
          icon: Crown,
        },
        {
          label: "Social Impact & Community",
          href: "/social-impact",
          description: "Making a difference together",
          icon: Users,
        },
        {
          label: "The Plaxonic Advantage",
          href: "/plaxonic-advantage",
          description: "What sets us apart in delivering exceptional value",
          icon: Star,
        },
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
        {
          label: "Perspectives",
          href: "/insights/perspectives",
          description: "Expert opinions and thought leadership",
          icon: Lightbulb,
        },
        {
          label: "Blog",
          href: "/insights/blog",
          description: "Latest articles and tech insights",
          icon: PenTool,
        },
        {
          label: "Case Studies",
          href: "/insights/case-studies",
          description: "Real-world success stories",
          icon: FileText,
        },
        {
          label: "Research & Reports",
          href: "/insights/research",
          description: "In-depth analysis and whitepapers",
          icon: BarChart2,
        },
        {
          label: "Newsroom",
          href: "/insights/newsroom",
          description: "Press releases and company news",
          icon: Newspaper,
        },
      ],
      featured: [
        {
          tag: "Research",
          title: "Why 80% of Enterprise AI Projects Stall",
          excerpt: "The failure rate is real and well documented, and so...",
          href: "/insights/research",
          image:
            "https://res.cloudinary.com/dfsu0xeb/image/upload/v1785845743/plaxonic/insights/o8fgstcmnylj74rkfobp.png",
        },
        {
          tag: "Perspective",
          title: "Cloud-Native Isn't Optional Anymore",
          excerpt: "Most enterprises that moved to the cloud just...",
          href: "/insights/perspectives",
          image:
            "https://res.cloudinary.com/dfsu0xeb/image/upload/v1785758310/plaxonic/insights/k44flnnkrdhjhskfyjc0.png",
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
        {
          label: "Why work with Plaxonic",
          href: "/why-work-with-plaxonic",
          description: "Discover what makes us different",
          icon: Sparkles,
        },
        {
          label: "Life at Plaxonic",
          href: "/life-at-plaxonic",
          description: "Experience our vibrant work culture",
          icon: Coffee,
        },
        {
          label: "Plaxonic Promise",
          href: "/plaxonic-promise",
          description: "Our commitment to your growth",
          icon: BadgeCheck,
        },
        {
          label: "Learning and Development",
          href: "/learning-and-development",
          description: "Continuous growth opportunities",
          icon: GraduationCap,
        },
        {
          label: "Hiring Process",
          href: "/hiring-process",
          description: "Your journey to joining us",
          icon: ClipboardList,
        },
        {
          label: "Internships & Early Careers",
          href: "/internships-early-careers",
          description: "Start your career with us",
          icon: UserPlus,
        },
        {
          label: "Open Positions",
          href: "/open-positions",
          description: "Explore current opportunities",
          icon: Briefcase,
        },
      ],
    },
  },
];

/* --------------------------- Shared bits -------------------------- */

type Variant = "mega" | "card" | "panel";

const VARIANTS: Record<
  Variant,
  { box: string; icon: string; gap: string; align: string }
> = {
  mega: {
    box: "w-7 h-7",
    icon: "w-4 h-4",
    gap: "gap-3",
    align: "items-center",
  },
  card: {
    box: "w-9 h-9",
    icon: "w-[18px] h-[18px]",
    gap: "gap-3",
    align: "items-start",
  },
  panel: {
    box: "w-11 h-11",
    icon: "w-5 h-5",
    gap: "gap-4",
    align: "items-start",
  },
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
        <span
          className={`${v.box} shrink-0 flex items-center justify-center bg-primary/10 text-primary`}
        >
          <Icon className={v.icon} aria-hidden="true" />
        </span>
      )}
      <span className="block text-base">
        {link.label}
        {link.description && (
          <span className="block text-sm text-gray-500">
            {link.description}
          </span>
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
    NAV_ITEMS[0].mega?.[0].label ?? "",
  );
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [mobileCategory, setMobileCategory] = useState<string | null>(null);
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
    setMobileExpanded(null);
    setMobileCategory(null);
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
            <a
              href="/"
              className="cursor-pointer inline-block transition-all duration-300 ease-in-out hover:scale-105"
              aria-label="Plaxonic home"
            >
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
                <span
                  style={{
                    fontFamily:
                      'Georgia, Cambria, "Times New Roman", Times, serif',
                  }}
                >
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
            {mobileOpen ? (
              <X aria-hidden="true" />
            ) : (
              <Menu aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* ------------- Desktop: What we do (mega menu) ------------- */}
      {megaItem && activeMega && (
        <div className="hidden lg:block fixed left-0 right-0 top-16 xl:top-20 bottom-0 bg-white border-t border-gray-200">
          <div className="flex h-full">
            {/* Left: categories */}
            <div className="w-60 xl:w-72 2xl:w-80 shrink-0 border-r border-gray-200 px-2 xl:px-4 pt-6 pb-4 overflow-y-auto">
              <p className="px-4 pb-4 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                {megaItem.label}
              </p>
              <ul>
                {megaItem.mega!.map((cat) => {
                  const active = cat.label === activeCategory;
                  return (
                    <li key={cat.label}>
                      <button
                        type="button"
                        onMouseEnter={() => setActiveCategory(cat.label)}
                        onClick={() => setActiveCategory(cat.label)}
                        className={`w-full flex items-center justify-between px-4 py-3.5 text-left text-base transition-colors ${
                          active
                            ? "bg-slate-50 text-primary"
                            : "text-gray-700 hover:text-primary"
                        }`}
                      >
                        <span>{cat.label}</span>
                        <ChevronRight
                          className={`w-4 h-4 ${active ? "text-primary" : "text-gray-400"}`}
                          aria-hidden="true"
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Right: content */}
            <div className="flex-1 bg-slate-50 px-4 xl:px-8 py-6 xl:py-8 overflow-y-auto">
              <h3 className="text-lg xl:text-xl font-semibold text-gray-900">
                {activeMega.title}
              </h3>
              <p className="mt-1 text-sm xl:text-base text-gray-500">
                {activeMega.description}
              </p>

              <ul className="mt-6 xl:mt-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-6 xl:gap-x-8 gap-y-6 bg-white p-4 xl:p-6">
                {activeMega.items.map((item) => (
                  <li key={item.href}>
                    <ItemLink link={item} onClick={closeAll} variant="card" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ------- Desktop: Who we serve / Who we are / Insights / Careers ------- */}
      {panel && (
        <div className="hidden lg:block absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto">
          {panel.layout === "grid" ? (
            <div className="px-4 xl:px-6 py-6 xl:py-8">
              <h3 className="text-lg xl:text-xl font-semibold text-gray-900">
                {panel.title}
              </h3>
              <p className="mt-1 text-sm xl:text-base text-gray-500">
                {panel.description}
              </p>
              <ul className="mt-6 xl:mt-10 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 xl:gap-x-8 gap-y-6 xl:gap-y-10 px-1 xl:px-3">
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
                <h3 className="text-2xl font-semibold text-gray-900">
                  {panel.title}
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  {panel.description}
                </p>
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
                              <ItemLink
                                link={link}
                                onClick={closeAll}
                                variant="panel"
                              />
                            </li>
                          ))}
                      </ul>
                    ))}
                  </div>
                ) : (
                  <ul className={panel.itemGap ?? "space-y-6"}>
                    {panel.items.map((link) => (
                      <li key={link.href}>
                        <ItemLink
                          link={link}
                          onClick={closeAll}
                          variant="panel"
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Featured (Insights) */}
              {panel.featured && (
                <div className="w-1/3 shrink-0 bg-slate-50 border-l border-primary px-8 py-10">
                  <h4 className="text-xl font-semibold text-gray-900">
                    Featured
                  </h4>
                  <ul className="mt-6 space-y-5">
                    {panel.featured.map((f) => (
                      <li key={f.title}>
                        <a
                          href={f.href}
                          onClick={closeAll}
                          className="group flex items-center gap-4"
                        >
                          {f.image ? (
                            <img
                              src={f.image}
                              alt=""
                              className="w-32 h-20 object-cover shrink-0"
                            />
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
                            <span className="block text-sm text-gray-500">
                              {f.excerpt}
                            </span>
                          </span>
                          <ChevronRight
                            className="w-4 h-4 text-gray-400 shrink-0"
                            aria-hidden="true"
                          />
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
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto"
          >
            <nav className="max-w-[1800px] mx-auto px-4 py-6 flex flex-col space-y-2">
              {NAV_ITEMS.map((item) => {
                const expanded = mobileExpanded === item.label;
                return (
                  <div key={item.label}>
                    <button
                      type="button"
                      onClick={() => {
                        setMobileExpanded(expanded ? null : item.label);
                        setMobileCategory(null);
                      }}
                      aria-expanded={expanded}
                      className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <span className="font-normal">{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>

                    <AnimatePresence>
                      {expanded && item.panel && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 mt-2 space-y-1 overflow-hidden"
                        >
                          {item.panel.items.map((link) => {
                            const Icon = link.icon;
                            return (
                              <a
                                key={link.href}
                                href={link.href}
                                onClick={closeAll}
                                className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                              >
                                {Icon && (
                                  <Icon
                                    className="w-5 h-5 text-primary shrink-0"
                                    aria-hidden="true"
                                  />
                                )}
                                <span>{link.label}</span>
                              </a>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <AnimatePresence>
                      {expanded && item.mega && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-2 space-y-1 overflow-hidden"
                        >
                          {item.mega.map((cat) => {
                            const catExpanded = mobileCategory === cat.label;
                            return (
                              <div key={cat.label}>
                                <button
                                  type="button"
                                  onClick={() =>
                                    setMobileCategory(
                                      catExpanded ? null : cat.label,
                                    )
                                  }
                                  aria-expanded={catExpanded}
                                  className="w-full flex items-center justify-between px-6 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                                >
                                  <span className="text-sm font-normal">
                                    {cat.label}
                                  </span>
                                  <ChevronDown
                                    className={`w-4 h-4 transition-transform ${
                                      catExpanded ? "rotate-180" : ""
                                    }`}
                                    aria-hidden="true"
                                  />
                                </button>

                                <AnimatePresence>
                                  {catExpanded && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: "auto" }}
                                      exit={{ opacity: 0, height: 0 }}
                                      className="pl-6 space-y-1 overflow-hidden"
                                    >
                                      <div className="py-2">
                                        {cat.items.map((link) => {
                                          const Icon = link.icon;
                                          return (
                                            <a
                                              key={link.href}
                                              href={link.href}
                                              onClick={closeAll}
                                              className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 rounded-lg transition-colors"
                                            >
                                              {Icon && (
                                                <Icon
                                                  className="w-4 h-4 text-primary shrink-0"
                                                  aria-hidden="true"
                                                />
                                              )}
                                              <span className="text-sm text-gray-600">
                                                {link.label}
                                              </span>
                                            </a>
                                          );
                                        })}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              <div className="pt-4 border-t border-gray-100 space-y-3">
                <a
                  href="/contact"
                  onClick={closeAll}
                  className="block w-full px-4 py-3 text-center text-primary font-normal border border-primary rounded-lg hover:bg-primary/5 transition-colors whitespace-nowrap"
                >
                  Contact
                </a>
                <button
                  type="button"
                  onClick={onAskArchI}
                  className="w-full px-4 py-3 bg-primary text-white font-normal rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center space-x-2 whitespace-nowrap"
                >
                  <Sparkles className="w-4 h-4" aria-hidden="true" />
                  <span>
                    Ask Arch
                    <span
                      style={{
                        fontFamily:
                          'Georgia, Cambria, "Times New Roman", Times, serif',
                      }}
                    >
                      I
                    </span>
                  </span>
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
