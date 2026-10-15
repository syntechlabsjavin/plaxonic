
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";

type MenuLink = {
  label: string;
  href: string;
};

type MenuGroup = {
  title: string;
  href?: string;
  icon: string;
  links: MenuLink[];
};

type NavMenu = {
  label: string;
  groups: MenuGroup[];
};

const healthcareGroups: MenuGroup[] = [
  {
    title: "Custom Healthcare Software Development",
    href: "https://www.thinkitive.com/custom-healthcare-software-development.html",
    icon: "/Custom_Healthcare_Software_Development.624aed61.svg",
    links: [
      { label: "EHR EMR Software Development", href: "https://www.thinkitive.com/custom-ehr-software-development.html" },
      { label: "Build Your Own EHR", href: "https://www.thinkitive.com/build-your-own-ehr-emr-software.html" },
      { label: "Hire EHR/EMR Developers", href: "https://www.thinkitive.com/ehr-software-developers.html" },
      { label: "Care Coordination Software Development", href: "https://www.thinkitive.com/care-coordination.html" },
      { label: "Healthcare CRM Software Development", href: "https://www.thinkitive.com/custom-healthcare-crm-software-development.html" },
      { label: "Digital front door & Patient Experience", href: "https://www.thinkitive.com/digital-front-door-patient-experience.html" },
      { label: "Revenue Cycle Management", href: "https://www.thinkitive.com/healthcare/provider/revenue-cycle-management-development-services.html" },
    ],
  },
  {
    title: "Healthcare Interoperability & Integration",
    href: "https://www.thinkitive.com/healthcare/interoperability.html",
    icon: "/Healthcare_Interoperability_Integration.12cfaeca.svg",
    links: [
      { label: "EHR Integration", href: "https://www.thinkitive.com/healthcare/ehr-integration-solutions.html" },
      { label: "FHIR Capabilities / SMART on FHIR", href: "https://www.thinkitive.com/fhir-capabilities.html" },
      { label: "Interface Engine Migration & Modernization", href: "https://www.thinkitive.com/interface-engine-migration-modernization.html" },
      { label: "Medical Devices & Wearable Integrations", href: "https://www.thinkitive.com/medical-devices-wearable-integrations.html" },
      { label: "Labs & ePrescription Integrations", href: "https://www.thinkitive.com/lab-e-prescription-integration.html" },
    ],
  },
  {
    title: "Healthcare AI/ML Solutions",
    href: "https://www.thinkitive.com/ai-driven-healthcare-solutions.html",
    icon: "/Healthcare_AI_Services_Solutions.d68ae14c.svg",
    links: [
      { label: "Healthcare AI Strategy & Consulting", href: "https://www.thinkitive.com/healthcare-ai-strategy-consulting.html" },
      { label: "Healthcare GenAI Services & Solutions", href: "https://www.thinkitive.com/healthcare-generative-ai-solutions.html" },
      { label: "Voice AI & Ambient Scribing Solution", href: "https://www.thinkitive.com/voice-ai-ambient-medical-scribing.html" },
      { label: "Staffing & Scheduling AI Agent", href: "https://www.thinkitive.com/healthcare-staffing-scheduling-ai.html" },
      { label: "AI Medical Nurse Solution", href: "https://www.thinkitive.com/ai-medical-nurse-solution.html" },
      { label: "Medical Coding & Billing AI Automation", href: "https://www.thinkitive.com/medical-coding-billing-ai-automation.html" },
      { label: "AI-Powered Clinical Decision Support", href: "https://www.thinkitive.com/ai-clinical-decision-support-system.html" },
    ],
  },
  {
    title: "Healthcare IT Outsourcing",
    href: "https://www.thinkitive.com/healthcare-technology-services.html",
    icon: "/Healthcare_IT_Outsourcing.d29b4300.svg",
    links: [
      { label: "Dedicated Healthcare Technology Resources", href: "https://www.thinkitive.com/dedicated-healthcare-technology-resources.html" },
      { label: "Healthcare Digital Engineering", href: "https://www.thinkitive.com/healthcare-digital-engineering.html" },
      { label: "Data Engineering & Data on Cloud", href: "https://www.thinkitive.com/data-engineering-cloud-solutions.html" },
      { label: "Healthcare Mobile App Development", href: "https://www.thinkitive.com/healthcare-mobile-app-development.html" },
      { label: "Software Modernization & Evolution", href: "https://www.thinkitive.com/software-modernization-evolution.html" },
    ],
  },
  {
    title: "Custom Healthcare AI-Agent Development",
    href: "https://www.thinkitive.com/custom-healthcare-ai-agent-development.html",
    icon: "/Custom_Healthcare_AI-Agent_Development.86d2d8cd.svg",
    links: [
      { label: "Clinical Documentation AI", href: "https://www.thinkitive.com/ai-ambient-scribe-development.html" },
      { label: "Prior Authorization Automation AI", href: "https://www.thinkitive.com/ai-prior-authorization-automation.html" },
      { label: "Patient Intake & Triage Chatbot", href: "https://www.thinkitive.com/ai-patient-intake-triage.html" },
      { label: "Automated Insurance Eligibility & Benefits Verification", href: "https://www.thinkitive.com/ai-insurance-eligibility-verification.html" },
      { label: "AI-Powered Medical Coding Assistant", href: "https://www.thinkitive.com/ai-medical-coding-automation.html" },
    ],
  },
  {
    title: "Revenue Cycle Management Services",
    href: "https://www.thinkitive.com/healthcare/rcm/revenue-cycle-management-development-services.html",
    icon: "/Revenue_Cycle_Management_Icon.084cac64.svg",
    links: [
      { label: "Medical Billing Services", href: "https://www.thinkitive.com/healthcare/medical-billing-services.html" },
      { label: "Comprehensive RCM Services", href: "https://www.thinkitive.com/healthcare/rcm/comprehensive-rcm.html" },
      { label: "Revenue Leakage & Denial Management", href: "https://www.thinkitive.com/healthcare/rcm/denial-management.html" },
      { label: "AI-Powered RCM Optimization", href: "https://www.thinkitive.com/healthcare/rcm/ai-optimization.html" },
      { label: "RCM for New Practices", href: "https://www.thinkitive.com/healthcare/rcm/new-practices.html" },
    ],
  },
];

const technologyGroups: MenuGroup[] = [
  {
    title: "Software Development Services",
    href: "https://www.thinkitive.com/services/software-development.html",
    icon: "/Software_Development_Services.a1749150.svg",
    links: [
      { label: "Custom Software Development", href: "https://www.thinkitive.com/services/custom-software-development.html" },
      { label: "Hire Dedicated Developer/Teams", href: "https://www.thinkitive.com/services/dedicated-team-hiring.html" },
    ],
  },
  {
    title: "Technology Services",
    href: "https://www.thinkitive.com/services/technology.html",
    icon: "/Technology_Services.d487c6cf.svg",
    links: [
      { label: "UI/UX Design Services", href: "https://www.thinkitive.com/services/uiux.html" },
      { label: "Java Development Services", href: "https://www.thinkitive.com/services/java.html" },
      { label: "Node.js Development Services", href: "https://www.thinkitive.com/services/nodejs.html" },
      { label: "Python Development Services", href: "https://www.thinkitive.com/services/python.html" },
      { label: "PHP Development Services", href: "https://www.thinkitive.com/services/php.html" },
      { label: "ReactJS Development Services", href: "https://www.thinkitive.com/services/reactjs.html" },
      { label: "Angular Development Services", href: "https://www.thinkitive.com/services/angular.html" },
      { label: "AI/GenAI Development Services", href: "https://www.thinkitive.com/services/aiml.html" },
    ],
  },
  {
    title: "Mobile Development Services",
    href: "https://www.thinkitive.com/services/mobile-app-development.html",
    icon: "/Mobile_Development_Services.bb9e1011.svg",
    links: [
      { label: "iOS Development Services", href: "https://www.thinkitive.com/services/ios.html" },
      { label: "Android Development Services", href: "https://www.thinkitive.com/services/android.html" },
      { label: "React Native Development Services", href: "https://www.thinkitive.com/services/reactnative.html" },
      { label: "Flutter Development Services", href: "https://www.thinkitive.com/services/flutter.html" },
    ],
  },
  {
    title: "Software Testing & DevOps Services",
    href: "https://www.thinkitive.com/services/software-testing.html",
    icon: "/Software_Testing_and_DevOps_Services.608695f7.svg",
    links: [
      { label: "Manual QA Services", href: "https://www.thinkitive.com/services/qa.html" },
      { label: "Automation QA Services", href: "https://www.thinkitive.com/services/automation.html" },
    ],
  },
];

const aiGroups: MenuGroup[] = [
  {
    title: "AI Consulting & Strategy",
    href: "https://www.thinkitive.com/ai-consulting-services.html",
    icon: "/AI_Consulting_and_Strategy.27c74dde.svg",
    links: [
      { label: "AI Readiness & Maturity Assessments", href: "https://www.thinkitive.com/ai-consulting-services.html#ai-readiness-and-maturity-assessment" },
      { label: "Use Case Discovery Workshops", href: "https://www.thinkitive.com/ai-consulting-services.html#use-case-discovery-workshops" },
      { label: "AI Roadmaps & Implementation Strategy", href: "https://www.thinkitive.com/ai-consulting-services.html#ai-roadmaps-and-implementation-strategy" },
      { label: "Data Strategy & Governance Planning", href: "https://www.thinkitive.com/ai-consulting-services.html#data-strategy-and-governance-planing" },
      { label: "Tool & Framework Selection", href: "https://www.thinkitive.com/ai-consulting-services.html#tool-and-framework-selection" },
    ],
  },
  {
    title: "Data Engineering & Business Intelligence",
    href: "https://www.thinkitive.com/data-engineering-business-intelligence-solutions.html",
    icon: "/Data_Engineering_and_Business_Intelligence.32449a4b.svg",
    links: [
      { label: "ETL/ELT Pipeline Development", href: "https://www.thinkitive.com/data-engineering-business-intelligence-solutions.html#etl-elt-pipeline-development" },
      { label: "Real-Time Data Processing", href: "https://www.thinkitive.com/data-engineering-business-intelligence-solutions.html#real-time-data-processing" },
      { label: "Data Lakehouse & Data Warehouse Design", href: "https://www.thinkitive.com/data-engineering-business-intelligence-solutions.html#data-lakehouse-and-data-warehouse-design" },
      { label: "ML Data Preparation & Curation Pipelines", href: "https://www.thinkitive.com/data-engineering-business-intelligence-solutions.html#ml-data-preparation-and-curation-pipelines" },
      { label: "Interactive Data Dashboards & Reporting", href: "https://www.thinkitive.com/data-engineering-business-intelligence-solutions.html#interactive-data-dashboards-and-reporting" },
      { label: "KPI Monitoring & Visualization", href: "https://www.thinkitive.com/data-engineering-business-intelligence-solutions.html#kpi-monitoring-and-visualization" },
    ],
  },
  {
    title: "Generative AI Solutions",
    href: "https://www.thinkitive.com/generative-ai-development-solutions.html",
    icon: "/Generative_AI_Solutions.509d9599.svg",
    links: [
      { label: "Custom Large Language Model Fine-Tuning", href: "https://www.thinkitive.com/generative-ai-development-solutions.html#custom-large-language-model-fine-tuning" },
      { label: "Enterprise Chatbot Development", href: "https://www.thinkitive.com/generative-ai-development-solutions.html#enterprise-chatbot-development" },
      { label: "Content Generation Systems", href: "https://www.thinkitive.com/generative-ai-development-solutions.html#content-generation-systems" },
      { label: "Prompt Engineering & Prompt Libraries", href: "https://www.thinkitive.com/generative-ai-development-solutions.html#prompt-engineering-and-prompt-libraries" },
      { label: "Data Augmentation Solutions", href: "https://www.thinkitive.com/generative-ai-development-solutions.html#data-augmentation-solutions" },
      { label: "Code Generation & Assistance Tools", href: "https://www.thinkitive.com/generative-ai-development-solutions.html#code-generation-and-assistance-tools" },
    ],
  },
  {
    title: "AI Agent Development",
    href: "https://www.thinkitive.com/ai-agent-development-solutions.html",
    icon: "/AI_Agent_Development.d2a7ed19.svg",
    links: [
      { label: "Custom AI Agent Development", href: "https://www.thinkitive.com/ai-agent-development-solutions.html#custom-ai-agents-development" },
      { label: "No-Code/Low-Code Agent Development", href: "https://www.thinkitive.com/ai-agent-development-solutions.html#no-code-low-code-agent-development" },
      { label: "Industry-Specific Autonomous Agents", href: "https://www.thinkitive.com/ai-agent-development-solutions.html#industry-specific-autonomous-agents" },
      { label: "Retrieval-Augmented Generation (RAG) Systems", href: "https://www.thinkitive.com/ai-agent-development-solutions.html#retrieval-augmented-generation-system" },
      { label: "Multimodal Agents Development", href: "https://www.thinkitive.com/ai-agent-development-solutions.html#multimodal-agents-development" },
      { label: "Model Context Protocol (MCP) Development", href: "https://www.thinkitive.com/ai-agent-development-solutions.html#model-context-protocol-development" },
    ],
  },
  {
    title: "AI-powered Development (AI Vibe Coding)",
    href: "https://www.thinkitive.com/ai-powered-software-development.html",
    icon: "/AI_powered_Development.61e040f8.svg",
    links: [
      { label: "Code Generation & Review", href: "https://www.thinkitive.com/ai-powered-software-development.html#code-generation-and-review" },
      { label: "Auto-Testing & QA Automation", href: "https://www.thinkitive.com/ai-powered-software-development.html#auto-testing-and-qa-automation" },
      { label: "Low-Code/No-Code AI Dev Accelerators", href: "https://www.thinkitive.com/ai-powered-software-development.html#low-code-no-code-ai-dev-accelerators" },
      { label: "DevOps AI Automation", href: "https://www.thinkitive.com/ai-powered-software-development.html#devops-ai-automation" },
    ],
  },
  {
    title: "AI Transformation Services",
    href: "https://www.thinkitive.com/ai-transformation-services.html",
    icon: "/AI_Transformation_Services.bfa2aba5.svg",
    links: [
      { label: "Digital Workflow Automation with AI", href: "https://www.thinkitive.com/ai-transformation-services.html#digital-workflow-automation-with-ai" },
      { label: "Legacy System Modernization with AI", href: "https://www.thinkitive.com/ai-transformation-services.html#legacy-system-modernization-with-ai" },
      { label: "Custom AI Platform Development", href: "https://www.thinkitive.com/ai-transformation-services.html#custom-ai-platform-development" },
      { label: "AI Integration", href: "https://www.thinkitive.com/ai-transformation-services.html#ai-integration" },
      { label: "Data Annotation, Labeling & Curation Pipelines", href: "https://www.thinkitive.com/ai-transformation-services.html#data-annotation-labeling-and-curation-pipelines" },
    ],
  },
  {
    title: "Industry-Specific AI Solutions",
    href: "https://www.thinkitive.com/industry-specific-ai-solutions.html",
    icon: "/Industry_Specific_AI_Solutions.c49ec409.svg",
    links: [
      { label: "Healthcare", href: "https://www.thinkitive.com/industry-specific-ai-solutions.html#healthcare" },
      { label: "Finance", href: "https://www.thinkitive.com/industry-specific-ai-solutions.html#finance" },
      { label: "Retail", href: "https://www.thinkitive.com/industry-specific-ai-solutions.html#retail" },
      { label: "Logistics", href: "https://www.thinkitive.com/industry-specific-ai-solutions.html#logistics" },
      { label: "Human Resource", href: "https://www.thinkitive.com/industry-specific-ai-solutions.html#human-resource" },
    ],
  },
  {
    title: "AI Application Development & AI Infrastructure",
    href: "https://www.thinkitive.com/ai-application-development-infrastructure.html",
    icon: "/AI_Application_Development_and_AI_Infrastructure.b80cd290.svg",
    links: [
      { label: "Computer Vision Applications", href: "https://www.thinkitive.com/ai-application-development-infrastructure.html#computer-vision-applications" },
      { label: "Natural Language Processing Solutions", href: "https://www.thinkitive.com/ai-application-development-infrastructure.html#natural-language-processing-solutions" },
      { label: "Predictive Analytics Dashboards", href: "https://www.thinkitive.com/ai-application-development-infrastructure.html#predictive-analytics-dashboards" },
      { label: "Document Intelligence Systems", href: "https://www.thinkitive.com/ai-application-development-infrastructure.html#document-intelligence-systems" },
      { label: "Voice & Speech Recognition Applications", href: "https://www.thinkitive.com/ai-application-development-infrastructure.html#voice-and-speech-recognition-applications" },
      { label: "AI Model Deployment & Hosting", href: "https://www.thinkitive.com/ai-application-development-infrastructure.html#ai-model-deployment-and-hosting" },
      { label: "Model Monitoring & Maintenance", href: "https://www.thinkitive.com/ai-application-development-infrastructure.html#model-monitoring-and-maintenance" },
      { label: "Data Security & Compliance for AI", href: "https://www.thinkitive.com/ai-application-development-infrastructure.html#data-security-and-compliance-for-ai" },
    ],
  },
];

const hiTechGroups: MenuGroup[] = [
  {
    title: "Retail e-Commerce",
    href: "https://www.thinkitive.com/industries/retail-and-ecommerce.html",
    icon: "/Retail_e-Commerce.4f6416e7.svg",
    links: [
      { label: "Online e-Commerce Platform", href: "https://www.thinkitive.com/industries/custom-eCommerce-solutions.html" },
      { label: "Retail (POS) Point of Sale System", href: "https://www.thinkitive.com/industries/retail-and-ecommerce.html" },
    ],
  },
  {
    title: "Software Hi-tech",
    href: "https://www.thinkitive.com/industries/software-and-hi-tech.html",
    icon: "/Software_Hi-tech.86ce28b9.svg",
    links: [
      { label: "Quality Engineering & Assurance", href: "https://www.thinkitive.com/services/quality-engineering-and-assurance.html" },
      { label: "Connected Devices & IoT Engineering", href: "https://www.thinkitive.com/services/internet-of-things.html" },
      { label: "Mobile Application Development", href: "https://www.thinkitive.com/services/mobile-app-development.html" },
    ],
  },
];

const exploreGroups: MenuGroup[] = [
  {
    title: "Our Work",
    icon: "/Our_Work.39fb4e0e.svg",
    links: [
      { label: "Blogs", href: "https://www.thinkitive.com/blog/" },
      { label: "Case Studies", href: "/case-studies.html" },
      { label: "Testimonials", href: "/company/testimonials.html" },
    ],
  },
  {
    title: "Company",
    icon: "/Company.c49be026.svg",
    links: [
      { label: "About Us", href: "/company/about-thinkitive.html" },
      { label: "Life @ Thinkitive", href: "/company/life-at-thinkitive.html" },
      { label: "Our Mission & Values", href: "/company/our-values-and-mission.html" },
    ],
  },
];

const menus: NavMenu[] = [
  { label: "Healthcare", groups: healthcareGroups },
  { label: "Technology", groups: technologyGroups },
  { label: "AI Solutions", groups: aiGroups },
  { label: "Hi-Tech", groups: hiTechGroups },
  { label: "Explore", groups: exploreGroups },
];

function MenuGroupCard({
  group,
  onNavigate,
}: {
  group: MenuGroup;
  onNavigate: () => void;
}) {
  return (
    <div className="min-w-0 border-b border-gray-200/80 pb-5 xl:border-b-0 xl:border-r xl:border-gray-200/80 xl:pb-0 xl:pr-5 last:xl:border-r-0">
      <div className="mb-3 flex items-start gap-3">
        <img
          src={group.icon}
          alt=""
          aria-hidden="true"
          width={36}
          height={36}
          className="mt-0.5 h-9 w-9 shrink-0 object-contain"
        />

        <div className="min-w-0">
          {group.href ? (
            <a
              href={group.href}
              onClick={onNavigate}
              className="group flex items-start gap-1 text-[14px] font-semibold leading-6 text-[#1c5a96] transition-colors hover:text-blue-700"
            >
              <span>{group.title}</span>
              <ArrowUpRight
                size={14}
                className="mt-1 shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
              />
            </a>
          ) : (
            <p className="text-[14px] font-semibold leading-6 text-[#1c5a96]">
              {group.title}
            </p>
          )}
        </div>
      </div>

      <ul className="space-y-1.5 pl-0">
        {group.links.map((link) => (
          <li key={`${link.label}-${link.href}`}>
            <a
              href={link.href}
              onClick={onNavigate}
              className="block rounded-md px-2 py-1.5 text-[13px] leading-5 text-gray-600 transition-all hover:bg-blue-50 hover:pl-3 hover:text-[#1c5a96]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ThinkItiveNavbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const closeMenus = () => {
    setActiveMenu(null);
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenus();
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="relative z-50 w-full border-b border-gray-100 bg-white text-gray-900">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-[82px] max-w-[1600px] items-center gap-5 px-4 sm:px-6 lg:px-8 xl:px-12"
        onMouseLeave={() => setActiveMenu(null)}
      >
        {/* Logo */}
        <a
          href="/"
          aria-label="Thinkitive Technologies home"
          className="flex shrink-0 items-center"
          onClick={closeMenus}
        >
          <img
            src="/Thinkitive_Logo.355134ff.svg"
            alt="Thinkitive Technologies"
            width={131}
            height={32}
            className="h-8 w-[131px] object-contain"
          />
        </a>

        {/* Desktop navigation */}
        <div className="ml-auto hidden items-center gap-1 xl:flex">
          {menus.map((menu) => {
            const isOpen = activeMenu === menu.label;

            return (
              <button
                key={menu.label}
                type="button"
                aria-expanded={isOpen}
                aria-controls={`mega-${menu.label.replace(/\s+/g, "-")}`}
                onMouseEnter={() => setActiveMenu(menu.label)}
                onFocus={() => setActiveMenu(menu.label)}
                onClick={() =>
                  setActiveMenu(isOpen ? null : menu.label)
                }
                className={`flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-3 text-[14px] font-medium transition-colors ${
                  isOpen
                    ? "text-[#1c5a96]"
                    : "text-gray-800 hover:text-[#1c5a96]"
                }`}
              >
                {menu.label}
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            );
          })}

          <a
            href="https://www.thinkitive.com/contact.html"
            className="whitespace-nowrap rounded-md px-3 py-3 text-[14px] font-medium text-gray-800 transition-colors hover:text-[#1c5a96]"
          >
            Contact Us
          </a>

          <a
            href="#book-a-call"
            onClick={(event) => {
              event.preventDefault();
              if (typeof window.openCalendlyModal === "function") {
                window.openCalendlyModal();
              } else {
                window.location.href =
                  "https://www.thinkitive.com/contact.html";
              }
            }}
            className="ml-2 inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-md bg-[#1c5a96] px-5 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-[#164574]"
          >
            Book a 30 Min Call
            <ArrowUpRight size={15} className="ml-2" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="ml-auto flex h-11 w-11 items-center justify-center rounded-md border border-gray-200 text-gray-800 transition-colors hover:bg-gray-50 xl:hidden"
        >
          {mobileOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        {/* Desktop mega menu */}
        {menus.map((menu) => (
          <div
            key={menu.label}
            id={`mega-${menu.label.replace(/\s+/g, "-")}`}
            onMouseEnter={() => setActiveMenu(menu.label)}
            className={`absolute left-0 right-0 top-full hidden border-t border-gray-200 bg-white shadow-[0_20px_45px_rgba(15,23,42,0.12)] xl:block ${
              activeMenu === menu.label
                ? "visible opacity-100"
                : "pointer-events-none invisible opacity-0"
            } transition-opacity duration-200`}
          >
            <div className="mx-auto max-h-[calc(100vh-100px)] max-w-[1600px] overflow-y-auto px-6 py-8 lg:px-10 xl:px-12">
              <div
                className={`grid grid-cols-2 gap-x-7 gap-y-8 ${
                  menu.groups.length === 2
                    ? "xl:grid-cols-2"
                    : menu.label === "Hi-Tech"
                      ? "xl:grid-cols-2"
                      : menu.label === "Explore"
                        ? "xl:grid-cols-2"
                        : "xl:grid-cols-4"
                }`}
              >
                {menu.groups.map((group) => (
                  <MenuGroupCard
                    key={group.title}
                    group={group}
                    onNavigate={closeMenus}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </nav>

      {/* Mobile navigation drawer */}
      <div
        className={`absolute left-0 right-0 top-full max-h-[calc(100vh-82px)] overflow-y-auto border-t border-gray-200 bg-white shadow-xl transition-all duration-300 xl:hidden ${
          mobileOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <div className="px-5 py-4 sm:px-8">
          {menus.map((menu) => {
            const expanded = mobileExpanded === menu.label;

            return (
              <div
                key={menu.label}
                className="border-b border-gray-100"
              >
                <button
                  type="button"
                  aria-expanded={expanded}
                  onClick={() =>
                    setMobileExpanded(expanded ? null : menu.label)
                  }
                  className="flex w-full items-center justify-between py-4 text-left text-[15px] font-semibold text-gray-800"
                >
                  {menu.label}
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      expanded ? "rotate-180 text-[#1c5a96]" : ""
                    }`}
                  />
                </button>

                {expanded && (
                  <div className="space-y-6 pb-5">
                    {menu.groups.map((group) => (
                      <div
                        key={group.title}
                        className="rounded-lg border border-gray-100 bg-gray-50/60 p-3"
                      >
                        <div className="mb-2 flex items-start gap-3">
                          <img
                            src={group.icon}
                            alt=""
                            aria-hidden="true"
                            width={30}
                            height={30}
                            className="h-[30px] w-[30px] shrink-0 object-contain"
                          />
                          <div className="pt-1">
                            {group.href ? (
                              <a
                                href={group.href}
                                onClick={closeMenus}
                                className="text-sm font-semibold leading-5 text-[#1c5a96]"
                              >
                                {group.title}
                              </a>
                            ) : (
                              <p className="text-sm font-semibold leading-5 text-[#1c5a96]">
                                {group.title}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="flex flex-col">
                          {group.links.map((link) => (
                            <a
                              key={`${link.label}-${link.href}`}
                              href={link.href}
                              onClick={closeMenus}
                              className="rounded px-2 py-2 text-[13px] leading-5 text-gray-600 hover:bg-blue-50 hover:text-[#1c5a96]"
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <a
            href="https://www.thinkitive.com/contact.html"
            onClick={closeMenus}
            className="block border-b border-gray-100 py-4 text-[15px] font-semibold text-gray-800"
          >
            Contact Us
          </a>

          <a
            href="https://www.thinkitive.com/contact.html"
            onClick={(event) => {
              event.preventDefault();
              closeMenus();

              if (typeof window.openCalendlyModal === "function") {
                window.openCalendlyModal();
              } else {
                window.location.href =
                  "https://www.thinkitive.com/contact.html";
              }
            }}
            className="mt-5 flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#1c5a96] px-5 py-3 text-sm font-semibold text-white hover:bg-[#164574]"
          >
            Book a 30 Min Call
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}